"use client"

import { useState } from "react"
import { Header } from "@/components/sections/header"
import { Footer } from "@/components/sections/footer"
import { 
  Zap, 
  Clock, 
  Shield, 
  Target, 
  Database, 
  Globe, 
  Smartphone, 
  Server, 
  Activity, 
  Check, 
  CheckCircle2, 
  ArrowRight,
  Sparkles
} from "lucide-react"
import { GiMoonOrbit } from "react-icons/gi"
import { FaGithub } from "react-icons/fa"
import { ShaderAnimation } from "@/components/ui/shader-lines"
import { ProjectPreloader } from "@/components/ui/project-preloader"

export default function OrbitMarketPage() {
  const [loading, setLoading] = useState(true)
  const [contentVisible, setContentVisible] = useState(false)

  return (
    <div className="min-h-screen bg-obsidian text-paper overflow-hidden theme-orbit-market">
      {loading && (
        <ProjectPreloader
          icon={<GiMoonOrbit />}
          accentColor="rgb(96, 165, 250)"
          title="Orbit Market"
          onReveal={() => setContentVisible(true)}
          onComplete={() => setLoading(false)}
        />
      )}
      <div className={`transition-all duration-300 ${contentVisible ? "opacity-100 visible" : "opacity-0 invisible"}`}>
        <Header />
        
        {/* Ambient Background Glow */}
        <div className="fixed top-0 right-0 w-[50vw] h-[50vw] bg-[radial-gradient(ellipse_at_top_right,rgba(var(--color-accent-rgb),0.08),transparent_70%)] pointer-events-none z-0" />
        
        <main className="relative z-10">
          
          {/* Hero Section */}
          <section className="relative h-screen flex items-center justify-center overflow-hidden border-b border-white/5">
            <div className="absolute inset-0 opacity-[0.25] pointer-events-none">
              <ShaderAnimation color={[0.2, 0.6, 1.0]} />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-transparent" />
            <div className="relative z-10 text-center px-5 max-w-4xl mx-auto">
              <h1 className="font-inter font-normal text-[3.5rem] sm:text-[5.5rem] md:text-[7.5rem] leading-[0.85] tracking-tight text-paper mb-6">
                Orbit Market
              </h1>
              <h2 className="text-lg md:text-2xl text-blue-300/80 font-inter font-normal max-w-2xl mx-auto">
                Multi-Game Vendor & World State Tracker
              </h2>
              <p className="text-base md:text-lg text-felt-gray max-w-xl mx-auto mt-6 leading-[1.6]">
                An elegant mobile companion application for Destiny 2 and Warframe. Track active vendor inventories, monitor real-time world states, and analyze weapon rolls through a fast and consolidated dashboard.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
                <a href="https://github.com/yacine20005/Orbit-Market" target="_blank" rel="noopener noreferrer" className="ghost-pill">
                  <FaGithub className="h-4 w-4" /> View Source
                </a>
                <a href="#features" className="ghost-pill">View Features</a>
              </div>
            </div>
          </section>

          {/* Quick Specifications Dashboard */}
          <section className="py-8 bg-white/[0.01] border-b border-white/5">
            <div className="container mx-auto max-w-[1078px] px-5 md:px-10">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
                {[
                  { label: "FRONTEND STACK", value: "React Native / Expo", icon: Smartphone },
                  { label: "BACKEND STACK", value: "FastAPI (Python)", icon: Server },
                  { label: "EXTERNAL APIS", value: "Bungie.net & Warframe API", icon: Globe },
                  { label: "LOCAL DATABASE", value: "SQLite Manifest Cache", icon: Database },
                ].map((spec, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <spec.icon className="h-5 w-5 text-blue-400/60 mt-0.5 shrink-0" />
                    <div>
                      <div className="text-[10px] tracking-[0.15em] text-white/40 uppercase font-mono">{spec.label}</div>
                      <div className="text-sm font-inter text-paper font-normal mt-0.5">{spec.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Features Walkthrough (Alternating Layout) */}
          <section id="features" className="py-[46px] md:py-[92px] border-b border-white/5">
            <div className="container mx-auto max-w-[1078px] px-5 md:px-10">
              
              <div className="text-center max-w-2xl mx-auto mb-20">
                <h2 className="font-inter font-light text-[2.5rem] md:text-[3.5rem] leading-[0.9] tracking-tight text-paper">
                  Companion Features in Action
                </h2>
              </div>

              <div className="space-y-24">
                
                {/* Feature 1 */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                  <div className="lg:col-span-7 space-y-4">
                    <h3 className="font-inter font-light text-[1.8rem] md:text-[2.2rem] text-paper leading-[1.1]">
                      Real‑Time Xûr Inventory Tracker
                    </h3>
                    <p className="text-base text-felt-gray leading-[1.6]">
                      Xûr, the Agent of the Nine, arrives every weekend with a rotating selection of exotic gear. Orbit Market tracks his exact inventory details the moment he enters the game world, providing full transparency on item availability and costs.
                    </p>
                    <div className="pt-2">
                      <ul className="space-y-2.5 text-sm text-felt-gray">
                        <li className="flex items-start gap-2.5">
                          <Check className="h-4.5 w-4.5 text-blue-400 shrink-0 mt-0.5" />
                          <span><strong>Perk & Roll Decryption:</strong> Break down specific stat distributions and perk descriptions on weapons and armor, helping players spot god-rolls instantly.</span>
                        </li>
                        <li className="flex items-start gap-2.5">
                          <Check className="h-4.5 w-4.5 text-blue-400 shrink-0 mt-0.5" />
                          <span><strong>Material Cost Breakdown:</strong> Easily see required materials (Legendary Shards, Glimmer, Exotic Ciphers) needed for weekly purchases.</span>
                        </li>
                        <li className="flex items-start gap-2.5">
                          <Check className="h-4.5 w-4.5 text-blue-400 shrink-0 mt-0.5" />
                          <span><strong>Automatic Weekly Sync:</strong> Seamless inventory refreshes occur immediately as the Bungie servers transition into Xûr's weekly schedule.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="lg:col-span-5 bg-white/[0.01] border border-white/5 rounded-2xl p-6 lg:p-8">
                    <span className="text-[10px] font-mono text-white/40 block tracking-widest uppercase mb-4">Live Tracking Metrics</span>
                    <div className="space-y-3 font-mono text-xs">
                      {[
                        { title: "Weekly Location", value: "Winding Cove, EDZ" },
                        { title: "Active Exotic Weapon", value: "Gjallarhorn (Rocket Launcher)" },
                        { title: "Armor Inventory", value: "Hunter, Titan, and Warlock Sets Loaded" },
                      ].map((item, idx) => (
                        <div key={idx} className="bg-[#141417] p-3 rounded-lg border border-white/5 flex justify-between items-center">
                          <span className="text-white/60">{item.title}</span>
                          <span className="text-blue-300 font-semibold text-[10px]">{item.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                  <div className="lg:col-span-5 lg:order-2 space-y-4">
                    <h3 className="font-inter font-light text-[1.8rem] md:text-[2.2rem] text-paper leading-[1.1]">
                      Destiny 2 Vendor Roster
                    </h3>
                    <p className="text-base text-felt-gray leading-[1.6]">
                      Beyond Xûr, the application will host inventory states for other key Tower and destinations vendors. Keep tabs on weekly bounties, rotating weapon rolls, and crafting materials directly from the app.
                    </p>
                    <div className="pt-2">
                      <ul className="space-y-2.5 text-sm text-felt-gray">
                        <li className="flex items-start gap-2.5">
                          <Check className="h-4.5 w-4.5 text-blue-400 shrink-0 mt-0.5" />
                          <span><strong>Tower Vendor Support:</strong> Read active inventories for Ada-1 (armor mods), Banshee-44 (weapons), Saint-14 (Trials), and Lord Shaxx.</span>
                        </li>
                        <li className="flex items-start gap-2.5">
                          <Check className="h-4.5 w-4.5 text-blue-400 shrink-0 mt-0.5" />
                          <span><strong>Automatic Manifest Seeding:</strong> Backend parses Bungie's massive Manifest database to map vendor coordinates, names, and images efficiently.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="lg:col-span-5 lg:order-1 bg-white/[0.01] border border-white/5 rounded-2xl p-6 lg:p-8">
                    <span className="text-[10px] font-mono text-white/40 block tracking-widest uppercase mb-4">Vendor Pipeline Status</span>
                    <div className="space-y-3 font-mono text-xs">
                      {[
                        { name: "Ada-1 (Armor Mods)", status: "Seeded & Validated" },
                        { name: "Banshee-44 (Weapons)", status: "Seeded & Validated" },
                        { name: "Saint-14 (Trials Gear)", status: "Active on Weekends" },
                      ].map((item, idx) => (
                        <div key={idx} className="bg-[#141417] p-3 rounded-lg border border-white/5 flex justify-between items-center">
                          <span className="text-white/60">{item.name}</span>
                          <span className="text-blue-300 font-semibold text-[10px]">{item.status}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                  <div className="lg:col-span-7 space-y-4">
                    <h3 className="font-inter font-light text-[1.8rem] md:text-[2.2rem] text-paper leading-[1.1]">
                      Warframe World State Dashboard
                    </h3>
                    <p className="text-base text-felt-gray leading-[1.6]">
                      Monitor Warframe's dynamic universe. Track active alerts, open-world cycles, invasion milestones, and community market pricing lists in a consolidated, cross-game workspace.
                    </p>
                    <div className="pt-2">
                      <ul className="space-y-2.5 text-sm text-felt-gray">
                        <li className="flex items-start gap-2.5">
                          <Check className="h-4.5 w-4.5 text-blue-400 shrink-0 mt-0.5" />
                          <span><strong>Dynamic Earth Cycles:</strong> Real-time track of Earth's Day/Night cycles and Cetus/Vallis open-world timer offsets.</span>
                        </li>
                        <li className="flex items-start gap-2.5">
                          <Check className="h-4.5 w-4.5 text-blue-400 shrink-0 mt-0.5" />
                          <span><strong>Alerts & Invasions:</strong> Instant listings of active alerts (Orkin Reactors, Catalysts) and faction invasion progress.</span>
                        </li>
                        <li className="flex items-start gap-2.5">
                          <Check className="h-4.5 w-4.5 text-blue-400 shrink-0 mt-0.5" />
                          <span><strong>Market Price Tracking:</strong> Connects to Warframe's ecosystem APIs to display current trade values for prime sets and mods.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="lg:col-span-5 bg-white/[0.01] border border-white/5 rounded-2xl p-6 lg:p-8">
                    <span className="text-[10px] font-mono text-white/40 block tracking-widest uppercase mb-4">World State Mock</span>
                    <div className="grid grid-cols-2 gap-3 text-center text-xs font-mono text-white/60">
                      <div className="p-3 bg-[#141417] border border-white/5 rounded-xl flex flex-col items-center gap-1">
                        <span>🌅 Cetus (Earth)</span>
                        <span className="text-[9px] text-blue-300 font-semibold">Day (1h 14m left)</span>
                      </div>
                      <div className="p-3 bg-[#141417] border border-white/5 rounded-xl flex flex-col items-center gap-1">
                        <span>🌌 Orb Vallis (Venus)</span>
                        <span className="text-[9px] text-blue-300 font-semibold">Warm (4m left)</span>
                      </div>
                      <div className="p-3 bg-[#141417] border border-white/5 rounded-xl flex flex-col items-center gap-1">
                        <span>🛡️ Faction Invasions</span>
                        <span className="text-[9px] text-blue-300 font-semibold">Grineer vs Corpus Active</span>
                      </div>
                      <div className="p-3 bg-[#141417] border border-white/5 rounded-xl flex flex-col items-center gap-1">
                        <span>🎁 Lotus Gifts</span>
                        <span className="text-[9px] text-blue-300 font-semibold">Orokin Catalyst Alert</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </section>

          {/* Under the Hood - Technical Architecture */}
          <section className="py-[46px] md:py-[92px] border-b border-white/5 bg-white/[0.005]">
            <div className="container mx-auto max-w-[1078px] px-5 md:px-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                
                {/* Tech Stack Details */}
                <div className="lg:col-span-5 space-y-6">
                  <h2 className="font-inter font-light text-[2.5rem] md:text-[3rem] leading-[0.95] tracking-tight text-paper">
                    Under the hood: multi-game engine
                  </h2>
                  <p className="text-base text-felt-gray leading-[1.6]">
                    Building a cross-game tracker presents a unique scaling challenge due to the massive volume of game metadata. Orbit Market resolves this by caching data intelligently at the api level.
                  </p>
                  
                  <div className="space-y-4">
                    {[
                      { title: "FastAPI Backend API (Python)", desc: "Handles high-performance data operations. Connects to Bungie and Warframe endpoints concurrently, parses large JSON arrays, and caches responses to avoid API throttling." },
                      { title: "Bungie Manifest (SQLite Cache)", desc: "Instead of requesting Bungie server assets on every single click, our backend caches the massive static Destiny 2 Manifest inside a local SQLite database for instantaneous queries." },
                      { title: "Modular Expo Navigation", desc: "Designed with React Navigation to handle multiple deep stack states, enabling fluid transitions between the Destiny 2 vendor sheets and Warframe dashboards." }
                    ].map((detail, idx) => (
                      <div key={idx} className="border-l border-white/10 pl-4 py-1">
                        <div className="text-sm font-semibold text-paper">{detail.title}</div>
                        <p className="text-xs text-felt-gray mt-1 leading-[1.5]">{detail.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Graphic Representation */}
                <div className="lg:col-span-7 flex flex-col justify-center">
                  
                  {/* Text Diagram */}
                  <div className="border border-white/10 rounded-2xl bg-black/40 p-6 font-mono text-xs text-white/50 leading-relaxed space-y-6">
                    <div className="flex justify-between items-center text-[10px] tracking-wide text-white/35 font-semibold">
                      <span>PIPELINE DIAGRAM</span>
                      <span className="text-blue-400">Live Data Fetch & Caching Loop</span>
                    </div>

                    <div className="space-y-4">
                      {/* Mobile App */}
                      <div className="border border-white/15 bg-white/[0.02] p-3 rounded-lg flex items-center justify-between">
                        <div>
                          <div className="text-blue-300 font-semibold">Expo Client Application</div>
                          <div className="text-[10px] opacity-60">Assembles views from FastAPI responses</div>
                        </div>
                        <span className="text-[10px] bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded font-bold">FRONTEND</span>
                      </div>

                      {/* Bridge */}
                      <div className="flex justify-around items-center px-8 text-white/30 text-base">
                        <span>│ offline cached state</span>
                        <span>▲ requests vendor specs</span>
                      </div>

                      {/* FastAPI backend */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="border border-white/15 bg-white/[0.01] p-3 rounded-lg text-center">
                          <div className="text-paper">FastAPI Routing</div>
                          <div className="text-[9px] opacity-40 mt-1">Gathers JSON, validates models</div>
                        </div>
                        <div className="border border-white/15 bg-white/[0.01] p-3 rounded-lg text-center">
                          <div className="text-paper">SQLite Manifest</div>
                          <div className="text-[9px] opacity-40 mt-1">Queries D2 items locally</div>
                        </div>
                      </div>

                      {/* Bridge */}
                      <div className="flex justify-center text-white/30">
                        <span>▼ Periodically synced against</span>
                      </div>

                      {/* External APIs */}
                      <div className="border border-white/15 bg-white/[0.02] p-3 rounded-lg flex items-center justify-between">
                        <div>
                          <div className="text-blue-300 font-semibold">Bungie.net & Warframe Endpoints</div>
                          <div className="text-[10px] opacity-60">Source of live weekly and daily world states</div>
                        </div>
                        <span className="text-[10px] bg-white/10 text-white px-2 py-0.5 rounded font-bold font-mono">APIS</span>
                      </div>
                    </div>

                  </div>

                </div>

              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-[46px] md:py-[92px]">
            <div className="container mx-auto max-w-[1078px] px-5 md:px-10 text-center">
              <Sparkles className="h-8 w-8 mx-auto text-blue-400 mb-6 animate-pulse" />
              <h2 className="font-inter font-light text-[2.5rem] md:text-[3.5rem] leading-[0.9] tracking-tight text-paper">
                Get Involved
              </h2>
              <p className="text-base md:text-lg text-felt-gray max-w-2xl mx-auto mt-6 leading-[1.6]">
                Orbit Market is an open-source companion tracker. Explore the codebase on GitHub, suggest new features, or star the project to support its active development.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <a href="https://github.com/yacine20005/Orbit-Market" target="_blank" rel="noopener noreferrer" className="ghost-pill">
                  <FaGithub className="h-4 w-4" /> Star on GitHub
                </a>
              </div>
            </div>
          </section>

        </main>
        
        <Footer />
      </div>
    </div>
  )
}
