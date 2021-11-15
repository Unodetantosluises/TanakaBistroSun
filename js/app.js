const getElement = (selector) => {
    const element = document.querySelector(selector)

    if (element) return element
    throw Error(
        'Por favor verifique los nombres de la clase no existe ${selector} class'
    )
}

const links = getElement('.nav-links')
const navBtnDOM = getElement('.nav-btn')

navBtnDOM.addEventListener('click', () => {
    links.classList.toggle('show-links')
})

const date =  getElement('#fecha')
const currentYear = new Date().getFullYear()
date.textContent = currentYear

// Slider
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}

// Modal de Registro de Usuario e Inicio de Sesion
var modal = document.getElementById('id01');
var modal = document.getElementById('id02');

 window.onclick = function(event) {
     if(event.target == modal) {
         modal.style.display = "none"
     }
 }

 // Carrito


// Firbase Firestore
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-database.js";

function writeUserData(userId, nombre, correo, contraseña) {
    const db = getDatabase();
    set(ref(db, 'usuarios/' + userId), {
      nUsuario: nombre,
      correo: correo,
      contraseña : contraseña
    });
  }

// Firebase Authentication