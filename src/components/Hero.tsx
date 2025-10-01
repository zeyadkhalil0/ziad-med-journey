import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'var(--gradient-hero)',
        }}
      />
      
      <div className="container px-4 mx-auto text-center relative z-10">
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <p className="text-lg text-muted-foreground mb-4">Hi, I'm</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Dr. Ziad Shehab
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto leading-relaxed mb-8">
            I'm Ziad Ibraheem Shehab, a first-year medical student at <span className="font-semibold text-primary">Suez University Faculty of Medicine</span>. 
            I achieved a Distinction in my first year and aim to specialize in Neurosurgery. 
            I am passionate about developing my knowledge and skills through training, conferences, and volunteering.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              onClick={() => scrollToSection('about')}
              className="shadow-lg hover:shadow-xl transition-shadow"
            >
              Learn More About Me
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-primary" />
        </div>
      </div>
    </section>
  );
};
