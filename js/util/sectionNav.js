/**
 * Section navigation — soft eased scroll, top nav, and side dot nav.
 */
import { actions } from './state.js';
import { SCROLL_ANCHORS } from '../app/portfolioPage.js';
import { animateScrollTo } from './smoothScroll.js';

const ANCHOR_IDS = new Set(SCROLL_ANCHORS.map((s) => s.id));

export class SectionNav {
    constructor() {
        this.anchors = [];
        this.anchorMap = new Map(SCROLL_ANCHORS.map((s) => [s.id, s]));
        this.activeId = null;
        this.observer = null;
        this._cancelScroll = null;
        this._isScrolling = false;
        this._sideNavEl = null;
        this._dotButtons = [];

        this._onClick = this._onClick.bind(this);
        this._onHashChange = this._onHashChange.bind(this);
    }

    mount() {
        this._mountSideNav();
        this.anchors = SCROLL_ANCHORS.map((s) => document.getElementById(s.id)).filter(Boolean);
        document.body.addEventListener('click', this._onClick);
        window.addEventListener('hashchange', this._onHashChange);
        this._initObserver();
        const initialId = this.parseSectionId(location.hash);
        this.scrollToHash(location.hash, false);
        this.setActive(initialId);
    }

    unmount() {
        document.body.removeEventListener('click', this._onClick);
        window.removeEventListener('hashchange', this._onHashChange);
        this.observer?.disconnect();
        this._cancelScroll?.();
    }

    parseSectionId(hash = '') {
        if (!hash || hash === '#' || hash === '#/') return 'home';
        const id = hash.replace(/^#\/?/, '').trim();
        return ANCHOR_IDS.has(id) ? id : 'home';
    }

    getSectionTop(id) {
        const section = document.getElementById(id);
        if (!section) return 0;

        const navOffset =
            parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-height'), 10) || 72;

        return Math.max(0, section.getBoundingClientRect().top + window.scrollY - navOffset);
    }

    async scrollToSection(id, smooth = true) {
        const section = document.getElementById(id);
        if (!section) return;

        const targetTop = this.getSectionTop(id);
        history.replaceState(null, '', `#${id}`);

        this._cancelScroll?.();
        this._isScrolling = true;
        this.observer?.disconnect();

        if (!smooth) {
            window.scrollTo(0, targetTop);
            this._isScrolling = false;
            this._initObserver();
            this.setActive(id);
            return;
        }

        const { promise, cancel } = animateScrollTo(targetTop);
        this._cancelScroll = cancel;

        await promise;

        this._cancelScroll = null;
        this._isScrolling = false;
        this._initObserver();
        this.setActive(id);
    }

    scrollToHash(hash, smooth = true) {
        return this.scrollToSection(this.parseSectionId(hash), smooth);
    }

    setActive(id) {
        const meta = this.anchorMap.get(id);
        if (!meta) return;

        this.activeId = id;
        actions.setActiveNavigation(meta.navId, 'active');
        document.title = meta.title;
        this._updateSideNav(id);
    }

    _mountSideNav() {
        this._sideNavEl = document.getElementById('side-nav');
        if (!this._sideNavEl) return;

        this._sideNavEl.innerHTML = `
            <div class="side-nav__inner" role="presentation">
                <div class="side-nav__track" aria-hidden="true"></div>
                <ol class="side-nav__list">
                    ${SCROLL_ANCHORS.map(
                        ({ id, label }) => `
                        <li class="side-nav__item">
                            <a
                                href="#${id}"
                                class="side-nav__dot"
                                data-anchor="${id}"
                                aria-label="${label}"
                                aria-current="false"
                            >
                                <span class="side-nav__dot-core" aria-hidden="true"></span>
                                <span class="side-nav__tooltip" role="tooltip">${label}</span>
                            </a>
                        </li>
                    `
                    ).join('')}
                </ol>
            </div>
        `;

        this._dotButtons = [...this._sideNavEl.querySelectorAll('.side-nav__dot')];
    }

    _updateSideNav(activeId) {
        this._dotButtons.forEach((dot) => {
            const isActive = dot.dataset.anchor === activeId;
            dot.classList.toggle('side-nav__dot--active', isActive);
            dot.setAttribute('aria-current', isActive ? 'true' : 'false');
        });
    }

    _initObserver() {
        this.observer?.disconnect();

        this.observer = new IntersectionObserver(
            (entries) => {
                if (this._isScrolling) return;

                const visible = entries
                    .filter((e) => e.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

                if (visible.length) {
                    this.setActive(visible[0].target.id);
                }
            },
            {
                root: null,
                rootMargin: '-42% 0px -42% 0px',
                threshold: [0, 0.12, 0.28, 0.5],
            }
        );

        this.anchors.forEach((section) => this.observer.observe(section));
    }

    _onClick(event) {
        const dot = event.target.closest('.side-nav__dot');
        if (dot?.dataset.anchor) {
            event.preventDefault();
            this.scrollToSection(dot.dataset.anchor, true);
            return;
        }

        const link = event.target.closest('a[href^="#"]');
        if (!link || link.target === '_blank') return;

        const id = this.parseSectionId(link.getAttribute('href'));
        if (!ANCHOR_IDS.has(id)) return;

        event.preventDefault();
        this.scrollToSection(id, true);
    }

    _onHashChange() {
        const id = this.parseSectionId(location.hash);
        if (id === this.activeId && !this._isScrolling) return;
        this.scrollToSection(id, true);
    }
}

