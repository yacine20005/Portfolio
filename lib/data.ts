import { NavLink, HeroData, AboutData, SkillsData, ProjectsData, ExperienceData, ContactData, FooterData, FeaturedProjectsData, WebsitesData } from './types';
import { Heart, Cloud, Backpack, Bot } from 'lucide-react';
import { GiMoonOrbit } from "react-icons/gi";
import React from 'react';

export const navLinks: NavLink[] = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Featured', href: '#featured', id: 'featured' },
    { name: 'Websites', href: '#websites', id: 'websites' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Contact', href: '#contact', id: 'contact' },
];

export const heroData: HeroData = {
    name: 'YACINE',
    title: 'COMPUTER SCIENCE STUDENT & DEVELOPER.',
    description: 'Hi! I\'m Yacine, currently studying Computer Science at Gustave Eiffel University 🎓 where I turn coffee ☕ into code (and sometimes into bugs).',
    cta: {
        projects: { text: 'View Projects', href: '#projects' },
        contact: { text: 'Get in Touch', href: '#contact' },
        cv: { text: 'Download CV', href: 'https://rxresu.me/yacine20005/project-a' },
    },
};

export const aboutData: AboutData = {
    title: 'about',
    subtitle: 'A bit more about who I am and what I\'m looking for.',
    paragraphs: [
        'What started with curiosity quickly became an obsession. I genuinely enjoy the problem-solving aspect and that ultimate satisfaction when everything works as intended after hours of work (more when it\'s on the first try).',
        'From building strategy games in C to crafting websites for real clients, I\'ve tried a bit of everything. Each project taught me something new, whether it was wrestling with memory allocation or figuring out how to make a design look good on mobile.',
        'If you\'re looking for someone motivated, curious, and have coffee for me, i\'m your guy.',
    ],
};

export const skillsData: SkillsData = {
    title: 'skills',
    subtitle: 'Here are some of the technologies and tools I\'ve been working with during my studies and personal projects.',
    categories: [
        {
            name: 'Programming Languages and Frameworks',
            skills: ['Python', 'Flask', 'FastAPI', 'C', 'HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Expo', 'Bash', 'LaTeX', 'Java', 'Angular'],
        },
        {
            name: 'Cloud & Infrastructure',
            skills: ['Google Cloud', 'PostgreSQL', 'SQLite', 'Vercel', 'DigitalOcean', 'Supabase'],
        },
        {
            name: 'Tools & Libraries',
            skills: ['Git / GitHub', 'Docker', 'Matplotlib', 'NumPy', 'Ncurses', 'MLV Library', 'Sanity CMS', 'FLTK', 'Pillow', 'Zen'],
        },
    ],
};

export const projectsData: ProjectsData = {
    title: 'projects',
    subtitle: 'A selection of projects I\'ve worked on during my academic journey and in my free time.',
    projects: [
        {
            title: 'Nuage',
            description: 'A video game management platform that allows users to browse, purchase, share, and comment on games, manage user profiles, add friends, and track game achievements.',
            tags: ['Python', 'Flask', 'PostgreSQL', 'HTML/CSS'],
            icon: 'FaCloud',
            links: [
                { name: 'View Code', href: 'https://github.com/yacine20005/Nuage' },
            ],
        },
        {
            title: 'TPC Compiler',
            description: 'A compiler for TPC, a small C-like language targeting x86-64 NASM assembly. Implements lexical analysis, parsing, syntax tree generation, semantic checking, and code generation.',
            tags: ['C', 'Flex', 'Bison', 'NASM'],
            icon: 'FaTerminal',
            links: [
                { name: 'View Code', href: 'https://github.com/yacine20005/TPC' },
            ],
        },
        {
            title: 'Malloc',
            description: 'This university project focuses on implementing custom versions of the standard C library functions malloc and free. It delves into the core mechanisms of dynamic memory allocation.',
            tags: ['C', 'Makefile'],
            icon: 'MdMemory',
            links: [
                { name: 'View Code', href: 'https://github.com/yacine20005/malloc' },
            ],
        },
        {
            title: 'JS Deobfuscation',
            description: 'A reverse engineering case study and workflow analyzing a self-defending browser extension. Implements dynamic string dictionary extraction, AST manipulation in Node.js, and semantic code reconstruction for security audits.',
            tags: ['JavaScript', 'Node.js', 'AST', 'Security'],
            icon: 'FaShieldAlt',
            links: [
                { name: 'View Code', href: 'https://github.com/yacine20005/JavaScript-Deobfuscation' },
            ],
        },
    ],
    viewAllLink: 'https://github.com/yacine20005',
};

export const experienceData: ExperienceData = {
    title: 'experience',
    subtitle: 'My academic journey and professional experiences.',
    experiences: [
        {
            date: 'September 2026 - August 2028',
            title: 'Orange',
            role: 'DevOps & Cloud Automation Engineer (Apprenticeship)',
            description: 'Joined the Technical Directorate (DTOF) in the Cloud Platforms division. Focuses on exploring, integrating, and deploying observability (Prometheus, ELK, OpenTelemetry) and Infrastructure-as-Code solutions for on-premise cloud infrastructure. Responsible for developing automation services in Python/Go, improving GitLab CI/CD pipelines, and integrating AI chatbots to streamline development workflows.',
        },
        {
            date: 'Since June 2023',
            title: 'Freelance & Partner',
            role: 'Freelance Web Engineer & AI Lead (Lunis Consulting)',
            description: 'Full-stack web development specializing in Next.js, React, TypeScript, and Tailwind CSS. Partnered with Lunis Consulting for web development initiatives and leading their AI solutions offer: designing and deploying custom RAG systems, LLM integrations, and intelligent AI agents for enterprise clients.',
            link: {
                text: 'Lunis Consulting',
                href: 'https://lunis.io/'
            }
        },
        {
            date: 'September 2023 - July 2026',
            title: 'Bachelor\'s Degree in Mathematics/Computer Science',
            role: 'Gustave Eiffel University - Champs-sur-Marne',
            description: 'Academic training focused on mathematics and computer science, including projects such as \'Nuage\' - a video game management platform developed with Python/Flask, PostgreSQL and HTML/CSS, as well as \'TPC\' - a compiler for a C-like language targeting x86-64 assembly in C/Flex/Bison.',
        },
        {
            date: 'September 2020 - July 2023',
            title: 'General Baccalaureate',
            role: 'Louis Armand High School - Nogent-sur-Marne',
            description: 'Specializations in mathematics and computer science. With Honors (20/20 in computer science, 15/20 in mathematics).',
        },
    ],
};

export const contactData: ContactData = {
    title: 'contact',
    subtitle: 'Feel free to reach out if you want to collaborate on a project, have a question, or just want to connect.',
    contacts: [
        {
            name: 'Email',
            value: 'ya.hamadouche@gmail.com',
            href: 'mailto:ya.hamadouche@gmail.com',
            buttonText: 'Send Email',
        },
        {
            name: 'GitHub',
            value: 'yacine20005',
            href: 'https://github.com/yacine20005',
            buttonText: 'View Profile',
        },
        {
            name: 'LinkedIn',
            value: 'yacine-hamadouche',
            href: 'https://linkedin.com/in/yacine-hamadouche',
            buttonText: 'Connect',
        },
    ],
};

export const footerData: FooterData = {
    name: 'Yacine._',
    title: 'Computer Science Student & Developer',
    socials: [
        { name: 'Email', href: 'mailto:ya.hamadouche@gmail.com' },
        { name: 'GitHub', href: 'https://github.com/yacine20005' },
        { name: 'LinkedIn', href: 'https://linkedin.com/in/yacine-hamadouche' },
    ],
    copyright: '© {new Date().getFullYear()} Yacine. All rights reserved.',
};

export const featuredProjectsData: FeaturedProjectsData = {
    title: 'featured',
    subtitle: 'Discover my flagship projects, each with its own dedicated showcase.',
    projects: [
        {
            title: 'Spark Love',
            tagline: 'More than an app. Your next conversation.',
            tags: ['React Native', 'Expo', 'TypeScript', 'Supabase'],
            icon: React.createElement(Heart, { className: 'h-7 w-7 text-white' }),
            link: '/spark-love',
            cta: 'Discover Spark Love',
            theme: {
                gradientFrom: 'rgba(251, 207, 232, 0.1)',
                gradientVia: 'rgba(251, 207, 232, 0.05)',
                gradientTo: 'rgba(217, 70, 239, 0.1)',
                textColor: 'rgb(244, 114, 182)',
                descriptionColor: 'rgb(251, 207, 232)',
                accentColor: 'rgba(244, 114, 182, 0.5)',
                border: 'rgba(244, 114, 182, 0.3)',
                iconFrom: 'rgba(244, 114, 182, 0.9)',
                iconTo: 'rgba(217, 70, 239, 0.9)',
                shadowColor: 'rgba(244, 114, 182, 0.4)',
                badgeGradient: 'linear-gradient(135deg, rgb(236, 72, 153), rgb(217, 70, 239))',
                tagBackground: 'rgba(244, 114, 182, 0.15)',
                tagColor: 'rgb(251, 207, 232)',
                tagBorder: 'rgba(244, 114, 182, 0.3)',
                buttonFrom: 'rgba(244, 114, 182, 0.9)',
                buttonTo: 'rgba(217, 70, 239, 0.9)',
            },
        },
        {
            title: 'Orbit Market',
            tagline: 'Check what your favorite vendors have in stock on the go.',
            tags: ['React Native', 'Expo', 'FastAPI', 'Python', 'Docker'],
            icon: React.createElement(GiMoonOrbit, { className: 'h-7 w-7 text-white' }),
            link: '/orbit-market',
            cta: 'Discover Orbit Market',
            theme: {
                gradientFrom: 'rgba(147, 197, 253, 0.1)',
                gradientVia: 'rgba(147, 197, 253, 0.05)',
                gradientTo: 'rgba(34, 211, 238, 0.1)',
                textColor: 'rgb(96, 165, 250)',
                descriptionColor: 'rgb(191, 219, 254)',
                accentColor: 'rgba(96, 165, 250, 0.5)',
                border: 'rgba(96, 165, 250, 0.3)',
                iconFrom: 'rgba(59, 130, 246, 0.9)',
                iconTo: 'rgba(34, 211, 238, 0.9)',
                shadowColor: 'rgba(59, 130, 246, 0.4)',
                tagBackground: 'rgba(96, 165, 250, 0.15)',
                tagColor: 'rgb(191, 219, 254)',
                tagBorder: 'rgba(96, 165, 250, 0.3)',
                buttonFrom: 'rgba(59, 130, 246, 0.9)',
                buttonTo: 'rgba(34, 211, 238, 0.9)',
            },
        },
        {
            title: 'Cobble Coach',
            tagline: 'Your personal LoL coach, powered by AI inside Discord.',
            tags: ['Python', 'discord.py', 'Riot API', 'Gemini'],
            icon: React.createElement(Bot, { className: 'h-7 w-7 text-white' }),
            link: '/cobble-coach',
            cta: 'Discover Cobble Coach',
            theme: {
                gradientFrom: 'rgba(254, 226, 226, 0.1)',
                gradientVia: 'rgba(254, 226, 226, 0.05)',
                gradientTo: 'rgba(220, 38, 38, 0.1)',
                textColor: 'rgb(239, 68, 68)',
                descriptionColor: 'rgb(254, 226, 226)',
                accentColor: 'rgba(239, 68, 68, 0.5)',
                border: 'rgba(239, 68, 68, 0.3)',
                iconFrom: 'rgba(239, 68, 68, 0.9)',
                iconTo: 'rgba(220, 38, 38, 0.9)',
                shadowColor: 'rgba(239, 68, 68, 0.4)',
                badgeGradient: 'linear-gradient(135deg, rgb(239, 68, 68), rgb(220, 38, 38))',
                tagBackground: 'rgba(239, 68, 68, 0.15)',
                tagColor: 'rgb(254, 226, 226)',
                tagBorder: 'rgba(239, 68, 68, 0.3)',
                buttonFrom: 'rgba(239, 68, 68, 0.9)',
                buttonTo: 'rgba(220, 38, 38, 0.9)',
            },
        },
        {
            title: 'Backpack Hero',
            tagline: 'Inventory management meets strategic roguelike dungeon crawling.',
            tags: ['Java', 'Zen5 Graphics', 'MVC', 'OOP Design'],
            icon: React.createElement(Backpack, { className: 'h-7 w-7 text-white' }),
            link: '/backpack-hero',
            cta: 'Discover Backpack Hero',
            theme: {
                gradientFrom: 'rgba(252, 211, 77, 0.1)',
                gradientVia: 'rgba(252, 211, 77, 0.05)',
                gradientTo: 'rgba(245, 158, 11, 0.1)',
                textColor: 'rgb(245, 158, 11)',
                descriptionColor: 'rgb(253, 230, 138)',
                accentColor: 'rgba(245, 158, 11, 0.5)',
                border: 'rgba(245, 158, 11, 0.3)',
                iconFrom: 'rgba(251, 191, 36, 0.9)',
                iconTo: 'rgba(217, 119, 6, 0.9)',
                shadowColor: 'rgba(245, 158, 11, 0.4)',
                tagBackground: 'rgba(245, 158, 11, 0.15)',
                tagColor: 'rgb(253, 230, 138)',
                tagBorder: 'rgba(245, 158, 11, 0.3)',
                buttonFrom: 'rgba(251, 191, 36, 0.9)',
                buttonTo: 'rgba(217, 119, 6, 0.9)',
            },
        },
    ],
};

export const websitesData: WebsitesData = {
    title: '// websites 💻',
    subtitle: 'Production websites designed and developed for clients.',
    projects: [
        {
            title: 'Georges Geneyne',
            description: 'High-end showcase website built for Georges Geneyne, a specialist in premium aluminum joinery (windows, doors, bioclimatic pergolas) and concrete pools in Guadeloupe. Features clean typography, service catalogs, and direct WhatsApp contact support.',
            tags: ['Next.js', 'Tailwind CSS', 'SEO Optimization', 'Direct WhatsApp'],
            imagePath: '/websites/georgesgeneyne.png',
            link: 'https://georgesgeneyne.com/'
        },
        {
            title: 'Kreyol Wakanda',
            description: "An immersive digital universe and movement designed for Lionel Coezy's Kreyol Wakanda. Serving as a 'Noosphere' showcasing personal/professional coaching, digital portals, and cultural artifacts, it features custom animations and premium typographic styling.",
            tags: ['Next.js', 'Tailwind CSS', 'Immersive Design', 'Interactive Canvas'],
            imagePath: '/websites/kreyolwakanda.png',
            link: 'https://palevioletred-lobster-286010.hostingersite.com/'
        }
    ]
};