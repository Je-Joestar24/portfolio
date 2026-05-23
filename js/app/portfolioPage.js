/**
 * Builds the full single-page portfolio (all sections in one document).
 */
import Home from '../views/home.js';
import About from '../views/about.js';
import Projects from '../views/projects.js';
import Experience from '../views/experience.js';
import Services from '../views/services.js';
import Contact from '../views/contact.js';

export const PORTFOLIO_SECTIONS = [
    { id: 'home', view: Home, navId: 'home-nav', title: 'Jejo-Star | Home', label: 'Home' },
    { id: 'about', view: About, navId: 'about-nav', title: 'Jejo-Star | About', label: 'About' },
    { id: 'projects', view: Projects, navId: 'projects-nav', title: 'Jejo-Star | Projects', label: 'Projects' },
    { id: 'experience', view: Experience, navId: 'experience-nav', title: 'Jejo-Star | Experience', label: 'Experience' },
    { id: 'services', view: Services, navId: 'services-nav', title: 'Jejo-Star | Services', label: 'Services' },
    { id: 'contact', view: Contact, navId: 'contact-nav', title: 'Jejo-Star | Contact', label: 'Contact' },
];

/** Fine-grained scroll targets for dot navigation & scroll-spy */
export const SCROLL_ANCHORS = [
    { id: 'home', label: 'Home', navId: 'home-nav', title: 'Jejo-Star | Home' },
    { id: 'summary', label: 'Introduction', navId: 'home-nav', title: 'Jejo-Star | Introduction' },
    { id: 'about-me', label: 'About Me', navId: 'about-nav', title: 'Jejo-Star | About' },
    { id: 'skills', label: 'Skills', navId: 'about-nav', title: 'Jejo-Star | Skills' },
    { id: 'projects', label: 'Projects', navId: 'projects-nav', title: 'Jejo-Star | Projects' },
    { id: 'experience', label: 'Experience', navId: 'experience-nav', title: 'Jejo-Star | Experience' },
    { id: 'services', label: 'Services', navId: 'services-nav', title: 'Jejo-Star | Services' },
    { id: 'contact', label: 'Contact', navId: 'contact-nav', title: 'Jejo-Star | Contact' },
];

export class PortfolioPage {
    constructor(displaySelector) {
        this.displayArea = document.querySelector(displaySelector);
        this.views = [];
    }

    async render() {
        this.views = PORTFOLIO_SECTIONS.map((section) => ({
            ...section,
            instance: new section.view(),
        }));

        const htmlParts = await Promise.all(
            this.views.map(async ({ id, label, instance }) => {
                const content = await instance.getHtml();
                return `
                    <section
                        id="${id}"
                        class="portfolio-section scroll-anchor"
                        data-section="${id}"
                        aria-label="${label}"
                    >
                        ${content}
                    </section>
                `;
            })
        );

        this.displayArea.innerHTML = htmlParts.join('');

        for (const { instance } of this.views) {
            if (instance.bindAll) {
                await instance.bindAll();
            }
        }
    }
}
