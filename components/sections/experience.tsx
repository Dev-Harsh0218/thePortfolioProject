import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/ui/reveal";

const experienceItems = [
  {
    period: "2025 — Present",
    role: "Lead Portfolio Project",
    title: "Creating premium web experiences with a focus on clarity and speed.",
    description:
      "Designing interfaces that feel deliberate, building maintainable components, and shaping the story behind the product instead of only the code.",
    points: [
      "Designed a premium landing experience with scalable content blocks",
      "Balanced visual ambition with performance-conscious implementation",
      "Created a strong base for future case studies and product storytelling",
    ],
  },
  {
    period: "2024 — 2025",
    role: "Independent Builder",
    title: "Turned ideas into real products through fast iteration.",
    description:
      "Worked across frontend, backend, and UX decisions to ship projects end to end, balancing engineering quality with practical delivery.",
    points: [
      "Built and refined side projects to sharpen product intuition",
      "Improved implementation speed by reusing components and patterns",
      "Focused on solving real problems instead of building demo-only apps",
    ],
  },
  {
    period: "Ongoing",
    role: "Continuous Learning",
    title: "Deepening skills in systems, design, and production-ready software.",
    description:
      "Spending time on the fundamentals that make engineers valuable over the long term: architecture, communication, performance, and judgment.",
    points: [
      "Practicing component architecture and scalable frontend structure",
      "Studying how top teams present work and communicate impact",
      "Improving the gap between building features and building products",
    ],
  },
];

export function Experience() {
  return (
    <Section id="work">
      <Reveal>
        <div className="mb-7">
          <p
            className="mb-[18px] text-[0.78rem] uppercase tracking-[0.03em] text-[#084c38]"
            style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
          >
            Experience
          </p>
          <h2 className="max-w-[14ch] text-[clamp(2rem,4.4vw,3.6rem)] font-semibold leading-[1] tracking-[-0.04em] text-[#121417]">
            Built with engineering discipline and product taste.
          </h2>
        </div>

        <div className="relative grid gap-[26px] pl-7 before:absolute before:bottom-2 before:left-[6px] before:top-2 before:w-px before:bg-[linear-gradient(180deg,rgba(11,110,79,0.35),rgba(17,24,39,0.08))] max-[980px]:pl-5">
          {experienceItems.map((item) => (
            <article
              key={item.role}
              className="relative grid items-start gap-5 before:absolute before:left-[-27px] before:top-[9px] before:h-[14px] before:w-[14px] before:rounded-full before:bg-[#0b6e4f] before:shadow-[0_0_0_6px_rgba(11,110,79,0.12)] before:content-[''] max-[980px]:grid-cols-1 max-[980px]:before:left-[-19px] min-[981px]:grid-cols-[180px_1fr]"
            >
              <div className="pt-[2px]">
                <span
                  className="mb-[10px] block text-[0.76rem] uppercase tracking-[0.03em] text-[#5d6774]"
                  style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
                >
                  {item.period}
                </span>
                <span
                  className="block text-[0.76rem] uppercase tracking-[0.03em] text-[#5d6774]"
                  style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
                >
                  {item.role}
                </span>
              </div>

              <div className="rounded-[22px] border border-black/[0.08] bg-white/[0.76] px-[26px] py-6 shadow-[0_24px_60px_rgba(18,20,23,0.1)] backdrop-blur-[16px] transition-[transform,box-shadow,border-color] duration-[220ms] hover:-translate-y-1 hover:border-[rgba(11,110,79,0.18)] hover:shadow-[0_28px_64px_rgba(18,20,23,0.12)]">
                <h3 className="mb-3 text-[1.35rem] leading-[1.15] text-[#121417]">
                  {item.title}
                </h3>
                <p className="max-w-[58ch] text-[1.02rem] leading-[1.7] text-[#5d6774]">
                  {item.description}
                </p>
                <ul className="mt-[18px] list-disc pl-[18px] text-[1.02rem] leading-[1.7] text-[#5d6774]">
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
