import { motion } from 'framer-motion';
import { SectionTitle } from '../components/SectionTitle';
import { skillsByCategory } from '../data/skills';

export const Skills = () => {
    const categories = Object.entries(skillsByCategory);

    return (
        <section
            id="skills"
            className="py-24 bg-white dark:bg-gray-950 border-b border-gray-200/50 dark:border-gray-800/50"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle
                    title="Technical Skills"
                    subtitle="Technologies and tools I work with"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.map(([category, skills], categoryIndex) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
                            whileHover={{ y: -4 }}
                            className="p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800/50 dark:to-gray-700/50 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-300"
                        >
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                                <span className="inline-block w-2 h-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 mr-3"></span>
                                {category}
                            </h3>

                            <div className="space-y-3">
                                {skills.map((skill, skillIndex) => (
                                    <motion.div
                                        key={skill.name}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                                        className="flex items-center group"
                                    >
                                        <span className="text-indigo-500 mr-3 group-hover:text-indigo-600 transition-colors">→</span>
                                        <span className="text-gray-700 dark:text-gray-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                            {skill.name}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Skills Grid Alternative View */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="mt-16"
                >
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                        All Skills at a Glance
                    </h3>
                    <div className="flex flex-wrap gap-3 justify-center">
                        {Object.values(skillsByCategory)
                            .flat()
                            .map((skill) => (
                                <motion.span
                                    key={skill.name}
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    className="px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 text-white text-sm font-medium shadow-md"
                                >
                                    {skill.name}
                                </motion.span>
                            ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
