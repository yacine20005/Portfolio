"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Code, Send } from "lucide-react";
import { FaFolder, FaCloud, FaGamepad, FaChessBoard } from "react-icons/fa";
import { MdMemory } from "react-icons/md";
import { GiF1Car, GiMoonOrbit } from "react-icons/gi";
import { RiHeartsFill } from "react-icons/ri";
import { SectionBackground } from "@/components/section-background";
import { projectsData } from "@/lib/data";
import { useHorizontalReveal, useGsapStaggerOnView } from "@/hooks/use-gsap-animations";

const iconMap: { [key: string]: React.ElementType } = {
  FaFolder,
  FaCloud,
  FaGamepad,
  FaChessBoard,
  MdMemory,
  GiF1Car,
  GiMoonOrbit,
  RiHeartsFill,
};

export function ProjectsSection() {
  const scope = useGsapStaggerOnView({ y: 40 });
  const listScope = useHorizontalReveal();
  return (
    <section id="projects" className="container mx-auto py-20 relative" ref={scope}>
      <SectionBackground />
      <div className="space-y-4 mb-12" data-animate>
        <div className="flex items-center" data-animate>
          <span className="text-primary text-sm mr-2">03</span>
          <h2 className="text-2xl md:text-3xl font-bold">
            {projectsData.title}
          </h2>
        </div>
        <p className="text-muted-foreground max-w-2xl" data-animate>
          {projectsData.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8" ref={listScope as unknown as React.RefObject<HTMLDivElement>}>
        {projectsData.projects.map((project, index) => {
          const Icon = iconMap[project.icon];
          return (
            <div
              key={index}
              className="group border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-colors will-change-transform"
              data-reveal
            >
              <div className="h-48 bg-muted relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  {Icon && <Icon className="h-16 w-16 text-primary/50" />}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  {project.links.map((link, linkIndex) => {
                    const isInternalLink = link.href.startsWith("/");
                    return (
                      <Link
                        key={linkIndex}
                        href={link.href}
                        className="text-sm text-primary hover:underline flex items-center"
                        target={isInternalLink ? "_self" : "_blank"}
                        rel={isInternalLink ? "" : "noopener noreferrer"}
                      >
                        {link.name === "View Code" ? (
                          <Code className="h-4 w-4 mr-1" />
                        ) : (
                          <Send className="h-4 w-4 mr-1" />
                        )}{" "}
                        {link.name}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-10 text-center" data-animate>
        <Link
          href={projectsData.viewAllLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="outline">
            View All Projects <Code className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </section>
  );
}
