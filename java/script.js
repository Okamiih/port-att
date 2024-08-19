let slideIndex = 0;

function showSlide(index) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;
    if (index >= totalSlides) { slideIndex = 0; }
    if (index < 0) { slideIndex = totalSlides - 1; }
    slides.style.transform = `translateX(-${slideIndex * 100}%)`;
}

function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}

function prevSlide() {
    slideIndex--;
    showSlide(slideIndex);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(slideIndex);
});




//call

document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById('menuMobile');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });
});

