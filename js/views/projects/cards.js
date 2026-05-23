import { projects } from "./projects.js";

export default class {
    constructor() {
        this.projects = projects;
    }

    sliderHTML(imgs, title) {
        return `
            <div class="project-slider" aria-label="${title} screenshots">
                ${imgs.map((img, i) => `
                    <div class="slider-img-wrap">
                        <img src="${img}" alt="${title} screenshot ${i + 1}" class="slider-img" loading="lazy" />
                    </div>
                `).join("")}
            </div>
        `;
    }

    previewTechHTML(tech, limit = 4) {
        const preview = tech.slice(0, limit);
        const rest = tech.length - limit;
        const extra = rest > 0
            ? `<span class="project-tech-item project-tech-item--more" aria-label="${rest} more technologies">+${rest}</span>`
            : "";
        return `
            ${preview.map((t) => `<span class="project-tech-item">${t}</span>`).join("")}
            ${extra}
        `;
    }

    projectHTML(project, index) {
        const id = `project-${index}`;
        const previewHighlights = project.highlights?.slice(0, 2) ?? [];

        return `
            <article class="project-showcase" data-project-id="${id}" aria-label="${project.title} project">
                <header class="project-showcase__header">
                    <div class="project-showcase__heading">
                        <h3 class="project-showcase__title">${project.title}</h3>
                        ${project.role ? `<p class="project-showcase__role">${project.role}</p>` : ""}
                        ${project.architecture ? `<span class="project-showcase__architecture">${project.architecture}</span>` : ""}
                    </div>
                    <div class="project-showcase__links">
                        ${project.demo ? `<a href="${project.demo}" class="project-btn project-btn--demo" target="_blank" rel="noopener noreferrer" aria-label="View ${project.title} live demo">Demo</a>` : ""}
                        ${project.repo ? `<a href="${project.repo}" class="project-btn project-btn--repo" target="_blank" rel="noopener noreferrer" aria-label="View ${project.title} on GitHub">GitHub</a>` : ""}
                    </div>
                </header>

                <div class="project-showcase__body">
                    <div class="project-showcase__media">
                        ${this.sliderHTML(project.images, project.title)}
                    </div>

                    <div class="project-showcase__info">
                        <p class="project-showcase__desc">${project.desc}</p>

                        ${previewHighlights.length ? `
                            <ul class="project-showcase__preview" aria-label="${project.title} key highlights preview">
                                ${previewHighlights.map((item) => `<li>${item}</li>`).join("")}
                            </ul>
                        ` : ""}

                        <div class="project-showcase__tech project-showcase__tech--preview" role="list" aria-label="${project.title} technologies preview">
                            ${this.previewTechHTML(project.tech)}
                        </div>

                        <div
                            class="project-showcase__details"
                            id="${id}-details"
                            hidden
                            aria-hidden="true"
                        >
                            ${project.highlights?.length ? `
                                <h4 class="project-showcase__details-label">Technical highlights</h4>
                                <ul class="project-showcase__highlights">
                                    ${project.highlights.map((item) => `<li>${item}</li>`).join("")}
                                </ul>
                            ` : ""}
                            <h4 class="project-showcase__details-label">Stack</h4>
                            <div class="project-showcase__tech project-showcase__tech--full" role="list" aria-label="${project.title} full technology stack">
                                ${project.tech.map((t) => `<span class="project-tech-item" role="listitem">${t}</span>`).join("")}
                            </div>
                        </div>

                        <button
                            type="button"
                            class="project-showcase__toggle"
                            aria-expanded="false"
                            aria-controls="${id}-details"
                            data-target="${id}"
                        >
                            <span class="project-showcase__toggle-text">View more details</span>
                            <svg class="project-showcase__toggle-icon" viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden="true">
                                <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </article>
        `;
    }

    async getHtml() {
        return `
            <div class="projects-list">
                ${this.projects.map((project, index) => this.projectHTML(project, index)).join("")}
            </div>
        `;
    }

    async bindAll() {
        const toggles = document.querySelectorAll(".project-showcase__toggle");

        toggles.forEach((button) => {
            button.addEventListener("click", () => {
                const targetId = button.getAttribute("data-target");
                const showcase = document.querySelector(`[data-project-id="${targetId}"]`);
                if (!showcase) return;

                const details = showcase.querySelector(".project-showcase__details");
                const preview = showcase.querySelector(".project-showcase__preview");
                const techPreview = showcase.querySelector(".project-showcase__tech--preview");
                const toggleText = button.querySelector(".project-showcase__toggle-text");
                const isExpanded = button.getAttribute("aria-expanded") === "true";

                if (isExpanded) {
                    details.hidden = true;
                    details.setAttribute("aria-hidden", "true");
                    if (preview) preview.hidden = false;
                    if (techPreview) techPreview.hidden = false;
                    toggleText.textContent = "View more details";
                    button.setAttribute("aria-expanded", "false");
                    showcase.classList.remove("project-showcase--expanded");
                } else {
                    details.hidden = false;
                    details.setAttribute("aria-hidden", "false");
                    if (preview) preview.hidden = true;
                    if (techPreview) techPreview.hidden = true;
                    toggleText.textContent = "Show less";
                    button.setAttribute("aria-expanded", "true");
                    showcase.classList.add("project-showcase--expanded");
                }
            });
        });
    }
}
