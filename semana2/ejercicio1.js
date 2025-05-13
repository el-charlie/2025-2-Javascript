const {ask} = require ('../helpers/input.js');

function saludar (nombre) {
    console.log(`Hola estimado(a) ${nombre}. Un gusto en saludarte...`);
}    
async function main() {
    let limite = Number(await ask("¿Hasta qué número quieres contar? :"))
    let i = 0;

    while (i <= limite){
        console.log(i);
        i++
    }

    i = limite;
    while (i => 0){
        console.log(i);
        i--
    }
    const personas = [
        "Carlos",
        "Luis",
        "Karla",
        "Sofia",
        "Jose",
        "Daniela",
        "Alfredo",
        "María"
    ];
     for (let i = 0; i < personas.length; i++){
     saludar(personas[i]);
}
    console.log("forEach")
    personas.forEach((personas) => saludar(personas));

    const frutas = ['fresas', 'mangos', 'kiwis', 'manzanas', 'uvas'];
    const cajon = Number(await ask('¿Qué cajón quieres abrir (1-5)? :'));

    for(let j = 1; j <= 5; j++){
        if(j === cajon){
            console.log("En el cajón hay" , frutas[j-1])
        }
    }    
}
main();