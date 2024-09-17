let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides[currentSlide].classList.remove('active');
    currentSlide = index;
    slides[currentSlide].classList.add('active');
}

function nextSlide() {
    showSlide((currentSlide + 1) % slides.length);
}

function prevSlide() {
    showSlide((currentSlide - 1 + slides.length) % slides.length);
}

// Mostrar la primera diapositiva al cargar la página
showSlide(0);

// Navegar usando las teclas de flecha
document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowRight') {
        nextSlide();
    } else if (event.key === 'ArrowLeft') {
        prevSlide();
    }
});
//VIDEO
document.addEventListener('DOMContentLoaded', function () {
    const video = document.getElementById('myVideo');
    const slide = document.getElementById('slide5');
  
    // Crear una instancia de IntersectionObserver
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Reproducir el video si la diapositiva está en vista
          video.play();
        } else {
          // Pausar el video si la diapositiva no está en vista
          video.pause();
          video.currentTime = 0; // Opcional: reiniciar el video al inicio
        }
      });
    }, { threshold: 0.5 }); // Activar cuando al menos el 50% de la diapositiva esté en vista
  
    // Observar el elemento de la diapositiva
    observer.observe(slide);
  });
  