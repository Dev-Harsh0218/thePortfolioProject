export type Project = {
  slug: string;
  tag: string;
  year: string;
  title: string;
  description: string;
  bullets: string[];
  chips: string[];
  label: string;
  media: string;
  span: string;
  detailTitle: string;
  detailCopy: string;
  detailStats: Array<{ label: string; value: string }>;
};

export const projects: Project[] = [
  {
    slug: "astrounaut-portfolio-platform",
    tag: "Flagship",
    year: "2026",
    title: "Astrounaut Portfolio Platform",
    description:
      "A premium portfolio system designed like a product launch page, with stronger storytelling, calmer motion, and a more credible way to present engineering craft.",
    bullets: [
      "Turned a generic portfolio into an editorial product narrative",
      "Built reusable sections for projects, experience, and recruiter-facing proof",
    ],
    chips: ["Next.js", "Tailwind CSS", "Product storytelling"],
    label: "Launch",
    media:
      "bg-[radial-gradient(circle_at_20%_24%,rgba(198,225,255,0.9),transparent_20%),radial-gradient(circle_at_82%_22%,rgba(180,160,255,0.7),transparent_18%),linear-gradient(135deg,#131a26,#304257_56%,#5c7090)]",
    span: "min-[981px]:col-span-7",
    detailTitle: "Editorial launch page for a product-minded engineer",
    detailCopy:
      "This project is meant to feel less like a developer template and more like a polished product narrative. The focus is on typography, pacing, modular section design, and presenting technical work with enough clarity that a recruiter or hiring manager understands both the craft and the judgment behind it.",
    detailStats: [
      { label: "Role", value: "Product design + frontend implementation" },
      { label: "Focus", value: "Storytelling, layout rhythm, interaction polish" },
      { label: "Outcome", value: "A stronger first impression and clearer project framing" },
    ],
  },
  {
    slug: "fulfillment-workflow-console",
    tag: "Operations SaaS",
    year: "2026",
    title: "Fulfillment Workflow Console",
    description:
      "A demo operations product for tracking shipment state, exception handling, and team handoffs across a noisy logistics workflow.",
    bullets: [
      "Designed for dense operational data",
      "Built around speed of decision-making",
    ],
    chips: ["Dashboards", "Table UX", "Systems"],
    label: "Console",
    media:
      "bg-[radial-gradient(circle_at_24%_25%,rgba(214,242,255,0.82),transparent_20%),radial-gradient(circle_at_76%_24%,rgba(189,205,255,0.5),transparent_18%),linear-gradient(135deg,#1b2b3a,#314e66_55%,#7fb2d0)]",
    span: "min-[981px]:col-span-5",
    detailTitle: "Operations-heavy product surface designed for clarity under pressure",
    detailCopy:
      "This concept explores how complex internal software can still feel calm. The emphasis is on surfacing the right information, making state transitions obvious, and helping teams act quickly without turning the interface into noise.",
    detailStats: [
      { label: "Users", value: "Operations teams and coordinators" },
      { label: "Challenge", value: "High-density data without overwhelming the user" },
      { label: "Approach", value: "Hierarchy, filters, and focused workflow actions" },
    ],
  },
  {
    slug: "habit-loop-companion",
    tag: "Mobile Product",
    year: "2026",
    title: "Habit Loop Companion",
    description:
      "A calmer personal product concept focused on progress clarity, lower cognitive load, and a more graceful daily ritual.",
    bullets: [
      "Quieter interaction language",
      "Visual system shaped for retention",
    ],
    chips: ["Mobile UX", "Motion", "Product tone"],
    label: "Companion",
    media:
      "bg-[radial-gradient(circle_at_24%_22%,rgba(255,230,196,0.72),transparent_22%),radial-gradient(circle_at_80%_22%,rgba(255,255,255,0.2),transparent_16%),linear-gradient(135deg,#2b1b1a,#8f6048_58%,#e7b27b)]",
    span: "min-[981px]:col-span-5",
    detailTitle: "A lighter, quieter take on habit tracking",
    detailCopy:
      "Instead of treating motivation like a loud game, this concept leans into lower-friction daily interactions. The product is designed to make progress feel visible without making the experience feel noisy or demanding.",
    detailStats: [
      { label: "Goal", value: "Lower cognitive load in a repeat-use product" },
      { label: "Design angle", value: "Soft visual pacing and gentle feedback" },
      { label: "Product bet", value: "Retention improves when the product feels calmer" },
    ],
  },
  {
    slug: "performance-architecture-study",
    tag: "Platform System",
    year: "2025",
    title: "Performance Architecture Study",
    description:
      "A systems-heavy case study around rendering speed, structural cleanup, and experience quality that improved because the architecture improved.",
    bullets: [
      "Performance as product quality",
      "Technical depth explained clearly",
    ],
    chips: ["Perf", "Architecture", "Scalability"],
    label: "Systems",
    media:
      "bg-[radial-gradient(circle_at_78%_22%,rgba(151,196,255,0.52),transparent_18%),radial-gradient(circle_at_24%_32%,rgba(255,255,255,0.18),transparent_14%),linear-gradient(135deg,#121726,#29344c_58%,#52688e)]",
    span: "min-[981px]:col-span-7",
    detailTitle: "Technical improvement framed as user experience improvement",
    detailCopy:
      "This case study shows how architectural cleanup, rendering performance, and code-level decisions shape the way a product feels. The point isn’t speed for speed’s sake, but faster, calmer interfaces that feel more trustworthy in use.",
    detailStats: [
      { label: "Focus", value: "Rendering, load behavior, structural simplification" },
      { label: "Audience", value: "Engineering teams and product stakeholders" },
      { label: "Value", value: "Connect technical depth to user-facing outcomes" },
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
