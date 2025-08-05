import { projects } from "./projects.js";

export default class {

    constructor(){
        
        this.projects = projects
    }
    sliderHTML(imgs) {
        return `
    <div class="project-slider">
        ${imgs.map((img, i) => `<div class="slider-img-wrap"><img src="${img}" alt="Project screenshot ${i + 1}" class="slider-img" loading="lazy"/></div>`).join('')}
    </div>
    `;
    }


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