# ELLI N SHITUNA - Full Stack Developer Portfolio

A modern, professional portfolio website built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Tech Stack**: React 18 + TypeScript + Tailwind CSS
- **Responsive Design**: Mobile-first approach with breakpoints for all devices
- **Interactive Components**: Smooth animations, hover effects, and micro-interactions
- **Functional Contact Form**: Form validation and submission handling
- **Skill Visualization**: Animated progress bars and categorized skills
- **Project Showcase**: Grid layout with project cards and tech stacks
- **Clean Architecture**: Component-based structure with reusable UI elements

## 📁 Project Structure

```
Elli-Portfolio/
├── public/
│   └── assets/              # Static assets (images, icons)
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Button.tsx      # Custom button component
│   │   ├── Card.tsx        # Card component
│   │   ├── Navbar.tsx      # Navigation bar
│   │   └── Footer.tsx      # Footer component
│   ├── sections/           # Page sections
│   │   ├── Hero.tsx        # Hero section
│   │   ├── About.tsx       # About section
│   │   ├── Projects.tsx    # Projects showcase
│   │   ├── Skills.tsx      # Skills display
│   │   └── Contact.tsx     # Contact form
│   ├── styles/             # Styling
│   │   └── globals.css     # Global styles and Tailwind
│   ├── types/              # TypeScript type definitions
│   │   └── index.ts        # Shared types
│   ├── App.tsx             # Main app component
│   └── main.tsx            # App entry point
├── package.json            # Dependencies and scripts
├── tsconfig.json          # TypeScript configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── vite.config.ts         # Vite build configuration
└── README.md              # Project documentation
```

## 🛠 Technologies Used

### Frontend
- **React 18** - UI library with hooks and modern features
- **TypeScript** - Type-safe JavaScript development
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Modern icon library

### Build Tools
- **Vite** - Fast build tool and dev server
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

### Development
- **ESLint** - Code linting and formatting
- **TypeScript Compiler** - Type checking and compilation

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/elli-portfolio.git
   cd elli-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📱 Responsive Design

The portfolio is fully responsive with optimized layouts for:

- **Mobile** (< 768px) - Single column, hamburger menu
- **Tablet** (768px - 1024px) - Adjusted grid layouts
- **Desktop** (> 1024px) - Full multi-column layouts

## 🎨 Customization

### Adding Projects
Edit `src/sections/Projects.tsx` and update the `projects` array:

```typescript
const projects: Project[] = [
  {
    id: 'unique-id',
    title: 'Project Name',
    description: 'Project description...',
    image: '/path/to/image.jpg',
    techStack: ['React', 'Node.js', 'TypeScript'],
    codeUrl: 'https://github.com/username/repo',
    demoUrl: 'https://project-demo.com',
  },
  // Add more projects...
];
```

### Updating Skills
Edit `src/sections/Skills.tsx` and modify the `skillsByCategory` object:

```typescript
const skillsByCategory = {
  frontend: [
    { name: 'React', level: 90 },
    // Add more skills...
  ],
  // Add other categories...
};
```

### Customizing Colors
Update `tailwind.config.js` to modify the color scheme:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        indigo: '#4F46E5',  // Your brand color
        blue: '#3B82F6',     // Secondary color
      },
      accent: {
        green: '#10B981',     // Accent color
      }
    }
  }
}
```

## 📧 Contact Form

The contact form includes:
- Client-side validation
- Loading states
- Success/error handling
- TODO: Connect to your backend service

To implement the backend, update the `handleSubmit` function in `src/sections/Contact.tsx`:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    
    if (response.ok) {
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    }
  } catch (error) {
    setSubmitStatus('error');
  } finally {
    setIsSubmitting(false);
  }
};
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on push

### Netlify
1. Run `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure build settings

### Other Platforms
The build output is in the `dist` folder and can be deployed to any static hosting service.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Live Demo

[Live Portfolio Link](https://your-portfolio-url.com) - *Replace with your actual deployed URL*

## 📞 Connect

- **LinkedIn**: [Your LinkedIn Profile](https://linkedin.com/in/your-profile)
- **GitHub**: [Your GitHub Profile](https://github.com/your-username)
- **Twitter**: [Your Twitter Profile](https://twitter.com/your-username)

---

**Built with ❤️ by ELLI N SHITUNA**
