let usuario;
let usuarioEnLS = JSON.parse(localStorage.getItem("usuario"));

if (usuarioEnLS) {
    usuario = usuarioEnLS
} else {
    usuario = prompt("Ingrese su nombre de usuario")
}
