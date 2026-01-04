"use client";

import { SectionBackground } from "@/components/section-background";
import { experienceData } from "@/lib/data";
import { useGsapStaggerOnView } from "@/hooks/use-gsap-animations";

export function ExperienceSection() {
    const scope = useGsapStaggerOnView({ y: 55 });
    return (
        <section id="experience" className="container mx-auto py-20 relative" ref={scope}>
            <SectionBackground />
            <div className="space-y-4 mb-12" data-animate>
                <div className="flex items-center" data-animate>
                    <span className="text-primary text-sm mr-2">05</span>
                    <h2 className="text-2xl md:text-3xl font-bold">{experienceData.title}</h2>
                </div>
                <p className="text-muted-foreground max-w-2xl" data-animate>
                    {experienceData.subtitle}
                </p>
            </div>

            <div className="space-y-8">
                {experienceData.experiences.map((experience, index) => (
                    <div key={index} className="relative pl-8 border-l border-border" data-animate>
                        <div className="absolute w-4 h-4 bg-primary rounded-full -left-2 top-0"></div>
                        <div className="mb-1 text-sm text-muted-foreground">
                            {experience.date}
                        </div>
                        <h3 className="text-xl font-semibold">{experience.title}</h3>
                        <p className="text-primary">{experience.role}</p>
                        <p className="mt-2 text-muted-foreground">
                            {experience.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
