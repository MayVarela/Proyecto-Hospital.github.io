function mostrarMascotas() {
    let mascotas = []
    let localMascotas = localStorage.getItem("mascotas")
    if (localMascotas) {
        mascotas = JSON.parse(localMascotas)
    }
    const tablaMascotas = document.getElementById("tabla-mascotas")
    const cuerpoTabla = tablaMascotas.getElementsByTagName("tbody")[0]

    mascotas.forEach(mascota => {
        let fila = cuerpoTabla.insertRow()
        const celdaNombreMascota = fila.insertCell()
        celdaNombreMascota.textContent= mascota.nombreMascota
        const celdaNombreDueno = fila.insertCell();
        celdaNombreDueno.textContent=mascota.nombreDuenio
        const celdaCedulas = fila.insertCell();
        celdaCedulas.textContent=mascota.cedula
        const celdaEdades = fila.insertCell();
        celdaEdades.textContent=mascota.edadMascota
        const celdaTelefono = fila.insertCell();
        celdaTelefono.textContent=mascota.telefono
        const celdaEspecialidad = fila.insertCell();
        celdaEspecialidad.textContent=mascota.especialidad
        const celdaDoctor = fila.insertCell();
        celdaDoctor.textContent="Por asignar"
    });
}

mostrarMascotas()