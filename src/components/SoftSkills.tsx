import { Card } from "@/components/ui/card";
import { Brain, Target, Lightbulb, Clock, Users2, BookOpen, Smile, TrendingUp } from "lucide-react";

const softSkills = [
  {
    icon: Brain,
    title: "Critical Thinking",
    description: "Analytical approach to medical case studies and diagnosis",
    level: 90
  },
  {
    icon: Target,
    title: "Problem Solving",
    description: "Efficient solutions in clinical scenarios and academic challenges",
    level: 85
  },
  {
    icon: Lightbulb,
    title: "Creativity",
    description: "Innovative thinking in medical research and patient care approaches",
    level: 80
  },
  {
    icon: Clock,
    title: "Time Management",
    description: "Balancing studies, training, and volunteering effectively",
    level: 88
  },
  {
    icon: Users2,
    title: "Leadership",
    description: "Leading student groups and medical volunteer initiatives",
    level: 82
  },
  {
    icon: BookOpen,
    title: "Adaptability",
    description: "Quick learning and adjustment to new medical concepts",
    level: 92
  },
  {
    icon: Smile,
    title: "Empathy",
    description: "Understanding and compassion in patient interactions",
    level: 95
  },
  {
    icon: TrendingUp,
    title: "Growth Mindset",
    description: "Continuous improvement and learning from experiences",
    level: 90
  }
];

export const SoftSkills = () => {
  return (
    <section id="soft-skills" className="py-20">
      <div className="container px-4 mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Soft Skills</h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-6 rounded-full" />
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Essential interpersonal and cognitive abilities for medical excellence
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {softSkills.map((skill, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50"
              style={{
                animationDelay: `${index * 50}ms`
              }}
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center mb-4 mx-auto shadow-lg">
                <skill.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-center">{skill.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 text-center leading-relaxed">
                {skill.description}
              </p>
              
              {/* Progress bar */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">Proficiency</span>
                  <span className="font-semibold text-primary">{skill.level}%</span>
                </div>
                <div className="h-2 bg-accent rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-primary to-primary/80 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
