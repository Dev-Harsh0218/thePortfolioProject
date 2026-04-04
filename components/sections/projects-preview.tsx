"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/ui/reveal";
import { projects, type Project } from "@/lib/projects-data";

function ExpandIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
    >
      <path d="M7 3H3v4" />
      <path d="M13 3h4v4" />
      <path d="M17 13v4h-4" />
      <path d="M3 13v4h4" />
      <path d="M3 7l5-4" />
      <path d="M17 7l-5-4" />
      <path d="M17 13l-5 4" />
      <path d="M3 13l5 4" />
    </svg>
  );
}

function WindowControls({
  onClose,
  onOpenPage,
}: {
  onClose: () => void;
  onOpenPage: () => void;
}) {
  return (
    <div className="group flex items-center gap-2">
      <button
        type="button"
        aria-label="Close project modal"
        onClick={onClose}
        className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#ff5f57]"
      >
        <span className="text-[9px] leading-none text-black/45 opacity-0 transition duration-150 group-hover:opacity-100">
          ×
        </span>
      </button>
      <button
        type="button"
        aria-label="Minimize project modal"
        onClick={onClose}
        className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#febc2e]"
      >
        <span className="text-[9px] leading-none text-black/35 opacity-0 transition duration-150 group-hover:opacity-100">
          −
        </span>
      </button>
      <button
        type="button"
        aria-label="Open dedicated project page"
        onClick={onOpenPage}
        className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#28c840]"
      >
        <span className="text-[8px] leading-none text-black/35 opacity-0 transition duration-150 group-hover:opacity-100">
          +
        </span>
      </button>
    </div>
  );
}

export function ProjectsPreview() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (!activeProject) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [activeProject]);

  return (
    <Section id="projects" className="pt-[52px]">
      <Reveal>
        <div className="mb-8 grid items-end gap-8 min-[981px]:grid-cols-[minmax(0,1fr)_minmax(300px,0.78fr)]">
          <div>
            <p
              className="mb-[18px] text-[0.78rem] uppercase tracking-[0.03em] text-[#084c38]"
              style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
            >
              Selected Work
            </p>
            <h2 className="max-w-[12ch] text-[clamp(2.25rem,4.8vw,4.4rem)] font-semibold leading-[0.96] tracking-[-0.05em] text-[#121417]">
              Projects that feel like products, not placeholders.
            </h2>
          </div>
          <p className="max-w-[44ch] justify-self-start text-[1.04rem] leading-[1.75] text-[#5d6774] min-[981px]:justify-self-end">
            The goal here is balance: one project can lead, but every card should
            still feel worthy of attention. Each one is framed around intent,
            product judgment, and the quality of experience it tries to create.
          </p>
        </div>

        <div className="grid gap-5 min-[981px]:grid-cols-12">
          {projects.map((project) => (
            <article
              key={project.slug}
              className={`group relative flex min-h-[410px] flex-col justify-between rounded-[30px] border border-black/[0.08] bg-white/[0.8] p-6 shadow-[0_24px_60px_rgba(18,20,23,0.1)] backdrop-blur-[16px] transition-[transform,box-shadow,border-color] duration-[220ms] hover:-translate-y-1 hover:border-[rgba(11,110,79,0.18)] hover:shadow-[0_28px_64px_rgba(18,20,23,0.12)] max-[720px]:rounded-[24px] max-[720px]:p-[22px] ${project.span}`}
            >
              <button
                type="button"
                aria-label={`Open ${project.title}`}
                onClick={() => setActiveProject(project)}
                className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/[0.08] bg-white/[0.82] text-[#121417] shadow-[0_10px_24px_rgba(18,20,23,0.08)] transition duration-200 hover:scale-[1.03] hover:bg-white"
              >
                <ExpandIcon />
              </button>

              <div>
                <div className="mb-4 flex items-center justify-between gap-3 pr-12">
                  <span
                    className="text-[0.76rem] uppercase tracking-[0.03em] text-[#5d6774]"
                    style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
                  >
                    {project.tag}
                  </span>
                  <span
                    className="text-[0.76rem] uppercase tracking-[0.03em] text-[#5d6774]"
                    style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
                  >
                    {project.year}
                  </span>
                </div>

                <h3 className="max-w-[16ch] text-[1.75rem] leading-[1.02] tracking-[-0.04em] text-[#121417]">
                  {project.title}
                </h3>

                <p className="mt-4 text-[1rem] leading-[1.72] text-[#5d6774]">
                  {project.description}
                </p>

                <ul className="mt-5 list-disc space-y-2 pl-[18px] text-[0.98rem] leading-7 text-[#5d6774]">
                  {project.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                <div
                  className={`relative min-h-[148px] overflow-hidden rounded-[24px] ${project.media}`}
                >
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.16),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.18),rgba(255,255,255,0.04))]" />
                  <span
                    className="absolute bottom-4 left-4 rounded-full bg-white/[0.18] px-3 py-[9px] text-[0.74rem] uppercase tracking-[0.03em] text-white"
                    style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
                  >
                    {project.label}
                  </span>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.chips.map((chip) => (
                    <span
                      key={chip}
                      className="rounded-full border border-black/[0.08] bg-white/[0.64] px-3 py-2 text-[0.82rem] text-[#5d6774]"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Reveal>

      {activeProject ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6">
          <button
            type="button"
            aria-label="Close project modal"
            onClick={() => setActiveProject(null)}
            className="absolute inset-0 bg-[rgba(18,20,23,0.42)] backdrop-blur-md"
          />

          <div className="relative z-10 w-full max-w-[1040px] overflow-hidden rounded-[36px] border border-white/40 bg-[rgba(248,245,238,0.94)] shadow-[0_32px_90px_rgba(18,20,23,0.24)] backdrop-blur-xl">
            <div className="grid gap-0 min-[900px]:grid-cols-[minmax(0,1.05fr)_minmax(360px,0.95fr)]">
              <div className="p-7 max-[720px]:p-5">
                <div className="mb-5 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-4">
                    <WindowControls
                      onClose={() => setActiveProject(null)}
                      onOpenPage={() => {
                        router.push(`/projects/${activeProject.slug}`);
                        setActiveProject(null);
                      }}
                    />
                    <span
                      className="text-[0.76rem] uppercase tracking-[0.03em] text-[#5d6774]"
                      style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
                    >
                      {activeProject.tag}
                    </span>
                    <span
                      className="text-[0.76rem] uppercase tracking-[0.03em] text-[#5d6774]"
                      style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
                    >
                      {activeProject.year}
                    </span>
                  </div>
                  <span
                    className="rounded-full border border-black/[0.08] bg-white/[0.68] px-3 py-2 text-[0.72rem] uppercase tracking-[0.03em] text-[#5d6774]"
                    style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
                  >
                    Expanded project
                  </span>
                </div>

                <h3 className="max-w-[14ch] text-[clamp(2rem,5vw,3.7rem)] font-semibold leading-[0.98] tracking-[-0.05em] text-[#121417]">
                  {activeProject.title}
                </h3>

                <p className="mt-5 max-w-[56ch] text-[1.04rem] leading-[1.8] text-[#5d6774]">
                  {activeProject.detailCopy}
                </p>

                <div className="mt-6 grid gap-4 min-[640px]:grid-cols-3">
                  {activeProject.detailStats.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-[22px] border border-black/[0.08] bg-white/[0.64] p-4"
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

                <ul className="mt-6 list-disc space-y-2 pl-[18px] text-[1rem] leading-7 text-[#5d6774]">
                  {activeProject.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-[10px]">
                  {activeProject.chips.map((chip) => (
                    <span
                      key={chip}
                      className="inline-flex items-center rounded-full border border-black/[0.08] bg-white/[0.68] px-[14px] py-[10px] text-[0.88rem] text-[#5d6774]"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-l border-black/[0.06] bg-[rgba(255,255,255,0.4)] p-6 max-[899px]:border-l-0 max-[899px]:border-t max-[720px]:p-5">
                <div
                  className={`relative min-h-[420px] overflow-hidden rounded-[28px] ${activeProject.media}`}
                >
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.16),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.18),rgba(255,255,255,0.04))]" />
                  <div className="absolute inset-x-5 top-5 flex items-center justify-between">
                    <span
                      className="rounded-full bg-white/[0.18] px-3 py-[9px] text-[0.74rem] uppercase tracking-[0.03em] text-white"
                      style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
                    >
                      {activeProject.label}
                    </span>
                    <span
                      className="rounded-full bg-white/[0.12] px-3 py-[9px] text-[0.72rem] uppercase tracking-[0.03em] text-white/85"
                      style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
                    >
                      Expanded view
                    </span>
                  </div>

                  <div className="absolute inset-x-5 bottom-5 grid gap-3">
                    <div className="rounded-[22px] bg-[rgba(18,20,23,0.22)] p-4 text-white backdrop-blur-md">
                      <p
                        className="mb-2 text-[0.72rem] uppercase tracking-[0.03em] text-white/65"
                        style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
                      >
                        Project angle
                      </p>
                      <p className="text-sm leading-6">{activeProject.detailTitle}</p>
                    </div>
                    <div className="grid gap-3 min-[520px]:grid-cols-2">
                      <div className="rounded-[20px] bg-[rgba(18,20,23,0.16)] p-4 text-white backdrop-blur-md">
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
                      <div className="rounded-[20px] bg-[rgba(18,20,23,0.16)] p-4 text-white backdrop-blur-md">
                        <p
                          className="mb-2 text-[0.72rem] uppercase tracking-[0.03em] text-white/65"
                          style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
                        >
                          Product lens
                        </p>
                        <p className="text-sm leading-6">
                          Focused on how engineering choices shape user perception.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </Section>
  );
}
