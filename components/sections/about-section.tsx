"use client";

import { SectionBackground } from "@/components/section-background";
import { aboutData } from "@/lib/data";

export function AboutSection() {
    return (
        <section id="about" className="py-20 bg-background relative">
            <SectionBackground />
            <div className="container mx-auto">
                <div className="space-y-4 mb-12">
                    <div className="flex items-center">
                        <span className="text-primary text-sm mr-2">02</span>
                        <h2 className="text-2xl md:text-3xl font-bold">{aboutData.title}</h2>
                    </div>
                    <p className="text-muted-foreground max-w-2xl">
                        {aboutData.subtitle}
                    </p>
                </div>
                {aboutData.paragraphs.map((paragraph, index) => (
                    <p key={index} className="mb-4">
                        {paragraph}
                    </p>
                ))}
            </div>
        </section>
    );
}
