(function() {
    let DB;

    const nombreInput = document.querySelector('#nombre');
    const emailInput = document.querySelector('#email');
    const telefonoInput = document.querySelector('#telefono');
    const empresaInput = document.querySelector('#empresa');

    const formulario = document.querySelector('#formulario');
    formulario.addEventListener('submit', actualizarCliente);

    // Verificar el ID de la URL
    const parametrosURL = new URLSearchParams(window.location.search);
    const idCliente = parametrosURL.get('id');

    document.addEventListener('DOMContentLoaded', () => {
        conectarDB();

        if(idCliente) {
            setTimeout(() => {
                obtenerCliente(idCliente);
            }, 1000);
        }
    });

    function obtenerCliente(id) {
        const transaction = DB.transaction(['crm'], 'readonly');
        const objectStore = transaction.objectStore('crm');

        const cliente = objectStore.openCursor();
        cliente.onsuccess = function(e) {
            const cursor = e.target.result;

            if(cursor) {
                if(cursor.value.id === Number(id)) {
                    llenarFormulario(cursor.value);
                }
                cursor.continue();
            }
        }
    }

    function llenarFormulario(datosCliente) {
        const { nombre, email, telefono, empresa } = datosCliente;

        nombreInput.value = nombre;
        emailInput.value = email;
        telefonoInput.value = telefono;
        empresaInput.value = empresa;
    }

    function conectarDB() {
        const abrirConexion = window.indexedDB.open('crm', 1);

        abrirConexion.onerror = function() {
            console.log('Hubo un error');
        };

        abrirConexion.onsuccess = function() {
            DB = abrirConexion.result;
        };
    }

    function actualizarCliente(e) {
        e.preventDefault();

        // Actualizar cliente
        const clienteActualizado = {
            nombre: nombreInput.value,
            email: emailInput.value,
            empresa: empresaInput.value,
            telefono: telefonoInput.value,
            id: Number(idCliente)
        };

        const transaction = DB.transaction(['crm'], 'readwrite');
        const objectStore = transaction.objectStore('crm');

        objectStore.put(clienteActualizado);

        transaction.oncomplete = function() {
            imprimirAlerta('Editado Correctamente');

            setTimeout(() => {
                window.location.href = 'index.html';
            }, 3000);
        };

        transaction.onerror = function() {
            imprimirAlerta('Hubo un error', 'error');
        }
    }

    function imprimirAlerta(mensaje, tipo) {
        const alerta = document.querySelector('.alerta');

        if(!alerta) {
            const divMensaje = document.createElement('div');
            divMensaje.classList.add('px-4', 'py-3', 'rounded', 'max-w-lg', 'mx-auto', 'mt-6', 'text-center', 'border', 'alerta');

            if(tipo === 'error') {
                divMensaje.classList.add('bg-red-100', 'border-red-400', 'text-red-700');
            } else {
                divMensaje.classList.add('bg-green-100', 'border-green-400', 'text-green-700');
            }

            divMensaje.textContent = mensaje;

            formulario.appendChild(divMensaje);

            setTimeout(() => {
                divMensaje.remove();
            }, 3000);
        }
    }

})();