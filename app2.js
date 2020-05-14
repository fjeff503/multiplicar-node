//indico que archivos ocupare
//const multiplicar = require('./multiplicar/multiplicar');
const { crearArchivo } = require('./multiplicar/multiplicar');
let base = 'x';

crearArchivo(base).then((nombreArchivo) => {
    console.log(`Archivo creado: ${nombreArchivo}`);
}).catch((error) => {
    console.log(error);
});