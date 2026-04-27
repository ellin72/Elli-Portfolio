import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { Projects } from './sections/Projects';
import { HireMe } from './sections/HireMe';
import { Contact } from './sections/Contact';
import { BlogListPage } from './pages/BlogListPage';
import { BlogPostPage } from './pages/BlogPostPage.tsx';
import { NotFoundPage } from './pages/NotFoundPage';

const HomePage = () => {
    return (
        <>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <HireMe />
            <Contact />
        </>
    );
};

const AppRoutes = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const targetId = location.hash.replace('#', '');
            const timer = window.setTimeout(() => {
                const element = document.getElementById(targetId);
                element?.scrollIntoView({ behavior: 'smooth' });
            }, 100);

            return () => window.clearTimeout(timer);
        }

        window.scrollTo({ top: 0, behavior: 'smooth' });
        return undefined;
    }, [location.pathname, location.hash]);

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog" element={<BlogListPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
};

function App() {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-950">
            <Navbar />
            <main>
                <AppRoutes />
            </main>
            <Footer />
        </div>
    );
}

export default App;
