//crear objeto que llevaran los yargs ya que son los mismos
const comandos = {
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
    .command('guardarTabla', 'guarda el archivo de la tabla de multiplicar', comandos)
    .command('mostrarTabla', 'muestra la tabla de multiplicar', comandos)
    .help()
    .argv;


module.exports = {
    funcionArgv
}