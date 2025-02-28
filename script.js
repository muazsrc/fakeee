const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

// Add an event listener to the mobile menu button
mobileMenuBtn.addEventListener('click', () => {
    // Toggle the active class on the nav links
    navLinks.classList.toggle('active');
});
// Get the close button
const closeButton = document.querySelector('.close-btn');

// Add an event listener to the close button
closeButton.addEventListener('click', () => {
    // Remove the active class from the nav links
    navLinks.classList.remove('active');
});