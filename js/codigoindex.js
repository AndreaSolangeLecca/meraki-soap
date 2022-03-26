
let nombreIngresado   = prompt("Ingrese su nombre");
let apellidoIngresado = prompt("Ingrese su apellido");
if((nombreIngresado !="") && (apellidoIngresado !="")){
    alert("Bienvenid@ "+nombreIngresado + " " +apellidoIngresado); 
}else{
    alert("Error: Ingresar nombre y apellido");
}

let contrasenaIngresada = prompt("Ingrese su contraseña");
while(contrasenaIngresada !="1111"){
    alert("Contraseña incorrecta");
    contrasenaIngresada = prompt("Ingrese su contraseña");
}

let numeroProductos = prompt("¿Cuantos jabones saponificados queres comprar?");
let i = 0;
let precioJabon = parseInt(260);
let resultado = 0;
while (i != numeroProductos) {
  i++;

  if (numeroProductos <= 0 || isNaN(numeroProductos) || numeroProductos > 20) {
    numeroProductos = prompt(`"${numeroProductos}" No es un numero valido.
      Por favor ingresa cuantos jabones saponificados queres comprar`);
  } else {
    resultado = i * precioJabon;
    if (i != numeroProductos) {
      continue;
    }

    alert(`${i} jabones saponificados son = ${resultado} $`);
  }
}


