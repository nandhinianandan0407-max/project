// Typing Animation
const roles = ["Web Developer", "UI Designer", "Frontend Engineer", "Freelancer"];
let index = 0, charIndex = 0;
const typed = document.getElementById("typed");

function type() {
  if (charIndex < roles[index].length) {
    typed.textContent += roles[index].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 1500);
  }
}
function erase() {
  if (charIndex > 0) {
    typed.textContent = roles[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50);
  } else {
    index = (index + 1) % roles.length;
    setTimeout(type, 200);
  }
}
document.addEventListener("DOMContentLoaded", type);

// Scroll reveal animation
const fadeElements = document.querySelectorAll('.fade-in');
function revealOnScroll() {
  fadeElements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) el.classList.add('visible');
  });
}
window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

// Smooth scroll
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Contact alert
document.getElementById("contactForm").addEventListener("submit", e => {
  e.preventDefault();
  alert("Message sent successfully 💌");
  e.target.reset();
});
