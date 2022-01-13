const fs = require('fs');
require('colors');

const crearArchivo = async (base ,  numerador ,l ) => {

    try {
        let salida, consola = '';
        if (l) {
            console.log(`==============================`.cyan);
            console.log(`Tabla de el ${base}`.green);
            console.log(`==============================`.cyan);

            

            for (let index = 1; index <= numerador; index++) {
                salida += `${base}x${index} = ${base * index}\n`.grey;
                consola += `${base}x${index} = ${base * index}\n`;
            }

            console.log(salida);
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, consola);

        return (`tabla de ${base}`.blue)

    } catch (error) {
        throw error;
    }
}

module.exports = {
    crearArchivo: crearArchivo
}