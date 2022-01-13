const { describe } = require('yargs');

const argv = require('yargs')
                    .option('b', {
                        alias:'base',
                        type: 'number',
                        demandOption: true,
                        describe: "Esta es la base de la tabla"

                    })
                    .option( 'h' ,{
                        alias: 'hasta',
                        type: 'number',
                        default: 10,
                        describe: "Esta es el numerador de la tabla"
                    })
                    .check( (argv,options) => {
                        if( isNaN(argv.b) || isNaN(argv.h)){
                            throw 'la base y el numerador tienen que ser numeros'
                        }
                        return true;
                    })
                    .option('l', {
                        alias:'listar',
                        type: 'boolean',
                        default: false,
                        describe: 'Lista la tabla'
                    })
                    .argv;

module.exports = argv;

