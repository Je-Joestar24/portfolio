// NOTE: After rendering, initialize slick slider on .project-slider and ensure arrows are hidden by CSS.
// Example: $('.project-slider').slick({ arrows: false, dots: true });
import AView from "./AbstractView.js"

const projects = [
  {
    title: "CrimeGuard",
    desc: "SPA for real-time crime reporting, heatmaps, analytics, and police-citizen coordination. Centralized, secure, and modern.",
    tech: ["Laravel", "Vue.js", "MySQL", "Google Maps API", "Tailwind CSS"],
    images:  Array.from({ length: 7 }, (_, i) => `assets/projects_img/crimeguard${i + 1}.png`),
    demo: "https://crime-guard.csitcicte.com/",
    repo: "https://github.com/Je-Joestar24/CrimeGuard"
  },
  {
    title: "DFCO",
    desc: "Devil Fruit Collection Organization: e-commerce SPA for browsing, buying, and managing devil fruit products. Persistent cart, auth, and smooth UI.",
    tech: ["HTML", "CSS", "JavaScript (ES6+)", "LocalStorage"],
    images: Array.from({ length: 6 }, (_, i) => `assets/projects_img/DFCO${i + 1}.png`),
    demo: "https://je-joestar24.github.io/DFCO",
    repo: "https://github.com/Je-Joestar24/DFCO"
  },
  {
    title: "Library Management System",
    desc: "CICTE Library System for book tracking, borrowing, attendance, and reporting. Admin/librarian roles, overdue notifications, and reports.",
    tech: ["PHP", "MySQL", "Bootstrap", "jQuery", "HTML"],
    images: Array.from({ length: 3 }, (_, i) => `assets/projects_img/librarymanagement${i + 1}.png`),
    demo: "",
    repo: "https://github.com/Je-Joestar24/librarymanagement"
  },
  {
    title: "VoyaWeather",
    desc: "Weather-tracking SPA with real-time data, city search, and saved locations. Built with Django (MTV, CBV), form validation, and clean modular code.",
    tech:  ["Django", "Python", "CSS3", "HTML5", "PosgreSQL"],
    images: ["assets/dfco1.png", "assets/dfco2.png"],
    demo: "",
    repo: "https://github.com/Je-Joestar24/VoyaWeather"
  },
  {
    title: "JejoBookCollector",
    desc: "Modern Django app for book lovers. Collect, manage, and track your reading with a clean, responsive UI.",
    tech: ["Django", "Python", "SQLite", "CSS3", "HTML5"],
    images: ["/assets/jejobook1.png", "/assets/jejobook2.png"],
    demo: "",
    repo: "https://github.com/Je-Joestar24/jejo_book_collector"
  },
  {
    title: "ArchVoyage",
    desc: "SPA guide to One Piece arcs. Search, sort, and explore story arcs with fast, accessible UI and local storage caching.",
    tech: ["JavaScript (ES6+)", "CSS3", "HTML5", "LocalStorage"],
    images: ["assets/archvoyage1.png", "assets/archvoyage2.png"],
    demo: "",
    repo: "https://github.com/Je-Joestar24/ArchVoyage"
  }
];

const sliderHTML = (imgs) => `
  <div class="project-slider">
    ${imgs.map((img, i) => `<div class="slider-img-wrap"><img src="${img}" alt="Project screenshot ${i+1}" class="slider-img" loading="lazy"/></div>`).join('')}
  </div>
`;

export default class extends AView {
    constructor() {
        super();
        this.setTitle("Jejoestar | Projects");
    }
    async getHtml() {
        return `
        <section class="projects-section" aria-label="Projects Portfolio">
          <h2 class="projects-title">Projects</h2>
          <p class="projects-desc">A selection of my top projects, showcasing modern web development, clean architecture, and creative UI/UX. Explore the code, try the demos, and see the technologies in action.</p>
          <div class="projects-cards">
            ${projects.map(project => `
              <div class="project-card" tabindex="0" aria-label="${project.title}">
                ${sliderHTML(project.images)}
                <h3 class="project-title">${project.title}</h3>
                <p class="project-desc">${project.desc}</p>
                <div class="project-tech">
                  ${project.tech.map(t => `<span class="project-tech-item">${t}</span>`).join('')}
                </div>
                <div class="project-actions">
                  ${project.demo ? `<a href="${project.demo}" class="project-btn project-btn--demo" target="_blank" rel="noopener">Demo</a>` : ''}
                  ${project.repo ? `<a href="${project.repo}" class="project-btn project-btn--repo" target="_blank" rel="noopener">GitHub</a>` : ''}
                </div>
              </div>
            `).join('')}
          </div>
          <div class="projects-decorative" aria-hidden="true">
            <svg width="140" height="60" viewBox="0 0 140 60" fill="none"><circle cx="30" cy="30" r="28" fill="#b388ff11"><animate attributeName="r" values="28;32;28" dur="2.5s" repeatCount="indefinite"/></circle><rect x="90" y="18" width="32" height="18" rx="4" fill="#b388ff09"><animate attributeName="y" values="18;10;18" dur="2.5s" repeatCount="indefinite"/></rect></svg>
          </div>
        </section>
        `;
    }
}