import { motion } from 'framer-motion';
import { Button } from '../components/Button';

export const Hero = () => {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50 via-white to-indigo-50/30 dark:from-gray-950 dark:via-slate-900 dark:to-gray-950 pt-20 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        x: [0, 100, 0],
                        y: [0, 100, 0],
                    }}
                    transition={{ duration: 20, repeat: Infinity }}
                    className="absolute top-20 right-20 w-96 h-96 bg-indigo-200 dark:bg-indigo-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
                />
                <motion.div
                    animate={{
                        x: [0, -100, 0],
                        y: [0, -100, 0],
                    }}
                    transition={{ duration: 25, repeat: Infinity }}
                    className="absolute bottom-20 left-20 w-96 h-96 bg-purple-200 dark:bg-purple-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    {/* Left Column - Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="mb-8"
                        >
                            <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 text-indigo-600 dark:text-indigo-300 text-sm font-semibold border border-indigo-200 dark:border-indigo-800/50">
                                ✨ Full Stack Developer
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight tracking-tight"
                        >
                            ELLI N{' '}
                            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                                SHITUNA
                            </span>
                        </motion.h1>

                        <motion.h2
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6 font-medium"
                        >
                            Crafting Digital Solutions with React, TypeScript & Modern Web Technologies
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                            className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg leading-relaxed"
                        >
                            I build scalable, high-performance web applications with clean code and exceptional UX. Specialized in full-stack development using cutting-edge technologies.
                        </motion.p>

                        {/* Quick Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.55, duration: 0.6 }}
                            className="flex gap-8 mb-8"
                        >
                            <div>
                                <p className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">10+</p>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Projects Built</p>
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">3+</p>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Years Experience</p>
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">100%</p>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Dedication</p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.6 }}
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <Button
                                onClick={() => scrollToSection('projects')}
                                variant="primary"
                                size="lg"
                            >
                                View Projects ↓
                            </Button>
                            <Button
                                onClick={() => scrollToSection('contact')}
                                variant="outline"
                                size="lg"
                            >
                                Get In Touch
                            </Button>
                        </motion.div>
                    </motion.div>

                    {/* Right Column - Profile Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="hidden md:flex items-center justify-center"
                    >
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            className="relative w-full h-full max-w-sm"
                        >
                            {/* Gradient Border */}
                            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-1 blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
                            
                            {/* Profile Card */}
                            <div className="relative bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-2xl">
                                <img
                                    src="/assets/images/profile.jpg"
                                    alt="Elli N Shituna - Full Stack Developer"
                                    className="w-full h-full object-cover"
                                />
                                
                                {/* Overlay Badge */}
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                                    <p className="text-white font-semibold text-lg">Open to Opportunities</p>
                                    <p className="text-indigo-300 text-sm">Available for Contract & Full-time</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
