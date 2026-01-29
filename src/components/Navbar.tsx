import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const Navbar = () => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'light';
        setIsDark(savedTheme === 'dark');
        if (savedTheme === 'dark') {
            document.documentElement.classList.add('dark');
        }
    }, []);

    const toggleDarkMode = () => {
        setIsDark(!isDark);
        const newTheme = !isDark ? 'dark' : 'light';
        localStorage.setItem('theme', newTheme);
        if (newTheme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    };

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed w-full top-0 z-50 bg-white/80 dark:bg-gray-950/80 border-b border-gray-200/50 dark:border-gray-800/50 shadow-sm backdrop-blur-xl"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <motion.h1
                            whileHover={{ scale: 1.05 }}
                            className="text-2xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
                        >
                            EN
                        </motion.h1>
                    </div>

                    <div className="hidden md:flex space-x-1">
                        {['about', 'projects', 'skills', 'contact'].map((item) => (
                            <motion.button
                                key={item}
                                onClick={() => scrollToSection(item)}
                                whileHover={{ backgroundColor: 'rgba(99, 102, 241, 0.1)' }}
                                className="px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors capitalize font-medium"
                            >
                                {item}
                            </motion.button>
                        ))}
                    </div>

                    <motion.button
                        onClick={toggleDarkMode}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                        aria-label="Toggle dark mode"
                    >
                        {isDark ? '☀️' : '🌙'}
                    </motion.button>
                </div>
            </div>
        </motion.nav>
    );
};
