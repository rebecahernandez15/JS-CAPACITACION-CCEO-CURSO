const enlace = document.createElement('A');

// Agregandole el texto
enlace.textContent = 'Nuevo Enlace';

// añadiendo href
enlace.href = '/nuevo-enlace';

console.log(enlace);

enlace.target = "_blank";

enlace.setAttribute('data-enlace', 'nuevo-enlace')

enlace.classList.add('alguna-clase')

enlace.onclick = miFuncion;


// Seleccionar la navegacion
const navegacion = document.querySelector('.navegacion');
// console.log(navegacion.children);
navegacion.insertBefore(enlace, navegacion.children[1]);

function miFuncion(){
    alert('Diste click')
}

//CREAR CARD
const parrafo1 = document.createElement('P');
parrafo1.textContent = 'Concierto de Rock';
parrafo1.classList.add('titulo');

const parrafo2 = document.createElement('P');
parrafo2.textContent = 'Concierto';
parrafo2.classList.add('categoria', 'concierto');


const parrafo3 = document.createElement('P');
parrafo3.textContent = '800 por persona';
parrafo3.classList.add('precio');

//Crear div con la clase de info
const info = document.createElement('div');
info.classList.add('info');
info.appendChild(parrrafo1)
info.appendChild(parrrafo2)
info.appendChild(parrrafo3)

// Crear la imagen
const imagen = document.createElement('img');
imagen.src = 'img/hacer2.jpg';

// Crear el card
const card = document.createElement('div');
card.classList.add('card');

// Asignar la imagen
card.appendChild(imagen);

// asignar info
card.appendChild(info);

//Insertar en el html
const contenedor = document.querySelector('.hacer .contenido-cards');
contenedor.insertBefore(card, contenedor.children[0]);

