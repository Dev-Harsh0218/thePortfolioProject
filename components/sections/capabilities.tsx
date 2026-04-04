import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/ui/reveal";

const capabilities = [
  {
    label: "Frontend",
    title: "Interfaces that feel intentional",
    description:
      "Building polished, responsive experiences with strong hierarchy, smooth interaction, and maintainable components.",
  },
  {
    label: "Backend",
    title: "Reliable product plumbing",
    description:
      "Handling APIs, application logic, integrations, and structure cleanly enough to support real-world growth.",
  },
  {
    label: "Product",
    title: "Execution with context",
    description:
      "Thinking about why a feature exists, how success is measured, and what details shape trust for users.",
  },
];

export function Capabilities() {
  return (
    <Section id="capabilities">
      <Reveal>
        <div className="mb-7 grid items-end gap-7 min-[981px]:grid-cols-[minmax(0,1fr)_minmax(280px,0.78fr)]">
          <div>
            <p
              className="mb-[18px] text-[0.78rem] uppercase tracking-[0.03em] text-[#084c38]"
              style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
            >
              Capabilities
            </p>
            <h2 className="max-w-[14ch] text-[clamp(2rem,4.4vw,3.6rem)] font-semibold leading-[1] tracking-[-0.04em] text-[#121417]">
              I can contribute across the product surface.
            </h2>
          </div>
          <p className="max-w-[42ch] justify-self-start text-[1.02rem] leading-[1.7] text-[#5d6774] min-[981px]:justify-self-end">
            My strongest work usually happens at the intersection of engineering,
            interface quality, and product thinking.
          </p>
        </div>

        <div className="grid gap-[14px]">
          {capabilities.map((item) => (
            <article
              key={item.label}
              className="grid items-center gap-[18px] rounded-[22px] border border-black/[0.08] bg-white/[0.76] px-6 py-[22px] shadow-[0_24px_60px_rgba(18,20,23,0.1)] backdrop-blur-[16px] transition-[transform,box-shadow,border-color] duration-[220ms] hover:-translate-y-1 hover:border-[rgba(11,110,79,0.18)] hover:shadow-[0_28px_64px_rgba(18,20,23,0.12)] max-[980px]:grid-cols-1 min-[981px]:grid-cols-[180px_1fr]"
            >
              <div>
                <p
                  className="text-[0.78rem] uppercase tracking-[0.03em] text-[#084c38]"
                  style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
                >
                  {item.label}
                </p>
              </div>
              <div>
                <h3 className="mb-3 text-[1.35rem] leading-[1.15] text-[#121417]">
                  {item.title}
                </h3>
                <p className="text-[1.02rem] leading-[1.7] text-[#5d6774]">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
