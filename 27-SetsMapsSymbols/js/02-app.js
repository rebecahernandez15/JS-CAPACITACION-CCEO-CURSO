// WeakSet

const weakset = new WeakSet();

const cliente = {
    nombre: 'Juan',
    saldo: 100
}

weakset.add(cliente);

// console.log(weakset.has(cliente2));

// weakset.delete(cliente);

console.log(cliente.size);

console.log(weakset);


const carrito = new Set();

carrito.add('Camisa');
carrito.add('Disco #1');
carrito.add('Disco #2');
carrito.add('Disco #3');

console.log( carrito.delete('Guitarra') );

// console.log( carrito.has('Guitarra') );

console.log(carrito.size);

carrito.forEach( (producto, index, pertenece) => {
    // console.log(producto);
    // console.log(index);
    console.log(pertenece);
} )

console.log(carrito);


// Del siguiente arreglo, eliminar los duplicados
const numeros = [10,20,30,40,50,10,20];

const noDuplicados = new Set(numeros);

console.log(noDuplicados);