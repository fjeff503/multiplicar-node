//anipets
let snipets = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

//requires
const funcionArgv = require('yargs')
    .command('guardar', 'Sirve para generar un documento de texto', snipets)
    .command('mostrar', 'Sirve para mostrar la tabla de multiplicar', snipets)
    .help()
    .argv;

//exportar
module.exports = {
    funcionArgv
}