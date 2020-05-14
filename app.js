//requireds
const fs = require('fs');

//TIPOS DE REQUIDES
//1 archivos pertenecientes a node
// const fs = require('fs');
//2 paquetes que no son nativos de node que son de otras personas para nosotros
// const fs = require('express');
//3 los archivos creados por nosotros inician por ./ o ../
// /const fs = require('./fs');

let base = 1;
let data = '';
for (let i = 1; i <= 10; i++) {
    data += `${base} * ${i} = ${base*i}\n`;
}

// fs.writeFile('nombre-archivo.txt', lo que deseo almacenar, (err) => {
//     if (err) throw err;
//     console.log('el archivo nombre-archivo.txt ha sido guardado');
//   });

fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
    if (err) throw err;
    console.log(`el archivo tabla-${base}.txt ha sido guardado`);
});