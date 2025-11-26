import { ArrowUp, Heart, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Srujana-1409', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/srujana-j-708814298', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:srujanajsruja@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="relative py-16 border-t border-border overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-secondary rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center gap-8">
          {/* Back to Top Button */}
          <Button
            onClick={scrollToTop}
            variant="outline"
            size="icon"
            className="rounded-full hover:bg-primary/10 hover:border-primary transition-all duration-300 hover:scale-110 hover-glow w-12 h-12 group"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
          </Button>

          {/* Name */}
          <div className="text-center">
            <h3 className="text-2xl font-bold gradient-text mb-2">Srujana J</h3>
            <p className="text-muted-foreground">Computer Science & Design Enthusiast</p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full border border-border hover:border-primary/50 hover:scale-110 hover-glow transition-all duration-300 group"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>

          {/* Copyright */}
          <div className="text-center space-y-2">
            <p className="text-muted-foreground flex items-center gap-2 justify-center">
              © {new Date().getFullYear()} Srujana J. All Rights Reserved.
            </p>
            <p className="text-sm text-muted-foreground/60 flex items-center gap-2 justify-center">
              Crafted with <Heart className="w-4 h-4 text-primary inline animate-pulse" fill="currentColor" /> for technology and design
            </p>
          </div>
        </div>
      </div>

      {/* Decorative gradient bars */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
    </footer>
  );
};

export default Footer;
