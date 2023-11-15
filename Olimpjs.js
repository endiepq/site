document.addEventListener("DOMContentLoaded", () => {
    let slides = document.querySelectorAll(".slide");
    let indicators = document.querySelector(".indicators");
    let currentSlide = 0;
    const navToggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.nav');
  
    navToggle.addEventListener('click', () => {
      nav.classList.toggle('nav-visible');
    })
    
    function showSlide(index) {
        slides[currentSlide].classList.remove('active');
        slides[index].classList.add('active');
        updateActiveIndicator(index);
        currentSlide = index;
    }

    function createIndicators() {
        for (let i = 0; i < slides.length; i++) {
            let dot = document.createElement("span");
            dot.classList.add("dot");
            dot.addEventListener("click", () => showSlide(i));
            indicators.appendChild(dot);
        }
    }

    function updateActiveIndicator(index) {
        let dots = indicators.querySelectorAll(".dot");
        dots.forEach(dot => dot.classList.remove('active'));
        dots[index].classList.add('active');
    }

    createIndicators();
    showSlide(0); // Показать первый слайд

    // Если нужно автоматическое переключение
    setInterval(() => {
        let nextSlide = (currentSlide + 1) % slides.length;
        showSlide(nextSlide);
    }, 30000); // Переключать каждые 30 секунды
});