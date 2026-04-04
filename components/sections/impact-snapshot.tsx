import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/ui/reveal";

const snapshotItems = [
  "Product-first engineering",
  "Modern frontend craft",
  "Full ownership mindset",
  "Clear collaboration style",
];

export function ImpactSnapshot() {
  return (
    <Section id="snapshot">
      <Reveal>
        <div className="grid items-stretch gap-[22px] max-[980px]:grid-cols-1 min-[981px]:grid-cols-[minmax(0,0.95fr)_minmax(0,1.2fr)]">
          <div className="py-2">
            <p
              className="mb-[18px] text-[0.78rem] uppercase tracking-[0.03em] text-[#084c38]"
              style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
            >
              Impact Snapshot
            </p>
            <h2 className="max-w-[14ch] text-[clamp(2rem,4.4vw,3.6rem)] font-semibold leading-[1] tracking-[-0.04em] text-[#121417]">
              The kind of work I want to be known for.
            </h2>
            <p className="mt-6 max-w-[42ch] text-[1.02rem] leading-[1.7] text-[#5d6774]">
              I&apos;m most excited by products where engineering quality and user
              perception are tightly connected. That usually means performance,
              clarity, and interface details all matter at once.
            </p>
          </div>

          <div className="grid gap-[14px] max-[720px]:grid-cols-1 min-[721px]:grid-cols-2">
            <article className="col-span-full rounded-[32px] border border-black/[0.08] bg-[linear-gradient(145deg,rgba(255,255,255,0.92),rgba(255,255,255,0.68)),linear-gradient(145deg,rgba(11,110,79,0.1),transparent)] p-7 shadow-[0_24px_60px_rgba(18,20,23,0.1)] backdrop-blur-[16px] transition-[transform,box-shadow,border-color] duration-[220ms] hover:-translate-y-1 hover:border-[rgba(11,110,79,0.18)] hover:shadow-[0_28px_64px_rgba(18,20,23,0.12)]">
              <span
                className="mb-[14px] inline-block text-[0.8rem] text-[#084c38]"
                style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
              >
                North Star
              </span>
              <h3 className="mb-3 text-[1.35rem] leading-[1.15] text-[#121417]">
                Make technical work feel simple, fast, and trustworthy.
              </h3>
              <p className="text-[1.02rem] leading-[1.7] text-[#5d6774]">
                I like building products that look calm on the surface because the
                system underneath has been thought through carefully.
              </p>
            </article>

            {snapshotItems.map((item, index) => (
              <article
                key={item}
                className="rounded-[22px] border border-black/[0.08] bg-white/[0.76] p-5 shadow-[0_24px_60px_rgba(18,20,23,0.1)] backdrop-blur-[16px] transition-[transform,box-shadow,border-color] duration-[220ms] hover:-translate-y-1 hover:border-[rgba(11,110,79,0.18)] hover:shadow-[0_28px_64px_rgba(18,20,23,0.12)]"
              >
                <span
                  className="mb-[14px] inline-block text-[0.8rem] text-[#084c38]"
                  style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
                >
                  0{index + 1}
                </span>
                <p className="text-[1.02rem] leading-[1.7] text-[#121417]">{item}</p>
              </article>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
