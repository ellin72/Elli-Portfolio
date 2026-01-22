import React from 'react';
import { User } from 'lucide-react';
import Button from '@/components/Button';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-primary-indigo to-primary-blue flex items-center pt-20">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">
              ELLI N SHITUNA
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-medium mb-4 opacity-90 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Full Stack Developer | Building Scalable Web Apps
            </h2>
            <p className="text-lg md:text-xl mb-8 opacity-80 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              Turning ideas into functional, clean, and modern applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <Button variant="primary" href="#projects">
                View My Work
              </Button>
              <Button variant="secondary" href="#contact">
                Contact Me
              </Button>
            </div>
          </div>

          {/* Right Content - Avatar/Illustration */}
          <div className="flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 bg-white/10 rounded-full flex items-center justify-center border-4 border-white/20 animate-float">
              <User size={120} className="text-white/80" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
