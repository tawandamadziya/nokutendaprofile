const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.site-nav');
const yearEl = document.getElementById('year');

yearEl.textContent = new Date().getFullYear();

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('open');
});

const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Thank you! Your message is ready to be sent. Nokutenda will be in touch soon.');
    contactForm.reset();
  });
}
