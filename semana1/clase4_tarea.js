// > Pedir al ususario su fecha de nacimiento
// 1. Mostrar los días equivalentes a la edad
// 2. Mostrar los meses equivalentes a la edad
// 3. Mostrar los años del usuario

const {ask} = require ('../helpers/input.js');

function diffDays(actualDate, bdDate){  //diferencia en días
    const diff = actualDate - bdDate;
    const edadEnDias = Math.floor(diff/(1000*60*60*24));
    return edadEnDias;
}
function diffMonths(actualDate, bdDate){  //diferencia en meses
    const diff = actualDate - bdDate;
    const edadEnAnos = Math.floor(diff/(1000*60*60*24*30.1));
    return edadEnAnos;
}
function diffYears(actualDate, bdDate){  //diferencia en años
    const diff = actualDate - bdDate;
    const edadEnMeses = Math.floor(diff/(1000*60*60*24*365));
    return edadEnMeses;
}
async function main() {
    const actualDate = new Date();
    const bdDay = await ask ('¿Cuál es tu día de nacimiento?: '); 
    const bdMonth = await ask ('¿Cuál es tu mes de nacimiento?: ');     
    const bdYear = await ask ('¿Cuál es tu año de nacimiento?: '); 
    const bdDate = new Date(`${bdYear}-${bdMonth}-${bdDay}`);

    console.log('Has vivido aproximadamente '+`${diffDays(actualDate, bdDate)} días, `+`${diffMonths(actualDate, bdDate)} meses, `+`${diffYears(actualDate, bdDate)} años`)  
//    console.log('Has vivido aproximadamente '+`${diffMonths(actualDate, bdDate)} meses`)  
//    console.log('Has vivido aproximadamente '+`${diffYears(actualDate, bdDate)} años`)  
}
main();