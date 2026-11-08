import type React from "react"

export interface NavLink {
    name: string;
    href: string;
    id: string;
}

export interface AboutData {
    title: string;
    paragraphs: string[];
}

export interface SkillCategory {
    name: string;
    skills: string[];
}

export interface SkillsData {
    title: string;
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
    links: ProjectLink[];
}

export interface ProjectsData {
    title: string;
    projects: Project[];
    viewAllLink: string;
}

export interface Experience {
    date: string;
    title: string;
    role: string;
    description: string;
    link?: {
        text: string;
        href: string;
    };
}

export interface ExperienceData {
    title: string;
    experiences: Experience[];
}

export interface ContactMethod {
    name: string;
    href: string;
    buttonText: string;
}

export interface ContactData {
    title: string;
    subtitle: string;
    contacts: ContactMethod[];
}

export interface FooterData {
    name: string;
    title: string;
    copyright: string;
}

export interface FeaturedProjectTheme {
    gradientFrom: string;
    gradientVia: string;
    gradientTo: string;
    textColor: string;
    accentColor: string;
    border: string;
    tagBackground: string;
    tagColor: string;
    tagBorder: string;
}

export interface FeaturedProject {
    title: string;
    tagline: string;
    tags: string[];
    icon: React.ReactNode;
    link: string;
    theme: FeaturedProjectTheme;
}

export interface FeaturedProjectsData {
    title: string;
    projects: FeaturedProject[];
}

export interface WebsitesProject {
    title: string;
    description: string;
    imagePath: string;
    link: string;
    available?: boolean;
}

export interface WebsitesData {
    title: string;
    projects: WebsitesProject[];
}
