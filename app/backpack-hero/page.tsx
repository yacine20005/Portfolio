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
import { useLanguage } from "@/components/providers/language-context"

const content = {
  fr: {
    hero: {
      subtitle: "Gestion d'inventaire stratégique & Roguelike d'exploration de donjons",
      desc: "Une implémentation Java du célèbre roguelike d'organisation de sac à dos. Conçu avec une architecture MVC rigoureuse, des principes de programmation orientée objet (OOP) propres et un rendu 2D personnalisé via la bibliothèque graphique Zen.",
      ctaSource: "Code Source",
      ctaView: "Voir les fonctionnalités"
    },
    specs: {
      lang: { label: "LANGAGE / SDK", val: "Java / JDK 25+" },
      gui: { label: "RENDU GRAPHIQUE", val: "Utilitaire graphique Zen" },
      arch: { label: "MOTIF ARCHITECTURAL", val: "Modèle-Vue-Contrôleur (MVC)" },
      patterns: { label: "PATRONS DE CONCEPTION", val: "Observer, Strategy, Factory" }
    },
    features: {
      title: "Mécaniques de Gameplay Roguelike",
      f1: {
        title: "Puzzle d'inventaire spatial",
        desc: "L'organisation de votre sac à dos est votre principale source de puissance. Les objets ne sont pas de simples lignes dans un menu ; ils ont des dimensions physiques (type Tetromino) et doivent être pivotés, placés et alignés sur une grille pour maximiser les bonus d'adjacence.",
        b1: "Bonus d'adjacence : placez une pierre de mana à côté d'une baguette magique pour augmenter ses dégâts de sort, ce qui impose une planification spatiale tactique.",
        b2: "Expansion de la grille : monter de niveau octroie des points pour débloquer des cases supplémentaires de votre choix, modifiant ainsi la forme de votre sac.",
        simTitle: "Simulation de grille d'inventaire",
        simCaption: "Épée [2x1] placée à côté d'un booster de mana [1x1]"
      },
      f2: {
        title: "Combat tactique au tour par tour",
        desc: "Le combat est une négociation stratégique des ressources de votre inventaire. Chaque tour, vous recevez un nombre fixe de points d'énergie. Activer des objets dans votre sac à dos consomme de l'énergie pour attaquer avec des armes, bloquer avec des boucliers ou boire des potions de soin.",
        b1: "Actions ennemies prévisibles : les monstres affichent leurs intentions au-dessus de leur tête (attaque de 12, blocage, soin), vous permettant d'anticiper vos boucliers de défense.",
        b2: "Rareté des ressources : gérer des points de vie et d'énergie limités vous oblige à équilibrer l'usage d'armes offensives et d'objets protecteurs.",
        mockTitle: "Maquette des actions de combat",
        slimeAction: "Attaque de Slime",
        slimePlanned: "Prévu: 10 DEG",
        shieldAction: "Bloquer (Bouclier)",
        shieldCost: "Coût énergie: 1"
      },
      f3: {
        title: "Progression de Dungeon Crawler",
        desc: "Explorez des configurations de donjons générées de manière procédurale. Progressez de salle en salle en affrontant des monstres, en pillant des coffres au trésor, en commerçant avec des marchands avides d'or et en prenant des décisions sous une règle stricte de mort permanente (permadeath).",
        b1: "Rencontres procédurales : les niveaux sont générés dynamiquement, garantissant une disposition fraîche des salles, monstres et butins à chaque partie.",
        b2: "Marchands d'or : vendez vos objets inutiles pour libérer de l'espace d'inventaire ou dépensez vos pièces d'or pour acquérir de précieux modificateurs de reliques.",
        statsTitle: "Résumé des statistiques de la run",
        permaLabel: "Mort permanente",
        permaVal: "Active",
        floorLabel: "Profondeur atteinte",
        floorVal: "B3 Profondeurs",
        goldLabel: "Or du marchand",
        goldVal: "145 pièces",
        xpLabel: "Niveau d'XP",
        xpVal: "Nv. 4 (Grille: 5x5)"
      }
    },
    cta: {
      title: "Explorer le Code",
      desc: "Backpack Hero est open-source. Parcourez le code source Java, étudiez l'intégration des patrons de conception MVC ou lisez les instructions de compilation sur GitHub.",
      star: "Étoiler sur GitHub"
    }
  },
  en: {
    hero: {
      subtitle: "Strategic Inventory Management & Roguelike Dungeon Crawler",
      desc: "A desktop Java implementation of the popular backpack organization roguelike. Engineered with clean Object-Oriented Design, a strict MVC architecture, and custom 2D rendering through the Zen graphics library.",
      ctaSource: "View Source",
      ctaView: "View Features"
    },
    specs: {
      lang: { label: "LANGUAGE / SDK", val: "Java / JDK 25+" },
      gui: { label: "GUI RENDERING", val: "Zen Graphics Utility" },
      arch: { label: "ARCH PATTERN", val: "Model-View-Controller (MVC)" },
      patterns: { label: "DESIGN PATTERNS", val: "Design Patterns (Observer, Strategy, Factory)" }
    },
    features: {
      title: "Roguelike Gameplay Mechanics",
      f1: {
        title: "Spatial Inventory Puzzle",
        desc: "Organizing your backpack is your greatest source of power. Items are not just slots in a menu; they have physical dimensions (Tetromino-like shapes) and must be rotated, placed, and aligned on a grid to maximize adjacency bonuses.",
        b1: "Adjacency Buffs: Placing a mana stone next to a magic wand increases its spell damage, requiring tactical spatial planning.",
        b2: "Grid Expansion: Leveling up grants points to unlock additional cells of your choosing, altering your backpack shape dynamically.",
        simTitle: "Inventory Grid Simulation",
        simCaption: "Sword [2x1] placed next to Mana Booster [1x1]"
      },
      f2: {
        title: "Tactical Turn-Based Combat",
        desc: "Combat is a strategic negotiation of your inventory resources. Each turn, you receive a fixed amount of energy points. Clicking items in your backpack spends energy to activate weapons for attacks, shields for armor blocks, or potions for healing.",
        b1: "Telegraphed Intentions: Enemies display their planned actions above their heads (attacking for 12, blocking, healing), letting you budget defense shields beforehand.",
        b2: "Resource Scarcity: Managing finite health pools and energy counts forces you to balance high-damage weapons with protective items.",
        mockTitle: "Combat Action Mockup",
        slimeAction: "Slime Attacking",
        slimePlanned: "Planned: 10 DMG",
        shieldAction: "Shield Block",
        shieldCost: "Energy Cost: 1"
      },
      f3: {
        title: "Dungeon Crawler Progression",
        desc: "Explore a procedurally generated dungeon layouts. Move from room to room facing enemy encounters, looting treasure chests, trading with gold-hungry merchants, and deciding paths under strict permadeath rules.",
        b1: "Procedural Encounters: Levels are dynamically generated, guaranteeing a fresh distribution of rooms, monsters, and loot on every run.",
        b2: "Gold Merchants: Sell unwanted loot items to clear inventory space or spend gold to acquire high-rarity relic modifiers.",
        statsTitle: "Run Stats Summary",
        permaLabel: "Permadeath",
        permaVal: "Active",
        floorLabel: "Floor Reach",
        floorVal: "B3 Deep Caves",
        goldLabel: "Merchant Gold",
        goldVal: "145 coins",
        xpLabel: "XP Level",
        xpVal: "Lv. 4 (Grid: 5x5)"
      }
    },
    cta: {
      title: "Explore the Source",
      desc: "Backpack Hero is open-source. Browse the Java codebase, study the MVC and design pattern integrations, or check out compilation instructions on GitHub.",
      star: "Star on GitHub"
    }
  }
}

export default function BackpackHeroPage() {
  const [loading, setLoading] = useState(true)
  const [contentVisible, setContentVisible] = useState(false)
  const { language } = useLanguage()
  const t = content[language]

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
                {t.hero.subtitle}
              </h2>
              <p className="text-base md:text-lg text-felt-gray max-w-xl mx-auto mt-6 leading-[1.6]">
                {t.hero.desc}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
                <a href="https://github.com/yacine20005/Backpack-Hero" target="_blank" rel="noopener noreferrer" className="ghost-pill">
                  <FaGithub className="h-4 w-4" /> {t.hero.ctaSource}
                </a>
                <a href="#features" className="ghost-pill">{t.hero.ctaView}</a>
              </div>
            </div>
          </section>

          {/* Quick Specifications Dashboard */}
          <section className="py-8 bg-white/[0.01] border-b border-white/5">
            <div className="container mx-auto max-w-[1078px] px-5 md:px-10">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
                {[
                  { label: t.specs.lang.label, value: t.specs.lang.val, icon: BookOpen },
                  { label: t.specs.gui.label, value: t.specs.gui.val, icon: Layers },
                  { label: t.specs.arch.label, value: t.specs.arch.val, icon: Sliders },
                  { label: t.specs.patterns.label, value: t.specs.patterns.val, icon: Database },
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
                  {t.features.title}
                </h2>
              </div>

              <div className="space-y-24">
                
                {/* Feature 1 */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                  <div className="lg:col-span-7 space-y-4">
                    <h3 className="font-inter font-light text-[1.8rem] md:text-[2.2rem] text-paper leading-[1.1]">
                      {t.features.f1.title}
                    </h3>
                    <p className="text-base text-felt-gray leading-[1.6]">
                      {t.features.f1.desc}
                    </p>
                    <div className="pt-2">
                      <ul className="space-y-2.5 text-sm text-felt-gray">
                        <li className="flex items-start gap-2.5">
                          <Check className="h-4.5 w-4.5 text-amber-400 shrink-0 mt-0.5" />
                          <span>{t.features.f1.b1}</span>
                        </li>
                        <li className="flex items-start gap-2.5">
                          <Check className="h-4.5 w-4.5 text-amber-400 shrink-0 mt-0.5" />
                          <span>{t.features.f1.b2}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="lg:col-span-5 bg-white/[0.01] border border-white/5 rounded-2xl p-6 lg:p-8">
                    <span className="text-[10px] font-mono text-white/40 block tracking-widest uppercase mb-4">{t.features.f1.simTitle}</span>
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
                        {t.features.f1.simCaption}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                  <div className="lg:col-span-5 lg:order-2 space-y-4">
                    <h3 className="font-inter font-light text-[1.8rem] md:text-[2.2rem] text-paper leading-[1.1]">
                      {t.features.f2.title}
                    </h3>
                    <p className="text-base text-felt-gray leading-[1.6]">
                      {t.features.f2.desc}
                    </p>
                    <div className="pt-2">
                      <ul className="space-y-2.5 text-sm text-felt-gray">
                        <li className="flex items-start gap-2.5">
                          <Check className="h-4.5 w-4.5 text-amber-400 shrink-0 mt-0.5" />
                          <span>{t.features.f2.b1}</span>
                        </li>
                        <li className="flex items-start gap-2.5">
                          <Check className="h-4.5 w-4.5 text-amber-400 shrink-0 mt-0.5" />
                          <span>{t.features.f2.b2}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="lg:col-span-5 lg:order-1 bg-white/[0.01] border border-white/5 rounded-2xl p-6 lg:p-8">
                    <span className="text-[10px] font-mono text-white/40 block tracking-widest uppercase mb-4">{t.features.f2.mockTitle}</span>
                    <div className="space-y-3 font-mono text-xs">
                      <div className="bg-[#141417] p-3 rounded-lg border border-white/5 flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <Sword className="h-4 w-4 text-amber-400" />
                          <span>{t.features.f2.slimeAction}</span>
                        </div>
                        <span className="text-red-400 font-bold">{t.features.f2.slimePlanned}</span>
                      </div>
                      <div className="bg-[#141417] p-3 rounded-lg border border-white/5 flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <ShieldAlert className="h-4 w-4 text-amber-400" />
                          <span>{t.features.f2.shieldAction}</span>
                        </div>
                        <span className="text-amber-300 font-bold">{t.features.f2.shieldCost}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                  <div className="lg:col-span-7 space-y-4">
                    <h3 className="font-inter font-light text-[1.8rem] md:text-[2.2rem] text-paper leading-[1.1]">
                      {t.features.f3.title}
                    </h3>
                    <p className="text-base text-felt-gray leading-[1.6]">
                      {t.features.f3.desc}
                    </p>
                    <div className="pt-2">
                      <ul className="space-y-2.5 text-sm text-felt-gray">
                        <li className="flex items-start gap-2.5">
                          <Check className="h-4.5 w-4.5 text-amber-400 shrink-0 mt-0.5" />
                          <span>{t.features.f3.b1}</span>
                        </li>
                        <li className="flex items-start gap-2.5">
                          <Check className="h-4.5 w-4.5 text-amber-400 shrink-0 mt-0.5" />
                          <span>{t.features.f3.b2}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="lg:col-span-5 bg-white/[0.01] border border-white/5 rounded-2xl p-6 lg:p-8">
                    <span className="text-[10px] font-mono text-white/40 block tracking-widest uppercase mb-4">{t.features.f3.statsTitle}</span>
                    <div className="grid grid-cols-2 gap-3 text-center text-xs font-mono text-white/60">
                      <div className="p-3 bg-[#141417] border border-white/5 rounded-xl flex flex-col items-center gap-1">
                        <span>💀 {t.features.f3.permaLabel}</span>
                        <span className="text-[9px] text-amber-300 font-semibold">{t.features.f3.permaVal}</span>
                      </div>
                      <div className="p-3 bg-[#141417] border border-white/5 rounded-xl flex flex-col items-center gap-1">
                        <span>🏰 {t.features.f3.floorLabel}</span>
                        <span className="text-[9px] text-amber-300 font-semibold">{t.features.f3.floorVal}</span>
                      </div>
                      <div className="p-3 bg-[#141417] border border-white/5 rounded-xl flex flex-col items-center gap-1">
                        <span>🪙 {t.features.f3.goldLabel}</span>
                        <span className="text-[9px] text-amber-300 font-semibold">{t.features.f3.goldVal}</span>
                      </div>
                      <div className="p-3 bg-[#141417] border border-white/5 rounded-xl flex flex-col items-center gap-1">
                        <span>🧪 {t.features.f3.xpLabel}</span>
                        <span className="text-[9px] text-amber-300 font-semibold">{t.features.f3.xpVal}</span>
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
                {t.cta.title}
              </h2>
              <p className="text-base md:text-lg text-felt-gray max-w-2xl mx-auto mt-6 leading-[1.6]">
                {t.cta.desc}
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <a href="https://github.com/yacine20005/Backpack-Hero" target="_blank" rel="noopener noreferrer" className="ghost-pill">
                  <FaGithub className="h-4 w-4" /> {t.cta.star}
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
