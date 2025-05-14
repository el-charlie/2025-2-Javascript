const {ask} = require ('../helpers/input.js');

async function main() {
    
    let opcion = '';
    let frutas = [];

    while(opcion !=='4'){
        opcion = await ask('Elige una opción: \n1. Agregar una fruta \n2. Eliminar una fruta \n3. Ver lista de frutas \n4. Salir\n -: ');
        if (opcion === '1'){
        //Agregar    
            let frutaNueva = await ask('¿Qué fruta deseas agregar?: ');
            frutas.push(frutaNueva);
            console.log(`Fruta agregada: ${frutaNueva}`);
        }else if (opcion === '2'){
        //Eliminar
            if(frutas.length === 0){
                console.log('No hay frutas disponibles. ');
                continue;
            }else{
                let frutaEliminar = await ask('¿Qué fruta deseas eliminar?: ');
                let index = frutas.indexOf(frutaEliminar);

                if (index !== -1){
                    frutas.splice(index,1);
                    console.log(`${frutaEliminar} ha sido eliminada. `)
                }else {
                    console.log('Fruta no encontrada');
                }
            }
        }else if(opcion === '3'){
        //Ver listado
            console.log('Frutas disponibles: ', frutas);    
        }else if (opcion === '4'){
        //Salir
            console.log('¡Hasta luego! ');    
        } else{
            console.log('Opción no válida. ')
        }
    }
}
main();