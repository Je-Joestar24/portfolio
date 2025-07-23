/**
 * ServicesView - Renders the Services section of the portfolio SPA.
 * ---------------------------------------------------------------
 * - Displays a list of professional services offered.
 * - Uses a Cards component to render service cards.
 * - Includes decorative SVG for visual enhancement.
 * - Accessible and semantic HTML structure.
 *
 * @module js/views/services.js
 */
import AView from "./AbstractView.js"
import Cards from "./services/cards.js";

/**
 * ServicesView class extends AView to render the Services page content.
 * Sets the page title and generates the HTML for the services section.
 */
export default class extends AView {
    constructor() {
        super();
        this.setTitle("Jejoestar | Services");
        this.cards = new Cards();
    }

    /**
     * Asynchronously generates the HTML content for the Services page.
     * @returns {Promise<string>} A promise that resolves to the HTML content as a string.
     */
    async getHtml() {
        return `
        <section class="services-section" aria-label="Services">
          <h2 class="services-title">Services</h2>
          <p class="services-desc">I provide a range of professional services including Web Development, UX/UI Design, Web Maintenance, Optimization, and creation of technical diagrams (Use Case, Class, ERD, and more) to help you build, improve, and document your digital projects.</p>
          ${await this.cards.getHtml()}
          <div class="services-decorative" aria-hidden="true">
            <svg width="120" height="60" viewBox="0 0 120 60" fill="none"><polygon points="10,50 60,10 110,50" fill="#b388ff11"><animate attributeName="points" values="10,50 60,10 110,50;10,40 60,20 110,40;10,50 60,10 110,50" dur="3s" repeatCount="indefinite"/></polygon></svg>
          </div>
        </section>
        `;
    }
}