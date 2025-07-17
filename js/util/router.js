/**
 * Router Class
 * Handles client-side routing and view management for single page application.
 * Manages navigation between different views without full page reloads.
 */
import Home from '../views/home.js';
import About from '../views/about.js';
import Arcs from '../views/arcs.js';
import { actions } from './state.js';

export class Router {


    constructor(displayID) {
        // Define available routes and their corresponding views
        this.routes = [
            { path: '#/', view: Home, id: 'home-nav', message: 'HOME PAGE' },
            { path: '#/about', view: About, id: 'about-nav', message: 'ABOUT PAGE' },
            { path: '#/arcs', view: Arcs, id: 'arcs-nav', message: 'ARCS PAGE' },
        ];

        this.displayArea = document.querySelector(displayID);
    }

    /**
     * Navigates to a new URL and updates the view
     * Uses HTML5 History API to update URL without page refresh
     * 
     * @param {string} url - The URL to navigate to
     * @example
     * router.navigateTo('/products');
     */
    navigateTo(url) {
        history.pushState(null, null, url);
        this.route();
    }

    /**
     * Routes to the appropriate view based on current URL.
     * Matches URL pathname against defined routes and renders corresponding view.
     * If no match is found, defaults to home view.
     * 
     * @async
     * @returns {Promise<void>}
     * @example
     * await router.route();
     */
    async route() {
        // Find potential route matches by comparing current pathname
        const potentialMatches = this.routes.map(route => {
            return {
                route: route,
                isMatch: location.hash === route.path,
                id: route.id ? route.id : ''
            }
        });

        // Get first matching route or default to home route if no match
        let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch);

        if (!match) {
            location.hash = '#/';
            match = {
                route: this.routes[0], // Default to home route
                isMatch: true,
            };
        }

        // Initialize view instance and render its HTML content
        const view = new match.route.view();
        actions.setActiveNavigation(match.id, 'active');
        actions.displayMessage(match.route.message, 500);

        this.displayArea.innerHTML = await view.getHtml();
        if (view.bindAll) await view.bindAll();

        // Reset scroll position to top after route change
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
}
