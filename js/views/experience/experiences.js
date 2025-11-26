import { companies } from "./companies.js";

export default class {
    constructor() {
        this.companies = companies;
    }

    sliderHTML(imgs) {
        return `
            <div class="experience-slider">
                ${imgs.map((img, i) => `<div class="slider-img-wrap"><img src="${img}" alt="Project screenshot ${i + 1}" class="slider-img" loading="lazy"/></div>`).join('')}
            </div>
        `;
    }

    projectHTML(project, projectIndex) {
        const uniqueId = `project-${projectIndex}`;
        return `
            <div class="experience-project" data-project-id="${uniqueId}">
                <div class="experience-project__header">
                    <h4 class="experience-project__title">${project.title}</h4>
                </div>
                <div class="experience-project__content">
                    <div class="experience-project__slider">
                        ${this.sliderHTML(project.images)}
                    </div>
                    <div class="experience-project__info">
                        <p class="experience-project__desc experience-project__desc--short">${project.shortDesc}</p>
                        <div class="experience-project__desc experience-project__desc--full" style="display: none;">
                            <p>${project.fullDesc}</p>
                            <ul class="experience-project__achievements">
                                ${project.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
                            </ul>
                            <div class="experience-project__tech">
                                ${project.tech.map(t => `<span class="experience-tech-item">${t}</span>`).join('')}
                            </div>
                        </div>
                        <button class="experience-project__toggle" aria-expanded="false" aria-controls="${uniqueId}-full" data-target="${uniqueId}">
                            <span class="toggle-text">Read More</span>
                            <svg class="toggle-icon" viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden="true">
                                <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        `;
    }

    companyHTML(company, companyIndex) {
        return `
            <div class="experience-company" data-company-index="${companyIndex}">
                <div class="experience-company__header">
                    <div class="experience-company__info">
                        <h3 class="experience-company__name">${company.name}</h3>
                        <p class="experience-company__location">${company.location}</p>
                    </div>
                    <div class="experience-company__meta">
                        <span class="experience-company__position">${company.position}</span>
                        <span class="experience-company__period">${company.period}</span>
                    </div>
                </div>
                <div class="experience-company__projects">
                    ${company.projects.map((project, projectIndex) => 
                        this.projectHTML(project, `${companyIndex}-${projectIndex}`)
                    ).join('')}
                </div>
            </div>
        `;
    }

    async getHtml() {
        return `
            <div class="experience-list">
                ${this.companies.map((company, index) => this.companyHTML(company, index)).join('')}
            </div>
        `;
    }

    async bindAll() {
        // Handle expand/collapse for project descriptions
        const toggleButtons = document.querySelectorAll('.experience-project__toggle');
        
        toggleButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const targetId = button.getAttribute('data-target');
                const fullDesc = document.querySelector(`[data-project-id="${targetId}"] .experience-project__desc--full`);
                const shortDesc = document.querySelector(`[data-project-id="${targetId}"] .experience-project__desc--short`);
                const toggleText = button.querySelector('.toggle-text');
                const toggleIcon = button.querySelector('.toggle-icon');
                const isExpanded = button.getAttribute('aria-expanded') === 'true';

                if (isExpanded) {
                    // Collapse
                    fullDesc.style.display = 'none';
                    shortDesc.style.display = 'block';
                    toggleText.textContent = 'Read More';
                    button.setAttribute('aria-expanded', 'false');
                    toggleIcon.style.transform = 'rotate(0deg)';
                } else {
                    // Expand
                    fullDesc.style.display = 'block';
                    shortDesc.style.display = 'none';
                    toggleText.textContent = 'Read Less';
                    button.setAttribute('aria-expanded', 'true');
                    toggleIcon.style.transform = 'rotate(180deg)';
                }
            });
        });
    }
}

