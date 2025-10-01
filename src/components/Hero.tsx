import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroImage from "@/assets/doctor-hero.png";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Dr. Ziad Shehab"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000 text-left">
            <p className="text-lg text-muted-foreground mb-4">Hi, I'm</p>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Dr. Ziad Shehab
            </h1>
            <p className="text-xl md:text-2xl text-foreground/90 leading-relaxed mb-8">
              I'm Ziad Ibraheem Shehab, a first-year medical student at <span className="font-semibold text-primary">Suez University Faculty of Medicine</span>. 
              I achieved a Distinction in my first year and aim to specialize in Neurosurgery. 
              I am passionate about developing my knowledge and skills through training, conferences, and volunteering.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
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
          
          {/* Image */}
          <div className="relative animate-in fade-in slide-in-from-right-4 duration-1000 delay-300 hidden lg:block">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl rotate-6" />
              <img 
                src={heroImage}
                alt="Dr. Ziad Shehab"
                className="relative rounded-3xl shadow-2xl object-cover w-full h-full border-4 border-background"
              />
            </div>
          </div>
        </div>
        
        <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer">
          <ArrowDown className="w-6 h-6 text-primary" 
          onClick={() => scrollToSection('about')}/>
        </div>
      </div>
    </section>
  );
};
