import { ArrowDown, Sparkles, Code2, Palette, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import profilePicture from '@/assets/profile-picture.jpg';
import Contact from '@/components/Contact';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5"></div>
      
      {/* Tech grid pattern */}
      <div className="absolute inset-0 tech-pattern opacity-40"></div>

      {/* Floating orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Decorative geometric elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-20 right-20 w-32 h-32 border-2 border-primary rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 border-2 border-secondary rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-16 h-16 border-2 border-accent rotate-12 animate-float"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col items-center text-center gap-10">
          {/* Profile Picture with enhanced styling */}
          <div className="relative group animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            {/* Glow rings */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary via-secondary to-accent rounded-full opacity-75 blur-2xl group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute -inset-2 bg-gradient-to-r from-primary to-secondary rounded-full animate-spin-slow opacity-50"></div>
            
            {/* Profile image */}
            <div className="relative">
              <img
                src={profilePicture}
                alt="Srujana J"
                className="relative w-48 h-48 rounded-full object-cover border-4 border-background shadow-2xl group-hover:scale-105 transition-transform duration-500"
              />
              {/* Sparkle indicator */}
              <div className="absolute -top-2 -right-2 bg-gradient-to-r from-primary to-secondary p-2 rounded-full animate-bounce">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-6 max-w-4xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {/* Name with animated underline */}
            <div className="relative inline-block">
              <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-4 hover:scale-105 transition-transform duration-300">
                Srujana J
              </h1>
              <div className="absolute -bottom-2 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse"></div>
            </div>

            {/* Subtitle with icons */}
            <div className="flex items-center justify-center gap-3 flex-wrap">
              <Code2 className="w-6 h-6 text-primary animate-pulse" />
              <p className="text-2xl md:text-3xl gradient-text font-bold animate-gradient">
                Software Engineer
              </p>
              <Palette className="w-6 h-6 text-secondary animate-pulse" style={{ animationDelay: '0.5s' }} />
            </div>

            {/* Description in card */}
            <div className="glass-effect rounded-2xl p-6 max-w-2xl mx-auto hover-glow group hover:scale-105 transition-all duration-300">
              <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
                Innovating through Technology and Creativity
              </p>
            </div>

            {/* Stats or highlights */}
            <div className="flex flex-wrap justify-center gap-6 mt-8">
              <div className="glass-effect rounded-xl px-6 py-3 hover-glow hover:scale-110 transition-all duration-300">
                <div className="text-2xl font-bold gradient-text">2027</div>
                <div className="text-sm text-muted-foreground">Graduation</div>
              </div>
              <div className="glass-effect rounded-xl px-6 py-3 hover-glow hover:scale-110 transition-all duration-300">
                <div className="text-2xl font-bold gradient-text">CS & Design</div>
                <div className="text-sm text-muted-foreground">Specialization</div>
              </div>
              <div className="glass-effect rounded-xl px-6 py-3 hover-glow hover:scale-110 transition-all duration-300">
                <div className="text-2xl font-bold gradient-text">3+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
            </div>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center mt-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <Button
              size="lg"
              onClick={() => navigate('/projects')}
              className="bg-gradient-to-r from-primary via-accent to-secondary hover:scale-110 transition-all duration-300 shadow-xl hover-glow text-lg px-8 py-6 group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                <span>Explore My Projects</span>
                <ChevronDown className="w-5 h-5 animate-bounce group-hover:translate-y-1 transition-transform" />
              </span>
              {/* Animated shimmer effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            </Button>
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-primary/50 hover:bg-primary/10 hover:border-primary hover:scale-110 transition-all duration-300 text-lg px-8 py-6"
                >
                  Get in Touch
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-3xl font-bold gradient-text">Get in Touch</DialogTitle>
                </DialogHeader>
                <Contact />
              </DialogContent>
            </Dialog>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
