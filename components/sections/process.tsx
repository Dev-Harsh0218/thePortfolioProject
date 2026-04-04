import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/ui/reveal";

const processSteps = [
  {
    step: "01",
    title: "Clarify the problem",
    description:
      "Start with what the user needs, what matters most, and what success should feel like.",
  },
  {
    step: "02",
    title: "Design the structure",
    description:
      "Choose a system that is easy to build on, not just something that works once.",
  },
  {
    step: "03",
    title: "Polish the edges",
    description:
      "Use spacing, animation, feedback, and performance work to make the result feel complete.",
  },
];

export function Process() {
  return (
    <Section id="process">
      <Reveal>
        <div className="mb-7 grid items-end gap-7 min-[981px]:grid-cols-[minmax(0,1fr)_minmax(280px,0.78fr)]">
          <div>
            <p
              className="mb-[18px] text-[0.78rem] uppercase tracking-[0.03em] text-[#084c38]"
              style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
            >
              How I Work
            </p>
            <h2 className="max-w-[14ch] text-[clamp(2rem,4.4vw,3.6rem)] font-semibold leading-[1] tracking-[-0.04em] text-[#121417]">
              My process is simple: understand deeply, build carefully, refine hard.
            </h2>
          </div>
          <p className="max-w-[42ch] justify-self-start text-[1.02rem] leading-[1.7] text-[#5d6774] min-[981px]:justify-self-end">
            I like working in a way that keeps both shipping speed and product
            quality in view, instead of treating them like opposites.
          </p>
        </div>

        <div className="relative grid gap-[18px] min-[981px]:grid-cols-3 min-[981px]:before:absolute min-[981px]:before:left-[10%] min-[981px]:before:right-[10%] min-[981px]:before:top-7 min-[981px]:before:h-px min-[981px]:before:bg-[linear-gradient(90deg,rgba(11,110,79,0.28),rgba(17,24,39,0.08))] min-[981px]:before:content-['']">
          {processSteps.map((item) => (
            <article
              key={item.step}
              className="relative rounded-[22px] border border-black/[0.08] bg-white/[0.76] px-6 pb-6 pt-[54px] shadow-[0_24px_60px_rgba(18,20,23,0.1)] backdrop-blur-[16px] transition-[transform,box-shadow,border-color] duration-[220ms] hover:-translate-y-1 hover:border-[rgba(11,110,79,0.18)] hover:shadow-[0_28px_64px_rgba(18,20,23,0.12)]"
            >
              <span
                className="absolute left-6 top-0 inline-block -translate-y-1/2 rounded-full border border-black/[0.08] bg-white/[0.92] px-3 py-[10px] text-[0.8rem] text-[#084c38]"
                style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
              >
                {item.step}
              </span>
              <h3 className="mb-3 text-[1.35rem] leading-[1.15] text-[#121417]">
                {item.title}
              </h3>
              <p className="text-[1.02rem] leading-[1.7] text-[#5d6774]">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
