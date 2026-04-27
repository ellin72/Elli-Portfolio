import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const navItems = [
    { label: 'About', type: 'section', value: 'about' },
    { label: 'Projects', type: 'section', value: 'projects' },
    { label: 'Writing', type: 'section', value: 'writing' },
    { label: 'Contact', type: 'section', value: 'contact' },
    { label: 'Blog', type: 'route', value: '/blog' },
] as const;

export const Navbar = () => {
    const [isDark, setIsDark] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'light';
        setIsDark(savedTheme === 'dark');
        if (savedTheme === 'dark') {
            document.documentElement.classList.add('dark');
        }
    }, []);

    const toggleDarkMode = useCallback(() => {
        setIsDark(!isDark);
        const newTheme = !isDark ? 'dark' : 'light';
        localStorage.setItem('theme', newTheme);
        if (newTheme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDark]);

    const navigateToSection = useCallback((id: string) => {
        setIsMenuOpen(false);

        if (location.pathname !== '/') {
            navigate(`/#${id}`);
            return;
        }

        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }, [location.pathname, navigate]);

    const navigateToRoute = useCallback((path: string) => {
        setIsMenuOpen(false);
        navigate(path);
    }, [navigate]);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed w-full top-0 z-50 bg-white/90 dark:bg-gray-950/90 border-b border-gray-200/50 dark:border-gray-800/50 shadow-sm backdrop-blur-sm"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="text-2xl font-bold"
                        >
                            <Link
                                to="/"
                                onClick={() => setIsMenuOpen(false)}
                                className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
                            >
                                EN
                            </Link>
                        </motion.div>
                    </div>

                    <div className="hidden md:flex space-x-1">
                        {navItems.map((item) => (
                            <button
                                key={item.label}
                                onClick={() =>
                                    item.type === 'section'
                                        ? navigateToSection(item.value)
                                        : navigateToRoute(item.value)
                                }
                                className="px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors capitalize font-medium"
                                aria-current={location.pathname === item.value ? 'page' : undefined}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>

                    <div className="flex items-center gap-2">
                        <motion.button
                            onClick={toggleDarkMode}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                            aria-label="Toggle dark mode"
                        >
                            {isDark ? '☀️' : '🌙'}
                        </motion.button>

                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                            aria-label="Toggle navigation menu"
                        >
                            {isMenuOpen ? '✕' : '☰'}
                        </button>
                    </div>
                </div>

                {isMenuOpen && (
                    <div className="md:hidden pb-4 pt-2 space-y-1">
                        {navItems.map((item) => (
                            <button
                                key={`mobile-${item.label}`}
                                onClick={() =>
                                    item.type === 'section'
                                        ? navigateToSection(item.value)
                                        : navigateToRoute(item.value)
                                }
                                className="block w-full text-left px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-600 dark:hover:text-indigo-400"
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </motion.nav>
    );
};
