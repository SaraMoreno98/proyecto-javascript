//BANNER
document.getElementById('parallax').style.backgroundImage = "url('../img/alexander-psiuk-utfiDJBebHw-unsplash.jpg')"

// FUNCION PARA CONTROLAR LA VELOCIDAD DEL SCROLL
window.addEventListener('scroll', function(){
    let parallax = document.getElementById('parallax')
    let scrollPosition = this.window.scrollY
    // CAMBIAR POSICION DE LA IMG EN FUNCION DEL SCROLL, EL 0.7 CAMBIA LA VELOCIDAD
    parallax.style.backgroundPositionY = (scrollPosition * -0.7) + 'px'
})

//NAVBAR RESPONSIVE
let burguerResponsive = document.getElementById('burguer')

    burguerResponsive.addEventListener("click", function toggleMenu(){
        let myNav = document.getElementById('myNavbar')

        if(myNav.className === 'navbar'){
            myNav.className += " responsive"
            console.log("Clase de navbar:", myNav.className)
        }
        else{
            myNav.className = "navbar"
            console.log("Clase de navbar:", myNav.className)
        }
    })

// CARRITO
const products = [
    { id: 1, name: "Ilustración", price: 19.99},
    { id: 2, name: "Cartelería", price: 29.99},
    { id: 3, name: "Logotipo", price: 49.99},
    { id: 4, name: "Branding", price: 79.99},
    { id: 5, name: "Diseño Web", price: 59.99}
]

const productosContainer = document.getElementById ('products')
const itemCarrito = document.getElementById ('cart-items')
const mostrarCarrito = document.getElementById ('toggle-cart')
const carrito = document.getElementById ('cart')
const totalCarrito = document.getElementById ('cart-total')
const contador = document.getElementById('contador')
let cont = 0

let cartProductos = []

function renderizarProductos(){
    let productosHTML = products.map(producto => `
        <div class="product-card">
            <h3>${producto.name}</h3>
            <p>Precio: ${producto.price} €</p>
            <button onclick="addCarrito(${producto.id})">Añadir al carrito</button>
        </div>    
    `)

    let productosJuntos = productosHTML.join(' ')
    productosContainer.innerHTML = productosJuntos
}

function addCarrito(productoId){
    const productoCesta = products.find(producto => producto.id === productoId)

    cartProductos.push({...productoCesta})
    console.log (cartProductos)
    // CADA VEZ QUE AÑADIMOS UN PRODUCTO LLAMAMOS A LA FUNCION UNPDATE CARRITO
    updateCarrito()
}

function updateCarrito(){
    itemCarrito.innerHTML = cartProductos.map((item, index) => `
        <div class="cart-item">
            <span>${item.name} - ${item.price.toFixed(2)} €</span>
            <button onclick="eliminarDelCarrito(${index})">Eliminar</button>
        </div>
    `).join('')

    const total = cartProductos.reduce((sum, item) => sum + item.price, 0)
    totalCarrito.textContent = `Total ${total.toFixed(2)} €`

    if (cartProductos.length === 0){
        contador.textContent = ''
    }else{
        cont++
        contador.textContent = cartProductos.length
    }

    guardarCarrito()
}

function eliminarDelCarrito(indice){
    cartProductos.splice(indice, 1)

    updateCarrito()
}

mostrarCarrito.addEventListener("click", () => {
    // ESTA LINEA HACE QUE AL PICHAR EN EL CARRITO SE AÑADA UNA CLASE QUE ABRE O CIERRA EL CARRITO SEGUN LE CLICAMOS
    carrito.classList.toggle("open")
})

function guardarCarrito(){
    // GUARDA INFO EN EL LOCAL STORAGE
    localStorage.setItem('carrito', JSON.stringify(cartProductos))
}

function cargarCarrito(){
    const carritoGuardado = localStorage.getItem('carrito')
    if(carritoGuardado){
        cartProductos = JSON.parse(carritoGuardado)
        updateCarrito()
    }
}

cargarCarrito()
renderizarProductos()