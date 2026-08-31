const nav = document.querySelector('.navegacion');

//registrar un evento
nav.addEventListener('mouseout', () => {
    console.log('saliendo en nav');

    nav.style.backgroundColor = 'transparent';
})

nav.addEventListener('dblclick', () => {
    console.log('entrando en nav');
    nav.style.backgroundColor= 'white';
})

//mouse -similar al click
//click
//dblclcik = doble clcik
//mouseup- cuandosueltas el mouse