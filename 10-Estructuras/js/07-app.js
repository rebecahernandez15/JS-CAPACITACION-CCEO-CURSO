// or revisa si se cumple un de las dos condiciones

const efectivo = 300;
const credito = 1000;
const disponible = efectivo + credito;
const totalPagar = 600;

if(efectivo > totalPagar || credito > totalPagar || disponible > totalPagar ){
    console.log('Si podemos pagar');
}else{
    console.log('Fondos Insuficintes');
}