import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/ui/reveal";

const insights = [
  {
    title: "Elegant interfaces",
    description:
      "Thoughtful spacing, hierarchy, motion, and interaction details.",
  },
  {
    title: "Strong engineering",
    description:
      "Clean systems, reliable components, and performance that scales.",
  },
  {
    title: "Clear communication",
    description:
      "Explaining tradeoffs, documenting intent, and working well with teams.",
  },
];

export function AboutPreview() {
  return (
    <Section id="about">
      <Reveal>
        <div className="mb-7 grid items-end gap-7 min-[981px]:grid-cols-[minmax(0,1fr)_minmax(280px,0.78fr)]">
          <div>
            <p
              className="mb-[18px] text-[0.78rem] uppercase tracking-[0.03em] text-[#084c38]"
              style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
            >
              About Me
            </p>
            <h2 className="max-w-[14ch] text-[clamp(2rem,4.4vw,3.6rem)] font-semibold leading-[1] tracking-[-0.04em] text-[#121417]">
              I care about product quality at every layer.
            </h2>
          </div>
          <p className="max-w-[42ch] justify-self-start text-[1.02rem] leading-[1.7] text-[#5d6774] min-[981px]:justify-self-end">
            I enjoy the kind of engineering work where craft matters. Not just
            shipping features, but making them understandable, fast, and genuinely
            pleasant to use.
          </p>
        </div>

        <div className="grid gap-[18px] min-[981px]:grid-cols-3">
          {insights.map((item) => (
            <article
              key={item.title}
              className="border-t border-black/[0.08] px-0 py-7 transition-transform duration-[220ms] hover:-translate-y-1"
            >
              <h3 className="mb-3 text-[1.35rem] leading-[1.15] text-[#121417]">
                {item.title}
              </h3>
              <p className="max-w-[58ch] text-[1.02rem] leading-[1.7] text-[#5d6774]">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
