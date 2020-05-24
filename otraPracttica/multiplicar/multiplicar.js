//requires
const fs = require('fs');
const colors = require('colors');

//funcion para guardar
let guardarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base} x ${i} = ${base*i}\n`;
        };

        fs.writeFile(`./tablas/tabla del ${base} con limite ${limite}.txt`, data, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(`tabla del ${base} con limite ${limite}.txt`);
            }
        });
    });

};

//funcion para mostrar
let mostrarTabla = (base, limite) => {
    let resultado = '';
    for (let i = 1; i <= limite; i++) {
        resultado += `${base} x ${i} = ${base*i}\n`;
    }
    console.log(`====================\n====Tabla del ${base}====\n====================`.green);

    console.log(resultado);
};

//exportar las funciones
module.exports = {
    guardarTabla,
    mostrarTabla
}