import { motion } from 'framer-motion';
import { Project } from '../data/projects';
import { Button } from './Button';

interface ProjectCardProps {
    project: Project;
    index?: number;
}

export const ProjectCard = ({ project, index = 0 }: ProjectCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -12, transition: { duration: 0.2 } }}
            className="group relative h-full bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-2xl hover:shadow-indigo-500/20 transition-all duration-300"
        >
            {/* Image Container */}
            <div className="relative h-56 overflow-hidden bg-gradient-to-br from-indigo-400 to-purple-500">
                <motion.img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </div>

            {/* Content */}
            <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {project.name}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-5">
                    {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                            <motion.span
                                key={tech}
                                whileHover={{ scale: 1.05 }}
                                className="px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/40 dark:to-purple-900/40 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800/50"
                            >
                                {tech}
                            </motion.span>
                        ))}
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                    <Button
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="outline"
                        size="sm"
                        className="flex-1 text-center"
                    >
                        GitHub
                    </Button>
                    <Button
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="primary"
                        size="sm"
                        className="flex-1 text-center"
                    >
                        Demo
                    </Button>
                </div>
            </div>
        </motion.div>
    );
};
