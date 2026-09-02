const obtenerCliente = () => {
    const nombre = "Rebeca";
    
    function muestraNombre(){
        console.log(nombre);
    }

    return muestraNombre;
}

const cliente = obtenerCliente();

cliente();