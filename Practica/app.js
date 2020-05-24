//requires
//para utilizar las funciones
const { crearArchivo, mostrarTabla } = require('./multiplicar/multiplicacion');
//para 
const argv = require('./config/yargs').funcionArgv;
//esto me devuelve el comando digitado
let comando = argv._[0];

//validamos que hara segun que comando
switch (comando) {
    case 'mostrarTabla':
        mostrarTabla(argv.base, argv.limite);
        break;

    case 'guardarTabla':
        crearArchivo(argv.base, argv.limite).then((resolve) => {
            console.log(`Se creo ${resolve}`);

        }).catch((reject) => {
            console.log(reject);
        });
        break;

    default:
        console.log('Comando no reconocido');
        break;
}