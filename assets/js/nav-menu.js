
const navLinks = document.querySelector('.nav-links');
const menuOpenIcon = document.querySelector('.fas.fa-bars');
const menuCloseIcon = document.querySelector('.fas.fa-times');
const mediaQuery = window.matchMedia('(max-width: 475px)');

let isMenuOpen = false;
let previousLink;

let resetMenu = event => {
    isMenuOpen = false;
    if (!mediaQuery.matches) {
        navLinks.style.display = 'flex';
    } else {
        navLinks.style.display = 'none';
    }
};

let toggleMenu = event => {
    if (isMenuOpen) {
        closeMenu();
    } else {
        openMenu();
    }
};

let openMenu = () => {
    isMenuOpen = true;
    menuOpenIcon.style.display = 'none';
    menuCloseIcon.style.display = 'block';
    navLinks.style.display = 'flex';
};

let closeMenu = () => {
    isMenuOpen = false;
    menuOpenIcon.style.display = 'block';
    menuCloseIcon.style.display = 'none';
    navLinks.style.display = 'none';
};

let onNavLinkClick = event => {
    if (previousLink)
            previousLink.classList.remove('active');
    previousLink = event.target;
    previousLink.classList.add('active');
    if (mediaQuery.matches)
        toggleMenu(event);
};

let addLinkClickEventListener = link => {
    link.addEventListener('click', onNavLinkClick);
};

window.addEventListener('resize', resetMenu);
document.querySelector('.nav-brand-link').addEventListener('click', event => {
    if (previousLink)
        previousLink.classList.remove('active');
    if (mediaQuery.matches && isMenuOpen)
        closeMenu();
});
document.querySelector('.nav-toggler').addEventListener('click', toggleMenu);
Array.from(document.getElementsByClassName('nav-link')).forEach(addLinkClickEventListener);
