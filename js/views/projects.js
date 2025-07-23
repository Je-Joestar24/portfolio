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
          <h2 class="projects-title">Projects</h2>
          <p class="projects-desc">A selection of my top projects, showcasing modern web development, clean architecture, and creative UI/UX. Explore the code, try the demos, and see the technologies in action.</p>
          ${await this.cards.getHtml()}
          <div class="projects-decorative" aria-hidden="true">
            <svg width="140" height="60" viewBox="0 0 140 60" fill="none"><circle cx="30" cy="30" r="28" fill="#b388ff11"><animate attributeName="r" values="28;32;28" dur="2.5s" repeatCount="indefinite"/></circle><rect x="90" y="18" width="32" height="18" rx="4" fill="#b388ff09"><animate attributeName="y" values="18;10;18" dur="2.5s" repeatCount="indefinite"/></rect></svg>
          </div>
        </section>
        `;
    }
}