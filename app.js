const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

require('colors'); 


console.clear();

// console.log( process.argv );
// console.log( argv );--------

crearArchivo( argv.b, argv.l, argv.h)
    .then( nombrearchivo => console.log(nombrearchivo.rainbow, 'creado') )
    .catch( err => console.log( err ) );

