import csv
import requests
from time import sleep
from datetime import datetime

START_DATE = datetime(2024, 10, 2)
END_DATE = datetime(2025, 12, 31)
INPUT_CSV = './participants_2425.csv'
OUTPUT_CSV = './output.csv'
API_URL = "https://codeforces.com/api/user.rating?handle={CF_HANDLE}"
MAX_RETRIES = 3
TIMEOUT = 5

def get_contests_between_dates(handle):
    response = requests_with_retries(API_URL.replace("{CF_HANDLE}", handle), handle)
    if response.status_code != 200: return 0
    data = response.json()
    if data['status'] != 'OK': return 0
    contests = data['result']
    count = 0
    for contest in contests:
        contest_date = datetime.fromtimestamp(contest['ratingUpdateTimeSeconds'])
        if START_DATE <= contest_date <= END_DATE \
                and contest['newRating'] > contest['oldRating']:
            count += 1
    return count

def requests_with_retries(url, handle):
    retries = 0
    while retries < MAX_RETRIES:
        try:
            response = requests.get(url)
            break
        except requests.exceptions.ConnectionError as e:
            retries += 1
            print(f"Failed {handle} ({retries}/3). Retring in {TIMEOUT} seconds...")
            sleep(TIMEOUT)
            continue
    return response

def main():
    with open(INPUT_CSV, mode='r') as infile, open(OUTPUT_CSV, mode='w', newline='') as outfile:
        reader = csv.reader(infile)
        writer = csv.writer(outfile)
        writer.writerow(['full_name', 'cf_handle', 'n_contests'])
        processed_names = set()
        next(reader)  # Skip header row
        for row in reader:
            full_name, cf_handle = row
            if full_name in processed_names: print(f"Skipping {full_name}...")
            n_contests = get_contests_between_dates(cf_handle)
            if n_contests == 0:
                print(f"No contests for {full_name} ({cf_handle})")
                continue
            writer.writerow([full_name, cf_handle, n_contests])
            processed_names.add(full_name)
            print(f"Processed {full_name} ({cf_handle}): {n_contests} contests")
            sleep(0.5)

if __name__ == "__main__":
    main()