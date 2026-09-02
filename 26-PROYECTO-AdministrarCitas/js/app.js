// Selectores
const pacienteInput = document.querySelector('#paciente')
const propietarioInput = document.querySelector('#propietario')
const emailInput = document.querySelector('#email')
const fechaInput = document.querySelector('#fecha')
const sintomasInput = document.querySelector('#sintomas')

const formulario = document.querySelector('#formulario-cita')
const formularioInput = document.querySelector('#formulario-cita input[type="submit"]')
const contenedorCitas = document.querySelector('#citas')

// Eventos
pacienteInput.addEventListener('change', datosCita)
propietarioInput.addEventListener('change', datosCita)
emailInput.addEventListener('change', datosCita)
fechaInput.addEventListener('change', datosCita)
sintomasInput.addEventListener('change', datosCita)

formulario.addEventListener('submit', submitCita)

let editando = false

// Objeto de Cita
const citaObj = {
    id: generarId(),
    paciente: '',
    propietario: ''
    // (falta email, fecha, sintomas — ver nota abajo)
}

class Notificacion {
    // No se ve el contenido en tus capturas
}

class AdminCitas {
    constructor() {
        this.citas = []
    }

    agregar(cita) {
        this.citas = [...this.citas, cita]
        this.mostrar()
    }

    editar(citaActualizada) {
        this.citas = this.citas.map( cita => cita.id === citaActualizada.id ? citaActualizada : cita )
        this.mostrar()
    }

    eliminar(id) {
        console.log(id)
        // ⚠️ Incompleta: solo tiene el console.log, falta filtrar this.citas y llamar this.mostrar()
    }

    mostrar() {

        // Limpiar el HTML
        while(contenedorCitas.firstChild) {
            contenedorCitas.removeChild(contenedorCitas.firstChild)
        }

        // Si hay citas
        if(this.citas.length === 0) {
            contenedorCitas.innerHTML = '<p class="text-xl mt-5 mb-10 text-center">No Hay Pacientes</p>'
        }

        // Generando las citas
        this.citas.forEach(cita => {
            const divCita = document.createElement('div');
            divCita.classList.add('mx-5', 'my-10', 'bg-white', 'shadow-md', 'px-5', 'py-10' ,'rounded-xl', 'p-3');

            const paciente = document.createElement('p');
            paciente.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case')
            paciente.innerHTML = `<span class="font-bold uppercase">Paciente: </span> ${cita.paciente}`;

            const propietario = document.createElement('p');
            propietario.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case')
            // (falta el innerHTML de propietario y los elementos email, fecha, sintomas — no se ven en las capturas)

            const btnEditar = document.createElement('button');
            btnEditar.classList.add('py-2', 'px-10', 'bg-indigo-600', 'hover:bg-indigo-700', 'text-white',
                'font-bold', 'uppercase', 'rounded-lg', 'flex', 'items-center', 'gap-2', 'btn-editar');
            btnEditar.innerHTML = 'Editar <svg fill="none" class="h-5 w-5" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>'
            const clone = structuredClone(cita)
            btnEditar.onclick = () => cargarEdicion(clone)

            const btnEliminar = document.createElement('button')
            btnEliminar.classList.add('py-2', 'px-10', 'bg-red-600', 'hover:bg-red-700', 'text-white', 'font-bold',
                'uppercase', 'rounded-lg', 'flex', 'items-center', 'gap-2');
            btnEliminar.innerHTML = 'Eliminar <svg fill="none" class="h-5 w-5" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M10 14l2-2m0 2l2-2 2l-2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>'
            // ⚠️ No tiene onclick asignado — falta algo como: btnEliminar.onclick = () => admin.eliminar(cita.id)

            const contenedorBotones = document.createElement('DIV')
            contenedorBotones.classList.add('flex', 'justify-between', 'mt-10')

            contenedorBotones.appendChild(btnEditar)
            contenedorBotones.appendChild(btnEliminar)

            // Agregar al HTML
            divCita.appendChild(paciente);
            // (falta el resto de los appendChild — no se ven en las capturas)
        })
    }
}

// (falta ver: instanciación de AdminCitas, datosCita, submitCita, cargarEdicion)

function reiniciarObjetoCita() {
    // Reiniciar el objeto
    Object.assign(citaObj, {
        id: generarId(),
        paciente: '',
        propietario: '',
        email: '',
        fecha: '',
        sintomas: ''
    })
}

function generarId() {
    return Math.random().toString(36).substring(2) + Date.now()
}

function cargarEdicion(cita) {
    pacienteInput.value = cita.paciente
    propietarioInput.value = cita.propietario
    emailInput.value = cita.email
    fechaInput.value = cita.fecha
    sintomasInput.value = cita.sintomas

    editando = true

    formularioInput.value = 'Guardar Cambios'
}