import { Card } from "@/components/ui/card";
import { Users, Search, MessageCircle, Heart } from "lucide-react";

const skills = [
  {
    icon: Users,
    title: "Teamwork",
    description: "Effective collaboration with peers and staff in clinical and academic settings."
  },
  {
    icon: Search,
    title: "Research",
    description: "Strong interest in basic medical research and evidence-based medicine."
  },
  {
    icon: MessageCircle,
    title: "Communication",
    description: "Clear and empathetic communication with patients and healthcare team."
  },
  {
    icon: Heart,
    title: "First Aid",
    description: "Basic knowledge of first aid procedures and emergency response."
  }
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container px-4 mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">My Skills</h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-12 rounded-full" />
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <Card 
              key={index}
              className="p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center mb-6 mx-auto shadow-lg">
                <skill.icon className="w-10 h-10 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{skill.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{skill.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
