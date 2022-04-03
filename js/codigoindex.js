let nombreIngresado = prompt("Ingrese su nombre");
let apellidoIngresado = prompt("Ingrese su apellido");
if ((nombreIngresado != "") && (apellidoIngresado != "")) {
  alert("¡Hola " + nombreIngresado + " " + apellidoIngresado+"!");
} else {
  alert("Error: Ingresar nombre y apellido");
}

let nombreUsuario = prompt("Ingrese su usuario:"); //andrea
let contrasenaIngresada = prompt("Ingrese su contraseña:"); //1111

alert(`${nombreIngresado} Corrobore los datos por favor.`)

let usuario = '';
let pass = '';
let intentos = 3;

function login(nombreUsuario, contrasenia, intentos) {
  if (!(nombreUsuario === '' && contrasenia === '')) {
    while (intentos > 0 && (intentos != 0 && nombreUsuario !== usuario || contrasenia !== pass)) {

      usuario = prompt("Ingrese su usuario:"); //andrea
      pass = prompt("Ingrese su contraseña:"); //1111
      
      if(usuario === nombreUsuario && pass === contrasenia) {
        alert("¡Bienvenid@! Acceso permitido");
      }else {
        alert(`Usuario o contraseña incorrectos. Por favor vuelva a intentarlo, te quedan ${intentos--} intentos.`);
      }
    }
  }
}
login(nombreUsuario, contrasenaIngresada, intentos)