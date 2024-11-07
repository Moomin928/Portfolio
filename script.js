let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

// Toggle menu on icon click
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x'); // Change icon (toggle 'close' icon)
    navbar.classList.toggle('active'); // Toggle visibility of navbar
};