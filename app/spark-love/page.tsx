"use client"

import { useState } from "react"
import { Header } from "@/components/sections/header"
import { Footer } from "@/components/sections/footer"
import { 
  Heart, 
  X, 
  Sparkle, 
  ChevronRight, 
  Film, 
  MessageSquare, 
  Check, 
  Image as ImageIcon,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  Lock,
  RefreshCw
} from "lucide-react"
import { FaGithub } from "react-icons/fa"
import { ShaderAnimation } from "@/components/ui/shader-lines"
import { ProjectPreloader } from "@/components/ui/project-preloader"
import { useLanguage } from "@/components/providers/language-context"

const SIMULATED_MOVIES = [
  { 
    title: "La La Land", 
    year: 2016, 
    genre: "Musical / Romance", 
    desc: "A jazz pianist and an aspiring actress fall in love while pursuing their dreams in Los Angeles.",
    gradient: "from-pink-500/20 via-purple-500/10 to-obsidian",
    icon: "🎹",
    isMatch: true 
  },
  { 
    title: "Interstellar", 
    year: 2014, 
    genre: "Sci-Fi / Drama", 
    desc: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    gradient: "from-blue-600/20 via-indigo-950/10 to-obsidian",
    icon: "🚀",
    isMatch: false 
  },
  { 
    title: "Amélie", 
    year: 2001, 
    genre: "Comedy / Romance", 
    desc: "Amélie is an innocent and naive girl in Paris with her own sense of justice. She decides to help those around her.",
    gradient: "from-emerald-600/20 via-green-950/10 to-obsidian",
    icon: "☕",
    isMatch: true 
  }
]

const SIMULATED_QUIZ = [
  {
    question: "What is your absolute favorite way to spend a date night together?",
    options: [
      { text: "Trying a brand new restaurant in the city" },
      { text: "Cooking a cozy meal at home together" },
      { text: "Going to a concert or live theater show" },
      { text: "Spontaneous drive with a playlist" }
    ],
    partnerAnswerIndex: 1, // Cooking at home
    sparkMatch: "You both selected Cooking a cozy meal! Time to look up a recipe for this weekend 🍳.",
    sparkDiff: "You selected this, but Yacine chose cooking at home! Perfect compromise: get takeout but plate it nicely."
  },
  {
    question: "Which quality in our relationship makes you feel most appreciated?",
    options: [
      { text: "Small acts of service like making morning coffee" },
      { text: "Deep uninterrupted conversations late at night" },
      { text: "Receiving thoughtful unexpected little gifts" },
      { text: "Words of affirmation and encouragement" }
    ],
    partnerAnswerIndex: 0, // Acts of service
    sparkMatch: "You match! Small actions really do speak louder than words in your relationship.",
    sparkDiff: "Different views! Let's talk about how we can express love in both of these ways tonight."
  }
]

const content = {
  fr: {
    hero: {
      subtitle: "Bien plus qu'une application. Votre prochaine conversation.",
      desc: "Spark Love est un compagnon de couple interactif et chaleureux. Organisez vos agendas, partagez vos gratitudes, alignez vos choix de films et planifiez vos rendez-vous dans un espace privé et sécurisé.",
      ctaSource: "Code Source",
      ctaSim: "Lancer le simulateur"
    },
    specs: {
      conn: { label: "MODÈLE DE SÉCURITÉ", val: "Légère & sans pression" },
      sync: { label: "SYNCHRONISATION", val: "Mise à jour instantanée" },
      priv: { label: "CONFIDENTIALITÉ", val: "Couple uniquement" },
      offline: { label: "HORS-LIGNE", val: "Sauvegarde locale & sync" }
    },
    simulator: {
      title: "Simulateur de Maquette Interactive",
      desc: "Essayez une maquette de l'expérience mobile directement dans votre navigateur. Changez d'onglet dans l'iPhone pour tester comment Spark Love connecte les couples.",
      partnerLinked: "Partenaire Lié",
      tabSwipe: "Movie Matcher",
      tabQuiz: "Quiz Comparer",
      swipeScreen: {
        matchedTitle: "C'est un match ! 🎉",
        matchedDesc: "Vous et Yacine avez tous les deux aimé",
        continueBtn: "Continuer à swiper",
        partnerLiked: "Votre partenaire a aimé"
      },
      quizScreen: {
        questionNum: "Question {num} sur 3",
        sparkTitle: "Pique de conversation",
        nextBtn: "Question suivante",
        youBadge: "Vous",
        partnerBadge: "Yacine"
      },
      explainers: {
        swipe: {
          title: "Moteur de Match de Films",
          desc: "Le Movie Matcher résout le débat fastidieux du « qu'est-ce qu'on regarde ce soir ? ». En swipant séparément, les couples créent une liste commune sans pression.",
          b1: "Entrées à double insu — Les likes restent secrets jusqu'au match pour éviter les votes d'influence.",
          b2: "Sauvegarde locale — Garde les films aimés en mémoire locale pour planifier vos soirées hors-ligne."
        },
        quiz: {
          title: "Quiz à Double Insu",
          desc: "Les quiz sont structurés pour déclencher des conversations saines. Plutôt que de déclarer des réponses correctes ou incorrectes, Spark se concentre sur les alignements et les différences.",
          b1: "Mécanisme de double insu — Bloque les réponses sur le serveur jusqu'à ce que les deux partenaires aient répondu.",
          b2: "Graines de dialogue — Transforme les différences de réponses en sujets de discussion constructifs."
        }
      }
    },
    features: {
      title: "Fonctionnalités en Action",
      f1: {
        title: "Révélez de nouvelles facettes",
        desc: "Dépassez les discussions banales. Découvrez vos préférences cachées, objectifs futurs et rythmes quotidiens grâce à des packs de questions ludiques.",
        packsTitle: "Sélections de Packs de Quiz",
        p1: "🧩 Valeurs Fondamentales",
        d1: "Objectifs de vie, vision familiale et finances.",
        p2: "❤️ Langages de l'Amour",
        d2: "Comment vous donnez et recevez de l'affection.",
        p3: "🎬 Ambiance Pop-Culture",
        d3: "Classements amusants de musiques, livres et voyages."
      },
      f2: {
        title: "Votre journal intime à deux",
        desc: "Un carnet de bord numérique exclusif pour votre couple. Écrivez des mots doux, partagez vos gratitudes et sauvegardez vos photos sur une frise chronologique sécurisée, loin des réseaux sociaux traditionnels.",
        timelineTitle: "Journal de Souvenirs",
        m1Title: "Soirée resto 🍕",
        m1Desc: "On a enfin testé la pizzeria du coin. La pizza à la truffe était incroyable !",
        m2Title: "Gratitude du matin ☕",
        m2Desc: "Merci pour le café ce matin quand je me suis réveillé en retard !",
        photoAttached: "Photo jointe"
      },
      f3: {
        title: "En finir avec le « qu'est-ce qu'on fait ? »",
        desc: "Planifiez vos rendez-vous avec une interface de swipe dédiée. Aimez des idées d'activités créatives, filtrez par budget ou niveau d'énergie, et obtenez des idées de sorties validées par vous deux.",
        categoriesTitle: "Catégories de Rendez-vous",
        c1: "🏡 Soirée Cocooning",
        c1Desc: "Faible énergie / Petit budget",
        c2: "🌳 Aventure en Plein Air",
        c2Desc: "Grande énergie / Moyen budget",
        c3: "🎨 Créatif & Manuel",
        c3Desc: "Énergie moyenne / Activité manuelle",
        c4: "🍕 Découverte Culinaire",
        c4Desc: "Énergie moyenne / Repas gourmand"
      }
    },
    hood: {
      title: "Sous le capot : fiable et sécurisé",
      desc: "Une expérience fluide repose sur une ingénierie solide. Spark Love équilibre un frontend réactif avec une couche de synchronisation hors-ligne et une sécurité de données cloisonnée.",
      b1Title: "Synchronisation Temps Réel",
      b1Desc: "Aucun rafraîchissement manuel requis. Vos canaux partagés se mettent à jour dès que votre partenaire écrit une note ou valide un film.",
      b2Title: "Fonctionnement Hors-Ligne",
      b2Desc: "Pas de réseau ? Aucun problème. L'application écrit d'abord dans une base SQLite locale, puis synchronise automatiquement dès le retour du réseau.",
      b3Title: "Données Cloisonnées",
      b3Desc: "Des règles de base de données strictes garantissent que vous et votre partenaire êtes les seuls à détenir les clés d'accès de votre couple.",
      diagramTitle: "MODÈLE DE CYCLE DE SYNC",
      diagramCaption: "Flux hors-ligne d'abord",
      clientLabel: "Votre appareil (Client)",
      clientDesc: "Mises à jour instantanées de l'interface",
      stateBadge: "ÉTAT",
      bridge1: "│ sauvegarde locale hors-ligne",
      bridge2: "▲ synchro en ligne via WS",
      dbLabel1: "Cache SQLite",
      dbDesc1: "Sauvegarde immédiate",
      dbLabel2: "Base de données Cloud",
      dbDesc2: "Courtier de sync temps réel",
      bridge3: "▼ Pousse automatiquement vers",
      partnerLabel: "Appareil du Partenaire",
      partnerDesc: "Met à jour l'écran ou déclenche un match",
      syncBadge: "SYNC"
    },
    privacy: {
      title: "La confidentialité n'est pas une option. C'est une promesse.",
      desc: "Spark Love est conçu pour une sécurité totale de votre couple. Chaque conversation, réponse de quiz ou note de journal est strictement privée et inaccessible à quiconque d'autre."
    },
    monetization: {
      title: "Détails du Modèle Freemium",
      desc: "Spark Love est gratuit pour les fonctionnalités de base. Les packs thématiques avancés et le stockage photo cloud étendu soutiennent notre infrastructure.",
      plans: [
        { name: "Version Gratuite", price: "0 €", desc: "Swipe de films de base, quiz hebdomadaires standards et journal partagé jusqu'à 50 entrées." },
        { name: "Packs Thématiques", price: "1,99 € / pack", desc: "Débloquez des packs de questions ciblés sur le futur, le budget ou l'intimité." },
        { name: "Spark Premium", price: "3,99 € / mois", desc: "Journal de souvenirs et stockage photo illimités, planification de dates avancée et export PDF complet." }
      ]
    }
  },
  en: {
    hero: {
      subtitle: "More Than an App. Your Next Conversation.",
      desc: "Spark Love is a cozy, interactive relationship companion app for couples. Bridge schedules, express gratitude, align your movie choices, and plan dates in a secure and private shared space.",
      ctaSource: "View Source",
      ctaSim: "Launch Live Simulator"
    },
    specs: {
      conn: { label: "CONNECTION MODEL", val: "Playful & Low‑Pressure" },
      sync: { label: "REAL‑TIME INTERACTIVE", val: "Instant Match Sync" },
      priv: { label: "PRIVACY ASSURANCE", val: "Strictly Couple-Isolated" },
      offline: { label: "OFFLINE COMPATIBILITY", val: "Works Anywhere, Syncs Later" }
    },
    simulator: {
      title: "Interactive Mockup Simulator",
      desc: "Test-drive a simulated mockup of the mobile experience directly in your browser. Switch tabs inside the mock iPhone shell below to see how Spark Love features connect you and your partner.",
      partnerLinked: "Partner Linked",
      tabSwipe: "Movie Matcher",
      tabQuiz: "Quiz Comparer",
      swipeScreen: {
        matchedTitle: "It's a Match! 🎉",
        matchedDesc: "You and Yacine both swiped right on",
        continueBtn: "Continue Swiping",
        partnerLiked: "Your partner liked this"
      },
      quizScreen: {
        questionNum: "Question {num} of 3",
        sparkTitle: "Conversation Spark",
        nextBtn: "Next Question",
        youBadge: "You",
        partnerBadge: "Yacine"
      },
      explainers: {
        swipe: {
          title: "Movie Matching Engine",
          desc: "The Movie Matcher solves the tedious \"what should we watch tonight?\" debate. By swiping separately, couples build a shared catalog without the pressure of negotiation.",
          b1: "Double-blind inputs — Likes are kept fully secret until a match occurs, preventing copy-cat votes.",
          b2: "Local memory storage — Keeps matched movie logs stored locally for quick offline planning."
        },
        quiz: {
          title: "Double‑Blind Quizzes",
          desc: "Quizzes are structured to trigger healthy conversations. Rather than declaring answers as correct or incorrect, Spark focuses on discovering alignments and discussing differences.",
          b1: "Double-blind mechanism — Safely gates inputs on server before mutual completion status is reached.",
          b2: "Dialog seeds — Converts raw answer disparities into engaging conversation starters."
        }
      }
    },
    features: {
      title: "Spark Features in Action",
      f1: {
        title: "Uncover new layers of your connection",
        desc: "Move past basic small talk. Discover each other's hidden preferences, future goals, and daily rhythms through playful, low-pressure question packs.",
        packsTitle: "Quiz Packs Selections",
        p1: "🧩 Core Values",
        d1: "Life goals, family visions, and financial alignments.",
        p2: "❤️ Love Languages",
        d2: "How you give and receive appreciation.",
        p3: "🎬 Pop-Culture Vibe",
        d3: "Fun rankings of music, books, and vacation styles."
      },
      f2: {
        title: "Your couple's timeline of memories",
        desc: "A digital scrap-book built exclusively for the two of you. Write sweet daily notes, share logs of gratitude, and upload photos to a secure, private timeline.",
        timelineTitle: "Memory Timeline",
        m1Title: "Sunday Date Night 🍕",
        m1Desc: "Finally tried the pizza place down the street. The truffle pizza was incredible!",
        m2Title: "Morning gratitude ☕",
        m2Desc: "Thanks for making coffee this morning when I overslept!",
        photoAttached: "Photo attached"
      },
      f3: {
        title: "End the \"what should we do?\" cycle",
        desc: "Plan date nights with a dedicated swipe interface. Swipe right on curated activities and creative ideas, filter by budget‑friendliness or energy levels, and get matched options that you'll both genuinely enjoy.",
        categoriesTitle: "Date Match Categories",
        c1: "🏡 Cozy Night In",
        c1Desc: "Low energy / Low budget",
        c2: "🌳 Outdoor Adventure",
        c2Desc: "High energy / Medium budget",
        c3: "🎨 Creative & Crafty",
        c3Desc: "Medium energy / Fun hands‑on",
        c4: "🍕 Foodie Discovery",
        c4Desc: "Medium energy / Tasty eats"
      }
    },
    hood: {
      title: "Under the hood: reliable & secure",
      desc: "A great user experience relies on reliable engineering. Spark Love balances a fluid front‑end with an offline-first sync layer and strict, couple-isolated security.",
      b1Title: "Realtime Synchronization",
      b1Desc: "No manual refreshing required. Your shared workspace channels update instantly when your partner edits a journal post or matches a movie.",
      b2Title: "Offline-First Support",
      b2Desc: "No network? No problem. The app writes actions to a secure local SQLite database first, then automatically synchronizes when connection is restored.",
      b3Title: "Isolated Data Security",
      b3Desc: "Strict database rules ensure only you and your partner have keys to access your couple ID data, providing complete confidentiality.",
      diagramTitle: "SYNC CYCLE MODEL",
      diagramCaption: "Offline-First Flow",
      clientLabel: "Your Device (Client)",
      clientDesc: "Instant responsive UI updates",
      stateBadge: "STATE",
      bridge1: "│ saves locally offline",
      bridge2: "▲ syncs online via WS",
      dbLabel1: "SQLite Cache",
      dbDesc1: "Saves state immediately",
      dbLabel2: "Cloud Database",
      dbDesc2: "Real-time sync broker",
      bridge3: "▼ Automatically pushes to",
      partnerLabel: "Partner's Device",
      partnerDesc: "Updates timeline or triggers match cards",
      syncBadge: "SYNC"
    },
    privacy: {
      title: "Privacy Isn't an Option. It's a Promise.",
      desc: "Spark Love is designed for complete relationship security. Every conversation, answer, and shared journal entry is strictly couple‑isolated. We do not sell or track your data—it remains private, secure, and accessible only to you and your partner."
    },
    monetization: {
      title: "Freemium Model Details",
      desc: "Spark Love is free to download and use for basic features. Additional options help cover our infrastructure costs.",
      plans: [
        { name: "Free Tier", price: "$0", desc: "Basic movie matcher, weekly check-in questions, and shared journal up to 50 entries." },
        { name: "Theme Question Packs", price: "$1.99 / pack", desc: "Unlock focused question sets covering finance, family expansion, or intimacy." },
        { name: "Spark Premium Subscription", price: "$3.99 / month", desc: "Unlimited shared timeline & photo backup, advanced custom date planners, and full PDF export." }
      ]
    }
  }
}

export default function SparkLovePage() {
  const [loading, setLoading] = useState(true)
  const [contentVisible, setContentVisible] = useState(false)
  const [activeTab, setActiveTab] = useState<"swipe" | "quiz">("swipe")
  const { language } = useLanguage()
  const t = content[language]

  // Movie Simulator State
  const [movieIndex, setMovieIndex] = useState(0)
  const [movieStatus, setMovieStatus] = useState<"idle" | "evaluating" | "matched" | "skipped">("idle")
  const currentMovie = SIMULATED_MOVIES[movieIndex % SIMULATED_MOVIES.length]

  // Quiz Simulator State
  const [quizIndex, setQuizIndex] = useState(0)
  const [quizSelected, setQuizSelected] = useState<number | null>(null)
  const [quizStatus, setQuizStatus] = useState<"idle" | "revealed">("idle")
  const currentQuiz = SIMULATED_QUIZ[quizIndex % SIMULATED_QUIZ.length]

  const handleMovieAction = (action: "like" | "dislike") => {
    if (movieStatus !== "idle") return

    if (action === "dislike") {
      setMovieStatus("skipped")
      setTimeout(() => {
        setMovieIndex((prev) => prev + 1)
        setMovieStatus("idle")
      }, 800)
    } else {
      setMovieStatus("evaluating")
      setTimeout(() => {
        if (currentMovie.isMatch) {
          setMovieStatus("matched")
        } else {
          setMovieStatus("skipped")
          setTimeout(() => {
            setMovieIndex((prev) => prev + 1)
            setMovieStatus("idle")
          }, 800)
        }
      }, 1000)
    }
  }

  const nextMovieMatch = () => {
    setMovieIndex((prev) => prev + 1)
    setMovieStatus("idle")
  }

  const handleQuizSelect = (index: number) => {
    if (quizStatus !== "idle") return
    setQuizSelected(index)
    setQuizStatus("revealed")
  }

  const nextQuizQuestion = () => {
    setQuizIndex((prev) => prev + 1)
    setQuizSelected(null)
    setQuizStatus("idle")
  }

  return (
    <div className="min-h-screen bg-obsidian text-paper overflow-hidden theme-spark-love">
      {loading && (
        <ProjectPreloader
          icon={<Heart />}
          accentColor="rgb(244, 114, 182)"
          title="Spark Love"
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
              <ShaderAnimation color={[1.0, 0.45, 0.65]} />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-transparent" />
            <div className="relative z-10 text-center px-5 max-w-4xl mx-auto">
              <h1 className="font-inter font-normal text-[3.5rem] sm:text-[5.5rem] md:text-[7.5rem] leading-[0.85] tracking-tight text-paper mb-6">
                Spark Love
              </h1>
              <h2 className="text-lg md:text-2xl text-pink-300/80 font-inter font-normal max-w-2xl mx-auto">
                {t.hero.subtitle}
              </h2>
              <p className="text-base md:text-lg text-felt-gray max-w-xl mx-auto mt-6 leading-[1.6]">
                {t.hero.desc}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
                <a href="https://github.com/yacine20005/Spark-Love" target="_blank" rel="noopener noreferrer" className="ghost-pill">
                  <FaGithub className="h-4 w-4" /> {t.hero.ctaSource}
                </a>
                <a href="#simulator" className="ghost-pill">{t.hero.ctaSim}</a>
              </div>
            </div>
          </section>

          {/* Key Platform Value Props Dashboard */}
          <section className="py-8 bg-white/[0.01] border-b border-white/5">
            <div className="container mx-auto max-w-[1078px] px-5 md:px-10">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
                {[
                  { label: t.specs.conn.label, value: t.specs.conn.val, icon: Heart },
                  { label: t.specs.sync.label, value: t.specs.sync.val, icon: Sparkles },
                  { label: t.specs.priv.label, value: t.specs.priv.val, icon: Lock },
                  { label: t.specs.offline.label, value: t.specs.offline.val, icon: RefreshCw },
                ].map((spec, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <spec.icon className="h-5 w-5 text-pink-400/60 mt-0.5 shrink-0" />
                    <div>
                      <div className="text-[10px] tracking-[0.15em] text-white/40 uppercase font-mono">{spec.label}</div>
                      <div className="text-sm font-inter text-paper font-normal mt-0.5">{spec.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Interactive Simulator Section */}
          <section id="simulator" className="py-[46px] md:py-[92px] border-b border-white/5 relative">
            <div className="container mx-auto max-w-[1078px] px-5 md:px-10">
              <div className="text-center max-w-2xl mx-auto mb-14">
                <h2 className="font-inter font-light text-[2.5rem] md:text-[3.5rem] leading-[0.9] tracking-tight text-paper">
                  {t.simulator.title}
                </h2>
                <p className="text-base md:text-lg text-felt-gray mt-4 leading-[1.6]">
                  {t.simulator.desc}
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                
                {/* Simulated iPhone Shell - Left Column (5/12) */}
                <div className="lg:col-span-5 flex justify-center">
                  <div className="relative w-full max-w-[320px] aspect-[9/18.5] bg-[#0E0E10] border-[6px] border-[#2E2E33] rounded-[42px] overflow-hidden shadow-[0_0_50px_rgba(244,114,182,0.15)] flex flex-col z-10">
                    
                    {/* Speaker & Camera Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[110px] h-[18px] bg-[#2E2E33] rounded-b-[12px] z-30 flex items-center justify-center">
                      <div className="w-12 h-1 bg-black/60 rounded-full" />
                    </div>

                    {/* App Header */}
                    <div className="bg-[#141417] pt-7 pb-3 px-4 border-b border-white/5 flex flex-col gap-2">
                      <div className="flex justify-between items-center text-[10px] text-white/40 font-mono">
                        <span>9:41 AM</span>
                        <div className="flex items-center gap-1">
                          <span>LTE</span>
                          <span className="w-4 h-2 bg-pink-400/50 rounded-sm inline-block" />
                        </div>
                      </div>
                      <div className="flex justify-between items-center mt-1">
                        <div className="flex items-center gap-1.5">
                          <Heart className="h-4 w-4 text-pink-400 fill-pink-400" />
                          <span className="font-inter font-medium text-xs tracking-tight text-paper">Spark</span>
                        </div>
                        <span className="text-[9px] bg-pink-500/20 text-pink-300 px-2 py-0.5 rounded-full font-mono font-medium uppercase tracking-[0.05em]">{t.simulator.partnerLinked}</span>
                      </div>
                      
                      {/* Tab Switcher inside App */}
                      <div className="grid grid-cols-2 bg-[#1C1C21] p-0.5 rounded-lg text-[10px] font-medium font-inter mt-1.5 text-center">
                        <button 
                          onClick={() => { setActiveTab("swipe"); setMovieStatus("idle"); }}
                          className={`py-1.5 rounded-md transition-all ${activeTab === "swipe" ? "bg-pink-500 text-white shadow-sm" : "text-white/40 hover:text-white"}`}
                        >
                          {t.simulator.tabSwipe}
                        </button>
                        <button 
                          onClick={() => { setActiveTab("quiz"); setQuizStatus("idle"); setQuizSelected(null); }}
                          className={`py-1.5 rounded-md transition-all ${activeTab === "quiz" ? "bg-pink-500 text-white shadow-sm" : "text-white/40 hover:text-white"}`}
                        >
                          {t.simulator.tabQuiz}
                        </button>
                      </div>
                    </div>

                    {/* App Content Screen Area */}
                    <div className="flex-1 bg-[#141417] p-3 flex flex-col relative overflow-hidden">
                      
                      {activeTab === "swipe" ? (
                        /* Movie Swipe Screen */
                        <div className="flex-1 flex flex-col h-full">
                          
                          {/* Matching Success Modal Overlay */}
                          {movieStatus === "matched" && (
                            <div className="absolute inset-0 bg-black/90 z-20 flex flex-col items-center justify-center p-4 text-center animate-fade-in">
                              <div className="w-14 h-14 rounded-full bg-pink-500/20 border border-pink-400 flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(244,114,182,0.4)] animate-bounce">
                                <Sparkles className="h-7 w-7 text-pink-400 fill-pink-400" />
                              </div>
                              <h3 className="font-inter font-normal text-lg text-pink-300">{t.simulator.swipeScreen.matchedTitle}</h3>
                              <p className="text-[10px] text-felt-gray mt-2 max-w-[200px] leading-relaxed">
                                {t.simulator.swipeScreen.matchedDesc} <strong>{currentMovie.title}</strong>!
                              </p>
                              <button 
                                onClick={nextMovieMatch}
                                className="mt-4 px-3 py-1.5 bg-pink-500 hover:bg-pink-600 text-white text-[10px] rounded-md font-medium tracking-tight shadow-md transition-colors"
                              >
                                {t.simulator.swipeScreen.continueBtn}
                              </button>
                            </div>
                          )}

                          {/* Movie Card */}
                          <div className={`flex-1 rounded-2xl bg-gradient-to-b ${currentMovie.gradient} p-4 border border-white/5 flex flex-col justify-between relative overflow-hidden transition-all duration-300 ${movieStatus === "skipped" ? "translate-x-[-150%] opacity-0 scale-95" : movieStatus === "evaluating" ? "scale-98 opacity-90" : "scale-100 opacity-100"}`}>
                            <div className="absolute top-2 right-2 text-3xl opacity-20">{currentMovie.icon}</div>
                            <div>
                              <span className="text-[8px] bg-white/10 text-white/70 px-2 py-0.5 rounded-md font-mono">{currentMovie.genre}</span>
                              <h4 className="text-sm font-inter text-paper font-semibold mt-2">{currentMovie.title} ({currentMovie.year})</h4>
                            </div>
                            
                            <p className="text-[10px] text-white/80 leading-[1.5] font-light mt-2 flex-1">
                              {currentMovie.desc}
                            </p>
                          </div>

                          {/* Actions Panel */}
                          <div className="flex justify-center gap-4 py-2 mt-2">
                            <button 
                              onClick={() => handleMovieAction("dislike")}
                              disabled={movieStatus !== "idle"}
                              className="w-10 h-10 rounded-full bg-[#1C1C21] hover:bg-red-500/20 border border-white/5 flex items-center justify-center transition-colors disabled:opacity-50"
                            >
                              <X className="h-4 w-4 text-red-400" />
                            </button>
                            <button 
                              onClick={() => handleMovieAction("like")}
                              disabled={movieStatus !== "idle"}
                              className="w-10 h-10 rounded-full bg-[#1C1C21] hover:bg-pink-500/20 border border-white/5 flex items-center justify-center transition-colors disabled:opacity-50 relative group"
                            >
                              <Heart className="h-4 w-4 text-pink-400 fill-pink-400/20 group-hover:fill-pink-400/80" />
                              {movieStatus === "evaluating" && (
                                <span className="absolute inset-0 rounded-full border border-pink-400 border-t-transparent animate-spin" />
                              )}
                            </button>
                          </div>
                        </div>
                      ) : (
                        /* Quiz Comparer Screen */
                        <div className="flex-1 flex flex-col h-full justify-between">
                          
                          <div className="flex-1">
                            <div className="text-[8px] text-white/40 font-mono tracking-widest uppercase mb-1">
                              {t.simulator.quizScreen.questionNum.replace("{num}", (quizIndex % SIMULATED_QUIZ.length + 1).toString())}
                            </div>
                            <h4 className="text-[11px] font-inter text-paper leading-[1.4] font-medium mb-3">
                              {currentQuiz.question}
                            </h4>
                            
                            <div className="space-y-2">
                              {currentQuiz.options.map((opt, oIdx) => {
                                const isSelected = quizSelected === oIdx;
                                const showResult = quizStatus === "revealed";
                                const isPartnerAnswer = oIdx === currentQuiz.partnerAnswerIndex;
                                
                                return (
                                  <button
                                    key={oIdx}
                                    onClick={() => handleQuizSelect(oIdx)}
                                    disabled={showResult}
                                    className={`w-full text-left p-2.5 rounded-xl border text-[9px] leading-snug transition-all flex justify-between items-center ${
                                      isSelected
                                        ? "bg-pink-500/20 border-pink-400 text-pink-200"
                                        : showResult && isPartnerAnswer
                                        ? "bg-white/[0.03] border-white/20 text-white/80"
                                        : "bg-[#1C1C21] hover:bg-[#25252B] border-white/5 text-white/60"
                                    }`}
                                  >
                                    <span className="max-w-[85%]">{opt.text}</span>
                                    
                                    {showResult && (
                                      <div className="flex flex-col gap-0.5 items-end text-[7px] shrink-0 font-mono font-medium">
                                        {isSelected && <span className="text-pink-300">{t.simulator.quizScreen.youBadge}</span>}
                                        {isPartnerAnswer && <span className="text-white/60">{t.simulator.quizScreen.partnerBadge}</span>}
                                      </div>
                                    )}
                                  </button>
                                );
                              })}
                            </div>
                          </div>

                          {/* Spark Insight Card (Only visible when answered) */}
                          {quizStatus === "revealed" && (
                            <div className="mt-3 bg-pink-500/[0.05] border border-pink-400/20 rounded-xl p-2.5 animate-fade-in flex gap-2">
                              <Sparkle className="h-3.5 w-3.5 text-pink-400 shrink-0 mt-0.5 fill-pink-400/20" />
                              <div className="flex-1">
                                <span className="text-[7px] font-mono tracking-widest text-pink-300 uppercase block font-semibold mb-0.5">{t.simulator.quizScreen.sparkTitle}</span>
                                <p className="text-[8px] text-felt-gray leading-normal">
                                  {quizSelected === currentQuiz.partnerAnswerIndex ? currentQuiz.sparkMatch : currentQuiz.sparkDiff}
                                </p>
                                <button 
                                  onClick={nextQuizQuestion}
                                  className="mt-2 text-[8px] text-pink-300 hover:text-pink-200 inline-flex items-center gap-1 font-medium transition-colors"
                                >
                                  {t.simulator.quizScreen.nextBtn} <ChevronRight className="h-2 w-2" />
                                </button>
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Technical Explainers - Right Column (7/12) */}
                <div className="lg:col-span-7 space-y-6">
                  
                  {activeTab === "swipe" ? (
                    <div className="space-y-5 animate-fade-in">
                      <h3 className="font-inter font-light text-[2rem] leading-tight text-paper">
                        {t.simulator.explainers.swipe.title}
                      </h3>
                      <p className="text-base text-felt-gray leading-[1.6]">
                        {t.simulator.explainers.swipe.desc}
                      </p>
                      
                      <ul className="space-y-3 mt-4">
                        {[
                          t.simulator.explainers.swipe.b1,
                          t.simulator.explainers.swipe.b2
                        ].map((bullet, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-sm text-felt-gray leading-[1.5]">
                            <CheckCircle2 className="h-4.5 w-4.5 text-pink-400 shrink-0 mt-0.5" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <div className="space-y-5 animate-fade-in">
                      <h3 className="font-inter font-light text-[2rem] leading-tight text-paper">
                        {t.simulator.explainers.quiz.title}
                      </h3>
                      <p className="text-base text-felt-gray leading-[1.6]">
                        {t.simulator.explainers.quiz.desc}
                      </p>

                      <ul className="space-y-3 mt-4">
                        {[
                          t.simulator.explainers.quiz.b1,
                          t.simulator.explainers.quiz.b2
                        ].map((bullet, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-sm text-felt-gray leading-[1.5]">
                            <CheckCircle2 className="h-4.5 w-4.5 text-pink-400 shrink-0 mt-0.5" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                </div>
              </div>
            </div>
          </section>

          {/* Core Features Deep-Dive (Alternating Sections) */}
          <section className="py-[46px] md:py-[92px] border-b border-white/5">
            <div className="container mx-auto max-w-[1078px] px-5 md:px-10">
              
              <div className="text-center max-w-2xl mx-auto mb-16">
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
                  </div>
                  <div className="lg:col-span-5 bg-white/[0.01] border border-white/5 rounded-2xl p-6 lg:p-8">
                    <span className="text-[10px] font-mono text-white/40 block tracking-widest uppercase mb-4">{t.features.f1.packsTitle}</span>
                    <div className="space-y-3 font-mono text-xs">
                      {[
                        { title: t.features.f1.p1, desc: t.features.f1.d1 },
                        { title: t.features.f1.p2, desc: t.features.f1.d2 },
                        { title: t.features.f1.p3, desc: t.features.f1.d3 },
                      ].map((item, idx) => (
                        <div key={idx} className="bg-[#141417] p-3 rounded-lg border border-white/5 flex flex-col gap-1">
                          <span className="text-pink-300 font-semibold">{item.title}</span>
                          <span className="text-[10px] text-white/40">{item.desc}</span>
                        </div>
                      ))}
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
                  </div>
                  <div className="lg:col-span-5 lg:order-1 bg-white/[0.01] border border-white/5 rounded-2xl p-6 lg:p-8">
                    <span className="text-[10px] font-mono text-white/40 block tracking-widest uppercase mb-4">{t.features.f2.timelineTitle}</span>
                    <div className="space-y-3 font-mono text-xs">
                      {[
                        { date: language === "fr" ? "Hier, 20h15" : "Yesterday, 8:15 PM", title: t.features.f2.m1Title, desc: t.features.f2.m1Desc },
                        { date: language === "fr" ? "Il y a 3 jours, 9h30" : "3 Days Ago, 9:30 AM", title: t.features.f2.m2Title, desc: t.features.f2.m2Desc },
                      ].map((item, idx) => (
                        <div key={idx} className="bg-[#141417] p-3 rounded-lg border border-white/5">
                          <div className="flex justify-between items-center text-[9px] text-white/40">
                            <span>{item.date}</span>
                            <span className="flex items-center gap-1"><ImageIcon className="h-3 w-3 text-pink-400" /> {t.features.f2.photoAttached}</span>
                          </div>
                          <div className="text-pink-300 font-semibold mt-1.5">{item.title}</div>
                          <p className="text-[10px] text-white/60 mt-1 leading-relaxed">{item.desc}</p>
                        </div>
                      ))}
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
                  </div>
                  <div className="lg:col-span-5 bg-white/[0.01] border border-white/5 rounded-2xl p-6 lg:p-8">
                    <span className="text-[10px] font-mono text-white/40 block tracking-widest uppercase mb-4">{t.features.f3.categoriesTitle}</span>
                    <div className="grid grid-cols-2 gap-3 text-center text-xs font-mono text-white/60">
                      <div className="p-3 bg-[#141417] border border-white/5 rounded-xl flex flex-col items-center gap-1">
                        <span>{t.features.f3.c1}</span>
                        <span className="text-[8px] text-white/30">{t.features.f3.c1Desc}</span>
                      </div>
                      <div className="p-3 bg-[#141417] border border-white/5 rounded-xl flex flex-col items-center gap-1">
                        <span>{t.features.f3.c2}</span>
                        <span className="text-[8px] text-white/30">{t.features.f3.c2Desc}</span>
                      </div>
                      <div className="p-3 bg-[#141417] border border-white/5 rounded-xl flex flex-col items-center gap-1">
                        <span>{t.features.f3.c3}</span>
                        <span className="text-[8px] text-white/30">{t.features.f3.c3Desc}</span>
                      </div>
                      <div className="p-3 bg-[#141417] border border-white/5 rounded-xl flex flex-col items-center gap-1">
                        <span>{t.features.f3.c4}</span>
                        <span className="text-[8px] text-white/30">{t.features.f3.c4Desc}</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </section>

          {/* Under the Hood - Reliable Engineering */}
          <section className="py-[46px] md:py-[92px] border-b border-white/5 bg-white/[0.005]">
            <div className="container mx-auto max-w-[1078px] px-5 md:px-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                
                {/* Tech Stack details - Left (5/12) */}
                <div className="lg:col-span-5 space-y-6">
                  <h2 className="font-inter font-light text-[2.5rem] md:text-[3rem] leading-[0.95] tracking-tight text-paper">
                    {t.hood.title}
                  </h2>
                  <p className="text-base text-felt-gray leading-[1.6]">
                    {t.hood.desc}
                  </p>
                  
                  <div className="space-y-4">
                    {[
                      { title: t.hood.b1Title, desc: t.hood.b1Desc },
                      { title: t.hood.b2Title, desc: t.hood.b2Desc },
                      { title: t.hood.b3Title, desc: t.hood.b3Desc }
                    ].map((detail, idx) => (
                      <div key={idx} className="border-l border-white/10 pl-4 py-1">
                        <div className="text-sm font-semibold text-paper">{detail.title}</div>
                        <p className="text-xs text-felt-gray mt-1 leading-[1.5]">{detail.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Graphic Representation & Explanation - Right (7/12) */}
                <div className="lg:col-span-7 flex flex-col justify-center">
                  
                  {/* System Architecture text graphic */}
                  <div className="border border-white/10 rounded-2xl bg-black/40 p-6 font-mono text-xs text-white/50 leading-relaxed space-y-6">
                    <div className="flex justify-between items-center text-[10px] tracking-wide text-white/35 font-semibold">
                      <span>{t.hood.diagramTitle}</span>
                      <span className="text-pink-400">{t.hood.diagramCaption}</span>
                    </div>

                    <div className="space-y-4">
                      {/* Node 1 */}
                      <div className="border border-white/15 bg-white/[0.02] p-3 rounded-lg flex items-center justify-between">
                        <div>
                          <div className="text-pink-300 font-semibold">{t.hood.clientLabel}</div>
                          <div className="text-[10px] opacity-60">{t.hood.clientDesc}</div>
                        </div>
                        <span className="text-[10px] bg-pink-500/20 text-pink-300 px-2 py-0.5 rounded font-bold">{t.hood.stateBadge}</span>
                      </div>

                      {/* Bridge */}
                      <div className="flex justify-around items-center px-8 text-white/30 text-base">
                        <span>{t.hood.bridge1}</span>
                        <span>{t.hood.bridge2}</span>
                      </div>

                      {/* Node 2 */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="border border-white/15 bg-white/[0.01] p-3 rounded-lg text-center">
                          <div className="text-paper">{t.hood.dbLabel1}</div>
                          <div className="text-[9px] opacity-40 mt-1">{t.hood.dbDesc1}</div>
                        </div>
                        <div className="border border-white/15 bg-white/[0.01] p-3 rounded-lg text-center">
                          <div className="text-paper">{t.hood.dbLabel2}</div>
                          <div className="text-[9px] opacity-40 mt-1">{t.hood.dbDesc2}</div>
                        </div>
                      </div>

                      {/* Bridge */}
                      <div className="flex justify-center text-white/30">
                        <span>{t.hood.bridge3}</span>
                      </div>

                      {/* Node 3 */}
                      <div className="border border-white/15 bg-white/[0.02] p-3 rounded-lg flex items-center justify-between">
                        <div>
                          <div className="text-pink-300 font-semibold">{t.hood.partnerLabel}</div>
                          <div className="text-[10px] opacity-60">{t.hood.partnerDesc}</div>
                        </div>
                        <span className="text-[10px] bg-white/10 text-white px-2 py-0.5 rounded font-bold font-mono">{t.hood.syncBadge}</span>
                      </div>
                    </div>

                  </div>

                </div>

              </div>
            </div>
          </section>

          {/* Privacy Assurances */}
          <section className="py-[46px] md:py-[92px] text-center">
            <div className="container mx-auto max-w-[1078px] px-5 md:px-10">
              <div className="w-16 h-16 rounded-full bg-white/[0.02] border border-white/10 flex items-center justify-center mx-auto mb-6 shadow-[0_0_20px_rgba(255,255,255,0.03)]">
                <ShieldCheck className="h-8 w-8 text-pink-400" />
              </div>
              <h2 className="font-inter font-light text-[2.5rem] md:text-[3.5rem] leading-[0.9] tracking-tight text-paper">
                {t.privacy.title}
              </h2>
              <p className="text-base md:text-lg text-felt-gray max-w-3xl mx-auto mt-6 leading-[1.6]">
                {t.privacy.desc}
              </p>
            </div>
          </section>

        </main>
        
        <Footer />
      </div>
    </div>
  )
}
