const buttons = document.querySelectorAll(".toggle-btn");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const card = button.closest(".heuristic-card");
    const description = card.querySelector(".card-description");

    description.classList.toggle("open");
    button.classList.toggle("active");
  });
});