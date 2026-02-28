"use client";

import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { SectionBackground } from "@/components/section-background";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useGsapIntro, useGsapStaggerOnView } from "@/hooks/use-gsap-animations";
import {
    Bot,
    BarChart3,
    Brain,
    Sword,
    Target,
    Zap,
    Database,
    MessageSquare,
    ExternalLink,
    ChevronRight,
    FileText
} from "lucide-react";
import { FaPython, FaDiscord, FaGithub } from "react-icons/fa";
import { SiGooglegemini } from "react-icons/si";
import Link from "next/link";

const features = [
    {
        icon: <BarChart3 className="h-6 w-6" />,
        title: "Match History Analysis",
        description:
            "Instantly processes the last games to surface trends, patterns, and recurring mistakes invisible in single-game reviews.",
        status: "live",
    },
    {
        icon: <Target className="h-6 w-6" />,
        title: "Deep KPI Insights",
        description:
            "Goes beyond basic KDA — tracks CS/min, Gold/min, Vision Score, Damage Share, Kill Participation, and Objective Control.",
        status: "live",
    },
    {
        icon: <Brain className="h-6 w-6" />,
        title: "Personalised AI Coaching",
        description:
            "Gemini adapts its critique to champion pool and role played, covering mechanics, macro-play, and strategic recommendations.",
        status: "live",
    },
    {
        icon: <FileText className="h-6 w-6" />,
        title: "Data Export Utility",
        description:
            "Standalone export.py dumps match data into CSV, JSON, and TOON formats for offline analysis or dataset creation.",
        status: "live",
    },
];

const techStack = [
    { name: "Python", icon: <FaPython className="h-5 w-5" />, category: "Language" },
    { name: "discord.py", icon: <FaDiscord className="h-5 w-5" />, category: "Framework" },
    { name: "Gemini 2.5", icon: <SiGooglegemini className="h-5 w-5" />, category: "AI" },
    { name: "Riot API", icon: <Sword className="h-5 w-5" />, category: "Data Source" },
    { name: "Pandas", icon: <BarChart3 className="h-5 w-5" />, category: "Processing" },
    { name: "TOON", icon: <FileText className="h-5 w-5" />, category: "Serialisation" },
];

const pipeline = [
    {
        step: "01",
        title: "User Interaction",
        description:
            "A player invokes the /coach slash command with their Riot ID and Tagline directly inside Discord.",
        icon: <MessageSquare className="h-6 w-6" />,
    },
    {
        step: "02",
        title: "Data Ingestion",
        description:
            "Resolves PUUID via the Account API, fetches the last match IDs, and retrieves detailed participant timelines for each game.",
        icon: <Database className="h-6 w-6" />,
    },
    {
        step: "03",
        title: "Data Processing",
        description:
            "Filters and normalises player metrics into structured Pandas DataFrames — KDA, CS/min, Vision, Gold efficiency, and more.",
        icon: <BarChart3 className="h-6 w-6" />,
    },
    {
        step: "04",
        title: "AI Analysis",
        description:
            "A context-aware prompt sends aggregated match data to Gemini, which returns a structured critique of mechanics, macro, and strategy.",
        icon: <Brain className="h-6 w-6" />,
    },
    {
        step: "05",
        title: "Response Delivery",
        description:
            "The coaching report is chunked to respect Discord's message limits and delivered back to the player in the channel.",
        icon: <Zap className="h-6 w-6" />,
    },
];

const roadmap = [
    {
        phase: "Phase 1",
        status: "completed",
        title: "Core Coaching Bot",
        description:
            "Slash command, Riot API integration, Gemini-powered coaching report, Discord message chunking.",
    },
    {
        phase: "Phase 2",
        status: "in-progress",
        title: "Frame-by-Frame Timeline Analysis",
        description:
            "Fetch granular timeline data to analyse specific skirmishes and teamfight positioning at a per-minute level.",
    },
    {
        phase: "Phase 3",
        status: "planned",
        title: "Visual Reports",
        description:
            "Generate Gold/XP lead graphs with matplotlib and embed them directly in Discord responses.",
    },
    {
        phase: "Phase 4",
        status: "planned",
        title: "Player Profiles & History",
        description:
            "Store coaching sessions in a database to track improvement over time and compare across patches.",
    },
    {
        phase: "Phase 5",
        status: "planned",
        title: "Multi-Region Support",
        description:
            "Enhanced routing logic to dynamically handle all Riot API regions without manual configuration.",
    },
];

const kpiStats = [
    { label: "Matches Analysed", value: "20", unit: "per session" },
    { label: "KPIs Tracked", value: "10+", unit: "indicators" },
    { label: "Riot API Endpoints", value: "3", unit: "used" },
    { label: "Report Sections", value: "3", unit: "mechanics · macro · strategy" },
];

export default function CobbleCoachPage() {
    const heroScope = useGsapIntro();
    const animateScope = useGsapStaggerOnView({ y: 50 });

    return (
        <div className="min-h-screen bg-background text-foreground overflow-hidden">
            <Header />
            <main ref={animateScope as any}>
                {/* ── Hero ─────────────────────────────────────────────────────────── */}
                <section
                    className="relative min-h-[100svh] flex items-center justify-center overflow-hidden"
                    role="banner"
                    ref={heroScope as any}
                >
                    <SectionBackground />
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col items-center text-center gap-10">
                            <div className="flex flex-col items-center gap-8 max-w-5xl">
                                <div className="flex items-center gap-4">
                                    <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-indigo-500/90 via-violet-500/90 to-purple-500/90 shadow-lg shadow-indigo-500/25 flex items-center justify-center">
                                        <Bot className="h-8 w-8 text-white" aria-hidden="true" />
                                    </div>
                                    <h1
                                        data-hero="title"
                                        className="font-bold tracking-tight leading-none bg-gradient-to-r from-indigo-400/90 via-violet-500/90 to-purple-400/90 bg-[length:200%_100%] animate-[pulse_12s_linear_infinite] bg-clip-text text-transparent select-none text-[2.8rem] sm:text-[4.5rem] md:text-[6rem] lg:text-[6.75rem] xl:text-[7.5rem]"
                                        style={{ textShadow: "0 4px 24px rgba(99,102,241,0.25)" }}
                                    >
                                        Cobble Coach
                                    </h1>
                                </div>

                                <h2
                                    data-hero="subtitle"
                                    className="text-lg sm:text-2xl md:text-3xl text-muted-foreground font-medium max-w-3xl"
                                >
                                    AI-Powered League of Legends Coaching on Discord
                                </h2>

                                <p
                                    data-hero="description"
                                    className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed"
                                >
                                    An advanced Discord bot leveraging the{" "}
                                    <strong className="text-indigo-400">Riot Games API</strong> and{" "}
                                    <strong className="text-violet-400">Google Gemini</strong> to
                                    analyse your last matches and deliver personalised,
                                    actionable coaching reports — in seconds, right inside your
                                    server.
                                </p>

                                <div data-hero="cta" className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Link
                                        href="https://github.com/yacine20005/Cobble-Coach"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Button size="lg" className="w-full sm:w-auto">
                                            <FaGithub className="h-5 w-5 mr-2" />
                                            View on GitHub
                                        </Button>
                                    </Link>
                                    <Link href="#features">
                                        <Button variant="outline" size="lg" className="w-full sm:w-auto">
                                            <Zap className="h-5 w-5 mr-2" />
                                            Explore Features
                                        </Button>
                                    </Link>
                                </div>

                                <div
                                    data-hero="scroll-indicator"
                                    className="mt-6 hidden md:flex flex-col items-center gap-3"
                                >
                                    <span className="text-xs uppercase tracking-widest text-indigo-400/70">
                                        Scroll
                                    </span>
                                    <div className="h-10 w-[2px] bg-gradient-to-b from-indigo-400/60 to-violet-500/0 rounded-full animate-[growLine_2.5s_ease-in-out_infinite]" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <style jsx global>{`
            @keyframes pulse {0%,100% {background-position:0% 50%;} 50% {background-position:100% 50%;}}
            @keyframes growLine {0%,100% {transform: scaleY(0); transform-origin: top;} 50% {transform: scaleY(1); transform-origin: top;}}
          `}</style>
                </section>
                {/* ── Features ─────────────────────────────────────────────────────── */}
                <section id="features" className="container mx-auto py-20 relative" data-animate>
                    <SectionBackground />
                    <div className="space-y-4 mb-12">
                        <div className="flex items-center">
                            <span className="text-indigo-400 text-sm mr-2">01</span>
                            <h2 className="text-2xl md:text-3xl font-bold">Key Features</h2>
                        </div>
                        <p className="text-muted-foreground max-w-2xl">
                            Democratising access to high-level game analysis — no coach required.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                data-animate
                                className="group border border-border rounded-lg p-6 hover:border-indigo-500/50 transition-all hover:shadow-lg hover:shadow-indigo-500/10"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-indigo-500/10 rounded-lg text-indigo-400">
                                        {feature.icon}
                                    </div>
                                    <div className="space-y-2 flex-1">
                                        <div className="flex items-center justify-between">
                                            <h3 className="text-lg font-semibold group-hover:text-indigo-400 transition-colors">
                                                {feature.title}
                                            </h3>
                                            {feature.status === "live" && (
                                                <Badge
                                                    variant="outline"
                                                    className="bg-green-500/20 text-green-400 border-green-500/30"
                                                >
                                                    LIVE
                                                </Badge>
                                            )}
                                        </div>
                                        <p className="text-muted-foreground leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── Tech Stack ───────────────────────────────────────────────────── */}
                <section className="container mx-auto py-20 relative" data-animate>
                    <SectionBackground />
                    <div className="space-y-4 mb-12">
                        <div className="flex items-center">
                            <span className="text-indigo-400 text-sm mr-2">02</span>
                            <h2 className="text-2xl md:text-3xl font-bold">Tech Stack</h2>
                        </div>
                        <p className="text-muted-foreground max-w-2xl">
                            Modern Python ecosystem built for async performance, AI integration, and scalability.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {techStack.map((tech, index) => (
                            <div
                                key={index}
                                data-animate
                                className="group border border-border rounded-lg p-4 hover:border-indigo-500/50 transition-all hover:shadow-lg hover:shadow-indigo-500/10 text-center"
                            >
                                <div className="flex flex-col items-center gap-3">
                                    <div className="text-indigo-400 group-hover:scale-110 transition-transform">
                                        {tech.icon}
                                    </div>
                                    <div>
                                        <div className="font-medium text-sm">{tech.name}</div>
                                        <div className="text-xs text-muted-foreground">{tech.category}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── Pipeline ─────────────────────────────────────────────────────── */}
                <section className="container mx-auto py-20 relative" data-animate>
                    <SectionBackground />
                    <div className="space-y-4 mb-12">
                        <div className="flex items-center">
                            <span className="text-indigo-400 text-sm mr-2">03</span>
                            <h2 className="text-2xl md:text-3xl font-bold">How It Works</h2>
                        </div>
                        <p className="text-muted-foreground max-w-2xl">
                            A modular pipeline from Discord slash command to AI coaching report — in one flow.
                        </p>
                    </div>

                    <div className="relative">
                        {/* Connector line */}
                        <div className="hidden lg:block absolute left-[2.25rem] top-8 bottom-8 w-[2px] bg-gradient-to-b from-indigo-500/50 via-violet-500/30 to-purple-500/10" />

                        <div className="space-y-6">
                            {pipeline.map((step, index) => (
                                <div
                                    key={index}
                                    data-animate
                                    className="relative flex flex-col lg:flex-row gap-6 lg:gap-8 group"
                                >
                                    {/* Step number + icon */}
                                    <div className="flex-shrink-0 flex items-center gap-4 lg:flex-col lg:items-center lg:w-[4.5rem]">
                                        <div className="h-[4.5rem] w-[4.5rem] rounded-2xl bg-gradient-to-br from-indigo-500/90 to-violet-500/90 shadow-lg shadow-indigo-500/20 flex items-center justify-center text-white flex-shrink-0 z-10">
                                            {step.icon}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 border border-border rounded-lg p-6 hover:border-indigo-500/50 transition-all hover:shadow-lg hover:shadow-indigo-500/10 bg-card/60 backdrop-blur-sm">
                                        <div className="flex items-center gap-3 mb-2">
                                            <span className="text-xs font-mono text-indigo-400/70">{step.step}</span>
                                            <ChevronRight className="h-3 w-3 text-indigo-400/40" />
                                            <h3 className="text-lg font-semibold group-hover:text-indigo-400 transition-colors">
                                                {step.title}
                                            </h3>
                                        </div>
                                        <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── Architecture Overview ─────────────────────────────────────────── */}
                <section className="container mx-auto py-20 relative" data-animate>
                    <SectionBackground />
                    <div className="space-y-4 mb-12">
                        <div className="flex items-center">
                            <span className="text-indigo-400 text-sm mr-2">04</span>
                            <h2 className="text-2xl md:text-3xl font-bold">Architecture Overview</h2>
                        </div>
                        <p className="text-muted-foreground max-w-2xl">
                            Designed for modularity — each component can be extended or replaced independently.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div data-animate className="border border-border rounded-lg p-6 hover:border-indigo-500/50 transition-colors">
                            <div className="flex items-center gap-3 mb-4">
                                <FaDiscord className="h-6 w-6 text-indigo-400" />
                                <h3 className="text-lg font-semibold">Discord Layer</h3>
                            </div>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li>• Asynchronous slash commands</li>
                                <li>• Message chunking (2 000-char limit)</li>
                                <li>• Error handling & user feedback</li>
                            </ul>
                        </div>

                        <div data-animate className="border border-border rounded-lg p-6 hover:border-violet-500/50 transition-colors">
                            <div className="flex items-center gap-3 mb-4">
                                <Database className="h-6 w-6 text-violet-400" />
                                <h3 className="text-lg font-semibold">Data Pipeline</h3>
                            </div>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li>• MatchV5, SummonerV4, AccountV1</li>
                                <li>• Pandas DataFrames & aggregation</li>
                                <li>• TOON serialisation for LLM context</li>
                            </ul>
                        </div>

                        <div data-animate className="border border-border rounded-lg p-6 hover:border-purple-500/50 transition-colors">
                            <div className="flex items-center gap-3 mb-4">
                                <Brain className="h-6 w-6 text-purple-400" />
                                <h3 className="text-lg font-semibold">AI Layer</h3>
                            </div>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li>• Gemini 2.5 Flash</li>
                                <li>• Context-aware prompt engineering</li>
                                <li>• Structured critique output</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* ── Roadmap ──────────────────────────────────────────────────────── */}
                <section className="container mx-auto py-20 relative" data-animate>
                    <SectionBackground />
                    <div className="space-y-4 mb-12">
                        <div className="flex items-center">
                            <span className="text-indigo-400 text-sm mr-2">05</span>
                            <h2 className="text-2xl md:text-3xl font-bold">Development Roadmap</h2>
                        </div>
                        <p className="text-muted-foreground max-w-2xl">
                            From a single slash command to a full coaching platform.
                        </p>
                    </div>

                    <div className="space-y-6">
                        {roadmap.map((item, index) => (
                            <div
                                key={index}
                                data-animate
                                className={`border rounded-lg p-6 transition-all ${item.status === "completed"
                                    ? "border-green-500/50 bg-green-500/5"
                                    : item.status === "in-progress"
                                        ? "border-indigo-500/50 bg-indigo-500/5"
                                        : "border-border hover:border-muted-foreground/50"
                                    }`}
                            >
                                <div className="flex flex-col md:flex-row md:items-center gap-4">
                                    <div className="flex items-center gap-4">
                                        <div
                                            className={`px-3 py-1 rounded-full text-xs font-medium ${item.status === "completed"
                                                ? "bg-green-500/20 text-green-400"
                                                : item.status === "in-progress"
                                                    ? "bg-indigo-500/20 text-indigo-400"
                                                    : "bg-muted text-muted-foreground"
                                                }`}
                                        >
                                            {item.phase}
                                        </div>
                                        <div
                                            className={`px-2 py-1 rounded text-xs ${item.status === "completed"
                                                ? "bg-green-500/20 text-green-400"
                                                : item.status === "in-progress"
                                                    ? "bg-indigo-500/20 text-indigo-400"
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
                                        <p className="text-muted-foreground text-sm">{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── CTA ──────────────────────────────────────────────────────────── */}
                <section className="container mx-auto py-20 relative" data-animate>
                    <SectionBackground />
                    <div className="relative overflow-hidden rounded-3xl border border-indigo-500/20 bg-gradient-to-br from-indigo-500/8 via-transparent to-violet-500/8 p-8 md:p-12">
                        <div className="pointer-events-none absolute -top-40 -right-32 h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl" />
                        <div className="pointer-events-none absolute -bottom-40 -left-32 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl" />

                        <div className="relative flex flex-col md:flex-row items-center gap-8">
                            <div className="flex-shrink-0 h-20 w-20 rounded-2xl bg-gradient-to-br from-indigo-500/90 to-violet-500/90 shadow-lg shadow-indigo-500/25 flex items-center justify-center">
                                <Bot className="h-10 w-10 text-white" aria-hidden="true" />
                            </div>
                            <div className="flex-1 text-center md:text-left">
                                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                                    Explore Cobble Coach
                                </h2>
                                <p className="text-muted-foreground mb-6 leading-relaxed max-w-2xl">
                                    The source code is open — browse the pipeline, fork the project, or add it to your own Discord server. Contributions and feedback are welcome.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                                    <Link
                                        href="https://github.com/yacine20005/Cobble-Coach"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Button size="lg" className="w-full sm:w-auto">
                                            <FaGithub className="h-5 w-5 mr-2" />
                                            Star on GitHub
                                        </Button>
                                    </Link>
                                    <Link
                                        href="https://github.com/yacine20005/Cobble-Coach/issues"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Button variant="outline" size="lg" className="w-full sm:w-auto">
                                            <ExternalLink className="h-5 w-5 mr-2" />
                                            Report Issues
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
