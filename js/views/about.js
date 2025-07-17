import AbstractView from "./AbstractView.js";

import Intro from "./about/intro.js";
import Skills from "./about/skills.js";
/**
 * AboutView class extends AbstractView to render the About page content.
 * It sets the page title and generates the HTML content for the About page.
 */
export default class extends AbstractView{
    /**
     * Constructor for AboutView.
     * Calls the superclass constructor and sets the page title.
     */
    constructor(){
        super();
        this.setTitle("Jejoestar24 | About");
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