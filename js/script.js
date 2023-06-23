let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    };
  });
let header = document.querySelector('header');

header.classList.toggle('sticky', window.scrollY > 100);
};

/*======================= scroll reveal ====================*/
ScrollReveal({
  reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200,
  easing: 'ease',
  scale: 1,
  opacity: 0
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top', distance: '20px', duration: 1500, delay: 100, easing: 'ease-in-out', scale: 1.1, opacity: 0 });

ScrollReveal().reveal('.home-img, .about-container, .portfolio-box, .contact form', { origin: 'bottom', distance: '20px', duration: 1500, delay: 100, easing: 'ease-in-out', scale: 1.1, opacity: 0 });

ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left', distance: '20px', duration: 1500, delay: 100, easing: 'ease-in-out', scale: 1.1, opacity: 0 });

ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right', distance: '20px', duration: 1500, delay: 100, easing: 'ease-in-out', scale: 1.1, opacity: 0 });

const typed = new Typed('.multiple-text', {
  strings: ['Full-stack Developer!', 'Civil Engineer!', 'Freelancer!'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop:true
});