const reveals = document.querySelectorAll(".reveal");
const bgName = document.querySelector(".background-name");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.18,
  }
);

reveals.forEach((el) => observer.observe(el));

window.addEventListener("scroll", () => {
  if (window.scrollY > 250) {
    bgName.classList.add("blur");
  } else {
    bgName.classList.remove("blur");
  }
});