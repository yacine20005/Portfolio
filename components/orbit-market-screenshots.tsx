"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ExternalLink, Github, ZoomIn } from "lucide-react";
import { GiMoonOrbit, GiAlienFire } from "react-icons/gi";

const screenshots = [
  {
    id: "home",
    title: "Home Screen",
    description:
      "Main dashboard with current features and coming soon sections",
    image: "/orbit-market-screenshots/Home.png",
  },
  {
    id: "xur",
    title: "Xûr Tracker",
    description: "Real-time Xûr inventory with detailed item information",
    image: "/orbit-market-screenshots/Xur.png",
  },
  {
    id: "settings",
    title: "Settings",
    description: "App configuration and about information",
    image: "/orbit-market-screenshots/Settings.png",
  },
];

export function OrbitMarketScreenshots() {
  const [selectedScreenshot, setSelectedScreenshot] = useState(0);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      {/* Screenshots Carousel */}
      <div className="space-y-4">
        <Card className="bg-gradient-to-br from-primary/20 to-secondary/20 border border-border">
          <CardContent className="p-4">
            <Dialog>
              <DialogTrigger asChild>
                <div className="relative mx-auto w-60 h-[500px] bg-background/90 rounded-xl border border-border overflow-hidden cursor-pointer group">
                  {/* Check if screenshot image exists, otherwise show placeholder */}
                  {screenshots[selectedScreenshot].image ? (
                    <div className="relative w-full h-full">
                      <Image
                        src={screenshots[selectedScreenshot].image}
                        alt={screenshots[selectedScreenshot].title}
                        fill
                        className="object-contain rounded-xl transition-transform group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 288px"
                      />
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <ZoomIn className="h-8 w-8 text-primary" />
                      </div>
                      {/* Overlay with screen info */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-3">
                        <div className="text-center">
                          <div className="text-sm text-primary font-medium">
                            {screenshots[selectedScreenshot].title}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {screenshots[selectedScreenshot].description}
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    // Fallback placeholder when no screenshot is available
                    <div className="flex flex-col items-center justify-center gap-4 w-full h-full">
                      <Image
                        src="/orbit-market-adaptive-icon.png"
                        alt="Orbit Market App Icon"
                        width={64}
                        height={64}
                        className="rounded-xl animate-pulse"
                      />
                      <div className="text-center">
                        <div className="text-sm text-primary font-mono">
                          {screenshots[selectedScreenshot].title}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {screenshots[selectedScreenshot].description}
                        </div>
                      </div>
                      <div className="space-y-2 w-full px-4">
                        <div className="h-2 bg-primary/20 rounded-full">
                          <div className="h-2 bg-primary rounded-full w-3/4 animate-pulse"></div>
                        </div>
                        <div className="h-2 bg-secondary/20 rounded-full">
                          <div className="h-2 bg-secondary rounded-full w-1/2 animate-pulse"></div>
                        </div>
                        <div className="h-2 bg-accent/20 rounded-full">
                          <div className="h-2 bg-accent rounded-full w-2/3 animate-pulse"></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </DialogTrigger>
              
              <DialogContent className="max-w-4xl">
                <DialogHeader>
                  <DialogTitle>{screenshots[selectedScreenshot].title}</DialogTitle>
                </DialogHeader>
                <div className="relative h-[600px]">
                  <Image
                    src={screenshots[selectedScreenshot].image}
                    alt={screenshots[selectedScreenshot].title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 896px"
                  />
                </div>
                <p className="text-muted-foreground text-center">
                  {screenshots[selectedScreenshot].description}
                </p>
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>

        {/* Screenshot Navigation */}
        <div className="flex justify-center gap-2">
          {screenshots.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${
                selectedScreenshot === index
                  ? "bg-primary"
                  : "bg-border hover:bg-muted-foreground"
              }`}
              onClick={() => setSelectedScreenshot(index)}
            />
          ))}
        </div>
      </div>

      {/* App Info */}
      <div className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-2xl font-bold">Mobile Experience</h3>
          <p className="text-muted-foreground leading-relaxed">
            Orbit Market provides a seamless mobile experience for tracking your
            favorite game vendors. Built with React Native and Expo, it delivers
            native performance on both iOS and Android.
          </p>
        </div>

        <div className="space-y-3">
          <h4 className="text-lg font-semibold">Current Features:</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
              Real-time Xûr inventory tracking
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
              Detailed weapon and armor statistics
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
              Automatic data refresh
            </li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <Button size="sm" asChild>
            <a
              href="https://github.com/yacine20005/Orbit-Market/releases/latest/download/orbit-market.apk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              Download APK
            </a>
          </Button>
          <Button variant="outline" size="sm" asChild>
            <a
              href="https://github.com/yacine20005/Orbit-Market"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-4 w-4 mr-2" />
              Source Code
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
