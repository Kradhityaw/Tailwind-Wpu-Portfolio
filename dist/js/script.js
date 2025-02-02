// Navbar Fixed
window.onscroll = () => {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
}

// Hamburger
hamburgerNav.addEventListener('click', () => {
    hamburgerNav.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});