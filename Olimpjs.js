document.addEventListener("DOMContentLoaded", () => {
    let slides = document.querySelectorAll(".slide");
    let indicators = document.querySelector(".indicators");
    let currentSlide = 0;
    const navToggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.nav');

    // Обработчик для кнопки меню
    navToggle.addEventListener('click', () => {
        nav.classList.toggle('nav-visible');
    });

    // Функция для показа слайда
    function showSlide(index) {
        slides[currentSlide].classList.remove('active');
        slides[index].classList.add('active');
        updateActiveIndicator(index);
        currentSlide = index;
    }

    // Создание индикаторов
    function createIndicators() {
        for (let i = 0; i < slides.length; i++) {
            let dot = document.createElement("span");
            dot.classList.add("dot");
            dot.addEventListener("click", () => showSlide(i));
            indicators.appendChild(dot);
        }
    }

    // Обновление активного индикатора
    function updateActiveIndicator(index) {
        let dots = indicators.querySelectorAll(".dot");
        dots.forEach(dot => dot.classList.remove('active'));
        dots[index].classList.add('active');
    }

    // Создание индикаторов и показ первого слайда
    createIndicators();
    showSlide(0);

    // Автоматическое переключение слайдов
    setInterval(() => {
        let nextSlide = (currentSlide + 1) % slides.length;
        showSlide(nextSlide);
    }, 30000); // Переключать каждые 30 секунды

    // Выделение активного элемента в навбаре
    var navItems = document.querySelectorAll('.nav a');

    function updateActiveNavItem() {
        var currentHash = window.location.hash;

        navItems.forEach(function(item) {
            item.classList.remove('active');
            if (item.getAttribute('href') === currentHash) {
                item.classList.add('active');
            }
        });
    }

    updateActiveNavItem();
    window.addEventListener('hashchange', updateActiveNavItem);

    // Обработчики для ссылок навигации
    navItems.forEach(link => {
        link.addEventListener('click', () => {
            if (nav.classList.contains('nav-visible')) {
                nav.classList.remove('nav-visible');
            }
        });
    });
});