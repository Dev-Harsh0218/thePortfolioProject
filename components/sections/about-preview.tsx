import { Container } from "@/components/layout/contianer";
import { SectionHeading } from "@/components/ui/section-heading";

export function AboutPreview() {
  return (
    <section id="about" className="py-28 md:py-36">
      <Container>
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <SectionHeading
            eyebrow="About"
            title="I care about product quality at every layer."
          />

          <div className="space-y-6 text-base leading-8 text-neutral-600 md:text-lg">
            <p>
              I enjoy building software that feels clear, fast, and intentional.
              Not just features that work, but experiences that feel well-made.
            </p>
            <p>
              My interests sit at the intersection of frontend engineering,
              product thinking, interface systems, and the details that shape how
              users perceive quality.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

