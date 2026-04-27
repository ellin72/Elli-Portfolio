import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { BlogPost } from '../types/blog';

interface BlogCardProps {
    post: BlogPost;
    index: number;
}

export const BlogCard = ({ post, index }: BlogCardProps) => {
    return (
        <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08, duration: 0.45 }}
            className="h-full rounded-2xl border border-gray-200/70 dark:border-gray-700/60 bg-white dark:bg-gray-900/70 shadow-sm hover:shadow-lg transition-shadow"
        >
            <div className="p-6 h-full flex flex-col">
                <div className="flex flex-wrap gap-2 mb-4">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200 dark:bg-indigo-900/30 dark:text-indigo-300 dark:border-indigo-700/50">
                        {post.category}
                    </span>
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700 border border-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700">
                        {post.readTime}
                    </span>
                </div>

                <h2 className="text-xl font-bold text-gray-900 dark:text-white leading-snug mb-2">
                    {post.title}
                </h2>

                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                    {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                    })}
                </p>

                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 flex-grow">
                    {post.excerpt}
                </p>

                <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm transition-colors"
                >
                    Read More
                </Link>
            </div>
        </motion.article>
    );
};
