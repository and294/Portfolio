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


/*Hello swing on load*/
const swingRadius = gsap.getProperty("body", "--radius"); // gets the radius var from CSS... useful for this example's flexability.

const transformOriginValue = "50% -" + swingRadius + "vh";

gsap.from(".hello", {
  duration: 10,
  rotation: "-30deg",
  transformOrigin: transformOriginValue,
  ease: "elastic.out( 3, 0.1)",
  /*repeat: -1,*/
  delay: 0,
});

/*Name slide in*/
gsap.from(".name", {
  scrollTrigger: ".name",
  autoAlpha: 0,
  xPercent: -20,
  ease: Power2.easeInOut,
  duration: 1,
  stager: 0.1,
});
/*Font end slide in*/
gsap.from(".frontend", {
  scrollTrigger: ".frontend",
  autoAlpha: 0,
  xPercent: 20,
  ease: Power2.easeInOut,
  duration: 1,
  stager: 0.1,
});
/*photo roll in*/
gsap.from(".name", {
  scrollTrigger: ".name",
  autoAlpha: 0,
  xPercent: -20,
  ease: Power2.easeInOut,
  duration: 1,
  stager: 0.1,
});


/*Who am I slide in*/
gsap.from(".propo", {
  scrollTrigger: ".propo",
  autoAlpha: 0,
  xPercent: -20,
  ease: Power2.easeInOut,
  duration: 1,
  stager: 0.1,
});

/*bio slide in*/
gsap.from(".bio", {
  scrollTrigger: ".bio",
  autoAlpha: 0,
  xPercent: 50,
  ease: Power2.easeInOut,
  duration: 1,
  stager: 0.1,
});

/*Skill bars animation*/

gsap.from(".bar abbr", {
  scrollTrigger: ".bar",
  left: 0,
  ease: Power2.easeInOut,
  duration: 3,
  stager: 0.1,
});

gsap.from(".bar span", {
  scrollTrigger: ".bar",
  width: "0px",
  ease: Power2.easeInOut,
  duration: 3,
  stager: 0.1,
});
