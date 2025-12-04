function toggleMobileMenu() {
    const menu = document.getElementById("mobileMenu");
    if (menu.style.width === "100%") {
        menu.style.width = "0";
    } else {
        menu.style.width = "100%";
    }
}

const carouselSlide = document.querySelector('.carousel-slide');
const images = document.querySelectorAll('.carousel-slide img');

let counter = 1; 
const size = images[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

function slideNext() {
    if (counter >= images.length - 1) {
        carouselSlide.style.transition = "none";
        counter = 0;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

        setTimeout(() => {
            carouselSlide.style.transition = "transform 0.5s ease-in-out";
            counter++;
            carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
        }, 50);

    } else {
        counter++;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
}

setInterval(slideNext, 3000);
