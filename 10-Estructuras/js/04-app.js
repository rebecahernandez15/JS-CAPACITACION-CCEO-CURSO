//Operador mayor que y menor que

const dinero = 300;
const totalAPagar = 300;
const tarjeta = false;
const cheque= false;

if(dinero >= totalAPagar){
    console.log('si podemos pagar');
}else if(tarjeta){
    console.log('Si puedo pagar con tarjeta');
}else if(tarjeta){
    console.log('Si puedo pagar con cheque');
}else{
    console.log('Fondos Insuficientes');
}