/**
 * Adds scroll-triggered reveal animations to portfolio sections and cards.
 */
export function initScrollReveal() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return;
    }

    const targets = document.querySelectorAll(
        '.scroll-anchor, .project-card, .service-card, .experience-company, .skills-stack__row, .contact-channel, .contact-section__form-wrap, .about__badge, .short_summary__profile-anim'
    );

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add('reveal--visible');
                observer.unobserve(entry.target);
            });
        },
        { threshold: 0.1, rootMargin: '0px 0px -6% 0px' }
    );

    targets.forEach((el, index) => {
        el.classList.add('reveal');
        if (index % 3 === 1) el.classList.add('reveal--delay-1');
        if (index % 3 === 2) el.classList.add('reveal--delay-2');
        observer.observe(el);
    });
}
