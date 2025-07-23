/**
 * app.js - Main entry point for the Portfolio SPA
 * ----------------------------------------------
 * - Initializes the Single Page Application (SPA) for the portfolio
 * - Handles client-side routing, dynamic content injection, and state management
 * - Integrates third-party libraries (Slick Carousel, jQuery)
 * - Ensures accessibility, performance, and modular architecture
 *
 * Main Responsibilities:
 * - Set up the main application shell and router
 * - Listen for navigation events and update the view accordingly
 * - Initialize interactive components (e.g., Slick slider)
 * - Observe DOM changes to re-initialize UI plugins as needed
 *
 * @author Jejomar Parrilla
 * @version 1.0.0
 * @module js/app.js
 */

import { Router } from './util/router.js';
import Main from './template/main.js';

/**
 * DOMContentLoaded event handler
 * - Initializes the main layout, router, and event listeners
 * - Sets up Slick slider and observes DOM changes for dynamic content
 */
document.addEventListener('DOMContentLoaded', async () => {
    new Main();
    const router = new Router('#app__display');

    // Add event listeners for navigation and page reload
    window.addEventListener('popstate', () => router.route());
    window.addEventListener('load', () => router.route());

    document.body.addEventListener('click', (e) => {
        if (e.target.matches('[data-link]')) {
            e.preventDefault();
            router.navigateTo(e.target.href);
        }
    });
    // Initial route
    router.route();

    // Slick slider initialization after each route
    const initSlick = () => {
        if (window.$ && typeof $.fn.slick === 'function') {
            $('.project-slider').not('.slick-initialized').slick({
                arrows: false,
                dots: true,
                adaptiveHeight: true,
                autoplay: true,           // Enable autoplay
                autoplaySpeed: 2500       // Time between slides in milliseconds (3 seconds)
            });
        }
    };

    /**
     * Initializes the Slick slider for project carousels if present in the DOM.
     * Ensures that the slider is only initialized once per element.
     */
    const observer = new MutationObserver(() => {
        initSlick();
    });
    observer.observe(document.getElementById('app__display'), { childList: true, subtree: true });

    // Also run on initial load
    setTimeout(initSlick, 300);
});
