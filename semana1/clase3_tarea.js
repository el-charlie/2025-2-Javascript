const {ask} = require ('../helpers/input.js');
async function main() {
    const dia = Number(await ask('Ingresa un número del 1 al 7: '));
    const diaSemana = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

     if (dia >= 1 && dia <= 7){
    console.log(diaSemana[dia - 1]);
    }else {
    console.log('No es un número válido')
    }

    // switch (dia){
    //     case 1:
    //         console.log(diaSemana[0]);
    //         break;
    //     case 2:
    //         console.log(diaSemana[1]);
    //         break;
    //     case 3:
    //         console.log(diaSemana[2]);
    //         break;      
    //     case 4:
    //         console.log(diaSemana[3]);
    //         break;       
    //     case 5:
    //         console.log(diaSemana[4]);
    //         break;   
    //     case 6:
    //         console.log(diaSemana[5]);
    //         break;
    //     case 7:
    //         console.log(diaSemana[6]);
    //         break;   
    // }        
}
main();