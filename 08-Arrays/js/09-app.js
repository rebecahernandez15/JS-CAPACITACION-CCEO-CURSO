const carrito = [
    {nombre: 'Monitor de 27 Pulgadas', precio:500},
    {nombre: 'Televisón', precio:100},
    {nombre: 'Tablet', precio:200},
    {nombre: 'Audifonos', precio:300},
    {nombre: 'Teclado', precio:400},
    {nombre: 'Celular', precio:700},
]

const nuevoArreglo =carrito.map(function (producto) {
console.log(`${producto.nombre} - precio: ${producto.precio}`);
})


const nuevoArreglo2 =carrito.forEach(function (producto) {
console.log(`${producto.nombre} - precio: ${producto.precio}`);
})


console.log(nuevoArreglo);
console.log(nuevoArreglo2);