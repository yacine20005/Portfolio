"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Header } from "@/components/sections/header"
import { Footer } from "@/components/sections/footer"
import { 
  Sparkles, 
  Zap, 
  Cpu, 
  Code2, 
  Database, 
  Terminal, 
  Check, 
  Copy, 
  Bot, 
  User, 
  ShieldCheck,
  Server,
  Play,
  RotateCcw,
  FileText,
  MousePointerClick,
  CheckCircle2,
  Lock,
  Loader2
} from "lucide-react"
import { FaGithub } from "react-icons/fa"
import { ShaderAnimation } from "@/components/ui/shader-lines"
import { ProjectPreloader } from "@/components/ui/project-preloader"
import { useLanguage } from "@/components/providers/language-context"

const content = {
  fr: {
    hero: {
      subtitle: "Assistant IA conversationnel RAG temps réel & Widget Web autonome",
      desc: "Un chatbot IA ultra-léger et hautement personnalisable intégrable en une ligne de code. Propulsé par FastAPI, Google Gemini 2.5 Flash, du streaming Server-Sent Events (SSE) et un bundle JS Vanilla optimisé sous esbuild.",
      ctaSource: "Code Source GitHub",
      ctaPowers: "Découvrir les 3 Pouvoirs",
      ctaTestBot: "Tester le chatbot en direct"
    },
    specs: {
      backend: { label: "BACKEND & IA", val: "FastAPI & Gemini 2.5 Flash" },
      streaming: { label: "STREAMING PROTOCOL", val: "Server-Sent Events (SSE)" },
      frontend: { label: "FRONTEND BUNDLE", val: "Vanilla JS ES6 + esbuild" },
      rag: { label: "CONTEXTE & RAG", val: "Base Markdown" }
    },
    powers: {
      title: "Les 3 Pouvoirs de Xur",
      subtitle: "Cliquez sur les onglets ci-dessous pour découvrir de manière visuelle et ludique ce qui fait la force de Xur.",
      tabs: [
        { id: "speed", label: "⚡ 1. Vitesse Streaming SSE", sub: "Comparatif Vitesse" },
        { id: "rag", label: "🧠 2. Cerveau Métier RAG", sub: "Précision Sans Hallucination" },
        { id: "plug", label: "🔌 3. Intégration 1-Clic", sub: "Plug & Play Universel" }
      ],
      speedTab: {
        title: "Streaming mot-à-mot vs Chatbot Traditionnel",
        desc: "Pourquoi attendre 4 à 5 secondes devant un spinner immobile ? Avec Xur, la réponse commence à s'afficher en moins de 200 millisecondes.",
        btnTest: "Lancer le comparatif de vitesse",
        traditionalLabel: "Chatbot FAQ Classique",
        traditionalWaitingBadge: "Attente 4s...",
        traditionalStatusWaiting: "Attente de la réponse complète (API lente)...",
        traditionalStatusDone: "Réponse reçue d'un bloc après 4.2s !",
        traditionalIdle: "Cliquez sur \"Lancer le comparatif\" pour tester la latence...",
        traditionalLatencyLabel: "Latence perçue :",
        traditionalLatencyDone: "4 200 ms (Bloc)",
        xurLabel: "Xur AI (Streaming SSE)",
        xurStatusStreaming: "Streaming continu Gemini 2.5 (200ms)...",
        xurIdle: "Cliquez sur \"Lancer le comparatif\" pour voir le streaming mot-à-mot...",
        xurFirstTokenLabel: "Premier token :",
        sampleText: "Les livraisons sont gratuites en France dès 50€ d'achat. Vos colis sont expédiés sous 24h et vous disposez de 14 jours pour effectuer un retour sans frais.",
      },
      ragTab: {
        title: "Une IA alimentée par VOTRE documentation",
        desc: "Au lieu d'inventer des informations génériques, Xur lit votre fichier markdown et extrait la bonne réponse instantanément.",
        docTitle: "knowledge_base.md (Base d'entreprise)",
        sampleTopics: [
          { key: "shipping", label: "🚚 Livraisons & Délais", text: "Livraison standard offerte dès 50€. Expédition en 24h-48h." },
          { key: "returns", label: "↩️ Retours & Rétractation", text: "Retour sous 14 jours via le formulaire support@xur-ai.com." },
          { key: "pricing", label: "💳 Tarifs & abonnements", text: "Pack Starter gratuit (15 RPM) / Pack Pro 49€ par mois." }
        ],
        promptLabel: "Question sélectionnée :",
        xurAnswerLabel: "Réponse générée par Xur (Strictement basée sur le doc) :",
        verifiedNote: "Réponse 100% vérifiée et bornée. Aucune hallucination possible."
      },
      plugTab: {
        title: "Intégration instantanée sur n'importe quel site",
        desc: "Glissez le script sur votre site : le widget s'initialise automatiquement avec son style isolé et responsive.",
        siteMockupTitle: "Boutique E-Commerce (Aperçu)",
        btnToggleWidget: "Activer / Désactiver le Widget Xur",
        widgetActiveText: "Widget Xur Actif & Connecté !",
        widgetInactiveText: "Cliquez sur le bouton ci-dessus pour intégrer Xur sur le site fictif.",
        codeTag: '<script src="https://xur-bot.vercel.app/widget.js" api-key="demo-key"></script>'
      },
      liveBanner: {
        title: "Testez le chatbot en direct sur ce portfolio !",
        desc: "L'assistant IA Xur est directement déployé sur la landing page, juste sous la section contact. Venez lui poser vos questions !",
        btn: "Tester le chatbot en direct"
      }
    },
    features: {
      title: "Piliers d'Ingénierie & Performance",
      list: [
        {
          title: "Zero Dépendance Lourde",
          desc: "Le widget frontend est écrit en Vanilla JS ES6 pur, sans React ni frameworks tiers. Compilé avec esbuild, le bundle pèse moins de 12 KB minifié.",
          icon: Terminal
        },
        {
          title: "Réponses RAG Bounded & Précises",
          desc: "L'IA est strictement contrainte par le contexte d'entreprise fourni dans le fichier markdown, éliminant les hallucinations sur les offres et tarifs.",
          icon: ShieldCheck
        },
        {
          title: "0€ de Frais d'Infrastructure",
          desc: "Exploite le quota gratuit de Google AI Studio (15 RPM, 1M tokens/jour). En l'absence de clé API, le backend bascule automatiquement en mode démo offline.",
          icon: Server
        }
      ]
    },
    embed: {
      title: "Exemple de balise d'intégration 1-clic",
      desc: "Voici la structure type du script HTML permettant d'intégrer Xur sur n'importe quel site web (Shopify, WordPress, Webflow ou HTML statique) :",
      code: '<script src="https://votre-serveur-xur.com/widget.js" api-key="VOTRE_CLE_DEMO"></script>',
      note: "💡 Snippet d'illustration : ce code est un exemple théorique démontrant la simplicité du format d'intégration (1 seule ligne). Il est donné à titre démonstratif.",
      copyBtn: "Copier l'exemple",
      copySuccess: "Exemple copié !"
    },
    cta: {
      title: "Explorer le Projet Xur",
      desc: "Xur est open-source. Consultez l'architecture FastAPI, étudiez le bundler esbuild ou testez directement le chatbot en direct sur la landing page.",
      star: "Étoiler sur GitHub",
      testBot: "Tester le chatbot en direct"
    }
  },
  en: {
    hero: {
      subtitle: "Real-Time RAG AI Conversational Assistant & Standalone Web Widget",
      desc: "An ultra-lightweight, highly customizable AI chatbot integrable with a single line of code. Powered by FastAPI, Google Gemini 2.5 Flash, Server-Sent Events (SSE) streaming, and an optimized Vanilla JS bundle compiled with esbuild.",
      ctaSource: "GitHub Source Code",
      ctaPowers: "Discover the 3 Powers",
      ctaTestBot: "Test live Chatbot"
    },
    specs: {
      backend: { label: "BACKEND & AI", val: "FastAPI & Gemini 2.5 Flash" },
      streaming: { label: "STREAMING PROTOCOL", val: "Server-Sent Events (SSE)" },
      frontend: { label: "FRONTEND BUNDLE", val: "Vanilla JS ES6 + esbuild" },
      rag: { label: "CONTEXT & RAG", val: "Markdown Base" }
    },
    powers: {
      title: "The 3 Powers of Xur",
      subtitle: "Click the tabs below to explore what makes Xur unique in a visual and intuitive way.",
      tabs: [
        { id: "speed", label: "⚡ 1. SSE Streaming Speed", sub: "Speed Comparison" },
        { id: "rag", label: "🧠 2. Business RAG Brain", sub: "Accuracy without Hallucinations" },
        { id: "plug", label: "🔌 3. 1-Click Embed", sub: "Universal Plug & Play" }
      ],
      speedTab: {
        title: "Word-by-Word Streaming vs Traditional Chatbot",
        desc: "Why wait 4 to 5 seconds staring at a frozen spinner? With Xur, tokens stream continuously in under 200 milliseconds.",
        btnTest: "Launch Speed Comparison Test",
        traditionalLabel: "Classic FAQ Chatbot",
        traditionalWaitingBadge: "Waiting 4s...",
        traditionalStatusWaiting: "Waiting for full API response (slow)...",
        traditionalStatusDone: "Received all text at once after 4.2s!",
        traditionalIdle: "Click \"Launch Speed Comparison Test\" to test latency...",
        traditionalLatencyLabel: "Perceived latency:",
        traditionalLatencyDone: "4,200 ms (Batch)",
        xurLabel: "Xur AI (SSE Streaming)",
        xurStatusStreaming: "Gemini 2.5 Continuous Streaming (200ms)...",
        xurIdle: "Click \"Launch Speed Comparison Test\" to see word-by-word streaming...",
        xurFirstTokenLabel: "First token:",
        sampleText: "Free shipping across France on orders over €50. Orders ship within 24h and you have 14 days for free returns.",
      },
      ragTab: {
        title: "AI Powered strictly by YOUR Business Documentation",
        desc: "Instead of hallucinating generic responses, Xur reads your markdown file and retrieves exact facts instantly.",
        docTitle: "knowledge_base.md (Company Docs)",
        sampleTopics: [
          { key: "shipping", label: "🚚 Shipping & Delivery", text: "Standard free delivery on orders over €50. Ships in 24h-48h." },
          { key: "returns", label: "↩️ Returns & Refund Policy", text: "14-day return window via support@xur-ai.com." },
          { key: "pricing", label: "💳 Pricing & Plans", text: "Free Starter Pack (15 RPM) / Pro Pack €49/month." }
        ],
        promptLabel: "Selected Question:",
        xurAnswerLabel: "Xur Answer (Strictly grounded in doc):",
        verifiedNote: "100% verified and bounded response. Zero hallucination possible."
      },
      plugTab: {
        title: "Instant Integration on Any Website",
        desc: "Drop the script onto your page: the widget mounts automatically with isolated, responsive styling.",
        siteMockupTitle: "E-Commerce Store (Preview)",
        btnToggleWidget: "Toggle Xur Widget On / Off",
        widgetActiveText: "Xur Widget Active & Connected!",
        widgetInactiveText: "Click the button above to mount Xur onto the mockup website.",
        codeTag: '<script src="https://xur-bot.vercel.app/widget.js" api-key="demo-key"></script>'
      },
      liveBanner: {
        title: "Test the chatbot live on this portfolio!",
        desc: "The Xur AI assistant is deployed live on the landing page right below the contact section. Come test it out!",
        btn: "Test live Chatbot"
      }
    },
    features: {
      title: "Engineering Pillars & Performance",
      list: [
        {
          title: "Zero Heavy Dependencies",
          desc: "The frontend widget is built with pure Vanilla JS ES6 without React or heavy frameworks. Compiled with esbuild, the minified bundle is under 12 KB.",
          icon: Terminal
        },
        {
          title: "Bounded & Accurate RAG Responses",
          desc: "The AI is strictly bounded by business context supplied in the markdown file, eliminating hallucinations on offers and pricing.",
          icon: ShieldCheck
        },
        {
          title: "$0 Infrastructure Cost MVP",
          desc: "Leverages Google AI Studio free tier (15 RPM, 1M tokens/day). If no API key is configured, the backend automatically switches to offline demo mode.",
          icon: Server
        }
      ]
    },
    embed: {
      title: "1-Click Integration Code Example",
      desc: "Here is the standard HTML script tag format for embedding Xur on any website (Shopify, WordPress, Webflow, or static HTML):",
      code: '<script src="https://your-xur-server.com/widget.js" api-key="YOUR_DEMO_KEY"></script>',
      note: "💡 Illustrative snippet: this code is an example demonstrating the 1-line embedding format for showcase purposes.",
      copyBtn: "Copy example",
      copySuccess: "Example copied!"
    },
    cta: {
      title: "Explore Xur Project",
      desc: "Xur is open-source. Inspect the FastAPI backend, study the esbuild bundler setup, or test the live chatbot directly on the landing page.",
      star: "Star on GitHub",
      testBot: "Test live Chatbot"
    }
  }
}

export default function XurProjectPage() {
  const [loading, setLoading] = useState(true)
  const [contentVisible, setContentVisible] = useState(false)
  const { language } = useLanguage()
  const t = content[language]

  // Tab State
  const [activeTab, setActiveTab] = useState<"speed" | "rag" | "plug">("speed")

  // Speed Tab State
  const [speedTesting, setSpeedTesting] = useState(false)
  const [tradDone, setTradDone] = useState(false)
  const [xurStreamText, setXurStreamText] = useState("")
  const streamIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const tradTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  // RAG Tab State
  const [selectedTopic, setSelectedTopic] = useState<number>(0)

  // Plug Tab State
  const [isWidgetMounted, setIsWidgetMounted] = useState(true)
  const [copiedEmbed, setCopiedEmbed] = useState(false)

  useEffect(() => {
    return () => {
      if (streamIntervalRef.current) clearInterval(streamIntervalRef.current)
      if (tradTimeoutRef.current) clearTimeout(tradTimeoutRef.current)
    }
  }, [])

  const runSpeedTest = () => {
    if (speedTesting) return
    if (streamIntervalRef.current) clearInterval(streamIntervalRef.current)
    if (tradTimeoutRef.current) clearTimeout(tradTimeoutRef.current)
    setSpeedTesting(true)
    setTradDone(false)
    setXurStreamText("")

    // Xur Streaming Starts Immediately (200ms)
    const text = t.powers.speedTab.sampleText
    let currentIdx = 0
    streamIntervalRef.current = setInterval(() => {
      currentIdx += 2
      if (currentIdx >= text.length) {
        currentIdx = text.length
        if (streamIntervalRef.current) clearInterval(streamIntervalRef.current)
      }
      setXurStreamText(text.slice(0, currentIdx))
    }, 30)

    // Traditional Chatbot Waits 3.5s before showing all text at once
    tradTimeoutRef.current = setTimeout(() => {
      setTradDone(true)
      setSpeedTesting(false)
    }, 3500)
  }

  const handleCopyCode = () => {
    navigator.clipboard.writeText(t.embed.code)
    setCopiedEmbed(true)
    setTimeout(() => setCopiedEmbed(false), 2000)
  }

  return (
    <div className="min-h-screen bg-obsidian text-paper overflow-hidden theme-xur">
      {loading && (
        <ProjectPreloader
          icon={<Sparkles />}
          accentColor="rgb(16, 185, 129)"
          title="Xur"
          onReveal={() => setContentVisible(true)}
          onComplete={() => setLoading(false)}
        />
      )}

      <div className={`transition-all duration-300 ${contentVisible ? "opacity-100 visible" : "opacity-0 invisible"}`}>
        <Header />

        {/* Ambient Background Glow */}
        <div className="fixed top-0 right-0 w-[50vw] h-[50vw] bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.12),transparent_70%)] pointer-events-none z-0" />
        <div className="fixed bottom-0 left-0 w-[40vw] h-[40vw] bg-[radial-gradient(ellipse_at_bottom_left,rgba(6,182,212,0.08),transparent_70%)] pointer-events-none z-0" />

        <main className="relative z-10">

          {/* Hero Section (No Badge as requested) */}
          <section className="relative h-screen flex items-center justify-center overflow-hidden border-b border-white/5">
            <div className="absolute inset-0 opacity-[0.3] pointer-events-none">
              <ShaderAnimation color={[0.06, 0.72, 0.51]} />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-transparent" />
            <div className="relative z-10 text-center px-5 max-w-4xl mx-auto">
              <h1 className="font-inter font-normal text-[3.5rem] sm:text-[5.5rem] md:text-[7.5rem] leading-[0.85] tracking-tight text-paper mb-6">
                Xur
              </h1>
              <h2 className="text-lg md:text-2xl text-emerald-300/90 font-inter font-normal max-w-2xl mx-auto">
                {t.hero.subtitle}
              </h2>
              <p className="text-base md:text-lg text-felt-gray max-w-xl mx-auto mt-6 leading-[1.6]">
                {t.hero.desc}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
                <Link href="/#chatbot" className="ghost-pill inline-flex items-center gap-2 bg-emerald-500 text-obsidian font-semibold border-emerald-400 hover:bg-emerald-400 shadow-lg shadow-emerald-500/20">
                  <Bot className="h-4 w-4 text-obsidian" /> {t.hero.ctaTestBot}
                </Link>
                <a href="https://github.com/yacine20005/Xur" target="_blank" rel="noopener noreferrer" className="ghost-pill inline-flex items-center gap-2">
                  <FaGithub className="h-4 w-4" /> {t.hero.ctaSource}
                </a>
                <a href="#powers" className="ghost-pill inline-flex items-center gap-2 border-emerald-500/40 text-emerald-400">
                  <Sparkles className="h-4 w-4 text-emerald-400" /> {t.hero.ctaPowers}
                </a>
              </div>
            </div>
          </section>

          {/* Quick Specifications Dashboard */}
          <section className="py-8 bg-white/[0.01] border-b border-white/5">
            <div className="container mx-auto max-w-[1078px] px-5 md:px-10">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
                {[
                  { label: t.specs.backend.label, value: t.specs.backend.val, icon: Cpu },
                  { label: t.specs.streaming.label, value: t.specs.streaming.val, icon: Zap },
                  { label: t.specs.frontend.label, value: t.specs.frontend.val, icon: Code2 },
                  { label: t.specs.rag.label, value: t.specs.rag.val, icon: Database },
                ].map((spec, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <spec.icon className="h-5 w-5 text-emerald-400/80 mt-0.5 shrink-0" />
                    <div>
                      <div className="text-[10px] tracking-[0.15em] text-white/40 uppercase font-mono">{spec.label}</div>
                      <div className="text-sm font-inter text-paper font-normal mt-0.5">{spec.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Core Interactive Showcase Section: "Les 3 Pouvoirs de Xur" */}
          <section id="powers" className="py-[46px] md:py-[92px] border-b border-white/5">
            <div className="container mx-auto max-w-[1078px] px-5 md:px-10">
              
              <div className="text-center max-w-2xl mx-auto mb-12">
                <h2 className="font-inter font-light text-[2.5rem] md:text-[3.5rem] leading-[0.9] tracking-tight text-paper">
                  {t.powers.title}
                </h2>
                <p className="text-base text-felt-gray mt-4">
                  {t.powers.subtitle}
                </p>
              </div>

              {/* Interactive Tabs Header */}
              <div className="flex flex-wrap justify-center gap-3 mb-10">
                {t.powers.tabs.map((tab) => {
                  const isActive = activeTab === tab.id
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id as any)}
                      className={`px-5 py-3 rounded-2xl text-sm font-inter transition-all duration-300 border flex flex-col items-center md:items-start text-center md:text-left ${
                        isActive
                          ? "bg-emerald-500/15 border-emerald-400 text-paper shadow-lg shadow-emerald-500/10 scale-[1.02]"
                          : "bg-white/[0.02] border-white/10 text-white/60 hover:text-paper hover:border-white/20"
                      }`}
                    >
                      <span className="font-semibold text-sm">{tab.label}</span>
                      <span className="text-[11px] font-mono text-emerald-400/80 mt-0.5">{tab.sub}</span>
                    </button>
                  )
                })}
              </div>

              {/* Tab 1: Speed Comparison */}
              {activeTab === "speed" && (
                <div className="bg-[#0e1017] border border-emerald-500/30 rounded-3xl p-6 md:p-10 shadow-2xl animate-fadeIn">
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8 border-b border-white/10 pb-6">
                    <div>
                      <h3 className="text-2xl font-inter font-normal text-paper">
                        {t.powers.speedTab.title}
                      </h3>
                      <p className="text-sm text-felt-gray mt-2 max-w-xl">
                        {t.powers.speedTab.desc}
                      </p>
                    </div>
                    <button
                      onClick={runSpeedTest}
                      disabled={speedTesting}
                      className="ghost-pill inline-flex items-center gap-2 bg-emerald-500 text-obsidian font-semibold border-emerald-400 hover:bg-emerald-400 disabled:opacity-50 transition-all duration-300 shrink-0"
                    >
                      <Zap className="w-4 h-4 fill-obsidian" />
                      <span>{t.powers.speedTab.btnTest}</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Traditional Chatbot Card */}
                    <div className="bg-black/50 border border-white/10 rounded-2xl p-6 relative">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-mono text-red-400 uppercase tracking-wider font-semibold">
                          ❌ {t.powers.speedTab.traditionalLabel}
                        </span>
                        {speedTesting && !tradDone && (
                          <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-amber-400">
                            <Loader2 className="w-3.5 h-3.5 animate-spin" />
                            <span>{t.powers.speedTab.traditionalWaitingBadge}</span>
                          </span>
                        )}
                      </div>

                      <div className="min-h-[110px] bg-[#14161f] border border-white/5 rounded-xl p-4 text-xs font-sans text-white/60 leading-relaxed flex items-center justify-center text-center">
                        {speedTesting && !tradDone ? (
                          <div className="space-y-2">
                            <Loader2 className="w-6 h-6 animate-spin text-amber-400 mx-auto" />
                            <p className="text-amber-400/80 font-mono text-[11px]">{t.powers.speedTab.traditionalStatusWaiting}</p>
                          </div>
                        ) : tradDone ? (
                          <span className="text-paper">{t.powers.speedTab.sampleText}</span>
                        ) : (
                          <span className="text-white/30 italic">{t.powers.speedTab.traditionalIdle}</span>
                        )}
                      </div>
                      <div className="mt-3 text-[11px] font-mono text-white/40 text-right">
                        {t.powers.speedTab.traditionalLatencyLabel} {tradDone ? t.powers.speedTab.traditionalLatencyDone : "--"}
                      </div>
                    </div>

                    {/* Xur SSE Streaming Card */}
                    <div className="bg-emerald-950/20 border border-emerald-500/40 rounded-2xl p-6 relative">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider font-semibold">
                          ⚡ {t.powers.speedTab.xurLabel}
                        </span>
                        {speedTesting && (
                          <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 animate-pulse">
                            <Sparkles className="w-3.5 h-3.5" />
                            <span>SSE Stream</span>
                          </span>
                        )}
                      </div>

                      <div className="min-h-[110px] bg-black/60 border border-emerald-500/20 rounded-xl p-4 text-xs font-sans text-emerald-200 leading-relaxed">
                        {xurStreamText ? (
                          <span>{xurStreamText}<span className="inline-block w-1.5 h-4 bg-emerald-400 animate-pulse ml-0.5" /></span>
                        ) : (
                          <span className="text-emerald-400/40 italic">{t.powers.speedTab.xurIdle}</span>
                        )}
                      </div>
                      <div className="mt-3 text-[11px] font-mono text-emerald-400 text-right">
                        {t.powers.speedTab.xurFirstTokenLabel} <strong className="text-emerald-300">180 ms</strong>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 2: Business RAG Brain */}
              {activeTab === "rag" && (
                <div className="bg-[#0e1017] border border-emerald-500/30 rounded-3xl p-6 md:p-10 shadow-2xl animate-fadeIn">
                  <div className="mb-8 border-b border-white/10 pb-6">
                    <h3 className="text-2xl font-inter font-normal text-paper">
                      {t.powers.ragTab.title}
                    </h3>
                    <p className="text-sm text-felt-gray mt-2 max-w-xl">
                      {t.powers.ragTab.desc}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
                    {/* Knowledge Base Doc Viewer */}
                    <div className="md:col-span-5 bg-black/60 border border-white/10 rounded-2xl p-5 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-4 pb-2 border-b border-white/10">
                          <FileText className="w-4 h-4" />
                          <span>{t.powers.ragTab.docTitle}</span>
                        </div>
                        <div className="space-y-2">
                          {t.powers.ragTab.sampleTopics.map((topic, tidx) => (
                            <button
                              key={tidx}
                              onClick={() => setSelectedTopic(tidx)}
                              className={`w-full text-left p-3 rounded-xl border text-xs transition-all duration-300 ${
                                selectedTopic === tidx
                                  ? "bg-emerald-500/20 border-emerald-400 text-emerald-300 font-medium"
                                  : "bg-white/[0.02] border-white/5 text-white/60 hover:border-white/20"
                              }`}
                            >
                              <div className="font-semibold text-paper mb-1">{topic.label}</div>
                              <div className="text-[11px] text-white/50 line-clamp-2">{topic.text}</div>
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Xur Grounded Answer Box */}
                    <div className="md:col-span-7 bg-emerald-950/20 border border-emerald-500/40 rounded-2xl p-6 flex flex-col justify-between">
                      <div>
                        <div className="text-xs font-mono text-white/40 uppercase mb-1">{t.powers.ragTab.promptLabel}</div>
                        <div className="text-base font-inter font-medium text-paper mb-6">
                          "{t.powers.ragTab.sampleTopics[selectedTopic].label}"
                        </div>

                        <div className="text-xs font-mono text-emerald-400 uppercase mb-2 flex items-center gap-1.5">
                          <Bot className="w-4 h-4" />
                          <span>{t.powers.ragTab.xurAnswerLabel}</span>
                        </div>

                        <div className="bg-black/60 border border-emerald-500/30 rounded-xl p-4 text-sm text-emerald-200 leading-relaxed font-sans">
                          {t.powers.ragTab.sampleTopics[selectedTopic].text}
                        </div>
                      </div>

                      <div className="mt-6 pt-4 border-t border-emerald-500/20 flex items-center gap-2 text-xs font-mono text-emerald-400/80">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        <span>{t.powers.ragTab.verifiedNote}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 3: 1-Click Plug & Play */}
              {activeTab === "plug" && (
                <div className="bg-[#0e1017] border border-emerald-500/30 rounded-3xl p-6 md:p-10 shadow-2xl animate-fadeIn">
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8 border-b border-white/10 pb-6">
                    <div>
                      <h3 className="text-2xl font-inter font-normal text-paper">
                        {t.powers.plugTab.title}
                      </h3>
                      <p className="text-sm text-felt-gray mt-2 max-w-xl">
                        {t.powers.plugTab.desc}
                      </p>
                    </div>
                    <button
                      onClick={() => setIsWidgetMounted(!isWidgetMounted)}
                      className="ghost-pill inline-flex items-center gap-2 bg-emerald-500 text-obsidian font-semibold border-emerald-400 hover:bg-emerald-400 transition-all duration-300 shrink-0"
                    >
                      <MousePointerClick className="w-4 h-4" />
                      <span>{t.powers.plugTab.btnToggleWidget}</span>
                    </button>
                  </div>

                  {/* Mock Website Preview Container */}
                  <div className="bg-[#14161f] border border-white/10 rounded-2xl overflow-hidden shadow-2xl relative min-h-[320px] flex flex-col justify-between">
                    {/* Mock Browser Header */}
                    <div className="bg-[#1c1e2a] px-4 py-3 flex items-center gap-3 border-b border-white/5">
                      <div className="flex items-center gap-1.5">
                        <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                        <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                        <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                      </div>
                      <div className="bg-black/50 border border-white/10 rounded-md px-3 py-1 text-xs font-mono text-white/50 flex-1 max-w-sm mx-auto text-center truncate">
                        https://mon-boutique-ecommerce.com
                      </div>
                    </div>

                    {/* Mock Website Body Content */}
                    <div className="p-8 text-center max-w-md mx-auto my-auto space-y-3">
                      <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto text-white/40">
                        🛍️
                      </div>
                      <h4 className="text-lg font-inter font-medium text-paper">{t.powers.plugTab.siteMockupTitle}</h4>
                      <p className="text-xs text-felt-gray">
                        {isWidgetMounted ? t.powers.plugTab.widgetActiveText : t.powers.plugTab.widgetInactiveText}
                      </p>
                    </div>

                    {/* Floating Mounted Widget Simulation */}
                    {isWidgetMounted && (
                      <div className="absolute bottom-5 right-5 flex items-center gap-3 animate-fadeIn">
                        <div className="bg-emerald-950 border border-emerald-500/50 text-emerald-300 text-xs px-3 py-1.5 rounded-xl shadow-lg font-mono">
                          Xur AI Ready! 👋
                        </div>
                        <div className="w-12 h-12 rounded-full bg-emerald-500 text-obsidian shadow-xl border-2 border-emerald-300 flex items-center justify-center font-bold text-lg animate-bounce">
                          <Bot className="w-6 h-6" />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Live Banner to test Chatbot */}
              <div className="mt-10 bg-gradient-to-r from-emerald-950/40 via-emerald-900/20 to-obsidian border border-emerald-500/30 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
                <div className="flex items-center gap-4 text-left">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center shrink-0">
                    <Bot className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="text-lg md:text-xl font-inter font-medium text-paper">
                      {t.powers.liveBanner.title}
                    </h4>
                    <p className="text-xs md:text-sm text-felt-gray mt-1">
                      {t.powers.liveBanner.desc}
                    </p>
                  </div>
                </div>
                <Link
                  href="/#chatbot"
                  className="ghost-pill inline-flex items-center gap-2 bg-emerald-500 text-obsidian font-semibold border-emerald-400 hover:bg-emerald-400 shrink-0 shadow-lg shadow-emerald-500/20"
                >
                  <Bot className="h-4 w-4 text-obsidian" />
                  <span>{t.powers.liveBanner.btn}</span>
                </Link>
              </div>

            </div>
          </section>

          {/* Engineering Pillars */}
          <section className="py-[46px] md:py-[92px] border-b border-white/5">
            <div className="container mx-auto max-w-[1078px] px-5 md:px-10">
              <div className="text-center max-w-2xl mx-auto mb-16">
                <h2 className="font-inter font-light text-[2.5rem] md:text-[3.5rem] leading-[0.9] tracking-tight text-paper">
                  {t.features.title}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {t.features.list.map((feat, idx) => {
                  const IconComponent = feat.icon
                  return (
                    <div
                      key={idx}
                      className="bg-white/[0.01] border border-white/5 rounded-2xl p-8 hover:border-emerald-500/30 transition-all duration-300"
                    >
                      <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-6">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-inter font-normal text-paper mb-3">{feat.title}</h3>
                      <p className="text-base text-felt-gray leading-relaxed">{feat.desc}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>

          {/* 1-Click Embed Snippet */}
          <section className="py-[46px] md:py-[92px] border-b border-white/5">
            <div className="container mx-auto max-w-[1078px] px-5 md:px-10">
              <div className="bg-gradient-to-r from-emerald-950/30 via-obsidian to-cyan-950/30 border border-emerald-500/20 rounded-3xl p-8 md:p-12 text-center max-w-3xl mx-auto">
                <h2 className="font-inter font-light text-2xl md:text-3xl text-paper mb-3">
                  {t.embed.title}
                </h2>
                <p className="text-sm text-felt-gray mb-8">
                  {t.embed.desc}
                </p>

                <div className="bg-black/60 border border-white/10 rounded-2xl p-4 md:p-5 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs text-emerald-300 mb-4">
                  <span className="truncate max-w-full text-left">{t.embed.code}</span>
                  <button
                    onClick={handleCopyCode}
                    className="ghost-pill ghost-pill-sm inline-flex items-center gap-2 shrink-0 border-emerald-500/40 text-emerald-400 hover:bg-emerald-500/20"
                  >
                    {copiedEmbed ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    <span>{copiedEmbed ? t.embed.copySuccess : t.embed.copyBtn}</span>
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-[46px] md:py-[92px]">
            <div className="container mx-auto max-w-[1078px] px-5 md:px-10 text-center">
              <Sparkles className="h-8 w-8 mx-auto text-emerald-400 mb-6 animate-pulse" />
              <h2 className="font-inter font-light text-[2.5rem] md:text-[3.5rem] leading-[0.9] tracking-tight text-paper">
                {t.cta.title}
              </h2>
              <p className="text-base md:text-lg text-felt-gray max-w-2xl mx-auto mt-6 leading-[1.6]">
                {t.cta.desc}
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <Link href="/#chatbot" className="ghost-pill inline-flex items-center gap-2 bg-emerald-500 text-obsidian font-semibold border-emerald-400 hover:bg-emerald-400 shadow-lg shadow-emerald-500/20">
                  <Bot className="h-4 w-4 text-obsidian" /> {t.cta.testBot}
                </Link>
                <a href="https://github.com/yacine20005/Xur" target="_blank" rel="noopener noreferrer" className="ghost-pill inline-flex items-center gap-2 border-emerald-500/30 hover:border-emerald-400">
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
