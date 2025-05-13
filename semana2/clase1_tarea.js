
// Tarea: Imprimir números pares del 1 al 100

const {ask} = require ('../helpers/input.js');

async function main() {
    const limite = 100

    for (let i = 2; i <= limite; i++){
        console.log(i++);
    }
}
main();