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

function pagar() {

    let metodoPago = parseInt(prompt(`${nombre} el monto a pagar es ${total}, ¿Que metodo de pago deseas?
    1 para pagar con Debito
    2 para pagar con Credito:`));

    if (metodoPago === 1) {
        let pago = prompt("ingrese el numero de su tarjeta de debito:")
        alert(`${nombre} se ha realizado el pago exitosamente, ¡Muchas gracias por comprar en Meraki!
        Detalles de la compra:
        Compra a nombre de: ${nombre}
        Total abonado ${total}`);
    } else if (metodoPago === 2) {
        let pago = prompt("ingrese el numero de su tarjeta de credito:")
        let Cuotas = parseInt(prompt(`${nombre}, ¿En cuantas cuotas deseas pagar?
         1 para 3 cuotas con regargo del 10%
         2 para 6 cuotas con regargo del 15%
         3 para 12 cuotas con regargo del 20%`));

        let recargo = 0;
        let cuota = 0;

        switch (cuotas) {

            case 1:
                recargo = total * 0.10;
                total += recargo;

                cuota = total / 3;

                alert(`${nombre} se ha realizado el pago exitosamente, ¡Muchas gracias por comprar en Meraki!
            Detalles de la compra:
            Compra a nombre de: ${nombre} ${apellido}
            Monto total: $${total}
            Se abona en ${cuota} cuotas`);

                break;

            case 2:
                recargo = total * 0.15;
                total += recargo;

                cuota = total / 6;

                alert(`${nombre} se ha realizado el pago exitosamente, ¡Muchas gracias por comprar en Meraki!
            Detalles de la compra:
            Compra a nombre de: ${nombre} ${apellido}
            Monto total: $${total}
            Se abona en ${cuota} cuotas`);

                break;

            case 3:
                recargo = total * 0.20;
                total += recargo;

                cuota = total / 12;

                alert(`${nombre} se ha realizado el pago exitosamente, ¡Muchas gracias por comprar en Meraki!
            Detalles de la compra:
            Compra a nombre de: ${nombre} ${apellido}
            Monto total: $${total}
            Se abona en ${cuota} cuotas`);

                break;
        }
    }
    else{
        alert(`Lo sentimos, no se pudo realizar el pago, intente nuevamente`)
    }

}

let productosJabones = [
    new Articulo(1,"jabón saponificado Limón", 260),
    new Articulo(2, "jabón saponificado Flora", 300),
    new Articulo(3, "jabón saponificado Cacao", 260),
    new Articulo(4,"Jabón saponificado Rosa", 260),
    new Articulo(5, "Jabón saponificado Lavanda", 260),
    new Articulo(6, "Jabón saponificado Rosas", 300),
    new Articulo(7, "Jabón saponificado Amapola", 260),
    new Articulo(8, "Jabón vegano Carbón", 220),
    new Articulo(9, "Jabón vegano Rosa", 230),
    new Articulo(10, "Jabón vegano Maracuyá", 250),
]

/*para ver lista de precios*/ 
let precios = productosJabones.map((el) => el.precio);
console.log(precios);

/*ordenar de menor precio a mayor precio*/
console.log(precios.sort((a,b) => a-b));

/*filtrar productos veganos disponibles*/ 
let productoVegano = productosJabones.filter((el) => el.producto.includes("vegano"));
console.log(productoVegano);  


const eliminar = (producto) => {
    
    let index = productosJabones.indexOf(producto)

    if (index != -1 ) {
        productosJabones.splice(index, 1);
    } 
}

eliminar(9);
/*confirmo si eliminó el producto con id 9 */
console.log( productosJabones.indexOf(9));

