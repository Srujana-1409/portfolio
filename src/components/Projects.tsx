import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Sparkles, Code, Layers } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'StatoSoft',
      description: 'A statistical analysis platform developed to simplify data computation and visualization for users.',
      technologies: ['Python', 'Data Analysis', 'Visualization'],
      gradient: 'from-blue-500/20 to-cyan-500/20',
      icon: Code,
      accentColor: 'text-blue-400',
      githubUrl: 'https://github.com/Srujana-1409/StatoSoft',
    },
    {
      title: 'Math3D Visualizer',
      description: 'A 3D visualization tool for mathematical functions using OpenGL and GLUT, enabling interactive learning through real-time graphics.',
      technologies: ['OpenGL', 'GLUT', 'C++', '3D Graphics'],
      gradient: 'from-purple-500/20 to-pink-500/20',
      icon: Layers,
      accentColor: 'text-purple-400',
      githubUrl: 'https://github.com/Srujana-1409/math3d-visualizer',
    },
    {
      title: 'StayEase',
      description: 'A user-friendly accommodation management system focused on seamless booking and administration experience.',
      technologies: ['PHP', 'MySQL', 'HTML/CSS', 'JavaScript'],
      gradient: 'from-green-500/20 to-emerald-500/20',
      icon: Sparkles,
      accentColor: 'text-green-400',
      githubUrl: 'https://github.com/Srujana-1409/StayEase',
    },
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-40 left-10 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-accent to-secondary mx-auto rounded-full"></div>
          </div>
          <p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">
            Showcasing innovative solutions at the intersection of technology and design
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card
                className="glass-effect p-6 hover-glow transition-all duration-500 hover:-translate-y-2 group cursor-pointer relative overflow-hidden border-2 border-transparent hover:border-primary/20"
              >
              {/* Animated background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              {/* Decorative corner */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-full group-hover:scale-150 transition-transform duration-500"></div>

              <div className="relative z-10">
                {/* Header with icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 bg-gradient-to-br ${project.gradient} rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                    <project.icon className={`w-6 h-6 ${project.accentColor}`} />
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ExternalLink className="w-5 h-5 text-primary" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-3 group-hover:gradient-text transition-all duration-300">
                  {project.title}
                </h3>
                
                <p className="text-foreground/80 mb-6 leading-relaxed min-h-[80px]">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors duration-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-primary font-medium pt-4 border-t border-border/50 group-hover:border-primary/30 transition-colors duration-300">
                  <span className="text-sm">View Project</span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
