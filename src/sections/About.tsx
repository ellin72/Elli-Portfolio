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

    return (
        <section
            id="about"
            className="py-24 bg-white dark:bg-gray-950 border-b border-gray-200/50 dark:border-gray-800/50"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle
                    title="About Me"
                    subtitle="Passionate developer with a focus on creating exceptional digital experiences"
                />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 max-w-3xl mx-auto"
                >
                    <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                        I'm a full-stack developer with a passion for building beautiful, functional web applications. With expertise in both frontend and backend technologies, I bring complete ideas to life through clean code and thoughtful design.
                    </p>
                    <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                        When I'm not coding, I'm exploring new technologies, contributing to open-source projects, and continuously learning to stay at the forefront of web development.
                    </p>
                </motion.div>

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
