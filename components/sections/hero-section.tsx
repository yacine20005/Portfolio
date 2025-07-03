"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Code, Send } from "lucide-react";
import { MdDownload } from "react-icons/md";
import { AnimatedCanvas } from "@/components/animated-canvas";
import { FloatingElements } from "@/components/floating-elements";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";
import { heroData } from "@/lib/data";

export function HeroSection() {
    const { scrollToSection } = useSmoothScroll();

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            <AnimatedCanvas />
            <FloatingElements count={10} />

            <div className="container mx-auto relative z-10 pt-20">
                <div className="flex flex-col items-center justify-center text-center">
                    <h1 className="text-[8rem] md:text-[12rem] lg:text-[16rem] font-bold tracking-tighter leading-none animate-fade-in">
                        {heroData.name}
                    </h1>
                    <p className="text-xl md:text-2xl font-mono text-muted-foreground mt-4 md:mt-0 animate-fade-in-delay">
                        {heroData.title}
                    </p>
                    <div className="max-w-lg mx-auto mt-8 text-center animate-fade-in-delay">
                        <p className="text-muted-foreground">
                            {heroData.description}
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-4 mt-8 justify-center animate-fade-in-delay-3">
                        <a
                            href={heroData.cta.projects.href}
                            onClick={(e) => scrollToSection(e, heroData.cta.projects.href)}
                            className="inline-flex h-10 items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                        >
                            {heroData.cta.projects.text} <Code className="ml-2 h-4 w-4" />
                        </a>
                        <a
                            href={heroData.cta.contact.href}
                            onClick={(e) => scrollToSection(e, heroData.cta.contact.href)}
                            className="inline-flex h-10 items-center justify-center rounded-full border border-input bg-background px-4 py-2 text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                        >
                            {heroData.cta.contact.text} <Send className="ml-2 h-4 w-4" />
                        </a>
                        <Link href={heroData.cta.cv.href} download>
                            <Button variant="outline" size="lg" className="rounded-full">
                                {heroData.cta.cv.text} <MdDownload className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>
                    </div>

                    <div className="w-full flex justify-center mt-20 animate-bounce hidden md:flex">
                        <div className="inline-flex flex-col items-center">
                            <p className="text-muted-foreground text-sm mb-2">
                                Scroll Down
                            </p>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-primary"
                            >
                                <line x1="12" y1="5" x2="12" y2="19"></line>
                                <polyline points="19 12 12 19 5 12"></polyline>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
