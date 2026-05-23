export const projects = [
    {
        title: "CrimeGuard",
        role: "Lead Developer · Capstone",
        architecture: "SPA · MVC · DTO",
        desc: "Crime mapping and incident management platform connecting citizens and police in Ormoc City—centralized reporting, live coordination, and analytics for community safety.",
        highlights: [
            "Pin incidents on Google Maps; auto-assign reports to the nearest police station",
            "Real-time officer alerts via Laravel WebSockets (Pusher) when new incidents are filed",
            "Heatmaps, monitoring maps, and Highcharts dashboards for crime trends and demographics",
            "Role-based access (Admin, Officer, Citizen) with ID-verified registration and approval workflow",
            "Secure REST API: Laravel Sanctum auth and DTOs on every frontend–backend exchange",
            "Activity logs, archives, and optional Face++ facial verification for account security"
        ],
        tech: [
            "Laravel 10",
            "Vue 3",
            "MySQL",
            "Laravel Sanctum",
            "Google Maps API",
            "Highcharts",
            "WebSockets",
            "Tailwind CSS",
            "Axios"
        ],
        images: Array.from({ length: 7 }, (_, i) => `assets/projects_img/crimeguard${i + 1}.png`),
        demo: "",
        repo: "https://github.com/Je-Joestar24/CrimeGuard"
    },
    {
        title: "AskJeJo",
        role: "Full-Stack Developer",
        architecture: "SPA · Docker · Monorepo",
        desc: "AI chat application with a Vue 3 SPA and Laravel 12 API—Groq LLAMA models, cookie-based Sanctum auth, and a containerized PostgreSQL stack for portable deployment.",
        highlights: [
            "Monorepo layout: `frontend/` (Vite + Vue 3 Composition API) and `backend/` (Laravel 12)",
            "Sanctum CSRF cookie flow: `/sanctum/csrf-cookie` then credentialed Axios requests",
            "Groq API integration (`LLAMA-4-scout`) with Markdown replies rendered via `marked`",
            "Docker Compose orchestrates frontend, PHP backend, and PostgreSQL 15",
            "Vuex state, Vue Router guards, and Vitest unit tests on the client"
        ],
        tech: [
            "Vue 3 (Composition API)",
            "Vue Router",
            "Vuex",
            "Laravel 12",
            "PostgreSQL",
            "Groq API",
            "Docker",
            "Vite",
            "Vitest"
        ],
        images: Array.from({ length: 4 }, (_, i) => `assets/projects_img/AskJejo_${i}.png`),
        demo: "",
        repo: "https://github.com/Je-Joestar24/askjejo"
    },
    {
        title: "JRF",
        role: "Full-Stack Developer",
        architecture: "SPA · REST API · Pinia",
        desc: "Recipe discovery platform with Spoonacular-powered search, authenticated favorites persisted in MySQL, and a responsive Vue 3 + TypeScript client.",
        highlights: [
            "Smart search by ingredients, diet, or keywords with loading and error states",
            "Laravel Sanctum token auth, route guards, and protected API middleware",
            "Save, search, filter, and modal detail views for user-specific recipe collections",
            "Pinia stores for centralized client state; dark/light theme from system preference",
            "GitHub Pages demo with Laravel backend for full-stack CRUD"
        ],
        tech: [
            "Laravel 11",
            "Vue 3 (Composition API)",
            "TypeScript",
            "Pinia",
            "Spoonacular API",
            "Laravel Sanctum",
            "CSS 3"
        ],
        images: Array.from({ length: 3 }, (_, i) => `assets/projects_img/JRF${i + 1}.png`),
        demo: "https://je-joestar24.github.io/jejorecipefinder",
        repo: "https://github.com/Je-Joestar24/jejo_recipe_finder"
    },
    {
        title: "VoyaWeather",
        role: "Full-Stack Developer",
        architecture: "MTV · CBV · PostgreSQL",
        desc: "Travel-oriented weather app built on Django class-based views—city search, saved and favorite destinations, and an accessible dashboard backed by OpenWeatherMap.",
        highlights: [
            "All major features implemented as Django CBVs for modular, reusable logic",
            "PostgreSQL persistence for users, saved places, favorites, and recently viewed cities",
            "Recently viewed list deduplicates entries and keeps the latest view on top",
            "Form validation with user feedback on signup, login, and city search flows",
            "Semantic HTML, ARIA labels, CSS Grid/Flexbox layouts, and CSS animations"
        ],
        tech: [
            "Django",
            "PostgreSQL",
            "OpenWeather API",
            "Python",
            "CSS3",
            "HTML5"
        ],
        images: Array.from({ length: 5 }, (_, i) => `assets/projects_img/voyaweather${i + 1}.png`),
        demo: "",
        repo: "https://github.com/Je-Joestar24/voya_weather"
    },
    {
        title: "JejoBookCollector",
        role: "Full-Stack Developer",
        architecture: "MTV · Django ORM",
        desc: "Personal book collection manager with Google Books search, user accounts, and reading-track features in a responsive Django MTV app.",
        highlights: [
            "Google Books API search with add/remove and detail views for each title",
            "Django auth: signup, login, profile updates, and per-user collections",
            "Recent views tracking for quick return to last browsed books",
            "BEM-organized CSS with Grid/Flexbox, CSS variables, and accessibility labels"
        ],
        tech: [
            "Django",
            "Python",
            "Google Books API",
            "SQLite",
            "CSS3",
            "HTML5"
        ],
        images: Array.from({ length: 6 }, (_, i) => `assets/projects_img/jejobook${i + 1}.png`),
        demo: "",
        repo: "https://github.com/Je-Joestar24/jejo_book_collector"
    },
    {
        title: "Library Management System",
        role: "Backend Developer · Mini-Thesis",
        architecture: "MVC · PHP · MySQL",
        desc: "CICTE library system for Western Leyte College—book inventory, borrowing workflows, student attendance, and automated overdue handling.",
        highlights: [
            "Separate Admin and Librarian roles: user management vs. day-to-day operations",
            "Book CRUD with search by title, author, or category; borrow/return with due dates",
            "Student ID scan check-in for library attendance and report generation",
            "Automated overdue flags and borrower notifications",
            "Native PHP + MySQL with Bootstrap and jQuery for interactive forms"
        ],
        tech: ["PHP", "MySQL", "Bootstrap", "jQuery", "HTML", "JavaScript"],
        images: Array.from({ length: 3 }, (_, i) => `assets/projects_img/librarymanagement${i + 1}.png`),
        demo: "",
        repo: "https://github.com/Je-Joestar24/librarymanagement"
    },
    {
        title: "DFCO",
        role: "Frontend Developer",
        architecture: "SPA · ES Modules · Client Router",
        desc: "Devil Fruit Collection Organization—vanilla JS e-commerce SPA with cart logic, auth, and persistent state, built without frameworks to demonstrate core JavaScript architecture.",
        highlights: [
            "Custom client-side router for Home, Products, Cart, and auth views without reloads",
            "Shopping cart: add, remove, update quantities with `localStorage` + `sessionStorage`",
            "Modular ES6 structure: views, templates, state utilities, and async product loading",
            "Product modals, responsive CSS Grid/Flexbox UI, and JSON-backed catalog data"
        ],
        tech: ["HTML5", "CSS3", "JavaScript (ES6+)", "localStorage", "sessionStorage"],
        images: Array.from({ length: 6 }, (_, i) => `assets/projects_img/DFCO${i + 1}.png`),
        demo: "https://je-joestar24.github.io/DFCO",
        repo: "https://github.com/Je-Joestar24/DFCO"
    },
    {
        title: "ArcVoyage",
        role: "Frontend Developer",
        architecture: "SPA · Vanilla JS",
        desc: "Interactive One Piece arc guide—explore story arcs with search, sort, detailed summaries, and client-side caching for fast repeat visits.",
        highlights: [
            "SPA navigation with client-side routing and component-style JS modules",
            "Real-time arc search and sorting across episode/chapter ranges and summaries",
            "localStorage caching to reduce repeat load time on return visits",
            "Semantic HTML5, ARIA labels, responsive layout, and CSS animations"
        ],
        tech: ["HTML5", "CSS3", "JavaScript (ES6+)", "localStorage"],
        images: Array.from({ length: 4 }, (_, i) => `assets/projects_img/archvoyage${i + 1}.png`),
        demo: "https://je-joestar24.github.io/ArchVoyage",
        repo: "https://github.com/Je-Joestar24/ArchVoyage"
    }
];
