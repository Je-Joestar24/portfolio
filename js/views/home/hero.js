/**
 * Represents the Hero section of the home page.
 * This class is responsible for generating the HTML content for the hero section.
 */
export default class {
    /**
     * Generates the HTML content for the hero section.
     * This method returns a string of HTML code that represents the hero section.
     * The section includes a main content area with a title, description, and a call-to-action (CTA) button,
     * as well as a decoration section.
     * 
     * @returns {string} The HTML content for the hero section.
     */
    async getHtml() {
        return `
            <section class="intro" role="region" aria-label="Portfolio Introduction">
                <div class="intro__container intro__container--minimal">
                <div class="intro__main">
                    <h1 class="intro__name-minimal animate-fade-in">I am <span>Jejoestar24</span></h1>
                    <h2 class="intro__role-minimal animate-slide-in">Full-Stack Web Developer</h2>
                    <hr class="intro__divider" />
                    <div class="intro__contact-area animate-fade-in-delay">
                    <a href="https://github.com/Je-Joestar24" class="intro__contact-link" aria-label="GitHub" target="_blank" rel="noopener">
                        <svg width="28" height="28" fill="none" viewBox="0 0 24 24" aria-hidden="true"><path fill="#181824" d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0 1 12 6.84c.85.004 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z"/></svg>
                    </a>
                    <a href="https://twitter.com/" class="intro__contact-link" aria-label="Twitter" target="_blank" rel="noopener">
                        <svg width="28" height="28" fill="none" viewBox="0 0 24 24" aria-hidden="true"><path fill="#181824" d="M22.46 6c-.77.35-1.6.59-2.47.7a4.3 4.3 0 0 0 1.88-2.38 8.59 8.59 0 0 1-2.72 1.04A4.28 4.28 0 0 0 16.11 4c-2.37 0-4.29 2-4.29 4.44 0 .35.04.7.11 1.03-3.57-.18-6.74-1.98-8.86-4.7-.37.66-.58 1.43-.58 2.25 0 1.54.75 2.9 1.89 3.7-.7-.02-1.36-.22-1.94-.54v.05c0 2.15 1.47 3.94 3.42 4.35-.36.11-.74.17-1.13.17-.28 0-.54-.03-.8-.08.54 1.8 2.12 3.12 3.99 3.15A8.6 8.6 0 0 1 2 19.54c-.64 0-1.27-.04-1.89-.11A12.13 12.13 0 0 0 7.29 21.5c7.55 0 11.68-6.5 11.68-12.13 0-.19 0-.37-.01-.56A8.7 8.7 0 0 0 22.46 6Z"/></svg>
                    </a>
                    <a href="https://linkedin.com/" class="intro__contact-link" aria-label="LinkedIn" target="_blank" rel="noopener">
                        <svg width="28" height="28" fill="none" viewBox="0 0 24 24" aria-hidden="true"><path fill="#181824" d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/></svg>
                    </a>
                    </div>
                </div>
                </div>
            </section>
        `
    }
}