
// Tarea: Imprimir números pares del 1 al 100

const {ask} = require ('../helpers/input.js');

async function main() {
    const limite = 100

    // for (let i = 2; i <= limite; i++){
    //     console.log(i++);
    // }
    console.log('De dos en dos');
    for (let i = 2; i <= limite; i = i + 2){
        console.log(i);
    }    
    let tope = Number(await ask('¿Hasta qué número quieres llegar?: '));
    let numeros = Number(await ask('¿De cuánto en cuánto quieres contar?: '));

    for  (let j = 0; j <= tope; j = j + numeros){
        console.log(j);
    }

}
main();