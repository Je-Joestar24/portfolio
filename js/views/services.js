import AView from "./AbstractView.js"

const services = [
  {
    title: "Web Development",
    icon: `<svg viewBox='0 0 24 24' width='32' height='32' fill='none' aria-hidden='true'><rect x='3' y='4' width='18' height='16' rx='3' stroke='#304ffe' stroke-width='2'/><path d='M3 8h18' stroke='#b388ff' stroke-width='2'/><circle cx='7' cy='6' r='1' fill='#b388ff'/></svg>`,
    desc: "Modern, scalable websites and web apps with clean code, responsive layouts, and seamless user experience."
  },
  {
    title: "Design UX/UI",
    icon: `<svg viewBox='0 0 24 24' width='32' height='32' fill='none' aria-hidden='true'><circle cx='12' cy='12' r='9' stroke='#304ffe' stroke-width='2'/><path d='M8 15c1.5 2 6.5 2 8 0' stroke='#b388ff' stroke-width='2' stroke-linecap='round'/><circle cx='9' cy='10' r='1' fill='#b388ff'/><circle cx='15' cy='10' r='1' fill='#b388ff'/></svg>`,
    desc: "Intuitive, beautiful interfaces for web and mobile. Focused on usability, accessibility, and brand identity."
  },
  {
    title: "Web Maintenance",
    icon: `<svg viewBox='0 0 24 24' width='32' height='32' fill='none' aria-hidden='true'><path d='M21 19.5l-6.5-6.5' stroke='#304ffe' stroke-width='2'/><circle cx='10' cy='10' r='7' stroke='#b388ff' stroke-width='2'/><path d='M10 7v3l2 2' stroke='#b388ff' stroke-width='2' stroke-linecap='round'/></svg>`,
    desc: "Ongoing updates, bug fixes, and performance improvements to keep your site secure and up-to-date."
  },
  {
    title: "Web Optimization",
    icon: `<svg viewBox='0 0 24 24' width='32' height='32' fill='none' aria-hidden='true'><rect x='4' y='4' width='16' height='16' rx='4' stroke='#304ffe' stroke-width='2'/><path d='M8 16l8-8' stroke='#b388ff' stroke-width='2'/></svg>`,
    desc: "Speed, SEO, and accessibility optimization for better user experience and higher search rankings."
  },
  {
    title: "Diagram Creation",
    icon: `<svg viewBox='0 0 24 24' width='32' height='32' fill='none' aria-hidden='true'><rect x='3' y='7' width='6' height='10' rx='2' stroke='#304ffe' stroke-width='2'/><rect x='15' y='3' width='6' height='14' rx='2' stroke='#b388ff' stroke-width='2'/><rect x='9' y='13' width='6' height='8' rx='2' stroke='#b388ff' stroke-width='2'/></svg>`,
    desc: "Professional diagrams: use case, class, ERD, and more for documentation and planning."
  }
];

export default class extends AView {
    constructor() {
        super();
        this.setTitle("Jejoestar | Services");
    }

    async getHtml() {
        return `
        <section class="services-section" aria-label="Services">
          <h2 class="services-title">Services</h2>
          <p class="services-desc">I provide a range of professional services including Web Development, UX/UI Design, Web Maintenance, Optimization, and creation of technical diagrams (Use Case, Class, ERD, and more) to help you build, improve, and document your digital projects.</p>
          <div class="services-cards">
            ${services.map(service => `
              <div class="service-card" tabindex="0" aria-label="${service.title}">
                <div class="service-icon">${service.icon}</div>
                <h3 class="service-title">${service.title}</h3>
                <p class="service-desc">${service.desc}</p>
              </div>
            `).join('')}
          </div>
          <div class="services-decorative" aria-hidden="true">
            <svg width="120" height="60" viewBox="0 0 120 60" fill="none"><polygon points="10,50 60,10 110,50" fill="#b388ff11"><animate attributeName="points" values="10,50 60,10 110,50;10,40 60,20 110,40;10,50 60,10 110,50" dur="3s" repeatCount="indefinite"/></polygon></svg>
          </div>
        </section>
        `;
    }
}