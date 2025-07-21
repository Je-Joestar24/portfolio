/**
 * FooterNavigations class generates the HTML structure for the navigation links in the footer.
 * It includes a title and links to key sections of the website.
 */
export default class FooterNavigations {
    /**
     * Asynchronously generates the HTML structure for the navigation links in the footer.
     * @returns {Promise<string>} A promise that resolves to the HTML string of the navigation links.
     */
    navs = [
      {
        label: 'Home',
        href: '#/',
        target: ''
      },
      {
        label: 'About',
        href: '#/about',
        target: ''
      },
      {
        label: 'Projects',
        href: '#/projects',
        target: ''
      },
      {
        label: 'Services',
        href: '#/services',
        target: ''
      },
      {
        label: 'Resume',
        href: 'assets/docs/JEJOMAR_PARRILLA-CV.pdf',
        target: '_blank'
      },
    ]

    async getHtml(){
        return `
            <!-- Navigation Links -->
          <nav class="footer__nav" aria-label="Footer Navigation">
            <ul class="footer__links footer__links--vertical">
              ${this.navs.map( nav => `
              <li>
                <a href="${nav.href}" class="footer__link" aria-label=" ${nav.label}" ${nav.target ? `target="${nav.target}"` : ''}>
                  ${nav.label}
                </a>
              </li>`).join('')}
            </ul>
          </nav>
        `;
    }
}