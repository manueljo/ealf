import { CountUp } from './countUp.min.js';

const countUp = new CountUp('counter-2', 935684, { enableScrollSpy: true });
// window.onload = function() {
//   let countUp = new CountUp('counter-2', 935684);
//   countUp.start();
// }
document.addEventListener('DOMContentLoaded', () => {
    try {
        let countUp1 = new CountUp('counter-1', 20, { enableScrollSpy: true });
        let countUp2 = new CountUp('counter-2', 935684, { enableScrollSpy: true });
        let countUp3 = new CountUp('counter-3', 1233, { enableScrollSpy: true });
        let countUp4 = new CountUp('counter-4', 8, { enableScrollSpy: true });
        countUp1.start();
        countUp2.start();
        countUp3.start();
        countUp4.start();
    } catch (error) {
        console.error('Error initializing counters:', error);
    }
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
