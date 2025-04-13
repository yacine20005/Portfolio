"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Code, Send } from "lucide-react";
import { MdMail, MdDownload } from "react-icons/md";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaDiscord,
  FaCloud,
  FaGamepad,
  FaFolder,
  FaChessBoard,
} from "react-icons/fa";
import { GiSwordsEmblem } from "react-icons/gi";
import { SiLeagueoflegends } from "react-icons/si";
import { MobileMenu } from "@/components/mobile-menu";
import { AnimatedCanvas } from "@/components/animated-canvas";
import { SectionBackground } from "@/components/section-background";
import { FloatingElements } from "@/components/floating-elements";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollToSection } = useSmoothScroll();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Navigation */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/90 backdrop-blur-md py-4 shadow-md"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between">
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, "#home")}
            className="text-xl font-mono text-primary hover:text-primary/80 transition-colors"
          >
            Yacine._
          </a>
          <nav className="hidden md:flex items-center space-x-6">
            <a
              href="#home"
              onClick={(e) => scrollToSection(e, "#home")}
              className="group flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <span className="text-primary text-xs">01</span>
              <span className="inline-flex items-center">// home</span>
            </a>
            <a
              href="#about"
              onClick={(e) => scrollToSection(e, "#about")}
              className="group flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <span className="text-primary text-xs">02</span>
              <span className="inline-flex items-center">// about</span>
            </a>
            <a
              href="#skills"
              onClick={(e) => scrollToSection(e, "#skills")}
              className="group flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <span className="text-primary text-xs">03</span>
              <span className="inline-flex items-center">// skills</span>
            </a>
            <a
              href="#projects"
              onClick={(e) => scrollToSection(e, "#projects")}
              className="group flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <span className="text-primary text-xs">04</span>
              <span className="inline-flex items-center">// projects</span>
            </a>
            <a
              href="#experience"
              onClick={(e) => scrollToSection(e, "#experience")}
              className="group flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <span className="text-primary text-xs">05</span>
              <span className="inline-flex items-center">// experience</span>
            </a>
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "#contact")}
              className="group flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <span className="text-primary text-xs">06</span>
              <span className="inline-flex items-center">// contact</span>
            </a>
          </nav>
          <Link
            href="mailto:ya.hamadouche@gmail.com"
            className="hidden md:flex"
          >
            <Button variant="outline" size="sm">
              <MdMail className="mr-2 h-4 w-4" /> Contact
            </Button>
          </Link>
          <MobileMenu />
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <AnimatedCanvas />
        <FloatingElements count={10} />

        <div className="container mx-auto relative z-10 pt-20">
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="text-[8rem] md:text-[12rem] lg:text-[16rem] font-bold tracking-tighter leading-none animate-fade-in">
              YACINE
            </h1>
            <p className="text-xl md:text-2xl font-mono text-muted-foreground mt-4 md:mt-0 animate-fade-in-delay">
              COMPUTER SCIENCE STUDENT & DEVELOPER.
            </p>
            <div className="max-w-lg mx-auto mt-8 text-center animate-fade-in-delay">
              <p className="text-muted-foreground">
                Hi! I'm Yacine, currently studying Computer Science at Gustave
                Eiffel University 🎓 where I turn coffee ☕ into code (and
                sometimes into bugs).
              </p>
            </div>
            <div className="flex flex-wrap gap-4 mt-8 justify-center animate-fade-in-delay-3">
              <a
                href="#projects"
                onClick={(e) => scrollToSection(e, "#projects")}
                className="inline-flex h-10 items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
              >
                View Projects <Code className="ml-2 h-4 w-4" />
              </a>
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, "#contact")}
                className="inline-flex h-10 items-center justify-center rounded-full border border-input bg-background px-4 py-2 text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
              >
                Get in Touch <Send className="ml-2 h-4 w-4" />
              </a>
              <Link href="/documents/CV.pdf" download>
                <Button variant="outline" size="lg" className="rounded-full">
                  Download CV <MdDownload className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="w-full flex justify-center mt-20 animate-bounce hidden md:flex">
              <div className="inline-flex flex-col items-center">
                <p className="text-muted-foreground text-sm mb-2">
                  Scroll Down
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <polyline points="19 12 12 19 5 12"></polyline>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section Placeholder */}
      <section id="about" className="py-20 bg-background relative">
        <SectionBackground />
        <div className="container mx-auto">
          <div className="space-y-4 mb-12">
            <div className="flex items-center">
              <span className="text-primary text-sm mr-2">02</span>
              <h2 className="text-2xl md:text-3xl font-bold">// about me</h2>
            </div>
            <p className="text-muted-foreground max-w-2xl">
              A bit more about who I am and what I'm looking for.
            </p>
          </div>
          I work on various projects, whether personal or academic, which allow
          me to put my skills into practice and sometimes explore new
          technologies 🔍.
          <br />
          <br />
          Feel free to check out my repositories to discover my achievements and
          collaborations 🤝.
          <br />
          <br />I am looking for opportunities to take on new challenges and
          collaborate on innovative projects 💡.
          <br />
          <br />
          My goal is to perfect my programming skills.
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="container mx-auto py-20 relative">
        <SectionBackground />
        <div className="space-y-4 mb-12">
          <div className="flex items-center">
            <span className="text-primary text-sm mr-2">03</span>
            <h2 className="text-2xl md:text-3xl font-bold">// skills</h2>
          </div>
          <p className="text-muted-foreground max-w-2xl">
            Here are some of the technologies and tools I've been working with
            during my studies and personal projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
            <h3 className="text-lg font-semibold mb-4">
              Programming Languages
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mr-2"></span>
                Python
              </li>
              <li className="flex items-center">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mr-2"></span>
                Flask
              </li>
              <li className="flex items-center">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mr-2"></span>
                C
              </li>
              <li className="flex items-center">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mr-2"></span>
                HTML / CSS
              </li>
              <li className="flex items-center">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mr-2"></span>
                JavaScript / TypeScript
              </li>
              <li className="flex items-center">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mr-2"></span>
                React / Next.js
              </li>
              <li className="flex items-center">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mr-2"></span>
                Bash
              </li>
              <li className="flex items-center">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mr-2"></span>
                LaTeX
              </li>
            </ul>
          </div>

          <div className="border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
            <h3 className="text-lg font-semibold mb-4">
              Cloud & Infrastructure
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mr-2"></span>
                Google Cloud
              </li>
              <li className="flex items-center">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mr-2"></span>
                PostgreSQL
              </li>
              <li className="flex items-center">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mr-2"></span>
                Vercel
              </li>
              <li className="flex items-center">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mr-2"></span>
                DigitalOcean
              </li>
            </ul>
          </div>

          <div className="border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
            <h3 className="text-lg font-semibold mb-4">Tools & Libraries</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mr-2"></span>
                Git / GitHub
              </li>
              <li className="flex items-center">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mr-2"></span>
                Matplotlib
              </li>
              <li className="flex items-center">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mr-2"></span>
                NumPy
              </li>
              <li className="flex items-center">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mr-2"></span>
                Ncurses
              </li>
              <li className="flex items-center">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mr-2"></span>
                MLV Library
              </li>
              <li className="flex items-center">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mr-2"></span>
                Sanity CMS
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container mx-auto py-20 relative">
        <SectionBackground />
        <div className="space-y-4 mb-12">
          <div className="flex items-center">
            <span className="text-primary text-sm mr-2">04</span>
            <h2 className="text-2xl md:text-3xl font-bold">// projects</h2>
          </div>
          <p className="text-muted-foreground max-w-2xl">
            A selection of projects I've worked on during my academic journey
            and in my free time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="group border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-colors">
            <div className="h-48 bg-muted relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <FaFolder className="h-16 w-16 text-primary/50" />
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                Personal Portfolio Website
              </h3>
              <p className="text-muted-foreground mb-4">
                A responsive portfolio website built with Next.js and Tailwind
                CSS to showcase my projects and skills.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                  Next.js
                </span>
                <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                  Tailwind CSS
                </span>
                <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                  TypeScript
                </span>
              </div>
              <div className="flex items-center gap-4">
                <Link
                  href="https://github.com/yacine20005/Portfolio"
                  className="text-sm text-primary hover:underline flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="h-4 w-4 mr-1" /> View Code
                </Link>
                <Link
                  href="#"
                  className="text-sm text-primary hover:underline flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Send className="h-4 w-4 mr-1" /> Live Demo
                </Link>
              </div>
            </div>
          </div>

          <div className="group border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-colors">
            <div className="h-48 bg-muted relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-primary/20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <FaCloud className="h-16 w-16 text-primary/50" />
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                Nuage
              </h3>
              <p className="text-muted-foreground mb-4">
                Nuage is a full-stack web-based video game management
                application. It enables users to view, buy, share and comment on
                video games. Users can also manage their profile, add friends
                and track their successes.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                  HTML
                </span>
                <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                  CSS
                </span>
                <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                  Python
                </span>
                <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                  Flask
                </span>
                <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                  PostgreSQL
                </span>
              </div>
              <div className="flex items-center gap-4">
                <Link
                  href="https://github.com/yacine20005/Nuage"
                  className="text-sm text-primary hover:underline flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="h-4 w-4 mr-1" /> View Code
                </Link>
                <Link
                  href="https://nuage-sigma.vercel.app/boutique"
                  className="text-sm text-primary hover:underline flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Send className="h-4 w-4 mr-1" /> Live Demo
                </Link>
              </div>
            </div>
          </div>
          <div className="group border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-colors">
            <div className="h-48 bg-muted relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <FaGamepad className="h-16 w-16 text-primary/50" />
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                Aogiri Website
              </h3>
              <p className="text-muted-foreground mb-4">
                A responsive website built with Next.js and Tailwind CSS to
                present the Aogiri association, its activities and its
                contributions to the community of multiple video games.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                  Next.js
                </span>
                <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                  Tailwind CSS
                </span>
                <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                  TypeScript
                </span>
              </div>
              <div className="flex items-center gap-4">
                <Link
                  href="https://aogirihouse-yacine20005s.vercel.app/"
                  className="text-sm text-primary hover:underline flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Send className="h-4 w-4 mr-1" /> Live Demo
                </Link>
              </div>
            </div>
          </div>
          <div className="group border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-colors">
            <div className="h-48 bg-muted relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-primary/20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <FaChessBoard className="h-16 w-16 text-primary/50" />
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                Chomp
              </h3>
              <p className="text-muted-foreground mb-4">
                Chomp is a strategy game for two players. The game is played on
                a rectangular bar made up of chocolate squares. The aim of the
                game is to avoid taking the poisoned chocolate square at the top
                left of the bar.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                  C
                </span>
                <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                  Ncurses
                </span>
                <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                  Makefile
                </span>
              </div>
              <div className="flex items-center gap-4">
                <Link
                  href="https://github.com/yacine20005/Chomp"
                  className="text-sm text-primary hover:underline flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="h-4 w-4 mr-1" /> View Code
                </Link>
              </div>
            </div>
          </div>
          <div className="group border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-colors">
            <div className="h-48 bg-muted relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-primary/20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <GiSwordsEmblem className="h-16 w-16 text-primary/50" />
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                Darkest Dungeon
              </h3>
              <p className="text-muted-foreground mb-4">
                Darkest-Dungeon-C is a game with rogue-like elements, as well as
                resource and stress management. The game is developed in the C
                language and is played on the command line.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                  C
                </span>
              </div>
              <div className="flex items-center gap-4">
                <Link
                  href="https://github.com/yacine20005/Darkest-Dungeon-C"
                  className="text-sm text-primary hover:underline flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="h-4 w-4 mr-1" /> View Code
                </Link>
              </div>
            </div>
          </div>
          <div className="group border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-colors">
            <div className="h-48 bg-muted relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-primary/20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <SiLeagueoflegends className="h-16 w-16 text-primary/50" />
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                Clash Companion - WIP
              </h3>
              <p className="text-muted-foreground mb-4">
                Clash Companion is a companion app for Overwolf and the Clash
                game mode of League of Legends. The app provides information
                about teammates and opponents before the match, helping players
                to better prepare for their games.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                  React
                </span>
                <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                  Overwolf
                </span>
                <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                  TypeScript
                </span>
                <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                  League of Legends
                </span>
              </div>
              <div className="flex items-center gap-4">
                <Link
                  href="https://github.com/yacine20005/Clash-Compagnon"
                  className="text-sm text-primary hover:underline flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="h-4 w-4 mr-1" /> View Code
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <Link
            href="https://github.com/yacine20005"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline">
              View All Projects <Code className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="container mx-auto py-20 relative">
        <SectionBackground />
        <div className="space-y-4 mb-12">
          <div className="flex items-center">
            <span className="text-primary text-sm mr-2">05</span>
            <h2 className="text-2xl md:text-3xl font-bold">// experience</h2>
          </div>
          <p className="text-muted-foreground max-w-2xl">
            My academic journey and professional experiences.
          </p>
        </div>

        <div className="space-y-8">
          <div className="relative pl-8 border-l border-border">
            <div className="absolute w-4 h-4 bg-primary rounded-full -left-2 top-0"></div>
            <div className="mb-1 text-sm text-muted-foreground">
              Since June 2023
            </div>
            <h3 className="text-xl font-semibold">Self-employed</h3>
            <p className="text-primary">Freelancer</p>
            <p className="mt-2 text-muted-foreground">
              Development and deployment of websites for associations and
              businesses, including "Aogiri" - a website for an esports
              association using Next.js, TypeScript, Tailwind CSS and Sanity
              CMS. Client needs analysis, proposal of technical solutions and
              client prospecting management.
            </p>
          </div>

          <div className="relative pl-8 border-l border-border">
            <div className="absolute w-4 h-4 bg-primary rounded-full -left-2 top-0"></div>
            <div className="mb-1 text-sm text-muted-foreground">
              Since September 2023
            </div>
            <h3 className="text-xl font-semibold">
              Bachelor's Degree in Mathematics/Computer Science
            </h3>
            <p className="text-primary">
              Gustave Eiffel University - Champs-sur-Marne
            </p>
            <p className="mt-2 text-muted-foreground">
              Academic training focused on mathematics and computer science,
              including projects such as "Nuage" - a video game management
              platform developed with Python/Flask, PostgreSQL and HTML/CSS, as
              well as "Chomp" - a strategy game in C using the Ncurses library.
            </p>
          </div>

          <div className="relative pl-8 border-l border-border">
            <div className="absolute w-4 h-4 bg-primary rounded-full -left-2 top-0"></div>
            <div className="mb-1 text-sm text-muted-foreground">
              September 2020 - July 2023
            </div>
            <h3 className="text-xl font-semibold">General Baccalaureate</h3>
            <p className="text-primary">
              Louis Armand High School - Nogent-sur-Marne
            </p>
            <p className="mt-2 text-muted-foreground">
              Specializations in mathematics and computer science. With Honors
              (20/20 in computer science, 15/20 in mathematics).
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto py-20 relative">
        <SectionBackground />
        <div className="space-y-4 mb-12">
          <div className="flex items-center">
            <span className="text-primary text-sm mr-2">06</span>
            <h2 className="text-2xl md:text-3xl font-bold">// contact</h2>
          </div>
          <p className="text-muted-foreground max-w-2xl">
            Feel free to reach out if you want to collaborate on a project, have
            a question, or just want to connect.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <a
            href="mailto:ya.hamadouche@gmail.com"
            className="flex flex-col items-center p-6 border border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-all duration-300 group"
          >
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <MdMail className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Email</h3>
            <p className="text-muted-foreground text-center mb-4">
              ya.hamadouche@gmail.com
            </p>
            <Button
              variant="default"
              className="mt-auto bg-gradient-to-r from-primary/90 to-primary hover:from-primary hover:to-primary/90 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <MdMail className="mr-2 h-4 w-4" /> Send Email
            </Button>
          </a>

          <a
            href="https://github.com/yacine20005"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-6 border border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-all duration-300 group"
          >
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <FaGithub className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">GitHub</h3>
            <p className="text-muted-foreground text-center mb-4">
              yacine20005
            </p>
            <Button
              variant="default"
              className="mt-auto bg-gradient-to-r from-primary/90 to-primary hover:from-primary hover:to-primary/90 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <FaGithub className="mr-2 h-4 w-4" /> View Profile
            </Button>
          </a>

          <a
            href="https://linkedin.com/in/yacine-hamadouche"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-6 border border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-all duration-300 group"
          >
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <FaLinkedin className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">LinkedIn</h3>
            <p className="text-muted-foreground text-center mb-4">
              yacine-hamadouche
            </p>
            <Button
              variant="default"
              className="mt-auto bg-gradient-to-r from-primary/90 to-primary hover:from-primary hover:to-primary/90 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <FaLinkedin className="mr-2 h-4 w-4" /> Connect
            </Button>
          </a>

          <a
            href="https://instagram.com/yacine20005"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-6 border border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-all duration-300 group"
          >
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <FaInstagram className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Instagram</h3>
            <p className="text-muted-foreground text-center mb-4">
              yacine20005
            </p>
            <Button
              variant="default"
              className="mt-auto bg-gradient-to-r from-primary/90 to-primary hover:from-primary hover:to-primary/90 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <FaInstagram className="mr-2 h-4 w-4" /> Follow
            </Button>
          </a>

          <a
            href="https://discord.com/users/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-6 border border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-all duration-300 group"
          >
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <FaDiscord className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Discord</h3>
            <p className="text-muted-foreground text-center mb-4">
              yacine20005
            </p>
            <Button
              variant="default"
              className="mt-auto bg-gradient-to-r from-primary/90 to-primary hover:from-primary hover:to-primary/90 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <FaDiscord className="mr-2 h-4 w-4" /> Join Server
            </Button>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Link
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-mono text-primary hover:text-primary/80 transition-colors"
              >
                Yacine._
              </Link>
              <p className="text-sm text-muted-foreground mt-1">
                Computer Science Student & Developer
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                href="https://github.com/yacine20005"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <FaGithub className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://linkedin.com/in/yacine-hamadouche"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <FaLinkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="mailto:ya.hamadouche@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <MdMail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
              <Link
                href="https://instagram.com/yacine20005"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <FaInstagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://discord.com/users/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <FaDiscord className="h-5 w-5" />
                <span className="sr-only">Discord</span>
              </Link>
            </div>
          </div>
          <div className="mt-8 text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Yacine. All rights reserved.</p>
            <p className="mt-1">Built with Next.js and Tailwind CSS</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
