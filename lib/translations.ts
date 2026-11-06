/**
 * Traductions FR/EN — uniquement les strings qui changent selon la langue.
 * Les données statiques (thèmes, icônes, URLs, tags techniques) sont dans static-data.ts.
 */
import type { NavLink, HeroData, AboutData, SkillsData, ProjectsData, ExperienceData, ContactData, FooterData, FeaturedProjectsData, WebsitesData } from './types';
import {
  NAV_IDS,
  HERO_CTA_HREFS,
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
  heroData: HeroData;
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
    heroData: {
      name: 'YACINE',
      title: 'ÉTUDIANT EN INFORMATIQUE & DÉVELOPPEUR.',
      description: "Étudiant en Master d'Informatique à l'Université Gustave Eiffel et ingénieur DevOps & Cloud en alternance chez Orange.",
      cta: {
        projects: { text: 'Voir les projets', href: HERO_CTA_HREFS.projects },
        contact:  { text: 'Me contacter',     href: HERO_CTA_HREFS.contact },
      },
    },
    aboutData: {
      title: 'à propos',
      subtitle: 'Un peu plus sur qui je suis et ce que je recherche.',
      paragraphs: [
        "Ce qui a commencé par de la curiosité est rapidement devenu une obsession. J'apprécie particulièrement la résolution de problèmes et cette satisfaction ultime lorsque tout fonctionne comme prévu après des heures de travail (encore plus quand c'est du premier coup).",
        "De la création de jeux de stratégie en C au développement de sites web pour de vrais clients, j'ai touché à un peu de tout. Chaque projet m'a appris quelque chose de nouveau, qu'il s'agisse de lutter avec l'allocation de mémoire ou de comprendre comment rendre un design impeccable sur mobile.",
        "Si vous recherchez quelqu'un de motivé, curieux, et que vous avez du café, je suis votre homme.",
      ],
    },
    skillsData: {
      title: 'compétences',
      subtitle: "Voici quelques-unes des technologies et outils avec lesquels j'ai travaillé durant mes études et mes projets personnels.",
      categories: [
        { name: 'Langages & Frameworks',    skills: [...SKILLS_LIST.languages] },
        { name: 'Cloud & Infrastructure',   skills: [...SKILLS_LIST.cloud] },
        { name: 'Outils & Bibliothèques',   skills: [...SKILLS_LIST.tools] },
      ],
    },
    projectsData: {
      title: 'projets',
      subtitle: 'Une sélection de projets réalisés durant mon parcours universitaire et sur mon temps libre.',
      projects: [
        {
          title: PROJECTS_STATIC[0].title, tags: PROJECTS_STATIC[0].tags, icon: PROJECTS_STATIC[0].icon,
          description: "Une plateforme de gestion de jeux vidéo qui permet aux utilisateurs de parcourir, acheter, partager et commenter des jeux, gérer des profils d'utilisateurs, ajouter des amis et suivre les succès.",
          links: PROJECTS_STATIC[0].linkHrefs.map(href => ({ name: 'Code Source', href })),
        },
        {
          title: PROJECTS_STATIC[1].title, tags: PROJECTS_STATIC[1].tags, icon: PROJECTS_STATIC[1].icon,
          description: "Un compilateur pour le TPC, un mini-langage de type C ciblant l'assembleur x86-64 NASM. Implémente l'analyse lexicale, syntaxique, la génération d'arbre, le contrôle sémantique et la génération de code.",
          links: PROJECTS_STATIC[1].linkHrefs.map(href => ({ name: 'Code Source', href })),
        },
        {
          title: PROJECTS_STATIC[2].title, tags: PROJECTS_STATIC[2].tags, icon: PROJECTS_STATIC[2].icon,
          description: "Ce projet universitaire se concentre sur l'implémentation de versions personnalisées des fonctions malloc et free de la bibliothèque C standard. Il plonge au cœur des mécanismes de l'allocation dynamique de mémoire.",
          links: PROJECTS_STATIC[2].linkHrefs.map(href => ({ name: 'Code Source', href })),
        },
        {
          title: PROJECTS_STATIC[3].title, tags: PROJECTS_STATIC[3].tags, icon: PROJECTS_STATIC[3].icon,
          description: "Une étude de cas en ingénierie inverse analysant une extension de navigateur auto-défensive. Implémente l'extraction de dictionnaires de chaînes de caractères dynamiques, la manipulation d'AST sous Node.js, et la reconstruction de code sémantique.",
          links: PROJECTS_STATIC[3].linkHrefs.map(href => ({ name: 'Code Source', href })),
        },
      ],
      viewAllLink: PROJECTS_VIEW_ALL_LINK,
    },
    experienceData: {
      title: 'parcours',
      subtitle: 'Mon parcours académique et mes expériences professionnelles.',
      experiences: [
        {
          date: EXPERIENCE_DATES[0],
          title: 'Orange',
          role: 'Ingénieur DevOps & Cloud Automation (Apprentissage)',
          description: "Intégration de la Direction Technique (DTOF) dans la division Cloud Platforms. Chargé de l'exploration, l'intégration et le déploiement de solutions d'observabilité (Prometheus, ELK, OpenTelemetry) et d'Infrastructure-as-Code pour l'infrastructure cloud privée. Responsable du développement de services d'automatisation en Python/Go, de l'amélioration des pipelines GitLab CI/CD, et de l'intégration d'agents conversationnels IA pour fluidifier les workflows de développement.",
        },
        {
          date: EXPERIENCE_DATES[1],
          title: 'Freelance & Partenaire',
          role: 'Freelance Web Engineer',
          description: 'Développement web full-stack spécialisé en Next.js, React, TypeScript et Tailwind CSS. Conception et réalisation de sites internet pour des clients.',
        },
        {
          date: EXPERIENCE_DATES[2],
          title: "Licence d'Informatique & Mathématiques",
          role: 'Université Gustave Eiffel - Champs-sur-Marne',
          description: "Formation académique axée sur les mathématiques et l'informatique, incluant des projets tels que 'Nuage' - une plateforme de gestion de jeux vidéo en Python/Flask et PostgreSQL, ainsi que 'TPC' - un compilateur pour langage de type C ciblant l'assembleur x86-64 en C/Flex/Bison.",
        },
        {
          date: EXPERIENCE_DATES[3],
          title: 'Baccalauréat Général',
          role: 'Lycée Louis Armand - Nogent-sur-Marne',
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
      socials: [
        { name: 'Email',    href: CONTACT_INFO.email.href },
        { name: 'GitHub',   href: CONTACT_INFO.github.href },
        { name: 'LinkedIn', href: CONTACT_INFO.linkedin.href },
      ],
      copyright: '© {year} Yacine. Tous droits réservés.',
    },
    featuredProjectsData: {
      title: 'sélection',
      subtitle: 'Découvrez mes projets phares, chacun ayant sa propre page de présentation dédiée.',
      projects: [
        { ...FEATURED_PROJECTS_STATIC[0], tagline: "Intégrez un chatbot RAG temps réel sur n'importe quel site web en une seule ligne de code.", cta: 'Découvrir Xur' },
        { ...FEATURED_PROJECTS_STATIC[1], tagline: "L'application mobile pour les couples : une question par jour, 100 quiz et des idées de sorties à matcher à deux.", cta: 'Découvrir Spark Love' },
        { ...FEATURED_PROJECTS_STATIC[2], tagline: "Consultez l'inventaire de vos marchands préférés en déplacement.", cta: 'Découvrir Orbit Market' },
        { ...FEATURED_PROJECTS_STATIC[3], tagline: "Votre coach LoL personnel, propulsé par l'IA dans Discord.", cta: 'Découvrir Cobble Coach' },
        { ...FEATURED_PROJECTS_STATIC[4], tagline: "Rangement d'inventaire stratégique et roguelike d'exploration de donjons.", cta: 'Découvrir Backpack Hero' },
      ],
    },
    websitesData: {
      title: 'Sites Web',
      subtitle: 'Sites web de production conçus et développés pour des clients.',
      projects: [
        {
          title:       WEBSITES_STATIC[0].title,
          imagePath:   WEBSITES_STATIC[0].imagePath,
          link:        WEBSITES_STATIC[0].link,
          available:   WEBSITES_STATIC[0].available,
          tags:        [...WEBSITES_STATIC[0].tags_fr],
          description: "Site vitrine pour Georges Geneyne, spécialiste de la menuiserie aluminium et des piscines béton en Guadeloupe. Il présente les services et permet une prise de contact directe via WhatsApp.",
        },
        {
          title:       WEBSITES_STATIC[1].title,
          imagePath:   WEBSITES_STATIC[1].imagePath,
          link:        WEBSITES_STATIC[1].link,
          available:   WEBSITES_STATIC[1].available,
          tags:        [...WEBSITES_STATIC[1].tags_fr],
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
    heroData: {
      name: 'YACINE',
      title: 'COMPUTER SCIENCE STUDENT & DEVELOPER.',
      description: "Master's student in Computer Science at Gustave Eiffel University and DevOps & Cloud engineer at Orange.",
      cta: {
        projects: { text: 'View Projects', href: HERO_CTA_HREFS.projects },
        contact:  { text: 'Get in Touch',  href: HERO_CTA_HREFS.contact },
      },
    },
    aboutData: {
      title: 'about',
      subtitle: "A bit more about who I am and what I'm looking for.",
      paragraphs: [
        "What started with curiosity quickly became an obsession. I genuinely enjoy the problem-solving aspect and that ultimate satisfaction when everything works as intended after hours of work (more when it's on the first try).",
        "From building strategy games in C to crafting websites for real clients, I've tried a bit of everything. Each project taught me something new, whether it was wrestling with memory allocation or figuring out how to make a design look good on mobile.",
        "If you're looking for someone motivated, curious, and have coffee for me, i'm your guy.",
      ],
    },
    skillsData: {
      title: 'skills',
      subtitle: "Here are some of the technologies and tools I've been working with during my studies and personal projects.",
      categories: [
        { name: 'Programming Languages and Frameworks', skills: [...SKILLS_LIST.languages] },
        { name: 'Cloud & Infrastructure',               skills: [...SKILLS_LIST.cloud] },
        { name: 'Tools & Libraries',                    skills: [...SKILLS_LIST.tools] },
      ],
    },
    projectsData: {
      title: 'projects',
      subtitle: "A selection of projects I've worked on during my academic journey and in my free time.",
      projects: [
        {
          title: PROJECTS_STATIC[0].title, tags: PROJECTS_STATIC[0].tags, icon: PROJECTS_STATIC[0].icon,
          description: 'A video game management platform that allows users to browse, purchase, share, and comment on games, manage user profiles, add friends, and track game achievements.',
          links: PROJECTS_STATIC[0].linkHrefs.map(href => ({ name: 'View Code', href })),
        },
        {
          title: PROJECTS_STATIC[1].title, tags: PROJECTS_STATIC[1].tags, icon: PROJECTS_STATIC[1].icon,
          description: 'A compiler for TPC, a small C-like language targeting x86-64 NASM assembly. Implements lexical analysis, parsing, syntax tree generation, semantic checking, and code generation.',
          links: PROJECTS_STATIC[1].linkHrefs.map(href => ({ name: 'View Code', href })),
        },
        {
          title: PROJECTS_STATIC[2].title, tags: PROJECTS_STATIC[2].tags, icon: PROJECTS_STATIC[2].icon,
          description: 'This university project focuses on implementing custom versions of the standard C library functions malloc and free. It delves into the core mechanisms of dynamic memory allocation.',
          links: PROJECTS_STATIC[2].linkHrefs.map(href => ({ name: 'View Code', href })),
        },
        {
          title: PROJECTS_STATIC[3].title, tags: PROJECTS_STATIC[3].tags, icon: PROJECTS_STATIC[3].icon,
          description: 'A reverse engineering case study and workflow analyzing a self-defending browser extension. Implements dynamic string dictionary extraction, AST manipulation in Node.js, and semantic code reconstruction for security audits.',
          links: PROJECTS_STATIC[3].linkHrefs.map(href => ({ name: 'View Code', href })),
        },
      ],
      viewAllLink: PROJECTS_VIEW_ALL_LINK,
    },
    experienceData: {
      title: 'experience',
      subtitle: 'My academic journey and professional experiences.',
      experiences: [
        {
          date: EXPERIENCE_DATES[0],
          title: 'Orange',
          role: 'DevOps & Cloud Automation Engineer (Apprenticeship)',
          description: 'Joined the Technical Directorate (DTOF) in the Cloud Platforms division. Focuses on exploring, integrating, and deploying observability (Prometheus, ELK, OpenTelemetry) and Infrastructure-as-Code solutions for on-premise cloud infrastructure. Responsible for developing automation services in Python/Go, improving GitLab CI/CD pipelines, and integrating AI chatbots to streamline development workflows.',
        },
        {
          date: EXPERIENCE_DATES[1],
          title: 'Freelance & Partner',
          role: 'Freelance Web Engineer',
          description: 'Full-stack web development specializing in Next.js, React, TypeScript, and Tailwind CSS. Designed and built websites for clients.',
        },
        {
          date: EXPERIENCE_DATES[2],
          title: "Bachelor's Degree in Mathematics/Computer Science",
          role: 'Gustave Eiffel University - Champs-sur-Marne',
          description: "Academic training focused on mathematics and computer science, including projects such as 'Nuage' - a video game management platform developed with Python/Flask, PostgreSQL and HTML/CSS, as well as 'TPC' - a compiler for a C-like language targeting x86-64 assembly in C/Flex/Bison.",
        },
        {
          date: EXPERIENCE_DATES[3],
          title: 'General Baccalaureate',
          role: 'Louis Armand High School - Nogent-sur-Marne',
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
      socials: [
        { name: 'Email',    href: CONTACT_INFO.email.href },
        { name: 'GitHub',   href: CONTACT_INFO.github.href },
        { name: 'LinkedIn', href: CONTACT_INFO.linkedin.href },
      ],
      copyright: '© {year} Yacine. All rights reserved.',
    },
    featuredProjectsData: {
      title: 'featured',
      subtitle: 'Discover my flagship projects, each with its own dedicated showcase.',
      projects: [
        { ...FEATURED_PROJECTS_STATIC[0], tagline: 'Integrate a real-time RAG chatbot on any website with a single line of code.', cta: 'Discover Xur' },
        { ...FEATURED_PROJECTS_STATIC[1], tagline: 'The mobile app for couples: a daily question, 100 quizzes, and date or movie ideas to match together.', cta: 'Discover Spark Love' },
        { ...FEATURED_PROJECTS_STATIC[2], tagline: 'Check what your favorite vendors have in stock on the go.',    cta: 'Discover Orbit Market' },
        { ...FEATURED_PROJECTS_STATIC[3], tagline: 'Your personal LoL coach, powered by AI inside Discord.',       cta: 'Discover Cobble Coach' },
        { ...FEATURED_PROJECTS_STATIC[4], tagline: 'Inventory management meets strategic roguelike dungeon crawling.', cta: 'Discover Backpack Hero' },
      ],
    },
    websitesData: {
      title: 'Websites',
      subtitle: 'Production websites designed and developed for clients.',
      projects: [
        {
          title:       WEBSITES_STATIC[0].title,
          imagePath:   WEBSITES_STATIC[0].imagePath,
          link:        WEBSITES_STATIC[0].link,
          available:   WEBSITES_STATIC[0].available,
          tags:        [...WEBSITES_STATIC[0].tags_en],
          description: 'Showcase website for Georges Geneyne, a specialist in aluminum joinery and concrete pools in Guadeloupe. It presents the services and offers direct contact through WhatsApp.',
        },
        {
          title:       WEBSITES_STATIC[1].title,
          imagePath:   WEBSITES_STATIC[1].imagePath,
          link:        WEBSITES_STATIC[1].link,
          available:   WEBSITES_STATIC[1].available,
          tags:        [...WEBSITES_STATIC[1].tags_en],
          description: "Presentation website for Lionel Coezy's Kreyol Wakanda. It brings together the project's coaching content, digital portals, and cultural artefacts.",
        },
      ],
    },
  },
};
