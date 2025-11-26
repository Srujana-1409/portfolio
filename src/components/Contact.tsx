import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, Linkedin, Github, Send, MapPin, MessageSquare } from 'lucide-react';
import { toast } from 'sonner';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'srujanajsruja@gmail.com',
      href: 'mailto:srujanajsruja@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 8762185542',
      href: 'tel:+918762185542',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'srujana-j',
      href: 'https://linkedin.com/in/srujana-j-708814298',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'Srujana-1409',
      href: 'https://github.com/Srujana-1409',
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_t6q1q1r',
        'template_zufmn6w',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        '8rgZHWAqoq89sX0xu'
      );
      
      toast.success('Message sent successfully! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      toast.error('Failed to send message. Please try again or contact me directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
      {/* Contact Information */}
      <div className="space-y-6">
            <Card className="glass-effect p-8 hover-glow transition-all duration-500 border-l-4 border-l-primary">
              <div className="flex items-center gap-3 mb-6">
                <MessageSquare className="w-7 h-7 text-primary" />
                <h3 className="text-2xl font-bold gradient-text">Let's Connect</h3>
              </div>
              <p className="text-foreground/80 mb-8 leading-relaxed">
                Feel free to reach out through any of these channels. I'm always open to discussing new opportunities and collaborations.
              </p>
              <div className="space-y-3">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    {...(info.label !== 'Email' && info.label !== 'Phone' && { target: '_blank', rel: 'noopener noreferrer' })}
                    onClick={(e) => {
                      if (info.label === 'Email' || info.label === 'Phone') {
                        e.preventDefault();
                        const url = info.href;
                        const opened = window.open(url, '_self');
                        if (!opened) {
                          try { window.location.href = url; } catch (err) { console.error(err); }
                        }
                        if (info.label === 'Email') {
                          navigator.clipboard?.writeText('srujanajsruja@gmail.com')
                            .then(() => toast.success('Email copied. Open your mail app to compose.'))
                            .catch(() => toast.message('Open your mail app and compose to srujanajsruja@gmail.com'));
                        }
                      }
                    }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-primary/5 to-secondary/5 hover:from-primary/10 hover:to-secondary/10 border border-border hover:border-primary/30 transition-all duration-300 group"
                  >
                    <div className="p-3 bg-gradient-to-br from-primary to-secondary rounded-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                      <info.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">{info.label}</p>
                      <p className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                        {info.value}
                      </p>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <Send className="w-4 h-4 text-primary" />
                    </div>
                  </a>
                ))}
              </div>

              {/* Location badge */}
              <div className="mt-6 p-4 bg-gradient-to-r from-accent/10 to-primary/10 rounded-xl border border-primary/20">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Location</p>
                    <p className="font-medium">Shivamogga, Karnataka</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="glass-effect p-8 hover-glow transition-all duration-500 relative overflow-hidden">
            {/* Decorative element */}
            <div className="absolute -top-20 -right-20 w-48 h-48 bg-gradient-to-br from-primary/20 to-transparent rounded-full"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-gradient-to-br from-primary to-secondary rounded-lg">
                  <Send className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Send a Message</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="relative group">
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-background/50 border-border focus:border-primary hover:border-primary/50 transition-colors h-12 group-hover:bg-background/70"
                  />
                </div>
                <div className="relative group">
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-background/50 border-border focus:border-primary hover:border-primary/50 transition-colors h-12 group-hover:bg-background/70"
                  />
                </div>
                <div className="relative group">
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="bg-background/50 border-border focus:border-primary hover:border-primary/50 transition-colors resize-none group-hover:bg-background/70"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-primary via-accent to-secondary hover:scale-105 transition-all duration-300 shadow-lg hover-glow h-12 text-base font-semibold group disabled:opacity-50 disabled:cursor-not-allowed"
                  size="lg"
                >
                  <Send className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>
          </Card>
        </div>
  );
};

export default Contact;
