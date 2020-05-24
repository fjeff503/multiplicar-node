//requires
const fs = require('fs');
const colors = require('colors');

//funcion para crear el archivo
let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        let data = '';

        //valido
        if (!Number(base)) {
            reject(`El valor de la base ${base} no es un numero`);
            return;
        }
        if (!Number(limite)) {
            reject(`El valor del limite ${limite} no es un numero`);
            return;
        }

        //sacar info que llevara el archivo
        for (let i = 1; i <= limite; i++) {
            data += `${base} x ${i} = ${base*i}\n`
        }

        //crear el doc
        fs.writeFile(`./tablas/Tabla del ${base} con limite ${limite}.txt`, data, (err) => {
            if (err) {
                reject(err);
            };
            resolve(`Tabla del ${base} con limite ${limite}.txt`);
        });
    });
}

//funcion para mostrar la tabla
let mostrarTabla = (base, limite) => {
    //return new Promise((resolve, reject) => {
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} x ${i} = ` + `${base*i}`.red);
    }
    //});
}

let mensaje = mostrarTabla(5, 10);

module.exports = {
    crearArchivo,
    mostrarTabla
}
console.log(mensaje);