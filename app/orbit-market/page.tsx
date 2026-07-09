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
import { useLanguage } from "@/components/providers/language-context"

const content = {
  fr: {
    preloader: "Orbit Market",
    hero: {
      subtitle: "Traqueur de marchands et d'état du monde multi-jeux",
      desc: "Une élégante application compagnon mobile pour Destiny 2 et Warframe. Suivez les inventaires des marchands actifs, surveillez l'état du monde en temps réel et analysez les statistiques d'armes via un tableau de bord unifié.",
      ctaSource: "Code Source",
      ctaView: "Voir les fonctionnalités"
    },
    specs: {
      frontend: { label: "STACK FRONTEND", val: "React Native / Expo" },
      backend: { label: "STACK BACKEND", val: "FastAPI (Python)" },
      apis: { label: "APIS EXTERNES", val: "API Bungie.net & Warframe" },
      db: { label: "BASE DE DONNÉES", val: "Cache SQLite local" }
    },
    features: {
      title: "Fonctionnalités en Action",
      xur: {
        title: "Traqueur de Xûr en temps réel",
        desc: "Xûr, l'Agent des Neuf, arrive chaque week-end avec des équipements exotiques. Orbit Market suit son inventaire précis dès son apparition, offrant une transparence totale sur les objets et leurs coûts.",
        bullet1: "Décryptage des statistiques : décortiquez la répartition des statistiques et les perks d'armes/armures pour repérer instantanément les god-rolls.",
        bullet2: "Détail des coûts en matériaux : consultez les monnaies requises (Éclats légendaires, Lumen, Cryptages exotiques) pour vos achats.",
        bullet3: "Mise à jour automatique : rafraîchissements automatiques dès que les serveurs Bungie basculent sur le planning hebdomadaire de Xûr.",
        metricsTitle: "Métriques de Xûr en direct",
        locLabel: "Localisation",
        locVal: "Crique sinueuse, ZME",
        exoticLabel: "Arme active",
        exoticVal: "Coup de soleil (Revolver)",
        hunterLabel: "Exotique Chasseur",
        hunterVal: "Rapière céleste (Casque)",
        titanLabel: "Exotique Titan",
        titanVal: "Cœur de la Lumière intime (Torse)",
        warlockLabel: "Exotique Arcaniste",
        warlockVal: "Aspect ophidien (Gantelets)"
      },
      vendors: {
        title: "Roster des marchands Destiny 2",
        desc: "En plus de Xûr, l'application héberge l'état des inventaires d'autres marchands majeurs de la Tour et des destinations. Gardez un œil sur les contrats hebdomadaires, les armes en rotation et les matériaux directement depuis l'application.",
        bullet1: "Support des marchands de la Tour : consultez les inventaires d'Ada-1 (mods d'armure), Banshee-44 (armes), Saint-14 (Jugement d'Osiris) et du Seigneur Shaxx.",
        bullet2: "Génération de Manifest automatique : le backend analyse le Manifest de Bungie pour mapper efficacement les coordonnées, noms et images des marchands.",
        statusTitle: "Statut du pipeline de données",
        adaStatus: "Généré et Validé",
        bansheeStatus: "Généré et Validé",
        saintStatus: "Actif le week-end"
      },
      warframe: {
        title: "État du monde Warframe",
        desc: "Surveillez l'univers dynamique de Warframe. Suivez les alertes actives, les cycles de monde ouvert, la progression des invasions et les prix du marché communautaire sur un seul et unique tableau de bord.",
        bullet1: "Cycles terrestres dynamiques : suivi en temps réel du cycle jour/nuit de la Terre et de Cetus/Orb Vallis.",
        bullet2: "Alertes & Invasions : listes instantanées des alertes spéciales (Réacteurs, Catalyseurs Orokin) et de la progression des factions.",
        bullet3: "Prix du marché : connexion aux API communautaires pour afficher la valeur d'échange en Platines des ensembles Prime et mods.",
        mockTitle: "Widget d'état du monde",
        cetusLabel: "Cetus (Terre)",
        cetusVal: "Jour (1h 14m restants)",
        vallisLabel: "Orb Vallis (Vénus)",
        vallisVal: "Chaud (4m restants)",
        invasionLabel: "Invasions de factions",
        invasionVal: "Grineer vs Corpus actif",
        lotusLabel: "Cadeaux de Lotus",
        lotusVal: "Alerte Catalyseur Orokin"
      }
    },
    cta: {
      title: "Contribuer au Projet",
      desc: "Orbit Market est un outil open-source. Explorez le code sur GitHub ou mettez une étoile pour soutenir son développement actif.",
      star: "Étoiler sur GitHub"
    }
  },
  en: {
    preloader: "Orbit Market",
    hero: {
      subtitle: "Multi-Game Vendor & World State Tracker",
      desc: "An elegant mobile companion application for Destiny 2 and Warframe. Track active vendor inventories, monitor real-time world states, and analyze weapon rolls through a fast and consolidated dashboard.",
      ctaSource: "View Source",
      ctaView: "View Features"
    },
    specs: {
      frontend: { label: "FRONTEND STACK", val: "React Native / Expo" },
      backend: { label: "BACKEND STACK", val: "FastAPI (Python)" },
      apis: { label: "EXTERNAL APIS", val: "Bungie.net & Warframe API" },
      db: { label: "LOCAL DATABASE", val: "SQLite Manifest Cache" }
    },
    features: {
      title: "Companion Features in Action",
      xur: {
        title: "Real‑Time Xûr Inventory Tracker",
        desc: "Xûr, the Agent of the Nine, arrives every weekend with a rotating selection of exotic gear. Orbit Market tracks his exact inventory details the moment he enters the game world, providing full transparency on item availability and costs.",
        bullet1: "Perk & Roll Decryption: Break down specific stat distributions and perk descriptions on weapons and armor, helping players spot god-rolls instantly.",
        bullet2: "Material Cost Breakdown: Easily see required materials (Legendary Shards, Glimmer, Exotic Ciphers) needed for weekly purchases.",
        bullet3: "Automatic Weekly Sync: Seamless inventory refreshes occur immediately as the Bungie servers transition into Xûr's weekly schedule.",
        metricsTitle: "Live Tracking Metrics",
        locLabel: "Weekly Location",
        locVal: "Winding Cove, EDZ",
        exoticLabel: "Active Weapon",
        exoticVal: "Sunshot (Hand Cannon)",
        hunterLabel: "Hunter Exotic",
        hunterVal: "Celestial Nighthawk (Helmet)",
        titanLabel: "Titan Exotic",
        titanVal: "Heart of Inmost Light (Chest)",
        warlockLabel: "Warlock Exotic",
        warlockVal: "Ophidian Aspect (Gauntlets)"
      },
      vendors: {
        title: "Destiny 2 Vendor Roster",
        desc: "Beyond Xûr, the application will host inventory states for other key Tower and destinations vendors. Keep tabs on weekly bounties, rotating weapon rolls, and crafting materials directly from the app.",
        bullet1: "Tower Vendor Support: Read active inventories for Ada-1 (armor mods), Banshee-44 (weapons), Saint-14 (Trials), and Lord Shaxx.",
        bullet2: "Automatic Manifest Seeding: Backend parses Bungie's massive Manifest database to map vendor coordinates, names, and images efficiently.",
        statusTitle: "Vendor Pipeline Status",
        adaStatus: "Seeded & Validated",
        bansheeStatus: "Seeded & Validated",
        saintStatus: "Active on Weekends"
      },
      warframe: {
        title: "Warframe World State Dashboard",
        desc: "Monitor Warframe's dynamic universe. Track active alerts, open-world cycles, invasion milestones, and community market pricing lists in a consolidated, cross-game workspace.",
        bullet1: "Dynamic Earth Cycles: Real-time track of Earth's Day/Night cycles and Cetus/Vallis open-world timer offsets.",
        bullet2: "Alerts & Invasions: Instant listings of active alerts (Orkin Reactors, Catalysts) and faction invasion progress.",
        bullet3: "Market Price Tracking: Connects to Warframe's ecosystem APIs to display current trade values for prime sets and mods.",
        mockTitle: "World State Mock",
        cetusLabel: "Cetus (Earth)",
        cetusVal: "Day (1h 14m left)",
        vallisLabel: "Orb Vallis (Venus)",
        vallisVal: "Warm (4m left)",
        invasionLabel: "Faction Invasions",
        invasionVal: "Grineer vs Corpus Active",
        lotusLabel: "Lotus Gifts",
        lotusVal: "Orokin Catalyst Alert"
      }
    },
    cta: {
      title: "Get Involved",
      desc: "Orbit Market is an open-source companion tracker. Explore the codebase on GitHub or star the project to support its active development.",
      star: "Star on GitHub"
    }
  }
}

export default function OrbitMarketPage() {
  const [loading, setLoading] = useState(true)
  const [contentVisible, setContentVisible] = useState(false)
  const { language } = useLanguage()
  const t = content[language]

  return (
    <div className="min-h-screen bg-obsidian text-paper overflow-hidden theme-orbit-market">
      {loading && (
        <ProjectPreloader
          icon={<GiMoonOrbit />}
          accentColor="rgb(96, 165, 250)"
          title={t.preloader}
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
                {t.hero.subtitle}
              </h2>
              <p className="text-base md:text-lg text-felt-gray max-w-xl mx-auto mt-6 leading-[1.6]">
                {t.hero.desc}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
                <a href="https://github.com/yacine20005/Orbit-Market" target="_blank" rel="noopener noreferrer" className="ghost-pill">
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
                  { label: t.specs.frontend.label, value: t.specs.frontend.val, icon: Smartphone },
                  { label: t.specs.backend.label, value: t.specs.backend.val, icon: Server },
                  { label: t.specs.apis.label, value: t.specs.apis.val, icon: Globe },
                  { label: t.specs.db.label, value: t.specs.db.val, icon: Database },
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
                  {t.features.title}
                </h2>
              </div>

              <div className="space-y-24">
                
                {/* Feature 1 */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                  <div className="lg:col-span-7 space-y-4">
                    <h3 className="font-inter font-light text-[1.8rem] md:text-[2.2rem] text-paper leading-[1.1]">
                      {t.features.xur.title}
                    </h3>
                    <p className="text-base text-felt-gray leading-[1.6]">
                      {t.features.xur.desc}
                    </p>
                    <div className="pt-2">
                      <ul className="space-y-2.5 text-sm text-felt-gray">
                        <li className="flex items-start gap-2.5">
                          <Check className="h-4.5 w-4.5 text-blue-400 shrink-0 mt-0.5" />
                          <span>{t.features.xur.bullet1}</span>
                        </li>
                        <li className="flex items-start gap-2.5">
                          <Check className="h-4.5 w-4.5 text-blue-400 shrink-0 mt-0.5" />
                          <span>{t.features.xur.bullet2}</span>
                        </li>
                        <li className="flex items-start gap-2.5">
                          <Check className="h-4.5 w-4.5 text-blue-400 shrink-0 mt-0.5" />
                          <span>{t.features.xur.bullet3}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="lg:col-span-5 bg-white/[0.01] border border-white/5 rounded-2xl p-6 lg:p-8">
                    <span className="text-[10px] font-mono text-white/40 block tracking-widest uppercase mb-4">{t.features.xur.metricsTitle}</span>
                    <div className="space-y-3 font-mono text-xs">
                      {[
                        { title: t.features.xur.locLabel, value: t.features.xur.locVal },
                        { title: t.features.xur.exoticLabel, value: t.features.xur.exoticVal },
                        { title: t.features.xur.hunterLabel, value: t.features.xur.hunterVal },
                        { title: t.features.xur.titanLabel, value: t.features.xur.titanVal },
                        { title: t.features.xur.warlockLabel, value: t.features.xur.warlockVal },
                      ].map((item, idx) => (
                        <div key={idx} className="bg-[#141417] p-3 rounded-lg border border-white/5 flex justify-between items-center gap-4">
                          <span className="text-white/60 shrink-0">{item.title}</span>
                          <span className="text-blue-300 font-semibold text-[10px] text-right truncate">{item.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                  <div className="lg:col-span-5 lg:order-2 space-y-4">
                    <h3 className="font-inter font-light text-[1.8rem] md:text-[2.2rem] text-paper leading-[1.1]">
                      {t.features.vendors.title}
                    </h3>
                    <p className="text-base text-felt-gray leading-[1.6]">
                      {t.features.vendors.desc}
                    </p>
                    <div className="pt-2">
                      <ul className="space-y-2.5 text-sm text-felt-gray">
                        <li className="flex items-start gap-2.5">
                          <Check className="h-4.5 w-4.5 text-blue-400 shrink-0 mt-0.5" />
                          <span>{t.features.vendors.bullet1}</span>
                        </li>
                        <li className="flex items-start gap-2.5">
                          <Check className="h-4.5 w-4.5 text-blue-400 shrink-0 mt-0.5" />
                          <span>{t.features.vendors.bullet2}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="lg:col-span-5 lg:order-1 bg-white/[0.01] border border-white/5 rounded-2xl p-6 lg:p-8">
                    <span className="text-[10px] font-mono text-white/40 block tracking-widest uppercase mb-4">{t.features.vendors.statusTitle}</span>
                    <div className="space-y-3 font-mono text-xs">
                      {[
                        { name: "Ada-1 (Armor Mods)", status: t.features.vendors.adaStatus },
                        { name: "Banshee-44 (Weapons)", status: t.features.vendors.bansheeStatus },
                        { name: "Saint-14 (Trials Gear)", status: t.features.vendors.saintStatus },
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
                      {t.features.warframe.title}
                    </h3>
                    <p className="text-base text-felt-gray leading-[1.6]">
                      {t.features.warframe.desc}
                    </p>
                    <div className="pt-2">
                      <ul className="space-y-2.5 text-sm text-felt-gray">
                        <li className="flex items-start gap-2.5">
                          <Check className="h-4.5 w-4.5 text-blue-400 shrink-0 mt-0.5" />
                          <span>{t.features.warframe.bullet1}</span>
                        </li>
                        <li className="flex items-start gap-2.5">
                          <Check className="h-4.5 w-4.5 text-blue-400 shrink-0 mt-0.5" />
                          <span>{t.features.warframe.bullet2}</span>
                        </li>
                        <li className="flex items-start gap-2.5">
                          <Check className="h-4.5 w-4.5 text-blue-400 shrink-0 mt-0.5" />
                          <span>{t.features.warframe.bullet3}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="lg:col-span-5 bg-white/[0.01] border border-white/5 rounded-2xl p-6 lg:p-8">
                    <span className="text-[10px] font-mono text-white/40 block tracking-widest uppercase mb-4">{t.features.warframe.mockTitle}</span>
                    <div className="grid grid-cols-2 gap-3 text-center text-xs font-mono text-white/60">
                      <div className="p-3 bg-[#141417] border border-white/5 rounded-xl flex flex-col items-center gap-1">
                        <span>🌅 {t.features.warframe.cetusLabel}</span>
                        <span className="text-[9px] text-blue-300 font-semibold">{t.features.warframe.cetusVal}</span>
                      </div>
                      <div className="p-3 bg-[#141417] border border-white/5 rounded-xl flex flex-col items-center gap-1">
                        <span>🌌 {t.features.warframe.vallisLabel}</span>
                        <span className="text-[9px] text-blue-300 font-semibold">{t.features.warframe.vallisVal}</span>
                      </div>
                      <div className="p-3 bg-[#141417] border border-white/5 rounded-xl flex flex-col items-center gap-1">
                        <span>🛡️ {t.features.warframe.invasionLabel}</span>
                        <span className="text-[9px] text-blue-300 font-semibold">{t.features.warframe.invasionVal}</span>
                      </div>
                      <div className="p-3 bg-[#141417] border border-white/5 rounded-xl flex flex-col items-center gap-1">
                        <span>🎁 {t.features.warframe.lotusLabel}</span>
                        <span className="text-[9px] text-blue-300 font-semibold">{t.features.warframe.lotusVal}</span>
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
                    {language === "fr" ? "Sous le capot : moteur multi-jeux" : "Under the hood: multi-game engine"}
                  </h2>
                  <p className="text-base text-felt-gray leading-[1.6]">
                    {language === "fr" 
                      ? "Construire un traqueur multi-jeux présente un défi d'évolutivité unique en raison du volume massif de métadonnées de jeu. Orbit Market résout ce problème en mettant en cache les données intelligemment au niveau de l'API."
                      : "Building a cross-game tracker presents a unique scaling challenge due to the massive volume of game metadata. Orbit Market resolves this by caching data intelligently at the api level."}
                  </p>
                  
                  <div className="space-y-4">
                    {[
                      { 
                        title: language === "fr" ? "Backend FastAPI (Python)" : "FastAPI Backend API (Python)", 
                        desc: language === "fr"
                          ? "Gère les opérations de données haute performance. Se connecte simultanément aux points de terminaison Bungie et Warframe, analyse les réponses et met en cache pour éviter le bridage de l'API."
                          : "Handles high-performance data operations. Connects to Bungie and Warframe endpoints concurrently, parses large JSON arrays, and caches responses to avoid API throttling." 
                      },
                      { 
                        title: language === "fr" ? "Manifest Bungie (Cache SQLite)" : "Bungie Manifest (SQLite Cache)", 
                        desc: language === "fr"
                          ? "Au lieu de charger les assets de Bungie à chaque clic, notre backend stocke le Manifest de Destiny 2 dans une base SQLite locale pour exécuter des requêtes instantanées."
                          : "Instead of requesting Bungie server assets on every single click, our backend caches the massive static Destiny 2 Manifest inside a local SQLite database for instantaneous queries." 
                      },
                      { 
                        title: language === "fr" ? "Navigation Expo modulaire" : "Modular Expo Navigation", 
                        desc: language === "fr"
                          ? "Conçu avec React Navigation pour gérer de multiples états d'écrans imbriqués, permettant une transition fluide entre les marchands Destiny 2 et l'état Warframe."
                          : "Designed with React Navigation to handle multiple deep stack states, enabling fluid transitions between the Destiny 2 vendor sheets and Warframe dashboards." 
                      }
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
                        <span>▼ Automatically pushes to</span>
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
                {t.cta.title}
              </h2>
              <p className="text-base md:text-lg text-felt-gray max-w-2xl mx-auto mt-6 leading-[1.6]">
                {t.cta.desc}
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <a href="https://github.com/yacine20005/Orbit-Market" target="_blank" rel="noopener noreferrer" className="ghost-pill">
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
