/**
 * ExperienceView - Renders the Experience section of the portfolio SPA.
 * --------------------------------------------------------------------
 * - Displays work experience organized by company and project.
 * - Uses Summary and Experiences components for modular content.
 * - Features timeline layout with expandable project descriptions.
 * - Accessible and semantic HTML structure.
 *
 * @module js/views/experience.js
 */
import AbstractView from "./AbstractView.js";
import Summary from "./experience/summary.js";
import Experiences from "./experience/experiences.js";

/**
 * ExperienceView class extends AbstractView to render the Experience page content.
 * Sets the page title and generates the HTML for the experience section.
 */
export default class extends AbstractView {
    /**
     * Constructor for ExperienceView.
     * Calls the superclass constructor and sets the page title.
     */
    constructor() {
        super();
        this.setTitle("Jejoestar | Experience");
        this.summary = new Summary();
        this.experiences = new Experiences();
    }

    /**
     * Asynchronously generates the HTML content for the Experience page.
     * @returns {Promise<string>} A promise that resolves to the HTML content as a string.
     */
    async getHtml() {
        return `
            <section class="experience-section" aria-label="Work Experience">
                ${await this.summary.getHtml()}
                ${await this.experiences.getHtml()}
            </section>
        `;
    }

    /**
     * Lifecycle method called after view is mounted.
     * Binds event handlers for interactive elements.
     */
    async bindAll() {
        if (this.experiences && this.experiences.bindAll) {
            await this.experiences.bindAll();
        }
    }
}