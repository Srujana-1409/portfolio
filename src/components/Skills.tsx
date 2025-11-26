import { Card } from '@/components/ui/card';
import { Code2, Database, Terminal, Users } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: 'Languages',
      skills: ['Python', 'C', 'Java'],
    },
    {
      icon: Terminal,
      title: 'Web Development',
      skills: ['HTML/CSS', 'JavaScript', 'PHP'],
    },
    {
      icon: Database,
      title: 'Tools & Databases',
      skills: ['MySQL', 'Google Colab', 'NetBeans'],
    },
    {
      icon: Users,
      title: 'Soft Skills',
      skills: ['Time Management', 'Communication', 'Leadership'],
    },
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="glass-effect p-8 hover-glow transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gradient-to-br from-primary to-secondary rounded-lg">
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg border border-primary/20 hover:border-primary/40 transition-all duration-300"
                  >
                    <span className="text-sm font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Operating Systems */}
        <Card className="glass-effect p-8 hover-glow transition-all duration-300 max-w-6xl mx-auto mt-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Operating Systems</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Windows', 'Ubuntu'].map((os, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg border border-primary/20 hover:border-primary/40 transition-all duration-300"
              >
                <span className="text-lg font-medium">{os}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Skills;
