import { NavLink, HeroData, AboutData, SkillsData, ProjectsData, ExperienceData, ContactData, FooterData, FeaturedProjectsData } from './types';
import { Heart, Globe, Cloud, Backpack } from 'lucide-react';
import { GiMoonOrbit } from "react-icons/gi";
import { RiHeartsFill } from "react-icons/ri";
import React from 'react';

export const navLinks: NavLink[] = [
    { name: '// about 👨‍💻', href: '#about', id: 'about' },
    { name: '// skills 🛠️', href: '#skills', id: 'skills' },
    { name: '// featured ⭐', href: '#featured', id: 'featured' },
    { name: '// projects 📁', href: '#projects', id: 'projects' },
    { name: '// experience 👨‍💼', href: '#experience', id: 'experience' },
    { name: '// contact 📞', href: '#contact', id: 'contact' },
];

export const heroData: HeroData = {
    name: 'YACINE',
    title: 'COMPUTER SCIENCE STUDENT & DEVELOPER.',
    description: 'Hi! I\'m Yacine, currently studying Computer Science at Gustave Eiffel University 🎓 where I turn coffee ☕ into code (and sometimes into bugs).',
    cta: {
        projects: { text: 'View Projects', href: '#projects' },
        contact: { text: 'Get in Touch', href: '#contact' },
        cv: { text: 'Download CV', href: '/documents/CV.pdf' },
    },
};

export const aboutData: AboutData = {
    title: '// about 👨‍💻',
    subtitle: 'A bit more about who I am and what I\'m looking for.',
    paragraphs: [
        'What started with curiosity quickly became an obsession. I genuinely enjoy the problem-solving aspect and that ultimate satisfaction when everything works as intended after hours of work (more when it\'s on the first try).',
        'From building strategy games in C to crafting websites for real clients, I\'ve tried a bit of everything. Each project taught me something new, whether it was wrestling with memory allocation or figuring out how to make a design look good on mobile.',
        'Right now, I\'m looking for an apprenticeship where I can learn from experienced developers, contribute to meaningful projects, and keep growing my skills. I work well in teams, I\'m not afraid to ask questions, and I actually read documentation !!!.',
        'If you\'re looking for someone motivated, curious, and ready to dive into new challenges, i\'m your guy.',
    ],
};

export const skillsData: SkillsData = {
    title: '// skills 🛠️',
    subtitle: 'Here are some of the technologies and tools I\'ve been working with during my studies and personal projects.',
    categories: [
        {
            name: 'Programming Languages and Frameworks',
            skills: ['Python', 'Flask', 'FastAPI', 'C', 'HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Expo', 'Bash', 'LaTeX', 'Java'],
        },
        {
            name: 'Cloud & Infrastructure',
            skills: ['Google Cloud', 'PostgreSQL', 'SQLite', 'Vercel', 'DigitalOcean', 'Supabase'],
        },
        {
            name: 'Tools & Libraries',
            skills: ['Git / GitHub', 'Docker', 'Matplotlib', 'NumPy', 'Ncurses', 'MLV Library', 'Sanity CMS'],
        },
    ],
};

export const projectsData: ProjectsData = {
    title: '// projects 📁',
    subtitle: 'A selection of projects I\'ve worked on during my academic journey and in my free time.',
    projects: [
        {
            title: 'Aogiri Website',
            description: 'A responsive website built with Next.js and Tailwind CSS to present the Aogiri association, its activities and its contributions to the community of multiple video games.',
            tags: ['Next.js', 'Tailwind CSS', 'TypeScript'],
            icon: 'FaGamepad',
            links: [
                { name: 'Live Demo', href: 'https://aogirihouse-yacine20005s.vercel.app/' },
            ],
        },
        {
            title: 'Chomp',
            description: 'Chomp is a strategy game for two players. The game is played on a rectangular bar made up of chocolate squares. The aim of the game is to avoid taking the poisoned chocolate square at the top left of the bar.',
            tags: ['C', 'Ncurses', 'Makefile'],
            icon: 'FaChessBoard',
            links: [
                { name: 'View Code', href: 'https://github.com/yacine20005/Chomp' },
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
            title: 'Racetrack',
            description: 'Racetrack is a Python-based game where players navigate a pawn across a board, avoiding obstacles to reach the finish line. This project showcases various play modes and includes a sophisticated solver.',
            tags: ['Python', 'FLTK', 'Pillow'],
            icon: 'GiF1Car',
            links: [
                { name: 'View Code', href: 'https://github.com/yacine20005/racetrack' },
            ],
        },
    ],
    viewAllLink: 'https://github.com/yacine20005',
};

export const experienceData: ExperienceData = {
    title: '// experience 👨‍💼',
    subtitle: 'My academic journey and professional experiences.',
    experiences: [
        {
            date: 'Since June 2023',
            title: 'Self-employed',
            role: 'Freelancer',
            description: 'Development and deployment of websites for associations and businesses, including \'Aogiri\' - a website for an esports association using Next.js, TypeScript, Tailwind CSS and Sanity CMS. Client needs analysis, proposal of technical solutions and client prospecting management.',
        },
        {
            date: 'Since September 2023',
            title: 'Bachelor\'s Degree in Mathematics/Computer Science',
            role: 'Gustave Eiffel University - Champs-sur-Marne',
            description: 'Academic training focused on mathematics and computer science, including projects such as \'Nuage\' - a video game management platform developed with Python/Flask, PostgreSQL and HTML/CSS, as well as \'Chomp\' - a strategy game in C using the Ncurses library.',
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
    title: '// contact 📞',
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
    title: '// featured ⭐',
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
            title: 'Nuage',
            tagline: 'Like Steam, but better (obviously).',
            tags: ['Python', 'Flask', 'PostgreSQL', 'HTML', 'CSS'],
            icon: React.createElement(Cloud, { className: 'h-7 w-7 text-white' }),
            link: '/nuage',
            cta: 'Explore Nuage',
            theme: {
                gradientFrom: 'rgba(192, 132, 252, 0.1)',
                gradientVia: 'rgba(167, 139, 250, 0.05)',
                gradientTo: 'rgba(147, 197, 253, 0.1)',
                textColor: 'rgb(168, 85, 247)',
                descriptionColor: 'rgb(216, 180, 254)',
                accentColor: 'rgba(168, 85, 247, 0.5)',
                border: 'rgba(168, 85, 247, 0.3)',
                iconFrom: 'rgba(139, 92, 246, 0.9)',
                iconTo: 'rgba(99, 102, 241, 0.9)',
                shadowColor: 'rgba(139, 92, 246, 0.4)',
                tagBackground: 'rgba(168, 85, 247, 0.15)',
                tagColor: 'rgb(216, 180, 254)',
                tagBorder: 'rgba(168, 85, 247, 0.3)',
                buttonFrom: 'rgba(139, 92, 246, 0.9)',
                buttonTo: 'rgba(99, 102, 241, 0.9)',
            },
        },
        {
            title: 'Backpack Hero',
            tagline: 'How far can you go with just a backpack ?',
            tags: ['Java', 'Zen'],
            icon: React.createElement(Backpack, { className: 'h-7 w-7 text-white' }),
            link: '#',
            cta: 'Coming Soon',
            theme: {
                gradientFrom: 'rgba(254, 202, 202, 0.1)',
                gradientVia: 'rgba(252, 165, 165, 0.05)',
                gradientTo: 'rgba(248, 113, 113, 0.1)',
                textColor: 'rgb(239, 68, 68)',
                descriptionColor: 'rgb(254, 202, 202)',
                accentColor: 'rgba(239, 68, 68, 0.5)',
                border: 'rgba(239, 68, 68, 0.3)',
                iconFrom: 'rgba(220, 38, 38, 0.9)',
                iconTo: 'rgba(239, 68, 68, 0.9)',
                shadowColor: 'rgba(220, 38, 38, 0.4)',
                tagBackground: 'rgba(239, 68, 68, 0.15)',
                tagColor: 'rgb(254, 202, 202)',
                tagBorder: 'rgba(239, 68, 68, 0.3)',
                buttonFrom: 'rgba(220, 38, 38, 0.9)',
                buttonTo: 'rgba(239, 68, 68, 0.9)',
            },
        },
    ],
};