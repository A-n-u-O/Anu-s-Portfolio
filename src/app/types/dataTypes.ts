export interface Project {
  title: string;
  description: string;
  image: string;
  alt: string;
  imageFit?: "cover" | "contain";
  imagePosition?: string;
  links: {
    live?: string;
    github?: string;
  };
  tech: string[];
  category: string[];
  featured?: boolean;
  priority?: "featured" | "secondary" | "archive";
  number?: string;
  slug?: string;
  role?: string;
  caseStudy?: {
    overview?: string;
    problem?: string;
    approach?: string;
    challenges?: string[];
    outcome?: string;
    highlights?: string[];
  };
}

export interface ExperienceEntry {
  role: string;
  company: string;
  dates: string;
  location: string;
  description: string[];
}

export interface SocialIcon {
  src: string;
  alt: string;
  link: string;
}

export interface eventDetails {
  title: string;
    organizer: string;
    date: string;
    description:string;
    skills: string[],
    link?: string;
}
