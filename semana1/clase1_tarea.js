const {ask} = require ('../helpers/input.js');

async function main() {
    const num1 = Number(await ask ('Digita el primer número: '));
    const num2 = Number(await ask ('Digita el segundo número: '));
    const oper = Number(await ask ('Selecciona operador: Suma(1) | Resta (2) | Multiplicación (3) | División (4): '))

    if(oper === '+'){
        console.log(num1 + num2);
    }else if(oper === 2){
        console.log(num1 - num2);
    }else if(oper === 3){
        console.log(num1 * num2);
    }else if(oper === 4){
        console.log(num1 / num2);
    }else{
        console.log('Operador no válido')
    }
//console.log(`La suma de ${num1} y ${num2} es igual a ${num1 + num2}`);
//console.log(`La resta de ${num1} y ${num2} es igual a ${num1 - num2}`);
//console.log(`La multiplicación de ${num1} y ${num2} es igual a ${num1 * num2}`);
//console.log(`La división de ${num1} y ${num2} es igual a ${num1 / num2}`);

}
main();


