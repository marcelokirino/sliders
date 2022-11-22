let totalSlides = document.querySelectorAll('.slider_item').length;
let sliderWidth = document.querySelector('.slider_width');
let slideCount = 0;

function previous() {
    slideCount--;
    if (slideCount < 0) {
        slideCount = totalSlides - 1;
    }
    updateMargin()
}

function next() {
    slideCount++;
    if (slideCount > (totalSlides - 1)) {
        slideCount = 0;
    }
    updateMargin()
}

function updateMargin() {
    let imageWidth = document.querySelector('.slider_item').clientWidth;
    let newMargin = (slideCount * imageWidth);
    sliderWidth.style.marginLeft = `-${newMargin}px`;
}

setInterval(previous,5000)
