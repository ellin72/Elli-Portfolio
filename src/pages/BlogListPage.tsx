import { useMemo, useState } from 'react';
import { BlogCard } from '../components/BlogCard';
import { blogPosts, getBlogCategories } from '../data/blog';
import { usePageMeta } from '../hooks/usePageMeta';

export const BlogListPage = () => {
    const categories = useMemo(() => getBlogCategories(), []);
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredPosts = useMemo(() => {
        if (activeCategory === 'All') {
            return blogPosts;
        }

        return blogPosts.filter((post) => post.category === activeCategory);
    }, [activeCategory]);

    usePageMeta({
        title: 'Writing & Insights | Elli N Shituna',
        description: 'Articles, guides, and insights on writing, careers, and research.',
        urlPath: '/blog',
        type: 'website',
    });

    return (
        <section className="pt-32 pb-20 bg-white dark:bg-gray-950 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <header className="max-w-3xl mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        Writing & Insights
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                        Articles, guides, and insights on writing, careers, and research.
                    </p>
                </header>

                <div className="mb-8 flex flex-wrap gap-2">
                    {categories.map((category) => {
                        const count =
                            category === 'All'
                                ? blogPosts.length
                                : blogPosts.filter((post) => post.category === category).length;
                        const isActive = activeCategory === category;

                        return (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`inline-flex items-center gap-2 px-3 py-2 rounded-full border text-sm font-medium transition-colors ${
                                    isActive
                                        ? 'bg-indigo-600 text-white border-indigo-600'
                                        : 'bg-white text-gray-700 border-gray-200 hover:border-indigo-300 hover:text-indigo-600 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:border-indigo-500 dark:hover:text-indigo-300'
                                }`}
                            >
                                <span>{category}</span>
                                <span className={`text-xs px-1.5 py-0.5 rounded-full ${isActive ? 'bg-white/20' : 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300'}`}>
                                    {count}
                                </span>
                            </button>
                        );
                    })}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {filteredPosts.map((post, index) => (
                        <BlogCard key={post.slug} post={post} index={index} />
                    ))}
                </div>

                {filteredPosts.length === 0 && (
                    <p className="mt-8 text-gray-500 dark:text-gray-400">
                        No posts found in this category yet.
                    </p>
                )}
            </div>
        </section>
    );
};
