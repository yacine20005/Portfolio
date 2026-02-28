"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";
import { navLinks } from "@/lib/data";

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
      window.location.href = `/${href}`;
    } else {
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
              <span className="inline-flex items-center">// back to portfolio</span>
            </Link>
          )}
          {!isHomePage && <div className="border-t border-border" />}
          
          {/* Home link */}
          <a
            href={!isHomePage ? "/#home" : "#home"}
            className="text-lg flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
            onClick={(e) => handleLinkClick(e, "#home")}
          >
            <span className="text-primary text-sm">00</span>
            <span className="inline-flex items-center">// home 🏠</span>
          </a>
          
          {/* Dynamic nav links */}
          {navLinks.map((link, index) => (
            <a
              key={link.id}
              href={!isHomePage ? `/${link.href}` : link.href}
              className="text-lg flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
              onClick={(e) => handleLinkClick(e, link.href)}
            >
              <span className="text-primary text-sm">{String(index + 1).padStart(2, '0')}</span>
              <span className="inline-flex items-center">{link.name}</span>
            </a>
          ))}
          
          {/* Featured projects */}
          <div className="border-t border-border pt-6 space-y-4">
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
              className="text-lg flex items-center space-x-2 text-muted-foreground hover:text-blue-400 transition-colors"
              onClick={() => setOpen(false)}
            >
              <span className="text-blue-400 text-sm">◉</span>
              <span className="inline-flex items-center">// orbit market</span>
            </Link>
            <Link
              href="/cobble-coach"
              className="text-lg flex items-center space-x-2 text-muted-foreground hover:text-indigo-400 transition-colors"
              onClick={() => setOpen(false)}
            >
              <span className="text-indigo-400 text-sm">⬡</span>
              <span className="inline-flex items-center">// cobble coach</span>
            </Link>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
