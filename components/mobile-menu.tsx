"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const { scrollToSection } = useSmoothScroll();
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (!isHomePage) {
      // If we're not on the home page, redirect to home page with anchor
      window.location.href = `/${href}`;
    } else {
      // If we're on the home page, use normal scroll
      scrollToSection(e, href);
    }
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
          {!isHomePage && (
            <Link
              href="/"
              className="text-lg flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors border border-border rounded-md px-3 py-2 hover:border-primary/50"
              onClick={() => setOpen(false)}
            >
              <span className="text-primary text-sm">←</span>
              <span className="inline-flex items-center">
                // back to portfolio
              </span>
            </Link>
          )}
          {!isHomePage && <div className="border-t border-border" />}
          <a
            href={!isHomePage ? "/#home" : "#home"}
            className="text-lg flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
            onClick={(e) => handleLinkClick(e, "#home")}
          >
            <span className="text-primary text-sm">01</span>
            <span className="inline-flex items-center">// home</span>
          </a>
          <a
            href={!isHomePage ? "/#about" : "#about"}
            className="text-lg flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
            onClick={(e) => handleLinkClick(e, "#about")}
          >
            <span className="text-primary text-sm">02</span>
            <span className="inline-flex items-center">// about</span>
          </a>
          <a
            href={!isHomePage ? "/#skills" : "#skills"}
            className="text-lg flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
            onClick={(e) => handleLinkClick(e, "#skills")}
          >
            <span className="text-primary text-sm">03</span>
            <span className="inline-flex items-center">// skills</span>
          </a>
          <a
            href={!isHomePage ? "/#projects" : "#projects"}
            className="text-lg flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
            onClick={(e) => handleLinkClick(e, "#projects")}
          >
            <span className="text-primary text-sm">04</span>
            <span className="inline-flex items-center">// projects</span>
          </a>
          <a
            href={!isHomePage ? "/#experience" : "#experience"}
            className="text-lg flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
            onClick={(e) => handleLinkClick(e, "#experience")}
          >
            <span className="text-primary text-sm">05</span>
            <span className="inline-flex items-center">// experience</span>
          </a>
          <a
            href={!isHomePage ? "/#contact" : "#contact"}
            className="text-lg flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
            onClick={(e) => handleLinkClick(e, "#contact")}
          >
            <span className="text-primary text-sm">06</span>
            <span className="inline-flex items-center">// contact</span>
          </a>
          <div className="border-t border-border pt-6">
            <Link
              href="/spark-love"
              className="text-lg flex items-center space-x-2 text-muted-foreground hover:text-pink-500 transition-colors"
              onClick={() => setOpen(false)}
            >
              <span className="text-pink-500 text-sm">♡</span>
              <span className="inline-flex items-center">// spark love</span>
            </Link>
            <Link
              href="/orbit-market"
              className="text-lg flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
              onClick={() => setOpen(false)}
            >
              <span className="text-secondary text-sm">★</span>
              <span className="inline-flex items-center">// orbit market</span>
            </Link>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
