
const body = document.querySelector('body')
const menu = document.querySelector('#mobile_menu')
const menuLinks = document.querySelector('.navbar_menu')
const navLogo = document.querySelector('#navbar_logo')


// display mobile menu
const mobileMenu = () =>{
  menu.classList.toggle('is-active')
  menuLinks.classList.toggle('active')
  body.classList.toggle('active')
};

// trigger navbar_toggle 

menu.addEventListener('click',mobileMenu)

//animations

gsap.registerPlugin(ScrollTrigger)

gsap.from('.animate-intro',{
  duration:0.6,
  opacity: 0,
  y: -150,
  stagger: 0.3
});

gsap.from('.animate-gallery',{
  scrollTrigger:'.animate-gallery',
  duration:0.6,
  opacity: 1.2,
  y: -150,
  stagger: 0.10
});

gsap.from('.animate-gallery-img',{
  scrollTrigger:'.animate-gallery-img',
  duration:0.5,
  opacity: 1.2,
  y: 150,
  stagger: 0.12,
  delay:0.5
});

gsap.from('.animate-subscription',{
  scrollTrigger:'.animate-subscription',
  duration:0.6,
  opacity: 1.2,
  y: -150,
  stagger: 0.12
});

gsap.from('.animate-card',{
  scrollTrigger:'.animate-card',
  duration:0.5,
  opacity: 0,
  y: -150,
  stagger: 0.3,
  delay: 1
});

gsap.from('.animate-form',{
  scrollTrigger:'.animate-form',
  duration:1,
  opacity: 0,
  y: -150,
  stagger: 0.3,
  delay: 0.2
});
