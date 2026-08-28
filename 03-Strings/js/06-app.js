const producto = 'Monitor 20 pulgadas';

//.repeat te va a permitir repetir una cadena de texto...

const texto =' en Promoción'.repeat(3);

console.log(texto);
console.log(`${producto} ${texto} !!!`);

//Split permite dividir un string

const actividad= 'Estoy aprendiendo JavaScript Moderno';
console.log(actividad.split(" "));

const hobbies= 'Leer, cambiar, escuchar música, escribir, aprender a prograamr ';
console.log(hobbies.split(","));

const tweet= 'Aprendiendo Js en #JsModerno';
sonsole.log(tweet.split('#'));