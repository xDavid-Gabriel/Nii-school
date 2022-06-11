/*======== MODO DARK ========*/
const bola = document.querySelector("#bola");
// const nocheLuz = document.querySelector("#noche-luz")
const diaNoche = document.querySelector(".dia-noche");
const body = document.querySelector("body");

bola.addEventListener("click", () => {
  bola.classList.toggle("mueve");
  //  nocheLuz.classList.toggle("noche-luz-color")
  diaNoche.querySelector("i").classList.toggle("fa-cloud-sun");
  diaNoche.querySelector("i").classList.toggle("fa-cloud-moon");
  let val = body.classList.toggle("dark");
  //LocalStorage
  localStorage.setItem("modo", val);
});

let valor = localStorage.getItem("modo");
//LocalStorage validacion
if (valor === "true") {
  body.classList.add("dark");
  bola.classList.add("mueve");
  diaNoche.querySelector("i").classList.remove("fa-cloud-moon");
  diaNoche.querySelector("i").classList.add("fa-cloud-sun");
} else {
  body.classList.remove("dark");
  bola.classList.remove("mueve");
  diaNoche.querySelector("i").classList.add("fa-cloud-moon");
  diaNoche.querySelector("i").classList.remove("fa-cloud-sun");
}

/*=========== SWIPER CURSOS ================*/
let swiper = new Swiper(".cursos__container", {
  spaceBetween: 20,
  loop: true,
  grabCursor: true,
  pagination: {
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
let swiper2 = new Swiper(".container__testimonial", {
  spaceBetween: 80,
  loop: true,
  grabCursor: true,
  pagination: {
    clickable: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

/* ===================== SCROLL SECTIONS ACTIVE LINK =====================*/
//obtener todas las secciones que tienen una identificación definida
const sections = document.querySelectorAll("section[id]");
console.log(sections);

// agregue un detector de eventos escuchando el desplazamiento
window.addEventListener("scroll", navHighlighter);
function navHighlighter() {
  // obtener la posición de desplazamiento actual
  let scrollY = window.pageYOffset;
  sections.forEach((current) => {

    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 190,
    sectionId = current.getAttribute("id")


    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
      document.querySelector(".nav__menu a[href*=" + sectionId + "]").classList.add("active")
    }else{
      document.querySelector(".nav__menu a[href*=" + sectionId + "]").classList.remove("active")
    }
  });
}

/*=========== AOS ANIMACIONES ================*/
AOS.init({
  easing: "ease-out-back",
  duration: 1000,
});
