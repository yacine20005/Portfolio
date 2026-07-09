"use client"

import { useState } from "react"
import { Header } from "@/components/sections/header"
import { Footer } from "@/components/sections/footer"
import { 
  Backpack, 
  RotateCw, 
  Target, 
  Database, 
  Globe, 
  BookOpen, 
  Sliders, 
  Layers, 
  Check, 
  Sparkles,
  Zap,
  Sword,
  ShieldAlert
} from "lucide-react"
import { FaGithub } from "react-icons/fa"
import { ShaderAnimation } from "@/components/ui/shader-lines"
import { ProjectPreloader } from "@/components/ui/project-preloader"

export default function BackpackHeroPage() {
  const [loading, setLoading] = useState(true)
  const [contentVisible, setContentVisible] = useState(false)

  return (
    <div className="min-h-screen bg-obsidian text-paper overflow-hidden theme-backpack-hero">
      {loading && (
        <ProjectPreloader
          icon={<Backpack />}
          accentColor="rgb(245, 158, 11)"
          title="Backpack Hero"
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
              <ShaderAnimation color={[0.96, 0.62, 0.04]} />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-transparent" />
            <div className="relative z-10 text-center px-5 max-w-4xl mx-auto">
              <h1 className="font-inter font-normal text-[3.5rem] sm:text-[5.5rem] md:text-[7.5rem] leading-[0.85] tracking-tight text-paper mb-6">
                Backpack Hero
              </h1>
              <h2 className="text-lg md:text-2xl text-amber-300/80 font-inter font-normal max-w-2xl mx-auto">
                Strategic Inventory Management & Roguelike Dungeon Crawler
              </h2>
              <p className="text-base md:text-lg text-felt-gray max-w-xl mx-auto mt-6 leading-[1.6]">
                A desktop Java implementation of the popular backpack organization roguelike. Engineered with clean Object-Oriented Design, a strict MVC architecture, and custom 2D rendering through the Zen5 graphics library.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
                <a href="https://github.com/yacine20005/Backpack-Hero" target="_blank" rel="noopener noreferrer" className="ghost-pill">
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
                  { label: "LANGUAGE / SDK", value: "Java / JDK 25+", icon: BookOpen },
                  { label: "GUI RENDERING", value: "Zen5 Graphics Utility", icon: Layers },
                  { label: "ARCH PATTERN", value: "Model-View-Controller", icon: Sliders },
                  { label: "OOP DESIGNS", value: "Observer, Strategy, Factory", icon: Database },
                ].map((spec, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <spec.icon className="h-5 w-5 text-amber-400/60 mt-0.5 shrink-0" />
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
                  Roguelike Gameplay Mechanics
                </h2>
              </div>

              <div className="space-y-24">
                
                {/* Feature 1 */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                  <div className="lg:col-span-7 space-y-4">
                    <h3 className="font-inter font-light text-[1.8rem] md:text-[2.2rem] text-paper leading-[1.1]">
                      Spatial Inventory Puzzle
                    </h3>
                    <p className="text-base text-felt-gray leading-[1.6]">
                      Organizing your backpack is your greatest source of power. Items are not just slots in a menu; they have physical dimensions (Tetromino-like shapes) and must be rotated, placed, and aligned on a grid to maximize adjacency bonuses.
                    </p>
                    <div className="pt-2">
                      <ul className="space-y-2.5 text-sm text-felt-gray">
                        <li className="flex items-start gap-2.5">
                          <Check className="h-4.5 w-4.5 text-amber-400 shrink-0 mt-0.5" />
                          <span><strong>Adjacency Buffs:</strong> Placing a mana stone next to a magic wand increases its spell damage, requiring tactical spatial planning.</span>
                        </li>
                        <li className="flex items-start gap-2.5">
                          <Check className="h-4.5 w-4.5 text-amber-400 shrink-0 mt-0.5" />
                          <span><strong>Grid Expansion:</strong> Leveling up grants points to unlock additional cells of your choosing, altering your backpack shape dynamically.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="lg:col-span-5 bg-white/[0.01] border border-white/5 rounded-2xl p-6 lg:p-8">
                    <span className="text-[10px] font-mono text-white/40 block tracking-widest uppercase mb-4">Inventory Grid Simulation</span>
                    <div className="border border-white/10 bg-black/40 rounded-xl p-4 font-mono text-[10px] text-white/40 space-y-3">
                      <div className="grid grid-cols-5 gap-1.5 max-w-[200px] mx-auto text-center font-bold">
                        <div className="aspect-square bg-amber-500/35 border border-amber-400/50 rounded flex items-center justify-center text-amber-300">⚔️</div>
                        <div className="aspect-square bg-amber-500/35 border border-amber-400/50 rounded flex items-center justify-center text-amber-300">⚔️</div>
                        <div className="aspect-square bg-white/[0.02] border border-white/5 rounded" />
                        <div className="aspect-square bg-white/[0.02] border border-white/5 rounded" />
                        <div className="aspect-square bg-white/[0.02] border border-white/5 rounded" />
                        
                        <div className="aspect-square bg-white/[0.02] border border-white/5 rounded" />
                        <div className="aspect-square bg-amber-500/20 border border-amber-400/25 rounded flex items-center justify-center text-amber-300/60">🔮</div>
                        <div className="aspect-square bg-white/[0.02] border border-white/5 rounded" />
                        <div className="aspect-square bg-white/[0.02] border border-white/5 rounded" />
                        <div className="aspect-square bg-white/[0.02] border border-white/5 rounded" />

                        <div className="aspect-square bg-white/[0.02] border border-white/5 rounded" />
                        <div className="aspect-square bg-white/[0.02] border border-white/5 rounded" />
                        <div className="aspect-square bg-white/[0.02] border border-white/5 rounded" />
                        <div className="aspect-square bg-white/[0.02] border border-white/5 rounded" />
                        <div className="aspect-square bg-white/[0.02] border border-white/5 rounded" />
                      </div>
                      <div className="text-center text-[9px] text-white/30 pt-1">
                        Sword [2x1] placed next to Mana Booster [1x1]
                      </div>
                    </div>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                  <div className="lg:col-span-5 lg:order-2 space-y-4">
                    <h3 className="font-inter font-light text-[1.8rem] md:text-[2.2rem] text-paper leading-[1.1]">
                      Tactical Turn-Based Combat
                    </h3>
                    <p className="text-base text-felt-gray leading-[1.6]">
                      Combat is a strategic negotiation of your inventory resources. Each turn, you receive a fixed amount of energy points. Clicking items in your backpack spends energy to activate weapons for attacks, shields for armor blocks, or potions for healing.
                    </p>
                    <div className="pt-2">
                      <ul className="space-y-2.5 text-sm text-felt-gray">
                        <li className="flex items-start gap-2.5">
                          <Check className="h-4.5 w-4.5 text-amber-400 shrink-0 mt-0.5" />
                          <span><strong>Telegraphed Intentions:</strong> Enemies display their planned actions above their heads (attacking for 12, blocking, healing), letting you budget defense shields beforehand.</span>
                        </li>
                        <li className="flex items-start gap-2.5">
                          <Check className="h-4.5 w-4.5 text-amber-400 shrink-0 mt-0.5" />
                          <span><strong>Resource Scarcity:</strong> Managing finite health pools and energy counts forces you to balance high-damage weapons with protective items.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="lg:col-span-5 lg:order-1 bg-white/[0.01] border border-white/5 rounded-2xl p-6 lg:p-8">
                    <span className="text-[10px] font-mono text-white/40 block tracking-widest uppercase mb-4">Combat Action Mockup</span>
                    <div className="space-y-3 font-mono text-xs">
                      <div className="bg-[#141417] p-3 rounded-lg border border-white/5 flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <Sword className="h-4 w-4 text-amber-400" />
                          <span>Slime Attacking</span>
                        </div>
                        <span className="text-red-400 font-bold">Planned: 10 DMG</span>
                      </div>
                      <div className="bg-[#141417] p-3 rounded-lg border border-white/5 flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <ShieldAlert className="h-4 w-4 text-amber-400" />
                          <span>Shield Block</span>
                        </div>
                        <span className="text-amber-300 font-bold">Energy Cost: 1</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                  <div className="lg:col-span-7 space-y-4">
                    <h3 className="font-inter font-light text-[1.8rem] md:text-[2.2rem] text-paper leading-[1.1]">
                      Dungeon Crawler Progression
                    </h3>
                    <p className="text-base text-felt-gray leading-[1.6]">
                      Explore a procedurally generated dungeon layouts. Move from room to room facing enemy encounters, looting treasure chests, trading with gold-hungry merchants, and deciding paths under strict permadeath rules.
                    </p>
                    <div className="pt-2">
                      <ul className="space-y-2.5 text-sm text-felt-gray">
                        <li className="flex items-start gap-2.5">
                          <Check className="h-4.5 w-4.5 text-amber-400 shrink-0 mt-0.5" />
                          <span><strong>Procedural Encounters:</strong> Levels are dynamically generated, guaranteeing a fresh distribution of rooms, monsters, and loot on every run.</span>
                        </li>
                        <li className="flex items-start gap-2.5">
                          <Check className="h-4.5 w-4.5 text-amber-400 shrink-0 mt-0.5" />
                          <span><strong>Gold Merchants:</strong> Sell unwanted loot items to clear inventory space or spend gold to acquire high-rarity relic modifiers.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="lg:col-span-5 bg-white/[0.01] border border-white/5 rounded-2xl p-6 lg:p-8">
                    <span className="text-[10px] font-mono text-white/40 block tracking-widest uppercase mb-4">Run Stats Summary</span>
                    <div className="grid grid-cols-2 gap-3 text-center text-xs font-mono text-white/60">
                      <div className="p-3 bg-[#141417] border border-white/5 rounded-xl flex flex-col items-center gap-1">
                        <span>💀 Permadeath</span>
                        <span className="text-[9px] text-amber-300 font-semibold">Active</span>
                      </div>
                      <div className="p-3 bg-[#141417] border border-white/5 rounded-xl flex flex-col items-center gap-1">
                        <span>🏰 Floor Reach</span>
                        <span className="text-[9px] text-amber-300 font-semibold">B3 Deep Caves</span>
                      </div>
                      <div className="p-3 bg-[#141417] border border-white/5 rounded-xl flex flex-col items-center gap-1">
                        <span>🪙 Merchant Gold</span>
                        <span className="text-[9px] text-amber-300 font-semibold">145 coins</span>
                      </div>
                      <div className="p-3 bg-[#141417] border border-white/5 rounded-xl flex flex-col items-center gap-1">
                        <span>🧪 XP Level</span>
                        <span className="text-[9px] text-amber-300 font-semibold">Lv. 4 (Grid: 5x5)</span>
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
              <Sparkles className="h-8 w-8 mx-auto text-amber-400 mb-6 animate-pulse" />
              <h2 className="font-inter font-light text-[2.5rem] md:text-[3.5rem] leading-[0.9] tracking-tight text-paper">
                Explore the Source
              </h2>
              <p className="text-base md:text-lg text-felt-gray max-w-2xl mx-auto mt-6 leading-[1.6]">
                Backpack Hero is open-source. Browse the Java codebase, study the MVC and design pattern integrations, or check out compilation instructions on GitHub.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <a href="https://github.com/yacine20005/Backpack-Hero" target="_blank" rel="noopener noreferrer" className="ghost-pill">
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
