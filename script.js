const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('nav a');


window.addEventListener('scroll', ()=> {
  let current = "";
  
  sections.forEach( section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if(pageYOffset >= sectionTop){
      current = section.getAttribute('class');
    }
  })
  
  navLi.forEach( a)
})