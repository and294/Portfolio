

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
const burger = document.querySelector(".first");
const burgertwo = document.querySelector(".second");
const burgerthree = document.querySelector(".third");

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


/*little bar animation*/

gsap.from(".hr1", {
  scrollTrigger: {
    trigger: ".hr1",
    toggleActions: "restart restart none none",
  },
  autoAlpha: 0,
  xPercent: -200,
  ease: Power2.easeInOut,
  duration: 1,
});
gsap.from(".hr2", {
  scrollTrigger: {
    trigger: ".hr2",
    start: "top 95%",
    toggleActions: "restart restart none none",
  },
  autoAlpha: 0,
  xPercent: -200,
  ease: Power2.easeInOut,
  duration: 1,
});
gsap.from(".hr3", {
  scrollTrigger: {
    trigger: ".hr3",
    start: "top 95%",
    toggleActions: "restart restart none none",
  },
  autoAlpha: 0,
  xPercent: -200,
  ease: Power2.easeInOut,
  duration: 1,
});


/*Hello swing on load*/
const swingRadius = gsap.getProperty("body", "--radius"); // gets the radius var from CSS... useful for this example's flexability.

const transformOriginValue = "50% -" + swingRadius + "vh";

gsap.from(".hello", {
  duration: 7,
  rotation: "-30deg",
  transformOrigin: transformOriginValue,
  ease: "elastic.out( 3, 0.1)",
  opacity: 0,
})

//Landing page timeline

const navElements = document.querySelectorAll(".navItem")

const introTL = gsap.timeline();

introTL
  .from(".intro", {
  opacity: 0,
  autoAlpha: 0,
  height: 1000,
  ease: "power2.easeInOut",
  duration: 1,
})

/*Name slide in*/
.from(".name", {
  opacity: 0,
  y: -50,
  duration: 0.5,
 
})

/*Font end slide in*/
.from(".frontend", {
  autoAlpha: 0,
  //xPercent: 20,
  y: -50,
  ease: "power3.out",
  duration: 0.5,
  delay: 0.1,
})

/*Scroll down Arrow*/
.from(".arrow", {
  autoAlpha: 0,
  yPercent: -100,
  ease: "power2.easeInOut",
  delay: 0.3,
  duration: 0.5,
})
.from(navElements, {
  opacity: 0,
  y: 40,
  ease: "power2.easeInOut",
  duration: 0.5,
  stagger: {
    amount: 0.8
  }
});

const whoAmITL = gsap.timeline();

/*Who am I slide in*/

//whoAmITL
 gsap.from(".propo", {
  scrollTrigger:{
  trigger: ".propo",
  start: "top 99%"
  },
  opacity: 0,
  yPercent: 50,
  ease: Power2.easeInOut,
  duration: 1,
})

/*bio slide in*/
gsap.from(".bio", {
  scrollTrigger:{
  trigger: ".bio",
  start: "top 99%"
  },
  autoAlpha: 0,
  xPercent: 50,
  ease: Power2.easeInOut,
  duration: 1,
  delay: 0.5,
  stager: 0.1,
})

/*What can I do slide in*/
gsap.from(".service", {
  scrollTrigger: {
    trigger: ".service",
    start: "top 80%",
  },
  opacity: 0,
  y: 50,
  duration: 1,
});

/*Tilt effect on bio*/
VanillaTilt.init(document.querySelector(".bio"), {
  glare: true,
});

/*Parallax effect on services*/


  var scene = document.getElementById('serviceGrid');
  if (window.innerWidth > 1023) {
    var parallaxInstance = new Parallax(scene);
  }



/*discover slide in*/
gsap.from(".discoverEntrance", {
  scrollTrigger: {
    trigger: ".discoverEntrance",
    start: "top 99%",
  },
  autoAlpha: 0,
  opacity: 0,
  yPercent: 20,
  ease: Power2.easeInOut,
  duration: 1,
  stagger: 0.5,
});

/*design slide in*/
gsap.from(".designEntrance", {
  scrollTrigger: {
    trigger: ".designEntrance",
    start: "top 99%",
  },
  autoAlpha: 0,
  opacity: 0,
  yPercent: 20,
  ease: Power2.easeInOut,
  duration: 1,
  stagger: 0.5,
});

/*code slide in*/
gsap.from(".codeEntrance", {
  scrollTrigger: {
    trigger: ".codeEntrance",
    start: "top 99%",
  },
  autoAlpha: 0,
  opacity: 0,
  yPercent: 20,
  ease: Power2.easeInOut,
  duration: 1,
  stagger: 0.5,
});

/*Skill slide in*/
gsap.from(".skill", {
  scrollTrigger: {
    trigger: ".skill",
    start: "top 99%",
  },
  opacity: 0,
  y: 50,
  duration: 1,
});
/*Skill bars animation*/
const bars = document.querySelectorAll(".bar");

gsap.from(bars, {
 scrollTrigger: {
    trigger: ".bar",
    start: "top 90%",
  },
  y: 15,
  opacity: 0,
  ease: "power3.out",
  duration: 1,
  stagger: { amount: 0.9 },
});

/*gsap.from(".bar abbr", {
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
});*/

/*Project slide in*/
gsap.from(".project", {
  scrollTrigger: {
    trigger: ".project",
    start: "top 99%",
  },
  opacity: 0,
  y: 50,
  duration: 1,
});

gsap.from(".appTitle", {
  scrollTrigger: {
    trigger: ".appTitle",
    start: "top 99%",
  },
  opacity: 0,
  y: 50,
  duration: 1,
});

/*Grid entrance*/
const tile = document.querySelectorAll(".tile")

gsap.from(tile, {
  scrollTrigger: {
    trigger: ".tile",
    toggleActions: "restart none none none",
    start: "top 95%",
  },
  y: -50,
  scale: 1.1,
  duration: 0.5,
  opacity: 0,
  stagger: { eact: 0.5 },
});

gsap.from(".webTitle", {
  scrollTrigger: {
    trigger: ".webTitle",
    start: "top 99%",
  },
  opacity: 0,
  y: 50,
  duration: 1,
});

gsap.from(".webImg", {
  scrollTrigger: {
    trigger: ".webImg",
    toggleActions: "restart none none none",
    start: "top 95%",
  },
  y: 50,
  scale: 1.1,
  duration: 0.5,
  opacity: 0,
  stagger: { eact: 0.5 },
});

/*parallax get in touch section*/

gsap.to(".inTouch", {
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


/*Copy Phone to clipboard*/

function copyPhoneNumber() {
  /* Get the text field */
  var copyText = document.getElementById("phoneNumber");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

  /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.value);
  
  /* Alert the copied text */
  alert("Copied the text: " + copyText.value);
}