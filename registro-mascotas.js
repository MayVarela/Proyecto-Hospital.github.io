const formulario = document.getElementById("registro-mascotas-form")
const nombreMascota = document.getElementById("mascota")
const nombreDuenio = document.getElementById("duenio")
const cedula = document.getElementById("cedula")
const edadMascota = document.getElementById("edad")
const telefono = document.getElementById("telefono")
const especialidad = document.getElementById("especialidad")

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const mascota ={
        nombreMascota: nombreMascota.value,
        nombreDuenio: nombreDuenio.value,
        cedula: cedula.value,
        edadMascota: edadMascota.value,
        telefono: telefono.value,
        especialidad: especialidad.value,
    }
    let mascotas = []
    let localMascotas = localStorage.getItem("mascotas")
    if (localMascotas) {
        mascotas = JSON.parse(localMascotas)
    }
    mascotas.push(mascota)
    localStorage.setItem("mascotas", JSON.stringify(mascotas))
    formulario.reset()
    alert("Mascota registrado con exito")
})