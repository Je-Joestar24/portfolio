export default class{
    navs = [
      {
        href: '#/home',
        label: 'Home',
        svg: '<svg class="nav__icon" viewBox="0 0 24 24" width="20" height="20" fill="none"><path d="M3 12L12 4l9 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 21V12h6v9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
        target: ''
      },
      {
        href: '#/about',
        label: 'About',
        svg: '<svg class="nav__icon" viewBox="0 0 24 24" width="20" height="20" fill="none"><circle cx="12" cy="8" r="4" stroke="currentColor" stroke-width="2"/><path d="M6 20v-2a6 6 0 0 1 12 0v2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
        target: ''
      },
      {
        href: '#/projects',
        label: 'Projects',
        svg: '<svg class="nav__icon" viewBox="0 0 24 24" width="20" height="20" fill="none"><rect x="3" y="3" width="7" height="7" rx="2" stroke="currentColor" stroke-width="2"/><rect x="14" y="3" width="7" height="7" rx="2" stroke="currentColor" stroke-width="2"/><rect x="14" y="14" width="7" height="7" rx="2" stroke="currentColor" stroke-width="2"/><rect x="3" y="14" width="7" height="7" rx="2" stroke="currentColor" stroke-width="2"/></svg>',
        target: ''
      },
      {
        href: '#/services',
        label: 'Services',
        svg: '<svg class="nav__icon" viewBox="0 0 24 24" width="20" height="20" fill="none"><path d="M12 2v20M2 12h20" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
        target: ''
      },
      {
        href: 'assets/docs/JEJOMAR_PARRILLA-CV.pdf',
        label: 'Resume',
        svg: '<svg class="nav__icon" viewBox="0 0 24 24" width="20" height="20" fill="none"><rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" stroke-width="2"/><path d="M8 4v16" stroke="currentColor" stroke-width="2"/><path d="M16 4v16" stroke="currentColor" stroke-width="2"/></svg>',
        target: '_blank'
      }
    ]

    async getHtml(){
        return `
        <ul class="nav__links">
          ${this.navs.map( nav => `<li><a href="${nav.href}" class="nav__link item" aria-label="${nav.label}" ${nav.target ? `target="${nav.target}"` : ''}>${nav.svg} ${nav.label}</a></li>`).join("")}
          <li><a href="https://github.com/Je-Joestar24" class="nav__link nav__link--icon" aria-label="GitHub" target="_blank" rel="noopener"><svg class="nav__icon" viewBox="0 0 24 24" width="22" height="22" fill="none"><path fill="#b388ff" d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0 1 12 6.84c.85.004 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z"/></svg></a></li>
        </ul>
        <svg class="nav__icon mobile"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <polyline points="6 9 12 15 18 9" /></svg>
        <ul class="nav__links mobile">
          ${this.navs.map( nav => `<li><a href="${nav.href}" class="nav__link mobile" aria-label="${nav.label}" ${nav.target ? `target="${nav.target}"` : ''}>${nav.label}</a></li>`).join("")}
        </ul>
        `
    }
}