"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Send } from "lucide-react";
import { FaFolder, FaCloud, FaGamepad, FaChessBoard } from "react-icons/fa";
import { MdMemory } from "react-icons/md";
import { GiF1Car, GiMoonOrbit } from "react-icons/gi";
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
};

export function ProjectsSection() {
  const scope = useGsapStaggerOnView({ y: 40 });
  const listScope = useHorizontalReveal();
  return (
    <section id="projects" className="container mx-auto py-20 relative" ref={scope}>
      <SectionBackground />
      <div className="space-y-4 mb-12" data-animate>
        <div className="flex items-center" data-animate>
          <span className="text-primary text-sm mr-2">04</span>
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
            <Card
              key={index}
              className="group border border-border hover:border-primary/50 transition-all duration-300 hover:scale-[1.02]"
              data-reveal
            >
              <CardHeader className="p-0">
                <div className="h-48 bg-muted relative overflow-hidden rounded-t-lg">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/15 via-cyan-500/10 to-teal-500/15"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    {Icon && <Icon className="h-16 w-16 text-primary/50" />}
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="outline"
                      className="text-xs bg-primary/10 text-primary border-primary/20"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Links */}
                <div className="flex flex-wrap items-center gap-4">
                  {project.links.map((link, linkIndex) => {
                    const isInternalLink = link.href.startsWith("/");
                    const isHighlightProject =
                      (project.title === "Orbit Market" || project.title === "Spark Love") &&
                      link.name === "Learn More";

                    if (isHighlightProject) {
                      return (
                        <Button
                          key={linkIndex}
                          asChild
                          className={`glow-animated ${project.title === "Spark Love" ? "glow-spark" : ""}`}
                          variant="outline"
                        >
                          <Link
                            href={link.href}
                            target="_self"
                            aria-label={`${project.title} — Learn More`}
                          >
                            <Send className="h-4 w-4 mr-2" />
                            {link.name}
                          </Link>
                        </Button>
                      );
                    }

                    return (
                      <Link
                        key={linkIndex}
                        href={link.href}
                        className="text-sm text-primary hover:underline flex items-center transition-colors"
                        target={isInternalLink ? "_self" : "_blank"}
                        rel={isInternalLink ? "" : "noopener noreferrer"}
                      >
                        {link.name === "View Code" ? (
                          <Code className="h-4 w-4 mr-2" />
                        ) : (
                          <Send className="h-4 w-4 mr-2" />
                        )}
                        {link.name}
                      </Link>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="mt-10 text-center" data-animate>
        <Link
          href={projectsData.viewAllLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="outline" size="lg">
            View All Projects
            <Code className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </section>
  );
}
