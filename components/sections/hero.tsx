import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { InfoCard } from "@/components/ui/info-card";
import { Reveal } from "@/components/ui/reveal";
import { heroData } from "@/lib/site-data";

const heroHighlights = [
  "Building premium frontend experiences",
  "Shipping full-stack products end to end",
  "Obsessed with clean interaction design",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden py-[72px] pb-[44px] max-[720px]:py-9 max-[720px]:pb-8">
      <Container>
        <Reveal>
          <div className="relative grid items-stretch gap-7 max-[980px]:grid-cols-1 max-[980px]:gap-5 lg:grid-cols-[minmax(0,1.5fr)_minmax(320px,0.9fr)]">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute right-[22%] top-6 hidden h-[180px] w-[180px] rounded-full border border-[rgba(11,110,79,0.14)] bg-[radial-gradient(circle,rgba(11,110,79,0.12),transparent_68%)] blur-[2px] lg:block"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute bottom-7 right-[4%] hidden h-[240px] w-[240px] rounded-full border border-[rgba(231,154,37,0.12)] bg-[radial-gradient(circle,rgba(231,154,37,0.12),transparent_70%)] blur-[2px] lg:block"
            />

            <div className="rounded-[32px] border border-black/[0.08] bg-white/[0.76] p-[42px] shadow-[0_24px_60px_rgba(18,20,23,0.1)] backdrop-blur-[16px] max-[720px]:rounded-[24px] max-[720px]:p-[22px]">
              <p
                className="mb-[18px] text-[0.78rem] uppercase tracking-[0.03em] text-[#084c38]"
                style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
              >
                {heroData.eyebrow}
              </p>

              <h1 className="mb-[18px] max-w-[11ch] text-[clamp(3rem,8vw,6.4rem)] font-semibold leading-[0.95] tracking-[-0.05em] text-[#121417] max-[720px]:max-w-none max-[720px]:text-[clamp(2.8rem,16vw,4.2rem)]">
                {heroData.title}
              </h1>

              <p className="max-w-[58ch] text-[1.02rem] leading-[1.7] text-[#5d6774]">
                {heroData.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-[10px]">
                {heroHighlights.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center rounded-full border border-black/[0.08] bg-white/[0.64] px-[14px] py-[10px] text-[0.9rem] text-[#5d6774]"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-[14px]">
                <Button href="#projects">View selected work</Button>
                <Button href="#contact" variant="secondary">
                  Let&apos;s build something
                </Button>
              </div>
            </div>

            <aside className="flex flex-col justify-between rounded-[32px] border border-black/[0.08] bg-[linear-gradient(160deg,rgba(255,255,255,0.92),rgba(255,255,255,0.64)),linear-gradient(145deg,rgba(11,110,79,0.16),transparent)] p-7 shadow-[0_24px_60px_rgba(18,20,23,0.1)] backdrop-blur-[16px] max-[720px]:rounded-[24px] max-[720px]:p-[22px]">
              <div className="inline-flex w-full items-center gap-[10px] rounded-full bg-white/[0.76] px-[14px] py-3 text-[0.92rem] leading-[1.35] text-[#5d6774]">
                <span className="h-[10px] w-[10px] shrink-0 rounded-full bg-[#2bae66] shadow-[0_0_0_8px_rgba(43,174,102,0.16)]" />
                <span>Available for internships, freelance, and full-time roles</span>
              </div>

              <div className="mt-7 grid gap-[14px]">
                {heroData.stats.map((item) => (
                  <InfoCard key={item.label} label={item.label} value={item.value} />
                ))}
              </div>
            </aside>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
