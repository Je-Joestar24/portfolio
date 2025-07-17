/**
 * FooterNavigations class generates the HTML structure for the navigation links in the footer.
 * It includes a title and links to key sections of the website.
 */
export default class FooterNavigations {
    /**
     * Asynchronously generates the HTML structure for the navigation links in the footer.
     * @returns {Promise<string>} A promise that resolves to the HTML string of the navigation links.
     */
    async getHtml(){
        return `
            <!-- Navigation Links -->
          <nav class="footer__nav" aria-label="Footer Navigation">
            <ul class="footer__links footer__links--vertical">
              <li><a href="#home" class="footer__link" aria-label="Home">Home</a></li>
              <li><a href="#about" class="footer__link" aria-label="About">About</a></li>
              <li><a href="#projects" class="footer__link" aria-label="Projects">Projects</a></li>
              <li><a href="#services" class="footer__link" aria-label="Services">Services</a></li>
              <li><a href="#resume" class="footer__link" aria-label="Resume">Resume</a></li>
            </ul>
          </nav>
        `;
    }
}