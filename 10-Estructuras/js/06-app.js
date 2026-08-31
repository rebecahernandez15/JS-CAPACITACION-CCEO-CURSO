// operador && verifica que cumpla dos condiciones

const usuario = true;
const puedoPagar=false;

if(usuario && puedoPagar){
    console.log('Si puedes comprar');
}else if(!puedoPagar && !usuario){
    console.log('No no puedes comprar');
}else if(!usuario){
    console.log('Inicia sesion');
}else if(!puedoPagar){
    console.log('Fondos Insuficientes');
}
