/**
 * FooterDescription class generates the HTML structure for the description section in the footer.
 * It includes a logo link to the home page and a brief description of the website's purpose.
 */
export default class FooterDescription {
    /**
     * Asynchronously generates the HTML structure for the description section in the footer.
     * @returns {Promise<string>} A promise that resolves to the HTML string of the description section.
     */
    async getHtml(){
        return `
        <div class="footer__brand-area">
          <div class="footer__brand">Jejo-<span>Star</span></div>
        </div>
        `;
    }
}