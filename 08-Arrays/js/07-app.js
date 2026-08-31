//Forma impreativa de quitar de un arreglo
// .push agrega al final de un arrgealo
const carrito = [];

//Definir un producto
const producto ={
    nombre:'Monito 32 pulgadas',
    precio: 400
}

const producto2 ={
    nombre:'Celular',
    precio: 800
}

const producto4 ={
    nombre:'Teclado',
    precio: 50
}

carrito.push(producto2);
carrito.push(producto);
carrito.push(producto4);

const producto3 ={
    nombre:'Teclado',
    precio: 50
}



//unshift para poner al inicio
carrito.unshift(producto3)
console.table(carrito);

/*
//Eliminar ultimo elemnto de un arreglo
carrito.pop()
console.table(carrito);

//Eliminar del inicio del arreglo
carrito.shift();
conosole.log(carrito);
*/

carrito.splice(3,1);
console.table(carrito);