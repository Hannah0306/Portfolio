const track = document.querySelector(".slider-track");
const slides = document.querySelectorAll(".slide-card");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentIndex = 0;

function updateSlider() {
  track.style.transform = `translateX(-${currentIndex * 100}%)`;
}

nextBtn.addEventListener("click", () => {
  if (currentIndex < slides.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }

  updateSlider();
});

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = slides.length - 1;
  }

  updateSlider();
});