import { Navigation } from "@/components/Portfolio/Navigation";
import { HeroSection } from "@/components/Portfolio/HeroSection";
import { SkillsSection } from "@/components/Portfolio/SkillsSection";
import { ProjectsSection } from "@/components/Portfolio/ProjectsSection";
import { ContactSection } from "@/components/Portfolio/ContactSection";
import { Footer } from "@/components/Portfolio/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        <section id="home">
          <HeroSection />
        </section>
        
        <section id="skills">
          <SkillsSection />
        </section>
        
        <section id="projects">
          <ProjectsSection />
        </section>
        
        <section id="contact">
          <ContactSection />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
