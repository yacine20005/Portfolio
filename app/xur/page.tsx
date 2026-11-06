"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Header } from "@/components/sections/header"
import { Footer } from "@/components/sections/footer"
import {
  Sparkles,
  Zap,
  Check,
  Copy,
  Bot,
  FileText,
  MousePointerClick,
  CheckCircle2,
  Loader2
} from "lucide-react"
import { FaGithub } from "react-icons/fa"
import { ShaderAnimation } from "@/components/ui/shader-lines"
import { ProjectPreloader } from "@/components/ui/project-preloader"
import { useLanguage } from "@/components/providers/language-context"

const content = {
  fr: {
    hero: {
      subtitle: "Assistant conversationnel RAG en temps réel et widget web autonome",
      desc: "Un chatbot léger intégrable sur n'importe quel site web en une seule ligne de code. Développé avec FastAPI, Google Gemini 2.5 Flash, du streaming Server-Sent Events (SSE) et un bundle Vanilla JS compilé sous esbuild.",
      ctaSource: "Code Source GitHub",
      ctaPowers: "Voir la démonstration",
      ctaTestBot: "Tester le chatbot en direct"
    },
    powers: {
      title: "Démonstration interactive",
      subtitle: "Testez les trois mécanismes principaux de Xur : le streaming mot à mot, l'ancrage documentaire et l'intégration par balise script.",
      tabs: [
        { id: "speed", label: "Streaming temps réel" },
        { id: "rag", label: "Ancrage documentaire (RAG)" },
        { id: "plug", label: "Intégration script" }
      ],
      speedTab: {
        title: "Streaming mot à mot vs requête bloquante",
        desc: "Au lieu d'attendre plusieurs secondes devant un indicateur de chargement, la réponse commence à s'afficher en moins de 200 millisecondes grâce au flux Server-Sent Events.",
        btnTest: "Lancer le comparatif",
        traditionalLabel: "Requête HTTP classique",
        traditionalWaitingBadge: "En attente...",
        traditionalStatusWaiting: "Attente de la génération complète...",
        traditionalIdle: "Lancez le comparatif pour observer la différence de latence.",
        traditionalLatencyLabel: "Latence perçue :",
        traditionalLatencyDone: "4 200 ms (bloc complet)",
        xurLabel: "Xur (Flux SSE)",
        xurIdle: "Lancez le comparatif pour voir l'affichage progressif.",
        xurFirstTokenLabel: "Premier token :",
        sampleText: "Les livraisons sont gratuites en France dès 50 € d'achat. Vos colis sont expédiés sous 24 h et vous disposez de 14 jours pour effectuer un retour sans frais."
      },
      ragTab: {
        title: "Réponses ancrées dans votre documentation",
        desc: "Xur lit directement votre base de connaissances Markdown pour répondre avec exactitude sans inventer d'offres ou de tarifs.",
        docTitle: "knowledge_base.md",
        sampleTopics: [
          { key: "shipping", label: "Livraisons et délais", text: "Livraison standard offerte dès 50 €. Expédition en 24 h à 48 h." },
          { key: "returns", label: "Politique de retour", text: "Retour gratuit sous 14 jours via le formulaire support@xur-ai.com." },
          { key: "pricing", label: "Tarifs et formules", text: "Formule Starter gratuite (15 requêtes/min) et formule Pro à 49 €/mois." }
        ],
        promptLabel: "Sujet interrogé",
        xurAnswerLabel: "Réponse extraite du document",
        verifiedNote: "Réponse strictement bornée au contenu du fichier source."
      },
      plugTab: {
        title: "Intégration par simple balise HTML",
        desc: "Ajoutez le script sur votre page : le widget injecte son propre conteneur isolé sans dépendre de React ni d'aucun framework tiers.",
        siteMockupTitle: "Aperçu sur un site vitrine",
        btnToggleWidget: "Afficher / Masquer le widget",
        widgetActiveText: "Le widget est injecté et prêt à répondre en bas à droite de la page.",
        widgetInactiveText: "Le widget est actuellement masqué."
      },
      liveBanner: {
        title: "Essayez Xur directement sur ce portfolio",
        desc: "Le widget est déployé en direct au bas de la page d'accueil et répond aux questions sur mon parcours et mes projets.",
        btn: "Ouvrir le chatbot"
      }
    },
    features: {
      title: "Choix d'architecture",
      list: [
        {
          title: "Bundle Vanilla JS de moins de 12 Ko",
          desc: "Le widget client est écrit en JavaScript ES6 pur sans framework lourd. Compilé et minifié avec esbuild, il se charge instantanément sans ralentir le site hôte."
        },
        {
          title: "Contexte strict anti-hallucination",
          desc: "Le prompt système contraint le modèle aux seules informations présentes dans le fichier Markdown fourni, garantissant des réponses fiables."
        },
        {
          title: "Mode démo hors-ligne intégré",
          desc: "S'appuie sur le quota gratuit de Google AI Studio et bascule automatiquement sur un moteur de réponse local si aucune clé API n'est configurée."
        }
      ]
    },
    embed: {
      title: "Balise d'intégration",
      desc: "Une seule ligne suffit pour charger le widget sur n'importe quelle page HTML, Shopify, WordPress ou Next.js :",
      code: '<script src="https://votre-serveur-xur.com/widget.js" api-key="VOTRE_CLE_API"></script>',
      copyBtn: "Copier le code",
      copySuccess: "Copié"
    },
    cta: {
      title: "Explorer le projet Xur",
      desc: "Consultez le code source du serveur FastAPI, le script de build esbuild ou testez le widget en direct sur la page d'accueil.",
      star: "Voir sur GitHub",
      testBot: "Tester le chatbot en direct"
    }
  },
  en: {
    hero: {
      subtitle: "Real-time RAG conversational assistant and standalone web widget",
      desc: "A lightweight AI chatbot that drops into any website with a single line of code. Built with FastAPI, Google Gemini 2.5 Flash, Server-Sent Events (SSE) streaming, and a Vanilla JS bundle compiled with esbuild.",
      ctaSource: "GitHub Source Code",
      ctaPowers: "Interactive demo",
      ctaTestBot: "Test live chatbot"
    },
    powers: {
      title: "Interactive demonstration",
      subtitle: "Explore Xur's three core mechanisms: token-by-token streaming, document-grounded answers, and single-tag script embedding.",
      tabs: [
        { id: "speed", label: "Real-time streaming" },
        { id: "rag", label: "Document grounding (RAG)" },
        { id: "plug", label: "Script integration" }
      ],
      speedTab: {
        title: "Token streaming vs blocking HTTP request",
        desc: "Instead of staring at a loading spinner for several seconds, tokens begin rendering in under 200 milliseconds over Server-Sent Events.",
        btnTest: "Run speed comparison",
        traditionalLabel: "Standard blocking request",
        traditionalWaitingBadge: "Waiting...",
        traditionalStatusWaiting: "Waiting for full response generation...",
        traditionalIdle: "Run the comparison to observe the perceived latency difference.",
        traditionalLatencyLabel: "Perceived latency:",
        traditionalLatencyDone: "4,200 ms (full batch)",
        xurLabel: "Xur (SSE Stream)",
        xurIdle: "Run the comparison to watch progressive token streaming.",
        xurFirstTokenLabel: "First token:",
        sampleText: "Free shipping across France on orders over €50. Orders ship within 24h and you have 14 days for free returns."
      },
      ragTab: {
        title: "Answers grounded in your documentation",
        desc: "Xur reads your Markdown knowledge base directly to retrieve exact facts without inventing policies or pricing.",
        docTitle: "knowledge_base.md",
        sampleTopics: [
          { key: "shipping", label: "Shipping & delivery", text: "Standard free delivery on orders over €50. Ships within 24h–48h." },
          { key: "returns", label: "Return policy", text: "Free 14-day return window via support@xur-ai.com." },
          { key: "pricing", label: "Plans & pricing", text: "Free Starter tier (15 req/min) and Pro tier at €49/month." }
        ],
        promptLabel: "Selected topic",
        xurAnswerLabel: "Grounded response",
        verifiedNote: "Response strictly bounded to the source document."
      },
      plugTab: {
        title: "Single HTML tag integration",
        desc: "Drop the script tag onto your page: the widget mounts its own isolated container with zero React or third-party framework dependencies.",
        siteMockupTitle: "Host website preview",
        btnToggleWidget: "Show / Hide widget",
        widgetActiveText: "The widget is mounted and ready in the bottom-right corner.",
        widgetInactiveText: "The widget is currently hidden."
      },
      liveBanner: {
        title: "Try Xur live on this portfolio",
        desc: "The assistant is deployed at the bottom of the home page and answers questions about my background and projects.",
        btn: "Open live chatbot"
      }
    },
    features: {
      title: "Architecture decisions",
      list: [
        {
          title: "Sub-12 KB Vanilla JS bundle",
          desc: "The client widget is written in pure ES6 JavaScript without heavy UI frameworks. Compiled and minified with esbuild, it loads instantly on any host page."
        },
        {
          title: "Strict anti-hallucination context",
          desc: "The system prompt restricts the model to facts present in the supplied Markdown file, preventing fabricated answers on pricing or offers."
        },
        {
          title: "Built-in offline fallback",
          desc: "Runs on Google AI Studio's free tier and automatically falls back to a local response engine when no API key is configured."
        }
      ]
    },
    embed: {
      title: "Embed snippet",
      desc: "A single script tag mounts the widget on any static HTML, Shopify, WordPress, or Next.js site:",
      code: '<script src="https://your-xur-server.com/widget.js" api-key="YOUR_API_KEY"></script>',
      copyBtn: "Copy snippet",
      copySuccess: "Copied"
    },
    cta: {
      title: "Explore Xur",
      desc: "Browse the FastAPI backend, inspect the esbuild bundler configuration, or test the live assistant on the home page.",
      star: "View on GitHub",
      testBot: "Test live chatbot"
    }
  }
}

export default function XurProjectPage() {
  const [loading, setLoading] = useState(true)
  const [contentVisible, setContentVisible] = useState(false)
  const { language } = useLanguage()
  const t = content[language]

  const [activeTab, setActiveTab] = useState<"speed" | "rag" | "plug">("speed")
  const [speedTesting, setSpeedTesting] = useState(false)
  const [tradDone, setTradDone] = useState(false)
  const [xurStreamText, setXurStreamText] = useState("")
  const streamIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const tradTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const [selectedTopic, setSelectedTopic] = useState<number>(0)
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

        <main className="relative z-10">
          {/* Hero Section */}
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
                <Link href="/#chatbot" className="ghost-pill inline-flex items-center gap-2 bg-emerald-500 text-obsidian font-semibold border-emerald-400 hover:bg-emerald-400">
                  <Bot className="h-4 w-4 text-obsidian" /> {t.hero.ctaTestBot}
                </Link>
                <a href="https://github.com/yacine20005/Xur" target="_blank" rel="noopener noreferrer" className="ghost-pill inline-flex items-center gap-2">
                  <FaGithub className="h-4 w-4" /> {t.hero.ctaSource}
                </a>
                <a href="#powers" className="ghost-pill inline-flex items-center gap-2">
                  {t.hero.ctaPowers}
                </a>
              </div>
            </div>
          </section>

          {/* Interactive Showcase Section */}
          <section id="powers" className="py-[56px] md:py-[92px] border-b border-white/5">
            <div className="container mx-auto max-w-[1078px] px-5 md:px-10">
              <div className="max-w-2xl mb-12">
                <h2 className="font-inter font-light text-[2.4rem] md:text-[3.4rem] leading-[0.95] tracking-tight text-paper">
                  {t.powers.title}
                </h2>
                <p className="text-base text-felt-gray mt-4">
                  {t.powers.subtitle}
                </p>
              </div>

              {/* Clean Tab Selector */}
              <div className="flex flex-wrap gap-3 mb-8">
                {t.powers.tabs.map((tab) => {
                  const isActive = activeTab === tab.id
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id as "speed" | "rag" | "plug")}
                      className={`px-5 py-2.5 rounded-full text-sm font-inter transition-all duration-300 border ${
                        isActive
                          ? "bg-emerald-500 text-obsidian font-semibold border-emerald-400"
                          : "bg-white/[0.02] border-white/10 text-white/70 hover:text-paper hover:border-white/25"
                      }`}
                    >
                      {tab.label}
                    </button>
                  )
                })}
              </div>

              {/* Tab 1: Speed Comparison */}
              {activeTab === "speed" && (
                <div className="bg-[#0e1017] border border-white/10 rounded-3xl p-6 md:p-10">
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
                      className="ghost-pill inline-flex items-center gap-2 bg-emerald-500 text-obsidian font-semibold border-emerald-400 hover:bg-emerald-400 disabled:opacity-50 shrink-0"
                    >
                      <Zap className="w-4 h-4 fill-obsidian" />
                      <span>{t.powers.speedTab.btnTest}</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-black/50 border border-white/10 rounded-2xl p-6">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm font-medium text-white/70">
                          {t.powers.speedTab.traditionalLabel}
                        </span>
                        {speedTesting && !tradDone && (
                          <span className="inline-flex items-center gap-1.5 text-xs text-amber-400">
                            <Loader2 className="w-3.5 h-3.5 animate-spin" />
                            <span>{t.powers.speedTab.traditionalWaitingBadge}</span>
                          </span>
                        )}
                      </div>

                      <div className="min-h-[110px] bg-[#14161f] border border-white/5 rounded-xl p-4 text-xs text-white/60 leading-relaxed flex items-center justify-center text-center">
                        {speedTesting && !tradDone ? (
                          <div className="space-y-2">
                            <Loader2 className="w-5 h-5 animate-spin text-amber-400 mx-auto" />
                            <p className="text-amber-400/80 text-xs">{t.powers.speedTab.traditionalStatusWaiting}</p>
                          </div>
                        ) : tradDone ? (
                          <span className="text-paper">{t.powers.speedTab.sampleText}</span>
                        ) : (
                          <span className="text-white/40">{t.powers.speedTab.traditionalIdle}</span>
                        )}
                      </div>
                      <div className="mt-3 text-xs text-white/40 text-right">
                        {t.powers.speedTab.traditionalLatencyLabel} {tradDone ? t.powers.speedTab.traditionalLatencyDone : "—"}
                      </div>
                    </div>

                    <div className="bg-emerald-950/20 border border-emerald-500/40 rounded-2xl p-6">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm font-medium text-emerald-400">
                          {t.powers.speedTab.xurLabel}
                        </span>
                        {speedTesting && (
                          <span className="text-xs text-emerald-400">
                            SSE
                          </span>
                        )}
                      </div>

                      <div className="min-h-[110px] bg-black/60 border border-emerald-500/20 rounded-xl p-4 text-xs text-emerald-200 leading-relaxed">
                        {xurStreamText ? (
                          <span>{xurStreamText}<span className="inline-block w-1.5 h-4 bg-emerald-400 ml-0.5" /></span>
                        ) : (
                          <span className="text-emerald-400/50">{t.powers.speedTab.xurIdle}</span>
                        )}
                      </div>
                      <div className="mt-3 text-xs text-emerald-400 text-right">
                        {t.powers.speedTab.xurFirstTokenLabel} <strong className="text-emerald-300">180 ms</strong>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 2: Business RAG Brain */}
              {activeTab === "rag" && (
                <div className="bg-[#0e1017] border border-white/10 rounded-3xl p-6 md:p-10">
                  <div className="mb-8 border-b border-white/10 pb-6">
                    <h3 className="text-2xl font-inter font-normal text-paper">
                      {t.powers.ragTab.title}
                    </h3>
                    <p className="text-sm text-felt-gray mt-2 max-w-xl">
                      {t.powers.ragTab.desc}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
                    <div className="md:col-span-5 bg-black/60 border border-white/10 rounded-2xl p-5 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 text-xs text-emerald-400 mb-4 pb-2 border-b border-white/10">
                          <FileText className="w-4 h-4" />
                          <code>{t.powers.ragTab.docTitle}</code>
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

                    <div className="md:col-span-7 bg-emerald-950/20 border border-emerald-500/40 rounded-2xl p-6 flex flex-col justify-between">
                      <div>
                        <div className="text-xs text-white/50 mb-1">{t.powers.ragTab.promptLabel}</div>
                        <div className="text-base font-inter font-medium text-paper mb-6">
                          {t.powers.ragTab.sampleTopics[selectedTopic].label}
                        </div>

                        <div className="text-xs text-emerald-400 mb-2 flex items-center gap-1.5">
                          <Bot className="w-4 h-4" />
                          <span>{t.powers.ragTab.xurAnswerLabel}</span>
                        </div>

                        <div className="bg-black/60 border border-emerald-500/30 rounded-xl p-4 text-sm text-emerald-200 leading-relaxed">
                          {t.powers.ragTab.sampleTopics[selectedTopic].text}
                        </div>
                      </div>

                      <div className="mt-6 pt-4 border-t border-emerald-500/20 flex items-center gap-2 text-xs text-emerald-400/80">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        <span>{t.powers.ragTab.verifiedNote}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 3: 1-Click Plug & Play */}
              {activeTab === "plug" && (
                <div className="bg-[#0e1017] border border-white/10 rounded-3xl p-6 md:p-10">
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
                      className="ghost-pill inline-flex items-center gap-2 bg-emerald-500 text-obsidian font-semibold border-emerald-400 hover:bg-emerald-400 shrink-0"
                    >
                      <MousePointerClick className="w-4 h-4" />
                      <span>{t.powers.plugTab.btnToggleWidget}</span>
                    </button>
                  </div>

                  <div className="bg-[#14161f] border border-white/10 rounded-2xl overflow-hidden relative min-h-[300px] flex flex-col justify-between">
                    <div className="bg-[#1c1e2a] px-4 py-3 flex items-center gap-3 border-b border-white/5">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-white/20 inline-block" />
                        <span className="w-2.5 h-2.5 rounded-full bg-white/20 inline-block" />
                        <span className="w-2.5 h-2.5 rounded-full bg-white/20 inline-block" />
                      </div>
                      <div className="bg-black/40 border border-white/10 rounded-md px-3 py-1 text-xs text-white/50 flex-1 max-w-sm mx-auto text-center truncate">
                        https://example-store.com
                      </div>
                    </div>

                    <div className="p-8 text-center max-w-md mx-auto my-auto space-y-2">
                      <h4 className="text-lg font-inter font-medium text-paper">{t.powers.plugTab.siteMockupTitle}</h4>
                      <p className="text-xs text-felt-gray">
                        {isWidgetMounted ? t.powers.plugTab.widgetActiveText : t.powers.plugTab.widgetInactiveText}
                      </p>
                    </div>

                    {isWidgetMounted && (
                      <div className="absolute bottom-5 right-5 flex items-center gap-3">
                        <div className="bg-emerald-950 border border-emerald-500/50 text-emerald-300 text-xs px-3 py-1.5 rounded-xl">
                          Xur AI
                        </div>
                        <div className="w-11 h-11 rounded-full bg-emerald-500 text-obsidian border border-emerald-300 flex items-center justify-center">
                          <Bot className="w-5 h-5" />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Live Banner */}
              <div className="mt-10 bg-white/[0.02] border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h4 className="text-lg md:text-xl font-inter font-medium text-paper">
                    {t.powers.liveBanner.title}
                  </h4>
                  <p className="text-sm text-felt-gray mt-1">
                    {t.powers.liveBanner.desc}
                  </p>
                </div>
                <Link
                  href="/#chatbot"
                  className="ghost-pill inline-flex items-center gap-2 bg-emerald-500 text-obsidian font-semibold border-emerald-400 hover:bg-emerald-400 shrink-0"
                >
                  <Bot className="h-4 w-4 text-obsidian" />
                  <span>{t.powers.liveBanner.btn}</span>
                </Link>
              </div>
            </div>
          </section>

          {/* Architecture Decisions (Clean Editorial Columns, No Icon Squares) */}
          <section className="py-[56px] md:py-[92px] border-b border-white/5">
            <div className="container mx-auto max-w-[1078px] px-5 md:px-10">
              <h2 className="font-inter font-light text-[2.4rem] md:text-[3.4rem] leading-[0.95] tracking-tight text-paper mb-14">
                {t.features.title}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {t.features.list.map((feat, idx) => (
                  <div
                    key={idx}
                    className="border-l border-emerald-500/40 pl-6 py-1"
                  >
                    <h3 className="text-xl font-inter font-normal text-paper mb-3">{feat.title}</h3>
                    <p className="text-base text-felt-gray leading-relaxed">{feat.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 1-Line Embed Snippet */}
          <section className="py-[56px] md:py-[92px] border-b border-white/5">
            <div className="container mx-auto max-w-[1078px] px-5 md:px-10">
              <div className="max-w-3xl">
                <h2 className="font-inter font-light text-2xl md:text-3xl text-paper mb-3">
                  {t.embed.title}
                </h2>
                <p className="text-base text-felt-gray mb-6">
                  {t.embed.desc}
                </p>

                <div className="bg-black/60 border border-white/10 rounded-2xl p-4 md:p-5 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs text-emerald-300">
                  <code className="truncate max-w-full text-left">{t.embed.code}</code>
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
          <section className="py-[56px] md:py-[92px]">
            <div className="container mx-auto max-w-[1078px] px-5 md:px-10 text-center">
              <h2 className="font-inter font-light text-[2.4rem] md:text-[3.4rem] leading-[0.95] tracking-tight text-paper">
                {t.cta.title}
              </h2>
              <p className="text-base md:text-lg text-felt-gray max-w-2xl mx-auto mt-6 leading-[1.6]">
                {t.cta.desc}
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <Link href="/#chatbot" className="ghost-pill inline-flex items-center gap-2 bg-emerald-500 text-obsidian font-semibold border-emerald-400 hover:bg-emerald-400">
                  <Bot className="h-4 w-4 text-obsidian" /> {t.cta.testBot}
                </Link>
                <a href="https://github.com/yacine20005/Xur" target="_blank" rel="noopener noreferrer" className="ghost-pill inline-flex items-center gap-2">
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
