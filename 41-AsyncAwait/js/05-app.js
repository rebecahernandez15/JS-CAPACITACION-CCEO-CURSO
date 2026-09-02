function descargarNuevosClientes() {
    return new Promise(resolve => {
        console.log('Descargando clientes....');

        setTimeout(() => {
            resolve('Los clientes fueron descargados');
        }, 5000);
    });
}

function descargarNuevosPedidos() {
    return new Promise(resolve => {
        console.log('Descargando pedidos....');

        setTimeout(() => {
            resolve('Los pedidos fueron descargados');
        }, 3000);
    });
}

const app = async () => {
    try {
        // Promise.all ejecuta ambas descargas en paralelo para optimizar el tiempo de espera
        const respuesta = await Promise.all([descargarNuevosClientes(), descargarNuevosPedidos()]);
        
        console.log(respuesta[0]); // Muestra el resultado de clientes
        console.log(respuesta[1]); // Muestra el resultado de pedidos
    } catch (error) {
        console.log(error);
    }
};

app();