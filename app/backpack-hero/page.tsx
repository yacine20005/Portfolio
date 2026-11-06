"use client"

import { useState } from "react"
import { Header } from "@/components/sections/header"
import { Footer } from "@/components/sections/footer"
import {
  Backpack,
  Check,
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
      subtitle: "Gestion d'inventaire spatiale et exploration de donjons en Java",
      desc: "Une implémentation Java du roguelike d'organisation de sac à dos, structurée autour d'une architecture Modèle-Vue-Contrôleur (MVC) stricte et d'un moteur d'affichage 2D personnalisé avec la bibliothèque Zen.",
      ctaSource: "Code Source",
      ctaView: "Découvrir le projet"
    },
    features: {
      title: "Mécaniques de jeu et architecture",
      f1: {
        title: "Grille d'inventaire spatiale et bonus d'adjacence",
        desc: "Dans Backpack Hero, la puissance du personnage dépend directement de l'agencement physique de son sac. Chaque objet occupe une forme géométrique sur la grille et interagit avec ses voisins.",
        b1: "Placer une pierre de mana à côté d'une arme ou d'une baguette amplifie ses dégâts, ce qui demande de réorganiser son sac à chaque nouveau butin.",
        b2: "Chaque montée de niveau permet de débloquer de nouvelles cases pour agrandir la grille selon sa stratégie.",
        swordLabel: "Épée (2×1)",
        manaLabel: "Mana (1×1)",
        simCaption: "Adjacence active : la pierre de mana amplifie l'épée adjacente"
      },
      f2: {
        title: "Combat au tour par tour et gestion d'énergie",
        desc: "Chaque tour accorde un budget d'énergie limité. Utiliser une arme, lever un bouclier ou consommer une potion puise dans cette réserve.",
        b1: "Les ennemis annoncent leur prochaine action avant votre tour (attaque, défense ou soin), permettant de calculer exactement la défense nécessaire.",
        b2: "L'architecture MVC découple intégralement la résolution mathématique des combats et le rendu graphique 2D.",
        slimeAction: "Intention ennemie : Slime",
        slimePlanned: "Attaque · 10 dégâts",
        shieldAction: "Action joueur : Bouclier",
        shieldCost: "Coût : 1 énergie"
      },
      f3: {
        title: "Génération procédurale des étages",
        desc: "Les étages du donjon sont générés dynamiquement à chaque partie : salles de combat, coffres, marchands et événements s'enchaînent avec une règle de mort permanente.",
        b1: "Création procédurale des étages garantissant une disposition différente des salles et du butin à chaque session.",
        b2: "Utilisation des patrons de conception Factory et Strategy pour instancier les familles d'objets et leurs effets passifs.",
        permaLabel: "Mort permanente",
        permaVal: "Active",
        floorLabel: "Étage",
        floorVal: "Sous-sol 3",
        goldLabel: "Or en poche",
        goldVal: "145 pièces",
        xpLabel: "Taille du sac",
        xpVal: "Niveau 4 · Grille 5×5"
      }
    },
    cta: {
      title: "Explorer le code Java",
      desc: "Parcourez le code source, l'implémentation MVC et les instructions de compilation sur GitHub.",
      star: "Voir sur GitHub"
    }
  },
  en: {
    hero: {
      subtitle: "Spatial inventory management and roguelike dungeon crawler in Java",
      desc: "A desktop Java implementation of the backpack-organization roguelike, built with a strict Model-View-Controller (MVC) architecture, clean object-oriented design patterns, and custom 2D rendering via the Zen graphics library.",
      ctaSource: "View Source",
      ctaView: "Explore the project"
    },
    features: {
      title: "Gameplay mechanics and architecture",
      f1: {
        title: "Spatial inventory grid and adjacency bonuses",
        desc: "In Backpack Hero, character strength comes directly from how items are arranged inside the bag. Every item occupies a physical shape on the grid and interacts with neighboring cells.",
        b1: "Placing a mana stone next to a weapon or wand boosts its output, turning every loot drop into a spatial puzzle.",
        b2: "Leveling up lets players unlock new cells to reshape and expand the backpack grid.",
        swordLabel: "Sword (2×1)",
        manaLabel: "Mana (1×1)",
        simCaption: "Active adjacency: the mana stone buffs the neighboring sword"
      },
      f2: {
        title: "Turn-based combat and energy budgeting",
        desc: "Each turn grants a fixed energy pool. Swinging weapons, raising shields, or drinking potions consumes energy directly from the backpack.",
        b1: "Enemies telegraph their next move beforehand (attacking, blocking, or healing), allowing precise defensive planning.",
        b2: "The MVC architecture cleanly separates combat state resolution from the 2D Zen rendering loop.",
        slimeAction: "Enemy intent: Slime",
        slimePlanned: "Attack · 10 DMG",
        shieldAction: "Player action: Shield",
        shieldCost: "Cost: 1 Energy"
      },
      f3: {
        title: "Procedural dungeon generation",
        desc: "Dungeon floors are generated dynamically on every run: combat encounters, treasure rooms, and merchants unfold under permadeath rules.",
        b1: "Procedural floor layouts ensure a fresh distribution of rooms, enemies, and loot on every playthrough.",
        b2: "Uses Factory and Strategy design patterns to instantiate item families and passive adjacency effects.",
        permaLabel: "Permadeath",
        permaVal: "Active",
        floorLabel: "Current floor",
        floorVal: "Depth B3",
        goldLabel: "Gold carried",
        goldVal: "145 coins",
        xpLabel: "Backpack size",
        xpVal: "Level 4 · 5×5 Grid"
      }
    },
    cta: {
      title: "Explore the Java codebase",
      desc: "Browse the Java source code, MVC architecture, and build instructions on GitHub.",
      star: "View on GitHub"
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

          {/* Features Walkthrough */}
          <section id="features" className="py-[56px] md:py-[92px] border-b border-white/5">
            <div className="container mx-auto max-w-[1078px] px-5 md:px-10">
              <div className="max-w-2xl mb-20">
                <h2 className="font-inter font-light text-[2.4rem] md:text-[3.4rem] leading-[0.95] tracking-tight text-paper">
                  {t.features.title}
                </h2>
              </div>

              <div className="space-y-24">
                {/* Feature 1: Spatial Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                  <div className="lg:col-span-7 space-y-4">
                    <h3 className="font-inter font-light text-[1.8rem] md:text-[2.2rem] text-paper leading-[1.1]">
                      {t.features.f1.title}
                    </h3>
                    <p className="text-base text-felt-gray leading-[1.6]">
                      {t.features.f1.desc}
                    </p>
                    <ul className="space-y-2.5 pt-2 text-sm text-felt-gray">
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
                  <div className="lg:col-span-5 bg-white/[0.01] border border-white/10 rounded-2xl p-6 space-y-4">
                    <div className="grid grid-cols-4 gap-2 max-w-[240px] mx-auto text-center text-xs">
                      <div className="col-span-2 h-12 bg-amber-500/25 border border-amber-400/50 rounded-lg flex items-center justify-center text-amber-200 font-medium">
                        {t.features.f1.swordLabel}
                      </div>
                      <div className="h-12 bg-white/[0.02] border border-white/5 rounded-lg" />
                      <div className="h-12 bg-white/[0.02] border border-white/5 rounded-lg" />

                      <div className="h-12 bg-white/[0.02] border border-white/5 rounded-lg" />
                      <div className="h-12 bg-sky-500/20 border border-sky-400/40 rounded-lg flex items-center justify-center text-sky-200 font-medium text-[11px]">
                        {t.features.f1.manaLabel}
                      </div>
                      <div className="h-12 bg-white/[0.02] border border-white/5 rounded-lg" />
                      <div className="h-12 bg-white/[0.02] border border-white/5 rounded-lg" />
                    </div>
                    <div className="text-center text-xs text-white/50 pt-1">
                      {t.features.f1.simCaption}
                    </div>
                  </div>
                </div>

                {/* Feature 2: Turn-Based Combat */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                  <div className="lg:col-span-7 lg:order-2 space-y-4">
                    <h3 className="font-inter font-light text-[1.8rem] md:text-[2.2rem] text-paper leading-[1.1]">
                      {t.features.f2.title}
                    </h3>
                    <p className="text-base text-felt-gray leading-[1.6]">
                      {t.features.f2.desc}
                    </p>
                    <ul className="space-y-2.5 pt-2 text-sm text-felt-gray">
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
                  <div className="lg:col-span-5 lg:order-1 bg-white/[0.01] border border-white/10 rounded-2xl p-6 space-y-3 text-xs">
                    <div className="bg-[#141417] p-4 rounded-xl border border-white/5 flex justify-between items-center">
                      <div className="flex items-center gap-2.5">
                        <Sword className="h-4 w-4 text-amber-400" />
                        <span className="text-paper">{t.features.f2.slimeAction}</span>
                      </div>
                      <span className="text-red-400 font-medium">{t.features.f2.slimePlanned}</span>
                    </div>
                    <div className="bg-[#141417] p-4 rounded-xl border border-white/5 flex justify-between items-center">
                      <div className="flex items-center gap-2.5">
                        <ShieldAlert className="h-4 w-4 text-amber-400" />
                        <span className="text-paper">{t.features.f2.shieldAction}</span>
                      </div>
                      <span className="text-amber-300 font-medium">{t.features.f2.shieldCost}</span>
                    </div>
                  </div>
                </div>

                {/* Feature 3: Dungeon Progression */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                  <div className="lg:col-span-7 space-y-4">
                    <h3 className="font-inter font-light text-[1.8rem] md:text-[2.2rem] text-paper leading-[1.1]">
                      {t.features.f3.title}
                    </h3>
                    <p className="text-base text-felt-gray leading-[1.6]">
                      {t.features.f3.desc}
                    </p>
                    <ul className="space-y-2.5 pt-2 text-sm text-felt-gray">
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
                  <div className="lg:col-span-5 bg-white/[0.01] border border-white/10 rounded-2xl p-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    {[
                      { label: t.features.f3.permaLabel, val: t.features.f3.permaVal },
                      { label: t.features.f3.floorLabel, val: t.features.f3.floorVal },
                      { label: t.features.f3.goldLabel, val: t.features.f3.goldVal },
                      { label: t.features.f3.xpLabel, val: t.features.f3.xpVal },
                    ].map((item, idx) => (
                      <div key={idx} className="p-4 bg-[#141417] border border-white/5 rounded-xl space-y-1">
                        <div className="text-white/60">{item.label}</div>
                        <div className="text-amber-300 font-medium">{item.val}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-[56px] md:py-[92px]">
            <div className="container mx-auto max-w-[1078px] px-5 md:px-10 text-center">
              <h2 className="font-inter font-light text-[2.4rem] md:text-[3.4rem] leading-[0.95] tracking-tight text-paper">
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
