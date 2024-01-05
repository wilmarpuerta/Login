const user = sessionStorage.getItem("Usuario");
const gender = sessionStorage.getItem("Genero");
const nameUser = document.getElementById("nameUser");

if (!user) {
    location.href = "index.html";
    alert("Inicia sesion primero");
}
else {
    nameUser.innerText = user;
}

if (gender == "Masculino") {
    document.body.style.backgroundColor = "black";
}
else {
    document.body.style.backgroundColor = "pink";
}

function singOut() {
    sessionStorage.clear();
    location.href = "index.html";
}