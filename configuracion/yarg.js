const argv = require('yargs')

  .option('b', {
    alias: 'base',
    demandOption: true,
    type: 'number',
    description: 'el numero base de la multiplacion'
  })
  .option('l', {
      alias: 'listar',
      default : false,
      type: 'boolean',
      description: 'mostrar las multiplicaciones'
  })
  .option('h',{
    alias: 'hasta',
    type : 'number',
    default: 10,
    description: 'limita el numero de resultado'
})
  .check((argv, options) => { //comprueba si el valor es un numero en la base
    if (isNaN(argv.b)) {
      throw "solo se aceptan numeros";
    }
    return true;
  })
  .check((argv, options) => { //comprueba si el valor es un numero en el limite
    if (isNaN(argv.h)) {
      throw "solo se aceptan numeros";
    }
    return true;
  })
  .argv;

  module.exports = argv