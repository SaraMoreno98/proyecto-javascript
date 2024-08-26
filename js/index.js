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