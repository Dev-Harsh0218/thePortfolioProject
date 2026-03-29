import { Container } from "@/components/layout/contianer";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";

export function ProjectsPreview() {
  return (
    <section id="projects" className="py-28 md:py-36">
      <Container>
        <SectionHeading
          eyebrow="Projects"
          title="Selected work that reflects how I think and build."
          description="A few featured projects that highlight product thinking, engineering quality, and visual polish."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          <Card>
            <p className="text-sm text-neutral-500">Flagship</p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-neutral-950">
              Astrounaut Portfolio Platform
            </h3>
            <p className="mt-4 text-sm leading-7 text-neutral-600">
              A premium personal portfolio system built to communicate technical
              depth with stronger visual storytelling.
            </p>
          </Card>

          <Card>
            <p className="text-sm text-neutral-500">Product</p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-neutral-950">
              Full-stack Product Build
            </h3>
            <p className="mt-4 text-sm leading-7 text-neutral-600">
              A product-focused app showing end-to-end ownership across interface,
              logic, and structure.
            </p>
          </Card>

          <Card>
            <p className="text-sm text-neutral-500">System</p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-neutral-950">
              Performance Engineering Work
            </h3>
            <p className="mt-4 text-sm leading-7 text-neutral-600">
              Technical work focused on improving speed, reliability, or developer
              workflow quality.
            </p>
          </Card>
        </div>
      </Container>
    </section>
  );
}

