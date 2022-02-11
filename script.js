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
const burger = document.querySelector(".first")
const burgertwo = document.querySelector(".second")
const burgerthree = document.querySelector(".third")

navToggle.addEventListener("click", () => {
  const visibility = primaryNav.getAttribute("data-visible");
  if (visibility === "false") {
    primaryNav.setAttribute("data-visible", "true");
    burger.setAttribute("aria-expended", "true");
    burgertwo.setAttribute("aria-expended", "true");
    burgerthree.setAttribute("aria-expended", "true");
    
  } else {
    primaryNav.setAttribute("data-visible", "false");
    burger.setAttribute("aria-expended", "false");
    burgertwo.setAttribute("aria-expended", "false");
    burgerthree.setAttribute("aria-expended", "false");
  }
});

/*scroll transition*/
/*gsap.to(".panel:not(:last-child)", {
  yPercent: -100, 
  ease: "none",
  stagger: 0.5,
  scrollTrigger: {
    trigger: "#container",
    start: "top top",
    end: "+=300%",
    scrub: true,
    pin: true
  }
});

gsap.set(".panel", {zIndex: (i, target, targets) => targets.length - i});*/

/*little bar animation*/
gsap.from(".hr", {
  scrollTrigger: {
  trigger: ".hr",
    toggleActions: "restart restart none none",
  },
  autoAlpha: 0,
  xPercent: -200,
  ease: Power2.easeInOut,
  duration: 1,
  stager: 0.1,
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
var rule = CSSRulePlugin.getRule(".name:after");

gsap.from(".name", {
  scrollTrigger: ".name",
  opacity: 0,
  y: -50,
  duration: 1,
});

gsap.to(rule, { cssRule: { scaleY: 0 }, duration: 1 });

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
gsap.from(".photo", {
  scrollTrigger: ".photo",
  autoAlpha: 0,
  xPercent: -100,
  ease: Power2.easeInOut,
  rotation: -360,
  duration: 3,
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
  delay: 0.5,
  stager: 0.1,
});
/*Tilt effect on bio*/
VanillaTilt.init(document.querySelector(".bio"), {
  glare: true,
});


/*What can I do slide in*/
var rule = CSSRulePlugin.getRule(".service:after");

gsap.from(".service", {
  scrollTrigger: ".service",
  opacity: 0,
  y: -50,
  duration: 1,
});

/*discover slide in*/
gsap.from(".discoverEntrance", {
  scrollTrigger: {
    trigger: ".discoverEntrance",
    toggleActions: "restart none none none",
    start: "top 80%",
  },
  autoAlpha: 0,
  opacity: 0,
  yPercent: 20,
  ease: Power2.easeInOut,
  duration: 1,
  stagger: 0.7,
});

/*design slide in*/
gsap.from(".designEntrance", {
  scrollTrigger: {
    trigger: ".designEntrance",
    toggleActions: "restart none none none",
    start: "top 60%",
  },
  autoAlpha: 0,
  opacity: 0,
  yPercent: 20,
  ease: Power2.easeInOut,
  duration: 1,
  stagger: 0.7,
});

/*code slide in*/
gsap.from(".codeEntrance", {
  scrollTrigger: {
    trigger: ".codeEntrance",
    toggleActions: "restart none none none",
    start: "top 40%",
  },
  autoAlpha: 0,
  opacity: 0,
  yPercent: 20,
  ease: Power2.easeInOut,
  duration: 1,
  stagger: 0.7,
});


/*Tilt effect on loupe*/
VanillaTilt.init(document.querySelector(".loupeIcon"), {
  glare: true,
});
/*Tilt effect on hammer*/
VanillaTilt.init(document.querySelector(".hammerIcon"), {
  glare: true,
});
/*Tilt effect on code*/
VanillaTilt.init(document.querySelector(".codeIcon"), {
  glare: true,
});



/*Skill slide in*/
gsap.from(".skill", {
  scrollTrigger: ".skill",
  autoAlpha: 0,
  yPercent: 50,
  ease: Power2.easeInOut,
  duration: 1,
  stager: 0.1,
});

/*Skill bars animation*/
gsap.from(".bar abbr", {
  scrollTrigger: ".bar",
  left: -15,
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

/*Grid entrance*/

gsap.from(".tile", {
  scrollTrigger: {
    trigger: ".tile",
    toggleActions: "restart none none none",
    start: "top 80%",
  },
  y: -50,
  scale: 1.1,
  duration: 0.5,
  opacity:0,
  stager: { eact: 0.5 },
});

