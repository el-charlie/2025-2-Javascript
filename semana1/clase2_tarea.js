const {ask} = require ('../helpers/input.js');
async function main() {
    const temp = Number(await ask ('¿Cuál es la tempratura?: ')); //Ask customer's age
    if (temp <= 10){
        console.log('Hace frío');
    }else if(temp > 10 && temp <= 20){
        console.log('Está templado');
    }else if(temp > 20 && temp <=30){
        console.log('Hace calor');
    }else{
        console.log('Bienvenido al infierno!!');
    }
}
main();