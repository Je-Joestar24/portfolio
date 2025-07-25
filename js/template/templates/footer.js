/**
 * FooterTemplate class extends AbstractTemplate to generate the HTML structure for the footer section.
 * It includes components for description, navigations, social media links, acknowledgments, and copyright information.
 */
import AbstractTemplate from "./AbstractTemplate.js";
import Logo from "./footer/logo.js";
import Navigations from "./footer/navigations.js";
import Social from "./footer/social.js";
import Decoration from "./footer/decoration.js";
import Copyright from "./footer/copyright.js";

export default class FooterTemplate extends AbstractTemplate {
  /**
   * Constructor initializes the footer template by creating instances of its components.
   */
  constructor() {
    super();
    this.logo = new Logo(); // Description component for the footer
    this.nav = new Navigations(); // Navigations component for the footer
    this.social = new Social(); // Social component for the footer
    this.decor = new Decoration(); // Acknowledgments component for the footer
    this.copy = new Copyright(); // Copyright information component for the footer
  }

  /**
   * Asynchronously generates the HTML structure for the footer section.
   * It combines the HTML content from each component to form the complete footer.
   * @returns {Promise<string>} A promise that resolves to the HTML string of the footer.
   */
  async getHtml() {
    return `
      <div class="footer__container">
        ${await this.logo.getHtml()}
        ${await this.nav.getHtml()}
        ${await this.social.getHtml()}
      </div>
      ${await this.copy.getHtml()}
      ${await this.decor.getHtml()}
      `;
  }

}