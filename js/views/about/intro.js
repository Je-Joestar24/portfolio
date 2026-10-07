
export default class {
    async getHtml() {
        return `
        <section class="about about--white scroll-anchor" id="about-me" role="region" aria-label="About Me">
          <div class="about__container about__container--split">
            <div class="about__left">
              <header class="section-header section-header--left about__header">
                <span class="section-header__eyebrow">Profile</span>
                <h2 class="section-header__title about__heading">About <span>Me</span></h2>
                <hr class="section-header__rule section-header__rule--left" aria-hidden="true" />
              </header>
              <h3 class="about__name">My name is <span>Jejomar Parrilla</span> and I am a full stack developer.</h3>
              <p class="about__summary">
                Full-stack developer with hands-on experience building and maintaining production applications using React, React Native, Node.js, Express, MongoDB, Laravel, Vue.js, PostgreSQL, and AWS. Currently working as a Full Stack Developer at Rise Up Kids, owning features end-to-end across the frontend, backend, database, and infrastructure — from third-party integrations and security improvements to automated testing and production deployments.
              </p>
              <ul class="about__details">
                <li><strong>Age:</strong> 22</li>
                <li><strong>Hobbies:</strong> Programming, solving puzzles and playing games</li>
                <li><strong>Email:</strong> <a href="mailto:parrillajejomar@gmail.com">parrillajejomar@gmail.com</a></li>
                <li><strong>From:</strong> Ipil, Ormoc City, Leyte, Philippines</li>
              </ul>
              <h2 class="about__subheading">Education</h2>
              <p class="about__education">BS Computer Science — Western Leyte College of Ormoc · Graduated July 2025</p>
              <div class="about__badges">
                <span class="about__badge" title="Magna Cum Laude">🏅 Magna Cum Laude</span>
              </div>
              <h2 class="about__subheading">Awards</h2>
              <div class="about__badges">
                <span class="about__badge" title="Programmer of the Year">💻 Programmer of the Year 2025</span>
                <span class="about__badge" title="Capstone Project of the Year">🏆 Capstone of the Year 2025</span>
                <span class="about__badge" title="Top 5% Programmer Nationwide — CodeChum Academy">⭐ Top 5% Nationwide · CodeChum</span>
                <span class="about__badge" title="EVCO Champion — Oct 2024 (3rd Place — Oct 2023)">🥇 EVCO Champion 2024</span>
                <span class="about__badge" title="National IT Competitor (iSite & CodeChum) — Java & Python Tracks, 2023–2025">🎯 National IT Competitor</span>
              </div>
            </div>
            <div class="about__right">
              <div class="about__decorative">
                <img src="assets/profile4.png" alt="" class="about__profile-img" width="240" height="240" loading="lazy" decoding="async" />
              </div>
            </div>
          </div>
        </section>
        `
    }
}