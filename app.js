const { creararchivo } = require("./helpers/multiplicar");
const argv = require("./configuracion/yarg");

console.clear();

//const base  =3;

creararchivo(argv.b, argv.l, argv.h)
  .then((nombreArchivo) => console.log(nombreArchivo, "creado"))
  .catch((err) => console.log(err));
