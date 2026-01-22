import React from 'react';
import { 
  Code2, 
  Database, 
  Braces
} from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    { name: 'React', icon: Braces, color: 'text-blue-400' },
    { name: 'Node.js', icon: Database, color: 'text-green-500' },
    { name: 'TypeScript', icon: Code2, color: 'text-blue-600' },
    { name: 'PostgreSQL', icon: Database, color: 'text-indigo-500' },
    { name: 'Tailwind CSS', icon: Code2, color: 'text-cyan-500' },
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container">
        <h2 className="text-4xl font-bold text-center mb-16 gradient-text">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Bio Text */}
          <div>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              I'm a passionate full stack developer with expertise in building scalable web applications from concept to deployment. I love creating clean, efficient code and turning complex problems into simple, beautiful solutions.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              With a strong foundation in both frontend and backend technologies, I bring ideas to life through thoughtful design and robust architecture. I'm constantly learning and exploring new technologies to stay at the forefront of web development.
            </p>
          </div>

          {/* Skills Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={skill.name}
                  className="bg-gray-50 p-6 rounded-xl text-center border border-gray-200 hover:shadow-md hover:-translate-y-1 transition-all duration-300 hover:border-primary-indigo"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Icon className={`w-8 h-8 mx-auto mb-3 ${skill.color}`} />
                  <span className="text-sm font-medium text-gray-900">{skill.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
