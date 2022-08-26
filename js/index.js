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

const header = document.getElementById("header");
const nav = document.querySelector(".nav");
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent.isIntersecting);
    if (ent.isIntersecting == false) {
      nav.classList.add("sticky");
    }

    if (ent.isIntersecting == true) {
      nav.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-40px",
  }
);
obs.observe(header);
