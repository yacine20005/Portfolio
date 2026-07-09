"use client"

import { useState } from "react"
import { Header } from "@/components/sections/header"
import { Footer } from "@/components/sections/footer"
import { Bot, BarChart3, Brain, Target, Zap, Database, MessageSquare, FileText } from "lucide-react"
import { FaGithub } from "react-icons/fa"
import { ShaderAnimation } from "@/components/ui/shader-lines"
import { ProjectPreloader } from "@/components/ui/project-preloader"

export default function CobbleCoachPage() {
  const [loading, setLoading] = useState(true)
  const [contentVisible, setContentVisible] = useState(false)

  return (
    <div className="min-h-screen bg-obsidian text-paper overflow-hidden theme-cobble-coach">
      {loading && (
        <ProjectPreloader
          icon={<Bot />}
          accentColor="rgb(239, 68, 68)"
          title="Cobble Coach"
          onReveal={() => setContentVisible(true)}
          onComplete={() => setLoading(false)}
        />
      )}
      <div className={`transition-all duration-300 ${contentVisible ? "opacity-100 visible" : "opacity-0 invisible"}`}>
        <Header />
        {/* Ambient Background Glow */}
        <div className="fixed top-0 right-0 w-[50vw] h-[50vw] bg-[radial-gradient(ellipse_at_top_right,rgba(var(--color-accent-rgb),0.08),transparent_70%)] pointer-events-none z-0" />
      <main>
        {/* Hero */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 opacity-40">
            <ShaderAnimation color={[1.0, 0.2, 0.2]} />
          </div>
          <div className="absolute inset-0 bg-obsidian/65" />
          <div className="relative z-10 text-center px-5">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Bot className="h-8 w-8 text-paper/60" aria-hidden="true" />
              <h1 className="font-inter font-normal text-[2.8rem] sm:text-[4.5rem] md:text-[6rem] leading-[0.85] tracking-tight text-paper">Cobble Coach</h1>
            </div>
            <h2 className="text-lg md:text-2xl text-felt-gray font-inter font-normal max-w-2xl mx-auto">AI-Powered League of Legends Coaching on Discord</h2>
            <p className="text-base md:text-lg text-felt-gray max-w-xl mx-auto mt-6 leading-[1.6]">
              An advanced Discord bot leveraging the <strong className="text-paper/80 font-normal">Riot Games API</strong> and <strong className="text-paper/80 font-normal">Google Gemini</strong> to deliver personalised coaching reports.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <a href="https://github.com/yacine20005/Cobble-Coach" target="_blank" rel="noopener noreferrer" className="ghost-pill"><FaGithub className="h-4 w-4" /> View on GitHub</a>
              <a href="#features" className="ghost-pill">Explore Features</a>
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="py-[46px] md:py-[92px]">
          <div className="container mx-auto max-w-[1078px] px-5 md:px-10">
            <h2 className="font-inter font-light text-[2.5rem] md:text-[3.5rem] leading-[0.9] tracking-tight text-paper">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
              {[
                { icon: <BarChart3 className="h-6 w-6" />, title: "Match History Analysis", desc: "Instantly processes the last games to surface trends, patterns, and recurring mistakes." },
                { icon: <Target className="h-6 w-6" />, title: "Deep KPI Insights", desc: "CS/min, Gold/min, Vision Score, Damage Share, Kill Participation, Objective Control." },
                { icon: <Brain className="h-6 w-6" />, title: "Personalised AI Coaching", desc: "Gemini adapts its critique to champion pool and role played." },
                { icon: <FileText className="h-6 w-6" />, title: "Data Export Utility", desc: "Standalone export.py dumps match data into CSV, JSON, and TOON formats." },
              ].map((f, i) => (
                <div key={i} className="border-l-[1px] border-white/10 pl-5 md:pl-8">
                  <div className="flex items-center gap-3 mb-2"><span className="text-felt-gray">{f.icon}</span><h3 className="text-xl font-inter font-normal text-paper tracking-tight">{f.title}</h3></div>
                  <p className="text-base text-felt-gray leading-[1.6]">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pipeline */}
        <section className="py-[46px] md:py-[92px] border-t border-white/5">
          <div className="container mx-auto max-w-[1078px] px-5 md:px-10">
            <h2 className="font-inter font-light text-[2.5rem] md:text-[3.5rem] leading-[0.9] tracking-tight text-paper">How It Works</h2>
            <div className="space-y-6 mt-10">
              {[
                { step: "01", icon: <MessageSquare className="h-6 w-6" />, title: "User Interaction", desc: "A player invokes the /coach slash command with their Riot ID." },
                { step: "02", icon: <Database className="h-6 w-6" />, title: "Data Ingestion", desc: "Resolves PUUID via the Account API, fetches match IDs and timelines." },
                { step: "03", icon: <BarChart3 className="h-6 w-6" />, title: "Data Processing", desc: "Filters and normalises player metrics into structured Pandas DataFrames." },
                { step: "04", icon: <Brain className="h-6 w-6" />, title: "AI Analysis", desc: "A context-aware prompt sends aggregated match data to Gemini." },
                { step: "05", icon: <Zap className="h-6 w-6" />, title: "Response Delivery", desc: "The coaching report is chunked to respect Discord's message limits." },
              ].map((step, i) => (
                <div key={i} className="flex gap-4 md:gap-8 border-l-[1px] border-white/10 pl-5 md:pl-8">
                  <span className="text-caption text-felt-gray mt-1">{step.step}</span>
                  <div className="text-felt-gray shrink-0 mt-0.5">{step.icon}</div>
                  <div>
                    <h3 className="text-lg font-inter font-normal text-paper tracking-tight">{step.title}</h3>
                    <p className="text-base text-felt-gray leading-[1.6]">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Architecture */}
        <section className="py-[46px] md:py-[92px] border-t border-white/5">
          <div className="container mx-auto max-w-[1078px] px-5 md:px-10">
            <h2 className="font-inter font-light text-[2.5rem] md:text-[3.5rem] leading-[0.9] tracking-tight text-paper">Architecture</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
              {[
                { title: "Discord Layer", items: ["Asynchronous slash commands", "Message chunking", "Error handling & user feedback"] },
                { title: "Data Pipeline", items: ["MatchV5, SummonerV4, AccountV1", "Pandas DataFrames & aggregation", "TOON serialisation for LLM context"] },
                { title: "AI Layer", items: ["Gemini 2.5 Flash", "Context-aware prompt engineering", "Structured critique output"] },
              ].map((arch, i) => (
                <div key={i} className="border-l-[1px] border-white/10 pl-5 md:pl-8">
                  <h3 className="text-lg font-inter font-normal text-paper">{arch.title}</h3>
                  <ul className="space-y-2 mt-3 text-base text-felt-gray">{arch.items.map((item, j) => <li key={j}>· {item}</li>)}</ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-[46px] md:py-[92px] border-t border-white/5">
          <div className="container mx-auto max-w-[1078px] px-5 md:px-10 text-center">
            <Bot className="h-10 w-10 mx-auto text-paper/40 mb-6" />
            <h2 className="font-inter font-light text-[2.5rem] md:text-[3.5rem] leading-[0.9] tracking-tight text-paper">Explore Cobble Coach</h2>
            <p className="text-lg text-felt-gray max-w-2xl mx-auto mt-6 leading-[1.6]">The source code is open — browse the pipeline, fork the project, or add it to your Discord server.</p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a href="https://github.com/yacine20005/Cobble-Coach" target="_blank" rel="noopener noreferrer" className="ghost-pill"><FaGithub className="h-4 w-4" /> Star on GitHub</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      </div>
    </div>
  )
}
