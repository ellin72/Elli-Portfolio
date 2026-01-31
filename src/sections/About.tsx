import { motion } from 'framer-motion';
import { SectionTitle } from '../components/SectionTitle';

export const About = () => {
    const highlights = [
        {
            icon: '⚡',
            title: 'Problem Solving',
            description: 'Breaking down complex problems into elegant, scalable solutions'
        },
        {
            icon: '✨',
            title: 'Clean Code',
            description: 'Writing maintainable, readable, and well-documented code'
        },
        {
            icon: '🚀',
            title: 'Performance',
            description: 'Optimizing applications for speed and efficiency'
        },
        {
            icon: '🎨',
            title: 'UX Design',
            description: 'Creating intuitive and delightful user experiences'
        },
        {
            icon: '🔒',
            title: 'Security',
            description: 'Implementing best practices for secure applications'
        },
        {
            icon: '📱',
            title: 'Responsive Design',
            description: 'Building experiences that work seamlessly across devices'
        }
    ];

    const stats = [
        { label: 'Projects Completed', value: '10+', icon: '🎯' },
        { label: 'Years Experience', value: '3+', icon: '📅' },
        { label: 'Tech Stack', value: '15+', icon: '⚙️' },
        { label: 'Happy Clients', value: '5+', icon: '😊' },
    ];

    return (
        <section
            id="about"
            className="py-24 bg-white dark:bg-gray-950 border-b border-gray-200/50 dark:border-gray-800/50"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle
                    title="About Me"
                    subtitle="Full Stack Developer | Problem Solver | Tech Enthusiast"
                />

                {/* Profile Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
                >
                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex justify-center"
                    >
                        <div className="relative w-full max-w-xs">
                            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl blur opacity-75"></div>
                            <div className="relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src="/assets/images/bmc_qr.png"
                                    alt="Elli N Shituna"
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Bio */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                            Turning Ideas Into Code
                        </h3>
                        
                        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                            I'm a passionate full-stack developer with expertise in modern web technologies. I specialize in building high-performance applications that solve real-world problems with clean, maintainable code.
                        </p>

                        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                            With 3+ years of professional experience, I've worked on diverse projects ranging from startups to established companies, always focusing on delivering exceptional results and maintaining the highest code quality standards.
                        </p>

                        <div className="space-y-3">
                            <p className="text-gray-700 dark:text-gray-300"><span className="font-semibold text-indigo-600">Location:</span> Namibia 🌍</p>
                            <p className="text-gray-700 dark:text-gray-300"><span className="font-semibold text-indigo-600">Availability:</span> Open for opportunities</p>
                            <p className="text-gray-700 dark:text-gray-300"><span className="font-semibold text-indigo-600">Specialization:</span> React, TypeScript, Node.js, Full Stack</p>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Stats Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            whileHover={{ y: -4 }}
                            className="text-center p-6 rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 border border-indigo-200/50 dark:border-indigo-800/50 hover:shadow-lg transition-all"
                        >
                            <div className="text-4xl mb-2">{stat.icon}</div>
                            <p className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-1">{stat.value}</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Highlights */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {highlights.map((highlight, index) => (
                        <motion.div
                            key={highlight.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            whileHover={{ y: -4 }}
                            className="p-6 rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 border border-indigo-200/50 dark:border-indigo-800/50 hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-300"
                        >
                            <div className="text-5xl mb-4">{highlight.icon}</div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                {highlight.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                {highlight.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
