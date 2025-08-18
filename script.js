document.addEventListener('DOMContentLoaded', () => {
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileNavToggle = document.querySelector('.mobile-toggle');
    const closeNav = document.querySelector('.close-nav');
    // const mainNav = document.querySelector('.main-nav');

    mobileNavToggle.addEventListener('click', () => {
        mobileNav.style.display = mobileNav.style.display === 'flex' ? 'none' : 'flex';
    });

    closeNav.addEventListener('click', () => {
        mobileNav.style.display = 'none';
    });

})
