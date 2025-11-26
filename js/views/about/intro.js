
export default class {
    async getHtml() {
        return `
        <section class="about about--white" id="about" role="region" aria-label="About Me">
          <div class="about__container about__container--split">
            <div class="about__left">
              <h2 class="about__heading">About Me</h2>
              <h3 class="about__name">My name is <span>Jejomar Parrilla</span> and I am a full stack developer.</h3>
              <p class="about__summary">
                Full-stack developer with 3+ years of experience building scalable web applications. Currently working as a Freelance Full Stack Developer at Atula Solutions, specializing in MERN stack and Laravel/Vue.js ecosystems. Passionate about writing efficient, maintainable code and delivering production-ready solutions.
              </p>
              <ul class="about__details">
                <li><strong>Age:</strong> 22</li>
                <li><strong>Hobbies:</strong> Programming, solving puzzles and playing games</li>
                <li><strong>Email:</strong> <a href="mailto:parrillajejomar@gmail.com">parrillajejomar@gmail.com</a></li>
                <li><strong>From:</strong> Ipil, Ormoc City, Leyte, Philippines</li>
              </ul>
              <h2 class="skills__heading">Education</h2>
              <div class="about__badges">
                <span class="about__badge" title="Magna Cum Laude">📚 BSCS Graduate</span>
                <span class="about__badge" title="Magna Cum Laude">🏅 Magna Cum Laude</span>
                <span class="about__badge" title="Capstone Project of the Year">🏆 Capstone of the Year 2025</span>
                <span class="about__badge" title="Programmer of the Year">💻 Programmer of the Year 2025</span>
              </div>
            </div>
            <div class="about__right">
              <div class="about__decorative">
                <!-- Minimal decorative SVG/icon -->
                <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <circle cx="60" cy="60" r="56" stroke="#b388ff" stroke-width="4" fill="#f5f6fa" />
                  <rect x="35" y="35" width="50" height="50" rx="12" fill="#e3e9f7" />
                </svg>
              </div>
            </div>
          </div>
        </section>
        `
    }
}