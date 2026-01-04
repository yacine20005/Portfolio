import { NavLink, HeroData, AboutData, SkillsData, ProjectsData, ExperienceData, ContactData, FooterData, FeaturedProjectsData } from './types';
import { Heart, Globe } from 'lucide-react';
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
        'My passion for computer science is about turning coffee ☕ into functional and creative code 💻.',
        'Whether developing a strategy game in C or designing websites for clients, I love exploring every facet of development 👀.',
        'My projects allow me to combine technical rigor and creativity to bring ideas to life ✨.',
        'I am now looking to bring this energy to a company as a work-study (apprenticeship) developer 👨‍💻, where I can continue to learn, collaborate, and build applications that have a real impact 🚀.',
    ],
};

export const skillsData: SkillsData = {
    title: '// skills 🛠️',
    subtitle: 'Here are some of the technologies and tools I\'ve been working with during my studies and personal projects.',
    categories: [
        {
            name: 'Programming Languages and Frameworks',
            skills: ['Python', 'Flask', 'FastAPI', 'C', 'HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Expo', 'Bash', 'LaTeX'],
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
            title: 'Personal Portfolio Website',
            description: 'A fully responsive and modern portfolio website designed to showcase my projects, skills, and professional journey. Built with Next.js and Tailwind CSS, it features smooth navigation, and a clean professional aesthetic.',
            tags: ['Next.js', 'Tailwind CSS', 'TypeScript'],
            icon: 'FaFolder',
            links: [
                { name: 'View Code', href: 'https://github.com/yacine20005/Portfolio' }
            ],
        },
        {
            title: 'Nuage',
            description: 'Nuage is a full-stack web-based video game management application. It enables users to view, buy, share and comment on video games. Users can also manage their profile, add friends and track their successes.',
            tags: ['HTML', 'CSS', 'Python', 'Flask', 'PostgreSQL'],
            icon: 'FaCloud',
            links: [
                { name: 'View Code', href: 'https://github.com/yacine20005/Nuage' },
                { name: 'Live Demo', href: 'https://nuage-sigma.vercel.app/boutique' },
            ],
        },
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
            cta: 'Explore Orbit Market',
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
    ],
};