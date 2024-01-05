/* Usuarios */

const Usuarios = [
    {
        nombre: "Andres",
        correo: "andres@correo.com",
        genero: "Masculino",
        password: "andres123"
    },
    {
        nombre: "Juanky",
        correo: "juanky@correo.com",
        genero: "Masculino",
        password: "lindo999"
    },
    {
        nombre: "Valeria",
        correo: "valeria@correo.com",
        genero: "Femenino",
        password: "vale123"
    }
]


function validacionUsuarion() {
    const correo = document.getElementById("floatingInput");
    const password = document.getElementById("floatingPassword");

    if (correo.value != "") {
        correo.classList.add("is-valid");
        correo.classList.remove("is-invalid");
    }
    else {
        correo.classList.remove("is-valid");
        correo.classList.add("is-invalid");
    }
    if (password.value != "") {
        password.classList.add("is-valid");
        password.classList.remove("is-invalid");
    }
    else {
        password.classList.remove("is-valid");
        password.classList.add("is-invalid");
    }
    Usuarios.forEach((usuario) => {
        if (usuario.correo == correo.value && usuario.password == password.value) {
            sessionStorage.setItem("Usuario", usuario.nombre);
            if (usuario.genero == "Masculino") {
                location.href = "home.html"
                sessionStorage.setItem("Genero", usuario.genero);
            }
            else {
                location.href = "home.html"
                sessionStorage.setItem("Genero", usuario.genero);
            }
        }
    });
}