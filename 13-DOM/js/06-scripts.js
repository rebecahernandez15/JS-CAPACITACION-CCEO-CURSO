const encabezado = document.querySelector('.contenido-hero h1');
console.log(encabezado);

//console.log(encabezado.innerText); // si ene le css -vissibility : no lo va a encontrar
//console.log(encabezado.innerContent); // si lo va a encontrar
//console.log(encabezado.innerHTML); //se trae el HTML

//const nuevoHeading = 'Nuevo Heading';
//document.querySelector('.contenido-hero h1').textContent = 'nuevo heading';

const imagen = document.querySelector('.card img');
imagen.src = 'img/hacer2.jpg';