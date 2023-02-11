const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelectorAll(".navbar__list")[0];

hamburger.addEventListener("click", () => {
  navbar.classList.toggle("active");
});
