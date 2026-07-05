"use client"

import { Header } from "@/components/sections/header"
import { Footer } from "@/components/sections/footer"
import { Zap, Clock, Shield, Target, Database, Globe } from "lucide-react"
import { FaGithub } from "react-icons/fa"
import { ShaderAnimation } from "@/components/ui/shader-lines"

export default function OrbitMarketPage() {
  return (
    <div className="min-h-screen bg-obsidian text-paper overflow-hidden theme-orbit-market">
      <Header />
      {/* Ambient Background Glow */}
      <div className="fixed top-0 right-0 w-[50vw] h-[50vw] bg-[radial-gradient(ellipse_at_top_right,rgba(var(--color-accent-rgb),0.08),transparent_70%)] pointer-events-none z-0" />
      <main>
        {/* Hero */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 opacity-40">
            <ShaderAnimation color={[0.2, 0.6, 1.0]} />
          </div>
          <div className="absolute inset-0 bg-obsidian/65" />
          <div className="relative z-10 text-center px-5">
            <h1 className="font-inter font-normal text-[3rem] sm:text-[5rem] md:text-[6rem] leading-[0.85] tracking-tight text-paper">Orbit Market</h1>
            <h2 className="text-lg md:text-2xl text-felt-gray font-inter font-normal max-w-2xl mx-auto mt-4">Multi-Game Vendor & World State Tracker</h2>
            <p className="text-base md:text-lg text-felt-gray max-w-xl mx-auto mt-6 leading-[1.6]">
              Your ultimate companion for <strong className="text-paper/80 font-normal">Destiny 2</strong> and <strong className="text-paper/80 font-normal">Warframe</strong>. Track vendor inventories and game information across multiple platforms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <a href="https://github.com/yacine20005/Orbit-Market" target="_blank" rel="noopener noreferrer" className="ghost-pill"><FaGithub className="h-4 w-4" /> View on GitHub</a>
              <a href="https://api.yacine-hamadouche.me" target="_blank" rel="noopener noreferrer" className="ghost-pill">Live API</a>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-[46px] md:py-[92px]">
          <div className="container mx-auto max-w-[1078px] px-5 md:px-10">
            <h2 className="font-inter font-light text-[2.5rem] md:text-[3.5rem] leading-[0.9] tracking-tight text-paper">Current Features</h2>
            <p className="text-lg text-felt-gray mt-4 leading-[1.6]">Destiny 2 Xûr tracking is live and fully functional. More features coming soon!</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
              {[
                { icon: <Target className="h-6 w-6" />, title: "Xûr Tracking", desc: "Track Xûr's weekly inventory in real-time with detailed item information." },
                { icon: <Clock className="h-6 w-6" />, title: "Live Updates", desc: "Automatic refresh when Xûr arrives with his new weekly rotation." },
                { icon: <Shield className="h-6 w-6" />, title: "Detailed Stats", desc: "View complete weapon and armor statistics, perks, and material costs." },
                { icon: <Zap className="h-6 w-6" />, title: "Real-time Data", desc: "Direct integration with Bungie.net API for the most accurate information." },
              ].map((f, i) => (
                <div key={i} className="border-l-[1px] border-white/10 pl-5 md:pl-8">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-felt-gray">{f.icon}</span>
                    <h3 className="text-xl font-inter font-normal text-paper tracking-tight">{f.title}</h3>
                  </div>
                  <p className="text-base text-felt-gray leading-[1.6]">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pipeline */}
        <section className="py-[46px] md:py-[92px] border-t border-white/5">
          <div className="container mx-auto max-w-[1078px] px-5 md:px-10">
            <h2 className="font-inter font-light text-[2.5rem] md:text-[3.5rem] leading-[0.9] tracking-tight text-paper">Architecture</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
              {[
                { icon: <Globe className="h-6 w-6" />, title: "Mobile App", items: ["Cross-platform UI", "Offline-capable design", "Push notifications"] },
                { icon: <Database className="h-6 w-6" />, title: "Backend API", items: ["FastAPI framework", "Multi-game routing", "Manifest management"] },
                { icon: <Zap className="h-6 w-6" />, title: "External APIs", items: ["Bungie.net API", "Warframe WorldState", "Real-time data sync"] },
              ].map((arch, i) => (
                <div key={i} className="border-l-[1px] border-white/10 pl-5 md:pl-8">
                  <div className="flex items-center gap-3 mb-3">{arch.icon}<h3 className="text-lg font-inter font-normal text-paper">{arch.title}</h3></div>
                  <ul className="space-y-2 text-base text-felt-gray">{arch.items.map((item, j) => <li key={j}>· {item}</li>)}</ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-[46px] md:py-[92px] border-t border-white/5">
          <div className="container mx-auto max-w-[1078px] px-5 md:px-10 text-center">
            <h2 className="font-inter font-light text-[2.5rem] md:text-[3.5rem] leading-[0.9] tracking-tight text-paper">Get Involved</h2>
            <p className="text-lg text-felt-gray max-w-2xl mx-auto mt-6 leading-[1.6]">Orbit Market is open source and welcomes contributions.</p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a href="https://github.com/yacine20005/Orbit-Market" target="_blank" rel="noopener noreferrer" className="ghost-pill"><FaGithub className="h-4 w-4" /> Star on GitHub</a>
              <a href="https://github.com/yacine20005/Orbit-Market/issues" target="_blank" rel="noopener noreferrer" className="ghost-pill">Report Issues</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
