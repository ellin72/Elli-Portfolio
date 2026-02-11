import { motion } from 'framer-motion';
import { SectionTitle } from '../components/SectionTitle';
import { Button } from '../components/Button';

const WHATSAPP_URL =
    'https://wa.me/264817244041?text=Hi%20Elli,%20I%20would%20like%20a%20website';

export const HireMe = () => {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const valuePoints = [
        'Custom website design',
        'Mobile-friendly & responsive',
        'Fast performance & SEO-ready',
        'Secure & scalable',
        'Affordable and tailored solutions',
    ];

    return (
        <section
            id="hire-me"
            className="py-24 bg-gradient-to-b from-indigo-50 via-white to-purple-50 dark:from-gray-950 dark:via-indigo-950/40 dark:to-gray-950 border-b border-indigo-100/60 dark:border-indigo-900/50"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <SectionTitle
                        title="Hire Me"
                        subtitle="Let’s build a modern, fast, and professional website for your business or personal brand."
                    />

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl blur opacity-40 dark:opacity-60" />

                        <div className="relative rounded-3xl bg-white/90 dark:bg-gray-900/80 backdrop-blur-xl shadow-2xl border border-white/60 dark:border-indigo-900/60 px-6 py-8 sm:px-10 sm:py-10">
                            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_minmax(0,1fr)] gap-10 lg:gap-12 items-center">
                                {/* Left: Copy + CTAs */}
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                                        Ready to launch your next website or web app?
                                    </h3>
                                    <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                                        I help businesses and personal brands build high-converting, modern
                                        websites that look great, load fast, and work perfectly on any device.
                                    </p>

                                    <div className="flex flex-col sm:flex-row gap-4 mb-4">
                                        <Button
                                            href={WHATSAPP_URL}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            variant="primary"
                                            size="lg"
                                        >
                                            Get Your Website
                                        </Button>
                                        <Button
                                            onClick={() => scrollToSection('projects')}
                                            variant="outline"
                                            size="lg"
                                        >
                                            View My Work
                                        </Button>
                                    </div>

                                    <Button
                                        href={WHATSAPP_URL}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        variant="secondary"
                                        size="md"
                                        className="w-full sm:hidden mt-2"
                                    >
                                        Chat on WhatsApp
                                    </Button>

                                    <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                                        Prefer email? Scroll down to the contact form and I’ll get back to you
                                        within 24 hours.
                                    </p>
                                </div>

                                {/* Right: Value points */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {valuePoints.map((point, index) => (
                                        <motion.div
                                            key={point}
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.05 }}
                                            whileHover={{ y: -4 }}
                                            className="p-4 rounded-2xl bg-gradient-to-br from-indigo-50/80 to-purple-50/80 dark:from-indigo-900/40 dark:to-purple-900/40 border border-indigo-100/70 dark:border-indigo-800/70 shadow-sm hover:shadow-lg hover:shadow-indigo-500/20 transition-all duration-300"
                                        >
                                            <div className="flex items-start gap-3">
                                                <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-sm">
                                                    ✓
                                                </span>
                                                <p className="text-sm md:text-base text-gray-800 dark:text-gray-100">
                                                    {point}
                                                </p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300">
                                    🚀 Modern stack (React, TypeScript, Tailwind)
                                </span>
                                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300">
                                    ✅ Clear communication & timelines
                                </span>
                                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                                    🌍 Remote-friendly collaborations
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

