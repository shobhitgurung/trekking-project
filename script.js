// This is optional. It will stop the slideshow if the user hovers over the slideshow.
const slideshow = document.querySelector('.slideshow');
slideshow.addEventListener('mouseenter', () => {
    clearInterval(intervalId);
});

slideshow.addEventListener('mouseleave', () => {
    intervalId = setInterval(nextSlide, 12000); /* Change the slideshow every 12 seconds */
});

let intervalId;

function nextSlide() {
    const slides = document.querySelectorAll('.slide');
    const currentSlide = document.querySelector('.slide.active');
    let nextSlide = currentSlide.nextElementSibling || slides[0];

    currentSlide.classList.remove('active');
    nextSlide.classList.add('active');
}

// Start the slideshow
intervalId = setInterval(nextSlide, 12000);
