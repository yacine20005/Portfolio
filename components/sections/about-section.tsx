"use client";

import { SectionBackground } from "@/components/section-background";
import { aboutData } from "@/lib/data";
import { useGsapStaggerOnView } from "@/hooks/use-gsap-animations";

export function AboutSection() {
    const scope = useGsapStaggerOnView();
    return (
        <section id="about" className="py-20 bg-background relative" ref={scope}>
            <SectionBackground />
            <div className="container mx-auto">
                <div className="space-y-4 mb-12" data-animate>
                    <div className="flex items-center" data-animate>
                        <span className="text-primary text-sm mr-2">01</span>
                        <h2 className="text-2xl md:text-3xl font-bold">{aboutData.title}</h2>
                    </div>
                    <p className="text-muted-foreground max-w-2xl" data-animate>
                        {aboutData.subtitle}
                    </p>
                </div>
                {aboutData.paragraphs.map((paragraph, index) => (
                    <p key={index} className="mb-4" data-animate>
                        {paragraph}
                    </p>
                ))}
            </div>
        </section>
    );
}
