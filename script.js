const menuButton = document.getElementsByClassName('hamburguer')[0];
const closeButton = document.getElementsByClassName('close-btn')[0];
const navContainer = document.getElementsByClassName('nav-container')[0];
const navLinks = document.getElementsByClassName('nav__links')[0];


menuButton.addEventListener('click', function(){
    navContainer.classList.toggle('nav-container--active');
    navLinks.classList.toggle('nav__links--active');
    closeButton.classList.toggle('close-btn--active');
    menuButton.classList.toggle('hamburguer--none');


})

closeButton.addEventListener('click', function(){
    navContainer.classList.toggle('nav-container--active');
    navLinks.classList.toggle('nav__links--active');
    menuButton.classList.toggle('hamburguer--none');
    closeButton.classList.toggle('close-btn--active');
})