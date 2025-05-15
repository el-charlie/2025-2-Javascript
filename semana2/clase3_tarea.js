
//Contar cuántos de una lista de edades pueden votar

// Crea un arreglo de edades (pedirlo al ususario) ✅
// Recorre el arreglo ✅
// Cuentas cuántos tienen 18 o más 
// Muestra el total  (Hay X personas que pueden votar)

const {ask} = require ('../helpers/input.js');

async function main() {

    let opcion = '';
    let edadVotantes = [];

    while(opcion !=='3'){
        opcion = await ask('Elige la opción deseada: \n1. Agregar edad \n2. Ver listado de edades \n3. Salir \n ->: ');
        if(opcion === '1'){
            let edadNueva = Number(await ask('Teclea la edad :'));
            edadVotantes.push(edadNueva);
            console.log(`Edad agregada`);
        }else if(opcion ==='2'){
            let mayorEdad = 0;
            for(let index = 0; index < edadVotantes.length; index++){
                if(edadVotantes[index] >= 18){
                    mayorEdad = mayorEdad + 1;
                }
            }
            console.log('Listado de edades:', edadVotantes);
            console.log(`Total de personas para votar:`,mayorEdad);
        }else if(opcion ==='3'){
            console.log('¡Hasta luego! ');    
        } else{
            console.log('Opción no válida. ')            
        }
    }
}
main();