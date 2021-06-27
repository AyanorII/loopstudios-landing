const menuButton = document.getElementsByClassName('hamburguer')[0];
const closeButton = document.getElementsByClassName('close-btn')[0];
const navContainer = document.getElementsByClassName('nav-container')[0];
const navLinks = document.getElementsByClassName('nav__links')[0];


menuButton.addEventListener('click', function () {
    setTimeout(function () {
        navContainer.classList.add('nav-container--active');
        closeButton.classList.add('close-btn--active');
    }, 600);

    navLinks.classList.add('nav__links--active');
    navLinks.classList.remove('nav__links--hide');
    menuButton.classList.add('hamburguer--none');
})

closeButton.addEventListener('click', function () {
    navLinks.classList.add('nav__links--hide');

    setTimeout(function () {
        navContainer.classList.remove('nav-container--active');
        closeButton.classList.remove('close-btn--active');
    }, 400);

    setTimeout(() => {
        menuButton.classList.remove('hamburguer--none');
    }, 700);

    setTimeout(function () {
        navLinks.classList.remove('nav__links--active');
    }, 800);
})