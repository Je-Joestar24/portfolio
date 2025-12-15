
export default class {
  skills = [
    {
      group: 'Frontend',
      items: [
        { name: 'HTML5', img: 'html.png' },
        { name: 'CSS3', img: 'css.png' },
        { name: 'JavaScript (ES6+)', img: 'js.png' },
        { name: 'TypeScript', img: 'typescript.png' },
        { name: 'React', img: 'react.png' },
        { name: 'Vue.js (Composition & Options API)', img: 'vue.png' },
        { name: 'Tailwind CSS', img: 'tailwind.png' },
      ]
    },
    {
      group: 'Backend',
      items: [
        { name: 'PHP 8+', img: 'php.png' },
        { name: 'Laravel (10/12)', img: 'laravel.png' },
        { name: 'Node.js', img: 'node.png' },
        { name: 'Express.js', img: 'express.png' },
        { name: 'Python', img: 'python.png' },
        { name: 'Django', img: 'django.png' },
        { name: 'Java (OOP/DSA)', img: 'java.png' },
        { name: 'MySQL / MariaDB', img: 'sql.png' },
        { name: 'PostgreSQL', img: 'psql.png' },
        { name: 'MongoDB', img: 'mongodb.png' },
      ]
    },
    {
      group: 'MERN Stack',
      items: [
        { name: 'MongoDB', img: 'mongodb.png' },
        { name: 'Express.js', img: 'express.png' },
        { name: 'React', img: 'react.png' },
        { name: 'Node.js', img: 'node.png' },
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
        { name: 'Stripe', img: 'stripe.png' },
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
                      <div class="skills__icon-wrapper" data-skill="${skill.name}" role="button" tabindex="0" aria-label="${skill.name}">
                        <img src="assets/technologies/${skill.img}" alt="${skill.name}" class="skills__icon" />
                        <span class="skills__icon-name">${skill.name}</span>
                      </div>
                    `).join('')}
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </section>
        `;
  }

  /**
   * Binds hover event handlers for skill icons
   * Adds smooth animations when hovering over skill icons
   */
  async bindAll() {
    const iconWrappers = document.querySelectorAll('.skills__icon-wrapper');
    
    iconWrappers.forEach(wrapper => {
      const icon = wrapper.querySelector('.skills__icon');
      const name = wrapper.querySelector('.skills__icon-name');
      
      // Mouse enter - fade out image, fade in name
      wrapper.addEventListener('mouseenter', () => {
        if (icon && name) {
          icon.style.animation = 'skillFadeOut 0.3s ease forwards';
          name.style.animation = 'skillFadeIn 0.3s ease 0.1s forwards';
        }
      });
      
      // Mouse leave - fade in image, fade out name
      wrapper.addEventListener('mouseleave', () => {
        if (icon && name) {
          icon.style.animation = 'none';
          name.style.animation = 'none';
          // Reset styles
          setTimeout(() => {
            icon.style.animation = '';
            name.style.animation = '';
          }, 10);
        }
      });
      
      // Keyboard support for accessibility
      wrapper.addEventListener('focus', () => {
        if (icon && name) {
          icon.style.animation = 'skillFadeOut 0.3s ease forwards';
          name.style.animation = 'skillFadeIn 0.3s ease 0.1s forwards';
        }
      });
      
      wrapper.addEventListener('blur', () => {
        if (icon && name) {
          icon.style.animation = 'none';
          name.style.animation = 'none';
          setTimeout(() => {
            icon.style.animation = '';
            name.style.animation = '';
          }, 10);
        }
      });
    });
  }
}