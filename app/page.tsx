import { Header } from "@/components/layout/header";
import { AboutPreview } from "@/components/sections/about-preview";
import { Contact } from "@/components/sections/contact";
import { Hero } from "@/components/sections/hero";
import { ProjectsPreview } from "@/components/sections/projects-preview";

export default function Home() {
  return (
      <main>
        <Header/>
        <Hero/>
        <AboutPreview/>
        <ProjectsPreview/>
        <Contact/>
      </main>
  );
}
