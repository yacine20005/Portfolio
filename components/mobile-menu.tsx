"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const { scrollToSection } = useSmoothScroll();

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    scrollToSection(e, href);
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <nav className="flex flex-col gap-6 mt-10">
          <a
            href="#home"
            className="text-lg flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
            onClick={(e) => handleLinkClick(e, "#home")}
          >
            <span className="text-primary text-sm">01</span>
            <span className="inline-flex items-center">// home</span>
          </a>
          <a
            href="#about"
            className="text-lg flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
            onClick={(e) => handleLinkClick(e, "#about")}
          >
            <span className="text-primary text-sm">02</span>
            <span className="inline-flex items-center">// about</span>
          </a>
          <a
            href="#skills"
            className="text-lg flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
            onClick={(e) => handleLinkClick(e, "#skills")}
          >
            <span className="text-primary text-sm">03</span>
            <span className="inline-flex items-center">// skills</span>
          </a>
          <a
            href="#projects"
            className="text-lg flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
            onClick={(e) => handleLinkClick(e, "#projects")}
          >
            <span className="text-primary text-sm">04</span>
            <span className="inline-flex items-center">// projects</span>
          </a>
          <a
            href="#experience"
            className="text-lg flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
            onClick={(e) => handleLinkClick(e, "#experience")}
          >
            <span className="text-primary text-sm">05</span>
            <span className="inline-flex items-center">// experience</span>
          </a>
          <a
            href="#contact"
            className="text-lg flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
            onClick={(e) => handleLinkClick(e, "#contact")}
          >
            <span className="text-primary text-sm">06</span>
            <span className="inline-flex items-center">// contact</span>
          </a>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
