//For of: itera sobre arreglos
const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar en Js' ];

const carrito = [
    {nombre: 'Monitor de 27 Pulgadas', precio:500},
    {nombre: 'Televisón', precio:100},
    {nombre: 'Tablet', precio:200},
    {nombre: 'Audifonos', precio:300},
    {nombre: 'Teclado', precio:400},
    {nombre: 'Celular', precio:700},
]

for(let pendiente of pendientes ){
    console.log(pendiente);
}

for (let producto of carrito){
    console.log(producto.nombre);
}