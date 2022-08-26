const loader = document.querySelector(".loader-wrapper");

window.addEventListener("load", () => {
  setTimeout(() => {
    loader.style.display = "none";
    window.scrollTo(0, 0);
  }, 5000);
});

const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;
