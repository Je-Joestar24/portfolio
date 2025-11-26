/**
 * AboutView - Renders the About section of the portfolio SPA.
 * ----------------------------------------------------------
 * - Displays introduction and skills of the portfolio owner.
 * - Uses Intro and Skills components for modular content.
 * - Accessible and semantic HTML structure.
 *
 * @module js/views/experience.js
 */
import AbstractView from "./AbstractView.js";

import Intro from "./about/intro.js";
import Skills from "./about/skills.js";
/**
 * AboutView class extends AbstractView to render the About page content.
 * Sets the page title and generates the HTML for the about section.
 */
export default class extends AbstractView{
    /**
     * Constructor for AboutView.
     * Calls the superclass constructor and sets the page title.
     */
    constructor(){
        super();
        this.setTitle("Jejoestar | Experience");
        this.intro = new Intro();
        this.skills = new Skills();
    }

    /**
     * Asynchronously generates the HTML content for the About page.
     * @returns {Promise<string>} A promise that resolves to the HTML content as a string.
     */
    async getHtml(){
        return `
      <div class="app__about">
        ${await this.intro.getHtml()}
        ${await this.skills.getHtml()}
      </div>
        `;
    }
}