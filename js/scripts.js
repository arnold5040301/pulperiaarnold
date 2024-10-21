// Simular el progreso de la barra de carga
let progress = 0;
const progressBar = document.querySelector('.progress');

function updateProgress() {
    progress += 1;
    progressBar.style.width = progress + '%';
    
    if (progress < 100) {
        setTimeout(updateProgress, 50); // Controlar la velocidad de carga
    } else {
        // Ocultar el preloader cuando termine
        document.getElementById('preloader').style.display = 'none';
    }
}

// Ejecutar la carga cuando la página se carga completamente
window.addEventListener('load', function() {
    setTimeout(updateProgress, 500); // Iniciar después de 0.5 segundos
});


let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

document.querySelector('.next').addEventListener('click', () => {
    moveToNextSlide();
});

document.querySelector('.prev').addEventListener('click', () => {
    moveToPrevSlide();
});

function updateSlidePosition() {
    slides.forEach((slide, index) => {
        slide.classList.remove('active');
        slide.style.transform = `translateX(-${currentSlide * 100}%)`;
    });
    slides[currentSlide].classList.add('active');
}

function moveToNextSlide() {
    if (currentSlide === totalSlides - 1) {
        currentSlide = 0;
    } else {
        currentSlide++;
    }
    updateSlidePosition();
}

function moveToPrevSlide() {
    if (currentSlide === 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide--;
    }
    updateSlidePosition();
}

/* Desplazamiento automático cada 5 segundos */
setInterval(() => {
    moveToNextSlide();
}, 5000);

// Mostrar más / Mostrar menos funcionalidad
document.getElementById("mostrar-mas").addEventListener("click", function() {
    document.getElementById("extra-images").style.display = "grid"; // Muestra las imágenes adicionales
    document.getElementById("mostrar-mas").style.display = "none"; // Oculta el botón "Mostrar más"
    document.getElementById("mostrar-menos").style.display = "inline-block"; // Muestra el botón "Mostrar menos"
});

document.getElementById("mostrar-menos").addEventListener("click", function() {
    document.getElementById("extra-images").style.display = "none"; // Oculta las imágenes adicionales
    document.getElementById("mostrar-mas").style.display = "inline-block"; // Muestra el botón "Mostrar más"
    document.getElementById("mostrar-menos").style.display = "none"; // Oculta el botón "Mostrar menos"
});

// Modal de imagen
var modal = document.getElementById("image-modal");
var modalImg = document.getElementById("img-grande");
var captionText = document.getElementById("caption");
var closeModal = document.getElementsByClassName("close")[0];

document.querySelectorAll('.gallery-item img').forEach(img => {
    img.addEventListener('click', function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    });
});

closeModal.addEventListener('click', function() {
    modal.style.display = "none";
});
