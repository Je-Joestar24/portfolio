
export default class {
    async getHtml() {
        return `
        <section class="skills skills--white" aria-label="Skills">
          <div class="skills__container">
            <h2 class="skills__heading">Skills</h2>
            <div class="skills__groups">
              <div class="skills__group">
                <h3 class="skills__group-title">Frontend</h3>
                <div class="skills__icons">
                  <img src="assets/html.png" alt="HTML5" class="skills__icon" data-skill="HTML5" />
                  <img src="assets/css.png" alt="CSS3" class="skills__icon" data-skill="CSS3" />
                  <img src="assets/js.png" alt="JavaScript" class="skills__icon" data-skill="JavaScript" />
                  <img src="assets/vue.png" alt="Vue.js" class="skills__icon" data-skill="Vue.js" />
                  <img src="assets/tailwind.png" alt="Tailwind CSS" class="skills__icon" data-skill="Tailwind CSS" />
                </div>
              </div>
              <div class="skills__group">
                <h3 class="skills__group-title">Backend</h3>
                <div class="skills__icons">
                  <img src="assets/php.png" alt="PHP" class="skills__icon" data-skill="PHP" />
                  <img src="assets/python.png" alt="Python" class="skills__icon" data-skill="Python" />
                  <img src="assets/django.png" alt="Django" class="skills__icon" data-skill="Django" />
                  <img src="assets/laravel.png" alt="Laravel" class="skills__icon" data-skill="Laravel" />
                  <img src="assets/sql.png" alt="MySQL" class="skills__icon" data-skill="MySQL" />
                  <img src="assets/psql.png" alt="PostgreSQL" class="skills__icon" data-skill="PostgreSQL" />
                </div>
              </div>
              <div class="skills__group">
                <h3 class="skills__group-title">Tools</h3>
                <div class="skills__icons">
                  <img src="assets/gitgithub.png" alt="Git & GitHub" class="skills__icon" data-skill="Git & GitHub" />
                  <img src="assets/docker.png" alt="Docker" class="skills__icon" data-skill="Docker" />
                  <img src="assets/redmine.png" alt="Redmine" class="skills__icon" data-skill="Redmine" />
                  <img src="assets/vscode.png" alt="Virtual Studio Code" class="skills__icon" data-skill="Virtual Studio Code" />
                </div>
              </div>
            </div>
          </div>
        </section>
        `
    }
}