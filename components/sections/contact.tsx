import { Container } from "@/components/layout/contianer";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";

export function Contact() {
  return (
    <section id="contact" className="py-28 md:py-36">
      <Container>
        <div className="rounded-[2rem] border border-black/10 bg-white/70 p-8 backdrop-blur-sm md:p-12">
          <SectionHeading
            eyebrow="Contact"
            title="Let’s build something thoughtful, useful, and well-crafted."
            description="I’m open to internships, freelance projects, and full-time opportunities where engineering quality and product quality both matter."
          />

          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="mailto:you@example.com">Email me</Button>
            <Button href="https://github.com" variant="secondary">
              GitHub
            </Button>
            <Button href="https://linkedin.com" variant="secondary">
              LinkedIn
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

