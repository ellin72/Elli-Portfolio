export interface Skill {
    name: string;
    category: "Frontend" | "Backend" | "Database" | "Tools";
}

export const skills: Skill[] = [
    // Frontend
    { name: "React", category: "Frontend" },
    { name: "TypeScript", category: "Frontend" },
    { name: "JavaScript", category: "Frontend" },
    { name: "Tailwind CSS", category: "Frontend" },
    { name: "CSS3", category: "Frontend" },
    { name: "HTML5", category: "Frontend" },
    { name: "Framer Motion", category: "Frontend" },
    { name: "Next.js", category: "Frontend" },

    // Backend
    { name: "Node.js", category: "Backend" },
    { name: "Express.js", category: "Backend" },
    { name: "Python", category: "Backend" },
    { name: "REST APIs", category: "Backend" },
    { name: "GraphQL", category: "Backend" },
    { name: "Authentication", category: "Backend" },
    { name: "Microservices", category: "Backend" },

    // Database
    { name: "MongoDB", category: "Database" },
    { name: "PostgreSQL", category: "Database" },
    { name: "Firebase", category: "Database" },
    { name: "MySQL", category: "Database" },
    { name: "Redis", category: "Database" },

    // Tools
    { name: "Git", category: "Tools" },
    { name: "Docker", category: "Tools" },
    { name: "AWS", category: "Tools" },
    { name: "Vercel", category: "Tools" },
    { name: "GitHub Actions", category: "Tools" },
    { name: "VS Code", category: "Tools" },
    { name: "Webpack", category: "Tools" },
    { name: "Vite", category: "Tools" },
];

export const skillsByCategory = {
    Frontend: skills.filter(s => s.category === "Frontend"),
    Backend: skills.filter(s => s.category === "Backend"),
    Database: skills.filter(s => s.category === "Database"),
    Tools: skills.filter(s => s.category === "Tools"),
};
