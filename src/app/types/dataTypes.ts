export interface Project {
  title: string;
  description: string;
  image: string;
  alt: string;
  links: {
    live?: string;
    github?: string;
  };
  tech: string[];
  category: string[];
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
    link: string;
}
