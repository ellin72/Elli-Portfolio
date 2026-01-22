import React from 'react';
import { Monitor, Server, Database, Wrench } from 'lucide-react';
import { Skill } from '@/types';

const Skills: React.FC = () => {
  // TODO: Replace with actual skill data and levels
  const skillsByCategory = {
    frontend: [
      { name: 'React', level: 90, category: 'frontend' as const },
      { name: 'Vue.js', level: 85, category: 'frontend' as const },
      { name: 'TypeScript', level: 88, category: 'frontend' as const },
      { name: 'Tailwind CSS', level: 92, category: 'frontend' as const },
    ],
    backend: [
      { name: 'Node.js', level: 87, category: 'backend' as const },
      { name: 'Express.js', level: 85, category: 'backend' as const },
      { name: 'Python', level: 82, category: 'backend' as const },
      { name: 'FastAPI', level: 78, category: 'backend' as const },
    ],
    database: [
      { name: 'PostgreSQL', level: 85, category: 'database' as const },
      { name: 'MongoDB', level: 83, category: 'database' as const },
      { name: 'Redis', level: 75, category: 'database' as const },
      { name: 'MySQL', level: 80, category: 'database' as const },
    ],
    tools: [
      { name: 'Git', level: 90, category: 'tools' as const },
      { name: 'Docker', level: 82, category: 'tools' as const },
      { name: 'AWS', level: 78, category: 'tools' as const },
      { name: 'CI/CD', level: 85, category: 'tools' as const },
    ],
  };

  const categoryInfo = [
    { key: 'frontend', title: 'Frontend', icon: Monitor },
    { key: 'backend', title: 'Backend', icon: Server },
    { key: 'database', title: 'Database', icon: Database },
    { key: 'tools', title: 'Tools', icon: Wrench },
  ];

  const SkillBar: React.FC<{ skill: Skill }> = ({ skill }) => (
    <div className="mb-4">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-gray-900">{skill.name}</span>
        <span className="text-sm text-gray-500">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-gradient-to-r from-primary-indigo to-primary-blue h-2 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${skill.level}%` }}
        />
      </div>
    </div>
  );

  return (
    <section id="skills" className="section-padding bg-white">
      <div className="container">
        <h2 className="text-4xl font-bold text-center mb-16 gradient-text">
          Skills
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categoryInfo.map((category) => {
            const Icon = category.icon;
            const skills = skillsByCategory[category.key as keyof typeof skillsByCategory];
            
            return (
              <div
                key={category.key}
                className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <Icon className="w-6 h-6 text-primary-indigo mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-1">
                  {skills.map((skill) => (
                    <SkillBar key={skill.name} skill={skill} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
