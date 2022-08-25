const loader = document.querySelector(".loader-wrapper");

window.addEventListener("load", () => {
  setTimeout(() => {
    loader.style.display = "none";
    window.scrollTo(0, 0);
  }, 5000);
});
