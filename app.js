function showTechniques() {
    const techniquesSection = document.getElementById('techniques');
    techniquesSection.classList.toggle('hidden');
}
let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
    const newTransform = -currentSlide * 100; // Menggeser carousel ke kiri
    document.querySelector('.carousel-inner').style.transform = `translateX(${newTransform}%)`;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// Opsi untuk otomatis slide setiap 4 detik
setInterval(() => {
    nextSlide();
}, 4000);




