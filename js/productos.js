class Articulo {

    constructor(id, producto, precio) {
        this.id = id;
        this.producto = producto;
        this.precio = parseInt(precio);
    }
    precioTotal() {
        return this.precio * 1.20;
    }
}

const producto1 = new Articulo(1,"jabón saponificado Limón", 260);
const producto2 = new Articulo(2, "jabón saponificado Flora", 300);
const producto3 = new Articulo(3, "jabón saponificado Cacao", 260);

let productosElegidos = [
    producto1,
    producto2,
    producto3
]

let nombre = prompt("Ingresa tu nombre:");

let eleccion = prompt(`Hola ${nombre}, bienvenid@ a Meraki, seleccione el producto que quiere adquirir:
    Digite  1 para ${producto1.producto}, precio ${producto1.precio}
    Digite  2 para ${producto2.producto}, precio ${producto2.precio}
    Digite  3 para ${producto3.producto}, precio ${producto3.precio}`);

let total = 0;

function seleccionProducto() {
    while (eleccion != "NO") {

        console.log(`${nombre} tus prendas productos elegidos son ${productosElegidos[eleccion-1].producto}`)
        total += productosElegidos[eleccion - 1].precioTotal();

        eleccion = prompt(
            `${nombre}, deseas seguir comprando? Selecciona el producto que quieres comprar o digite NO
        Digite  1 para ${producto1.producto}, precio ${producto1.precio}
        Digite  2 para ${producto2.producto}, precio ${producto2.precio}
        Digite  3 para ${producto3.producto}, precio ${producto3.precio}`);

        console.log(`Total a pagar: $${total}`);
    }
}
seleccionProducto();

