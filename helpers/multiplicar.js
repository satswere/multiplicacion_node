const fs = require ('fs');
const colors = require('colors');


const creararchivo = async (numero,puede_mostrar,limite) => {
    let html_table = "";
    html_table +=
`============================
    La tabla del : ${numero}
============================`.green;

  for (let x = 1; x <= limite; x++) {
    html_table += `
    ${numero} * ${x} = ${numero * x}`;
  }

if (puede_mostrar) console.log(html_table);
 
  fs.writeFileSync(`./tablas/Tabla-${numero}.txt`,html_table);
  return `tabla-${numero}.txt`;
};


module.exports = {
    creararchivo
}