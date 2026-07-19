/**
 * Données statiques non-traduisibles : thèmes visuels, icônes, URLs, tags techniques.
 * Les strings traduites vivent dans translations.ts.
 */
import { Heart, Cloud, Backpack, Bot } from 'lucide-react';
import { GiMoonOrbit } from 'react-icons/gi';
import React from 'react';
import type { FeaturedProjectTheme } from './types';

// ─── Liens de navigation (href/id sont invariants) ────────────────────────────
export const NAV_IDS = ['about', 'skills', 'featured', 'websites', 'projects', 'experience', 'contact'] as const;

// ─── CTA hero ─────────────────────────────────────────────────────────────────
export const HERO_CTA_HREFS = {
  projects: '#projects',
  contact: '#contact',
  cv: 'https://rxresu.me/yacine20005/project-a',
} as const;

// ─── Skills (les noms de technos ne se traduisent pas) ────────────────────────
export const SKILLS_LIST = {
  languages: ['Python', 'Flask', 'FastAPI', 'C', 'HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Expo', 'Bash', 'LaTeX', 'Java', 'Angular'] as string[],
  cloud: ['Google Cloud', 'PostgreSQL', 'SQLite', 'Vercel', 'DigitalOcean', 'Supabase'] as string[],
  tools: ['Git / GitHub', 'Docker', 'Matplotlib', 'NumPy', 'Ncurses', 'MLV Library', 'Sanity CMS', 'FLTK', 'Pillow', 'Zen'] as string[],
};

// ─── Projets (tags, icônes string, liens GitHub) ──────────────────────────────
export const PROJECTS_STATIC: Array<{
  title: string;
  tags: string[];
  icon: string;
  linkHrefs: string[];
}> = [
  { title: 'Nuage',            tags: ['Python', 'Flask', 'PostgreSQL', 'HTML/CSS'],          icon: 'FaCloud',    linkHrefs: ['https://github.com/yacine20005/Nuage'] },
  { title: 'TPC Compiler',     tags: ['C', 'Flex', 'Bison', 'NASM'],                         icon: 'FaTerminal', linkHrefs: ['https://github.com/yacine20005/TPC'] },
  { title: 'Malloc',           tags: ['C', 'Makefile'],                                       icon: 'MdMemory',   linkHrefs: ['https://github.com/yacine20005/malloc'] },
  { title: 'JS Deobfuscation', tags: ['JavaScript', 'Node.js', 'AST', 'Security'],           icon: 'FaShieldAlt',linkHrefs: ['https://github.com/yacine20005/JavaScript-Deobfuscation'] },
];

export const PROJECTS_VIEW_ALL_LINK = 'https://github.com/yacine20005';

// ─── Expériences (dates invariantes) ─────────────────────────────────────────
export const EXPERIENCE_DATES = [
  'September 2026 - August 2028',
  'Since June 2023',
  'September 2023 - July 2026',
  'September 2020 - July 2023',
] as const;

// ─── Contact & socials ────────────────────────────────────────────────────────
export const CONTACT_INFO = {
  email: { value: 'ya.hamadouche@gmail.com', href: 'mailto:ya.hamadouche@gmail.com' },
  github: { value: 'yacine20005', href: 'https://github.com/yacine20005' },
  linkedin: { value: 'yacine-hamadouche', href: 'https://linkedin.com/in/yacine-hamadouche' },
} as const;

// ─── Featured projects (thèmes visuels + icônes React + liens) ───────────────
export type FeaturedProjectStatic = {
  title: string;
  tags: string[];
  icon: React.ReactNode;
  link: string;
  theme: FeaturedProjectTheme;
};

export const FEATURED_PROJECTS_STATIC: FeaturedProjectStatic[] = [
  {
    title: 'Spark Love',
    tags: ['React Native', 'Expo', 'TypeScript', 'Supabase'],
    icon: React.createElement(Heart, { className: 'h-7 w-7 text-white' }),
    link: '/spark-love',
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
    tags: ['React Native', 'Expo', 'FastAPI', 'Python', 'Docker'],
    icon: React.createElement(GiMoonOrbit, { className: 'h-7 w-7 text-white' }),
    link: '/orbit-market',
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
    tags: ['Python', 'discord.py', 'Riot API', 'Gemini'],
    icon: React.createElement(Bot, { className: 'h-7 w-7 text-white' }),
    link: '/cobble-coach',
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
    tags: ['Java', 'Zen Graphics', 'MVC', 'OOP Design'],
    icon: React.createElement(Backpack, { className: 'h-7 w-7 text-white' }),
    link: '/backpack-hero',
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
];

// ─── Websites clients (données non-traduisibles) ──────────────────────────────
export const WEBSITES_STATIC = [
  {
    title: 'Georges Geneyne',
    imagePath: '/websites/georgesgeneyne.png',
    link: 'https://georgesgeneyne.com/',
    available: true,
    tags_fr: ['Next.js', 'Tailwind CSS', 'Optimisation SEO', 'WhatsApp Direct'],
    tags_en: ['Next.js', 'Tailwind CSS', 'SEO Optimization', 'Direct WhatsApp'],
  },
  {
    title: 'Kreyol Wakanda',
    imagePath: '/websites/kreyolwakanda.png',
    link: 'https://kreyol-wakanda.vercel.app',
    available: true,
    tags_fr: ['Next.js', 'Tailwind CSS', 'Design Immersif', 'Canevas Interactif'],
    tags_en: ['Next.js', 'Tailwind CSS', 'Immersive Design', 'Interactive Canvas'],
  },
] as const;
