import type {
  AboutData,
  ContactData,
  HeroData,
  ProjectsData,
} from "@/types/site";

export const heroData: HeroData = {
  eyebrow: "Software Engineer • Product Builder • Systems Thinker",
  title: "I design and ship digital products with the polish people remember.",
  description:
    "I’m a developer focused on fast interfaces, reliable systems, and the kind of execution that makes a product feel simple even when the work behind it is not.",
  stats: [
    { label: "Focus", value: "Frontend engineering" },
    { label: "Strength", value: "Product thinking" },
    { label: "Stack", value: "React, Node.js, TypeScript" },
    { label: "Location", value: "India • Remote-friendly" },
  ],
};

export const projectsData: ProjectsData = {
  heading: {
    eyebrow: "Projects",
    title: "Selected work that reflects how I think and build.",
    description:
      "A few featured projects that highlight product thinking, engineering quality, and visual polish.",
  },
  featured: {
    tag: "Flagship",
    title: "Astrounaut Portfolio Platform",
    description:
      "A premium personal portfolio system built to communicate technical depth with stronger visual storytelling, cleaner structure, and a more product-minded presentation style.",
  },
  secondary: [
    {
      tag: "Product",
      title: "Full-stack Product Build",
      description:
        "A product-focused application showing end-to-end ownership across interface, logic, and user experience decisions.",
    },
    {
      tag: "System",
      title: "Performance Engineering Work",
      description:
        "Technical work centered around speed, structure, optimization, and improving how the product feels in real use.",
    },
  ],
};

export const aboutData: AboutData = {
  heading: {
    eyebrow: "About",
    title: "I care about product quality at every layer.",
  },
  paragraphs: [
    "I enjoy building software that feels clear, fast, and intentional. Not just features that work, but experiences that feel well-made.",
    "My interests sit at the intersection of frontend engineering, product thinking, interface systems, and the details that shape how users perceive quality.",
  ],
};

export const contactData: ContactData = {
  heading: {
    eyebrow: "Contact",
    title: "Let’s build something thoughtful, useful, and well-crafted.",
    description:
      "I’m open to internships, freelance projects, and full-time opportunities where engineering quality and product quality both matter.",
  },
  links: {
    email: "mailto:you@example.com",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
  },
};

