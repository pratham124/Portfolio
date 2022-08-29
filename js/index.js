//Add preloading to website that lasts for 5 secs
const loader = document.querySelector(".loader-wrapper");
window.addEventListener("load", () => {
  setTimeout(() => {
    loader.style.display = "none";
    document.documentElement.style.setProperty("--scrollbar", "block");
    window.scrollTo(0, 0);
  }, 5000);
});

//Updates the copyright date
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

//Sticky nav implementation
const header = document.getElementById("header");
const nav = document.querySelector(".nav");
const smallerScreenNav = document.querySelector(".mobile-nav");
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (!ent.isIntersecting) {
      nav.classList.add("sticky");
      smallerScreenNav.classList.add("sticky");
    }

    if (ent.isIntersecting) {
      nav.classList.remove("sticky");
      smallerScreenNav.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(header);

//Mobile Nav implementation
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

mobileNav.addEventListener("click", (e) => {
  const click = e.target;
  if (!click.matches("a")) return;
  mobileNavReset();
  hamburger.classList.remove("is-active");
});
