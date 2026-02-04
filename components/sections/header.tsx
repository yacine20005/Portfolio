"use client";

import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { MdMail } from "react-icons/md";
import { MobileMenu } from "@/components/mobile-menu";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";
import { navLinks } from "@/lib/data";
import { useHeaderScrollAnimation } from "@/hooks/use-gsap-animations";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollToSection } = useSmoothScroll();
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const headerRef = useRef<HTMLElement | null>(null);
  useHeaderScrollAnimation(headerRef);

  // Function to extract emoji from link name
  const getEmojiFromName = (name: string) => {
    const emojiMap: Record<string, string> = {
      'home': '🏠',
      'about': '👨‍💻',
      'skills': '🛠️',
      'projects': '📁',
      'experience': '👨‍💼',
      'contact': '📞'
    };
    return emojiMap[name.toLowerCase().split(' ')[1]] || '•';
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (!isHomePage) {
      // Use sessionStorage signal then navigate to homepage for smooth scroll
      if (href.startsWith('#')) {
        sessionStorage.setItem('scrollTarget', href.substring(1));
        window.location.href = '/';
      } else {
        window.location.href = href;
      }
    } else {
      scrollToSection(e, href);
    }
  };
  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-background/90 backdrop-blur-md py-4 shadow-md"
        : "bg-transparent py-6"
        }`}
    >
      {isHomePage ? (
        <div className="container mx-auto flex items-center justify-between">
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, "#home")}
            className="text-xl font-mono text-primary hover:text-primary/80 transition-colors will-change-transform"
            data-header="logo"
          >
            Yacine._
          </a>
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="space-x-6">
              {navLinks.map((link, index) => (
                <NavigationMenuItem key={link.id}>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <NavigationMenuLink
                          href={link.href}
                          onClick={(e) => handleLinkClick(e, link.href)}
                          className="group flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors px-2 py-1 rounded-md hover:bg-accent/20"
                        >
                          <span className="text-primary text-xs">{`0${index + 1}`}</span>
                          <span className="inline-flex items-center">
                            {/* Full text on large screens */}
                            <span className="hidden xl:inline">{link.name}</span>
                            {/* Emoji only on medium-large screens */}
                            <span className="xl:hidden">
                              {getEmojiFromName(link.name)}
                            </span>
                          </span>
                        </NavigationMenuLink>
                      </TooltipTrigger>
                      <TooltipContent className="xl:hidden">
                        <p>{link.name.replace(/\/\/ /g, '').trim()}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <div className="hidden md:flex items-center space-x-4">
            <Link href="mailto:ya.hamadouche@gmail.com">
              <Button variant="outline" size="sm">
                <MdMail className="mr-2 h-4 w-4" />
                {/* Full text on large screens */}
                <span className="hidden lg:inline">Contact</span>
              </Button>
            </Link>
          </div>
          <MobileMenu />
        </div>
      ) : (
        <div className="container mx-auto">
          {/* Desktop layout */}
          <div className="hidden md:grid grid-cols-3 items-center">
            <div className="justify-self-start">
              <Link
                href="/"
                className="text-sm text-muted-foreground hover:text-primary transition-colors border border-border rounded-md px-3 py-1 hover:border-primary/50"
              >
                ← Back to Portfolio
              </Link>
            </div>
            <div className="justify-self-center">
              <Link
                href="/"
                className="text-xl font-mono text-primary hover:text-primary/80 transition-colors will-change-transform"
                data-header="logo"
              >
                Yacine._
              </Link>
            </div>
            <div className="justify-self-end" />
          </div>

          {/* Mobile layout */}
          <div className="md:hidden flex items-center justify-between">
            <Link
              href="/"
              className="text-sm text-muted-foreground hover:text-primary transition-colors border border-border rounded-md px-3 py-1 hover:border-primary/50"
            >
              ← Back
            </Link>
            <Link
              href="/"
              className="text-xl font-mono text-primary hover:text-primary/80 transition-colors will-change-transform"
              data-header="logo"
            >
              Yacine._
            </Link>
            <MobileMenu />
          </div>
        </div>
      )}
    </header>
  );
}
