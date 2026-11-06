"use client"

import { useState } from "react"
import { Header } from "@/components/sections/header"
import { Footer } from "@/components/sections/footer"
import {
  Heart,
  Check,
  BookOpen,
  Download,
  Film,
  Calendar,
  Camera
} from "lucide-react"
import { FaGithub, FaAndroid } from "react-icons/fa"
import { ShaderAnimation } from "@/components/ui/shader-lines"
import { ProjectPreloader } from "@/components/ui/project-preloader"
import { useLanguage } from "@/components/providers/language-context"

const content = {
  fr: {
    preloader: "Spark Love",
    hero: {
      subtitle: "Prenez deux minutes par jour pour vous redécouvrir, rire et choisir vos soirées à deux.",
      desc: "Spark Love est un carnet partagé entre vous et votre partenaire. Comme sur une cassette enregistrée à deux, chacun répond sur sa face avant de retourner la bande pour découvrir ce que l'autre a écrit — sans influence, sans pression et loin des réseaux sociaux.",
      ctaDownload: "Télécharger l'APK Android",
      ctaDiscover: "Découvrir l'application",
      ctaGithub: "Code Source",
      apkNote: "Version 1.0.0 · Gratuit sur Android · Aucun abonnement",
      cardDay: "Jour 142 ensemble",
      cardPrompt: "Quel est un souvenir de nous deux que tu te repasses souvent ?",
      sideALabel: "Toi",
      sideAText: "Quand on s'est pris l'averse à Lisbonne et qu'on a fini trempés dans une petite boulangerie.",
      sideBLabel: "Clara",
      sideBText: "Rentrer à pied à 2h du matin après le petit bar de jazz avec un écouteur chacun.",
      stampUnlocked: "Révélé à deux"
    },
    concept: {
      title: "Pourquoi répondre chacun de son côté change tout",
      desc: "Au quotidien, quand l'un donne son avis ou propose un film en premier, l'autre a souvent tendance à s'adapter par réflexe. Spark Love inverse les choses grâce au principe de la cassette à deux faces :",
      steps: [
        {
          color: "#EE6446",
          title: "Vous répondez d'abord de votre côté",
          desc: "Dans les transports, à la pause de midi ou sur le canapé, vous notez votre réponse ou vos envies du soir en toute sincérité."
        },
        {
          color: "#E3A13A",
          title: "La réponse de l'autre reste verrouillée",
          desc: "Tant que votre partenaire n'a pas répondu à son tour, sa face reste masquée. Impossible d'être influencé avant d'avoir fait son propre choix."
        },
        {
          color: "#86A0EE",
          title: "La cassette se retourne pour vous deux",
          desc: "Dès que vous avez tous les deux validé, les réponses se dévoilent côte à côte. C'est là que naissent les fous rires, les surprises et les meilleures conversations."
        }
      ]
    },
    features: {
      title: "Quatre façons de nourrir votre complicité",
      subtitle: "Tout ce qu'il faut pour briser la routine, décider plus vite et garder une trace de votre histoire.",
      spark: {
        title: "Une question chaque matin pour sortir du « Comment s'est passée ta journée ? »",
        desc: "Chaque jour de l'année apporte une nouvelle question pensée pour faire sourire, réfléchir ou se remémorer un bon moment. Même lors des semaines les plus chargées, cela crée une petite bulle rien qu'à vous deux.",
        b1: "365 questions variées : souvenirs, projections, petites habitudes et clins d'œil complices.",
        b2: "Une fois dévoilées, vos deux réponses sont automatiquement conservées dans votre journal.",
        mockQuestion: "Si on pouvait se téléporter tous les deux maintenant, où m'emmènerais-tu ?",
        mockA: "Dans un petit ryokan en bois à Kyoto avec du thé chaud et la pluie dehors.",
        mockB: "Sur une crique calme à Minorque au coucher du soleil avec un pique-nique."
      },
      match: {
        title: "Mettez fin au débat du « Qu'est-ce qu'on fait ce soir ? »",
        desc: "Plus besoin de passer 45 minutes à faire défiler les catalogues de streaming ou à chercher quoi faire ce week-end. Parcourez les cartes chacun sur votre téléphone : dites « Oui » ou « Pas pour nous », et laissez l'application trouver vos terrains d'entente.",
        b1: "30 films sélectionnés et 30 idées de sorties classées par ambiance (cocooning, plein air, insolite, gourmand).",
        b2: "Vos choix restent secrets : l'application vous alerte uniquement lorsque vous aimez tous les deux la même idée.",
        movieCardTitle: "Before Sunrise (1995)",
        movieCardSub: "Film · Romance · 1h41",
        movieCardDesc: "Deux inconnus descendent d'un train à Vienne et passent une nuit entière à discuter en marchant dans la ville.",
        dateCardTitle: "Pique-nique au coucher du soleil",
        dateCardSub: "Sortie · Plein air · Petit budget",
        dateCardDesc: "Un plaid, de quoi grignoter et le point de vue le plus haut près de chez vous à l'heure dorée."
      },
      quizzes: {
        title: "100 questions pour mieux vous connaître, thème par thème",
        desc: "Envie d'aller plus loin ? Explorez 10 grands thèmes de 10 questions à votre rythme. Il n'y a ni bonne ni mauvaise réponse : l'objectif est de voir où vous êtes sur la même longueur d'onde et d'ouvrir le dialogue sur le reste.",
        b1: "Trois formats de réponse : choix multiples, échelle de 1 à 5 et réponses libres.",
        b2: "Comparaison détaillée à la fin de chaque thème avec votre pourcentage d'accord sur chaque sujet.",
        themes: [
          "Communication",
          "Langages de l'amour",
          "Vie quotidienne",
          "Projets d'avenir",
          "Intimité & Affection",
          "Voyages & Aventure",
          "Argent & Priorités",
          "Famille & Amis",
          "Souvenirs de nous",
          "Juste pour rire"
        ],
        sampleQuestion: "Quand j'ai passé une mauvaise journée, j'ai surtout besoin de...",
        sampleAnswerBoth: "Qu'on me prenne dans les bras au calme, sans chercher de solution tout de suite.",
        sampleAgreement: "90 % d'accord sur ce thème"
      },
      journal: {
        title: "Votre boîte à souvenirs privée, loin des réseaux sociaux",
        desc: "Vos plus beaux moments à deux finissent souvent noyés dans des milliers de messages ou perdus dans votre galerie photo. Le Journal rassemble au même endroit vos photos marquantes, vos petits mots et vos réponses du jour.",
        b1: "Ajoutez une photo ou une note en quelques secondes pour immortaliser un fou rire, un voyage ou un dîner.",
        b2: "Une chronologie intime que seuls vous et votre partenaire pouvez consulter.",
        memory1Title: "Week-end au bord des falaises d'Étretat",
        memory1Body: "Trois heures de marche face au vent suivies du meilleur chocolat chaud de notre vie.",
        memory1Meta: "Ajouté par Yacine · Avec photo",
        memory2Title: "Notre premier plat de pâtes fraîches maison",
        memory2Body: "Il y avait de la farine absolument partout dans la cuisine mais c'était un 10/10.",
        memory2Meta: "Ajouté par Clara · Souvenir"
      }
    },
    onboarding: {
      title: "Prêt à deux en moins de 30 secondes",
      steps: [
        {
          title: "Installez l'application",
          desc: "Téléchargez gratuitement l'APK Android sur vos deux téléphones."
        },
        {
          title: "Créez votre profil sans mot de passe",
          desc: "Connectez-vous en un instant avec un code reçu par e-mail ou votre compte Google."
        },
        {
          title: "Reliez vos téléphones avec un code à 6 lettres",
          desc: "Dictez simplement le code affiché à l'écran (ex. K7M4P9) à votre partenaire : votre espace privé est créé."
        }
      ]
    },
    portfolio: {
      title: "Conception technique : garantir le secret des réponses côté serveur",
      intro: "Au-delà du produit et de sa direction artistique, j'ai conçu Spark Love comme un projet complet de Master d'Informatique. L'enjeu principal consistait à garantir mathématiquement les règles de confidentialité du jeu (« impossible de voir la réponse de l'autre avant d'avoir répondu ») sans jamais faire confiance au téléphone client.",
      cards: [
        {
          title: "Double-insu imposé par PostgreSQL",
          desc: "Dans une application classique, masquer une réponse consiste souvent à la cacher dans l'interface alors que le serveur l'a déjà envoyée au téléphone. Ici, les règles Row-Level Security (RLS) interdisent à un utilisateur de lire les tables de son partenaire. La révélation passe exclusivement par des procédures SQL (SECURITY DEFINER) qui vérifient côté serveur que les deux partenaires ont terminé avant de renvoyer la moindre donnée."
        },
        {
          title: "Isolation des couples et privilèges SQL par colonne",
          desc: "Pour empêcher toute manipulation d'état depuis le client, les droits de modification sur l'identifiant de couple (couple_id) sont révoqués au niveau même des colonnes SQL. L'appairage par code à 6 caractères, la séparation et la suppression du compte s'exécutent dans des transactions atomiques, et les photos du journal sont protégées dans un espace privé accessible uniquement par URLs signées temporaires."
        },
        {
          title: "Tests d'intrusion SQL (pgTAP) et livraison continue",
          desc: "Pour prouver qu'aucune fuite de données n'est possible entre deux partenaires ou entre deux couples, j'ai écrit une suite de tests automatisés directement en SQL avec pgTAP (simulacre d'accès avant révélation, tentatives d'écriture non autorisées) complétée par des tests unitaires TypeScript (Bun) et un pipeline GitHub Actions qui compile et publie automatiquement l'APK Android à chaque version."
        }
      ],
      stackPills: [
        "React Native & TypeScript",
        "PostgreSQL (RLS & RPC)",
        "Supabase Auth & Private Storage",
        "Tests SQL pgTAP & Bun Test",
        "GitHub Actions CI/CD"
      ]
    },
    cta: {
      title: "Envie d'essayer Spark Love avec votre partenaire ?",
      desc: "Téléchargez la version 1.0 sur Android et répondez à votre première question du jour dès ce soir.",
      downloadBtn: "Télécharger l'APK Android (v1.0.0)",
      githubBtn: "Voir le projet sur GitHub"
    }
  },
  en: {
    preloader: "Spark Love",
    hero: {
      subtitle: "Take two minutes a day to rediscover each other, laugh together, and pick your date nights effortlessly.",
      desc: "Spark Love is a private space shared between you and your partner. Like a mixtape recorded by the two of you, you each record your answer on your own side before flipping the tape to reveal what the other wrote — with zero influence, zero pressure, and far from social media.",
      ctaDownload: "Download Android APK",
      ctaDiscover: "Explore the app",
      ctaGithub: "Source Code",
      apkNote: "Version 1.0.0 · Free on Android · No subscription",
      cardDay: "Day 142 together",
      cardPrompt: "What is a memory of us you replay often?",
      sideALabel: "You",
      sideAText: "Getting caught in that downpour in Lisbon and ending up soaked inside a tiny bakery.",
      sideBLabel: "Clara",
      sideBText: "Walking home at 2 AM after that tiny jazz bar, sharing one pair of headphones.",
      stampUnlocked: "Revealed together"
    },
    concept: {
      title: "Why answering separately first changes everything",
      desc: "In everyday life, when one person answers a question or suggests a movie first, the other naturally tends to adjust. Spark Love flips that dynamic using the two-sided cassette principle:",
      steps: [
        {
          color: "#EE6446",
          title: "You answer on your own first",
          desc: "On your commute, on a lunch break, or on the couch, you write down your honest answer or swipe on tonight's plans."
        },
        {
          color: "#E3A13A",
          title: "Your partner's side stays sealed",
          desc: "Until your partner has also answered, their side stays hidden. Neither of you can peek or be influenced beforehand."
        },
        {
          color: "#86A0EE",
          title: "The tape flips for both of you",
          desc: "As soon as you've both answered, both sides reveal side by side — sparking laughs, surprises, and great conversations."
        }
      ]
    },
    features: {
      title: "Four ways to bring you closer",
      subtitle: "Everything you need to break out of routine, decide faster, and keep a trace of your story.",
      spark: {
        title: "One question every morning to go beyond 'How was your day?'",
        desc: "Every day of the year brings a fresh question designed to make you smile, reflect, or revisit a favorite memory. Even during busy weeks, it carves out a two-minute ritual just for the two of you.",
        b1: "365 curated prompts covering memories, future plans, small habits, and playful hypotheticals.",
        b2: "Once both sides are revealed, your answers are automatically saved to your couple journal.",
        mockQuestion: "If we could teleport anywhere right now, where would you take us?",
        mockA: "A small wooden inn in Kyoto with hot tea and rain outside.",
        mockB: "A quiet cove in Menorca at sunset with a picnic blanket."
      },
      match: {
        title: "End the 'What should we do tonight?' debate for good",
        desc: "Stop spending 45 minutes scrolling streaming catalogs or debating weekend plans. Flip through cards on your own phone, tap 'Yes please' or 'Not for us', and let the app find what you both actually want.",
        b1: "30 hand-picked movies and 30 date ideas across cozy nights in, outdoor adventures, food, and creative dates.",
        b2: "Swipes stay secret until you both like the exact same card — triggering an instant Match.",
        movieCardTitle: "Before Sunrise (1995)",
        movieCardSub: "Movie · Romance · 1h41",
        movieCardDesc: "Two strangers step off a train in Vienna and spend a single night walking and talking through the city.",
        dateCardTitle: "Sunset hilltop picnic",
        dateCardSub: "Date Idea · Outdoors · Low cost",
        dateCardDesc: "A blanket, favourite snacks, and the highest viewpoint near town at golden hour."
      },
      quizzes: {
        title: "100 questions to truly know each other, theme by theme",
        desc: "Want to dive deeper? Explore 10 themed packs of 10 questions at your own pace. There are no right or wrong scores — the goal is to celebrate where you align and spark great conversations where you differ.",
        b1: "Three answer formats: multiple choice, 1–5 scales, and open-ended text.",
        b2: "Side-by-side breakdown once you both finish a pack, complete with your agreement rate on each topic.",
        themes: [
          "Communication",
          "Love Languages",
          "Daily Rhythms",
          "Future & Dreams",
          "Affection & Intimacy",
          "Travel & Adventure",
          "Money & Priorities",
          "Family & Friends",
          "Our Memories",
          "Just for Fun"
        ],
        sampleQuestion: "When I've had a rough day, what I need most from you is...",
        sampleAnswerBoth: "A quiet hug and comfort first, without trying to fix the problem right away.",
        sampleAgreement: "90% agreement on this theme"
      },
      journal: {
        title: "Your private memory box, far from social media",
        desc: "Your best moments together often get buried under thousands of chat messages or lost in your camera roll. The Journal gathers your favorite photos, gratitude notes, and past Daily Sparks in one quiet timeline.",
        b1: "Snap a photo or write a note in seconds to remember an inside joke, a trip, or a great dinner.",
        b2: "A private timeline that only you and your partner can ever open.",
        memory1Title: "Weekend walk along the Étretat cliffs",
        memory1Body: "Three hours walking into the wind followed by the best hot chocolate of our lives.",
        memory1Meta: "Added by Yacine · With photo",
        memory2Title: "Our first homemade fresh pasta night",
        memory2Body: "There was flour on every surface of the kitchen, but it was a solid 10/10.",
        memory2Meta: "Added by Clara · Memory"
      }
    },
    onboarding: {
      title: "Ready for the two of you in under 30 seconds",
      steps: [
        {
          title: "Install the app",
          desc: "Download the free Android APK on both of your phones."
        },
        {
          title: "Sign in without a password",
          desc: "Log in effortlessly with a 6-digit email code or your Google account."
        },
        {
          title: "Link up with a 6-character code",
          desc: "Read the code on your screen aloud to your partner (e.g. K7M4P9) and your private space is live."
        }
      ]
    },
    portfolio: {
      title: "Technical design: enforcing double-blind privacy on the server",
      intro: "Beyond the product experience and visual direction, I built Spark Love as a full-stack Master's in Computer Science project. My core engineering question was how to mathematically enforce the game's double-blind privacy rules ('you cannot see Side B before completing Side A') without ever trusting the client device.",
      cards: [
        {
          title: "Database-enforced double-blind protocol",
          desc: "In many apps, hiding a partner's answer only hides it in the UI while the API payload already exposes it. In Spark Love, PostgreSQL Row-Level Security (RLS) strictly blocks users from reading their partner's rows. Reveals happen exclusively through SECURITY DEFINER SQL procedures that verify both partners have finished before returning a single byte."
        },
        {
          title: "Couple isolation and column-level SQL grants",
          desc: "To prevent client-side state tampering, UPDATE privileges on profiles.couple_id are revoked at the SQL column level. Pairing via 6-character codes, unlinking, and account deletion run inside atomic SQL transactions, while journal photos live in a private storage bucket served only via short-lived signed URLs."
        },
        {
          title: "Automated SQL security tests (pgTAP) and CI/CD",
          desc: "To prove that no data leak is possible between partners or across couples, I wrote an automated pgTAP SQL test suite that simulates premature reads and unauthorized writes directly against PostgreSQL, paired with Bun unit tests and a GitHub Actions pipeline that builds and publishes the signed Android APK on every release."
        }
      ],
      stackPills: [
        "React Native & TypeScript",
        "PostgreSQL (RLS & RPC)",
        "Supabase Auth & Private Storage",
        "pgTAP SQL Tests & Bun Test",
        "GitHub Actions CI/CD"
      ]
    },
    cta: {
      title: "Ready to try Spark Love with your partner?",
      desc: "Download version 1.0 on Android and answer your first Daily Spark together tonight.",
      downloadBtn: "Download Android APK (v1.0.0)",
      githubBtn: "View Project on GitHub"
    }
  }
}

export default function SparkLovePage() {
  const [loading, setLoading] = useState(true)
  const [contentVisible, setContentVisible] = useState(false)
  const { language } = useLanguage()
  const t = content[language]

  return (
    <div className="min-h-screen bg-obsidian text-paper overflow-hidden theme-spark-love">
      {loading && (
        <ProjectPreloader
          icon={<Heart />}
          accentColor="rgb(238, 100, 70)"
          title={t.preloader}
          onReveal={() => setContentVisible(true)}
          onComplete={() => setLoading(false)}
        />
      )}

      <div className={`transition-all duration-300 ${contentVisible ? "opacity-100 visible" : "opacity-0 invisible"}`}>
        <Header />

        <main className="relative z-10">
          {/* ── 1. HERO SECTION ─────────────────────────────────────────── */}
          <section className="relative min-h-screen flex items-center justify-center overflow-hidden border-b border-white/5 pt-28 pb-20">
            <div className="absolute inset-0 opacity-[0.22] pointer-events-none">
              <ShaderAnimation color={[0.93, 0.39, 0.27]} />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/55 to-transparent" />

            <div className="relative z-10 container mx-auto max-w-[1078px] px-5 md:px-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                {/* Left Column: Pitch & Download CTAs */}
                <div className="lg:col-span-7 text-left space-y-6">
                  <h1 className="font-inter font-normal text-[3.5rem] sm:text-[5rem] md:text-[6.2rem] leading-[0.88] tracking-tight text-paper">
                    Spark Love
                  </h1>

                  <h2 className="text-xl md:text-2xl text-[#EFE7D6] font-inter font-normal leading-snug max-w-2xl">
                    {t.hero.subtitle}
                  </h2>

                  <p className="text-base md:text-lg text-felt-gray max-w-xl leading-[1.65]">
                    {t.hero.desc}
                  </p>

                  <div className="flex flex-col sm:flex-row flex-wrap gap-3.5 pt-2">
                    <a
                      href="https://github.com/yacine20005/Spark-Love/releases/latest"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ghost-pill inline-flex items-center justify-center gap-2.5 bg-[#EE6446] text-[#15120E] font-semibold border-[#EE6446] hover:bg-[#f3775c]"
                    >
                      <FaAndroid className="h-4.5 w-4.5" />
                      <span>{t.hero.ctaDownload}</span>
                    </a>
                    <a
                      href="#features"
                      className="ghost-pill inline-flex items-center justify-center gap-2 border-white/15 text-paper"
                    >
                      <span>{t.hero.ctaDiscover}</span>
                    </a>
                    <a
                      href="https://github.com/yacine20005/Spark-Love"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ghost-pill inline-flex items-center justify-center gap-2"
                    >
                      <FaGithub className="h-4 w-4" />
                      <span>{t.hero.ctaGithub}</span>
                    </a>
                  </div>

                  <p className="text-xs text-white/45 pt-1">
                    {t.hero.apkNote}
                  </p>
                </div>

                {/* Right Column: Tactile J-Card Preview */}
                <div className="lg:col-span-5">
                  <div className="rounded-2xl bg-[#F1EADB] text-[#1B1814] border-2 border-[#D3C8B2] overflow-hidden">
                    <div className="flex flex-col gap-[2px]">
                      <div className="h-[6px] bg-[#C2381F]" />
                      <div className="h-[4px] bg-[#E3A13A]" />
                      <div className="h-[3px] bg-[#2340A0]" />
                    </div>

                    <div className="p-6 sm:p-7 space-y-5">
                      <div className="flex items-center justify-between gap-2 border-b border-[#D3C8B2] pb-3">
                        <span className="text-xs font-medium text-[#4F483F]">
                          Spark Love
                        </span>
                        <span className="text-xs font-medium px-2.5 py-0.5 rounded bg-[#E7DFCD] text-[#1B1814]">
                          {t.hero.cardDay}
                        </span>
                      </div>

                      <div className="text-lg sm:text-xl font-bold leading-snug text-[#1B1814]">
                        « {t.hero.cardPrompt} »
                      </div>

                      {/* Side A (You) */}
                      <div className="rounded-xl bg-[#F9F5EC] border border-[#D3C8B2] p-4 space-y-1.5">
                        <div className="flex items-center gap-2">
                          <span className="w-6 h-6 rounded bg-[#C2381F] text-[#F9F5EC] font-bold text-xs flex items-center justify-center">
                            A
                          </span>
                          <span className="text-xs font-bold text-[#C2381F]">
                            {t.hero.sideALabel}
                          </span>
                        </div>
                        <p className="text-sm text-[#1B1814] leading-relaxed pl-8">
                          {t.hero.sideAText}
                        </p>
                      </div>

                      {/* Side B (Partner) */}
                      <div className="rounded-xl bg-[#F9F5EC] border border-[#D3C8B2] p-4 space-y-1.5">
                        <div className="flex items-center gap-2">
                          <span className="w-6 h-6 rounded bg-[#2340A0] text-[#F9F5EC] font-bold text-xs flex items-center justify-center">
                            B
                          </span>
                          <span className="text-xs font-bold text-[#2340A0]">
                            {t.hero.sideBLabel}
                          </span>
                        </div>
                        <p className="text-sm text-[#1B1814] leading-relaxed pl-8">
                          {t.hero.sideBText}
                        </p>
                      </div>

                      <div className="flex items-center justify-end pt-1">
                        <span className="border-2 border-[#2F6B4F] text-[#2F6B4F] px-2.5 py-0.5 rounded text-xs font-bold -rotate-2">
                          {t.hero.stampUnlocked}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── 2. THE CONCEPT: SIDE A / SIDE B ─────────────────────────── */}
          <section id="concept" className="py-[56px] md:py-[92px] border-b border-white/5">
            <div className="container mx-auto max-w-[1078px] px-5 md:px-10">
              <div className="max-w-3xl mb-14">
                <h2 className="font-inter font-light text-[2.2rem] md:text-[3.2rem] leading-[1.02] tracking-tight text-paper">
                  {t.concept.title}
                </h2>
                <p className="text-base md:text-lg text-felt-gray mt-4 leading-[1.65]">
                  {t.concept.desc}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {t.concept.steps.map((s, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl bg-[#181410] border border-[#3B342B] p-6 md:p-7 flex flex-col justify-between"
                  >
                    <div>
                      <div
                        className="w-8 h-1.5 rounded-full mb-5"
                        style={{ backgroundColor: s.color }}
                      />
                      <h3 className="text-xl font-inter font-normal text-[#EFE7D6] leading-snug mb-3">
                        {s.title}
                      </h3>
                      <p className="text-sm text-[#C2B8A6] leading-relaxed">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── 3. CORE APP EXPERIENCES ──────────────────────────────────── */}
          <section id="features" className="py-[56px] md:py-[96px] border-b border-white/5">
            <div className="container mx-auto max-w-[1078px] px-5 md:px-10">
              <div className="max-w-2xl mb-20">
                <h2 className="font-inter font-light text-[2.4rem] md:text-[3.5rem] leading-[0.95] tracking-tight text-paper">
                  {t.features.title}
                </h2>
                <p className="text-base md:text-lg text-felt-gray mt-4 leading-[1.6]">
                  {t.features.subtitle}
                </p>
              </div>

              <div className="space-y-24 md:space-y-28">
                {/* FEATURE 1: Daily Spark */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                  <div className="lg:col-span-6 space-y-4">
                    <h3 className="font-inter font-light text-[1.8rem] md:text-[2.3rem] text-paper leading-[1.12]">
                      {t.features.spark.title}
                    </h3>
                    <p className="text-base text-felt-gray leading-[1.65]">
                      {t.features.spark.desc}
                    </p>
                    <ul className="space-y-3 pt-2 text-sm text-felt-gray">
                      <li className="flex items-start gap-2.5">
                        <Check className="h-4.5 w-4.5 text-[#EE6446] shrink-0 mt-0.5" />
                        <span>{t.features.spark.b1}</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <Check className="h-4.5 w-4.5 text-[#EE6446] shrink-0 mt-0.5" />
                        <span>{t.features.spark.b2}</span>
                      </li>
                    </ul>
                  </div>

                  <div className="lg:col-span-6">
                    <div className="rounded-2xl bg-[#1B1713] border border-[#3B342B] p-6 md:p-7 space-y-4">
                      <div className="flex flex-col gap-[2px] w-20">
                        <div className="h-[4px] bg-[#EE6446]" />
                        <div className="h-[2.5px] bg-[#E3A13A]" />
                        <div className="h-[1.5px] bg-[#86A0EE]" />
                      </div>
                      <div className="text-base md:text-lg font-semibold text-[#EFE7D6] leading-snug">
                        « {t.features.spark.mockQuestion} »
                      </div>
                      <div className="space-y-3 pt-1">
                        <div className="rounded-xl bg-[#15120E] border border-[#3B342B] p-3.5 flex items-start gap-3">
                          <span className="w-6 h-6 rounded bg-[#EE6446] text-[#15120E] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                            A
                          </span>
                          <p className="text-sm text-[#EFE7D6] leading-relaxed">
                            {t.features.spark.mockA}
                          </p>
                        </div>
                        <div className="rounded-xl bg-[#15120E] border border-[#3B342B] p-3.5 flex items-start gap-3">
                          <span className="w-6 h-6 rounded bg-[#86A0EE] text-[#15120E] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                            B
                          </span>
                          <p className="text-sm text-[#EFE7D6] leading-relaxed">
                            {t.features.spark.mockB}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* FEATURE 2: Movies & Date Ideas Matcher */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                  <div className="lg:col-span-6 lg:order-2 space-y-4">
                    <h3 className="font-inter font-light text-[1.8rem] md:text-[2.3rem] text-paper leading-[1.12]">
                      {t.features.match.title}
                    </h3>
                    <p className="text-base text-felt-gray leading-[1.65]">
                      {t.features.match.desc}
                    </p>
                    <ul className="space-y-3 pt-2 text-sm text-felt-gray">
                      <li className="flex items-start gap-2.5">
                        <Check className="h-4.5 w-4.5 text-[#E3A13A] shrink-0 mt-0.5" />
                        <span>{t.features.match.b1}</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <Check className="h-4.5 w-4.5 text-[#E3A13A] shrink-0 mt-0.5" />
                        <span>{t.features.match.b2}</span>
                      </li>
                    </ul>
                  </div>

                  <div className="lg:col-span-6 lg:order-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Movie Card Preview */}
                    <div className="rounded-2xl bg-[#1B1713] border border-[#3B342B] p-5 flex flex-col justify-between space-y-4">
                      <div className="space-y-3">
                        <div className="h-24 rounded-xl bg-[#2A251F] flex items-center justify-center relative overflow-hidden">
                          <Film className="h-8 w-8 text-[#EE6446]" />
                          <span className="absolute top-2.5 right-2.5 border-2 border-[#74C49A] text-[#74C49A] bg-[#15120E] px-2 py-0.5 rounded text-[11px] font-bold rotate-3">
                            Match
                          </span>
                        </div>
                        <div>
                          <div className="text-xs text-[#E3A13A]">{t.features.match.movieCardSub}</div>
                          <div className="text-base font-bold text-[#EFE7D6] mt-0.5">{t.features.match.movieCardTitle}</div>
                        </div>
                        <p className="text-xs text-[#C2B8A6] leading-relaxed">
                          {t.features.match.movieCardDesc}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 pt-2 border-t border-[#3B342B] text-xs text-[#74C49A]">
                        <Heart className="h-3.5 w-3.5 fill-current" />
                        <span>A + B</span>
                      </div>
                    </div>

                    {/* Date Idea Card Preview */}
                    <div className="rounded-2xl bg-[#1B1713] border border-[#3B342B] p-5 flex flex-col justify-between space-y-4">
                      <div className="space-y-3">
                        <div className="h-24 rounded-xl bg-[#2A251F] flex items-center justify-center relative overflow-hidden">
                          <Calendar className="h-8 w-8 text-[#86A0EE]" />
                          <span className="absolute top-2.5 right-2.5 border-2 border-[#74C49A] text-[#74C49A] bg-[#15120E] px-2 py-0.5 rounded text-[11px] font-bold -rotate-3">
                            Match
                          </span>
                        </div>
                        <div>
                          <div className="text-xs text-[#86A0EE]">{t.features.match.dateCardSub}</div>
                          <div className="text-base font-bold text-[#EFE7D6] mt-0.5">{t.features.match.dateCardTitle}</div>
                        </div>
                        <p className="text-xs text-[#C2B8A6] leading-relaxed">
                          {t.features.match.dateCardDesc}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 pt-2 border-t border-[#3B342B] text-xs text-[#74C49A]">
                        <Heart className="h-3.5 w-3.5 fill-current" />
                        <span>A + B</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* FEATURE 3: 100 Questions across 10 Themes */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                  <div className="lg:col-span-6 space-y-4">
                    <h3 className="font-inter font-light text-[1.8rem] md:text-[2.3rem] text-paper leading-[1.12]">
                      {t.features.quizzes.title}
                    </h3>
                    <p className="text-base text-felt-gray leading-[1.65]">
                      {t.features.quizzes.desc}
                    </p>
                    <ul className="space-y-3 pt-2 text-sm text-felt-gray">
                      <li className="flex items-start gap-2.5">
                        <Check className="h-4.5 w-4.5 text-[#86A0EE] shrink-0 mt-0.5" />
                        <span>{t.features.quizzes.b1}</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <Check className="h-4.5 w-4.5 text-[#86A0EE] shrink-0 mt-0.5" />
                        <span>{t.features.quizzes.b2}</span>
                      </li>
                    </ul>
                  </div>

                  <div className="lg:col-span-6">
                    <div className="rounded-2xl bg-[#1B1713] border border-[#3B342B] p-6 space-y-5">
                      <div className="flex flex-wrap gap-2">
                        {t.features.quizzes.themes.map((themeName, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 rounded-lg bg-[#15120E] border border-[#3B342B] text-xs text-[#EFE7D6]"
                          >
                            {themeName}
                          </span>
                        ))}
                      </div>

                      <div className="rounded-xl bg-[#15120E] border border-[#3B342B] p-4 space-y-3">
                        <div className="text-xs text-[#74C49A] font-semibold">
                          {t.features.quizzes.sampleAgreement}
                        </div>
                        <div className="text-sm font-semibold text-[#EFE7D6]">
                          « {t.features.quizzes.sampleQuestion} »
                        </div>
                        <div className="flex items-center gap-2 text-xs text-[#C2B8A6]">
                          <span className="px-1.5 py-0.5 rounded bg-[#EE6446] text-[#15120E] font-bold text-[10px]">
                            A
                          </span>
                          <span className="px-1.5 py-0.5 rounded bg-[#86A0EE] text-[#15120E] font-bold text-[10px]">
                            B
                          </span>
                          <span>{t.features.quizzes.sampleAnswerBoth}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* FEATURE 4: Private Couple Journal */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                  <div className="lg:col-span-6 lg:order-2 space-y-4">
                    <h3 className="font-inter font-light text-[1.8rem] md:text-[2.3rem] text-paper leading-[1.12]">
                      {t.features.journal.title}
                    </h3>
                    <p className="text-base text-felt-gray leading-[1.65]">
                      {t.features.journal.desc}
                    </p>
                    <ul className="space-y-3 pt-2 text-sm text-felt-gray">
                      <li className="flex items-start gap-2.5">
                        <Check className="h-4.5 w-4.5 text-[#74C49A] shrink-0 mt-0.5" />
                        <span>{t.features.journal.b1}</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <Check className="h-4.5 w-4.5 text-[#74C49A] shrink-0 mt-0.5" />
                        <span>{t.features.journal.b2}</span>
                      </li>
                    </ul>
                  </div>

                  <div className="lg:col-span-6 lg:order-1 space-y-4">
                    <div className="rounded-2xl bg-[#1B1713] border border-[#3B342B] p-5 flex items-start gap-4">
                      <div className="w-14 h-14 rounded-xl bg-[#2A251F] border border-[#3B342B] flex items-center justify-center shrink-0">
                        <Camera className="h-6 w-6 text-[#EE6446]" />
                      </div>
                      <div className="space-y-1">
                        <div className="text-base font-semibold text-[#EFE7D6]">
                          {t.features.journal.memory1Title}
                        </div>
                        <p className="text-xs text-[#C2B8A6] leading-relaxed">
                          {t.features.journal.memory1Body}
                        </p>
                        <div className="text-xs text-[#9A9080] pt-1">
                          {t.features.journal.memory1Meta}
                        </div>
                      </div>
                    </div>

                    <div className="rounded-2xl bg-[#1B1713] border border-[#3B342B] p-5 flex items-start gap-4">
                      <div className="w-14 h-14 rounded-xl bg-[#2A251F] border border-[#3B342B] flex items-center justify-center shrink-0">
                        <BookOpen className="h-6 w-6 text-[#86A0EE]" />
                      </div>
                      <div className="space-y-1">
                        <div className="text-base font-semibold text-[#EFE7D6]">
                          {t.features.journal.memory2Title}
                        </div>
                        <p className="text-xs text-[#C2B8A6] leading-relaxed">
                          {t.features.journal.memory2Body}
                        </p>
                        <div className="text-xs text-[#9A9080] pt-1">
                          {t.features.journal.memory2Meta}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── 4. QUICK ONBOARDING ──────────────────────────────────────── */}
          <section className="py-[56px] md:py-[84px] border-b border-white/5 bg-[#14110E]">
            <div className="container mx-auto max-w-[1078px] px-5 md:px-10">
              <div className="max-w-2xl mb-12">
                <h2 className="font-inter font-light text-[2.2rem] md:text-[3rem] leading-[1.02] tracking-tight text-paper">
                  {t.onboarding.title}
                </h2>
              </div>

              <ol className="grid grid-cols-1 md:grid-cols-3 gap-6 list-decimal list-inside">
                {t.onboarding.steps.map((step, idx) => (
                  <li
                    key={idx}
                    className="rounded-2xl bg-[#1B1713] border border-[#3B342B] p-6 space-y-2 marker:text-[#EE6446] marker:font-semibold"
                  >
                    <span className="text-lg font-inter font-medium text-[#EFE7D6]">
                      {step.title}
                    </span>
                    <p className="text-sm text-[#C2B8A6] leading-relaxed pt-1">
                      {step.desc}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          {/* ── 5. PORTFOLIO SPOTLIGHT (Master's in CS Engineering Section) ── */}
          <section id="engineering" className="py-[56px] md:py-[92px] border-b border-white/5">
            <div className="container mx-auto max-w-[1078px] px-5 md:px-10">
              <div className="rounded-3xl bg-[#161310] border border-[#3B342B] p-7 sm:p-10 md:p-12 space-y-10">
                <div className="max-w-3xl space-y-4">
                  <h2 className="font-inter font-light text-[2rem] md:text-[2.8rem] leading-[1.05] tracking-tight text-paper">
                    {t.portfolio.title}
                  </h2>
                  <p className="text-base text-felt-gray leading-[1.65]">
                    {t.portfolio.intro}
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {t.portfolio.cards.map((card, idx) => (
                    <div
                      key={idx}
                      className="rounded-2xl bg-[#1F1B16] border border-[#3B342B] p-6 space-y-3"
                    >
                      <h3 className="text-lg font-inter font-medium text-[#EFE7D6] leading-snug">
                        {card.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#C2B8A6] leading-relaxed">
                        {card.desc}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-[#3B342B] flex flex-wrap items-center gap-2">
                  {t.portfolio.stackPills.map((pill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full bg-[#15120E] border border-[#3B342B] text-xs text-[#C2B8A6]"
                    >
                      {pill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ── 6. FINAL CALL TO ACTION ──────────────────────────────────── */}
          <section className="py-[56px] md:py-[92px] text-center">
            <div className="container mx-auto max-w-[1078px] px-5 md:px-10">
              <div className="w-24 flex flex-col gap-[2px] mx-auto mb-6">
                <div className="h-[5px] bg-[#EE6446]" />
                <div className="h-[3px] bg-[#E3A13A]" />
                <div className="h-[2px] bg-[#86A0EE]" />
              </div>
              <h2 className="font-inter font-light text-[2.4rem] md:text-[3.5rem] leading-[0.95] tracking-tight text-paper max-w-2xl mx-auto">
                {t.cta.title}
              </h2>
              <p className="text-base md:text-lg text-felt-gray max-w-xl mx-auto mt-5 leading-[1.6]">
                {t.cta.desc}
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <a
                  href="https://github.com/yacine20005/Spark-Love/releases/latest"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ghost-pill inline-flex items-center gap-2.5 bg-[#EE6446] text-[#15120E] font-semibold border-[#EE6446] hover:bg-[#f3775c]"
                >
                  <Download className="h-4 w-4" />
                  <span>{t.cta.downloadBtn}</span>
                </a>
                <a
                  href="https://github.com/yacine20005/Spark-Love"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ghost-pill inline-flex items-center gap-2"
                >
                  <FaGithub className="h-4 w-4" />
                  <span>{t.cta.githubBtn}</span>
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
