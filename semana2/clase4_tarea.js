//📘 Tarea: Análisis de calificaciones
//📝 Instrucciones:
//Crea una función llamada analizarCalificaciones que reciba un arreglo de números (enteros del 0 al 100) que representan calificaciones de estudiantes. La función debe devolver un objeto con la siguiente información:
//Cantidad de aprobados (calificaciones ≥ 70)
//Cantidad de reprobados (calificaciones < 70)
//Promedio general
//La calificación más alta y la más baja

const { ask } = require('../helpers/input.js');

function analizarCalificaciones(numeros) {
    let aprobados = 0;
    let reprobados = 0;
    let suma = 0;
    let max = numeros[0];
    let min = numeros[0];

    for (let i = 0; i < numeros.length; i++) {
        let nota = numeros[i];
        suma += nota;
        if (nota >= 70) {
            aprobados = aprobados + 1;
        } else {
            reprobados = reprobados + 1;
        }
        if (nota > max) max = nota;
        if (nota < min) min = nota;
    }

    let total = 0;
    for (let i = 0; i < numeros.length; i++) {
        total = total + numeros[i];
    }
    const promedio =  total / numeros.length;

    return {
        aprobados,
        reprobados,
        promedio,
        max,
        min
    };
}
async function main() {
    let opcion = '';
    let calificaciones = [];

    while (opcion !== '4') {
        opcion = await ask('Elige la opción deseada: \n1. Agregar calificación \n2. Ver listado de calificaciones \n3. Ver análisis de calificaciones \n4. Salir \n-> ');

        if (opcion === '1') {
            let calificacionNueva = Number(await ask('Teclea la calificación: '));
            if (calificacionNueva >= 0 && calificacionNueva <= 100) {
                calificaciones.push(calificacionNueva);
                console.log('Calificación agregada');
            } else {
                console.log('Ingresa un número entre 0 y 100');
            }
        }else if (opcion === '2'){
            console.log (calificaciones)
        }
        else if (opcion === '3') {
            if (calificaciones.length === 0) {
                console.log('No hay calificaciones registradas.');
            } else {
                let resultado = analizarCalificaciones(calificaciones);
                console.log('\n Análisis de calificaciones:');
                console.log(`Alumnos aprobados: ${resultado.aprobados}`);
                console.log(`Alumnos reprobados: ${resultado.reprobados}`);
                console.log(`Promedio general: ${resultado.promedio}`);
                console.log(`Calificación más alta: ${resultado.max}`);
                console.log(`Calificación más baja: ${resultado.min}`);
                console.log('--------')
            }
        } else if (opcion === '4') {
            console.log('¡Hasta luego!');
        } else {
            console.log('Opción no válida.');
        }
    }
}

main();
