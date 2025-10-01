import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { SoftSkills } from "@/components/SoftSkills";
import { Certificates } from "@/components/Certificates";
import { BookTime } from "@/components/BookTime";
import { HelpMe } from "@/components/HelpMe";
import { ClinicalMap } from "@/components/ClinicalMap";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <SoftSkills />
      <Certificates />
      <BookTime />
      <HelpMe />
      <ClinicalMap />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
