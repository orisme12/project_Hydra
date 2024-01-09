import {Swiper} from 'swiper'

import './style.css'
import './mobile.css'
import 'swiper/css'
// import 'swiper/css/navigation'
import 'swiper/css/pagination'


const menu = document.querySelector("#toggleMenu")
const closeIcon = document.querySelector("#menuClose")

function toggleMenu() {
  let menu = document.getElementById("menu")
  menu.classList.toggle("show")
}

function closeMenu() {
  let menu = document.getElementById("menu");
  let closeIcon = document.querySelector(".closeMenu");
  // Agregamos la clase de animación a la "X"
  closeIcon.classList.add("rotate-out");
  // Agregamos la clase de animación al menú
  menu.classList.add("puff-out-center");
  setTimeout(() => {
      menu.classList.remove("show", "puff-out-center");
      closeIcon.classList.remove("rotate-out");
  }, 200); 
}
menu.addEventListener('click', toggleMenu)
closeIcon.addEventListener('click',closeMenu)

let swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
    
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

// Evento de envío de formulario
const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_bo53xyo';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
      this.reset();
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});