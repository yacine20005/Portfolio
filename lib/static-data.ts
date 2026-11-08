/**
 * Données statiques non-traduisibles : thèmes visuels, icônes, URLs, tags techniques.
 * Les strings traduites vivent dans translations.ts.
 */
import { Heart, Backpack, Bot, Sparkles } from 'lucide-react';
import React from 'react';
import type { FeaturedProjectTheme } from './types';

export function MoonOrbitIcon({ className }: { className?: string }) {
  return React.createElement(
    'svg',
    { viewBox: '0 0 512 512', fill: 'currentColor', className },
    React.createElement('path', {
      d: 'M255.6 62.21c-25.1 0-50.7 5.02-75.3 15.48C81.74 119.5 35.86 233.1 77.69 331.7c4.76 11.1 10.45 21.7 16.93 31.5-12.6.3-23.45-.5-31.98-2.4-13.22-2.9-19.93-7.8-22.27-13.3-2.33-5.6-1.25-13.8 5.87-25.4 1.65-2.6 3.62-5.4 5.86-8.4-2.1-7.4-3.76-14.7-5.05-22.2-6.62 7.1-12.1 14.2-16.37 21.1-8.74 14.1-12.66 28.9-7.11 42 5.54 13.1 18.9 20.5 35.17 24 13.66 3 30.13 3.6 48.96 2.2 53.2 63.4 143.6 87.6 223.9 53.4 80.3-34.1 125.6-115.7 117.1-198.1 14.1-12.6 25.2-24.9 32.5-36.8 8.9-14.2 12.7-29 7.2-42-5.6-13.1-18.9-20.5-35.2-24.1-7.9-1.7-16.9-2.7-26.5-2.8 4.5 6.1 8.6 12.4 12.4 19.1 3.7.4 7.1.9 10.1 1.6 13.3 2.8 20 7.8 22.3 13.3 2.4 5.5 1.3 13.8-5.9 25.3-4.5 7.4-11.4 15.8-20.4 24.7 1.5 7.3 2.7 14.5 3.4 21.7-2.6 2.3-5.5 4.7-8.2 7.1-4.7 3.8-9.5 7.7-14.7 11.5 11.2 32-4.4 67.8-35.9 81.2-26.3 11.2-56 3.6-74-16.8-9.1 4.3-18.3 8.4-27.8 12.5-62.5 26.4-122.4 43-169.2 48.1-3.8.4-7.5.7-11 1.1-4.7-5.6-8.95-11.4-13.12-17.6 6.82-.2 14.22-.7 22.02-1.6 44.4-4.9 103-20.9 164.2-46.9 8.4-3.5 16.7-7.3 24.8-11-.4-.7-.7-1.4-1-2.1-14-32.9 1.5-71.2 34.4-85.1 28.3-12.1 60.7-2.1 78 21.8 4-3.1 7.9-6.1 11.5-9.1 6.1-5 11.6-10 16.6-14.8-2.6-11.5-6.2-22.9-11-34.1-31.4-73.9-103.1-118.22-178.6-118.09zM364.3 229.6c-5.9 0-12.1 1.2-18.1 3.7-23.7 10.1-34.8 37.3-24.6 61.2 10 23.8 37.3 34.7 61.1 24.6 23.7-10 34.8-37.3 24.6-61.1-7.5-17.9-24.7-28.5-43-28.4z',
    }),
  );
}

// ─── Liens de navigation (href/id sont invariants) ────────────────────────────
export const NAV_IDS = ['about', 'skills', 'featured', 'websites', 'projects', 'experience', 'contact'] as const;

// ─── Skills (les noms de technos ne se traduisent pas) ────────────────────────
export const SKILLS_LIST = {
  languages: ['Python', 'Flask', 'FastAPI', 'C', 'HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Expo', 'Bash', 'LaTeX', 'Java', 'Angular'] as string[],
  cloud: ['Google Cloud', 'PostgreSQL', 'SQLite', 'Vercel', 'DigitalOcean', 'Supabase'] as string[],
  tools: ['Git / GitHub', 'Docker', 'Matplotlib', 'NumPy', 'Ncurses', 'MLV Library', 'Sanity CMS', 'FLTK', 'Pillow', 'Zen'] as string[],
};

// ─── Projets (tags, liens GitHub & démo) ──────────────────────────────────────
export const PROJECTS_STATIC: Array<{
  title: string;
  tags: string[];
  githubHref: string;
  liveHref?: string;
}> = [
  {
    title: 'Nuage',
    tags: ['Python', 'Flask', 'PostgreSQL', 'HTML/CSS'],
    githubHref: 'https://github.com/yacine20005/Nuage',
    liveHref: 'https://nuage-sigma.vercel.app',
  },
  {
    title: 'JS Deobfuscation',
    tags: ['JavaScript', 'Node.js', 'AST', 'Security'],
    githubHref: 'https://github.com/yacine20005/JavaScript-Deobfuscation',
  },
  {
    title: 'Mtrack',
    tags: ['C', 'Shared Library', 'Memory Analysis', 'Makefile'],
    githubHref: 'https://github.com/yacine20005/Mtrack',
  },
  {
    title: 'TicketScout',
    tags: ['TypeScript', 'Playwright', 'Automation', 'Discord Webhook'],
    githubHref: 'https://github.com/yacine20005/Ticket-Scout',
  },
];

export const PROJECTS_VIEW_ALL_LINK = 'https://github.com/yacine20005';

// ─── Expériences (dates invariantes) ─────────────────────────────────────────
export const EXPERIENCE_DATES = [
  'September 2026 - August 2028',
  'September 2026 - August 2028',
  'Since June 2023',
  'September 2023 - July 2026',
  'September 2020 - July 2023',
] as const;

// ─── Contact & socials ────────────────────────────────────────────────────────
export const CONTACT_INFO = {
  email: { href: 'mailto:ya.hamadouche@gmail.com' },
  github: { href: 'https://github.com/yacine20005' },
  linkedin: { href: 'https://linkedin.com/in/yacine-hamadouche' },
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
    title: 'Xur',
    tags: ['FastAPI', 'Google Gemini', 'SSE Streaming', 'Vanilla JS', 'esbuild'],
    icon: React.createElement(Sparkles, { className: 'h-7 w-7 text-white' }),
    link: '/xur',
    theme: {
      gradientFrom: 'rgba(16, 185, 129, 0.12)',
      gradientVia: 'rgba(16, 185, 129, 0.05)',
      gradientTo: 'rgba(6, 182, 212, 0.12)',
      textColor: 'rgb(52, 211, 153)',
      accentColor: 'rgba(16, 185, 129, 0.5)',
      border: 'rgba(16, 185, 129, 0.3)',
      tagBackground: 'rgba(16, 185, 129, 0.15)',
      tagColor: 'rgb(167, 243, 208)',
      tagBorder: 'rgba(16, 185, 129, 0.3)',
    },
  },
  {
    title: 'Spark Love',
    tags: ['React Native', 'TypeScript', 'PostgreSQL', 'Supabase', 'Android'],
    icon: React.createElement(Heart, { className: 'h-7 w-7 text-white' }),
    link: '/spark-love',
    theme: {
      gradientFrom: 'rgba(238, 100, 70, 0.14)',
      gradientVia: 'rgba(227, 161, 58, 0.06)',
      gradientTo: 'rgba(134, 160, 238, 0.12)',
      textColor: 'rgb(238, 100, 70)',
      accentColor: 'rgba(238, 100, 70, 0.5)',
      border: 'rgba(238, 100, 70, 0.35)',
      tagBackground: 'rgba(238, 100, 70, 0.15)',
      tagColor: 'rgb(246, 221, 210)',
      tagBorder: 'rgba(238, 100, 70, 0.35)',
    },
  },
  {
    title: 'Orbit Market',
    tags: ['React Native', 'Expo', 'FastAPI', 'Python', 'Docker'],
    icon: React.createElement(MoonOrbitIcon, { className: 'h-7 w-7 text-white' }),
    link: '/orbit-market',
    theme: {
      gradientFrom: 'rgba(147, 197, 253, 0.1)',
      gradientVia: 'rgba(147, 197, 253, 0.05)',
      gradientTo: 'rgba(34, 211, 238, 0.1)',
      textColor: 'rgb(96, 165, 250)',
      accentColor: 'rgba(96, 165, 250, 0.5)',
      border: 'rgba(96, 165, 250, 0.3)',
      tagBackground: 'rgba(96, 165, 250, 0.15)',
      tagColor: 'rgb(191, 219, 254)',
      tagBorder: 'rgba(96, 165, 250, 0.3)',
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
      accentColor: 'rgba(239, 68, 68, 0.5)',
      border: 'rgba(239, 68, 68, 0.3)',
      tagBackground: 'rgba(239, 68, 68, 0.15)',
      tagColor: 'rgb(254, 226, 226)',
      tagBorder: 'rgba(239, 68, 68, 0.3)',
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
      accentColor: 'rgba(245, 158, 11, 0.5)',
      border: 'rgba(245, 158, 11, 0.3)',
      tagBackground: 'rgba(245, 158, 11, 0.15)',
      tagColor: 'rgb(253, 230, 138)',
      tagBorder: 'rgba(245, 158, 11, 0.3)',
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
  },
  {
    title: 'Kreyol Wakanda',
    imagePath: '/websites/kreyolwakanda.png',
    link: 'https://kreyol-wakanda.vercel.app',
    available: true,
  },
] as const;
