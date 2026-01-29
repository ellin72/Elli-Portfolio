import { motion } from 'framer-motion';
import { SectionTitle } from '../components/SectionTitle';

export const SponsorSection = () => {
    return (
        <section
            id="sponsor"
            className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900/50 dark:to-gray-950 border-b border-gray-200/50 dark:border-gray-800/50"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle
                    title="Support My Work"
                    subtitle="If you like my projects and open source work, consider sponsoring me on GitHub"
                />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center gap-12"
                >
                    {/* Sponsor Button */}
                    <div className="flex justify-center">
                        <iframe
                            src="https://github.com/sponsors/ellin72/button"
                            title="Sponsor ellin72"
                            height="32"
                            width="114"
                            loading="lazy"
                            className="border-0 rounded-md"
                        />
                    </div>

                    {/* Sponsor Card */}
                    <div className="w-full flex justify-center">
                        <div className="w-full max-w-2xl bg-white dark:bg-gray-800/50 rounded-2xl shadow-xl p-6 border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm">
                            <iframe
                                src="https://github.com/sponsors/ellin72/card"
                                title="Sponsor ellin72 card"
                                height="225"
                                width="100%"
                                loading="lazy"
                                className="border-0 rounded-lg w-full"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
