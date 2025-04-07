const classifiedStyle = "background-color: green; color: white;";
const skipsStyle = "background-color: orange; color: white;";
const max_classified = 6;

function calcularPuntos(data) {
    data.rows.forEach(row => {
        row.Puntos = { content: 0 };
        let puntos = 0;
        ["Clasificatorio", "Codeforces", "Curso CP", "Nac. AdaByron", "Reg. AdaByron", "12Uvas"].forEach(field => {
            const value = row[field].content;
            if (!isNaN(value) && value !== "" && value !== "-") {
                puntos += parseInt(value, 10);
            }
        });
        row.Puntos.content = puntos;
    });
}

function sortRanking(data) {
    // Helper function to safely get content and handle "-"
    const getContent = (obj) => {
      const content = obj?.content;
      if (typeof content === 'number') {
        return content;
      }
      if (content === '-') {
        return 0; // Treat "-" as the smallest value
      }
      return 0; // Default for null, undefined, or other non-numeric
    };
  
    const getPosition = (obj) => {
      const position = obj?.position;
      return typeof position === 'number' ? position : 0x3f3f3f; // Treat non-numeric/missing as highest
    };

    data.rows.sort((a, b) => {
        // 1. Compare "Puntos" (Descending)
        const puntosDiff = (getContent(b.Puntos) || 0) - (getContent(a.Puntos) || 0);
        if (puntosDiff !== 0) return puntosDiff;
      
        // 2. Compare "Clasificatorio" (Descending)
        const clasifContentDiff = getContent(b.Clasificatorio) - getContent(a.Clasificatorio);
        if (clasifContentDiff !== 0) return clasifContentDiff;
      
        // 3. Compare "Clasificatorio Posicion" (Descending)
        const clasifPosDiff = getPosition(b.Clasificatorio) - getPosition(a.Clasificatorio);
        if (clasifPosDiff !== 0) return -clasifPosDiff;
      
        // 4. Compare "Nac. AdaByron" (Descending)
        const nacContentDiff = getContent(b["Nac. AdaByron"]) - getContent(a["Nac. AdaByron"]);
        if (nacContentDiff !== 0) return nacContentDiff;
      
        // 5. Compare "Nac. AdaByron Posicion" (Descending)
        const nacPosDiff = getPosition(b["Nac. AdaByron"]) - getPosition(a["Nac. AdaByron"]);
        if (nacPosDiff !== 0) return -nacPosDiff;
      
        // 6. Compare "Reg. AdaByron" (Descending)
        const regContentDiff = getContent(b["Reg. AdaByron"]) - getContent(a["Reg. AdaByron"]);
        if (regContentDiff !== 0) return regContentDiff;
      
        // 7. Compare "Reg. AdaByron Posicion" (Descending)
        const regPosDiff = getPosition(b["Reg. AdaByron"]) - getPosition(a["Reg. AdaByron"]);
        if (regPosDiff !== 0) return -regPosDiff;
      
        // 8. Compare "12Uvas" (Descending)
        const uvasContentDiff = getContent(b["12Uvas"]) - getContent(a["12Uvas"]);
        if (uvasContentDiff !== 0) return uvasContentDiff;
      
        // 9. Compare "12Uvas Posicion" (Descending)
        const uvasPosDiff = getPosition(b["12Uvas"]) - getPosition(a["12Uvas"]);
        if (uvasPosDiff !== 0) return -uvasPosDiff;

        // 10. Compare "Codeforces" (Descending)
        const codeforcesDiff = getContent(b.Codeforces) - getContent(a.Codeforces);
        if (codeforcesDiff !== 0) return codeforcesDiff;

        // 11. Compare "Nombre" (Ascending)
        return b.Nombre.content.localeCompare(a.Nombre.content);
      });
}


function crearTablaDesdeJSON(data) {
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');

    // Crear encabezados
    const headerRow = document.createElement('tr');
    data.headers.forEach(header => {
        const th = document.createElement('th');
        th.textContent = header;
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Crear filas de datos
    let classified = 0;
    data.rows.forEach(row => {
        const tr = document.createElement('tr');
        data.headers.forEach(header => {
            const td = document.createElement('td');
            const cellData = row[header];

            td.innerHTML = cellData.content;
            if (cellData.position) {
                td.innerHTML += ` (${cellData.position})`;
            }
            if (header == "Nombre") {
                if (row.skips) 
                    td.setAttribute('style', skipsStyle);
                else if (header == "Nombre" && classified < max_classified) {
                    td.setAttribute('style', classifiedStyle);
                    classified++;
                }
            }

            tr.appendChild(td);
        });
        tbody.appendChild(tr);
    });

    table.appendChild(tbody);
    return table;
}

function loadRankingData(ranking_name) {
    const container = document.querySelector('table#clasificacion');
    // load data from JSON in file
    let ranking = null;
	fetch(`assets/data/${ranking_name}.json`)
        .then(response => response.json())
        .then(data => {
            ranking = data;
            calcularPuntos(ranking);
            //sortRanking(ranking);
            const tabla = crearTablaDesdeJSON(data);
            container.appendChild(tabla);
        });
}
