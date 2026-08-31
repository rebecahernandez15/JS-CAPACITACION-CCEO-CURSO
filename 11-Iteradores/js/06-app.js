//forEach

const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar en Js' ];

pendientes.forEach((pendiente, index) => {
    console.log(`${index}: ${pendiente}`)
})

const carrito = [
    {nombre: 'Monitor de 27 Pulgadas', precio:500},
    {nombre: 'Televisón', precio:100},
    {nombre: 'Tablet', precio:200},
    {nombre: 'Audifonos', precio:300},
    {nombre: 'Teclado', precio:400},
    {nombre: 'Celular', precio:700},
]

const nuevoArreglo = carrito.forEach ( producto => console.log(producto.precio));

const nuevoArreglo2 = carrito.map ( producto => console.log(producto.precio));

console.log(nuevoArreglo);
console.log(nuevoArreglo2);