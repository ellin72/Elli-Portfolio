export interface BlogPostFrontmatter {
    title: string;
    date: string;
    excerpt: string;
    category: string;
    readTime: string;
}

export interface BlogPost extends BlogPostFrontmatter {
    slug: string;
    content: string;
}
