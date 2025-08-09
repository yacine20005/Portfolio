"use client";

import { SectionBackground } from "@/components/section-background";
import { skillsData } from "@/lib/data";
import {
    FaPython,
    FaReact,
    FaHtml5,
    FaCss3Alt,
    FaGithub,
    FaDocker,
    FaTerminal,
    FaCode,
} from "react-icons/fa";
import React from "react";
import {
    SiFlask,
    SiFastapi,
    SiC,
    SiNextdotjs,
    SiExpo,
    SiGnubash,
    SiLatex,
    SiGooglecloud,
    SiPostgresql,
    SiSqlite,
    SiVercel,
    SiDigitalocean,
    SiSupabase,
    SiJavascript,
    SiTypescript,
    SiNumpy,
    SiSanity,
} from "react-icons/si";
import { cn } from "@/lib/utils";

// Mapping from skill string to icon component
const skillIcons: Record<string, React.ReactNode> = {
    Python: <FaPython aria-hidden="true" className="w-4 h-4" />,
    Flask: <SiFlask aria-hidden="true" className="w-4 h-4" />,
    FastAPI: <SiFastapi aria-hidden="true" className="w-4 h-4" />,
    C: <SiC aria-hidden="true" className="w-4 h-4" />,
    HTML: <FaHtml5 aria-hidden="true" className="w-4 h-4" />,
    CSS: <FaCss3Alt aria-hidden="true" className="w-4 h-4" />,
    JavaScript: <SiJavascript aria-hidden="true" className="w-4 h-4" />,
    TypeScript: <SiTypescript aria-hidden="true" className="w-4 h-4" />,
    React: <FaReact aria-hidden="true" className="w-4 h-4" />,
    "Next.js": <SiNextdotjs aria-hidden="true" className="w-4 h-4" />,
    Expo: <SiExpo aria-hidden="true" className="w-4 h-4" />,
    Bash: <SiGnubash aria-hidden="true" className="w-4 h-4" />,
    LaTeX: <SiLatex aria-hidden="true" className="w-4 h-4" />,
    "Google Cloud": <SiGooglecloud aria-hidden="true" className="w-4 h-4" />,
    PostgreSQL: <SiPostgresql aria-hidden="true" className="w-4 h-4" />,
    SQLite: <SiSqlite aria-hidden="true" className="w-4 h-4" />,
    Vercel: <SiVercel aria-hidden="true" className="w-4 h-4" />,
    DigitalOcean: <SiDigitalocean aria-hidden="true" className="w-4 h-4" />,
    Supabase: <SiSupabase aria-hidden="true" className="w-4 h-4" />,
    "Git / GitHub": <FaGithub aria-hidden="true" className="w-4 h-4" />,
    Docker: <FaDocker aria-hidden="true" className="w-4 h-4" />,
    NumPy: <SiNumpy aria-hidden="true" className="w-4 h-4" />,
    Ncurses: <FaTerminal aria-hidden="true" className="w-4 h-4" />,
    "MLV Library": <FaCode aria-hidden="true" className="w-4 h-4" />,
    "Sanity CMS": <SiSanity aria-hidden="true" className="w-4 h-4" />,
};

// Reusable Skill Pill component
function SkillPill({ label }: { label: string }) {
    const icon = skillIcons[label];
    return (
        <li
            className={cn(
                "group flex items-center gap-2 rounded-full border border-border/60 bg-card/60 px-3 py-1.5 text-sm",
                "hover:border-primary/50 hover:bg-primary/10 transition-colors"
            )}
        >
            <span className="flex h-5 w-5 items-center justify-center text-primary" aria-hidden="true">
                {icon ?? <span className="inline-block h-2 w-2 rounded-full bg-primary" />}
            </span>
            <span className="whitespace-nowrap text-muted-foreground group-hover:text-foreground transition-colors">
                {label}
            </span>
        </li>
    );
}

export function SkillsSection() {
    return (
        <section id="skills" className="container mx-auto py-20 relative">
            <SectionBackground />
            <div className="space-y-4 mb-12">
                <div className="flex items-center">
                    <span className="text-primary text-sm mr-2">02</span>
                    <h2 className="text-2xl md:text-3xl font-bold">{skillsData.title}</h2>
                </div>
                <p className="text-muted-foreground max-w-2xl">{skillsData.subtitle}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skillsData.categories.map((category, index) => (
                    <div
                        key={index}
                        className="relative overflow-hidden rounded-xl border border-border bg-card/40 backdrop-blur-sm p-6 transition-colors hover:border-primary/50"
                    >
                        <div className="mb-4 flex items-center gap-2">
                            <h3 className="text-lg font-semibold leading-tight">
                                {category.name}
                            </h3>
                        </div>
                        <ul className="flex flex-wrap gap-2">
                            {category.skills.map((skill) => (
                                <SkillPill key={skill} label={skill} />
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}
