
iniciarApp();


function iniciarApp(){
    console.log('Iniciando App...');

    segundaFuncion();
}

function segundaFuncion(){
    console.log('Desde la segunda función');
    usuarioAutenticado('Rebeca');
}

function usuarioAutenticado(usuario){
    console.log('Autenticando usuario ... espere...');
    console.log(`Usario autenticado exitosamente...: ${usuario}`);
}