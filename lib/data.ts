import { NavLink, HeroData, AboutData, SkillsData, ProjectsData, ExperienceData, ContactData, FooterData } from './types';

export const navLinks: NavLink[] = [
    { name: '// home', href: '#home', id: 'home' },
    { name: '// about', href: '#about', id: 'about' },
    { name: '// skills', href: '#skills', id: 'skills' },
    { name: '// projects', href: '#projects', id: 'projects' },
    { name: '// experience', href: '#experience', id: 'experience' },
    { name: '// contact', href: '#contact', id: 'contact' },
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
    title: '// about me',
    subtitle: 'A bit more about who I am and what I\'m looking for.',
    paragraphs: [
        'I work on various projects, whether personal or academic, which allow me to put my skills into practice and sometimes explore new technologies 🔍.',
        'Feel free to check out my repositories to discover my achievements and collaborations 🤝.',
        'I am looking for opportunities to take on new challenges and collaborate on innovative projects 💡.',
        'My goal is to perfect my programming skills.',
    ],
};

export const skillsData: SkillsData = {
    title: '// skills',
    subtitle: 'Here are some of the technologies and tools I\'ve been working with during my studies and personal projects.',
    categories: [
        {
            name: 'Programming Languages',
            skills: ['Python', 'Flask', 'C', 'HTML / CSS', 'JavaScript / TypeScript', 'React / Next.js', 'Bash', 'LaTeX'],
        },
        {
            name: 'Cloud & Infrastructure',
            skills: ['Google Cloud', 'PostgreSQL', 'Vercel', 'DigitalOcean'],
        },
        {
            name: 'Tools & Libraries',
            skills: ['Git / GitHub', 'Matplotlib', 'NumPy', 'Ncurses', 'MLV Library', 'Sanity CMS'],
        },
    ],
};

export const projectsData: ProjectsData = {
    title: '// projects',
    subtitle: 'A selection of projects I\'ve worked on during my academic journey and in my free time.',
    projects: [
        {
            title: 'Personal Portfolio Website',
            description: 'A responsive portfolio website built with Next.js and Tailwind CSS to showcase my projects and skills.',
            tags: ['Next.js', 'Tailwind CSS', 'TypeScript'],
            icon: 'FaFolder',
            links: [
                { name: 'View Code', href: 'https://github.com/yacine20005/Portfolio' },
                { name: 'Live Demo', href: 'https://yacine-hamadouche.me' },
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
    title: '// experience',
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
    title: '// contact',
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