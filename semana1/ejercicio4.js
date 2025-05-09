
const {ask} = require ('../helpers/input.js');
function obtenerMayor (a, b){
    if (a > b){
        return a;
    } else {
        return b;
    }
}
async function main() {
    const num1 = Number(await ask ('Introduce el primer número: '));
    const num2 = Number(await ask ('Introduce el segundo número: '));   
    
    if (num1 === num2){
        console.log ('Los dos números ingresados son iguales')
    }else{
        const resultado = obtenerMayor(num1, num2);
        console.log('El mayor es '+ resultado);
    }   
}
main();