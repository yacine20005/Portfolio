"use client"

import { useState } from "react"
import { Header } from "@/components/sections/header"
import { Footer } from "@/components/sections/footer"
import { Bot } from "lucide-react"
import { FaGithub } from "react-icons/fa"
import { ShaderAnimation } from "@/components/ui/shader-lines"
import { ProjectPreloader } from "@/components/ui/project-preloader"
import { useLanguage } from "@/components/providers/language-context"

const content = {
  fr: {
    hero: {
      subtitle: "Coaching League of Legends sur Discord avec l'API Riot Games et Gemini",
      desc: "Un bot Discord qui récupère l'historique de vos parties classées, calcule vos indicateurs de performance sous Pandas et génère des rapports de coaching adaptés à votre rôle.",
      viewCode: "Voir sur GitHub",
      explore: "Découvrir le fonctionnement"
    },
    features: {
      title: "Analyse de jeu et rapports",
      list: [
        { title: "Analyse de l'historique des matchs", desc: "Traite vos dernières parties pour mettre en évidence les tendances, les forces et les erreurs récurrentes." },
        { title: "Indicateurs de performance (KPI)", desc: "Calcule le CS/min, l'or/min, le score de vision, la part des dégâts, la participation aux éliminations et le contrôle des objectifs." },
        { title: "Rapports adaptés au champion et au rôle", desc: "Gemini structure ses retours selon votre sélection de champions et les priorités de votre poste en jeu." },
        { title: "Export de données brutes", desc: "Un script export.py autonome permet d'extraire les statistiques de match aux formats CSV, JSON et TOON." }
      ]
    },
    pipeline: {
      title: "De la commande Discord au rapport",
      list: [
        { title: "Commande /coach", desc: "Un joueur lance la commande slash /coach sur Discord avec son identifiant Riot ID." },
        { title: "Récupération via l'API Riot", desc: "Le bot résout le PUUID via AccountV1 puis télécharge les identifiants de match et la chronologie détaillée des parties." },
        { title: "Agrégation sous Pandas", desc: "Les métriques du joueur sont filtrées et normalisées dans des DataFrames structurés." },
        { title: "Génération du diagnostic", desc: "Les statistiques agrégées sont sérialisées au format TOON et transmises à Gemini 2.5 Flash." },
        { title: "Découpage et envoi sur Discord", desc: "Le rapport est automatiquement découpé en plusieurs messages pour respecter la limite de caractères de Discord." }
      ]
    },
    architecture: {
      title: "Architecture technique",
      list: [
        { title: "Interface Discord", items: ["Commandes slash asynchrones (discord.py)", "Découpage automatique des longs rapports", "Gestion des limites de requêtes et erreurs API"] },
        { title: "Traitement des données", items: ["Intégration des APIs MatchV5, SummonerV4 et AccountV1", "Normalisation et agrégation via Pandas", "Sérialisation compacte TOON pour réduire l'empreinte de tokens"] },
        { title: "Modèle de langage", items: ["Google Gemini 2.5 Flash", "Prompt structuré par rôle (Top, Jungle, Mid, ADC, Support)", "Synthèse des priorités d'amélioration"] }
      ]
    },
    cta: {
      title: "Explorer Cobble Coach",
      desc: "Le code source est ouvert : parcourez le pipeline de données, dupliquez le projet ou déployez le bot sur votre propre serveur Discord.",
      star: "Voir sur GitHub"
    }
  },
  en: {
    hero: {
      subtitle: "League of Legends coaching on Discord powered by the Riot Games API and Gemini",
      desc: "A Discord bot that fetches your ranked match history, computes performance metrics with Pandas, and delivers role-specific coaching reports.",
      viewCode: "View on GitHub",
      explore: "See how it works"
    },
    features: {
      title: "Match analysis and reporting",
      list: [
        { title: "Match history analysis", desc: "Processes your recent games to surface recurring trends, strengths, and mistakes." },
        { title: "Performance metrics (KPIs)", desc: "Computes CS/min, Gold/min, Vision Score, Damage Share, Kill Participation, and Objective Control." },
        { title: "Role and champion-aware feedback", desc: "Gemini tailors its analysis to your champion pool and the responsibilities of your lane." },
        { title: "Standalone data export", desc: "An independent export.py utility dumps raw match data into CSV, JSON, and TOON formats." }
      ]
    },
    pipeline: {
      title: "From Discord command to coaching report",
      list: [
        { title: "The /coach command", desc: "A player runs the /coach slash command in Discord with their Riot ID." },
        { title: "Riot API ingestion", desc: "The bot resolves the PUUID via AccountV1 and fetches recent match IDs and timelines." },
        { title: "Pandas normalization", desc: "Player metrics are filtered and aggregated into structured Pandas DataFrames." },
        { title: "AI evaluation", desc: "Aggregated match data is serialized into TOON format and sent to Gemini 2.5 Flash." },
        { title: "Discord delivery", desc: "The resulting report is split into clean message chunks to fit Discord's character limits." }
      ]
    },
    architecture: {
      title: "Technical architecture",
      list: [
        { title: "Discord layer", items: ["Asynchronous slash commands (discord.py)", "Automatic message chunking", "Rate-limit and error handling"] },
        { title: "Data pipeline", items: ["MatchV5, SummonerV4, and AccountV1 endpoints", "Pandas DataFrames & metric aggregation", "Compact TOON serialization for LLM context"] },
        { title: "AI layer", items: ["Google Gemini 2.5 Flash", "Role-aware prompt engineering", "Structured actionable feedback"] }
      ]
    },
    cta: {
      title: "Explore Cobble Coach",
      desc: "The source code is open — browse the data pipeline, fork the project, or host the bot on your own Discord server.",
      star: "View on GitHub"
    }
  }
}

export default function CobbleCoachPage() {
  const [loading, setLoading] = useState(true)
  const [contentVisible, setContentVisible] = useState(false)
  const { language } = useLanguage()
  const t = content[language]

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

        <main className="relative z-10">
          {/* Hero */}
          <section className="relative h-screen flex items-center justify-center overflow-hidden border-b border-white/5">
            <div className="absolute inset-0 opacity-40">
              <ShaderAnimation color={[1.0, 0.2, 0.2]} />
            </div>
            <div className="absolute inset-0 bg-obsidian/65" />
            <div className="relative z-10 text-center px-5 max-w-4xl mx-auto">
              <h1 className="font-inter font-normal text-[3.2rem] sm:text-[5rem] md:text-[6.5rem] leading-[0.85] tracking-tight text-paper mb-6">
                Cobble Coach
              </h1>
              <h2 className="text-lg md:text-2xl text-felt-gray font-inter font-normal max-w-2xl mx-auto">
                {t.hero.subtitle}
              </h2>
              <p className="text-base md:text-lg text-felt-gray max-w-xl mx-auto mt-6 leading-[1.6]">
                {t.hero.desc}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <a href="https://github.com/yacine20005/Cobble-Coach" target="_blank" rel="noopener noreferrer" className="ghost-pill">
                  <FaGithub className="h-4 w-4" /> {t.hero.viewCode}
                </a>
                <a href="#features" className="ghost-pill">{t.hero.explore}</a>
              </div>
            </div>
          </section>

          {/* Features */}
          <section id="features" className="py-[56px] md:py-[92px]">
            <div className="container mx-auto max-w-[1078px] px-5 md:px-10">
              <h2 className="font-inter font-light text-[2.4rem] md:text-[3.4rem] leading-[0.95] tracking-tight text-paper">
                {t.features.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                {t.features.list.map((f, i) => (
                  <div key={i} className="border-l border-white/10 pl-5 md:pl-8">
                    <h3 className="text-xl font-inter font-normal text-paper tracking-tight mb-2">{f.title}</h3>
                    <p className="text-base text-felt-gray leading-[1.6]">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Pipeline */}
          <section className="py-[56px] md:py-[92px] border-t border-white/5">
            <div className="container mx-auto max-w-[1078px] px-5 md:px-10">
              <h2 className="font-inter font-light text-[2.4rem] md:text-[3.4rem] leading-[0.95] tracking-tight text-paper">
                {t.pipeline.title}
              </h2>
              <ol className="space-y-6 mt-12 list-decimal list-inside">
                {t.pipeline.list.map((step, i) => (
                  <li key={i} className="border-l border-white/10 pl-5 md:pl-8 py-1 marker:text-red-400 marker:font-semibold">
                    <span className="text-lg font-inter font-normal text-paper tracking-tight">{step.title}</span>
                    <p className="text-base text-felt-gray leading-[1.6] mt-1">{step.desc}</p>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          {/* Architecture */}
          <section className="py-[56px] md:py-[92px] border-t border-white/5">
            <div className="container mx-auto max-w-[1078px] px-5 md:px-10">
              <h2 className="font-inter font-light text-[2.4rem] md:text-[3.4rem] leading-[0.95] tracking-tight text-paper">
                {t.architecture.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                {t.architecture.list.map((col, i) => (
                  <div key={i} className="border border-white/10 rounded-2xl p-6 bg-white/[0.01]">
                    <h3 className="text-lg font-inter font-semibold text-paper mb-4">{col.title}</h3>
                    <ul className="space-y-2.5">
                      {col.items.map((item, j) => (
                        <li key={j} className="text-sm text-felt-gray leading-[1.5]">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-[56px] md:py-[92px] border-t border-white/5">
            <div className="container mx-auto max-w-[1078px] px-5 md:px-10 text-center">
              <h2 className="font-inter font-light text-[2.4rem] md:text-[3.4rem] leading-[0.95] tracking-tight text-paper">
                {t.cta.title}
              </h2>
              <p className="text-base md:text-lg text-felt-gray max-w-xl mx-auto mt-6 leading-[1.6]">
                {t.cta.desc}
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <a href="https://github.com/yacine20005/Cobble-Coach" target="_blank" rel="noopener noreferrer" className="ghost-pill">
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
