const classifiedStyle = "background-color: green; color: white;";
const skipsStyle = "background-color: orange; color: white;";
const max_classified = 6;

const ranking = {
    // Last update: 2025-03-11
    "headers": ["Nombre", "12Uvas", "Reg. AdaByron", "Nac. AdaByron", "Curso CP", "Codeforces", "Clasificatorio", "Puntos"],
    "rows": [
        {
            "Nombre": { "content": "Sara García" },
            "12Uvas": { "content": "5 (14)" },
            "Reg. AdaByron": { "content": "10 (1)" },
            "Nac. AdaByron": { "content": "" },
            "Curso CP": { "content": "" },
            "Codeforces": { "content": "" },
            "Clasificatorio": { "content": "" },
            "Puntos": { "content": "15" },
            "skips": true
        },
        {
            "Nombre": { "content": "Alicia Pina" },
            "12Uvas": { "content": "5 (17)" },
            "Reg. AdaByron": { "content": "10 (1)" },
            "Nac. AdaByron": { "content": "" },
            "Curso CP": { "content": "" },
            "Codeforces": { "content": "" },
            "Clasificatorio": { "content": "" },
            "Puntos": { "content": "15" },
            "skips": true
        },
        {
            "Nombre": { "content": "Raúl Fauste" },
            "12Uvas": { "content": "" },
            "Reg. AdaByron": { "content": "10 (1)" },
            "Nac. AdaByron": { "content": "" },
            "Curso CP": { "content": "" },
            "Codeforces": { "content": "1" },
            "Clasificatorio": { "content": "" },
            "Puntos": { "content": "11" },
            "skips": true
        },
        {
            "Nombre": { "content": "Jose Manuel Fernández Moreno" },
            "12Uvas": { "content": "" },
            "Reg. AdaByron": { "content": "10 (3)" },
            "Nac. AdaByron": { "content": "" },
            "Curso CP": { "content": "" },
            "Codeforces": { "content": "1" },
            "Clasificatorio": { "content": "" },
            "Puntos": { "content": "11" },
            "skips": false
        },
        {
            "Nombre": { "content": "Alberto Alegre Burcio" },
            "12Uvas": { "content": "" },
            "Reg. AdaByron": { "content": "10 (5)" },
            "Nac. AdaByron": { "content": "" },
            "Curso CP": { "content": "" },
            "Codeforces": { "content": "1" },
            "Clasificatorio": { "content": "" },
            "Puntos": { "content": "11" },
            "skips": false
        },
        {
            "Nombre": { "content": "Lucas Rodríguez Bravo" },
            "12Uvas": { "content": "" },
            "Reg. AdaByron": { "content": "10 (5)" },
            "Nac. AdaByron": { "content": "" },
            "Curso CP": { "content": "" },
            "Codeforces": { "content": "1" },
            "Clasificatorio": { "content": "" },
            "Puntos": { "content": "11" },
            "skips": false
        },
        {
            "Nombre": { "content": "Antón Rodríguez Seselle" },
            "12Uvas": { "content": "" },
            "Reg. AdaByron": { "content": "10 (7)" },
            "Nac. AdaByron": { "content": "" },
            "Curso CP": { "content": "" },
            "Codeforces": { "content": "1" },
            "Clasificatorio": { "content": "" },
            "Puntos": { "content": "11" },
            "skips": false
        },
        {
            "Nombre": { "content": "Eva Gómez" },
            "12Uvas": { "content": "" },
            "Reg. AdaByron": { "content": "10 (2)" },
            "Nac. AdaByron": { "content": "" },
            "Curso CP": { "content": "" },
            "Codeforces": { "content": "" },
            "Clasificatorio": { "content": "" },
            "Puntos": { "content": "10" },
            "skips": true
        },
        {
            "Nombre": { "content": "David Orna" },
            "12Uvas": { "content": "" },
            "Reg. AdaByron": { "content": "10 (2)" },
            "Nac. AdaByron": { "content": "" },
            "Curso CP": { "content": "" },
            "Codeforces": { "content": "" },
            "Clasificatorio": { "content": "" },
            "Puntos": { "content": "10" },
            "skips": true
        },
        {
            "Nombre": { "content": "Alejandro Mayoral" },
            "12Uvas": { "content": "" },
            "Reg. AdaByron": { "content": "10 (2)" },
            "Nac. AdaByron": { "content": "" },
            "Curso CP": { "content": "" },
            "Codeforces": { "content": "" },
            "Clasificatorio": { "content": "" },
            "Puntos": { "content": "10" },
            "skips": true
        },
        {
            "Nombre": { "content": "Iván Dorado Alegria" },
            "12Uvas": { "content": "" },
            "Reg. AdaByron": { "content": "10 (3)" },
            "Nac. AdaByron": { "content": "" },
            "Curso CP": { "content": "" },
            "Codeforces": { "content": "" },
            "Clasificatorio": { "content": "" },
            "Puntos": { "content": "10" },
            "skips": false
        },
        {
            "Nombre": { "content": "Iván Coello Rivera" },
            "12Uvas": { "content": "" },
            "Reg. AdaByron": { "content": "10 (3)" },
            "Nac. AdaByron": { "content": "" },
            "Curso CP": { "content": "" },
            "Codeforces": { "content": "" },
            "Clasificatorio": { "content": "" },
            "Puntos": { "content": "10" },
            "skips": false
        },
        {
            "Nombre": { "content": "Jaime Sánchez Vázquez" },
            "12Uvas": { "content": "" },
            "Reg. AdaByron": { "content": "10 (4)" },
            "Nac. AdaByron": { "content": "" },
            "Curso CP": { "content": "" },
            "Codeforces": { "content": "" },
            "Clasificatorio": { "content": "" },
            "Puntos": { "content": "10" },
            "skips": false
        },
        {
            "Nombre": { "content": "Pau Calvo Jimenez" },
            "12Uvas": { "content": "" },
            "Reg. AdaByron": { "content": "10 (4)" },
            "Nac. AdaByron": { "content": "" },
            "Curso CP": { "content": "" },
            "Codeforces": { "content": "" },
            "Clasificatorio": { "content": "" },
            "Puntos": { "content": "10" },
            "skips": false
        },
        {
            "Nombre": { "content": "Álvaro Fuente González" },
            "12Uvas": { "content": "" },
            "Reg. AdaByron": { "content": "10 (4)" },
            "Nac. AdaByron": { "content": "" },
            "Curso CP": { "content": "" },
            "Codeforces": { "content": "" },
            "Clasificatorio": { "content": "" },
            "Puntos": { "content": "10" },
            "skips": false
        },
        {
            "Nombre": { "content": "Rodrigo Dueñas Herrero" },
            "12Uvas": { "content": "" },
            "Reg. AdaByron": { "content": "10 (5)" },
            "Nac. AdaByron": { "content": "" },
            "Curso CP": { "content": "" },
            "Codeforces": { "content": "" },
            "Clasificatorio": { "content": "" },
            "Puntos": { "content": "10" },
            "skips": false
        },
        {
            "Nombre": { "content": "Ignacio Sánchez Ferrero" },
            "12Uvas": { "content": "" },
            "Reg. AdaByron": { "content": "10 (6)" },
            "Nac. AdaByron": { "content": "" },
            "Curso CP": { "content": "" },
            "Codeforces": { "content": "" },
            "Clasificatorio": { "content": "" },
            "Puntos": { "content": "10" },
            "skips": false
        },
        {
            "Nombre": { "content": "Pablo López Arjona" },
            "12Uvas": { "content": "" },
            "Reg. AdaByron": { "content": "10 (6)" },
            "Nac. AdaByron": { "content": "" },
            "Curso CP": { "content": "" },
            "Codeforces": { "content": "" },
            "Clasificatorio": { "content": "" },
            "Puntos": { "content": "10" },
            "skips": false
        },
        {
            "Nombre": { "content": "Iván García Martínez" },
            "12Uvas": { "content": "" },
            "Reg. AdaByron": { "content": "10 (6)" },
            "Nac. AdaByron": { "content": "" },
            "Curso CP": { "content": "" },
            "Codeforces": { "content": "" },
            "Clasificatorio": { "content": "" },
            "Puntos": { "content": "10" },
            "skips": false
        },
        {
            "Nombre": { "content": "Bernat Roselló Muñoz" },
            "12Uvas": { "content": "" },
            "Reg. AdaByron": { "content": "10 (7)" },
            "Nac. AdaByron": { "content": "" },
            "Curso CP": { "content": "" },
            "Codeforces": { "content": "" },
            "Clasificatorio": { "content": "" },
            "Puntos": { "content": "10" },
            "skips": false
        },
        {
            "Nombre": { "content": "Manuel Gutiérrez Castro" },
            "12Uvas": { "content": "" },
            "Reg. AdaByron": { "content": "10 (7)" },
            "Nac. AdaByron": { "content": "" },
            "Curso CP": { "content": "" },
            "Codeforces": { "content": "" },
            "Clasificatorio": { "content": "" },
            "Puntos": { "content": "10" },
            "skips": false
        },
        {
            "Nombre": { "content": "Iván Penedo" },
            "12Uvas": { "content": "5 (112)" },
            "Reg. AdaByron": { "content": "" },
            "Nac. AdaByron": { "content": "" },
            "Curso CP": { "content": "" },
            "Codeforces": { "content": "" },
            "Clasificatorio": { "content": "" },
            "Puntos": { "content": "5" },
            "skips": true
        },
        {
            "Nombre": { "content": "Adaya Ruiz" },
            "12Uvas": { "content": "5 (174)" },
            "Reg. AdaByron": { "content": "" },
            "Nac. AdaByron": { "content": "" },
            "Curso CP": { "content": "" },
            "Codeforces": { "content": "" },
            "Clasificatorio": { "content": "" },
            "Puntos": { "content": "5" },
            "skips": true
        },
        {
            "Nombre": { "content": "Weisheng Zheng" },
            "12Uvas": { "content": "" },
            "Reg. AdaByron": { "content": "" },
            "Nac. AdaByron": { "content": "" },
            "Curso CP": { "content": "" },
            "Codeforces": { "content": "2" },
            "Clasificatorio": { "content": "" },
            "Puntos": { "content": "2" },
            "skips": false
        },
        // {
        //     "Nombre": { "content": "" },
        //     "12Uvas": { "content": "" },
        //     "Reg. AdaByron": { "content": "" },
        //     "Nac. AdaByron": { "content": "" },
        //     "Curso CP": { "content": "" },
        //     "Codeforces": { "content": "" },
        //     "Clasificatorio": { "content": "" },
        //     "Puntos": { "content": "" },
        //     "skips": false
        // },
    ]
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
    const tabla = crearTablaDesdeJSON(ranking);
    container.appendChild(tabla);
});