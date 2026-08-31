
const puntaje = 1000;
const puntaje2= '1000';

console.log(typeof puntaje);
console.log(typeof puntaje2);

/*
if(puntaje != 1000){ //diferente != y == es igal a 
    console.log('si es diferente')
}
*/

if(puntaje !== '1000'){ //diferente != y == es igal a 
    console.log('si es diferente')
}else{
    console.log('no es diferente')
}

// == operador no estricto
// === operador estricto