const fallbackUrl = "https://example.com";

export const siteConfig = {
  name: "Harsh Bhardwaj",
  role: "Software Engineer",
  title: "Harsh Bhardwaj | Software Engineer",
  description:
    "Portfolio of Harsh Bhardwaj, a software engineer building thoughtful digital experiences with product clarity and frontend craft.",
  tagline: "Software Engineer focused on thoughtful product experiences.",
  location: "India",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || fallbackUrl,
  email: "mailto:harsh@example.com",
  github: "https://github.com/harsh",
  linkedin: "https://www.linkedin.com/in/harsh",
  keywords: [
    "Harsh Bhardwaj",
    "Software Engineer",
    "Frontend Engineer",
    "Next.js Portfolio",
    "Product Engineer",
    "TypeScript Developer",
  ],
} as const;
