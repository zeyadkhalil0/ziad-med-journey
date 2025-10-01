import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, BookOpen, Users, Stethoscope } from "lucide-react";

const helpAreas = [
  {
    icon: GraduationCap,
    title: "Medical Tutoring",
    description: "Get help with medical subjects and exam preparation",
    action: "Request Tutoring"
  },
  {
    icon: BookOpen,
    title: "Study Materials",
    description: "Access shared notes and study resources",
    action: "View Materials"
  },
  {
    icon: Users,
    title: "Study Groups",
    description: "Join collaborative learning sessions",
    action: "Join Group"
  },
  {
    icon: Stethoscope,
    title: "Clinical Guidance",
    description: "Guidance on clinical rotations and practice",
    action: "Get Guidance"
  }
];

export const HelpMe = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="help" className="py-20">
      <div className="container px-4 mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">How I Can Help</h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-6 rounded-full" />
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          I'm passionate about helping fellow students succeed in their medical journey
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
          {helpAreas.map((area, index) => (
            <Card 
              key={index}
              className="p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center mb-6 mx-auto shadow-lg">
                <area.icon className="w-10 h-10 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{area.title}</h3>
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                {area.description}
              </p>
              <Button 
                variant="outline" 
                size="sm"
                onClick={scrollToContact}
                className="hover:bg-primary hover:text-primary-foreground"
              >
                {area.action}
              </Button>
            </Card>
          ))}
        </div>

        <Card className="max-w-3xl mx-auto p-8 bg-gradient-to-r from-primary/5 to-primary/10 border-2 border-primary/20">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Need Assistance?</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Whether you need help with coursework, study tips, or just want to discuss medical topics, 
              I'm here to support you. Feel free to reach out anytime!
            </p>
            <Button size="lg" onClick={scrollToContact} className="shadow-lg">
              Get in Touch
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};
