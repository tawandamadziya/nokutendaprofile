const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.site-nav');
const yearEl = document.getElementById('year');
const bookingEmail = 'hello@nokutombindo.com';

yearEl.textContent = new Date().getFullYear();

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('open');
});

const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(contactForm);
    const name = formData.get('name') || '';
    const email = formData.get('email') || '';
    const bookingType = formData.get('bookingType') || 'General booking';
    const message = formData.get('message') || '';
    const subject = `Booking request: ${bookingType}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Booking type: ${bookingType}`,
      '',
      message
    ].join('\n');

    window.location.href = `mailto:${bookingEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    contactForm.reset();
  });
}
