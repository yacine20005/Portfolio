"use client";

import { SectionBackground } from "@/components/section-background";
import { skillsData } from "@/lib/data";

export function SkillsSection() {
    return (
        <section id="skills" className="container mx-auto py-20 relative">
            <SectionBackground />
            <div className="space-y-4 mb-12">
                <div className="flex items-center">
                    <span className="text-primary text-sm mr-2">03</span>
                    <h2 className="text-2xl md:text-3xl font-bold">{skillsData.title}</h2>
                </div>
                <p className="text-muted-foreground max-w-2xl">
                    {skillsData.subtitle}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skillsData.categories.map((category, index) => (
                    <div key={index} className="border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
                        <h3 className="text-lg font-semibold mb-4">
                            {category.name}
                        </h3>
                        <ul className="space-y-2 text-muted-foreground">
                            {category.skills.map((skill, skillIndex) => (
                                <li key={skillIndex} className="flex items-center">
                                    <span className="inline-block w-2 h-2 bg-primary rounded-full mr-2"></span>
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}
