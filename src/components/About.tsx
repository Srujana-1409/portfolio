import { GraduationCap, Briefcase, Award, Target } from 'lucide-react';
import { Card } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-secondary rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block animate-fade-in-up">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-accent to-secondary mx-auto rounded-full"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Bio */}
          <div className="space-y-6">
            <Card className="glass-effect p-8 hover-glow transition-all duration-500 hover:scale-105 border-l-4 border-l-primary group">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-gradient-to-br from-primary to-accent rounded-xl group-hover:scale-110 transition-transform">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold gradient-text">My Story</h3>
              </div>
              <p className="text-foreground/90 leading-relaxed">
                A third-year B.E. student at PES Institute of Technology & Management, Shivamogga, 
                specializing in the potent combination of Computer Science and Design. My focus is on 
                developing technically robust and user-centric solutions. I bring a blend of strong 
                academic fundamentals and creative problem-solving, making me prepared to contribute 
                immediate value to projects at the intersection of technology and user experience.
              </p>
            </Card>

            {/* Quick stats */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="glass-effect p-4 text-center hover-glow hover:scale-110 transition-all duration-300 group">
                <Award className="w-8 h-8 mx-auto mb-2 text-primary group-hover:scale-110 transition-transform" />
                <div className="text-2xl font-bold gradient-text">B.E.</div>
                <div className="text-sm text-muted-foreground">Degree</div>
              </Card>
              <Card className="glass-effect p-4 text-center hover-glow hover:scale-110 transition-all duration-300 group">
                <GraduationCap className="w-8 h-8 mx-auto mb-2 text-secondary group-hover:scale-110 transition-transform" />
                <div className="text-2xl font-bold gradient-text">3rd Year</div>
                <div className="text-sm text-muted-foreground">Student</div>
              </Card>
            </div>
          </div>

          {/* Education & Experience Timeline */}
          <div className="space-y-6">
            <Card className="glass-effect p-8 hover-glow transition-all duration-500 hover:scale-105 relative overflow-hidden group">
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-full group-hover:scale-150 transition-transform duration-500"></div>
              
              <div className="flex items-start gap-4 relative z-10">
                <div className="p-4 bg-gradient-to-br from-primary via-accent to-primary rounded-xl shadow-lg group-hover:rotate-6 transition-transform duration-300">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-2xl font-bold">Education</h3>
                    <div className="flex-1 h-px bg-gradient-to-r from-primary/50 to-transparent"></div>
                  </div>
                  <p className="text-lg text-primary font-semibold mb-1">B.E. in Computer Science and Design</p>
                  <p className="text-foreground/80 mb-2">
                    PES Institute of Technology and Management, Shivamogga
                  </p>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full border border-primary/20">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-primary">2023 – 2027</span>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="glass-effect p-8 hover-glow transition-all duration-500 hover:scale-105 relative overflow-hidden group">
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-secondary/20 to-transparent rounded-bl-full group-hover:scale-150 transition-transform duration-500"></div>
              
              <div className="flex items-start gap-4 relative z-10">
                <div className="p-4 bg-gradient-to-br from-secondary via-accent to-secondary rounded-xl shadow-lg group-hover:rotate-6 transition-transform duration-300">
                  <Briefcase className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-2xl font-bold">Experience</h3>
                    <div className="flex-1 h-px bg-gradient-to-r from-secondary/50 to-transparent"></div>
                  </div>
                  <p className="text-lg text-secondary font-semibold mb-1">4-week Internship</p>
                  <p className="text-foreground/80 mb-2">
                    Edunet Foundation & AICTE Collaboration
                  </p>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary/10 rounded-full border border-secondary/20">
                    <Award className="w-4 h-4 text-secondary" />
                    <span className="text-sm font-medium text-secondary">
                      IBM Cloud Platform – AI & Cloud
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
