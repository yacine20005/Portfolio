"use client";

import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { SectionBackground } from "@/components/section-background";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import {
  Heart,
  NotebookPen,
  ClipboardPen,
  Film,
  Calendar,
  ShieldCheck,
  Sparkles,
  Users,
  Crown,
  Check,
} from "lucide-react";
import Script from "next/script";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";
import { useSparkLoveTitleAnimation, useSparkLoveContentAnimations } from "@/hooks/use-gsap-animations";

const tech = ["iOS", "Android", "Cloud Sync"];

export default function SparkLovePage() {
  const { scrollToSection } = useSmoothScroll();
  const titleRef = useSparkLoveTitleAnimation();
  const contentScope = useSparkLoveContentAnimations();
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <Header />
      <main id="main-content" role="main">
        {/* Full-screen Hero */}
        <section
          className="relative min-h-[100svh] flex items-center justify-center overflow-hidden"
          aria-labelledby="spark-love-hero-heading"
        >
          <SectionBackground />

          <div className="flex flex-col items-center text-center gap-8">
            <div className="max-w-5xl px-6">
              <div className="flex flex-col items-center gap-8">
                <div className="flex items-center gap-4">
                  <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-pink-500 to-fuchsia-600 shadow-lg shadow-pink-500/30 flex items-center justify-center animate-[fadeIn_1s_ease_0.1s_backwards]">
                    <Heart className="h-7 w-7 text-white" aria-hidden="true" />
                  </div>
                  <h1
                    id="spark-love-hero-heading"
                    ref={titleRef}
                    className="font-bold tracking-tighter leading-none bg-gradient-to-r from-pink-500 via-rose-500 to-fuchsia-500 bg-[length:200%_100%] animate-[pulse_8s_linear_infinite] bg-clip-text text-transparent select-none text-[3.2rem] sm:text-[5rem] md:text-[6.5rem] lg:text-[8rem] will-change-transform"
                    style={{ textShadow: "0 4px 24px rgba(236,72,153,0.25)" }}
                  >
                    Spark Love
                  </h1>
                </div>
                <h2 className="text-lg sm:text-2xl md:text-3xl text-muted-foreground font-medium max-w-3xl animate-[fadeUp_1s_ease-out_0.35s_backwards]">
                  More Than an App. Your Next Conversation.
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed animate-[fadeUp_1s_ease-out_0.5s_backwards]">
                  Your relationship companion: quizzes, a shared journal, and movie & date matches for meaningful, low‑pressure connection with privacy.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center animate-[fadeUp_1s_ease-out_0.65s_backwards]">
                  <Link
                    href="#quizzes"
                    className="w-full sm:w-auto"
                    onClick={(e) => scrollToSection(e as any, "#quizzes")}
                  >
                    <Button
                      variant="outline"
                      size="lg"
                      className="w-full sm:w-auto"
                    >
                      <Sparkles className="h-5 w-5 mr-2" aria-hidden="true" />
                      Explore Features
                    </Button>
                  </Link>
                  <Link
                    href="https://github.com/yacine20005/Spark-Love"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto"
                  >
                    <Button
                      size="lg"
                      className="w-full sm:w-auto"
                    >
                      <FaGithub className="h-5 w-5 mr-2" aria-hidden="true" />
                      View on GitHub
                    </Button>
                  </Link>
                </div>
                <div className="mt-10 hidden md:flex flex-col items-center gap-3 animate-[fadeIn_1.2s_ease_1s_backwards]">
                  <span className="text-xs uppercase tracking-widest text-pink-500/70">Scroll</span>
                  <div className="h-10 w-[2px] bg-gradient-to-b from-pink-500/60 to-fuchsia-500/0 rounded-full animate-[growLine_2.5s_ease-in-out_infinite]" />
                </div>
              </div>
            </div>
          </div>
          <style jsx global>{`
            @keyframes fadeUp {from {opacity:0; transform: translateY(40px);} to {opacity:1; transform:translateY(0);} }
            @keyframes fadeIn {from {opacity:0;} to {opacity:1;} }
            @keyframes growLine {0%,100% {transform: scaleY(0); transform-origin: top;} 50% {transform: scaleY(1); transform-origin: top;} }
            @keyframes pulse {0%,100% {background-position:0% 50%;} 50% {background-position:100% 50%;}}
          `}</style>
        </section>

        <div ref={contentScope}>
          {/* About the App */}
          <section
            className="container mx-auto py-16 md:py-20 relative"
            data-spark-section
          >
            <SectionBackground />
            <div className="text-center mb-16">
              <div className="flex items-center justify-center mb-4">
                <span className="text-pink-500 text-sm mr-2">01</span>
                <h2 className="text-2xl md:text-3xl font-bold">
                  Where Connection Meets Simplicity
                </h2>
              </div>
              <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
                Spark Love isn't just another relationship app. It's a thoughtful
                companion designed for couples who believe that strong
                relationships are built through consistent, meaningful moments—not
                grand gestures alone.
              </p>
            </div>

            <div
              className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
              data-spark-list
            >
              {/* For Busy Couples */}
              <div className="relative group" data-spark-card>
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-fuchsia-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                <div className="relative bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-8 h-full">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-fuchsia-500 flex items-center justify-center mb-6">
                    <Users className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">For Busy Couples</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Designed for partners who want to stay connected despite
                    hectic schedules. Quick, meaningful interactions that fit into
                    your daily rhythm without overwhelming your time.
                  </p>
                </div>
              </div>

              {/* For Deeper Understanding */}
              <div className="relative group" data-spark-card>
                <div className="absolute inset-0 bg-gradient-to-br from-rose-500/10 to-pink-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                <div className="relative bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-8 h-full">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center mb-6">
                    <Heart className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    For Deeper Understanding
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Perfect for couples who want to move beyond surface-level
                    conversations and discover new layers of each other through
                    thoughtful prompts and gentle exploration.
                  </p>
                </div>
              </div>

              {/* For Long-Distance Love */}
              <div className="relative group" data-spark-card>
                <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/10 to-purple-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                <div className="relative bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-8 h-full">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-fuchsia-500 to-purple-500 flex items-center justify-center mb-6">
                    <Sparkles className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    For Long-Distance Love
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Bridge the physical gap with shared experiences. Asynchronous
                    interactions mean you can connect meaningfully regardless of
                    time zones or busy schedules.
                  </p>
                </div>
              </div>
            </div>

            {/* What Makes It Different */}
            <div
              className="relative overflow-hidden rounded-3xl border border-pink-500/20 bg-gradient-to-br from-pink-500/5 via-transparent to-fuchsia-500/5 p-8 md:p-12"
              data-spark-card
            >
              <div className="pointer-events-none absolute -top-40 -right-32 h-80 w-80 rounded-full bg-pink-500/10 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-40 -left-32 h-80 w-80 rounded-full bg-fuchsia-500/10 blur-3xl" />

              <div className="relative text-center mb-12">
                <h3 className="text-2xl font-bold mb-4">
                  What Makes Spark Love Different
                </h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Built on the principle that relationships thrive through
                  consistent small actions rather than sporadic grand moments.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="h-6 w-6 rounded-md bg-pink-500/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check
                        className="h-4 w-4 text-pink-500"
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Privacy First</h4>
                      <p className="text-sm text-muted-foreground">
                        Your intimate conversations and moments stay between you
                        two—no social features, no external sharing.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="h-6 w-6 rounded-md bg-pink-500/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check
                        className="h-4 w-4 text-pink-500"
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">No-Pressure Zone</h4>
                      <p className="text-sm text-muted-foreground">
                        Answer when you want, compare when you're ready. No
                        pressure with time limits or notifications demanding
                        immediate attention.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="h-6 w-6 rounded-md bg-pink-500/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check
                        className="h-4 w-4 text-pink-500"
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Relationship-Focused</h4>
                      <p className="text-sm text-muted-foreground">
                        Every feature is designed to strengthen your bond, not
                        distract from it with games or points.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="h-6 w-6 rounded-md bg-pink-500/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check
                        className="h-4 w-4 text-pink-500"
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Thoughtfully Curated</h4>
                      <p className="text-sm text-muted-foreground">
                        Questions and prompts crafted to spark meaningful
                        conversations with depth and insight.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="h-6 w-6 rounded-md bg-pink-500/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check
                        className="h-4 w-4 text-pink-500"
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Grows With You</h4>
                      <p className="text-sm text-muted-foreground">
                        Content evolves based on your relationship stage—from new
                        couples to long-term partners.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="h-6 w-6 rounded-md bg-pink-500/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check
                        className="h-4 w-4 text-pink-500"
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Real Connection</h4>
                      <p className="text-sm text-muted-foreground">
                        Less screen time, more face-to-face conversation. The app
                        is a catalyst, not a destination.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Feature: Quiz */}
          <section
            id="quizzes"
            className="container mx-auto py-16 md:py-24 relative"
            data-spark-section
          >
            <SectionBackground />
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <span className="text-pink-500 text-sm mr-2">02</span>
                <h2 className="text-2xl md:text-3xl font-bold">
                  Go Beyond Small Talk
                </h2>
              </div>
              <p className="text-muted-foreground max-w-2xl">
                Quizzes help you get curious about each other—playful,
                low-pressure, and designed for real connection.
              </p>
            </div>
            <div
              className="relative overflow-hidden rounded-3xl border border-pink-500/20 bg-gradient-to-br from-pink-500/10 via-rose-500/5 to-fuchsia-500/10 p-8 md:p-12"
              data-spark-card
            >
              <div className="pointer-events-none absolute -top-40 -right-32 h-80 w-80 rounded-full bg-pink-500/20 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-40 -left-32 h-80 w-80 rounded-full bg-fuchsia-500/20 blur-3xl" />
              <div className="relative grid gap-10 md:grid-cols-12 items-start">
                <div className="md:col-span-6">
                  <div className="inline-flex items-center gap-3 rounded-xl bg-pink-500/15 px-3 py-2 text-pink-500 mb-4">
                    <ClipboardPen className="h-5 w-5" aria-hidden="true" />
                    <span className="text-sm font-medium">Playful discovery</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    Curiosity made easy
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Answer in private, compare together when you’re ready and talk
                    it through—no pressure, all connection.
                  </p>
                </div>
                <div className="md:col-span-6">
                  <ul className="space-y-5" data-spark-list>
                    {[
                      {
                        title: "Private answers",
                        desc: "Share your thoughts without judgment.",
                      },
                      {
                        title: "Curated themes",
                        desc: "Explore topics that matter to you.",
                      },
                      {
                        title: "Clear comparisons",
                        desc: "See alignment without pressure.",
                      },
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-4">
                        <div className="h-6 w-6 rounded-md bg-pink-500/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="h-4 w-4 text-pink-500" aria-hidden="true" />
                        </div>
                        <div>
                          <h4 className="font-medium">{item.title}</h4>
                          <p className="text-sm text-muted-foreground">
                            {item.desc}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Feature: Journal */}
          <section
            id="journal"
            className="container mx-auto py-16 md:py-24 relative"
            data-spark-section
          >
            <SectionBackground />
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <span className="text-pink-500 text-sm mr-2">03</span>
                <h2 className="text-2xl md:text-3xl font-bold">
                  Your Private Universe
                </h2>
              </div>
              <p className="text-muted-foreground max-w-2xl">
                A calm, intimate space built just for the two of you. Capture
                daily moments, gratitude, thoughts, and photos—your story, in your
                words.
              </p>
            </div>
            <div
              className="relative overflow-hidden rounded-3xl border border-pink-500/20 bg-gradient-to-br from-fuchsia-500/10 via-rose-500/5 to-pink-500/10 p-8 md:p-12"
              data-spark-card
            >
              <div className="pointer-events-none absolute -top-40 -left-32 h-80 w-80 rounded-full bg-fuchsia-500/20 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-40 -right-32 h-80 w-80 rounded-full bg-pink-500/20 blur-3xl" />
              <div className="relative grid gap-10 md:grid-cols-12 items-start">
                <div className="md:col-span-6">
                  <div className="inline-flex items-center gap-3 rounded-xl bg-pink-500/15 px-3 py-2 text-pink-500 mb-4">
                    <NotebookPen className="h-5 w-5" aria-hidden="true" />
                    <span className="text-sm font-medium">
                      Just the two of you
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    Memories that build your story
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Daily notes, photos, and videos help you cultivate
                    appreciation and closeness—one entry at a time.
                  </p>
                </div>
                <div className="md:col-span-6">
                  <ul className="space-y-5" data-spark-list>
                    {[
                      {
                        title: "Daily notes and photos",
                        desc: "Capture your moments and memories effortlessly, including your dates.",
                      },
                      {
                        title: "Real‑time sync",
                        desc: "Stay updated across devices seamlessly.",
                      },
                      {
                        title: "Clean writing experience",
                        desc: "Focus on your thoughts with a distraction-free interface.",
                      },
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-4">
                        <div className="h-6 w-6 rounded-md bg-pink-500/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="h-4 w-4 text-pink-500" aria-hidden="true" />
                        </div>
                        <div>
                          <h4 className="font-medium">{item.title}</h4>
                          <p className="text-sm text-muted-foreground">
                            {item.desc}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Feature: Movie Swipe */}
          <section
            id="movies"
            className="container mx-auto py-16 md:py-24 relative"
            data-spark-section
          >
            <SectionBackground />
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <span className="text-pink-500 text-sm mr-2">04</span>
                <h2 className="text-2xl md:text-3xl font-bold">
                  Finally Agree on a Movie
                </h2>
              </div>
              <p className="text-muted-foreground max-w-2xl">
                Swipe recommendations separately—when you both choose yes, it’s a
                match. Your shared watchlist updates automatically.
              </p>
            </div>
            <div
              className="relative overflow-hidden rounded-3xl border border-pink-500/20 bg-gradient-to-br from-pink-500/10 via-rose-500/5 to-fuchsia-500/10 p-8 md:p-12"
              data-spark-card
            >
              <div className="pointer-events-none absolute -top-40 -right-32 h-80 w-80 rounded-full bg-pink-500/20 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-40 -left-32 h-80 w-80 rounded-full bg-fuchsia-500/20 blur-3xl" />
              <div className="relative grid gap-10 md:grid-cols-12 items-start">
                <div className="md:col-span-6">
                  <div className="inline-flex items-center gap-3 rounded-xl bg-pink-500/15 px-3 py-2 text-pink-500 mb-4">
                    <Film className="h-5 w-5" aria-hidden="true" />
                    <span className="text-sm font-medium">
                      Decision, simplified
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    Cozy nights made easy
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    End the endless scrolling. When you both say yes, it’s
                    instantly added to your shared list.
                  </p>
                </div>
                <div className="md:col-span-6">
                  <ul className="space-y-5" data-spark-list>
                    {[
                      {
                        title: "Swipe right for ‘let’s watch’",
                        desc: "Effortlessly agree on what to watch together.",
                      },
                      {
                        title: "Auto‑match when both approve",
                        desc: "Instantly add matched movies to your shared list.",
                      },
                      {
                        title: "A shared watchlist you both agree on",
                        desc: "Keep track of movies you’re both excited to watch.",
                      },
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-4">
                        <div className="h-6 w-6 rounded-md bg-pink-500/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="h-4 w-4 text-pink-500" aria-hidden="true" />
                        </div>
                        <div>
                          <h4 className="font-medium">{item.title}</h4>
                          <p className="text-sm text-muted-foreground">
                            {item.desc}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Feature: Date Swipe */}
          <section
            id="dates"
            className="container mx-auto py-16 md:py-24 relative"
            data-spark-section
          >
            <SectionBackground />
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <span className="text-pink-500 text-sm mr-2">05</span>
                <h2 className="text-2xl md:text-3xl font-bold">
                  Turn “What Should We Do?” into “Let’s Do This!”
                </h2>
              </div>
              <p className="text-muted-foreground max-w-2xl">
                From cozy nights to spontaneous adventures—find ideas you’ll both
                love, then match and save for later.
              </p>
            </div>
            <div
              className="relative overflow-hidden rounded-3xl border border-pink-500/20 bg-gradient-to-br from-fuchsia-500/10 via-rose-500/5 to-pink-500/10 p-8 md:p-12"
              data-spark-card
            >
              <div className="pointer-events-none absolute -top-40 -left-32 h-80 w-80 rounded-full bg-pink-500/20 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-40 -right-32 h-80 w-80 rounded-full bg-fuchsia-500/20 blur-3xl" />
              <div className="relative grid gap-10 md:grid-cols-12 items-start">
                <div className="md:col-span-6">
                  <div className="inline-flex items-center gap-3 rounded-xl bg-pink-500/15 px-3 py-2 text-pink-500 mb-4">
                    <Calendar className="h-5 w-5" aria-hidden="true" />
                    <span className="text-sm font-medium">Choose together</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    Fresh plans, zero stress
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Curated categories keep things fun and varied—find the sweet
                    spot between your preferences and mood.
                  </p>
                </div>
                <div className="md:col-span-6">
                  <ul className="space-y-5" data-spark-list>
                    {[
                      {
                        title: "Curated categories",
                        desc: "Cozy, outdoor, creative, and budget‑friendly options tailored for you.",
                      },
                      {
                        title: "Swipe individually",
                        desc: "Match together to find the perfect plan.",
                      },
                      {
                        title: "Ready‑to‑go list",
                        desc: "A curated list of activities to choose from for your next date night.",
                      },
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-4">
                        <div className="h-6 w-6 rounded-md bg-pink-500/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="h-4 w-4 text-pink-500" aria-hidden="true" />
                        </div>
                        <div>
                          <h4 className="font-medium">{item.title}</h4>
                          <p className="text-sm text-muted-foreground">
                            {item.desc}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Privacy */}
          <section
            className="container mx-auto py-20 md:py-28 relative"
            aria-labelledby="privacy-heading"
            data-spark-section
          >
            <SectionBackground />
            <div className="relative max-w-4xl mx-auto px-4 md:px-6 text-center">
              <div className="flex flex-col items-center mb-10">
                <div className="h-16 w-16 rounded-full ring-2 ring-pink-500/30 bg-gradient-to-br from-pink-500 to-fuchsia-500 flex items-center justify-center shadow-lg shadow-pink-500/30 mb-6">
                  <ShieldCheck
                    className="h-8 w-8 text-white"
                    aria-hidden="true"
                  />
                </div>
                <h2
                  id="privacy-heading"
                  className="text-3xl md:text-5xl font-semibold tracking-tight leading-tight max-w-3xl"
                >
                  <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-fuchsia-500 bg-clip-text text-transparent">
                    Privacy Isn’t an Option. It’s a Promise.
                  </span>
                </h2>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto">
                Your conversations, answers, and journal entries are private to
                you and your partner. Spark Love is designed for confidentiality
                and peace of mind—with secure syncing and a space that belongs
                only to you two.
              </p>
            </div>
          </section>

          {/* Availability */}
          <section
            className="container mx-auto py-16 md:py-24 relative"
            data-spark-section
          >
            <SectionBackground />
            <div
              className="bg-gradient-to-r from-pink-500/10 to-fuchsia-500/10 rounded-2xl border border-border p-8 md:p-12"
              data-spark-card
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1 text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                    <span className="text-pink-500 text-sm">07</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    Availability
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Coming soon to the App Store and Google Play with secure cloud
                    synchronization.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 text-xs rounded-full bg-pink-500/15 text-pink-500 border border-pink-500/30"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Roadmap */}
          <section
            className="container mx-auto py-16 md:py-20 relative"
            data-spark-section
          >
            <SectionBackground />
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <span className="text-pink-500 text-sm mr-2">08</span>
                <h2 className="text-2xl md:text-3xl font-bold">Roadmap</h2>
              </div>
              <p className="text-muted-foreground max-w-2xl">
                A thoughtful rollout focused on quality and delight.
              </p>
            </div>
            <div className="space-y-6">
              {[
                {
                  phase: "Phase 1",
                  status: "in-progress",
                  title: "Quiz Feature",
                  description:
                    "Core quiz experience: private answers, comparisons, themed packs.",
                },
                {
                  phase: "Phase 2",
                  status: "planned",
                  title: "Android .APK Test Builds",
                  description:
                    "Distribute early .apk builds for real‑world device feedback.",
                },
                {
                  phase: "Phase 3",
                  status: "planned",
                  title: "Movie Swipe (Shared Watchlist)",
                  description:
                    "Swipe & match on movies, auto‑create a mutual watchlist.",
                },
                {
                  phase: "Phase 4",
                  status: "planned",
                  title: "Date Ideas Swipe",
                  description:
                    "Curated activity ideas you both swipe on to find matches.",
                },
                {
                  phase: "Phase 5",
                  status: "planned",
                  title: "Shared Journal",
                  description:
                    "Private synchronized space for memories, notes & photos.",
                },
                {
                  phase: "Phase 6",
                  status: "planned",
                  title: "Official Store Launch (iOS & Google Play)",
                  description:
                    "Public release with polished onboarding & production infra.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`border rounded-lg p-6 transition-all ${item.status === "completed"
                    ? "border-green-500/50 bg-green-500/5"
                    : item.status === "in-progress"
                      ? "border-pink-500/50 bg-pink-500/5"
                      : "border-border hover:border-muted-foreground/50"
                    }`}
                  data-spark-card
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="flex items-center gap-4">
                      <div
                        className={`px-3 py-1 rounded-full text-xs font-medium ${item.status === "completed"
                          ? "bg-green-500/20 text-green-400"
                          : item.status === "in-progress"
                            ? "bg-pink-500/20 text-pink-500"
                            : "bg-muted text-muted-foreground"
                          }`}
                      >
                        {item.phase}
                      </div>
                      <div
                        className={`px-2 py-1 rounded text-xs ${item.status === "completed"
                          ? "bg-green-500/20 text-green-400"
                          : item.status === "in-progress"
                            ? "bg-pink-500/20 text-pink-500"
                            : "bg-muted text-muted-foreground"
                          }`}
                      >
                        {item.status === "completed"
                          ? "✅ Live"
                          : item.status === "in-progress"
                            ? "🚧 In Progress"
                            : "📋 Planned"}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section
            className="container mx-auto py-16 md:py-24 relative"
            aria-labelledby="cta-heading"
            data-spark-section
          >
            <SectionBackground />
            <div
              className="text-center space-y-6 max-w-3xl mx-auto"
              data-spark-card
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/15 text-pink-500 border border-pink-500/30">
                <Sparkles className="h-4 w-4" aria-hidden="true" />
                <span>We’d love your input</span>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-pink-500 text-sm mr-2">09</span>
              </div>
              <h2 id="cta-heading" className="text-2xl md:text-3xl font-bold">
                Ready to Spark Something New?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Help shape Spark Love by sharing ideas and feature requests on GitHub. Your feedback directly guides what we build next.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="https://github.com/yacine20005/Spark-Love"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    <FaGithub className="h-5 w-5 mr-2" aria-hidden="true" />
                    View on GitHub
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
      <Script
        id="spark-love-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Spark Love",
            applicationCategory: "LifestyleApplication",
            operatingSystem: "iOS, Android",
            offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
            description:
              "Spark Love helps couples connect through private quizzes, a shared journal, movie & date swipes, and meaningful prompts—privacy‑first and low pressure.",
            creator: { "@type": "Person", name: "Yacine Hamadouche" },
            keywords:
              "couples, relationship app, quizzes, journal, date ideas, movie matcher",
          }),
        }}
      />
    </div>
  );
}
