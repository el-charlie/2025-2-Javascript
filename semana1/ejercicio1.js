const {ask} = require ('../helpers/input.js');

async function main() {
    const name = await ask ('¿Cuál es tu nombre?: ');
    const age = Number(await ask ('¿uál es tu edad?: '));
    const food = await ask ('¿Cuál es tu comida favorita?: ');
    const ciudad = await ask ('¿De dónde eres?: ');
console.log(`Hola ${name}, tienes ${age} años. `);
console.log(`¿A poco te gusta ${food} ?`)
console.log(`¿A poco eres de ${ciudad} ?`)
}

main();