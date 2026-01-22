import React from 'react';
import { ShoppingCart, CheckSquare, BarChart3 } from 'lucide-react';
import Card from '@/components/Card';
import Button from '@/components/Button';
import { Project } from '@/types';

const Projects: React.FC = () => {
  // TODO: Replace with actual project data
  const projects: Project[] = [
    {
      id: '1',
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with user authentication, payment processing, and admin dashboard.',
      image: '/api/placeholder/400/250',
      techStack: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      codeUrl: 'https://github.com/elli/ecommerce-platform',
      demoUrl: 'https://ecommerce-demo.elli.dev',
    },
    {
      id: '2',
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates and team collaboration features.',
      image: '/api/placeholder/400/250',
      techStack: ['Vue.js', 'Express', 'PostgreSQL', 'Socket.io'],
      codeUrl: 'https://github.com/elli/task-manager',
      demoUrl: 'https://tasks-demo.elli.dev',
    },
    {
      id: '3',
      title: 'Analytics Dashboard',
      description: 'A comprehensive analytics dashboard with data visualization, reporting, and real-time monitoring.',
      image: '/api/placeholder/400/250',
      techStack: ['React', 'D3.js', 'Python', 'FastAPI'],
      codeUrl: 'https://github.com/elli/analytics-dashboard',
      demoUrl: 'https://analytics-demo.elli.dev',
    },
  ];

  const getProjectIcon = (title: string) => {
    switch (title) {
      case 'E-Commerce Platform':
        return ShoppingCart;
      case 'Task Management App':
        return CheckSquare;
      case 'Analytics Dashboard':
        return BarChart3;
      default:
        return BarChart3;
    }
  };

  return (
    <section id="projects" className="section-padding bg-gray-50">
      <div className="container">
        <h2 className="text-4xl font-bold text-center mb-16 gradient-text">
          Projects
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            const Icon = getProjectIcon(project.title);
            return (
              <Card key={project.id} className="card-hover">
                {/* Project Image */}
                <div className="h-48 bg-gradient-to-br from-primary-indigo to-primary-blue flex items-center justify-center">
                  <Icon size={48} className="text-white/80" />
                </div>
                
                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 text-primary-indigo text-sm font-medium rounded-full border border-gray-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      href={project.codeUrl}
                      className="flex-1"
                    >
                      View Code
                    </Button>
                    <Button
                      variant="primary"
                      href={project.demoUrl}
                      className="flex-1"
                    >
                      Live Demo
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
