import AbstractTemplate from "./AbstractTemplate.js";

import Logo from "./navigation/logo.js";
import Navs from "./navigation/navs.js";
/**
 * NavigationTemplate class extends AbstractTemplate to render the navigation bar content.
 * It defines the navigation links and generates the HTML content for the navigation bar.
 */
export default class extends AbstractTemplate {
  /**
   * Constructor for NavigationTemplate.
   * Calls the superclass constructor to initialize the template.
   */
  constructor() {
    super();
    this.logo = new Logo();
    this.navs = new Navs();
  }


  /**
   * Asynchronously generates the HTML content for the navigation bar.
   * @returns {Promise<string>} A promise that resolves to the HTML content as a string.
   */
  async getHtml() {
    return `
      <div class="nav__container">
        ${await this.logo.getHtml()}
        ${await this.navs.getHtml()}
      </div>
      `;
  }
}