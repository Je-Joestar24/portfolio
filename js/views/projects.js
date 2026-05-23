/**
 * ProjectsView - Renders the Projects section of the portfolio SPA.
 * ---------------------------------------------------------------
 * - Displays a portfolio of top projects with descriptions and images.
 * - Uses a Cards component to render project cards.
 * - Integrates with Slick slider for interactive project browsing.
 * - Includes decorative SVG for visual enhancement.
 * - Accessible and semantic HTML structure.
 *
 * @module js/views/projects.js
 */
// NOTE: After rendering, initialize slick slider on .project-slider and ensure arrows are hidden by CSS.
// Example: $('.project-slider').slick({ arrows: false, dots: true });
import AView from "./AbstractView.js"
import Cards from "./projects/cards.js";

/**
 * ProjectsView class extends AView to render the Projects page content.
 * Sets the page title and generates the HTML for the projects section.
 */
export default class extends AView {
    constructor() {
        super();
        this.setTitle("Jejoestar | Projects");
        this.cards = new Cards();
    }
    /**
     * Asynchronously generates the HTML content for the Projects page.
     * @returns {Promise<string>} A promise that resolves to the HTML content as a string.
     */
    async getHtml() {
        return `
        <section class="projects-section" aria-label="Projects Portfolio">
          <header class="section-header">
            <span class="section-header__eyebrow">Portfolio</span>
            <h2 class="section-header__title">Featured <span>Projects</span></h2>
            <p class="section-header__desc">Each project is a full case study—architecture, stack, and implementation details pulled from the repos. Expand any entry for the complete technical breakdown.</p>
            <hr class="section-header__rule" aria-hidden="true" />
          </header>
          ${await this.cards.getHtml()}
          <div class="projects-decorative" aria-hidden="true">
            <svg width="140" height="60" viewBox="0 0 140 60" fill="none"><circle cx="30" cy="30" r="28" fill="#a68b6a18"><animate attributeName="r" values="28;32;28" dur="2.5s" repeatCount="indefinite"/></circle><rect x="90" y="18" width="32" height="18" rx="4" fill="#a68b6a12"><animate attributeName="y" values="18;10;18" dur="2.5s" repeatCount="indefinite"/></rect></svg>
          </div>
        </section>
        `;
    }

    async bindAll() {
        if (this.cards?.bindAll) {
            await this.cards.bindAll();
        }
    }
}