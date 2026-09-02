import { pacienteInput, propietarioInput, emailInput, fechaInput, sintomasInput, formulario } from './selectores.js';
import { citaObj } from './variables.js';
import AdminCitas from './classes/AdminCitas.js';
import Notificacion from './classes/Notificacion.js';

const administrarCitas = new AdminCitas();

export function datosCita(e) {
    citaObj[e.target.id] = e.target.value;
}

export function submitCita(e) {
    e.preventDefault();

    const { paciente, propietario, email, fecha, sintomas } = citaObj;

    if(paciente === '' || propietario === '' || email === '' || fecha === '' || sintomas === '') {
        new Notificacion({
            texto: 'Todos los campos son obligatorios',
            tipo: 'error'
        });
        return;
    }

    if(citaObj.editando) {
        administrarCitas.editar({...citaObj});

        new Notificacion({
            texto: 'Guardado Correctamente',
            tipo: 'correcto'
        });

        formulario.querySelector('button[type="submit"]').textContent = 'Registrar Paciente';
    } else {
        citaObj.id = Date.now();

        administrarCitas.agregar({...citaObj});

        new Notificacion({
            texto: 'Se agregó correctamente',
            tipo: 'correcto'
        });
    }

    reiniciarObjetoCita();
    formulario.reset();
}

function reiniciarObjetoCita() {
    citaObj.id = '';
    citaObj.paciente = '';
    citaObj.propietario = '';
    citaObj.email = '';
    citaObj.fecha = '';
    citaObj.sintomas = '';
    citaObj.editando = false;
}

export function cargarEdicion(cita) {
    const { paciente, propietario, email, fecha, sintomas, id } = cita;

    citaObj.id = id;
    citaObj.paciente = pacienteInput.value = paciente;
    citaObj.propietario = propietarioInput.value = propietario;
    citaObj.email = emailInput.value = email;
    citaObj.fecha = fechaInput.value = fecha;
    citaObj.sintomas = sintomasInput.value = sintomas;

    citaObj.editando = true;

    formulario.querySelector('button[type="submit"]').textContent = 'Guardar Cambios';
}