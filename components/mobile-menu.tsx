"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export function MobileMenu() {
  const [open, setOpen] = useState(false)

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
          <Link
            href="#home"
            className="text-lg flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
            onClick={() => setOpen(false)}
          >
            <span className="text-primary text-sm">01</span>
            <span className="inline-flex items-center">// home</span>
          </Link>
          <Link
            href="#about"
            className="text-lg flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
            onClick={() => setOpen(false)}
          >
            <span className="text-primary text-sm">02</span>
            <span className="inline-flex items-center">// about</span>
          </Link>
          <Link
            href="#skills"
            className="text-lg flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
            onClick={() => setOpen(false)}
          >
            <span className="text-primary text-sm">03</span>
            <span className="inline-flex items-center">// skills</span>
          </Link>
          <Link
            href="#projects"
            className="text-lg flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
            onClick={() => setOpen(false)}
          >
            <span className="text-primary text-sm">04</span>
            <span className="inline-flex items-center">// projects</span>
          </Link>
          <Link
            href="#experience"
            className="text-lg flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
            onClick={() => setOpen(false)}
          >
            <span className="text-primary text-sm">05</span>
            <span className="inline-flex items-center">// experience</span>
          </Link>
          <Link
            href="#contact"
            className="text-lg flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
            onClick={() => setOpen(false)}
          >
            <span className="text-primary text-sm">06</span>
            <span className="inline-flex items-center">// contact</span>
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  )
}

