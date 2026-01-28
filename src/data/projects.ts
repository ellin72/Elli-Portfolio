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
        name: "E-Commerce Platform",
        description: "Full-stack e-commerce platform with real-time inventory management, payment integration, and admin dashboard.",
        image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=500&h=300&fit=crop",
        technologies: ["React", "Node.js", "MongoDB", "Stripe"],
        github: "https://github.com",
        liveDemo: "https://example.com",
    },
    {
        id: 2,
        name: "Task Management App",
        description: "Collaborative task management application with real-time updates, team collaboration, and productivity analytics.",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop",
        technologies: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
        github: "https://github.com",
        liveDemo: "https://example.com",
    },
    {
        id: 3,
        name: "Weather Dashboard",
        description: "Real-time weather dashboard with location-based forecasts, weather alerts, and historical data visualization.",
        image: "https://images.unsplash.com/photo-1560807707-cab4b4fb8c4b?w=500&h=300&fit=crop",
        technologies: ["React", "API Integration", "Chart.js", "Geolocation"],
        github: "https://github.com",
        liveDemo: "https://example.com",
    },
    {
        id: 4,
        name: "Social Media Analytics",
        description: "Analytics platform for social media metrics with advanced filtering, export capabilities, and performance insights.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
        technologies: ["React", "D3.js", "Express", "PostgreSQL"],
        github: "https://github.com",
        liveDemo: "https://example.com",
    },
    {
        id: 5,
        name: "AI Content Generator",
        description: "AI-powered content generation tool with multiple templates, customization options, and batch processing.",
        image: "https://images.unsplash.com/photo-1677442d019cecf8a904a25a92ecd9a2e1610c98?w=500&h=300&fit=crop",
        technologies: ["React", "TypeScript", "OpenAI API", "AWS"],
        github: "https://github.com",
        liveDemo: "https://example.com",
    },
    {
        id: 6,
        name: "Portfolio Website",
        description: "Modern, responsive portfolio website with smooth animations, dark mode, and SEO optimization.",
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop",
        technologies: ["React", "Tailwind CSS", "Framer Motion", "TypeScript"],
        github: "https://github.com",
        liveDemo: "https://example.com",
    },
];
