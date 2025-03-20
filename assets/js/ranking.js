const classifiedStyle = "background-color: green; color: white;";
const skipsStyle = "background-color: orange; color: white;";
const max_classified = 6;

const ranking = {
    "headers": [ "Nombre", "12Uvas", "Reg. AdaByron", "Nac. AdaByron", "Curso CP", "Codeforces", "Clasificatorio", "Puntos" ],
    "rows": [
        {
            "Nombre": { "content": "Jose Manuel Fernández Moreno" },
            "12Uvas": { "content": "-" },
            "Reg. AdaByron": { "content": 10, "position": 3 },
            "Nac. AdaByron": { "content": "" },
            "Curso CP": { "content": "" },
            "Codeforces": { "content": 2 },
            "Clasificatorio": { "content": "" },
            "skips": false
        },
        {
            "Nombre": { "content": "Rodrigo Dueñas Herrero" },
            "12Uvas": { "content": "-" },
            "Reg. AdaByron": { "content": 10, "position": 5 },
            "Nac. AdaByron": { "content": "" },
            "Curso CP": { "content": "" },
            "Codeforces": { "content": 2 },
            "Clasificatorio": { "content": "" },
            "skips": false
        },
        {
            "Nombre": { "content": "Alberto Alegre Burcio" },
            "12Uvas": { "content": "-" },
            "Reg. AdaByron": { "content": 10, "position": 5 },
            "Nac. AdaByron": { "content": "" },
            "Curso CP": { "content": "" },
            "Codeforces": { "content": 1 },
            "Clasificatorio": { "content": "" },
            "skips": false
        },
        {
            "Nombre": { "content": "Lucas Rodríguez Bravo" },
            "12Uvas": { "content": "-" },
            "Reg. AdaByron": { "content": 10, "position": 5 },
            "Nac. AdaByron": { "content": "" },
            "Curso CP": { "content": "" },
            "Codeforces": { "content": 1 },
            "Clasificatorio": { "content": "" },
            "skips": false
        },
        {
            "Nombre": { "content": "Antón Rodríguez Seselle" },
            "12Uvas": { "content": "-" },
            "Reg. AdaByron": { "content": 10, "position": 7 },
            "Nac. AdaByron": { "content": "" },
            "Curso CP": { "content": "" },
            "Codeforces": { "content": 1 },
            "Clasificatorio": { "content": "" },
            "skips": false
        },
        {
            "Nombre": { "content": "Iván Dorado Alegria" },
            "12Uvas": { "content": "-" },
            "Reg. AdaByron": { "content": 10, "position": 3 },
            "Nac. AdaByron": { "content": "" },
            "Curso CP": { "content": "" },
            "Codeforces": { "content": "" },
            "Clasificatorio": { "content": "" },
            "skips": false
        },
        {
            "Nombre": { "content": "Iván Coello Rivera" },
            "12Uvas": { "content": "-" },
            "Reg. AdaByron": { "content": 10, "position": 3 },
            "Nac. AdaByron": { "content": "" },
            "Curso CP": { "content": "" },
            "Codeforces": { "content": "" },
            "Clasificatorio": { "content": "" },
            "skips": false
        },
        {
            "Nombre": { "content": "Jaime Sánchez Vázquez" },
            "12Uvas": { "content": "-" },
            "Reg. AdaByron": { "content": 10, "position": 4 },
            "Nac. AdaByron": { "content": "" },
            "Curso CP": { "content": "" },
            "Codeforces": { "content": "" },
            "Clasificatorio": { "content": "" },
            "skips": false
        },
        {
            "Nombre": { "content": "Pau Calvo Jimenez" },
            "12Uvas": { "content": "-" },
            "Reg. AdaByron": { "content": 10, "position": 4 },
            "Nac. AdaByron": { "content": "" },
            "Curso CP": { "content": "" },
            "Codeforces": { "content": "" },
            "Clasificatorio": { "content": "" },
            "skips": false
        },
        {
            "Nombre": { "content": "Álvaro Fuente González" },
            "12Uvas": { "content": "-" },
            "Reg. AdaByron": { "content": 10, "position": 4 },
            "Nac. AdaByron": { "content": "" },
            "Curso CP": { "content": "" },
            "Codeforces": { "content": "" },
            "Clasificatorio": { "content": "" },
            "skips": false
        },
        {
            "Nombre": { "content": "Ignacio Sánchez Ferrero" },
            "12Uvas": { "content": "-" },
            "Reg. AdaByron": { "content": 10, "position": 6 },
            "Nac. AdaByron": { "content": "" },
            "Curso CP": { "content": "" },
            "Codeforces": { "content": "" },
            "Clasificatorio": { "content": "" },
            "skips": false
        },
        {
            "Nombre": { "content": "Pablo López Arjona" },
            "12Uvas": { "content": "-" },
            "Reg. AdaByron": { "content": 10, "position": 6 },
            "Nac. AdaByron": { "content": "" },
            "Curso CP": { "content": "" },
            "Codeforces": { "content": "" },
            "Clasificatorio": { "content": "" },
            "skips": false
        },
        {
            "Nombre": { "content": "Iván García Martínez" },
            "12Uvas": { "content": "-" },
            "Reg. AdaByron": { "content": 10, "position": 6 },
            "Nac. AdaByron": { "content": "" },
            "Curso CP": { "content": "" },
            "Codeforces": { "content": "" },
            "Clasificatorio": { "content": "" },
            "skips": false
        },
        {
            "Nombre": { "content": "Bernat Roselló Muñoz" },
            "12Uvas": { "content": "-" },
            "Reg. AdaByron": { "content": 10, "position": 7 },
            "Nac. AdaByron": { "content": "" },
            "Curso CP": { "content": "" },
            "Codeforces": { "content": "" },
            "Clasificatorio": { "content": "" },
            "skips": false
        },
        {
            "Nombre": { "content": "Manuel Gutiérrez Castro" },
            "12Uvas": { "content": "-" },
            "Reg. AdaByron": { "content": 10, "position": 7 },
            "Nac. AdaByron": { "content": "" },
            "Curso CP": { "content": "" },
            "Codeforces": { "content": "" },
            "Clasificatorio": { "content": "" },
            "skips": false
        },
        {
            "Nombre": { "content": "Weisheng Zheng" },
            "12Uvas": { "content": "-" },
            "Reg. AdaByron": { "content": "-" },
            "Nac. AdaByron": { "content": "" },
            "Curso CP": { "content": "" },
            "Codeforces": { "content": 2 },
            "Clasificatorio": { "content": "" },
            "skips": false
        }
    ]
}

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

    return data;
}
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

document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('table#clasificacion');
    let data = calcularPuntos(ranking);
    const tabla = crearTablaDesdeJSON(data);
    container.appendChild(tabla);
});