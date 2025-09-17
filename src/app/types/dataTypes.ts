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
}

export interface SocialIcon {
  src: string;
  alt: string;
  link: string;
}
