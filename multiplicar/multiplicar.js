//requireds
const fs = require('fs');
//para poner colores xD
const colors = require('colors');


let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        //validar que sea numero
        if (!Number(base)) {
            reject(`El valor ${base} no es un numero`);
            //para la ejecucion
            return;
        }
        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }
        // fs.writeFile('nombre-archivo.txt', lo que deseo almacenar, (err) => {
        //     if (err) throw err;
        //     console.log('el archivo nombre-archivo.txt ha sido guardado');
        //   });
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(`tabla-${base}.txt`.green + ` del 1 al ${limite}`);
            }
        });
    });
}

let listarTabla = (base, limite) => {
    let resultado = '';
    for (let i = 1; i <= limite; i++) {
        resultado += `${base} x ${i} = ${base*i}\n`;
    }
    console.log(`====================\n=Tabla del ${base}=\n====================`.green);

    console.log(resultado);
}

//aqui exportamos el archivo
module.exports = {
    // crearArchivo : crearArchivo
    crearArchivo,
    listarTabla
}