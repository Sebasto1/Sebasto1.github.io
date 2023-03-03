//Boton para ir al principio de la pagina
window.addEventListener('scroll', function() {
  var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  var scrollToTopBtn = document.getElementById('scroll-to-top-btn');
  
  if (scrollPosition > 0) {
    scrollToTopBtn.style.display = 'block';
  } else {
    scrollToTopBtn.style.display = 'none';
  }
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

var scrollToTopBtn = document.getElementById('scroll-to-top-btn');
scrollToTopBtn.addEventListener('click', scrollToTop);

//Carrusel
let slideIndex = 0;
showSlides();
  
  function showSlides() {
    let i;
    let slides = document.getElementsByClassName("Slides");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 3000); // Cambia de imagen cada 3seg
  };

  // Formulario
modal = document.getElementById('contactForm');
// Cuando se hace click fuera del formulario se cierra
window.onclick = function(event) {if (event.target == modal) {modal.style.display = "none";}};

