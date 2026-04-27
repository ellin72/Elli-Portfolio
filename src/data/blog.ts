import { marked } from 'marked';
import type { BlogPost } from '../types/blog';

const markdownModules = import.meta.glob('../content/blog/*.md', {
    eager: true,
    query: '?raw',
    import: 'default',
}) as Record<string, string>;

const extractSlugFromPath = (path: string) => {
    const filename = path.split('/').pop() || '';
    return filename.replace(/\.md$/, '');
};

const parseDateValue = (date: string) => {
    const timestamp = Date.parse(date);
    return Number.isNaN(timestamp) ? 0 : timestamp;
};

const parseFrontmatter = (rawMarkdown: string) => {
    if (!rawMarkdown.startsWith('---')) {
        return { metadata: {}, content: rawMarkdown };
    }

    const lines = rawMarkdown.split('\n');
    const endMarkerIndex = lines.findIndex((line, index) => index > 0 && line.trim() === '---');

    if (endMarkerIndex === -1) {
        return { metadata: {}, content: rawMarkdown };
    }

    const metadataLines = lines.slice(1, endMarkerIndex);
    const contentLines = lines.slice(endMarkerIndex + 1);

    const metadata = metadataLines.reduce<Record<string, string>>((accumulator, line) => {
        const separatorIndex = line.indexOf(':');

        if (separatorIndex === -1) {
            return accumulator;
        }

        const key = line.slice(0, separatorIndex).trim();
        const value = line
            .slice(separatorIndex + 1)
            .trim()
            .replace(/^"|"$/g, '');

        if (key) {
            accumulator[key] = value;
        }

        return accumulator;
    }, {});

    return { metadata, content: contentLines.join('\n').trim() };
};

const parsedPosts: BlogPost[] = Object.entries(markdownModules)
    .map(([path, rawMarkdown]) => {
        const { metadata, content } = parseFrontmatter(rawMarkdown);

        return {
            slug: extractSlugFromPath(path),
            title: String(metadata.title || ''),
            date: String(metadata.date || ''),
            excerpt: String(metadata.excerpt || ''),
            category: String(metadata.category || 'Writing'),
            readTime: String(metadata.readTime || '5 min read'),
            content,
        } satisfies BlogPost;
    })
    .sort((a, b) => parseDateValue(b.date) - parseDateValue(a.date));

export const blogPosts = parsedPosts;

export const getBlogPostBySlug = (slug: string) =>
    blogPosts.find((post) => post.slug === slug);

export const getBlogCategories = () =>
    ['All', ...new Set(blogPosts.map((post) => post.category))];

export const getRelatedBlogPosts = (slug: string, limit = 3) => {
    const currentPost = getBlogPostBySlug(slug);

    if (!currentPost) {
        return [];
    }

    const sameCategory = blogPosts.filter(
        (post) => post.slug !== slug && post.category === currentPost.category,
    );

    const fallbackPosts = blogPosts.filter(
        (post) => post.slug !== slug && post.category !== currentPost.category,
    );

    return [...sameCategory, ...fallbackPosts].slice(0, limit);
};

export const renderBlogMarkdown = (content: string) => marked.parse(content) as string;
