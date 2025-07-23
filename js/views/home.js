/**
 * HomeView - Renders the Home section of the portfolio SPA.
 * --------------------------------------------------------
 * - Displays the hero section and summary of the portfolio owner.
 * - Uses Hero and Summary components for modular content.
 * - Accessible and semantic HTML structure.
 *
 * @module js/views/home.js
 */
import AView from "./AbstractView.js"

import Hero from "./home/hero.js";
import Summary from "./home/summary.js";


/**
 * HomeView class extends AView to render the Home page content.
 * Sets the page title and generates the HTML for the home section.
 */
export default class extends AView {
    constructor() {
        super();
        this.setTitle("Jejoestar | Home");
        this.summary = new Summary();
        this.hero = new Hero();
    }

    /**
     * Asynchronously generates the HTML content for the Home page.
     * @returns {Promise<string>} A promise that resolves to the HTML content as a string.
     */
    async getHtml() {
        return `
            ${await this.hero.getHtml()}
            ${await this.summary.getHtml()}
        `;
    }
}