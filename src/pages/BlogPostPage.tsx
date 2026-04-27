import { Link, useParams } from 'react-router-dom';
import DOMPurify from 'dompurify';
import { BlogCard } from '../components/BlogCard';
import { getBlogPostBySlug, getRelatedBlogPosts, renderBlogMarkdown } from '../data/blog';
import { usePageMeta } from '../hooks/usePageMeta';

export const BlogPostPage = () => {
    const { slug = '' } = useParams();
    const post = getBlogPostBySlug(slug);

    usePageMeta({
        title: post ? `${post.title} | Elli N Shituna` : 'Post Not Found | Elli N Shituna',
        description: post?.excerpt || 'The article you are looking for does not exist.',
        urlPath: `/blog/${slug}`,
        type: 'article',
        noIndex: !post,
    });

    if (!post) {
        return (
            <section className="pt-32 pb-24 min-h-screen bg-white dark:bg-gray-950">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Post not found</h1>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                        The post you requested could not be found.
                    </p>
                    <Link
                        to="/blog"
                        className="inline-flex items-center px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-semibold"
                    >
                        Back to Blog
                    </Link>
                </div>
            </section>
        );
    }

    const html = DOMPurify.sanitize(renderBlogMarkdown(post.content));
    const relatedPosts = getRelatedBlogPosts(post.slug, 3);

    return (
        <article className="pt-32 pb-24 bg-white dark:bg-gray-950 min-h-screen">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link
                    to="/blog"
                    className="inline-flex items-center text-sm font-semibold text-indigo-600 dark:text-indigo-300 hover:text-indigo-700 dark:hover:text-indigo-200 mb-8"
                >
                    ← Back to all articles
                </Link>

                <header className="mb-8 border-b border-gray-200 dark:border-gray-800 pb-8">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200 dark:bg-indigo-900/30 dark:text-indigo-300 dark:border-indigo-700/50 mb-4">
                        {post.category}
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-4">
                        {post.title}
                    </h1>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                        <span>
                            {new Date(post.date).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                            })}
                        </span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                    </div>
                </header>

                <section
                    className="text-gray-800 dark:text-gray-200 leading-8 text-lg blog-content"
                    dangerouslySetInnerHTML={{ __html: html }}
                />

                <aside className="mt-14 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/70">
                    <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Author</h2>
                    <p className="text-gray-600 dark:text-gray-300">
                        Elli N Shituna is a developer and writing professional focused on clear communication, career documents, and practical content.
                    </p>
                </aside>

                {relatedPosts.length > 0 && (
                    <section className="mt-14">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                            Related Posts
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                            {relatedPosts.map((relatedPost, index) => (
                                <BlogCard key={relatedPost.slug} post={relatedPost} index={index} />
                            ))}
                        </div>
                    </section>
                )}
            </div>
        </article>
    );
};
