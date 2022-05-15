const CONTENEDORPRODUCTOS = document.querySelector('.productos_section-margenes .productos_section_ul-grid')
const CONTENEDORCARRITO = document.getElementById('carrito-contenedor')
const BOTONVACIAR = document.getElementById('vaciar-carrito')
const CONTADORCARRITO = document.getElementById('contadorCarrito')
const PRECIOTOTAL = document.getElementById('precioTotal')

let carrito =[];

document.addEventListener('DOMContentLoaded', () =>{
    if (localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        ACTUALIZARCARRITO()
    }
})

BOTONVACIAR.addEventListener('click', () =>{
    carrito.length = 0
    ACTUALIZARCARRITO()
    this.vaciarLocalStorage()
})

const MOSTRARPRODUCTOS = (array) => {
    CONTENEDORPRODUCTOS.innerHTML = ""

    array.forEach((producto) => {
        const li = document.createElement('li')
        li.classList.add('productos_section_ul_li')
        li.id = `${producto.id}`
    
        li.innerHTML= `
                <figure class="productos_section_ul_li_figure"><img src=${producto.img}
                       alt="..." class="productos_section_ul_li_img"></figure>
                <ul class="productos_section_ul_ul">
                    <li class="productos_section_ul_ul_li">
                       <h3>${producto.producto}</h3>
                       <h3 class="precioProducto">$${producto.precio}</h3>
                    </li>
                    <li class="productos_section_ul_ul_li">
                        <h4 class="tituloProducto">${producto.tipo}</h4>
                        <figure><img src=${producto.valoracion} alt="valoración"
                         class="productos_section_ul_li_img"></figure>
                    </li>
                    <li class="cajaBnt">
                         <a href="./detalleproducto.html" class="botones_meraki">Ver más</a>
                    </li>
                    <li class="cajaBnt">
                        <button id="agregar${producto.id}" class="btnAgregarAlCarrito">Añadir al carrito</button>
                    </li>
                </ul>
        `
        CONTENEDORPRODUCTOS.appendChild(li)
    
        const BOTON = document.getElementById(`agregar${producto.id}`)
        //al clikear en BOTON se ejecuta la función de agregar a carrito//
        BOTON.addEventListener('click', () => {
            AGREGARALCARRITO(producto.id)
            Swal.fire({
                position: 'bottom-end',
                icon: 'success',
                title: 'Artículo agregado a tú carrito!' 
            })
        })
    })
}
MOSTRARPRODUCTOS(stockProductos)

//creo la función agregar al carrito mediante el id de mis productos//
const AGREGARALCARRITO = (prodId) => {
    const ITEM = stockProductos.find((prod) => prod.id === prodId)

    carrito.push(ITEM)
    ACTUALIZARCARRITO()
    console.log(carrito);
}

const ELIMINARPRODUCTO = (prodId) => {
    const ITEM = carrito.find((prod) => prod.id === prodId)
    const INDICE = carrito.indexOf(ITEM)
    carrito.splice(INDICE, 1)

    ACTUALIZARCARRITO()

}

//creo una función para que el producto seleccionado aparezca en el carrito//
const ACTUALIZARCARRITO = () => {
    CONTENEDORCARRITO.innerHTML = ""

    carrito.forEach((prod) =>{
       const DIV = document.createElement('div')
       DIV.className = "productoEnCarrito"
       DIV.innerHTML = `
        <p>${prod.producto}</p>
        <p>${prod.tipo}</p>
        <p>precio: $${prod.precio}</p>
        <button onclick="ELIMINARPRODUCTO(${prod.id})" class="boton-eliminar">
          <i class="fas fa-trash-alt" style="font-size:24px;color:red" aria-hidden="true"></i>
        </button>
       `
       CONTENEDORCARRITO.appendChild(DIV)

       localStorage.setItem('carrito', JSON.stringify(carrito))
    })
    // modifico la cantidad de productos seleccionados en el contador del carrito//
    CONTADORCARRITO.innerText = carrito.length

    PRECIOTOTAL.innerText = carrito.reduce((acc, prod) => acc + prod.precio, 0)
}
function vaciarLocalStorage(){
    localStorage.clear();
}

// filtros //
const FILTROSPRODUCTOS = document.getElementById('filtroProductos')

const FILTRARPRODUCTO = () => {
    const VALUE = FILTROSPRODUCTOS.value
    if (VALUE === "Todos") {
        MOSTRARPRODUCTOS(stockProductos)
    } else {
        const FILTRADO = stockProductos.filter((prod) => prod.option === VALUE)
        MOSTRARPRODUCTOS(FILTRADO)
    }
}
FILTROSPRODUCTOS.addEventListener('change', () => {
    FILTRARPRODUCTO()
})
