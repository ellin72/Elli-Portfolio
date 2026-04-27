export interface Skill {
    name: string;
    level: 'Beginner' | 'Intermediate';
    description: string;
    progress: number;
}

export interface SkillCategory {
    name:
        | 'Writing & Content'
        | 'CV & Career Documents'
        | 'Editing & Quality'
        | 'Tools & Software'
        | 'Techniques';
    icon: string;
    summary: string;
    skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
    {
        name: 'Writing & Content',
        icon: '✍',
        summary: 'Clear, concise, and audience-focused writing for blogs and professional content.',
        skills: [
            { name: 'Blog Writing', level: 'Intermediate', description: 'Write structured blog content with a clear narrative and practical value.', progress: 72 },
            { name: 'Article Writing', level: 'Intermediate', description: 'Create informative long-form pieces with strong readability.', progress: 74 },
            { name: 'Content Writing', level: 'Intermediate', description: 'Develop focused content for web pages, resources, and guides.', progress: 76 },
            { name: 'Copywriting', level: 'Beginner', description: 'Craft short persuasive copy for headlines, calls-to-action, and blurbs.', progress: 48 },
        ],
    },
    {
        name: 'CV & Career Documents',
        icon: '📄',
        summary: 'Career-focused writing and editing to present strengths with confidence.',
        skills: [
            { name: 'CV/Resume Writing', level: 'Intermediate', description: 'Build role-specific resumes that highlight impact and outcomes.', progress: 75 },
            { name: 'Cover Letter Writing', level: 'Intermediate', description: 'Write personalized letters aligned with role expectations.', progress: 71 },
            { name: 'CV Editing & Formatting', level: 'Intermediate', description: 'Improve layout, language, and readability for recruiter scanning.', progress: 77 },
        ],
    },
    {
        name: 'Editing & Quality',
        icon: '✅',
        summary: 'Polishing content for clarity, correctness, and professional tone.',
        skills: [
            { name: 'Proofreading', level: 'Intermediate', description: 'Identify grammar, punctuation, and typographical issues.', progress: 78 },
            { name: 'Editing for Clarity', level: 'Intermediate', description: 'Refine sentence flow and structure for easier comprehension.', progress: 79 },
            { name: 'Grammar & Punctuation', level: 'Intermediate', description: 'Apply grammar rules and punctuation standards consistently.', progress: 80 },
        ],
    },
    {
        name: 'Tools & Software',
        icon: '🛠',
        summary: 'Reliable writing workflows using modern editing and document tools.',
        skills: [
            { name: 'Grammarly', level: 'Intermediate', description: 'Use assisted editing checks for grammar, tone, and consistency.', progress: 74 },
            { name: 'Google Docs', level: 'Intermediate', description: 'Collaborate and version writing documents efficiently.', progress: 76 },
            { name: 'Microsoft Word', level: 'Intermediate', description: 'Format and prepare professional documents for delivery.', progress: 73 },
        ],
    },
    {
        name: 'Techniques',
        icon: '🔎',
        summary: 'Core methods for discoverability, research-backed writing, and structure.',
        skills: [
            { name: 'SEO Writing (Basic)', level: 'Beginner', description: 'Apply basic on-page SEO principles for article discoverability.', progress: 45 },
            { name: 'Keyword Integration', level: 'Beginner', description: 'Place target terms naturally without sacrificing readability.', progress: 46 },
            { name: 'Research Writing', level: 'Intermediate', description: 'Use credible sources and structured synthesis for insight-driven content.', progress: 70 },
        ],
    },
];
