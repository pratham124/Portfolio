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
const smallerScreenNav = document.querySelector(".mobile-nav");
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (ent.isIntersecting == false) {
      nav.classList.add("sticky");
      smallerScreenNav.classList.add("sticky");
    }

    if (ent.isIntersecting == true) {
      nav.classList.remove("sticky");
      smallerScreenNav.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-40px",
  }
);
obs.observe(header);

const hamburger = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".nav-mobile");

const mobileNavReset = () => {
  mobileNav.style.opacity = "0";
  mobileNav.style.visibility = "hidden";
  mobileNav.style.pointerEvents = "none";
};

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("is-active");

  if (hamburger.classList.contains("is-active")) {
    mobileNav.style.opacity = "100";
    mobileNav.style.visibility = "visible";
    mobileNav.style.pointerEvents = "all";
  } else {
    mobileNavReset();
  }
});

nav.addEventListener("click", (e) => {
  console.log(e.target);
});
