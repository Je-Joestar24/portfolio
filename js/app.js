/**
 * app.js - Main entry point for the Portfolio SPA
 * ----------------------------------------------
 * Single-page portfolio: all sections load once; navigation scrolls between them.
 *
 * @author Jejomar Parrilla
 * @module js/app.js
 */

import { PortfolioPage } from './app/portfolioPage.js';
import { SectionNav } from './util/sectionNav.js';
import { initScrollReveal } from './util/scrollReveal.js';
import Main from './template/main.js';

document.addEventListener('DOMContentLoaded', async () => {
    new Main();

    const page = new PortfolioPage('#app__display');
    await page.render();

    const sectionNav = new SectionNav();
    sectionNav.mount();

    initScrollReveal();

    const initSlick = () => {
        if (window.$ && typeof $.fn.slick === 'function') {
            $('.project-slider, .experience-slider').not('.slick-initialized').slick({
                arrows: false,
                dots: true,
                adaptiveHeight: true,
                autoplay: true,
                autoplaySpeed: 2500,
            });
        }
    };

    initSlick();
    setTimeout(initSlick, 400);
});
