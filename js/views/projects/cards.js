export default class {

    sliderHTML(imgs) {
        return `
    <div class="project-slider">
        ${imgs.map((img, i) => `<div class="slider-img-wrap"><img src="${img}" alt="Project screenshot ${i + 1}" class="slider-img" loading="lazy"/></div>`).join('')}
    </div>
    `;
    }

    projects = [
        {
            title: "CrimeGuard",
            desc: "SPA for real-time crime reporting, heatmaps, analytics, and police-citizen coordination. Centralized, secure, and modern.",
            tech: ["Laravel", "Vue.js", "MySQL", "Google Maps API", "Tailwind CSS"],
            images: Array.from({ length: 7 }, (_, i) => `assets/projects_img/crimeguard${i + 1}.png`),
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
            title: "VoyaWeather",
            desc: "Weather-tracking SPA with real-time data, city search, and saved locations. Built with Django (MTV, CBV), form validation, and clean modular code.",
            tech: ["Django", "Python", "CSS3", "HTML5", "PosgreSQL"],
            images: Array.from({ length: 6 }, (_, i) => `assets/projects_img/jejobook${i + 1}.png`),
            demo: "",
            repo: "https://github.com/Je-Joestar24/VoyaWeather"
        },
        {
            title: "JejoBookCollector",
            desc: "Modern Django app for book lovers. Collect, manage, and track your reading with a clean, responsive UI.",
            tech: ["Django", "Python", "SQLite", "CSS3", "HTML5"],
            images: Array.from({ length: 5 }, (_, i) => `assets/projects_img/voyaweather${i + 1}.png`),
            demo: "",
            repo: "https://github.com/Je-Joestar24/jejo_book_collector"
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
            title: "ArchVoyage",
            desc: "SPA guide to One Piece arcs. Search, sort, and explore story arcs with fast, accessible UI and local storage caching.",
            tech: ["JavaScript (ES6+)", "CSS3", "HTML5", "LocalStorage"],
            images: Array.from({ length: 4 }, (_, i) => `assets/projects_img/archvoyage${i + 1}.png`),
            demo: "https://je-joestar24.github.io/ArchVoyage/",
            repo: "https://github.com/Je-Joestar24/ArchVoyage"
        }
    ];

    async getHtml() {
        return `
            <div class="projects-cards">
                ${this.projects.map(project => `
                <div class="project-card" tabindex="0" aria-label="${project.title}">
                    ${this.sliderHTML(project.images)}
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


        `;
    }
}