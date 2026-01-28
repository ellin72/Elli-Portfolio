import type { Config } from 'tailwindcss'

export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#6366f1',
                secondary: '#3b82f6',
                accent: '#ec4899',
                dark: '#0f172a',
            },
            fontFamily: {
                sans: ['Sora', 'sans-serif'],
                mono: ['Space Mono', 'monospace'],
            },
            animation: {
                fadeIn: 'fadeIn 0.6s ease-in',
                slideUp: 'fadeInUp 0.8s ease-out',
                slideInRight: 'slideInRight 0.6s ease-out',
                glow: 'glow 2s ease-in-out infinite',
            },
            keyframes: {
                fadeIn: {
                    from: { opacity: '0' },
                    to: { opacity: '1' },
                },
                fadeInUp: {
                    from: {
                        opacity: '0',
                        transform: 'translateY(40px)'
                    },
                    to: {
                        opacity: '1',
                        transform: 'translateY(0)'
                    },
                },
                slideInRight: {
                    from: {
                        opacity: '0',
                        transform: 'translateX(60px)'
                    },
                    to: {
                        opacity: '1',
                        transform: 'translateX(0)'
                    },
                },
            },
            boxShadow: {
                'glow': '0 0 20px rgba(99, 102, 241, 0.3)',
                'glow-lg': '0 0 40px rgba(99, 102, 241, 0.4)',
