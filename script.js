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
/*Who am I*/
/*const config = {
    root: null, // Sets the framing element to the viewport
    rootMargin: "0px",
    threshold: 0.3,
  },
  
  step = document.querySelector(".propo"),
  observerSteps = new IntersectionObserver(
    (entries) =>
      entries.forEach(({ target: { classList }, intersectionRatio }) => {
        if (intersectionRatio > 0.5) {
          classList.add("propoactivated");
        } else {
          classList.remove("propoactivated");
        }
      }),
    config
  );

observerSteps.observe(step);*/

/*Bio roll in*/
/*const configBio = {
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

observerBio.observe(bio);*/

/*Who am I slide in*/
gsap.from(".propo", {
  scrollTrigger: ".propo",
  autoAlpha:0,
  xPercent: -100,
  ease: Power2.easeInOut,
  duration: 2,
  stager: 0.1
});

/*bio slide in*/
gsap.from(".bio", {
  scrollTrigger: ".bio",
  autoAlpha:0,
  xPercent: 100,
  ease: Power2.easeInOut,
  duration: 2,
  stager: 0.1
});


/*Skill bars animation*/


gsap.from(".bar abbr", {
  scrollTrigger: ".bar",
  left: 0,
  ease: Power2.easeInOut,
  duration: 3,
  stager: 0.1
});

gsap.from(".bar span", {
  scrollTrigger: ".bar",
  width: "0px",
  ease: Power2.easeInOut,
  duration: 3,
  stager: 0.1
})



