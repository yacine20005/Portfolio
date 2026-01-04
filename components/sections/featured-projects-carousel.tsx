"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionBackground } from "@/components/section-background";
import { featuredProjectsData } from "@/lib/data";
import { useGsapStaggerOnView } from "@/hooks/use-gsap-animations";
import { useState, useEffect } from "react";

export function FeaturedProjectsCarousel() {
    const scope = useGsapStaggerOnView({ y: 40 });
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [isMobile, setIsMobile] = useState(false);

    // Detect screen size
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Desktop: show page 0 (all projects), Mobile: navigate through individual projects
    const totalSlides = isMobile ? featuredProjectsData.projects.length : 1;

    const nextSlide = () => {
        setCurrentIndex((prev) =>
            prev === totalSlides - 1 ? 0 : prev + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? totalSlides - 1 : prev - 1
        );
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
        setIsAutoPlaying(false);
    };

    useEffect(() => {
        if (!isAutoPlaying || !isMobile) return;

        const interval = setInterval(() => {
            nextSlide();
        }, 5000);

        return () => clearInterval(interval);
    }, [currentIndex, isAutoPlaying, isMobile]);

    return (
        <section id="featured" className="container mx-auto py-20 relative" ref={scope}>
            <SectionBackground />
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

            <div className="relative max-w-5xl mx-auto" data-animate>
                {/* Carousel Container */}
                <div className="relative overflow-hidden">
                    {/* Desktop: Show all projects in a grid */}
                    <div className="hidden md:block">
                        <div className="grid grid-cols-2 gap-6 lg:gap-8">
                            {featuredProjectsData.projects.map((project, index) => (
                                <div
                                    key={index}
                                    onMouseEnter={() => setIsAutoPlaying(false)}
                                    onMouseLeave={() => setIsAutoPlaying(true)}
                                >
                                    <div
                                        className="relative group overflow-hidden rounded-2xl border-2 transition-all duration-300 h-full"
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

                                        <div className="relative p-8 lg:p-10 min-h-[480px] flex flex-col items-center text-center justify-between">
                                            {/* Content */}
                                            <div className="flex flex-col items-center w-full">
                                                {/* Icon */}
                                                <div
                                                    className="h-16 w-16 lg:h-20 lg:w-20 rounded-2xl flex items-center justify-center shadow-lg transition-transform group-hover:scale-110 duration-300 mb-6"
                                                    style={{
                                                        background: `linear-gradient(135deg, ${project.theme.iconFrom}, ${project.theme.iconTo})`,
                                                        boxShadow: `0 10px 40px -10px ${project.theme.shadowColor}`,
                                                    }}
                                                >
                                                    {project.icon}
                                                </div>

                                                {/* Title */}
                                                <div className="mb-6">
                                                    <h3
                                                        className="text-3xl lg:text-4xl font-bold mb-3"
                                                        style={{ color: project.theme.textColor }}
                                                    >
                                                        {project.title}
                                                    </h3>
                                                    {project.badge && (
                                                        <span
                                                            className="inline-block text-xs font-bold px-3 py-1 rounded-full shadow-md"
                                                            style={{
                                                                background: project.theme.badgeGradient,
                                                                color: "white",
                                                            }}
                                                        >
                                                            {project.badge}
                                                        </span>
                                                    )}
                                                </div>

                                                {/* Description */}
                                                <p
                                                    className="text-base lg:text-lg font-medium mb-6 leading-relaxed max-w-sm"
                                                    style={{ color: project.theme.descriptionColor }}
                                                >
                                                    {project.tagline}
                                                </p>

                                                {/* Tags */}
                                                <div className="flex flex-wrap gap-2 justify-center mb-8">
                                                    {project.tags.map((tag, tagIndex) => (
                                                        <span
                                                            key={tagIndex}
                                                            className="text-xs px-2.5 py-1 rounded-full font-medium backdrop-blur-sm"
                                                            style={{
                                                                background: project.theme.tagBackground,
                                                                color: project.theme.tagColor,
                                                                border: `1px solid ${project.theme.tagBorder}`,
                                                            }}
                                                        >
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* CTA Button */}
                                            <div className="w-full">
                                                <Link href={project.link}>
                                                    <Button
                                                        size="lg"
                                                        className="w-full rounded-full shadow-xl transition-all duration-300 hover:scale-105 group/btn"
                                                        style={{
                                                            background: `linear-gradient(135deg, ${project.theme.buttonFrom}, ${project.theme.buttonTo})`,
                                                            color: "white",
                                                            boxShadow: `0 10px 40px -10px ${project.theme.shadowColor}`,
                                                        }}
                                                    >
                                                        {project.cta}
                                                        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover/btn:translate-x-1" />
                                                    </Button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Mobile: Carousel with one project at a time */}
                    <div className="md:hidden">
                        <div
                            className="flex transition-transform duration-500 ease-out"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {featuredProjectsData.projects.map((project, index) => (
                                <div
                                    key={index}
                                    className="min-w-full px-2"
                                    onMouseEnter={() => setIsAutoPlaying(false)}
                                    onMouseLeave={() => setIsAutoPlaying(true)}
                                >
                                    <div
                                        className="relative group overflow-hidden rounded-2xl border-2 transition-all duration-300"
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

                                        <div className="relative p-6 min-h-[450px] flex flex-col items-center text-center justify-between">
                                            {/* Content */}
                                            <div className="flex flex-col items-center w-full">
                                                {/* Icon */}
                                                <div
                                                    className="h-16 w-16 rounded-2xl flex items-center justify-center shadow-lg transition-transform group-hover:scale-110 duration-300 mb-6"
                                                    style={{
                                                        background: `linear-gradient(135deg, ${project.theme.iconFrom}, ${project.theme.iconTo})`,
                                                        boxShadow: `0 10px 40px -10px ${project.theme.shadowColor}`,
                                                    }}
                                                >
                                                    {project.icon}
                                                </div>

                                                {/* Title */}
                                                <div className="mb-6">
                                                    <h3
                                                        className="text-3xl font-bold mb-3"
                                                        style={{ color: project.theme.textColor }}
                                                    >
                                                        {project.title}
                                                    </h3>
                                                    {project.badge && (
                                                        <span
                                                            className="inline-block text-xs font-bold px-3 py-1 rounded-full shadow-md"
                                                            style={{
                                                                background: project.theme.badgeGradient,
                                                                color: "white",
                                                            }}
                                                        >
                                                            {project.badge}
                                                        </span>
                                                    )}
                                                </div>

                                                {/* Description */}
                                                <p
                                                    className="text-base font-medium mb-6 leading-relaxed"
                                                    style={{ color: project.theme.descriptionColor }}
                                                >
                                                    {project.tagline}
                                                </p>

                                                {/* Tags */}
                                                <div className="flex flex-wrap gap-2 justify-center mb-8">
                                                    {project.tags.map((tag, tagIndex) => (
                                                        <span
                                                            key={tagIndex}
                                                            className="text-xs px-2.5 py-1 rounded-full font-medium backdrop-blur-sm"
                                                            style={{
                                                                background: project.theme.tagBackground,
                                                                color: project.theme.tagColor,
                                                                border: `1px solid ${project.theme.tagBorder}`,
                                                            }}
                                                        >
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* CTA Button */}
                                            <div className="w-full">
                                                <Link href={project.link}>
                                                    <Button
                                                        size="lg"
                                                        className="w-full rounded-full shadow-xl transition-all duration-300 hover:scale-105 group/btn"
                                                        style={{
                                                            background: `linear-gradient(135deg, ${project.theme.buttonFrom}, ${project.theme.buttonTo})`,
                                                            color: "white",
                                                            boxShadow: `0 10px 40px -10px ${project.theme.shadowColor}`,
                                                        }}
                                                    >
                                                        {project.cta}
                                                        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover/btn:translate-x-1" />
                                                    </Button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Navigation Arrows - Mobile Only */}
                {isMobile && featuredProjectsData.projects.length > 1 && (
                    <>
                        <button
                            onClick={() => {
                                prevSlide();
                                setIsAutoPlaying(false);
                            }}
                            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm border border-border rounded-full p-2 hover:bg-background transition-colors"
                            aria-label="Previous project"
                        >
                            <ChevronLeft className="h-5 w-5" />
                        </button>
                        <button
                            onClick={() => {
                                nextSlide();
                                setIsAutoPlaying(false);
                            }}
                            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm border border-border rounded-full p-2 hover:bg-background transition-colors"
                            aria-label="Next project"
                        >
                            <ChevronRight className="h-5 w-5" />
                        </button>
                    </>
                )}

                {/* Dots Indicator - Mobile Only */}
                {isMobile && featuredProjectsData.projects.length > 1 && (
                    <div className="flex justify-center gap-2 mt-6">
                        {featuredProjectsData.projects.map((project, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className="transition-all duration-300"
                                aria-label={`Go to ${project.title}`}
                            >
                                <div
                                    className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex ? "w-8" : "w-2"
                                        }`}
                                    style={{
                                        background:
                                            index === currentIndex
                                                ? project.theme.accentColor
                                                : "rgba(128, 128, 128, 0.3)",
                                    }}
                                />
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
