"use client"

import { useState } from "react"
import { Header } from "@/components/sections/header"
import { Footer } from "@/components/sections/footer"
import { Check } from "lucide-react"
import { GiMoonOrbit } from "react-icons/gi"
import { FaGithub } from "react-icons/fa"
import { ShaderAnimation } from "@/components/ui/shader-lines"
import { ProjectPreloader } from "@/components/ui/project-preloader"
import { useLanguage } from "@/components/providers/language-context"

const content = {
  fr: {
    preloader: "Orbit Market",
    hero: {
      subtitle: "Compagnon mobile pour suivre les marchands et les cycles de Destiny 2 et Warframe",
      desc: "Une application React Native et FastAPI qui regroupe les inventaires hebdomadaires des marchands de Destiny 2, l'état des cycles ouverts de Warframe et les statistiques d'équipement dans une interface unique.",
      ctaSource: "Code Source",
      ctaView: "Découvrir l'application"
    },
    features: {
      title: "Suivi des marchands et des cycles en direct",
      xur: {
        title: "Inventaire hebdomadaire de Xûr",
        desc: "Chaque week-end, Xûr apparaît avec une sélection d'armes et d'armures exotiques. Orbit Market récupère son inventaire dès la mise à jour des serveurs Bungie avec le détail des statistiques et le coût de chaque pièce.",
        bullet1: "Affichage complet de la répartition des statistiques et des améliorations d'armes pour repérer immédiatement les meilleurs tirages.",
        bullet2: "Calcul des devises requises (Éclats légendaires, Lumen, Cryptages exotiques) avant de lancer le jeu.",
        bullet3: "Synchronisation automatique sur la rotation hebdomadaire des serveurs Bungie.",
        locLabel: "Position actuelle",
        locVal: "Crique sinueuse, ZME",
        exoticLabel: "Arme exotique",
        exoticVal: "Coup de soleil (Revolver)",
        hunterLabel: "Armure Chasseur",
        hunterVal: "Rôdeur nocturne (Casque)",
        titanLabel: "Armure Titan",
        titanVal: "Cœur de la Lumière intime (Torse)",
        warlockLabel: "Armure Arcaniste",
        warlockVal: "Aspect ophidien (Gantelets)"
      },
      vendors: {
        title: "Marchands de la Tour (Destiny 2)",
        desc: "Au-delà de Xûr, l'application centralise les inventaires des marchands permanents de la Tour pour vérifier les mods d'armure, les armes en rotation quotidienne et l'équipement du Jugement d'Osiris.",
        bullet1: "Consultation directe des inventaires d'Ada-1, Banshee-44, Saint-14 et du Seigneur Shaxx.",
        bullet2: "Résolution automatique des identifiants, icônes et statistiques à partir de la base de données Manifest de Bungie.",
        adaStatus: "Synchronisé",
        bansheeStatus: "Rotation quotidienne",
        saintStatus: "Actif du vendredi au mardi"
      },
      warframe: {
        title: "Cycles et alertes de Warframe",
        desc: "Suivez l'évolution en temps réel des mondes ouverts de Warframe, la progression des invasions de factions et les estimations de prix en Platines sur le marché communautaire.",
        bullet1: "Minuteries en direct pour les cycles jour/nuit des Plaines d'Eidolon (Cetus) et les cycles chaud/froid de la Vallée Orbis.",
        bullet2: "Liste des alertes spéciales (Réacteurs et Catalyseurs Orokin) et avancement des invasions Grineer et Corpus.",
        bullet3: "Consultation de la valeur d'échange des ensembles Prime et des mods via les API communautaires.",
        cetusLabel: "Plaines d'Eidolon (Terre)",
        cetusVal: "Jour · 1h 14m restantes",
        vallisLabel: "Vallée Orbis (Vénus)",
        vallisVal: "Chaud · 4m restantes",
        invasionLabel: "Invasions actives",
        invasionVal: "Grineer vs Corpus",
        lotusLabel: "Alerte spéciale",
        lotusVal: "Catalyseur Orokin"
      }
    },
    hood: {
      title: "Architecture : agrégation d'API et cache local SQLite",
      desc: "Les API de jeux vidéo comme celle de Bungie imposent un téléchargement massif de métadonnées (le Manifest) pour traduire les identifiants numériques en noms d'armes et statistiques. Orbit Market déporte ce traitement côté serveur pour garder l'application mobile fluide.",
      items: [
        {
          title: "Serveur FastAPI asynchrone (Python)",
          desc: "Interroge simultanément les points de terminaison Bungie.net et Warframe, normalise les réponses JSON et met en cache les résultats pour éviter le bridage des clés API."
        },
        {
          title: "Indexation locale du Manifest dans SQLite",
          desc: "Au lieu de télécharger les définitions d'objets sur le téléphone, le backend indexe la base SQLite officielle de Bungie en local et résout chaque objet en quelques millisecondes."
        },
        {
          title: "Client mobile React Native & Expo",
          desc: "Affiche les inventaires déjà résolus par le backend avec une navigation fluide entre les univers Destiny 2 et Warframe."
        }
      ]
    },
    cta: {
      title: "Explorer Orbit Market",
      desc: "Le code source du client mobile et du serveur FastAPI est disponible sur GitHub.",
      star: "Voir sur GitHub"
    }
  },
  en: {
    preloader: "Orbit Market",
    hero: {
      subtitle: "Mobile companion for tracking Destiny 2 vendors and Warframe world cycles",
      desc: "A React Native and FastAPI application that brings together weekly Destiny 2 vendor inventories, real-time Warframe open-world timers, and gear stat breakdowns in one place.",
      ctaSource: "View Source",
      ctaView: "Explore the app"
    },
    features: {
      title: "Live vendor and world-state tracking",
      xur: {
        title: "Weekly Xûr inventory",
        desc: "Every weekend, Xûr arrives with a rotating selection of exotic weapons and armor. Orbit Market fetches his inventory as soon as Bungie servers update, complete with stat rolls and material costs.",
        bullet1: "Full stat distribution and weapon perk breakdowns so players can spot high-stat armor rolls immediately.",
        bullet2: "Required currency breakdown (Legendary Shards, Glimmer, Exotic Ciphers) before logging into the game.",
        bullet3: "Automatic synchronization aligned with Bungie's weekly reset schedule.",
        locLabel: "Current location",
        locVal: "Winding Cove, EDZ",
        exoticLabel: "Exotic weapon",
        exoticVal: "Sunshot (Hand Cannon)",
        hunterLabel: "Hunter armor",
        hunterVal: "Celestial Nighthawk (Helmet)",
        titanLabel: "Titan armor",
        titanVal: "Heart of Inmost Light (Chest)",
        warlockLabel: "Warlock armor",
        warlockVal: "Ophidian Aspect (Gauntlets)"
      },
      vendors: {
        title: "Tower vendor roster (Destiny 2)",
        desc: "Beyond Xûr, the app tracks permanent Tower vendors so you can check daily armor mods, rotating weapon rolls, and Trials of Osiris gear from your phone.",
        bullet1: "Direct inventory views for Ada-1, Banshee-44, Saint-14, and Lord Shaxx.",
        bullet2: "Automatic resolution of item hashes, icons, and stats against Bungie's Manifest database.",
        adaStatus: "Synced",
        bansheeStatus: "Daily rotation",
        saintStatus: "Active Friday to Tuesday"
      },
      warframe: {
        title: "Warframe world cycles and alerts",
        desc: "Monitor Warframe's open-world day/night timers, faction invasion progress, and community Platinum market prices in real time.",
        bullet1: "Live countdowns for Plains of Eidolon (Cetus) day/night cycles and Orb Vallis warm/cold phases.",
        bullet2: "Active special alerts (Orokin Reactors and Catalysts) and Grineer vs. Corpus invasion progress.",
        bullet3: "Community market price lookups for Prime sets and mods.",
        cetusLabel: "Plains of Eidolon (Earth)",
        cetusVal: "Day · 1h 14m left",
        vallisLabel: "Orb Vallis (Venus)",
        vallisVal: "Warm · 4m left",
        invasionLabel: "Active invasions",
        invasionVal: "Grineer vs Corpus",
        lotusLabel: "Special alert",
        lotusVal: "Orokin Catalyst"
      }
    },
    hood: {
      title: "Architecture: API aggregation and local SQLite Manifest cache",
      desc: "Game APIs like Bungie's require downloading a massive metadata database (the Manifest) to translate numeric item hashes into weapon names and stats. Orbit Market handles this on the backend to keep the mobile client fast and lightweight.",
      items: [
        {
          title: "Asynchronous FastAPI server (Python)",
          desc: "Queries Bungie.net and Warframe endpoints concurrently, normalizes JSON payloads, and caches responses to prevent API rate-limiting."
        },
        {
          title: "Local SQLite Manifest indexing",
          desc: "Instead of downloading hundreds of megabytes of item definitions on the phone, the backend indexes Bungie's SQLite Manifest locally and resolves item hashes in milliseconds."
        },
        {
          title: "React Native & Expo mobile client",
          desc: "Consumes pre-resolved vendor and world-state payloads for instant navigation between Destiny 2 and Warframe views."
        }
      ]
    },
    cta: {
      title: "Explore Orbit Market",
      desc: "The mobile client and FastAPI backend source code are available on GitHub.",
      star: "View on GitHub"
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

          {/* Features Walkthrough */}
          <section id="features" className="py-[56px] md:py-[92px] border-b border-white/5">
            <div className="container mx-auto max-w-[1078px] px-5 md:px-10">
              <div className="max-w-2xl mb-20">
                <h2 className="font-inter font-light text-[2.4rem] md:text-[3.4rem] leading-[0.95] tracking-tight text-paper">
                  {t.features.title}
                </h2>
              </div>

              <div className="space-y-24">
                {/* Feature 1: Xur */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                  <div className="lg:col-span-7 space-y-4">
                    <h3 className="font-inter font-light text-[1.8rem] md:text-[2.2rem] text-paper leading-[1.1]">
                      {t.features.xur.title}
                    </h3>
                    <p className="text-base text-felt-gray leading-[1.6]">
                      {t.features.xur.desc}
                    </p>
                    <ul className="space-y-2.5 pt-2 text-sm text-felt-gray">
                      {[t.features.xur.bullet1, t.features.xur.bullet2, t.features.xur.bullet3].map((b, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <Check className="h-4.5 w-4.5 text-blue-400 shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="lg:col-span-5 bg-white/[0.01] border border-white/10 rounded-2xl p-6 space-y-2.5 text-xs">
                    {[
                      { title: t.features.xur.locLabel, value: t.features.xur.locVal },
                      { title: t.features.xur.exoticLabel, value: t.features.xur.exoticVal },
                      { title: t.features.xur.hunterLabel, value: t.features.xur.hunterVal },
                      { title: t.features.xur.titanLabel, value: t.features.xur.titanVal },
                      { title: t.features.xur.warlockLabel, value: t.features.xur.warlockVal },
                    ].map((item, idx) => (
                      <div key={idx} className="bg-[#141417] p-3.5 rounded-xl border border-white/5 flex justify-between items-center gap-4">
                        <span className="text-white/60 shrink-0">{item.title}</span>
                        <span className="text-blue-300 font-medium text-right truncate">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Feature 2: Tower Vendors */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                  <div className="lg:col-span-7 lg:order-2 space-y-4">
                    <h3 className="font-inter font-light text-[1.8rem] md:text-[2.2rem] text-paper leading-[1.1]">
                      {t.features.vendors.title}
                    </h3>
                    <p className="text-base text-felt-gray leading-[1.6]">
                      {t.features.vendors.desc}
                    </p>
                    <ul className="space-y-2.5 pt-2 text-sm text-felt-gray">
                      {[t.features.vendors.bullet1, t.features.vendors.bullet2].map((b, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <Check className="h-4.5 w-4.5 text-blue-400 shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="lg:col-span-5 lg:order-1 bg-white/[0.01] border border-white/10 rounded-2xl p-6 space-y-2.5 text-xs">
                    {[
                      { name: "Ada-1", status: t.features.vendors.adaStatus },
                      { name: "Banshee-44", status: t.features.vendors.bansheeStatus },
                      { name: "Saint-14", status: t.features.vendors.saintStatus },
                    ].map((item, idx) => (
                      <div key={idx} className="bg-[#141417] p-3.5 rounded-xl border border-white/5 flex justify-between items-center">
                        <span className="text-paper font-medium">{item.name}</span>
                        <span className="text-blue-300">{item.status}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Feature 3: Warframe */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                  <div className="lg:col-span-7 space-y-4">
                    <h3 className="font-inter font-light text-[1.8rem] md:text-[2.2rem] text-paper leading-[1.1]">
                      {t.features.warframe.title}
                    </h3>
                    <p className="text-base text-felt-gray leading-[1.6]">
                      {t.features.warframe.desc}
                    </p>
                    <ul className="space-y-2.5 pt-2 text-sm text-felt-gray">
                      {[t.features.warframe.bullet1, t.features.warframe.bullet2, t.features.warframe.bullet3].map((b, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <Check className="h-4.5 w-4.5 text-blue-400 shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="lg:col-span-5 bg-white/[0.01] border border-white/10 rounded-2xl p-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    {[
                      { label: t.features.warframe.cetusLabel, val: t.features.warframe.cetusVal },
                      { label: t.features.warframe.vallisLabel, val: t.features.warframe.vallisVal },
                      { label: t.features.warframe.invasionLabel, val: t.features.warframe.invasionVal },
                      { label: t.features.warframe.lotusLabel, val: t.features.warframe.lotusVal },
                    ].map((item, idx) => (
                      <div key={idx} className="p-4 bg-[#141417] border border-white/5 rounded-xl space-y-1">
                        <div className="text-white/60">{item.label}</div>
                        <div className="text-blue-300 font-medium">{item.val}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Technical Architecture */}
          <section className="py-[56px] md:py-[92px] border-b border-white/5">
            <div className="container mx-auto max-w-[1078px] px-5 md:px-10">
              <div className="max-w-3xl mb-12">
                <h2 className="font-inter font-light text-[2.2rem] md:text-[3rem] leading-[0.98] tracking-tight text-paper">
                  {t.hood.title}
                </h2>
                <p className="text-base text-felt-gray leading-[1.65] mt-4">
                  {t.hood.desc}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {t.hood.items.map((detail, idx) => (
                  <div key={idx} className="rounded-2xl bg-white/[0.01] border border-white/10 p-6 space-y-2.5">
                    <h3 className="text-lg font-inter font-medium text-paper">{detail.title}</h3>
                    <p className="text-sm text-felt-gray leading-relaxed">{detail.desc}</p>
                  </div>
                ))}
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
