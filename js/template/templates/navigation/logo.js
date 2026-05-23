export default class {
    async getHtml() {
        return `
        <div class="nav__brand">
            <a href="#home" class="nav__brand-link" aria-label="Jejo-Star — Go to home">
                <img
                    src="assets/logo.png"
                    alt="Jejo-Star logo"
                    class="nav__logo"
                    width="168"
                    height="56"
                    decoding="async"
                    fetchpriority="high"
                />
            </a>
        </div>`;
    }
}
