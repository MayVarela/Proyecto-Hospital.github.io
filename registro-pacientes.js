const formulario = document.getElementById("registro-pacientes-form")
const paciente = document.getElementById("paciente")
const apellido = document.getElementById("apellido")
const cedula = document.getElementById("cedula")
const edad = document.getElementById("edad")
const telefono = document.getElementById("telefono")
const especialidad = document.getElementById("especialidad")

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const objetopaciente ={
        paciente: paciente.value,
        apellido: apellido.value,
        cedula: cedula.value,
        edad: edad.value,
        telefono: telefono.value,
        especialidad: especialidad.value,
    }
    let pacientes = []
    let localpacientes = localStorage.getItem("pacientes")
    if (localpacientes) {
        pacientes = JSON.parse(localpacientes)
    }
    pacientes.push(objetopaciente)
    localStorage.setItem("pacientes", JSON.stringify(pacientes))
    formulario.reset()
    alert("Paciente registrado con exito")
})