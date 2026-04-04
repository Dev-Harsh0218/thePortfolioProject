import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Capabilities } from "@/components/sections/capabilities";
import { AboutPreview } from "@/components/sections/about-preview";
import { Contact } from "@/components/sections/contact";
import { Experience } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { ImpactSnapshot } from "@/components/sections/impact-snapshot";
import { LogosStrip } from "@/components/sections/logos-strip";
import { Process } from "@/components/sections/process";
import { ProjectsPreview } from "@/components/sections/projects-preview";
import { Toolkit } from "@/components/sections/toolkit";

export default function Home() {
  return (
    <div className="pb-20 pt-6">
      <main id="home">
        <Header />
        <Hero />
        <LogosStrip />
        <ImpactSnapshot />
        <Experience />
        <Capabilities />
        <ProjectsPreview />
        <AboutPreview />
        <Process />
        <Toolkit />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
