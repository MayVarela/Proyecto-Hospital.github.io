function mostrarMedicos() {
    let medicos = []
    let localMedicos = localStorage.getItem("medicos")
    if(localMedicos){
        medicos = JSON.parse(localMedicos)
    }
    const tablaMedicos = document.getElementById("tabla-medicos")
    const cuerpoTabla = tablaMedicos.getElementsByTagName("tbody")[0]
    medicos.forEach(medico => {
        let fila = cuerpoTabla.insertRow()
        let celdaNombreMedico = fila.insertCell()
        let celdaApellido = fila.insertCell()
        let celdaNumeroCedula = fila.insertCell()
        let celdaEspecialidad = fila.insertCell()
        let celdaConsultorio = fila.insertCell()
        let celdaCorreo = fila.insertCell()
        let celdaPacientes = fila.insertCell()

        celdaNombreMedico.textContent = medico.nombre
        celdaApellido.textContent = medico.apellido
        celdaNumeroCedula.textContent = medico.cedula
        celdaEspecialidad.textContent = medico.especialidad
        celdaConsultorio.textContent = medico.consultorio
        celdaCorreo.textContent = medico.correo
        celdaPacientes.textContent = "Sin asignar"
    });
}

mostrarMedicos()