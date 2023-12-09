// set index and transition delay
let index = 0;
let transitionDelay = 5000;

// get div containing the slides
let slideContainer = document.querySelector(".slideshow");
// get the slides
let slides = slideContainer.querySelectorAll(".slide");

// set transition delay for slides
for (let slide of slides) {
  slide.style.transition = `all ${transitionDelay/1000}s linear`;
}

// show the first slide
showSlide(index);

// show a specific slide
function showSlide(slideNumber) {
  slides.forEach((slide, i) => {
    slide.style.display = i == slideNumber ? "block" : "none";
  });
  // next index
  index++;
  // go back to 0 if at the end of slides
  if (index >= slides.length) {
    index = 0;
  }
}

// transition to next slide every x seconds
setInterval (() => showSlide(index), transitionDelay);