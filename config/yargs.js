//listamos las propiedades ya que se repiten
const opciones = {
    base: { //objeto que intrducira el usuario
        demand: true, //es obligatorio
        alias: 'b' //shortcut para la persona -b
    },
    limite: {
        alias: 'l',
        default: 10 //para que tenga un valor si la persona no lo define
    }
}

//importamos la libreria de yargs
const funcionArgv = require('yargs')
    //mandamos los comados que se pueden recibir
    //llevara nombre del comando, descripcion, objeto(lo que la persona escribira)
    .command('listar', 'Imprime en consola la tabla de multiplicar', opciones)
    .command('crear', 'Genera un archivo con la tabla de multiplicar', opciones)
    .help() //agrega la informacion de nuestro comando
    .argv;

module.exports = {
    funcionArgv
};