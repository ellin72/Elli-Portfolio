export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gradient-to-b from-gray-900 to-gray-950 dark:from-gray-900 dark:to-black text-white py-16 border-t border-gray-800/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
                            EN
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Full Stack Developer | Building modern web experiences with cutting-edge technology
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
                        <ul className="space-y-3 text-gray-400">
                            <li>
                                <a href="#projects" className="hover:text-indigo-400 transition-colors text-sm">
                                    Projects
                                </a>
                            </li>
                            <li>
                                <a href="#skills" className="hover:text-indigo-400 transition-colors text-sm">
                                    Skills
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="hover:text-indigo-400 transition-colors text-sm">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6 text-white">Connect</h4>
                        <div className="flex space-x-4">
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-indigo-600 transition-colors flex items-center justify-center text-gray-400 hover:text-white"
                                aria-label="GitHub"
                            >
                                <span className="text-lg">𝐆</span>
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-indigo-600 transition-colors flex items-center justify-center text-gray-400 hover:text-white"
                                aria-label="LinkedIn"
                            >
                                <span className="text-lg">in</span>
                            </a>
                            <a
                                href="mailto:hello@example.com"
                                className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-indigo-600 transition-colors flex items-center justify-center text-gray-400 hover:text-white"
                                aria-label="Email"
                            >
                                <span className="text-lg">✉</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-800 pt-8">
                    <div className="text-center text-gray-500 text-sm">
                        <p>
                            © {currentYear} Elli N Shituna. All rights reserved. | Built with React + TypeScript + Tailwind CSS
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};
