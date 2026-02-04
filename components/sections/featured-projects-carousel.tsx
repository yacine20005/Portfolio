"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { SectionBackground } from "@/components/section-background";
import { featuredProjectsData } from "@/lib/data";
import { useGsapStaggerOnView } from "@/hooks/use-gsap-animations";

export function FeaturedProjectsCarousel() {
    const scope = useGsapStaggerOnView({ y: 40 });

    return (
        <section id="featured" className="container mx-auto py-20 relative" ref={scope}>
            <SectionBackground />

            {/* Header */}
            <div className="space-y-4 mb-12" data-animate>
                <div className="flex items-center" data-animate>
                    <span className="text-primary text-sm mr-2">03</span>
                    <h2 className="text-2xl md:text-3xl font-bold">
                        {featuredProjectsData.title}
                    </h2>
                </div>
                <p className="text-muted-foreground max-w-2xl" data-animate>
                    {featuredProjectsData.subtitle}
                </p>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-animate>
                {featuredProjectsData.projects.map((project, index) => (
                    <Card
                        key={index}
                        className="group relative overflow-hidden border-2 transition-all duration-300 hover:scale-[1.02]"
                        style={{
                            borderColor: project.theme.border,
                            background: `linear-gradient(135deg, ${project.theme.gradientFrom}, ${project.theme.gradientVia}, ${project.theme.gradientTo})`,
                        }}
                    >
                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-10">
                            <div
                                className="absolute inset-0"
                                style={{
                                    backgroundImage: `radial-gradient(circle at 20% 50%, ${project.theme.accentColor} 1px, transparent 1px), radial-gradient(circle at 80% 50%, ${project.theme.accentColor} 1px, transparent 1px)`,
                                    backgroundSize: "50px 50px",
                                }}
                            />
                        </div>

                        <CardHeader className="relative text-center pb-4">
                            {/* Icon */}
                            <div
                                className="h-16 w-16 rounded-2xl flex items-center justify-center shadow-lg transition-transform group-hover:scale-110 duration-300 mx-auto mb-4"
                                style={{
                                    background: `linear-gradient(135deg, ${project.theme.iconFrom}, ${project.theme.iconTo})`,
                                    boxShadow: `0 10px 40px -10px ${project.theme.shadowColor}`,
                                }}
                            >
                                {project.icon}
                            </div>

                            {/* Title */}
                            <div className="space-y-2">
                                <h3
                                    className="text-2xl font-bold tracking-tight"
                                    style={{ color: project.theme.textColor }}
                                >
                                    {project.title}
                                </h3>
                                <p
                                    className="text-lg font-medium"
                                    style={{ color: project.theme.descriptionColor }}
                                >
                                    {project.tagline}
                                </p>
                            </div>
                        </CardHeader>

                        <CardContent className="relative pt-0 text-center">
                            {/* Tags */}
                            <div className="flex flex-wrap justify-center gap-2 mb-6">
                                {project.tags.map((tag, tagIndex) => (
                                    <Badge
                                        key={tagIndex}
                                        variant="outline"
                                        className="text-xs font-medium border"
                                        style={{
                                            backgroundColor: project.theme.tagBackground,
                                            color: project.theme.tagColor,
                                            borderColor: project.theme.tagBorder,
                                        }}
                                    >
                                        {tag}
                                    </Badge>
                                ))}
                            </div>

                            {/* CTA Button */}
                            <Link href={project.link} className="block">
                                <Button
                                    size="lg"
                                    className="w-full transition-all duration-300 group-hover:scale-105"
                                    style={{
                                        background: `linear-gradient(135deg, ${project.theme.buttonFrom}, ${project.theme.buttonTo})`,
                                        border: 'none',
                                    }}
                                >
                                    {project.cta}
                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Button>
                            </Link>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
}