/**
 * Traductions FR/EN — uniquement les strings qui changent selon la langue.
 * Les données statiques (thèmes, icônes, URLs, tags techniques) sont dans static-data.ts.
 */
import type { NavLink, AboutData, SkillsData, ProjectsData, ExperienceData, ContactData, FooterData, FeaturedProjectsData, WebsitesData } from './types';
import {
  NAV_IDS,
  SKILLS_LIST,
  PROJECTS_STATIC,
  PROJECTS_VIEW_ALL_LINK,
  EXPERIENCE_DATES,
  CONTACT_INFO,
  FEATURED_PROJECTS_STATIC,
  WEBSITES_STATIC,
} from './static-data';

export interface TranslationDictionary {
  navLinks: NavLink[];
  aboutData: AboutData;
  skillsData: SkillsData;
  projectsData: ProjectsData;
  experienceData: ExperienceData;
  contactData: ContactData;
  footerData: FooterData;
  featuredProjectsData: FeaturedProjectsData;
  websitesData: WebsitesData;
}

export const translations: Record<'fr' | 'en', TranslationDictionary> = {
  fr: {
    navLinks: [
      { name: 'À propos',    href: `#${NAV_IDS[0]}`, id: NAV_IDS[0] },
      { name: 'Compétences', href: `#${NAV_IDS[1]}`, id: NAV_IDS[1] },
      { name: 'Sélection',   href: `#${NAV_IDS[2]}`, id: NAV_IDS[2] },
      { name: 'Sites Web',   href: `#${NAV_IDS[3]}`, id: NAV_IDS[3] },
      { name: 'Projets',     href: `#${NAV_IDS[4]}`, id: NAV_IDS[4] },
      { name: 'Parcours',    href: `#${NAV_IDS[5]}`, id: NAV_IDS[5] },
      { name: 'Contact',     href: `#${NAV_IDS[6]}`, id: NAV_IDS[6] },
    ],
    aboutData: {
      title: 'à propos',
      paragraphs: [
        "Ce qui a commencé par de la curiosité est rapidement devenu une obsession. J'apprécie particulièrement la résolution de problèmes et cette satisfaction ultime lorsque tout fonctionne comme prévu après des heures de travail (encore plus quand c'est du premier coup).",
        "De la création de jeux de stratégie en C au développement de sites web pour de vrais clients, j'ai touché à un peu de tout. Chaque projet m'a appris quelque chose de nouveau, qu'il s'agisse de lutter avec l'allocation de mémoire ou de comprendre comment rendre un design impeccable sur mobile.",
        "Si vous recherchez quelqu'un de motivé, curieux, et que vous avez du café, je suis votre homme.",
      ],
    },
    skillsData: {
      title: 'compétences',
      categories: [
        { name: 'Langages & Frameworks',  skills: [...SKILLS_LIST.languages] },
        { name: 'Cloud & Infrastructure', skills: [...SKILLS_LIST.cloud] },
        { name: 'Outils & Bibliothèques', skills: [...SKILLS_LIST.tools] },
      ],
    },
    projectsData: {
      title: 'projets',
      projects: [
        {
          title: PROJECTS_STATIC[0].title, tags: PROJECTS_STATIC[0].tags,
          description: "Une plateforme de gestion de jeux vidéo qui permet aux utilisateurs de parcourir, acheter, partager et commenter des jeux, gérer des profils d'utilisateurs, ajouter des amis et suivre les succès.",
          links: [
            { name: 'Code Source', href: PROJECTS_STATIC[0].githubHref },
            ...(PROJECTS_STATIC[0].liveHref ? [{ name: 'Démo Live', href: PROJECTS_STATIC[0].liveHref }] : []),
          ],
        },
        {
          title: PROJECTS_STATIC[1].title, tags: PROJECTS_STATIC[1].tags,
          description: "Une étude de cas en ingénierie inverse analysant une extension de navigateur auto-défensive. Implémente l'extraction de dictionnaires de chaînes de caractères dynamiques, la manipulation d'AST sous Node.js et la reconstruction de code sémantique.",
          links: [{ name: 'Code Source', href: PROJECTS_STATIC[1].githubHref }],
        },
        {
          title: PROJECTS_STATIC[2].title, tags: PROJECTS_STATIC[2].tags,
          description: "Un outil d'analyse dynamique de mémoire pour le langage C compilé en bibliothèque partagée (.so). Intercepte les appels à malloc, calloc, realloc et free dès la compilation pour détecter les fuites mémoire et les double free avec un rapport détaillé par fichier et ligne.",
          links: [{ name: 'Code Source', href: PROJECTS_STATIC[2].githubHref }],
        },
        {
          title: PROJECTS_STATIC[3].title, tags: PROJECTS_STATIC[3].tags,
          description: "Un moniteur passif de disponibilité de billetterie en TypeScript et Playwright. Combine des fenêtres d'observation à faible concurrence, un jitter gaussien de Box-Muller, un coupe-circuit automatique (Safety Lock) en cas de restriction HTTP et des alertes Discord instantanées.",
          links: [{ name: 'Code Source', href: PROJECTS_STATIC[3].githubHref }],
        },
      ],
      viewAllLink: PROJECTS_VIEW_ALL_LINK,
    },
    experienceData: {
      title: 'parcours',
      experiences: [
        {
          date: EXPERIENCE_DATES[0],
          title: 'Orange',
          role: 'Ingénieur DevOps & Cloud Automation (Apprentissage)',
          description: "Intégration de la Direction Technique (DTOF) dans la division Cloud Platforms. Chargé de l'exploration, l'intégration et le déploiement de solutions d'observabilité (Prometheus, ELK, OpenTelemetry) et d'Infrastructure-as-Code pour l'infrastructure cloud privée. Responsable du développement de services d'automatisation en Python/Go, de l'amélioration des pipelines GitLab CI/CD, et de l'intégration d'agents conversationnels IA pour fluidifier les workflows de développement.",
        },
        {
          date: EXPERIENCE_DATES[1],
          title: 'Master Cybersécurité & Sciences des Données (CSSD)',
          role: 'Université Paris 8',
          description: "Formation de Master en informatique alliant sécurité des systèmes, cryptographie, analyse de vulnérabilités, ingénierie des données et apprentissage automatique (Machine Learning & Deep Learning), suivie en alternance chez Orange.",
        },
        {
          date: EXPERIENCE_DATES[2],
          title: 'Freelance & Partenaire',
          role: 'Freelance Web Engineer',
          description: 'Développement web full-stack spécialisé en Next.js, React, TypeScript et Tailwind CSS. Conception et réalisation de sites internet pour des clients.',
        },
        {
          date: EXPERIENCE_DATES[3],
          title: "Licence d'Informatique & Mathématiques",
          role: 'Université Gustave Eiffel',
          description: "Formation académique axée sur les mathématiques et l'informatique, incluant la programmation système en C, l'algorithmique avancée, les structures de données, la compilation (compilateur C vers assembleur x86-64 en Flex/Bison) et le développement web (Python/Flask, PostgreSQL) et orienté objet (Java).",
        },
        {
          date: EXPERIENCE_DATES[4],
          title: 'Baccalauréat Général',
          role: 'Lycée Louis Armand',
          description: 'Spécialités mathématiques et sciences informatiques. Mention Très Bien (20/20 en informatique, 15/20 en mathématiques).',
        },
      ],
    },
    contactData: {
      title: 'contact',
      subtitle: "N'hésitez pas à me contacter si vous souhaitez collaborer sur un projet, poser une question ou simplement échanger.",
      contacts: [
        { name: 'Email',    ...CONTACT_INFO.email,    buttonText: 'Envoyer un Email' },
        { name: 'GitHub',   ...CONTACT_INFO.github,   buttonText: 'Voir le profil' },
        { name: 'LinkedIn', ...CONTACT_INFO.linkedin, buttonText: 'Se connecter' },
      ],
    },
    footerData: {
      name: 'Yacine._',
      title: 'Étudiant en Informatique & Développeur',
      copyright: '© {year} Yacine. Tous droits réservés.',
    },
    featuredProjectsData: {
      title: 'sélection',
      projects: [
        { ...FEATURED_PROJECTS_STATIC[0], tagline: "Intégrez un chatbot RAG temps réel sur n'importe quel site web en une seule ligne de code." },
        { ...FEATURED_PROJECTS_STATIC[1], tagline: "L'application mobile & web (iPhone, Android) pour les couples : une question par jour, 100 quiz et des idées de sorties à matcher à deux." },
        { ...FEATURED_PROJECTS_STATIC[2], tagline: "Consultez l'inventaire de vos marchands préférés en déplacement." },
        { ...FEATURED_PROJECTS_STATIC[3], tagline: "Votre coach LoL personnel, propulsé par l'IA dans Discord." },
        { ...FEATURED_PROJECTS_STATIC[4], tagline: "Rangement d'inventaire stratégique et roguelike d'exploration de donjons." },
      ],
    },
    websitesData: {
      title: 'Sites Web',
      projects: [
        {
          ...WEBSITES_STATIC[0],
          description: "Site vitrine pour Georges Geneyne, spécialiste de la menuiserie aluminium et des piscines béton en Guadeloupe. Il présente les services et permet une prise de contact directe via WhatsApp.",
        },
        {
          ...WEBSITES_STATIC[1],
          description: "Site de présentation conçu pour Kreyol Wakanda de Lionel Coezy. Il réunit les contenus de coaching, les portails numériques et les artefacts culturels du projet.",
        },
      ],
    },
  },

  en: {
    navLinks: [
      { name: 'About',      href: `#${NAV_IDS[0]}`, id: NAV_IDS[0] },
      { name: 'Skills',     href: `#${NAV_IDS[1]}`, id: NAV_IDS[1] },
      { name: 'Featured',   href: `#${NAV_IDS[2]}`, id: NAV_IDS[2] },
      { name: 'Websites',   href: `#${NAV_IDS[3]}`, id: NAV_IDS[3] },
      { name: 'Projects',   href: `#${NAV_IDS[4]}`, id: NAV_IDS[4] },
      { name: 'Experience', href: `#${NAV_IDS[5]}`, id: NAV_IDS[5] },
      { name: 'Contact',    href: `#${NAV_IDS[6]}`, id: NAV_IDS[6] },
    ],
    aboutData: {
      title: 'about',
      paragraphs: [
        "What started with curiosity quickly became an obsession. I genuinely enjoy the problem-solving aspect and that ultimate satisfaction when everything works as intended after hours of work (more when it's on the first try).",
        "From building strategy games in C to crafting websites for real clients, I've tried a bit of everything. Each project taught me something new, whether it was wrestling with memory allocation or figuring out how to make a design look good on mobile.",
        "If you're looking for someone motivated, curious, and have coffee for me, i'm your guy.",
      ],
    },
    skillsData: {
      title: 'skills',
      categories: [
        { name: 'Programming Languages and Frameworks', skills: [...SKILLS_LIST.languages] },
        { name: 'Cloud & Infrastructure',               skills: [...SKILLS_LIST.cloud] },
        { name: 'Tools & Libraries',                    skills: [...SKILLS_LIST.tools] },
      ],
    },
    projectsData: {
      title: 'projects',
      projects: [
        {
          title: PROJECTS_STATIC[0].title, tags: PROJECTS_STATIC[0].tags,
          description: 'A video game management platform that allows users to browse, purchase, share, and comment on games, manage user profiles, add friends, and track game achievements.',
          links: [
            { name: 'View Code', href: PROJECTS_STATIC[0].githubHref },
            ...(PROJECTS_STATIC[0].liveHref ? [{ name: 'Live Demo', href: PROJECTS_STATIC[0].liveHref }] : []),
          ],
        },
        {
          title: PROJECTS_STATIC[1].title, tags: PROJECTS_STATIC[1].tags,
          description: 'A reverse engineering case study and workflow analyzing a self-defending browser extension. Implements dynamic string dictionary extraction, AST manipulation in Node.js, and semantic code reconstruction for security audits.',
          links: [{ name: 'View Code', href: PROJECTS_STATIC[1].githubHref }],
        },
        {
          title: PROJECTS_STATIC[2].title, tags: PROJECTS_STATIC[2].tags,
          description: 'A dynamic memory analysis tool for C built as a shared library (.so). Patches malloc, calloc, realloc, and free at compile-time to detect memory leaks, double frees, and invalid pointers with per-file and per-line reporting.',
          links: [{ name: 'View Code', href: PROJECTS_STATIC[2].githubHref }],
        },
        {
          title: PROJECTS_STATIC[3].title, tags: PROJECTS_STATIC[3].tags,
          description: 'A passive, read-only ticket availability monitor built with TypeScript and Playwright. Combines low-competition check windows, Box-Muller Gaussian schedule jitter, an automatic HTTP Safety Lock, and instant Discord notifications.',
          links: [{ name: 'View Code', href: PROJECTS_STATIC[3].githubHref }],
        },
      ],
      viewAllLink: PROJECTS_VIEW_ALL_LINK,
    },
    experienceData: {
      title: 'experience',
      experiences: [
        {
          date: EXPERIENCE_DATES[0],
          title: 'Orange',
          role: 'DevOps & Cloud Automation Engineer (Apprenticeship)',
          description: 'Joined the Technical Directorate (DTOF) in the Cloud Platforms division. Focuses on exploring, integrating, and deploying observability (Prometheus, ELK, OpenTelemetry) and Infrastructure-as-Code solutions for on-premise cloud infrastructure. Responsible for developing automation services in Python/Go, improving GitLab CI/CD pipelines, and integrating AI chatbots to streamline development workflows.',
        },
        {
          date: EXPERIENCE_DATES[1],
          title: "Master's Degree in Cybersecurity & Data Science (CSSD)",
          role: 'Paris 8 University',
          description: "Graduate computer science program combining systems security, cryptography, vulnerability analysis, data engineering, and machine learning / deep learning, pursued as a work-study apprenticeship at Orange.",
        },
        {
          date: EXPERIENCE_DATES[2],
          title: 'Freelance & Partner',
          role: 'Freelance Web Engineer',
          description: 'Full-stack web development specializing in Next.js, React, TypeScript, and Tailwind CSS. Designed and built websites for clients.',
        },
        {
          date: EXPERIENCE_DATES[3],
          title: "Bachelor's Degree in Mathematics & Computer Science",
          role: 'Gustave Eiffel University',
          description: "Academic training focused on mathematics and computer science, covering C systems programming, advanced algorithms, data structures, compiler construction (x86-64 assembly compiler in C/Flex/Bison), web development (Python/Flask, PostgreSQL), and OOP software architecture (Java).",
        },
        {
          date: EXPERIENCE_DATES[4],
          title: 'General Baccalaureate',
          role: 'Louis Armand High School',
          description: 'Specializations in mathematics and computer science. With Honors (20/20 in computer science, 15/20 in mathematics).',
        },
      ],
    },
    contactData: {
      title: 'contact',
      subtitle: "Feel free to reach out if you want to collaborate on a project, have a question, or just want to connect.",
      contacts: [
        { name: 'Email',    ...CONTACT_INFO.email,    buttonText: 'Send Email' },
        { name: 'GitHub',   ...CONTACT_INFO.github,   buttonText: 'View Profile' },
        { name: 'LinkedIn', ...CONTACT_INFO.linkedin, buttonText: 'Connect' },
      ],
    },
    footerData: {
      name: 'Yacine._',
      title: 'Computer Science Student & Developer',
      copyright: '© {year} Yacine. All rights reserved.',
    },
    featuredProjectsData: {
      title: 'featured',
      projects: [
        { ...FEATURED_PROJECTS_STATIC[0], tagline: 'Integrate a real-time RAG chatbot on any website with a single line of code.' },
        { ...FEATURED_PROJECTS_STATIC[1], tagline: 'The mobile & web app (iPhone, Android) for couples: a daily question, 100 quizzes, and date or movie ideas to match together.' },
        { ...FEATURED_PROJECTS_STATIC[2], tagline: 'Check what your favorite vendors have in stock on the go.' },
        { ...FEATURED_PROJECTS_STATIC[3], tagline: 'Your personal LoL coach, powered by AI inside Discord.' },
        { ...FEATURED_PROJECTS_STATIC[4], tagline: 'Inventory management meets strategic roguelike dungeon crawling.' },
      ],
    },
    websitesData: {
      title: 'Websites',
      projects: [
        {
          ...WEBSITES_STATIC[0],
          description: 'Showcase website for Georges Geneyne, a specialist in aluminum joinery and concrete pools in Guadeloupe. It presents the services and offers direct contact through WhatsApp.',
        },
        {
          ...WEBSITES_STATIC[1],
          description: "Presentation website for Lionel Coezy's Kreyol Wakanda. It brings together the project's coaching content, digital portals, and cultural artefacts.",
        },
      ],
    },
  },
};
