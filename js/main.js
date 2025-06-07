// Toggle menu for mobile view
const menuButton = document.querySelector('.menu-button');
const navMenu = document.querySelector('.navbar ul');

menuButton.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Example function for scroll animation (smooth scroll to sections)
const links = document.querySelectorAll('.navbar a');
links.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    window.scrollTo({
      top: targetElement.offsetTop - 50,
      behavior: 'smooth'
    });
  });
});
