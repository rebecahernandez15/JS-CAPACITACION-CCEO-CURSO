//Forma imperativa: modifca la varibale original, sobre ella misma modifca los datos
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

carrito.push(producto2);
carrito.push(producto);

const producto3 ={
    nombre:'Teclado',
    precio: 50
}

//unshift para poner al inicio
carrito.unshift(producto3)

console.table(carrito);

