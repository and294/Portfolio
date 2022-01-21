/*Highlight section when scrolled by*/
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((a) => {
    a.classList.remove("active");
    if (a.classList.contains(current)) {
      a.classList.add("active");
    }
  });
});

/*hide nav on phone and tablet*/
const primaryNav = document.querySelector(".nav");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
  const visibility = primaryNav.getAttribute("data-visible");

  if (visibility === "false") {
    primaryNav.setAttribute("data-visible", "true");
  } else {
    primaryNav.setAttribute("data-visible", "false");
  }
});

/*Observer animations*/

const config = {
    root: null, // Sets the framing element to the viewport
    rootMargin: "50px",
    threshold: 0.5,
  },
  /*Who am I*/
  step1 = document.querySelector(".step1"),
  step2 = document.querySelector(".step2"),
  step3 = document.querySelector(".step3"),
  observerStep1 = new IntersectionObserver(
    (entries) =>
      entries.forEach(({ target: { classList }, intersectionRatio }) => {
        if (intersectionRatio > 0.5) {
          classList.add("stepsIn");
        } else {
          classList.remove("stepsIn");
        }
      }),
    config
  );

observerStep1.observe(step1);

observerStep2 = new IntersectionObserver(
  (entries) =>
    entries.forEach(({ target: { classList }, intersectionRatio }) => {
      if (intersectionRatio > 0.5) {
        classList.add("stepsIn");
      } else {
        classList.remove("stepsIn");
      }
    }),
  config
);

observerStep1.observe(step2);

observerStep3 = new IntersectionObserver(
  (entries) =>
    entries.forEach(({ target: { classList }, intersectionRatio }) => {
      if (intersectionRatio > 0.5) {
        classList.add("stepsIn");
      } else {
        classList.remove("stepsIn");
      }
    }),
  config
);

observerStep1.observe(step3);

/*Bio roll in*/
const configBio = {
    root: null, // Sets the framing element to the viewport
    rootMargin: "0px",
    threshold: 0.5,
  },
  bio = document.querySelector(".bio"),
  observerBio = new IntersectionObserver(
    (entries) =>
      entries.forEach(({ target: { classList }, intersectionRatio }) => {
        if (intersectionRatio > 0.5) {
          classList.add("actived");
        } else {
          classList.remove("actived");
        }
      }),
    configBio
  );

observerBio.observe(bio);
