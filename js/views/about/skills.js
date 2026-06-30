
export default class {
  skills = [
    {
      group: 'Frontend',
      slug: 'frontend',
      items: [
        { name: 'HTML5', img: 'html.png' },
        { name: 'CSS3', img: 'css.png' },
        { name: 'JavaScript', img: 'js.png' },
        { name: 'TypeScript', img: 'typescript.png' },
        { name: 'React', img: 'react.png' },
        { name: 'Vue.js', img: 'vue.png' },
        { name: 'Tailwind CSS', img: 'tailwind.png' },
      ],
    },
    {
      group: 'Backend',
      slug: 'backend',
      items: [
        { name: 'PHP 8+', img: 'php.png' },
        { name: 'Laravel', img: 'laravel.png' },
        { name: 'Python', img: 'python.png' },
        { name: 'Django', img: 'django.png' },
        { name: 'Java', img: 'java.png' },
        { name: 'MySQL', img: 'sql.png' },
        { name: 'PostgreSQL', img: 'psql.png' },
      ],
    },
    {
      group: 'MERN Stack',
      slug: 'mern',
      highlight: true,
      items: [
        { name: 'MongoDB', img: 'mongodb.png' },
        { name: 'Express.js', img: 'express.png' },
        { name: 'React', img: 'react.png' },
        { name: 'Node.js', img: 'node.png' },
      ],
    },
    {
      group: 'Tools & DevOps',
      slug: 'tools',
      items: [
        { name: 'Git & GitHub', img: 'gitgithub.png' },
        { name: 'Docker', img: 'docker.png' },
        { name: 'AWS', img: 'aws.png' },
        { name: 'Redmine', img: 'redmine.png' },
        { name: 'VS Code', img: 'vscode.png' },
        { name: 'Nginx', img: 'nginx.png' },
      ],
    },
    {
      group: 'AI & SDKs',
      slug: 'ai',
      items: [
        { name: 'Groq API', img: 'groq.png' },
        { name: 'Matterport SDK', img: 'matterport.png' },
        { name: 'Three.js', img: 'threejs.png' },
      ],
    },
    {
      group: 'APIs',
      slug: 'apis',
      items: [
        { name: 'Google Maps', img: 'maps.png' },
        { name: 'Spoonacular', img: 'spoonacular.png' },
        { name: 'Google Books', img: 'books.png' },
        { name: 'Web APIs', img: 'localstorage.svg' },
        { name: 'Stripe', img: 'stripe.png' },
      ],
    },
  ];

  async getHtml() {
    return `
        <section id="skills" class="skills-stack scroll-anchor" aria-label="Tech stack and skills">
          <div class="skills-stack__container">
            <header class="section-header section-header--left skills-stack__header">
              <span class="section-header__eyebrow">Expertise</span>
              <h2 class="section-header__title skills-stack__title">Tech <span>Stack</span></h2>
              <p class="skills-stack__lede">Languages, frameworks, and tools I use daily — hover any logo for details.</p>
              <hr class="section-header__rule section-header__rule--left" aria-hidden="true" />
            </header>

            <div class="skills-stack__board">
              ${this.skills
                .map(
                  (group) => `
                <article
                  class="skills-stack__row${group.highlight ? ' skills-stack__row--highlight' : ''}"
                  aria-labelledby="skills-row-${group.slug}"
                >
                  <h3 class="skills-stack__row-label" id="skills-row-${group.slug}">
                    ${group.group}
                  </h3>
                  <ul class="skills-stack__grid" role="list">
                    ${group.items
                      .map(
                        (skill) => `
                      <li class="skills-stack__cell" role="listitem">
                        <button
                          type="button"
                          class="skills-stack__item"
                          data-skill="${skill.name}"
                          aria-label="${skill.name}"
                        >
                          <span class="skills-stack__logo">
                            <img
                              src="assets/technologies/${skill.img}"
                              alt=""
                              class="skills-stack__img"
                              width="52"
                              height="52"
                              loading="lazy"
                              decoding="async"
                            />
                          </span>
                          <span class="skills-stack__label">${skill.name}</span>
                        </button>
                      </li>
                    `
                      )
                      .join('')}
                  </ul>
                </article>
              `
                )
                .join('')}
            </div>
          </div>
        </section>
        `;
  }

  async bindAll() {}
}
