
export default class {
  skills = [
    {
      group: 'Frontend',
      items: [
        { name: 'HTML5', img: 'html.png' },
        { name: 'CSS3', img: 'css.png' },
        { name: 'JavaScript (ES6+)', img: 'js.png' },
        { name: 'TypeScript', img: 'typescript.png' },
        { name: 'Vue.js (Composition & Options API)', img: 'vue.png' },
        { name: 'Tailwind CSS', img: 'tailwind.png' },
      ]
    },
    {
      group: 'Backend',
      items: [
        { name: 'PHP 8+', img: 'php.png' },
        { name: 'Laravel (10/12)', img: 'laravel.png' },
        { name: 'Python', img: 'python.png' },
        { name: 'Django', img: 'django.png' },
        { name: 'Java (OOP/DSA)', img: 'java.png' },
        { name: 'MySQL / MariaDB', img: 'sql.png' },
        { name: 'PostgreSQL', img: 'psql.png' },
      ]
    },
    {
      group: 'Tools & DevOps',
      items: [
        { name: 'Git (GitHub & GitLab)', img: 'gitgithub.png' },
        { name: 'Docker', img: 'docker.png' },
        { name: 'Redmine (Agile/Sprints)', img: 'redmine.png' },
        { name: 'VS Code', img: 'vscode.png' },
        { name: 'Apache / Nginx', img: 'nginx.png' },
      ]
    },
    {
      group: 'AI & SDKs',
      items: [
        { name: 'Groq API (LLAMA Models)', img: 'groq.png' },
        { name: 'Matterport SDK', img: 'matterport.png' },
        { name: 'Three.js', img: 'threejs.png' },
      ]
    },
    {
      group: 'External APIs',
      items: [
        { name: 'Google Maps API', img: 'maps.png' },
        { name: 'Spoonacular API', img: 'spoonacular.png' },
        { name: 'Google Books API', img: 'books.png' },
        { name: 'LocalStorage (Web APIs)', img: 'localstorage.svg' },
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