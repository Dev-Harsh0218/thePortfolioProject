export type HeroStat = {
  label: string;
  value: string;
};

export type HeroData = {
  eyebrow: string;
  title: string;
  description: string;
  stats: HeroStat[];
};

export type SectionHeadingData = {
  eyebrow: string;
  title: string;
  description?: string;
};

export type ProjectItem = {
  tag: string;
  title: string;
  description: string;
};

export type ProjectsData = {
  heading: SectionHeadingData;
  featured: ProjectItem;
  secondary: ProjectItem[];
};

export type AboutData = {
  heading: {
    eyebrow: string;
    title: string;
  };
  paragraphs: string[];
};

export type ContactData = {
  heading: SectionHeadingData;
  links: {
    email: string;
    github: string;
    linkedin: string;
  };
};

