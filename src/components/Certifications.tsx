import { Award, Calendar, Building2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import certificatesHero from '@/assets/certifications-hero.jpg';

const Certifications = () => {
  const certifications = [
    {
      title: "hackCSElerate Hackathon",
      organization: "Adichunchanagiri Institute of Technology, Chikkamagaluru",
      description: "24 hours National Level Hackathon event",
      type: "Competition"
    },
    {
      title: "Industrial Immersion - 14.0 Solutions & IOT",
      organization: "Bosch Vocational Centre",
      description: "Skill Development Training in Industrial immersion",
      type: "Training"
    },
    {
      title: "Java for Enterprise: Developing Robust Solutions",
      organization: "PESITM Shivamogga",
      description: "Student Development Program",
      type: "Workshop"
    },
    {
      title: "Unlocking Cyber Security: Basics to Advanced Techniques",
      organization: "PESITM",
      description: "Student Development Program",
      type: "Workshop"
    },
    {
      title: "Programming in Java",
      organization: "NPTEL",
      description: "Online certification course",
      type: "Course"
    },
    {
      title: "Emerging Technologies - AI & Cloud",
      organization: "IBM SkillsBuild, Edunet Foundation & AICTE",
      description: "4-week internship utilizing IBM SkillsBuild & Cloud Platform",
      type: "Internship"
    }
  ];

  return (
    <section id="certifications" className="min-h-screen py-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-secondary/5"></div>
      <div className="absolute inset-0 tech-pattern opacity-20"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="mb-8 flex justify-center">
            <img 
              src={certificatesHero} 
              alt="Certificates and Achievements" 
              className="w-full max-w-4xl rounded-2xl object-cover shadow-2xl border border-border/50"
            />
          </div>
          <div className="inline-flex items-center gap-3 mb-4">
            <Award className="w-10 h-10 text-primary animate-pulse" />
            <h2 className="text-5xl md:text-6xl font-bold gradient-text">
              Certifications & Achievements
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Continuous learning and professional development milestones
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <Card 
              key={index}
              className="glass-effect hover-glow border border-border/50 hover:border-primary/50 transition-all duration-300 group hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                      {cert.title}
                    </CardTitle>
                    <CardDescription className="flex items-center gap-2 text-muted-foreground">
                      <Building2 className="w-4 h-4" />
                      {cert.organization}
                    </CardDescription>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold border border-primary/20">
                    {cert.type}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 flex items-start gap-2">
                  <Calendar className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                  {cert.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
