import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/ui/reveal";

const tools = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "Git",
  "Figma",
  "REST APIs",
];

export function Toolkit() {
  return (
    <Section id="toolkit">
      <Reveal>
        <div className="mb-7 grid items-end gap-7 min-[981px]:grid-cols-[minmax(0,1fr)_minmax(280px,0.78fr)]">
          <div>
            <p
              className="mb-[18px] text-[0.78rem] uppercase tracking-[0.03em] text-[#084c38]"
              style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
            >
              Toolkit
            </p>
            <h2 className="max-w-[14ch] text-[clamp(2rem,4.4vw,3.6rem)] font-semibold leading-[1] tracking-[-0.04em] text-[#121417]">
              Technologies I like working with.
            </h2>
          </div>
          <p className="max-w-[42ch] justify-self-start text-[1.02rem] leading-[1.7] text-[#5d6774] min-[981px]:justify-self-end">
            The stack matters less than the judgment behind it, but these are the
            tools I reach for most often when building modern web products.
          </p>
        </div>

        <div className="flex flex-wrap gap-[10px]">
          {tools.map((tool) => (
            <span
              key={tool}
              className="inline-flex items-center rounded-full border border-black/[0.08] bg-white/[0.64] px-[14px] py-[10px] text-[0.9rem] text-[#5d6774]"
            >
              {tool}
            </span>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
