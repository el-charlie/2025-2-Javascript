const {ask} = require ('../helpers/input.js');

async function main() {
    const num1 = Number(await ask ('Digita el primer número: '));
    const num2 = Number(await ask ('Digita el segundo número: '));

console.log(`La suma de ${num1} y ${num2} es igual a ${num1 + num2}`);
console.log(`La resta de ${num1} y ${num2} es igual a ${num1 - num2}`);
console.log(`La multiplicación de ${num1} y ${num2} es igual a ${num1 * num2}`);
console.log(`La división de ${num1} y ${num2} es igual a ${num1 / num2}`);

}

main();