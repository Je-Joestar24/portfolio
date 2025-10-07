export const projects = [
    {
        title: "CrimeGuard",
        desc: "SPA for real-time crime reporting, heatmaps, analytics, and police-citizen coordination. Centralized, secure, and modern.",
        tech: ["Laravel", "Vue 3 (Options API)", "Vuex", "MySQL", "Google Maps API", "Tailwind CSS"],
        images: Array.from({ length: 7 }, (_, i) => `assets/projects_img/crimeguard${i + 1}.png`),
        demo: "https://crime-guard.csitcicte.com/",
        repo: "https://github.com/Je-Joestar24/CrimeGuard"
    },
    {
        title: "AskJeJo",
        desc: "Full-stack AI chat application built with Vue 3 and Laravel 12. Features real-time conversations with Groq’s LLAMA models, secure authentication via Sanctum, and a clean SPA interface. Dockerized architecture with PostgreSQL ensures scalability and portability.",
        tech: [
            "Vue 3 (Composition API)",
            "Vue Router",
            "Vuex",
            "Laravel 12",
            "PostgreSQL",
            "Groq API (LLAMA)",
            "Docker",
            "CSS"
        ],
        images: Array.from({ length: 4 }, (_, i) => `assets/projects_img/AskJejo_${i}.png`),
        demo: "",
        repo: "https://github.com/Je-Joestar24/askjejo"
    },
    {
        title: "JRF",
        desc: "Modern recipe discovery SPA. Search, save, and manage recipes with real-time results, user auth, and responsive design. Powered by Spoonacular API and built for scalability and maintainability.",
        tech: ["Vue 3 (Composition API)", "TypeScript", "Spoonacular API", "Pinia", "localStorage", "sessionStorage"],
        images: Array.from({ length: 3 }, (_, i) => `assets/projects_img/JRF${i + 1}.png`),
        demo: "https://je-joestar24.github.io/jejorecipefinder",
        repo: "https://github.com/Je-Joestar24/jejo_recipe_finder"
    },
/*     {
        title: "DFCO",
        desc: "Devil Fruit Collection Organization: e-commerce SPA for browsing, buying, and managing devil fruit products. Persistent cart, auth, and smooth UI.",
        tech: ["HTML", "CSS", "JavaScript (ES6+)", "LocalStorage"],
        images: Array.from({ length: 6 }, (_, i) => `assets/projects_img/DFCO${i + 1}.png`),
        demo: "https://je-joestar24.github.io/DFCO",
        repo: "https://github.com/Je-Joestar24/DFCO"
    }, */
    {
        title: "VoyaWeather",
        desc: "Weather-tracking MTV with real-time data, city search, and saved locations. Built with Django (MTV, CBV), form validation, and clean modular code.",
        tech: ["Django", "OpenWeather API", "Python", "CSS3", "HTML5", "PosgreSQL"],
        images: Array.from({ length: 5 }, (_, i) => `assets/projects_img/voyaweather${i + 1}.png`),
        demo: "",
        repo: "https://github.com/Je-Joestar24/voya_weather"
    },
    {
        title: "JejoBookCollector",
        desc: "Modern Django MTV app for book lovers. Collect, manage, and track your reading with a clean, responsive UI.",
        tech: ["Django", "Python", "Google Books API", "SQLite", "CSS3", "HTML5"],
        images: Array.from({ length: 6 }, (_, i) => `assets/projects_img/jejobook${i + 1}.png`),
        demo: "",
        repo: "https://github.com/Je-Joestar24/jejo_book_collector"
    },
    {
        title: "Library Management System",
        desc: "CICTE Library System for book tracking, borrowing, attendance, and reporting. Admin/librarian roles, overdue notifications, and reports.",
        tech: ["PHP", "MySQL", "Bootstrap", "jQuery", "HTML", "JavaScript"],
        images: Array.from({ length: 3 }, (_, i) => `assets/projects_img/librarymanagement${i + 1}.png`),
        demo: "",
        repo: "https://github.com/Je-Joestar24/librarymanagement"
    }
];
