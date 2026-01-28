# Elli N Shituna - Portfolio Website

A modern, responsive portfolio website showcasing projects and skills as a full-stack developer.

## 🎨 Features

- **Responsive Design**: Mobile-first approach with seamless responsiveness
- **Dark Mode**: Toggle between light and dark themes
- **Smooth Animations**: Framer Motion animations for engaging interactions
- **Project Showcase**: Grid-based project cards with tech stack display
- **Contact Form**: Functional contact form with validation
- **SEO Optimized**: Meta tags and semantic HTML for better SEO
- **Performance**: Built with Vite for fast development and production builds
- **TypeScript**: Full type safety across the codebase

## 🚀 Tech Stack

- **React 18** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Node.js / npm** - Package management

## 📁 Project Structure

```
Elli-Portfolio/
├── public/
│   └── assets/
│       ├── images/
│       └── icons/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── Button.tsx
│   │   ├── SectionTitle.tsx
│   │   └── ProjectCard.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   └── Contact.tsx
│   ├── data/
│   │   ├── projects.ts
│   │   └── skills.ts
│   ├── styles/
│   │   └── globals.css
│   ├── App.tsx
│   └── main.tsx
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── vite.config.ts
```

## 🛠️ Setup Instructions

### Prerequisites

- Node.js 16.x or higher
- npm or yarn

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/Elli-Portfolio.git
cd Elli-Portfolio
```

1. **Install dependencies**

```bash
npm install
# or
yarn install
```

1. **Start development server**

```bash
npm run dev
# or
yarn dev
```

The application will open at `http://localhost:3000`

### Building for Production

```bash
npm run build
# or
yarn build
```

This generates optimized production files in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
# or
yarn preview
```

## 🎯 Sections Overview

### Hero

- Striking introduction with name and title
- Animated gradient background
- Call-to-action buttons
- Decorative illustration

### About

- Professional bio
- Key highlights with icons
- Skills preview badges
- Responsive grid layout

### Projects

- Featured project cards
- Project images and descriptions
- Technology stack tags
- GitHub and live demo links
- Hover animations

### Skills

- Categorized skills (Frontend, Backend, Database, Tools)
- Clean grid layout
- Interactive skill badges
- Visual organization

### Contact

- Contact form with validation
- Contact information section
- Social media links
- Success feedback message

## 🎨 Design System

### Colors

- **Primary**: Indigo-600 (#4f46e5)
- **Secondary**: Blue-500 (#3b82f6)
- **Accent**: Emerald-500 (#10b981)

### Typography

- **Font**: Inter (Google Fonts)
- **Headings**: Bold, large sizes for hierarchy
- **Body**: Clean, readable 16px default

### Spacing

- Large spacing between sections
- Consistent padding and margins
- Mobile-optimized breakpoints

## 🔧 Customization

### Update Personal Information

Edit the Hero section in [src/sections/Hero.tsx](src/sections/Hero.tsx)

### Add/Edit Projects

Update the projects array in [src/data/projects.ts](src/data/projects.ts)

### Modify Skills

Update the skills array in [src/data/skills.ts](src/data/skills.ts)

### Customize Colors

Update the theme in [tailwind.config.ts](tailwind.config.ts)

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## ♿ Accessibility

- Semantic HTML elements
- ARIA labels for interactive elements
- Keyboard navigation support
- Color contrast compliance
- Focus states for form inputs

## 🚀 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import in [Vercel Dashboard](https://vercel.com)
3. Deploy with one click

### Netlify

1. Connect GitHub repository
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Deploy automatically

### Traditional Hosting

1. Run `npm run build`
2. Upload the `dist/` folder to your hosting provider
3. Configure your server to handle client-side routing

## 📄 Environment Variables

Currently, no environment variables are required. Contact form data is logged to console.

To integrate with a backend service:

1. Add `.env.local` file
2. Define API endpoints
3. Update Contact form submission

## 📈 Performance Optimizations

- Lazy loading with Framer Motion
- Optimized images with srcset
- Code splitting with Vite
- CSS minification with Tailwind
- Tree-shaking of unused styles

## 🔐 Security

- No sensitive data in frontend code
- Form validation on client-side
- HTTPS ready for deployment
- No external API calls without HTTPS

## 🐛 Troubleshooting

### Port already in use

```bash
npm run dev -- --port 3001
```

### Build errors

```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Tailwind styles not applying

Ensure all component files are referenced in `tailwind.config.ts` content array

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📧 Contact

For questions or suggestions, reach out through the contact form on the website.

---

**Built with ❤️ by Elli N Shituna**
