const Clickbutton = document.querySelectorAll('.btnAgregarAlCarrito');
const tbody = document.querySelector('.tbody');
let carrito = []
Clickbutton.forEach(btn => {
    btn.addEventListener('click', addToCarritoItem)
});

//declaro una funcion para obtener la información del boton al que hice click//
function addToCarritoItem(e) {

    const button = e.target
    const item = button.closest('.productos_section_ul_li')
    const itemTitulo = item.querySelector('.tituloProducto').textContent;
    const itemPrecio = item.querySelector('.precioProducto').textContent;
    const itemImg = item.querySelector('.productos_section_ul_li_img').src;

    //creo un nuevo objeto//
    const newItem = {
        titulo: itemTitulo,
        precio: itemPrecio,
        img: itemImg,
        cantidad: 1
    }

    addItemCarrito(newItem)
}


//con esta función le agrego a la variable carrito el objeto nuevo //
function addItemCarrito(newItem) {
        carrito.push(newItem)
        renderCarrito()
    }

    function renderCarrito() {
        tbody.innerHTML = '';
        carrito.map(item => {
            const tr = document.createElement('tr')
            tr.classList.add('ItemCarrito')
            const Content =
                `
           <td class="tabla_imgProducto">
               <img src=${item.img} alt="Jabón limón y cúrcuma">
               <h5>${item.titulo}</h5>
           </td>
           <td class="tabla_precioProducto">${item.precio}
           </td>
           <td><input type="number" min="1" value=${item.cantidad} class="input__elemento">
               <button class="botones_meraki botonesCarrito">Vaciar</button>
           </td>
        `
            tr.innerHTML = Content;
            tbody.append(tr);

        })
    }