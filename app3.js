//importamos los comando que podemos ejecutar(yargs)
const argv = require('./config/yargs').funcionArgv;
//para poner colores xD
const colors = require('colors');

//importamos la creacion del archivo
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
let comando = argv._[0];

//extraemos el comado que se digite
switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite).then((resolve) => {
            console.log(`Archivo creado: ${resolve}`);
        }).catch((reject) => {
            console.log(reject);
        });
        break;
    default:
        console.log('Comando no reconocido');
}