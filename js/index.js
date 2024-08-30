// FUNCION PARA QUE LA WEB SE DESPLACE AL PULSAR EL TABULADOR
document.addEventListener('keydown', function(event) {
    // Comprobar si la tecla pulsada es el tabulador
    if (event.key === 'Tab') {
        // Prevenir el comportamiento por defecto del tabulador
        event.preventDefault();

        // Desplazar la página hacia abajo
        window.scrollBy({
            top: 300, // Desplaza 100 píxeles hacia abajo
            left: 0,
            behavior: 'smooth' // Hace que el desplazamiento sea suave
        });
    }
});

// SALUDO
const saludoTxt = document.getElementById('saludo')

window.onload = function mostrarSaludo (){
    const hora = new Date().getHours()
    //const hora = 20
    parseInt(hora)
        console.log(hora)

    if(hora >= 7 && hora < 12){
        saludoTxt.textContent = `¡Buenos días! Ten un bonito día`
    }
    else if (hora >= 12 && hora < 20){
        saludoTxt.textContent = `¡Buenas tardes! Ten un bonito día`
    }
    else{            
        saludoTxt.textContent = `¡Buenas noches!`
    }
}

//BANNER
document.getElementById('parallax').style.backgroundImage = "url('../img/iffah-suhaili-lHnC9Yg_J3Q-unsplash.jpg')"

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

// BANNER SLIDER
    // SLIDER 1
    const images = [
        '../img/austin-gardner-7fElVDKXLoQ-unsplash.jpg',
        '../img/dimitry-b-uDl5opHop7E-unsplash.jpg',
        '../img/gines-sanchez-39a0qT-UA08-unsplash.jpg',
        '../img/iffah-suhaili-rb672Yi99qc-unsplash.jpg',
        '../img/sebastian-yepes-OdwjaP3GpqQ-unsplash.jpg',
        '../img/sergio-rota-BObeW7-d6fk-unsplash.jpg'
    ]

    const slidesContainer = document.getElementById('slides')

        // CARGAR IMGS DINAMICAMENTE
        images.forEach(src => {
            const img = document.createElement('img')
            img.src = src
            slidesContainer.appendChild(img)
        })

        let index = 0

        function showNextImage(){
            index++
            if (index >= images.length) {
                index = 0
            }
            const offset = -index * 100
            slidesContainer.style.transform = `translateX(${offset}%)`
        }

        //CONFIGURAR EL SLIDER PARA QUE SE MUEVA AUTOMATICAMENTE
        setInterval(showNextImage, 3000)

    // SLIDER 2
    const images2 = [
        '../img/austin-gardner-7fElVDKXLoQ-unsplash.jpg',
        '../img/dimitry-b-uDl5opHop7E-unsplash.jpg',
        '../img/gines-sanchez-39a0qT-UA08-unsplash.jpg',
        '../img/iffah-suhaili-rb672Yi99qc-unsplash.jpg',
        '../img/sebastian-yepes-OdwjaP3GpqQ-unsplash.jpg',
        '../img/sergio-rota-BObeW7-d6fk-unsplash.jpg'
    ]

    const slidesContainer2 = document.getElementById('slides2')

        // CARGAR IMGS DINAMICAMENTE
        images2.forEach(src => {
            const img = document.createElement('img')
            img.src = src
            slidesContainer2.appendChild(img)
        })

        let index2 = 0

        function showNextImage2(){
            index2++
            if (index2 >= images2.length) {
                index2 = 0
            }
            const offset2 = -index2 * 100
            slidesContainer2.style.transform = `translateX(${offset2}%)`
        }

        //CONFIGURAR EL SLIDER PARA QUE SE MUEVA AUTOMATICAMENTE
        setInterval(showNextImage2, 3000)

// CARRITO
const products = [
    { id: 1, name: "Ilustración", price: 19.99},
    { id: 2, name: "Cartelería", price: 29.99},
    { id: 3, name: "Logotipo", price: 49.99},
    { id: 4, name: "Branding", price: 89.99},
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

// FUNCION PARA MOSTRAR EL CARRITO
function aparecerCarrito() {
    const objeto = document.getElementById('toggle-cart');
    const scrollY = window.scrollY || window.pageYOffset;
  
    if (scrollY >= 150) {
      objeto.style.display = 'block';
    } else {
      objeto.style.display = 'none';
    }
  }
  
    // Agregar el evento de scroll
    window.addEventListener('scroll', aparecerCarrito);

    // Llamar a la función una vez para manejar el caso inicial
    aparecerCarrito();