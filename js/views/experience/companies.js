/**
 * Companies Data
 * Contains work experience organized by company
 */
export const companies = [
    {
        name: "RiseUpKids (via Upwork)",
        location: "Remote",
        position: "Full Stack Developer",
        period: "2025",
        projects: [
            {
                title: "Rise Up Kids — Child Learning Management System (MVP)",
                shortDesc: "Child-friendly LMS built from scratch in one month with MERN stack, role-based access (Admin, Teacher, Parent, Child), and multiple third-party integrations.",
                fullDesc: "Delivered a full MVP of a child learning management system for RiseUpKids, designed and built custom from scratch within one month. The platform serves three core users: Admin (Users, content and lesson management), Admin (content and lesson management), Parent (child accounts and progress tracking), and Child (guided lessons, stories, and activities). Implemented JWT-based auth, role-based access control, local file storage for media, and structured lesson flows with books, videos, activities, and assignments. Integrated YouTube Live, Google Meet, Stripe for payments and subscriptions, and SCORM file handling, alongside other integrations, while keeping the codebase stable and extensible for future cloud storage and mobile.",
                images: Array.from({ length: 9 }, (_, i) => `assets/experience_img/riseupkids${i + 1}.png`),
                achievements: [
                    "Built complete MERN-based LMS MVP from scratch in one month",
                    "Implemented Admin, Parent, and Child roles with full RBAC",
                    "Integrated YouTube Live, Google Meet, Stripe, and SCORM handling",
                    "Designed extensible structure for cloud and mobile later"
                ],
                tech: ["MERN Stack", "MongoDB", "Express.js", "React", "Node.js", "JWT", "Stripe", "YouTube Live", "Google Meet", "SCORM"]
            }
        ]
    },
    {
        name: "Atula Solutions (via Upwork)",
        location: "Remote",
        position: "Freelance Full Stack Developer",
        period: "Sep 2025 – Present",
        projects: [
            {
                title: "Mental Health Triage Platform",
                shortDesc: "End-to-end mental health triage platform built from scratch with full system architecture, role-based access, and scalable structure.",
                fullDesc: "Designed and developed a comprehensive mental health triage platform from the ground up, including full system diagrams, data models, backend and frontend architecture, and complete functionality. Created a secure role-based access system for three main user types with full permission layers and optimized data flows. Developed the landing page, core triage features, diagnosis module, admin controls, and organization-level management with scalable structure ready for payment integration.",
                images: Array.from({ length: 8 }, (_, i) => `assets/experience_img/mentalhealth${i + 1}.png`),
                achievements: [
                    "Built complete system architecture from scratch",
                    "Implemented secure role-based access for 3 user types",
                    "Developed triage, diagnosis, and admin modules",
                    "Created scalable structure ready for payment integration"
                ],
                tech: ["MongoDB", "Expres.js", "React.js", "Node.js", "RESTful API", "Role-based Permissions", "Stripe"]
            },
            {
                title: "Child Care Management Platform",
                shortDesc: "Comprehensive childcare management system with analytics, reporting, and statistical data processing.",
                fullDesc: "Delivered API creation, integration, and maintenance for a MERN-based system, ensuring consistent performance and stability. Migrated backend logic from Heroku to AWS EC2, improving deployment reliability and reducing overall downtime. Implemented dashboard analytics with advanced filtering and processing of deeply structured data. Managed backend and frontend deployments through AWS EC2 and AWS Amplify. Built statistical report generation features for a childcare management platform, including downloadable PDF and Excel exports.",
                images: Array.from({ length: 4 }, (_, i) => `assets/experience_img/childcare${i + 1}.${i === 0 || i === 1 ? 'jpg' : 'png'}`),
                achievements: [
                    "Migrated backend from Heroku to AWS EC2",
                    "Implemented advanced dashboard analytics with filtering",
                    "Built statistical report generation (PDF & Excel exports)",
                    "Managed deployments via AWS EC2 and Amplify"
                ],
                tech: ["MERN Stack", "AWS EC2", "AWS Amplify", "Node.js", "MongoDB", "Express.js", "React"]
            }
        ]
    },
    {
        name: "ROK (Revolution of Kitten Inc.)",
        location: "Ormoc & Cebu (Remote + Onsite)",
        position: "Software Engineer Intern",
        period: "Feb 2025 – June 2025",
        projects: [
            {
                title: "Architwin Lib",
                shortDesc: "3D visualization library with enhanced mobile responsiveness, dynamic tag behavior, and panel movement.",
                fullDesc: "Contributed to three major projects (Azusa, Architwin Basic, Architwin Lib) focused on 3D visualization, feature development, and system optimization using Vue.js, TypeScript, Web2py (DAL), Matterport SDK, and Three.js. Developed and enhanced frontend features in Vue.js, improving responsiveness and UX across devices. Enhanced mobile responsiveness, dynamic tag behavior, and panel movement for Architwin Lib.",
                images: Array.from({ length: 3 }, (_, i) => `assets/experience_img/library${i + 1}.png`),
                achievements: [
                    "Enhanced mobile responsiveness across devices",
                    "Improved dynamic tag behavior and panel movement",
                    "Optimized 3D visualization performance"
                ],
                tech: ["Vanila JS", "TypeScript", "Matterport SDK", "Three.js"]
            },
            {
                title: "Architwin Basic",
                shortDesc: "3D visualization platform with Matterport SDK integration and optimized rendering.",
                fullDesc: "Debugged and optimized Matterport SDK and Three.js integrations, resolving transform control and object rendering issues for smoother 3D interactions. Improved loading performance by optimizing object handling and implementing efficient caching strategies.",
                images: Array.from({ length: 4 }, (_, i) => `assets/experience_img/architwin${i + 1}.png`),
                achievements: [
                    "Resolved transform control and rendering issues",
                    "Optimized object handling and caching strategies",
                    "Improved loading performance significantly"
                ],
                tech: ["Vue.js", "Matterport SDK", "Three.js", "TypeScript"]
            },
            {
                title: "Azusa",
                shortDesc: "3D visualization project with feature development and system optimization.",
                fullDesc: "Contributed to feature development and system optimization for Azusa project. Collaborated within an Agile workflow using GitLab (version control) and Redmine (sprint planning). Worked on 3D visualization features and improved overall system performance.",
                images: Array.from({ length: 3 }, (_, i) => `assets/experience_img/azusa${i + 1}.png`),
                achievements: [
                    "Developed new 3D visualization features",
                    "Optimized system performance",
                    "Collaborated in Agile workflow with GitLab and Redmine"
                ],
                tech: ["Vue.js", "TypeScript", "Web2py", "Matterport SDK", "Three.js"]
            }
        ]
    }
];

