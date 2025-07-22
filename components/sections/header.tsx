"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MdMail } from "react-icons/md";
import { MobileMenu } from "@/components/mobile-menu";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";
import { navLinks } from "@/lib/data";

export function Header() {
    const [scrolled, setScrolled] = useState(false);
    const { scrollToSection } = useSmoothScroll();
    const pathname = usePathname();
    const isHomePage = pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (!isHomePage) {
            // If we're not on the home page, redirect to home page with anchor
            window.location.href = `/${href}`;
        } else {
            // If we're on the home page, use normal scroll
            scrollToSection(e, href);
        }
    };  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md py-4 shadow-md"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <a
          href={isHomePage ? "#home" : "/#home"}
          onClick={(e) => handleLinkClick(e, "#home")}
          className="text-xl font-mono text-primary hover:text-primary/80 transition-colors"
        >
          Yacine._
        </a>
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link, index) => (
            <a
              key={link.id}
              href={isHomePage ? link.href : `/${link.href}`}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="group flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <span className="text-primary text-xs">{`0${index + 1}`}</span>
              <span className="inline-flex items-center">{link.name}</span>
            </a>
          ))}
        </nav>
        <div className="hidden md:flex items-center space-x-4">
          <Link
            href="/orbit-market"
            className="text-sm text-muted-foreground hover:text-primary transition-colors border border-border rounded-md px-3 py-1 hover:border-primary/50"
          >
            Orbit Market
          </Link>
          <Link href="mailto:ya.hamadouche@gmail.com">
            <Button variant="outline" size="sm">
              <MdMail className="mr-2 h-4 w-4" /> Contact
            </Button>
          </Link>
        </div>
        <MobileMenu />
      </div>
    </header>
  );
}
