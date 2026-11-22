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

export type EventStatus = "Attended" | "Completed" | "In progress" | "Volunteered";

export interface EventDetails {
  id: string;
  aliases?: string[];
  title: string;
  organizer: string;
  category: string;
  startDate: string;
  endDate?: string;
  status: EventStatus;
  description: string;
  link?: string;
  linkLabel?: string;
}
