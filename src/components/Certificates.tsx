import { Card } from "@/components/ui/card";
import { Award, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import certificate1 from "@/assets/certificate-1.jpg";
import certificate2 from "@/assets/certificate-2.jpg";
import certificate3 from "@/assets/certificate-3.jpg";

const certificates = [
  {
    title: "First Year Distinction",
    issuer: "Suez University Faculty of Medicine",
    date: "2024",
    image: certificate1,
    description: "Achieved Distinction in First Year Medical Studies"
  },
  {
    title: "Medical Research Training",
    issuer: "Research Institute",
    date: "2024",
    image: certificate2,
    description: "Completed basic medical research methodology course"
  },
  {
    title: "First Aid & Emergency Response",
    issuer: "Red Crescent Society",
    date: "2024",
    image: certificate3,
    description: "Certified in basic first aid and emergency medical response"
  }
];

export const Certificates = () => {
  return (
    <section id="certificates" className="py-20 bg-accent/30">
      <div className="container px-4 mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Certificates & Achievements</h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-6 rounded-full" />
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Recognition of my academic excellence and professional development
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {certificates.map((cert, index) => (
            <Card 
              key={index}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="relative h-48 overflow-hidden bg-accent">
                <img 
                  src={cert.image} 
                  alt={cert.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-primary/90 flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary-foreground" />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
                <p className="text-sm text-primary font-medium mb-2">{cert.issuer}</p>
                <p className="text-sm text-muted-foreground mb-4">{cert.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{cert.date}</span>
                  <Button variant="ghost" size="sm" className="gap-2">
                    View <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
