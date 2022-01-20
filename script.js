
/*Highlight section when scrolled by*/
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
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
const primaryNav = document.querySelector('.nav');
const navToggle = document.querySelector('.mobile-nav-toggle');

navToggle.addEventListener('click', () => {
  const visibility = primaryNav.getAttribute("data-visible");
  
  if(visibility === "false") {
    primaryNav.setAttribute("data-visible", "true")
  } else {
    primaryNav.setAttribute("data-visible", "false")
  }
})

/*pres text roll in on scroll*/
const text = document.querySelector('#cvPres');

let options = {
  rootMargin: '-10%',
  threshold: 0.0
};

let observer = new IntersectionObserver(showItem, options);

function showItem(entries) {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.children[0].classList.add('active')
    }
  })
}