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
