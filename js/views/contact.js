/**
 * ContactView — Get in touch section with channels + validated form.
 */
import AView from './AbstractView.js';

const CONTACT = {
  name: 'Jejomar Parrilla',
  email: 'parrillajejomar@gmail.com',
  phone: '09073010472',
  phoneIntl: '639073010472',
  location: 'Ormoc City, Philippines',
  availability: 'Open to freelance & full-time opportunities',
};

const SOCIALS = [
  {
    label: 'GitHub',
    href: 'https://github.com/Je-Joestar24',
    icon: `<svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path fill="currentColor" d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0 1 12 6.84c.85.004 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z"/></svg>`,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/jejomar-parrilla-ab5442239/',
    icon: `<svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path fill="currentColor" d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/></svg>`,
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/jejomar.parrilla/',
    icon: `<svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path fill="currentColor" d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg>`,
  },
];

const DRAFT_KEY = 'portfolio_contact_draft';

export default class extends AView {
  constructor() {
    super();
    this.setTitle('Jejo-Star | Contact');
  }

  async getHtml() {
    return `
      <div class="contact-section" aria-label="Contact Jejomar Parrilla">
        <header class="section-header contact-section__header">
          <span class="section-header__eyebrow">Let's Connect</span>
          <h2 class="section-header__title">Get in <span>Touch</span></h2>
          <p class="section-header__desc">
            Have a project, collaboration, or opportunity? Reach out — I typically respond within 24 hours.
          </p>
          <hr class="section-header__rule" aria-hidden="true" />
        </header>

        <div class="contact-section__layout">
          <aside class="contact-section__aside" aria-label="Contact information">
            <div class="contact-profile">
              <p class="contact-profile__name">${CONTACT.name}</p>
              <a
                href="mailto:${CONTACT.email}"
                class="contact-profile__email"
                aria-label="Email ${CONTACT.name} at ${CONTACT.email}"
              >${CONTACT.email}</a>
            </div>

            <div class="contact-status" role="status">
              <span class="contact-status__dot" aria-hidden="true"></span>
              <span class="contact-status__text">${CONTACT.availability}</span>
            </div>

            <ul class="contact-channels" role="list">
              <li role="listitem">
                <a
                  href="mailto:${CONTACT.email}"
                  class="contact-channel"
                  aria-label="Email Jejomar at ${CONTACT.email}"
                >
                  <span class="contact-channel__icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 13 12-6 10-6"/></svg>
                  </span>
                  <span class="contact-channel__body">
                    <span class="contact-channel__label">Email</span>
                    <span class="contact-channel__value">${CONTACT.email}</span>
                  </span>
                </a>
              </li>
              <li role="listitem">
                <a
                  href="https://wa.me/${CONTACT.phoneIntl}"
                  class="contact-channel"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Message on WhatsApp ${CONTACT.phone}"
                >
                  <span class="contact-channel__icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.75.75 0 0 0 .918.918l4.458-1.495A11.95 11.95 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75c-2.31 0-4.458-.675-6.262-1.838l-.45-.268-2.7.906.906-2.7-.268-.45A9.71 9.71 0 0 1 2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/></svg>
                  </span>
                  <span class="contact-channel__body">
                    <span class="contact-channel__label">WhatsApp</span>
                    <span class="contact-channel__value">${CONTACT.phone}</span>
                  </span>
                </a>
              </li>
              <li role="listitem">
                <div class="contact-channel contact-channel--static" aria-label="Location ${CONTACT.location}">
                  <span class="contact-channel__icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 21s7-4.35 7-11a7 7 0 1 0-14 0c0 6.65 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>
                  </span>
                  <span class="contact-channel__body">
                    <span class="contact-channel__label">Location</span>
                    <span class="contact-channel__value">${CONTACT.location}</span>
                  </span>
                </div>
              </li>
            </ul>

            <div class="contact-socials" role="navigation" aria-label="Social profiles">
              <p class="contact-socials__title">Find me online</p>
              <ul class="contact-socials__list" role="list">
                ${SOCIALS.map(
                  (s) => `
                  <li role="listitem">
                    <a
                      href="${s.href}"
                      class="contact-socials__link"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="${s.label}"
                    >
                      ${s.icon}
                    </a>
                  </li>
                `
                ).join('')}
              </ul>
            </div>
          </aside>

          <div class="contact-section__form-wrap">
            <form
              id="contact-form"
              class="contact-form"
              novalidate
              aria-label="Send a message to Jejomar Parrilla"
            >
              <div class="contact-form__row contact-form__row--split">
                <div class="contact-form__field">
                  <label class="contact-form__label" for="contact-name">Your name</label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    class="contact-form__input"
                    autocomplete="name"
                    required
                    minlength="2"
                    maxlength="80"
                    placeholder="Your full name"
                    aria-required="true"
                  />
                  <span class="contact-form__error" id="contact-name-error" role="alert"></span>
                </div>
                <div class="contact-form__field">
                  <label class="contact-form__label" for="contact-email">Your email</label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    class="contact-form__input"
                    autocomplete="email"
                    required
                    placeholder="you@example.com"
                    aria-required="true"
                  />
                  <span class="contact-form__error" id="contact-email-error" role="alert"></span>
                </div>
              </div>

              <div class="contact-form__field">
                <label class="contact-form__label" for="contact-subject">Subject</label>
                <input
                  type="text"
                  id="contact-subject"
                  name="subject"
                  class="contact-form__input"
                  required
                  minlength="3"
                  maxlength="120"
                  placeholder="Project inquiry / Collaboration"
                  aria-required="true"
                />
                <span class="contact-form__error" id="contact-subject-error" role="alert"></span>
              </div>

              <div class="contact-form__field">
                <label class="contact-form__label" for="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  class="contact-form__input contact-form__textarea"
                  rows="5"
                  required
                  minlength="10"
                  maxlength="2000"
                  placeholder="Tell me about your project, timeline, and goals..."
                  aria-required="true"
                ></textarea>
                <span class="contact-form__error" id="contact-message-error" role="alert"></span>
              </div>

              <div class="contact-form__actions">
                <button type="submit" class="contact-form__submit" aria-label="Send email to ${CONTACT.name}">
                  <span class="contact-form__submit-text">Send</span>
                  <svg class="contact-form__submit-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M22 2 11 13"/><path d="M22 2 15 22 11 13 2 9 22 2z"/></svg>
                </button>
                <p class="contact-form__hint" id="contact-form-hint">
                  Sends to ${CONTACT.email} via your email app — message is pre-filled when you hit Send.
                </p>
              </div>

              <div
                class="contact-form__feedback"
                id="contact-form-feedback"
                role="status"
                aria-live="polite"
                hidden
              ></div>
            </form>
          </div>
        </div>
      </div>
    `;
  }

  async bindAll() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    const fields = {
      name: form.querySelector('#contact-name'),
      email: form.querySelector('#contact-email'),
      subject: form.querySelector('#contact-subject'),
      message: form.querySelector('#contact-message'),
    };

    const errors = {
      name: form.querySelector('#contact-name-error'),
      email: form.querySelector('#contact-email-error'),
      subject: form.querySelector('#contact-subject-error'),
      message: form.querySelector('#contact-message-error'),
    };

    const feedback = form.querySelector('#contact-form-feedback');

    const loadDraft = () => {
      try {
        const raw = localStorage.getItem(DRAFT_KEY);
        if (!raw) return;
        const draft = JSON.parse(raw);
        Object.keys(fields).forEach((key) => {
          if (draft[key] && fields[key]) fields[key].value = draft[key];
        });
      } catch {
        /* ignore corrupt draft */
      }
    };

    const saveDraft = () => {
      const draft = Object.fromEntries(
        Object.entries(fields).map(([key, el]) => [key, el?.value?.trim() ?? ''])
      );
      localStorage.setItem(DRAFT_KEY, JSON.stringify(draft));
    };

    const clearErrors = () => {
      Object.values(errors).forEach((el) => {
        if (el) el.textContent = '';
      });
      Object.values(fields).forEach((el) => {
        el?.classList.remove('contact-form__input--invalid');
      });
    };

    const setFieldError = (key, message) => {
      if (errors[key]) errors[key].textContent = message;
      fields[key]?.classList.add('contact-form__input--invalid');
    };

    const validate = () => {
      clearErrors();
      let valid = true;

      const name = fields.name?.value.trim() ?? '';
      const email = fields.email?.value.trim() ?? '';
      const subject = fields.subject?.value.trim() ?? '';
      const message = fields.message?.value.trim() ?? '';

      if (name.length < 2) {
        setFieldError('name', 'Please enter your name (at least 2 characters).');
        valid = false;
      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        setFieldError('email', 'Please enter a valid email address.');
        valid = false;
      }

      if (subject.length < 3) {
        setFieldError('subject', 'Subject must be at least 3 characters.');
        valid = false;
      }

      if (message.length < 10) {
        setFieldError('message', 'Message must be at least 10 characters.');
        valid = false;
      }

      return valid;
    };

    const showFeedback = (type, text) => {
      if (!feedback) return;
      feedback.hidden = false;
      feedback.className = `contact-form__feedback contact-form__feedback--${type}`;
      feedback.textContent = text;
    };

    loadDraft();

    Object.values(fields).forEach((input) => {
      input?.addEventListener('input', () => {
        saveDraft();
        input.classList.remove('contact-form__input--invalid');
        const key = input.name;
        if (errors[key]) errors[key].textContent = '';
      });
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!validate()) {
        showFeedback('error', 'Please fix the highlighted fields and try again.');
        return;
      }

      const name = fields.name.value.trim();
      const email = fields.email.value.trim();
      const subject = fields.subject.value.trim();
      const message = fields.message.value.trim();

      const body = [
        `Hi ${CONTACT.name},`,
        ``,
        message,
        ``,
        `—`,
        name,
        email,
      ].join('\n');

      const mailSubject = subject.startsWith('Portfolio:')
        ? subject
        : `Portfolio: ${subject}`;
      const mailto = `mailto:${CONTACT.email}?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(body)}`;

      const mailLink = document.createElement('a');
      mailLink.href = mailto;
      mailLink.rel = 'noopener noreferrer';
      document.body.appendChild(mailLink);
      mailLink.click();
      mailLink.remove();

      showFeedback(
        'success',
        `Opening your email app to send to ${CONTACT.email}. If nothing opens, copy the address from the sidebar.`
      );

      localStorage.removeItem(DRAFT_KEY);
      setTimeout(() => form.reset(), 600);
    });
  }
}
