const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true

}

//const nombre= producto.nombre;
//console.log(producto.nombre);

//Destructure
const {disponible} = producto;


console.log(disponible);


//Destructuring con arrglos
const numeros =[10,20,30,40,50];

const[ primero,segundo, ...tercero] = numeros;


console.log(tercero);
