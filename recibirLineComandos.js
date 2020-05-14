const { crearArchivo } = require('./multiplicar/multiplicar');

/*RECIBIMOS LOS PARAMETROS POR CONSOLA*/
//se escribiria en line command (node recibirLineComandos --base=5)
let argv = process.argv; //abrimos en los procesos 
let parametro = argv[2]; //tomamos el tercer parametro
let base = parametro.split('=')[1] //tomamos el segundo parametro despues de partirlo


crearArchivo(base).then((resolve) => {
    console.log(`Archivo creado: ${resolve}`);
}).catch((reject) => {
    console.log(reject);
});