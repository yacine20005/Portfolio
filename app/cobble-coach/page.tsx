"use client"

import { useState } from "react"
import { Header } from "@/components/sections/header"
import { Footer } from "@/components/sections/footer"
import { Bot, BarChart3, Brain, Target, Zap, Database, MessageSquare, FileText } from "lucide-react"
import { FaGithub } from "react-icons/fa"
import { ShaderAnimation } from "@/components/ui/shader-lines"
import { ProjectPreloader } from "@/components/ui/project-preloader"
import { useLanguage } from "@/components/providers/language-context"

const content = {
  fr: {
    hero: {
      subtitle: "Coaching League of Legends propulsé par l'IA sur Discord",
      desc: "Un bot Discord avancé exploitant l'API de Riot Games et Google Gemini pour fournir des rapports de coaching personnalisés.",
      viewCode: "Voir sur GitHub",
      explore: "Explorer les fonctionnalités"
    },
    features: {
      title: "Fonctionnalités Clés",
      list: [
        { title: "Analyse de l'historique des matchs", desc: "Traite instantanément vos dernières parties pour mettre en lumière les tendances, schémas et erreurs récurrentes." },
        { title: "Indicateurs de performance profonds (KPI)", desc: "CS/min, Or/min, score de vision, part des dégâts, participation aux éliminations, contrôle des objectifs." },
        { title: "Coaching IA personnalisé", desc: "Gemini adapte ses critiques à votre sélection de champions (pool) et à votre rôle en jeu." },
        { title: "Utilitaire d'export de données", desc: "Un script export.py autonome pour exporter les statistiques brutes en formats CSV, JSON et TOON." }
      ]
    },
    pipeline: {
      title: "Comment ça fonctionne",
      list: [
        { step: "01", title: "Interaction de l'utilisateur", desc: "Un joueur utilise la commande slash /coach accompagnée de son identifiant Riot ID." },
        { step: "02", title: "Ingestion des données", desc: "Résout le PUUID via l'API Account, récupère les identifiants de match et les chronologies de jeu." },
        { step: "03", title: "Traitement des données", desc: "Filtre et normalise les métriques du joueur dans des DataFrames Pandas structurés." },
        { step: "04", title: "Analyse par l'IA", desc: "Un prompt contextuel transmet les données agrégées de la partie à Gemini." },
        { step: "05", title: "Remise du rapport", desc: "Le rapport de coaching est découpé par blocs pour respecter les limites de taille de Discord." }
      ]
    },
    architecture: {
      title: "Architecture",
      list: [
        { title: "Couche Discord", items: ["Commandes slash asynchrones", "Découpage de messages", "Gestion des erreurs & retours utilisateur"] },
        { title: "Pipeline de données", items: ["APIs MatchV5, SummonerV4, AccountV1", "DataFrames Pandas & agrégation", "Sérialisation TOON pour le contexte LLM"] },
        { title: "Couche IA", items: ["Gemini 2.5 Flash", "Ingénierie de prompt contextuel", "Critique structurée en sortie"] }
      ]
    },
    cta: {
      title: "Explorer Cobble Coach",
      desc: "Le code source est ouvert — parcourez le pipeline, dupliquez le projet, ou ajoutez-le à votre serveur Discord.",
      star: "Étoiler sur GitHub"
    }
  },
  en: {
    hero: {
      subtitle: "AI-Powered League of Legends Coaching on Discord",
      desc: "An advanced Discord bot leveraging the Riot Games API and Google Gemini to deliver personalised coaching reports.",
      viewCode: "View on GitHub",
      explore: "Explore Features"
    },
    features: {
      title: "Key Features",
      list: [
        { title: "Match History Analysis", desc: "Instantly processes the last games to surface trends, patterns, and recurring mistakes." },
        { title: "Deep KPI Insights", desc: "CS/min, Gold/min, Vision Score, Damage Share, Kill Participation, Objective Control." },
        { title: "Personalised AI Coaching", desc: "Gemini adapts its critique to champion pool and role played." },
        { title: "Data Export Utility", desc: "Standalone export.py dumps match data into CSV, JSON, and TOON formats." }
      ]
    },
    pipeline: {
      title: "How It Works",
      list: [
        { step: "01", title: "User Interaction", desc: "A player invokes the /coach slash command with their Riot ID." },
        { step: "02", title: "Data Ingestion", desc: "Resolves PUUID via the Account API, fetches match IDs and timelines." },
        { step: "03", title: "Data Processing", desc: "Filters and normalises player metrics into structured Pandas DataFrames." },
        { step: "04", title: "AI Analysis", desc: "A context-aware prompt sends aggregated match data to Gemini." },
        { step: "05", title: "Response Delivery", desc: "The coaching report is chunked to respect Discord's message limits." }
      ]
    },
    architecture: {
      title: "Architecture",
      list: [
        { title: "Discord Layer", items: ["Asynchronous slash commands", "Message chunking", "Error handling & user feedback"] },
        { title: "Data Pipeline", items: ["MatchV5, SummonerV4, AccountV1", "Pandas DataFrames & aggregation", "TOON serialisation for LLM context"] },
        { title: "AI Layer", items: ["Gemini 2.5 Flash", "Context-aware prompt engineering", "Structured critique output"] }
      ]
    },
    cta: {
      title: "Explore Cobble Coach",
      desc: "The source code is open — browse the pipeline, fork the project, or add it to your Discord server.",
      star: "Star on GitHub"
    }
  }
}

export default function CobbleCoachPage() {
  const [loading, setLoading] = useState(true)
  const [contentVisible, setContentVisible] = useState(false)
  const { language } = useLanguage()
  const t = content[language]

  const featureIcons = [
    <BarChart3 key="0" className="h-6 w-6" />,
    <Target key="1" className="h-6 w-6" />,
    <Brain key="2" className="h-6 w-6" />,
    <FileText key="3" className="h-6 w-6" />
  ]

  const pipelineIcons = [
    <MessageSquare key="0" className="h-6 w-6" />,
    <Database key="1" className="h-6 w-6" />,
    <BarChart3 key="2" className="h-6 w-6" />,
    <Brain key="3" className="h-6 w-6" />,
    <Zap key="4" className="h-6 w-6" />
  ]

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
        
        <main className="relative z-10">
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
          <section id="features" className="py-[46px] md:py-[92px]">
            <div className="container mx-auto max-w-[1078px] px-5 md:px-10">
              <h2 className="font-inter font-light text-[2.5rem] md:text-[3.5rem] leading-[0.9] tracking-tight text-paper">
                {t.features.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
                {t.features.list.map((f, i) => (
                  <div key={i} className="border-l-[1px] border-white/10 pl-5 md:pl-8">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-felt-gray">{featureIcons[i]}</span>
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
              <h2 className="font-inter font-light text-[2.5rem] md:text-[3.5rem] leading-[0.9] tracking-tight text-paper">
                {t.pipeline.title}
              </h2>
              <div className="space-y-6 mt-10">
                {t.pipeline.list.map((step, i) => (
                  <div key={i} className="flex gap-4 md:gap-8 border-l-[1px] border-white/10 pl-5 md:pl-8">
                    <span className="text-caption text-felt-gray mt-1">{step.step}</span>
                    <div className="text-felt-gray shrink-0 mt-0.5">{pipelineIcons[i]}</div>
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
              <h2 className="font-inter font-light text-[2.5rem] md:text-[3.5rem] leading-[0.9] tracking-tight text-paper">
                {t.architecture.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
                {t.architecture.list.map((arch, i) => (
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
              <h2 className="font-inter font-light text-[2.5rem] md:text-[3.5rem] leading-[0.9] tracking-tight text-paper">
                {t.cta.title}
              </h2>
              <p className="text-lg text-felt-gray max-w-2xl mx-auto mt-6 leading-[1.6]">
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
