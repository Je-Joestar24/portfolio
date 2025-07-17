const projectsData = [
  {
    title: "CrimeGuard",
    description: "Crime Mapping and Incident Management SPA for real-time reporting, heatmaps, analytics, and police-citizen coordination. Built with Laravel & Vue.js.",
    role: "Lead Full-Stack Developer",
    stack: ["vue.png", "laravel.png", "tailwind.png", "mysql.png", "php.png"],
    image: "assets/crimeguard.png",
    alt: "Screenshot of CrimeGuard SPA dashboard",
    links: [
      { label: "GitHub", url: "https://github.com/Je-Joestar24/CG-Lmix", type: "github" }
    ]
  },
  {
    title: "DFCO",
    description: "Devil Fruit Collection Organization: E-commerce SPA for browsing, buying, and managing devil fruit products. Persistent cart, modals, and responsive UI.",
    role: "Full-Stack Developer",
    stack: ["js.png", "css.png", "html.png"],
    image: "assets/dfco.png",
    alt: "Screenshot of DFCO shopping app",
    links: [
      { label: "GitHub", url: "https://github.com/Je-Joestar24/dfco", type: "github" }
    ]
  },
  {
    title: "Library Management System",
    description: "Library Management System for CICTE - Western Leyte College. Book tracking, borrowing, attendance, and reporting. Built with PHP, MySQL, Bootstrap.",
    role: "Backend & Database Developer",
    stack: ["php.png", "mysql.png", "bootstrap.png", "js.png", "html.png"],
    image: "assets/library.png",
    alt: "Screenshot of Library Management System",
    links: [
      { label: "GitHub", url: "https://github.com/Je-Joestar24/librarymanagement", type: "github" }
    ]
  },
  {
    title: "Jejo Book Collector",
    description: "Modern Django web app for collecting and managing your favorite books. User authentication, CRUD, and recent views tracking.",
    role: "Full-Stack Developer",
    stack: ["django.png", "python.png", "css.png", "html.png"],
    image: "assets/jejo_book_collector.png",
    alt: "Screenshot of Jejo Book Collector app",
    links: [
      { label: "GitHub", url: "https://github.com/Je-Joestar24/jejo_book_collector", type: "github" }
    ]
  },
  {
    title: "ArchVoyage",
    description: "SPA guide to One Piece story arcs. Search, sort, and explore arcs with a fast, accessible, and responsive UI. Built with vanilla JS, CSS, and HTML5.",
    role: "Frontend Developer",
    stack: ["js.png", "css.png", "html.png"],
    image: "assets/archvoyage.png",
    alt: "Screenshot of ArchVoyage SPA",
    links: [
      { label: "GitHub", url: "https://github.com/Je-Joestar24/archvoyage", type: "github" }
    ]
  }
];

function renderProjects() {
  const projectsSection = document.getElementById("projects");
  if (!projectsSection) return;
  const container = document.createElement("div");
  container.className = "projects__gallery";
  projectsData.forEach((project) => {
    const card = document.createElement("article");
    card.className = "project-gallery-card";
    card.tabIndex = 0;
    card.setAttribute("role", "group");
    card.setAttribute("aria-label", project.title);

    const img = document.createElement("img");
    img.className = "project-gallery-card__img";
    img.src = project.image;
    img.alt = project.alt;
    card.appendChild(img);

    const title = document.createElement("h4");
    title.className = "project-gallery-card__title";
    title.textContent = project.title;
    card.appendChild(title);

    const desc = document.createElement("p");
    desc.className = "project-gallery-card__desc";
    desc.textContent = project.description;
    card.appendChild(desc);

    const role = document.createElement("div");
    role.className = "project-gallery-card__role";
    role.textContent = project.role;
    card.appendChild(role);

    const stack = document.createElement("div");
    stack.className = "project-gallery-card__stack";
    project.stack.forEach((icon) => {
      const iconImg = document.createElement("img");
      iconImg.className = "project-gallery-card__stack-icon";
      iconImg.src = `assets/${icon}`;
      iconImg.alt = icon.replace(".png", "");
      stack.appendChild(iconImg);
    });
    card.appendChild(stack);

    const links = document.createElement("div");
    links.className = "project-gallery-card__links";
    project.links.forEach((link) => {
      const a = document.createElement("a");
      a.className = "project-gallery-card__link";
      a.href = link.url;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.textContent = link.label;
      links.appendChild(a);
    });
    card.appendChild(links);

    container.appendChild(card);
  });
  projectsSection.innerHTML = '';
  projectsSection.appendChild(container);
}

document.addEventListener("DOMContentLoaded", renderProjects);
