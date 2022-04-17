const PRODUCTOS = [];

document.getElementById("formulario").addEventListener("submit", (e) => {
    e.preventDefault();

    let producto = document.getElementById("producto").value;
    let precio = document.getElementById("precio").value;

    if (producto == "" || precio == "") {
        alert("Se deben completar todos los campos");
    } else {
        alert("Calculo exitoso!");

        const informacionDelProducto = {
            producto,
            precio,
        };
        PRODUCTOS.push(informacionDelProducto);
        console.log(PRODUCTOS);

        crearProductosEnElHTML();
        document.getElementById("formulario").reset();
    }
})

function crearProductosEnElHTML() {
    let contenedor = document.getElementById("tbody");
    contenedor.innerHTML = "";
    for (let i = 0; i < PRODUCTOS.length; i++) {
        let producto = PRODUCTOS[i].producto;
        console.log(producto);
        let precio = PRODUCTOS[i].precio;
        console.log(precio);

        contenedor.innerHTML +=
         `
        <tr id="${i}">
            <td>${producto}</td>
            <td>${precio}</td>
            <td><button class="botones_meraki" onClick="editarProductosSinRepetir(${i})">Editar</button></td>
            <td><button class="botones_meraki" onClick="eliminarProducto(${i})">Vaciar</button></td>
        </tr>
        `
    }
}
function editarProductosSinRepetir(i) {
    let contenedor = document.getElementById(`${i}`);
    contenedor.innerHTML = "";

    let producto = PRODUCTOS[i].producto;
    let precio = PRODUCTOS[i].precio;

    document.getElementById("producto").value = producto;
    document.getElementById("precio").value = precio;

    PRODUCTOS.splice(i,1);
}

function eliminarProducto(i){
    let contenedor = document.getElementById(`${i}`);
    contenedor.innerHTML = "";

    PRODUCTOS.splice(i,1);
    crearProductosEnElHTML();
}
