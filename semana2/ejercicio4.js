const {ask} = require ('../helpers/input.js');
function obtenerPromedio(numeros){
    let total = 0;
    for(let i = 0; i < numeros.length; i++){
        total = total + numeros[i];
    }
    const promedio = total / numeros.length;
    return promedio;
}
function obtenerMayor(numeros){
    let mayor = numeros[0];
    for(let i = 0; i < numeros.length; i++){
        if(numeros[i] > mayor){
            mayor = numeros[i];
        }
    }
    return mayor;
}
function obtenerMenor(numeros){
    let menor = numeros[0];
    for(let i = 0; i < numeros.length; i++){
        if(numeros[i] < menor){
            menor = numeros[i];
        }
    }
    return menor;    
}
function resumenEstadistico(numeros){
    const promedio = obtenerPromedio(numeros);
    const mayor = obtenerMayor(numeros);
    const menor = obtenerMenor(numeros);
    return {menor, mayor, promedio};
}
function encuentraVocal(nombres){
    const vocales = ['a','e','i','o','u','á','é','í','ó','ú',];
    const resultado = [];

    for(let i = 0; i < nombres.length; i++){
        const primeraLetra = nombres[i][0].toLowerCase();
        if (vocales.includes(primeraLetra)){
            resultado.push(nombres[i]);
        }
    }
    return resultado;  
}    
async function main() {
    const edades = [20, 18, 25, 30, 22];
    const lista = [5, 18, 10, 30, 15];
    const datos = [70, 80, 90, 30, 40];
    const nombres = ["Hugo", "Oscar", "Paco", "Oralia", "Luis", "Anae"];

    console.log(`Promedio = ${obtenerPromedio(edades)}`)
    console.log(`Promedio = ${obtenerPromedio(lista)}`)
    console.log(`Promedio = ${obtenerPromedio(datos)}`)

    console.log('----------');

    const estadistica = resumenEstadistico(datos);
    console.log(`El resumen estadístico de ${datos}`)
    console.log(`El número menor es ${estadistica.menor}`)
    console.log(`El número mayor es ${estadistica.mayor}`)
    console.log(`El promedio es ${estadistica.promedio}`)

    console.log('----------');

    console.log(`Los nombres que empiezan con vocal son ${encuentraVocal(nombres)}`)
}
main();