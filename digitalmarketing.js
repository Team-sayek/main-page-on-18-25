/* Sticky Header */
window.addEventListener("scroll", () => {
  let header = document.querySelector('.header');
  header.classList.toggle('sticky', window.scrollY > 100);
});

/* Scroll Animations */
const observer = new IntersectionObserver(entries => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      if (entry.target.classList.contains('animate-list')) {
        setTimeout(() => entry.target.classList.add('show'), index * 200);
      } else {
        entry.target.classList.add('show');
      }
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.animate-slide, .animate-fade, .animate-list')
  .forEach(el => observer.observe(el));

/* Project Cards Fade-in */
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".project-card");
  cards.forEach((card, index) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(50px)";
    setTimeout(() => {
      card.style.transition = "all 0.8s ease";
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }, index * 300);
  });
});

/* Contact Form */
const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", e => {
  e.preventDefault();
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let phone = document.getElementById("phone").value.trim();
  let message = document.getElementById("message").value.trim();

  if (name && email && phone && message) {
    formMessage.innerText = "✅ Message sent successfully!";
    formMessage.style.color = "lightgreen";
    form.reset();
  } else {
    formMessage.innerText = "⚠️ Please fill all fields correctly.";
    formMessage.style.color = "tomato";
  }
});
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('#navbar');

menuIcon.onclick = () => {
  navbar.classList.toggle('active');
  menuIcon.classList.toggle('bx-x'); // change icon to "X"
};
