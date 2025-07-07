let currentSlide = 1;

const sliderContainer = document.querySelector(".slider-container");
const indicators = document.querySelectorAll(".nav-item");
const slides = document.getElementsByClassName("slide");

sliderContainer.onclick = function (event) {
  const targetElement = event.target;

  if (targetElement.classList.contains("right-arrow")) {
    if (currentSlide === slides.length) currentSlide = 1;
    else currentSlide++;
  }

  if (targetElement.classList.contains("left-arrow")) {
    if (currentSlide === 1) currentSlide = slides.length;
    else currentSlide--;
  }

  updateSlider();

  console.log("Current slide: ", currentSlide);
};

function updateSlider() {
  updateIndicators();
  updateImage();
  updateBackground();
}

function updateIndicators() {
  // for(const indicator of indicators){
  //     indicator.classList.remove("active");
  // }
  const activeIndicator = document.querySelector(".nav-item.active");
  // if(activeIndicator !== null){
  activeIndicator?.classList.remove("active");
  // }

  indicators[currentSlide - 1].classList.add("active");
}

function updateImage() {
  const activeSlide = document.querySelector(".slide.active");
  activeSlide?.classList.remove("active");
  slides[currentSlide - 1].classList.add("active");
}

function updateBackground() {
  const currentImage = slides[currentSlide - 1];
  document.body.style.backgroundImage = currentImage.style.backgroundImage;
}

updateSlider();
