import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';

export const NotFoundPage = () => {
    usePageMeta({
        title: 'Page Not Found | Elli N Shituna',
        description: 'The page you are looking for does not exist.',
        urlPath: '/404',
        type: 'website',
        noIndex: true,
    });

    return (
        <section className="pt-32 pb-24 min-h-screen bg-white dark:bg-gray-950">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-300 mb-4">
                    404 Error
                </p>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                    This page is missing
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                    The link may be outdated or the page may have moved.
                </p>
                <div className="flex items-center justify-center gap-3">
                    <Link
                        to="/"
                        className="inline-flex items-center px-5 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-semibold"
                    >
                        Go Home
                    </Link>
                    <Link
                        to="/blog"
                        className="inline-flex items-center px-5 py-3 rounded-lg border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-200 font-semibold hover:border-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-300"
                    >
                        Visit Blog
                    </Link>
                </div>
            </div>
        </section>
    );
};
