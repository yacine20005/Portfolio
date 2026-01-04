"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

const screenshots = [
    {
        src: "/nuage-screenshots/boutique.png",
        alt: "Nuage - Game Store Interface",
        caption: "Browse and purchase games with detailed information",
    },
    {
        src: "/nuage-screenshots/game-detail.png",
        alt: "Nuage - Game Detail Page",
        caption: "View game details, reviews, and achievement progress",
    },
    {
        src: "/nuage-screenshots/profile.png",
        alt: "Nuage - User Profile",
        caption: "Manage your library, friends, and achievements",
    },
    {
        src: "/nuage-screenshots/search.png",
        alt: "Nuage - Search & Filter",
        caption: "Advanced search by title, genre, developer, or publisher",
    },
];

export function NuageScreenshots() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? screenshots.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === screenshots.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="w-full max-w-5xl mx-auto">
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-card/30 backdrop-blur-sm border border-purple-500/20 shadow-2xl shadow-purple-500/10">
                {/* Navigation Buttons */}
                <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background/90 border border-purple-500/20"
                    onClick={goToPrevious}
                    aria-label="Previous screenshot"
                >
                    <ChevronLeft className="h-6 w-6 text-purple-400" />
                </Button>
                <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background/90 border border-purple-500/20"
                    onClick={goToNext}
                    aria-label="Next screenshot"
                >
                    <ChevronRight className="h-6 w-6 text-purple-400" />
                </Button>

                {/* Screenshot Display */}
                <div className="relative w-full h-full">
                    <Image
                        src={screenshots[currentIndex].src}
                        alt={screenshots[currentIndex].alt}
                        fill
                        className="object-contain p-8"
                        priority={currentIndex === 0}
                    />
                </div>

                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/95 to-transparent p-6">
                    <p className="text-center text-muted-foreground">
                        {screenshots[currentIndex].caption}
                    </p>
                </div>
            </div>

            {/* Indicators */}
            <div className="flex justify-center gap-2 mt-6">
                {screenshots.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`h-2 rounded-full transition-all ${index === currentIndex
                                ? "w-8 bg-purple-400"
                                : "w-2 bg-purple-400/30 hover:bg-purple-400/50"
                            }`}
                        aria-label={`Go to screenshot ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
