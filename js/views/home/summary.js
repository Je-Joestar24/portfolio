/**
 * Represents the Summary section of the home page.
 * This class is responsible for generating the HTML content for the summary section.
 */
export default class {
    /**
     * Generates the HTML content for the summary section.
     * This method returns a string of HTML code that represents the summary section.
     * The section includes a header with a title and description, a decoration section with points,
     * and a call-to-action (CTA) section with a button.
     * 
     * @returns {string} The HTML content for the summary section.
     */
    async getHtml() {
        return `
        <section
                class="short_summary short_summary--white"
                aria-label="Short Introduction"
            >
            <div class="short_summary__container short_summary__container--split">
            <div class="short_summary__left">
                <h2 class="short_summary__heading">
                LET ME <span>INTRODUCE</span> MYSELF
                </h2>
                <div class="short_summary__content">
                <p class="short_summary__desc">
                    I developed a deep interest in programming and discovered just
                    how expansive the field truly is. One key lesson I've learned is
                    that by focusing on the fundamentals, you can build the
                    foundation to become highly effective.
                </p>
                <p class="short_summary__desc short_summary__desc--highlight">
                    I am fluent with
                    <span class="short_summary__lang">JavaScript</span>,
                    <span class="short_summary__lang">PHP</span>, and
                    <span class="short_summary__lang">Python</span>.
                </p>
                <p class="short_summary__desc">
                    Whenever possible, I also want to contribute my skills on
                    frameworks and I am really used to
                    <span class="short_summary__framework">Vue</span>,
                    <span class="short_summary__framework">Laravel</span>, and
                    <span class="short_summary__framework">Django</span> frameworks.
                </p>
                </div>
                <div class="short_summary__findme">
                <h3 class="short_summary__findme-title">FIND ME ON</h3>
                <div class="short_summary__socials" role="list">
                    <a
                    href="https://github.com/Je-Joestar24"
                    class="short_summary__social short_summary__social--white"
                    aria-label="GitHub"
                    target="_blank"
                    rel="noopener"
                    >
                    <svg
                        width="28"
                        height="28"
                        fill="none"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                    >
                        <path
                        fill="#181824"
                        d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0 1 12 6.84c.85.004 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z"
                        />
                    </svg>
                    </a>
                    <a href="https://www.facebook.com/jejomar.parrilla/" class="intro__contact-link" aria-label="Facebook" target="_blank" rel="noopener">
                        <svg width="28" height="28" fill="none" viewBox="0 0 24 24" aria-hidden="true"><path fill="#1877F3" d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg>
                    </a>
                    <a href="https://www.linkedin.com/in/jejomar-parrilla-ab5442239/" class="intro__contact-link" aria-label="LinkedIn" target="_blank" rel="noopener">
                        <svg width="28" height="28" fill="none" viewBox="0 0 24 24" aria-hidden="true"><path fill="#181824" d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/></svg>
                    </a>
                    
                </div>
                </div>
            </div>
            <div class="short_summary__right">
                <div class="short_summary__profile-anim">
                <img
                    src="assets/profile.png"
                    alt="Profile placeholder"
                    class="short_summary__profile-img"
                />
                <div class="short_summary__virtual-decor"></div>
                </div>
            </div>
            </div>
        </section>
        `
    }

}