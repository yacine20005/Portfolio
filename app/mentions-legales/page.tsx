"use client"

import { Footer } from "@/components/sections/footer"
import { Header } from "@/components/sections/header"
import { useLanguage } from "@/components/providers/language-context"

export default function MentionsLegalesPage() {
  const { language } = useLanguage()
  const isFr = language === "fr"

  return (
    <div className="min-h-screen bg-obsidian text-paper">
      <Header />
      <main className="mx-auto max-w-[860px] px-5 pb-24 pt-36 md:px-10 md:pt-44">
        <p className="text-caption text-felt-gray">{isFr ? "Dernière mise à jour : 2 août 2026" : "Last updated: August 2, 2026"}</p>
        <h1 className="mt-4 font-inter text-4xl font-light tracking-tight md:text-6xl">{isFr ? "Mentions légales" : "Legal notice"}</h1>

        <div className="mt-14 space-y-12 text-base leading-7 text-felt-gray">
          <section>
            <h2 className="text-xl font-medium text-paper">{isFr ? "Éditeur du site" : "Website publisher"}</h2>
            <p className="mt-3">{isFr ? "Ce site est édité par Yacine Hamadouche, entrepreneur individuel en micro-entreprise." : "This website is published by Yacine Hamadouche, a sole proprietor operating as a micro-enterprise."}</p>
            <p>Contact : <a className="text-paper underline decoration-white/30 underline-offset-4" href="mailto:ya.hamadouche@gmail.com">ya.hamadouche@gmail.com</a></p>
            <p>{isFr ? "Adresse professionnelle : Noisiel, France (diffusion partielle)." : "Business address: Noisiel, France (partially disclosed)."}</p>
            <p>SIREN : 929 687 648 — SIRET : 929 687 648 00022.</p>
            <p>{isFr ? "TVA intracommunautaire : FR34 929687648 — RNE : inscrit." : "EU VAT number: FR34 929687648 — Registered with the French National Business Register (RNE)."}</p>
            <p>{isFr ? "Activité : développement de sites internet et d’applications mobiles, programmation informatique, conception d’architectures logicielles, conseil en technologies de l’information et maintenance de systèmes informatiques (APE 62.01Z)." : "Business activity: website and mobile-app development, computer programming, software architecture, IT consulting, and information-system maintenance (APE 62.01Z)."}</p>
            <p className="mt-3">{isFr ? "Directeur de la publication : Yacine Hamadouche." : "Publication director: Yacine Hamadouche."}</p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-paper">{isFr ? "Hébergement" : "Hosting"}</h2>
            <p className="mt-3">{isFr ? "Le site est hébergé par Vercel Inc., 440 N Barranca Avenue #4133, Covina, CA 91723, États-Unis." : "The website is hosted by Vercel Inc., 440 N Barranca Avenue #4133, Covina, CA 91723, United States."}</p>
            <p>Contact : <a className="text-paper underline decoration-white/30 underline-offset-4" href="https://vercel.com" target="_blank" rel="noreferrer">vercel.com</a> — <a className="text-paper underline decoration-white/30 underline-offset-4" href="mailto:privacy@vercel.com">privacy@vercel.com</a>.</p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-paper">{isFr ? "Propriété intellectuelle" : "Intellectual property"}</h2>
            <p className="mt-3">{isFr ? "La structure, les textes, les éléments graphiques et le code de ce site sont protégés par le droit de la propriété intellectuelle. Toute reproduction, représentation ou adaptation, totale ou partielle, sans autorisation préalable est interdite, sauf exceptions prévues par la loi." : "This website’s structure, copy, visual elements, and code are protected by intellectual-property laws. Any full or partial reproduction, representation, or adaptation without prior permission is prohibited, except where permitted by law."}</p>
            <p className="mt-3">{isFr ? "Les marques, logos et contenus de tiers restent la propriété de leurs titulaires respectifs." : "Third-party trademarks, logos, and content remain the property of their respective owners."}</p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-paper">{isFr ? "Liens externes" : "External links"}</h2>
            <p className="mt-3">{isFr ? "Ce site peut contenir des liens vers des services tiers. L’éditeur n’exerce aucun contrôle sur leur contenu ni sur leurs pratiques de confidentialité." : "This website may link to third-party services. The publisher has no control over their content or privacy practices."}</p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-paper">{isFr ? "Données personnelles" : "Personal data"}</h2>
            <p className="mt-3">{isFr ? "Les modalités de traitement des données et de gestion des traceurs sont détaillées dans la " : "Data-processing and tracking practices are detailed in the "}<a className="text-paper underline decoration-white/30 underline-offset-4" href="/politique-de-confidentialite">{isFr ? "politique de confidentialité" : "privacy policy"}</a>.</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
