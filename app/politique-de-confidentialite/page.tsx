"use client"

import { Footer } from "@/components/sections/footer"
import { Header } from "@/components/sections/header"
import { useLanguage } from "@/components/providers/language-context"

export default function PolitiqueDeConfidentialitePage() {
  const { language } = useLanguage()
  const isFr = language === "fr"

  return (
    <div className="min-h-screen bg-obsidian text-paper">
      <Header />
      <main className="mx-auto max-w-[860px] px-5 pb-24 pt-36 md:px-10 md:pt-44">
        <p className="text-caption text-felt-gray">{isFr ? "Dernière mise à jour : 2 août 2026" : "Last updated: August 2, 2026"}</p>
        <h1 className="mt-4 font-inter text-4xl font-light tracking-tight md:text-6xl">{isFr ? "Politique de confidentialité" : "Privacy policy"}</h1>

        <div className="mt-14 space-y-12 text-base leading-7 text-felt-gray">
          <section>
            <h2 className="text-xl font-medium text-paper">{isFr ? "Responsable du traitement" : "Data controller"}</h2>
            <p className="mt-3">{isFr ? "Yacine Hamadouche est responsable des traitements décrits ci-dessous. Pour toute question ou pour exercer vos droits, écrivez à " : "Yacine Hamadouche is the controller for the processing described below. For questions or to exercise your rights, email "}<a className="text-paper underline decoration-white/30 underline-offset-4" href="mailto:ya.hamadouche@gmail.com">ya.hamadouche@gmail.com</a>.</p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-paper">{isFr ? "Données traitées et finalités" : "Data processed and purposes"}</h2>
            <p className="mt-3">{isFr ? "Le site ne propose pas de formulaire de création de compte ni de paiement. Lorsqu’un visiteur utilise un lien e-mail, son message est traité par sa messagerie et utilisé uniquement pour répondre à sa demande." : "This website does not provide account-registration forms or payments. When a visitor uses an email link, their message is handled by their email provider and used solely to respond to the request."}</p>
            <p className="mt-3">{isFr ? "Microsoft Clarity traite des données d’utilisation et d’appareil afin de comprendre l’usage du site et d’améliorer son ergonomie. Aucun traitement publicitaire n’est activé par ce site." : "Microsoft Clarity processes usage and device data to understand website use and improve usability. No advertising processing is enabled by this website."}</p>
            <p className="mt-3">{isFr ? "Vercel Analytics fournit des statistiques d’audience agrégées sans cookies. Les données sont utilisées pour mesurer la fréquentation et les performances du site." : "Vercel Analytics provides aggregated, cookieless audience statistics. The data is used to measure website traffic and performance."}</p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-paper">{isFr ? "Base légale et destinataires" : "Legal basis and recipients"}</h2>
            <p className="mt-3">{isFr ? "Les échanges par e-mail reposent sur l’intérêt légitime de répondre aux demandes reçues. Les destinataires sont l’éditeur et ses prestataires techniques : Vercel pour l’hébergement et les statistiques agrégées, Microsoft Clarity pour la mesure d’audience." : "Email exchanges are processed on the legitimate interest of responding to incoming requests. Recipients are the publisher and technical providers: Vercel for hosting and aggregated statistics, and Microsoft Clarity for audience measurement."}</p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-paper">{isFr ? "Assistant conversationnel" : "Conversational assistant"}</h2>
            <p className="mt-3">{isFr ? "Le site propose un assistant conversationnel Xur dans la section contact. Les messages que vous choisissez d’y envoyer sont transmis au service afin de générer une réponse. N’y communiquez pas de données sensibles, confidentielles ou dont vous ne souhaitez pas la transmission à ce service tiers." : "The website provides a Xur conversational assistant in the contact section. Messages you choose to send are transmitted to the service in order to generate a response. Do not submit sensitive or confidential data, or data you do not wish to share with this third-party service."}</p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-paper">{isFr ? "Durées de conservation" : "Retention periods"}</h2>
            <p className="mt-3">{isFr ? "Les messages e-mail sont conservés le temps nécessaire au suivi de la demande, puis supprimés ou archivés selon les obligations applicables. Les durées appliquées par les prestataires tiers relèvent de leurs propres politiques." : "Email messages are retained for the time needed to follow up on a request, then deleted or archived in line with applicable obligations. Retention periods applied by third-party providers are governed by their own policies."}</p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-paper">{isFr ? "Vos droits" : "Your rights"}</h2>
            <p className="mt-3">{isFr ? "Vous pouvez demander l’accès, la rectification, l’effacement, la limitation ou l’opposition au traitement de vos données, ainsi que leur portabilité lorsque celle-ci s’applique. Si vous estimez que vos droits ne sont pas respectés, vous pouvez saisir la CNIL." : "You may request access to, rectification or erasure of your data, restriction of or objection to processing, and data portability where applicable. If you believe your rights have not been respected, you may lodge a complaint with the CNIL."}</p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-paper">{isFr ? "Cookies et traceurs" : "Cookies and trackers"}</h2>
            <p className="mt-3">{isFr ? "Le site utilise le stockage local pour mémoriser la langue choisie. Microsoft Clarity est chargé à l’ouverture du site pour la mesure d’audience. Les politiques de " : "The website uses local storage to remember the selected language. Microsoft Clarity loads when the website opens for audience measurement. The policies of "}<a className="text-paper underline decoration-white/30 underline-offset-4" href="https://privacy.microsoft.com/fr-fr/privacystatement" target="_blank" rel="noreferrer">Microsoft</a>{isFr ? " et de " : " and "}<a className="text-paper underline decoration-white/30 underline-offset-4" href="https://vercel.com/legal/privacy-notice" target="_blank" rel="noreferrer">Vercel</a>{isFr ? " précisent leurs pratiques respectives." : " provide details of their respective practices."}</p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-paper">{isFr ? "Mise à jour" : "Updates"}</h2>
            <p className="mt-3">{isFr ? "Cette politique peut évoluer pour refléter une modification du site ou des obligations applicables. La date de mise à jour figure en haut de cette page." : "This policy may change to reflect updates to the website or applicable obligations. The update date appears at the top of this page."}</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
