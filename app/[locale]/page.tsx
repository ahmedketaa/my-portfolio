import { Navbar } from "@/components/layout/navbar";
import { About } from "@/components/sections/about";
import { ContactSection } from "@/components/sections/contact-section";
import { ExperienceSection } from "@/components/sections/experience";
import { Footer } from "@/components/sections/footer";
import { Hero } from "@/components/sections/hero";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ProofSection } from "@/components/sections/proof-section";
import { Contact } from "lucide-react";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero
          socialLinks={{
            github: "https://github.com/ahmedketaa",
            linkedin: "https://www.linkedin.com/in/ahmedmo220/",
            email: "andf.750@gmail.com"
          }}
        />
        <About />
        <ProofSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection
          socialLinks={{
             github: "https://github.com/ahmedketaa",
            linkedin: "https://www.linkedin.com/in/ahmedmo220/",
            email: "andf.750@gmail.com"
          }}
          location="Abu Dhabi, UAE"
        />      
        <Footer 
        socialLinks={{
             github: "https://github.com/ahmedketaa",
            linkedin: "https://www.linkedin.com/in/ahmedmo220/",
            email: "andf.750@gmail.com"
          }}
        />
        </main>
    </>
  );
}