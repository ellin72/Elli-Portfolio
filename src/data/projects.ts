export interface Project {
    id: number;
    name: string;
    description: string;
    image: string;
    technologies: string[];
    github: string;
    liveDemo: string;
}

export const projects: Project[] = [
    {
        id: 1,
        name: "Portfolio Website",
        description: "Modern, responsive portfolio website with smooth animations, dark mode, and SEO optimization. Built to showcase projects and skills with an elegant design.",
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop",
        technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
        github: "https://github.com/ellin72",
        liveDemo: "https://ellin72-portfolio.vercel.app",
    },
    {
        id: 2,
        name: "Task Management App",
        description: "Collaborative task management application with real-time updates, team collaboration features, and intuitive task organization to boost productivity.",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop",
        technologies: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
        github: "https://github.com/ellin72/task-management-app",
        liveDemo: "https://task-management-app.vercel.app",
    },
    {
        id: 3,
        name: "E-Commerce Platform",
        description: "Full-stack e-commerce platform with real-time inventory management, secure payment integration, and comprehensive admin dashboard for store management.",
        image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=500&h=300&fit=crop",
        technologies: ["React", "Node.js", "MongoDB", "Stripe"],
        github: "https://github.com/ellin72/ecommerce-platform",
        liveDemo: "https://ecommerce-platform.vercel.app",
    },
];
