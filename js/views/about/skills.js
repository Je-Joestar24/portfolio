
export default class {
    skills = [
        {
            group: 'Frontend',
            items: [
                { name: 'HTML5', img: 'html.png' },
                { name: 'CSS3', img: 'css.png' },
                { name: 'JavaScript', img: 'js.png' },
                { name: 'Typescript', img: 'typescript.png' },
                { name: 'Vue.js', img: 'vue.png' },
                { name: 'Tailwind CSS', img: 'tailwind.png' },
            ]
        },
        {
            group: 'Backend',
            items: [
                { name: 'PHP', img: 'php.png' },
                { name: 'Python', img: 'python.png' },
                { name: 'Django', img: 'django.png' },
                { name: 'Laravel', img: 'laravel.png' },
                { name: 'MySQL', img: 'sql.png' },
                { name: 'PostgreSQL', img: 'psql.png' },
            ]
        },
        {
            group: 'Tools',
            items: [
                { name: 'Git & GitHub', img: 'gitgithub.png' },
                { name: 'Docker', img: 'docker.png' },
                { name: 'Redmine', img: 'redmine.png' },
                { name: 'Virtual Studio Code', img: 'vscode.png' },
            ]
        }
    ];

    async getHtml() {
        return `
        <section class="skills skills--white" aria-label="Skills">
          <div class="skills__container">
            <h2 class="skills__heading">Skills</h2>
            <div class="skills__groups">
              ${this.skills.map(group => `
                <div class="skills__group">
                  <h3 class="skills__group-title">${group.group}</h3>
                  <div class="skills__icons">
                    ${group.items.map(skill => `
                      <img src="assets/technologies/${skill.img}" alt="${skill.name}" class="skills__icon" data-skill="${skill.name}" />
                    `).join('')}
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </section>
        `;
    }
}