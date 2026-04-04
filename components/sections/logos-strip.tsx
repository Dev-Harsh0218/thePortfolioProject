import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/ui/reveal";

const workAreas = [
  "UI Engineering",
  "Design Systems",
  "Full-stack Products",
  "Performance",
  "Developer Experience",
];

export function LogosStrip() {
  return (
    <section aria-label="areas of work" className="pb-8 max-[720px]:pb-5">
      <Container>
        <Reveal>
          <div className="grid gap-3 max-[980px]:grid-cols-1 min-[981px]:grid-cols-5">
            {workAreas.map((area) => (
              <span
                key={area}
                className="rounded-full border border-black/[0.08] bg-white/[0.52] px-4 py-[18px] text-center text-[0.92rem] text-[#5d6774]"
              >
                {area}
              </span>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
