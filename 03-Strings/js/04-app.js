const producto = '               Monitor 20 pulgadas     ';

console.log(producto);
console.log(producto.length);

//Eliminar el espacio del inicio..
console.log( producto.trimStart() );
//Eliminar el espacio del final
console.log( producto.trimEnd() );

//colocar un método y depsues el otro
console.log( producto.trimStart().trimEnd() );

//Elimina en ambas direcciones
console.log(producto.trim())