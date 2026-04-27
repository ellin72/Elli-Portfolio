import { motion } from 'framer-motion';
import { SectionTitle } from '../components/SectionTitle';
import { skillCategories } from '../data/skills';

export const Skills = () => {
    const levelBadgeClass = (level: 'Beginner' | 'Intermediate') =>
        level === 'Intermediate'
            ? 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-300 dark:border-emerald-700/50'
            : 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-900/30 dark:text-amber-300 dark:border-amber-700/50';

    return (
        <section
            id="writing"
            className="py-24 bg-white dark:bg-gray-950 border-b border-gray-200/50 dark:border-gray-800/50"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle
                    title="Writing & Content Skills"
                    subtitle="Professional writing, editing, and content development services for career and research-focused clients"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={category.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
                            whileHover={{ y: -4 }}
                            className="p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800/80 border border-gray-200/70 dark:border-gray-700/70 hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-300"
                        >
                            <div className="mb-6">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-300 text-base">
                                        {category.icon}
                                    </span>
                                    {category.name}
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                    {category.summary}
                                </p>
                            </div>

                            <div className="space-y-3">
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.div
                                        key={skill.name}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                                        className="p-3 rounded-xl border border-gray-200/70 dark:border-gray-700/60 bg-white/70 dark:bg-gray-900/40 group"
                                        title={skill.description}
                                    >
                                        <div className="flex items-start justify-between gap-3 mb-2">
                                            <span className="text-gray-800 dark:text-gray-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors font-medium text-sm">
                                                {skill.name}
                                            </span>
                                            <span
                                                className={`text-xs font-semibold border px-2 py-1 rounded-full whitespace-nowrap ${levelBadgeClass(skill.level)}`}
                                            >
                                                {skill.level}
                                            </span>
                                        </div>
                                        <div className="h-2 w-full rounded-full bg-gray-200/80 dark:bg-gray-700/70 overflow-hidden">
                                            <div
                                                className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-blue-500"
                                                style={{ width: `${skill.progress}%` }}
                                            />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
