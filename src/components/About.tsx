import { Card } from "@/components/ui/card";
import { GraduationCap, Heart, Users } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-accent/30">
      <div className="container px-4 mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">About Me</h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-12 rounded-full" />
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="p-8 hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/50">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 mx-auto">
              <GraduationCap className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-center">Academic Excellence</h3>
            <p className="text-muted-foreground text-center leading-relaxed">
              Hello! I'm Ziad Ibraheem Shehab, a first-year medical student at Suez University Faculty of Medicine. 
              I am passionate about healthcare and committed to academic excellence — I achieved a Distinction in my first year 
              and continue to work hard to build a strong foundation for my future medical career.
            </p>
          </Card>
          
          <Card className="p-8 hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/50">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 mx-auto">
              <Heart className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-center">Passion for Medicine</h3>
            <p className="text-muted-foreground text-center leading-relaxed">
              I am particularly interested in Neurosurgery, and I look forward to developing my skills through training, 
              research, and community service. I believe that medicine is not just a profession, but a lifelong journey 
              of learning and giving back to society.
            </p>
          </Card>
          
          <Card className="p-8 hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/50">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 mx-auto">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-center">Community Impact</h3>
            <p className="text-muted-foreground text-center leading-relaxed">
              Outside my studies, I enjoy participating in student activities, attending medical conferences, 
              and volunteering in public health campaigns whenever possible. My goal is to grow into a compassionate 
              and skilled doctor who makes a positive impact on people's lives.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};
