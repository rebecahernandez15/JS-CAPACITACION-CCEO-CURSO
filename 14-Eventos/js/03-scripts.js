const busqueda = document.querySelector('.busqueda');

bsuqueda.addEventListener('input', (e) => {
    if(e.target.value === ''){
        console.log('fallo la validación')
    }
})
