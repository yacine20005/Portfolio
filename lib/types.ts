export interface NavLink {
    name: string;
    href: string;
    id: string;
}

export interface Cta {
    text: string;
    href: string;
}

export interface HeroData {
    name: string;
    title: string;
    description: string;
    cta: {
        projects: Cta;
        contact: Cta;
        cv: Cta;
    };
}

export interface AboutData {
    title: string;
    subtitle: string;
    paragraphs: string[];
}

export interface SkillCategory {
    name: string;
    skills: string[];
}

export interface SkillsData {
    title: string;
    subtitle: string;
    categories: SkillCategory[];
}

export interface ProjectLink {
    name: string;
    href: string;
}

export interface Project {
    title: string;
    description: string;
    tags: string[];
    icon: string;
    links: ProjectLink[];
}

export interface ProjectsData {
    title: string;
    subtitle: string;
    projects: Project[];
    viewAllLink: string;
}

export interface Experience {
    date: string;
    title: string;
    role: string;
    description: string;
}

export interface ExperienceData {
    title: string;
    subtitle: string;
    experiences: Experience[];
}

export interface ContactMethod {
    name: string;
    value: string;
    href: string;
    buttonText: string;
}

export interface ContactData {
    title: string;
    subtitle: string;
    contacts: ContactMethod[];
}

export interface SocialLink {
    name: string;
    href: string;
}

export interface FooterData {
    name: string;
    title: string;
    socials: SocialLink[];
    copyright: string;
}
