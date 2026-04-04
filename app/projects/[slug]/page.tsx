import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/container";
import { getProjectBySlug, projects } from "@/lib/projects-data";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="pb-20 pt-6">
      <Container>
        <div className="mb-8 flex items-center justify-between gap-4">
          <Link
            href="/#projects"
            className="inline-flex items-center rounded-full border border-black/[0.08] bg-white/[0.72] px-4 py-3 text-[0.82rem] uppercase tracking-[0.03em] text-[#5d6774] shadow-[0_10px_24px_rgba(18,20,23,0.06)] backdrop-blur-[16px]"
            style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
          >
            Back to projects
          </Link>

          <span
            className="text-[0.76rem] uppercase tracking-[0.03em] text-[#5d6774]"
            style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
          >
            {project.tag} • {project.year}
          </span>
        </div>

        <section className="grid gap-8 rounded-[36px] border border-black/[0.08] bg-white/[0.82] p-8 shadow-[0_24px_60px_rgba(18,20,23,0.1)] backdrop-blur-[16px] max-[720px]:rounded-[26px] max-[720px]:p-6 min-[981px]:grid-cols-[minmax(0,1.02fr)_minmax(360px,0.98fr)]">
          <div className="min-w-0">
            <p
              className="mb-[18px] text-[0.78rem] uppercase tracking-[0.03em] text-[#084c38]"
              style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
            >
              {project.tag}
            </p>

            <h1 className="max-w-[12ch] text-[clamp(2.4rem,5.5vw,5rem)] font-semibold leading-[0.95] tracking-[-0.05em] text-[#121417]">
              {project.title}
            </h1>

            <p className="mt-5 max-w-[58ch] text-[1.08rem] leading-[1.8] text-[#5d6774]">
              {project.detailCopy}
            </p>

            <div className="mt-7 grid gap-4 min-[640px]:grid-cols-3">
              {project.detailStats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[22px] border border-black/[0.08] bg-white/[0.68] p-4"
                >
                  <p
                    className="mb-2 text-[0.72rem] uppercase tracking-[0.03em] text-[#5d6774]"
                    style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
                  >
                    {item.label}
                  </p>
                  <p className="text-[0.98rem] leading-6 text-[#121417]">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-7 rounded-[28px] border border-black/[0.08] bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(247,250,248,0.72))] p-6">
              <p
                className="mb-3 text-[0.76rem] uppercase tracking-[0.03em] text-[#5d6774]"
                style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
              >
                Project angle
              </p>
              <h2 className="text-[1.45rem] leading-[1.15] tracking-[-0.03em] text-[#121417]">
                {project.detailTitle}
              </h2>
              <ul className="mt-5 list-disc space-y-2 pl-[18px] text-[1rem] leading-7 text-[#5d6774]">
                {project.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="mt-6 flex flex-wrap gap-[10px]">
              {project.chips.map((chip) => (
                <span
                  key={chip}
                  className="inline-flex items-center rounded-full border border-black/[0.08] bg-white/[0.64] px-[14px] py-[10px] text-[0.88rem] text-[#5d6774]"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            <div
              className={`relative min-h-[520px] overflow-hidden rounded-[32px] ${project.media}`}
            >
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.16),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.18),rgba(255,255,255,0.04))]" />
              <div className="absolute inset-x-6 top-6 flex items-center justify-between">
                <span
                  className="rounded-full bg-white/[0.18] px-3 py-[9px] text-[0.74rem] uppercase tracking-[0.03em] text-white"
                  style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
                >
                  {project.label}
                </span>
                <span
                  className="rounded-full bg-white/[0.12] px-3 py-[9px] text-[0.72rem] uppercase tracking-[0.03em] text-white/85"
                  style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
                >
                  Dedicated page
                </span>
              </div>

              <div className="absolute inset-x-6 bottom-6 grid gap-3">
                <div className="rounded-[22px] bg-[rgba(18,20,23,0.22)] p-4 text-white backdrop-blur-md">
                  <p
                    className="mb-2 text-[0.72rem] uppercase tracking-[0.03em] text-white/65"
                    style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
                  >
                    Experience
                  </p>
                  <p className="text-sm leading-6">
                    Designed to feel premium, calm, and easier to trust at a glance.
                  </p>
                </div>
                <div className="grid gap-3 min-[520px]:grid-cols-2">
                  <div className="rounded-[20px] bg-[rgba(18,20,23,0.16)] p-4 text-white backdrop-blur-md">
                    <p
                      className="mb-2 text-[0.72rem] uppercase tracking-[0.03em] text-white/65"
                      style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
                    >
                      Build
                    </p>
                    <p className="text-sm leading-6">
                      A case-study presentation that connects implementation quality to product clarity.
                    </p>
                  </div>
                  <div className="rounded-[20px] bg-[rgba(18,20,23,0.16)] p-4 text-white backdrop-blur-md">
                    <p
                      className="mb-2 text-[0.72rem] uppercase tracking-[0.03em] text-white/65"
                      style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
                    >
                      Outcome
                    </p>
                    <p className="text-sm leading-6">
                      A fuller project view that gives the work more room to sell itself.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </main>
  );
}
