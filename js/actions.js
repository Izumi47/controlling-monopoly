// actions.js
document.addEventListener("DOMContentLoaded", () => {
  const flipCards = document.querySelectorAll(".flip");

  flipCards.forEach((card) => {
    card.addEventListener("click", () => {
      card.classList.toggle("flipped");
    });
  });
});
