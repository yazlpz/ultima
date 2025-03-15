const images = ["c:\Users\CXO Ryzen 5\OneDrive\Imágenes\foto1.jpg", "c:\Users\CXO Ryzen 5\OneDrive\Imágenes\foto2.jpg", "c:\Users\CXO Ryzen 5\OneDrive\Imágenes\foto3.jpg",
    "c:\Users\CXO Ryzen 5\OneDrive\Imágenes\foto4.jpg", "c:\Users\CXO Ryzen 5\OneDrive\Imágenes\foto5.jpg", "c:\Users\CXO Ryzen 5\OneDrive\Imágenes\foto6.jpg"];
let currentIndex = 0;

function updateSlide() {
    const slide = document.getElementById("slide");
    slide.src = images[currentIndex];
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlide();
}

function previousSlide() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateSlide();
}
