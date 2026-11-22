"use client"

import React, { useCallback, useEffect, useId, useRef, useState } from "react"
import { createPortal } from "react-dom"
import {
  ArrowRight,
  Check,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Download,
  ExternalLink,
  Github,
  Heart,
  Lock,
  RotateCw,
  ShieldCheck,
  Smartphone,
  Sparkles,
  X,
} from "lucide-react"

export interface ApkOnboardingModalProps {
  open: boolean
  onClose: () => void
  downloadUrl: string
  language: "fr" | "en"
}

const GITHUB_REPO_URL = "https://github.com/yacine20005/Spark-Love"

function AndroidIcon({ className = "h-5 w-5 shrink-0" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 576 512"
      width={20}
      height={20}
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M420.55,301.93a24,24,0,1,1,24-24,24,24,0,0,1-24,24m-265.1,0a24,24,0,1,1,24-24,24,24,0,0,1-24,24m273.7-144.48,47.94-83a10,10,0,1,0-17.27-10h0l-48.54,84.07a301.25,301.25,0,0,0-246.56,0L116.18,64.45a10,10,0,1,0-17.27,10h0l47.94,83C64.53,202.22,8.24,285.55,0,384H576c-8.24-98.45-64.54-181.78-146.85-226.55" />
    </svg>
  )
}

interface StepCopy {
  shortLabel: string
  tabLabel: string
  badge: string
  title: string
  description: string
  tipTitle: string
  tipBody: string
  accent: "coral" | "amber" | "forest" | "cobalt"
}

interface ModalCopy {
  headerKicker: string
  title: string
  subtitle: string
  closeLabel: string
  stepsLabel: string
  stepCounter: (current: number, total: number) => string
  prevStep: string
  nextStep: string
  doneCta: string
  downloadCta: string
  downloadAgainCta: string
  downloadStartedTitle: string
  downloadStartedBody: string
  goToStep2: string
  androidOnlyNote: string
  githubLabel: string
  interactiveHint: string
  steps: [StepCopy, StepCopy, StepCopy, StepCopy]
  phone: {
    step1Url: string
    step1WarnTitle: string
    step1WarnBody: string
    step1File: string
    step1Cancel: string
    step1Confirm: string
    step1Done: string
    step1Open: string
    step2Header: string
    step2AppName: string
    step2ToggleLabel: string
    step2Enabled: string
    step2Disabled: string
    step2Foot: string
    step3Title: string
    step3Subtitle: string
    step3Trust: string
    step3Install: string
    step3Installed: string
    step3Open: string
    step4PairLabel: string
    step4Prompt: string
    step4SideALabel: string
    step4SideAText: string
    step4SideBLabel: string
    step4SideBText: string
    step4SideBLocked: string
    step4Flip: string
    step4Seal: string
    step4Stamp: string
  }
}

const COPY: Record<"fr" | "en", ModalCopy> = {
  fr: {
    headerKicker: "Guide d'installation · v1.0.0",
    title: "Installer Spark Love sur Android",
    subtitle: "4 étapes simples pour installer l'application en moins d'une minute.",
    closeLabel: "Fermer le guide d'installation",
    stepsLabel: "Étapes d'installation",
    stepCounter: (current, total) => `Étape ${current} sur ${total}`,
    prevStep: "Précédent",
    nextStep: "Étape suivante",
    doneCta: "C'est compris",
    downloadCta: "Télécharger l'APK Android",
    downloadAgainCta: "Télécharger à nouveau",
    downloadStartedTitle: "Téléchargement ouvert !",
    downloadStartedBody: "Une fois le fichier enregistré, passez à l'étape 2 pour l'installer.",
    goToStep2: "Voir l'étape 2",
    androidOnlyNote: "Android uniquement pour le moment · Gratuit & sans pub",
    githubLabel: "Code source sur GitHub",
    interactiveHint: "Aperçu interactif",
    steps: [
      {
        shortLabel: "APK",
        tabLabel: "Télécharger",
        badge: "Étape 01",
        title: "Téléchargez le fichier .apk",
        description:
          "Appuyez sur le bouton ci-dessous pour ouvrir la dernière version officielle de Spark Love et enregistrer le fichier spark-love.apk sur votre téléphone Android.",
        tipTitle: "Chrome affiche « Le fichier peut être dangereux » ?",
        tipBody:
          "C'est un message standard d'Android pour toute application téléchargée en dehors du Play Store. Appuyez simplement sur « Télécharger quand même ».",
        accent: "coral",
      },
      {
        shortLabel: "Source",
        tabLabel: "Autoriser",
        badge: "Étape 02",
        title: "Autorisez l'installation depuis votre navigateur",
        description:
          "Ouvrez le fichier téléchargé depuis vos notifications ou vos Téléchargements. Android vous proposera d'ouvrir les Paramètres pour activer « Autoriser depuis cette source » (Sources inconnues).",
        tipTitle: "Une autorisation rapide et réversible",
        tipBody:
          "Activez l'interrupteur pour Chrome (ou votre navigateur), puis revenez en arrière. Vous pourrez le désactiver juste après si vous préférez.",
        accent: "amber",
      },
      {
        shortLabel: "Install",
        tabLabel: "Installer",
        badge: "Étape 03",
        title: "Appuyez sur « Installer » puis lancez l'app",
        description:
          "Une fenêtre Android apparaît avec l'icône Spark Love. Touchez « Installer », patientez quelques secondes, puis appuyez sur « Ouvrir ».",
        tipTitle: "Google Play Protect & transparence open-source",
        tipBody:
          "Si Play Protect affiche un avertissement « Appli non reconnue », touchez « Plus de détails » puis « Installer quand même ». Le code source est 100 % public sur GitHub.",
        accent: "forest",
      },
      {
        shortLabel: "Tester",
        tabLabel: "À deux",
        badge: "Étape 04",
        title: "Connectez-vous et testez Spark Love",
        description:
          "Créez un compte sans mot de passe (code e-mail ou Google), puis partagez votre code d'invitation à 6 caractères avec votre partenaire — ou testez avec 2 appareils — pour vivre la révélation Face A / Face B et les Daily Sparks.",
        tipTitle: "Comment profiter du premier test",
        tipBody:
          "Répondez chacun à la question du jour sur votre face de la cassette : la réponse de l'autre reste scellée jusqu'à ce que vous ayez tous les deux validé.",
        accent: "cobalt",
      },
    ],
    phone: {
      step1Url: "github.com/yacine20005/Spark-Love",
      step1WarnTitle: "Le fichier peut être dangereux",
      step1WarnBody: "Voulez-vous vraiment télécharger spark-love.apk ?",
      step1File: "spark-love-v1.0.0.apk",
      step1Cancel: "Annuler",
      step1Confirm: "Télécharger quand même",
      step1Done: "Téléchargement terminé",
      step1Open: "Ouvrir",
      step2Header: "Applis inconnues",
      step2AppName: "Chrome",
      step2ToggleLabel: "Autoriser depuis cette source",
      step2Enabled: "Activé · Prêt à installer",
      step2Disabled: "Appuyez pour activer",
      step2Foot: "Paramètres → Sécurité → Sources inconnues",
      step3Title: "Spark Love",
      step3Subtitle: "Voulez-vous installer cette application ?",
      step3Trust: "Open-source vérifiable sur GitHub",
      step3Install: "Installer",
      step3Installed: "Application installée",
      step3Open: "Ouvrir",
      step4PairLabel: "Code couple",
      step4Prompt: "Un souvenir de nous deux que tu adores ?",
      step4SideALabel: "Toi",
      step4SideAText: "L'averse à Lisbonne et la petite boulangerie.",
      step4SideBLabel: "Clara",
      step4SideBText: "Rentrer à pied après le bar de jazz à 2h.",
      step4SideBLocked: "Scellé jusqu'à vos 2 réponses",
      step4Flip: "Révéler Face B",
      step4Seal: "Masquer Face B",
      step4Stamp: "Révélé à deux",
    },
  },
  en: {
    headerKicker: "Install guide · v1.0.0",
    title: "Install Spark Love on Android",
    subtitle: "4 simple steps to get the app running in under a minute.",
    closeLabel: "Close installation guide",
    stepsLabel: "Installation steps",
    stepCounter: (current, total) => `Step ${current} of ${total}`,
    prevStep: "Previous",
    nextStep: "Next step",
    doneCta: "Got it",
    downloadCta: "Download Android APK",
    downloadAgainCta: "Download again",
    downloadStartedTitle: "Download opened!",
    downloadStartedBody: "Once the file finishes saving, continue to Step 2 to install it.",
    goToStep2: "Go to Step 2",
    androidOnlyNote: "Android only for now · Free & ad-free",
    githubLabel: "Source code on GitHub",
    interactiveHint: "Interactive preview",
    steps: [
      {
        shortLabel: "APK",
        tabLabel: "Download",
        badge: "Step 01",
        title: "Download the .apk file",
        description:
          "Tap the download button below to open the latest official Spark Love release and save spark-love.apk onto your Android phone.",
        tipTitle: "Seeing Chrome's 'File might be harmful' prompt?",
        tipBody:
          "That's a standard Android heads-up for any app downloaded outside Google Play. Simply tap 'Download anyway' to continue.",
        accent: "coral",
      },
      {
        shortLabel: "Allow",
        tabLabel: "Allow",
        badge: "Step 02",
        title: "Allow installs from your browser",
        description:
          "Tap the downloaded file in your notifications or Downloads folder. Android will prompt you to open Settings and switch on 'Allow from this source' (Unknown sources).",
        tipTitle: "Quick, one-time permission",
        tipBody:
          "Flip the toggle on for Chrome (or your browser), then press Back. You can switch it right back off after installing if you want.",
        accent: "amber",
      },
      {
        shortLabel: "Install",
        tabLabel: "Install",
        badge: "Step 03",
        title: "Tap 'Install' and launch Spark Love",
        description:
          "An Android confirmation sheet pops up with the Spark Love icon. Tap 'Install', wait a few seconds, and tap 'Open'.",
        tipTitle: "Google Play Protect & open-source transparency",
        tipBody:
          "If Play Protect shows an unrecognized app notice, tap 'More details' then 'Install anyway'. Spark Love's full source code is public on GitHub.",
        accent: "forest",
      },
      {
        shortLabel: "Test",
        tabLabel: "Pair & Test",
        badge: "Step 04",
        title: "Pair up and try Spark Love",
        description:
          "Sign in password-free with an email code or Google, then share your 6-character invite code with your partner — or test with 2 devices — to experience Side A / Side B flips and Daily Sparks.",
        tipTitle: "Best way to experience it",
        tipBody:
          "Answer today's Daily Spark on your own side of the cassette first: your partner's answer stays sealed until both of you submit.",
        accent: "cobalt",
      },
    ],
    phone: {
      step1Url: "github.com/yacine20005/Spark-Love",
      step1WarnTitle: "File might be harmful",
      step1WarnBody: "Do you want to download spark-love.apk anyway?",
      step1File: "spark-love-v1.0.0.apk",
      step1Cancel: "Cancel",
      step1Confirm: "Download anyway",
      step1Done: "Download complete",
      step1Open: "Open",
      step2Header: "Install unknown apps",
      step2AppName: "Chrome",
      step2ToggleLabel: "Allow from this source",
      step2Enabled: "Enabled · Ready to install",
      step2Disabled: "Tap toggle to allow",
      step2Foot: "Settings → Security → Unknown apps",
      step3Title: "Spark Love",
      step3Subtitle: "Do you want to install this app?",
      step3Trust: "Open-source verified on GitHub",
      step3Install: "Install",
      step3Installed: "App installed",
      step3Open: "Open",
      step4PairLabel: "Pair code",
      step4Prompt: "A memory of us you replay often?",
      step4SideALabel: "You",
      step4SideAText: "Getting caught in the rain in Lisbon.",
      step4SideBLabel: "Clara",
      step4SideBText: "Walking home after the 2 AM jazz bar.",
      step4SideBLocked: "Sealed until both partners answer",
      step4Flip: "Reveal Side B",
      step4Seal: "Hide Side B",
      step4Stamp: "Revealed together",
    },
  },
}

const ACCENT_STYLES: Record<
  StepCopy["accent"],
  {
    pillBg: string
    pillText: string
    tipBorder: string
    tipBg: string
    tipTitle: string
    dotBg: string
  }
> = {
  coral: {
    pillBg: "bg-[#EE6446]/15 border-[#EE6446]/40",
    pillText: "text-[#EE6446]",
    tipBorder: "border-[#EE6446]/35",
    tipBg: "bg-[#EE6446]/10",
    tipTitle: "text-[#F7A38E]",
    dotBg: "bg-[#EE6446]",
  },
  amber: {
    pillBg: "bg-[#E3A13A]/15 border-[#E3A13A]/40",
    pillText: "text-[#E3A13A]",
    tipBorder: "border-[#E3A13A]/35",
    tipBg: "bg-[#E3A13A]/10",
    tipTitle: "text-[#F1C275]",
    dotBg: "bg-[#E3A13A]",
  },
  forest: {
    pillBg: "bg-[#2F6B4F]/25 border-[#2F6B4F]/60",
    pillText: "text-[#8AD9AE]",
    tipBorder: "border-[#2F6B4F]/55",
    tipBg: "bg-[#2F6B4F]/15",
    tipTitle: "text-[#8AD9AE]",
    dotBg: "bg-[#2F6B4F]",
  },
  cobalt: {
    pillBg: "bg-[#2340A0]/25 border-[#2340A0]/60",
    pillText: "text-[#9AB3F5]",
    tipBorder: "border-[#2340A0]/55",
    tipBg: "bg-[#2340A0]/15",
    tipTitle: "text-[#9AB3F5]",
    dotBg: "bg-[#2340A0]",
  },
}

interface PhonePreviewProps {
  step: number
  copy: ModalCopy["phone"]
  interactiveHint: string
  hasStartedDownload: boolean
  onDownloadSimulated: () => void
}

function AndroidPhonePreview({
  step,
  copy,
  interactiveHint,
  hasStartedDownload,
  onDownloadSimulated,
}: PhonePreviewProps) {
  const [previewDownloaded, setPreviewDownloaded] = useState(false)
  const [allowSourceOn, setAllowSourceOn] = useState(false)
  const [previewInstalled, setPreviewInstalled] = useState(false)
  const [sideBRevealed, setSideBRevealed] = useState(true)

  useEffect(() => {
    setPreviewDownloaded(hasStartedDownload)
  }, [hasStartedDownload])

  useEffect(() => {
    if (step !== 1) return
    const reducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches

    if (reducedMotion) {
      setAllowSourceOn(true)
      return
    }

    setAllowSourceOn(false)
    const timer = window.setTimeout(() => {
      setAllowSourceOn(true)
    }, 450)
    return () => window.clearTimeout(timer)
  }, [step])

  return (
    <div className="w-full max-w-[268px] mx-auto select-none">
      {/* Subtle interactive caption */}
      <div className="flex items-center justify-center gap-1.5 mb-2.5 text-[11px] font-medium uppercase tracking-wider text-[#A89E8E]">
        <Smartphone className="h-3.5 w-3.5 shrink-0 text-[#EE6446]" />
        <span>{interactiveHint}</span>
      </div>

      {/* Android Chassis */}
      <div className="rounded-[28px] bg-[#0F0D0A] border-2 border-[#3B342B] p-2.5 shadow-[0_18px_40px_rgba(0,0,0,0.55)]">
        {/* Status bar */}
        <div className="flex items-center justify-between px-3 pb-2 text-[10px] font-medium text-[#C2B8A6]">
          <span>9:41</span>
          <span
            aria-hidden="true"
            className="h-2 w-2 rounded-full bg-[#24201B] ring-1 ring-[#3B342B]"
          />
          <div className="flex items-center gap-1" aria-hidden="true">
            <span className="h-1.5 w-1.5 rounded-full bg-[#74C49A]" />
            <span className="h-2 w-3.5 rounded-[3px] border border-[#C2B8A6]/70 p-[1px] flex items-center">
              <span className="h-full w-2 bg-[#C2B8A6] rounded-[1px]" />
            </span>
          </div>
        </div>

        {/* Screen viewport */}
        <div
          key={step}
          className={`rounded-[20px] border overflow-hidden min-h-[272px] flex flex-col justify-between transition-colors duration-300 motion-reduce:transition-none ${
            step === 3
              ? "bg-[#F1EADB] border-[#D3C8B2] text-[#1B1814]"
              : "bg-[#1B1814] border-[#2E2821] text-[#F9F5EC]"
          }`}
        >
          {/* STEP 1: Chrome Download Sheet */}
          {step === 0 && (
            <div className="flex flex-col justify-between flex-1">
              {/* Browser top bar */}
              <div className="bg-[#15120E] border-b border-[#2E2821] px-3 py-2 flex items-center gap-1.5">
                <Lock className="h-3 w-3 shrink-0 text-[#74C49A]" />
                <span className="text-[10px] text-[#A89E8E] truncate">
                  {copy.step1Url}
                </span>
              </div>

              {/* Dimmed background teaser */}
              <div className="px-3.5 py-3 space-y-2 opacity-60">
                <div className="flex flex-col gap-[2px] w-12">
                  <div className="h-[3px] bg-[#C2381F]" />
                  <div className="h-[2px] bg-[#E3A13A]" />
                  <div className="h-[2px] bg-[#2340A0]" />
                </div>
                <div className="h-2 w-24 rounded bg-[#3B342B]" />
                <div className="h-1.5 w-32 rounded bg-[#2B251F]" />
              </div>

              {/* Chrome bottom warning sheet */}
              <div className="bg-[#24201B] border-t border-[#3B342B] rounded-t-2xl p-3.5 space-y-2.5">
                {!previewDownloaded ? (
                  <>
                    <div className="flex items-start gap-2">
                      <span className="h-6 w-6 rounded-full bg-[#E3A13A]/20 text-[#E3A13A] flex items-center justify-center shrink-0 mt-0.5">
                        <Download className="h-3.5 w-3.5 shrink-0" />
                      </span>
                      <div className="min-w-0">
                        <p className="text-xs font-semibold text-[#F9F5EC] leading-snug">
                          {copy.step1WarnTitle}
                        </p>
                        <p className="text-[11px] text-[#C2B8A6] leading-snug mt-0.5">
                          {copy.step1WarnBody}
                        </p>
                      </div>
                    </div>

                    <div className="rounded-lg bg-[#15120E] border border-[#3B342B] px-2.5 py-1.5 flex items-center gap-2">
                      <AndroidIcon className="h-3.5 w-3.5 shrink-0 text-[#EE6446]" />
                      <span className="text-[10px] font-mono text-[#EFE7D6] truncate">
                        {copy.step1File}
                      </span>
                    </div>

                    <div className="flex items-center justify-end gap-2 pt-0.5">
                      <span className="text-[11px] text-[#A89E8E] px-2 py-1">
                        {copy.step1Cancel}
                      </span>
                      <button
                        type="button"
                        onClick={() => {
                          setPreviewDownloaded(true)
                          onDownloadSimulated()
                        }}
                        className="min-h-[44px] px-3 py-1.5 rounded-full bg-[#EE6446] text-[#15120E] text-[11px] font-bold hover:bg-[#f3775c] transition-colors motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F1EADB]"
                      >
                        {copy.step1Confirm}
                      </button>
                    </div>
                  </>
                ) : (
                  <div className="space-y-2.5 py-1">
                    <div className="flex items-center gap-2 text-[#8AD9AE]">
                      <CheckCircle2 className="h-4 w-4 shrink-0" />
                      <span className="text-xs font-semibold">{copy.step1Done}</span>
                    </div>
                    <div className="rounded-lg bg-[#15120E] border border-[#2F6B4F]/60 pl-2.5 pr-1 py-1 flex items-center justify-between gap-2">
                      <span className="text-[10px] font-mono text-[#EFE7D6] truncate">
                        {copy.step1File}
                      </span>
                      <button
                        type="button"
                        onClick={() => setPreviewDownloaded(false)}
                        className="min-h-[44px] min-w-[44px] text-[11px] font-semibold text-[#EE6446] shrink-0 px-2 rounded-md hover:bg-[#EE6446]/10 inline-flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EE6446]"
                      >
                        {copy.step1Open}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* STEP 2: Android Unknown Sources Toggle */}
          {step === 1 && (
            <div className="flex flex-col justify-between flex-1 p-3.5 space-y-3">
              <div className="flex items-center gap-2 border-b border-[#2E2821] pb-2.5">
                <ChevronLeft className="h-4 w-4 shrink-0 text-[#C2B8A6]" />
                <span className="text-xs font-semibold text-[#F9F5EC] truncate">
                  {copy.step2Header}
                </span>
              </div>

              <div className="space-y-3 flex-1 flex flex-col justify-center">
                {/* Browser identity row */}
                <div className="flex items-center gap-2.5">
                  <div className="h-9 w-9 rounded-xl bg-[#24201B] border border-[#3B342B] flex items-center justify-center shrink-0">
                    <span className="h-5 w-5 rounded-full bg-gradient-to-tr from-[#2340A0] via-[#2F6B4F] to-[#E3A13A] ring-2 ring-[#F9F5EC]/80" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-semibold text-[#F9F5EC]">
                      {copy.step2AppName}
                    </div>
                    <div className="text-[10px] text-[#A89E8E] truncate">
                      {allowSourceOn ? copy.step2Enabled : copy.step2Disabled}
                    </div>
                  </div>
                </div>

                {/* Interactive switch card */}
                <button
                  type="button"
                  role="switch"
                  aria-checked={allowSourceOn}
                  onClick={() => setAllowSourceOn((prev) => !prev)}
                  className={`w-full min-h-[56px] rounded-xl border p-3 flex items-center justify-between gap-2.5 text-left transition-colors duration-300 motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E3A13A] ${
                    allowSourceOn
                      ? "bg-[#2F6B4F]/20 border-[#2F6B4F]"
                      : "bg-[#24201B] border-[#3B342B]"
                  }`}
                >
                  <span className="text-[11px] font-medium text-[#F9F5EC] leading-snug">
                    {copy.step2ToggleLabel}
                  </span>
                  <span
                    aria-hidden="true"
                    className={`relative inline-flex h-6 w-11 shrink-0 items-center rounded-full p-0.5 transition-colors duration-300 motion-reduce:transition-none ${
                      allowSourceOn ? "bg-[#2F6B4F]" : "bg-[#3B342B]"
                    }`}
                  >
                    <span
                      className={`h-5 w-5 rounded-full bg-[#F9F5EC] shadow transition-transform duration-300 motion-reduce:transition-none ${
                        allowSourceOn ? "translate-x-5" : "translate-x-0"
                      }`}
                    />
                  </span>
                </button>
              </div>

              <div className="rounded-lg bg-[#15120E] border border-[#2E2821] px-2.5 py-2 text-[10px] text-[#A89E8E] text-center">
                {copy.step2Foot}
              </div>
            </div>
          )}

          {/* STEP 3: Package Installer Sheet */}
          {step === 2 && (
            <div className="flex flex-col justify-between flex-1 p-3.5">
              <div className="flex-1 flex flex-col items-center justify-center text-center space-y-3">
                {/* Tactile mini J-Card App Icon */}
                <div className="w-14 h-14 rounded-2xl bg-[#F1EADB] border-2 border-[#D3C8B2] overflow-hidden shadow-md flex flex-col">
                  <div className="flex flex-col gap-[1px]">
                    <div className="h-[4px] bg-[#C2381F]" />
                    <div className="h-[3px] bg-[#E3A13A]" />
                    <div className="h-[2px] bg-[#2340A0]" />
                  </div>
                  <div className="flex-1 flex items-center justify-center">
                    <Heart className="h-6 w-6 text-[#C2381F] fill-[#C2381F]" />
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="text-sm font-bold text-[#F9F5EC]">
                    {copy.step3Title}
                  </div>
                  <p className="text-[11px] text-[#C2B8A6] leading-snug">
                    {previewInstalled ? copy.step3Installed : copy.step3Subtitle}
                  </p>
                </div>

                <div className="inline-flex items-center gap-1.5 rounded-full bg-[#2F6B4F]/20 border border-[#2F6B4F]/55 px-2.5 py-1 text-[10px] font-medium text-[#8AD9AE]">
                  <ShieldCheck className="h-3.5 w-3.5 shrink-0" />
                  <span>{copy.step3Trust}</span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setPreviewInstalled((prev) => !prev)}
                className={`w-full min-h-[44px] rounded-xl font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors duration-200 motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F1EADB] ${
                  previewInstalled
                    ? "bg-[#2F6B4F] text-[#F9F5EC] hover:bg-[#387d5d]"
                    : "bg-[#EE6446] text-[#15120E] hover:bg-[#f3775c]"
                }`}
              >
                {previewInstalled ? (
                  <>
                    <Check className="h-4 w-4 shrink-0" />
                    <span>{copy.step3Open}</span>
                  </>
                ) : (
                  <span>{copy.step3Install}</span>
                )}
              </button>
            </div>
          )}

          {/* STEP 4: Spark Love J-Card Side A / Side B Preview */}
          {step === 3 && (
            <div className="flex flex-col justify-between flex-1">
              {/* Signature J-Card 3-stripe ribbon */}
              <div className="flex flex-col gap-[2px]">
                <div className="h-[5px] bg-[#C2381F]" />
                <div className="h-[3px] bg-[#E3A13A]" />
                <div className="h-[2px] bg-[#2340A0]" />
              </div>

              <div className="p-3 space-y-2.5 flex-1 flex flex-col justify-between">
                {/* Pair code header */}
                <div className="flex items-center justify-between gap-2 border-b border-[#D3C8B2] pb-2">
                  <span className="text-[10px] font-semibold uppercase tracking-wide text-[#5C5348]">
                    {copy.step4PairLabel}
                  </span>
                  <span className="font-mono text-[11px] font-bold tracking-widest px-2 py-0.5 rounded bg-[#E7DFCD] text-[#1B1814] border border-[#D3C8B2]">
                    K7M4P9
                  </span>
                </div>

                {/* Daily Spark prompt */}
                <p className="text-xs font-bold leading-snug text-[#1B1814]">
                  « {copy.step4Prompt} »
                </p>

                {/* Side A */}
                <div className="rounded-lg bg-[#F9F5EC] border border-[#D3C8B2] p-2 space-y-1">
                  <div className="flex items-center gap-1.5">
                    <span className="h-4 w-4 rounded bg-[#C2381F] text-[#F9F5EC] font-bold text-[10px] flex items-center justify-center shrink-0">
                      A
                    </span>
                    <span className="text-[10px] font-bold text-[#C2381F]">
                      {copy.step4SideALabel}
                    </span>
                  </div>
                  <p className="text-[11px] text-[#1B1814] leading-snug">
                    {copy.step4SideAText}
                  </p>
                </div>

                {/* Side B (Interactive Flip) */}
                <div className="rounded-lg bg-[#F9F5EC] border border-[#D3C8B2] p-2 space-y-1">
                  <div className="flex items-center justify-between gap-1.5">
                    <div className="flex items-center gap-1.5">
                      <span className="h-4 w-4 rounded bg-[#2340A0] text-[#F9F5EC] font-bold text-[10px] flex items-center justify-center shrink-0">
                        B
                      </span>
                      <span className="text-[10px] font-bold text-[#2340A0]">
                        {copy.step4SideBLabel}
                      </span>
                    </div>
                    {sideBRevealed && (
                      <span className="border border-[#2F6B4F] text-[#2F6B4F] px-1.5 py-0.5 rounded text-[9px] font-bold -rotate-2">
                        {copy.step4Stamp}
                      </span>
                    )}
                  </div>
                  {sideBRevealed ? (
                    <p className="text-[11px] text-[#1B1814] leading-snug">
                      {copy.step4SideBText}
                    </p>
                  ) : (
                    <div className="flex items-center gap-1.5 text-[10px] text-[#6B6155] py-0.5">
                      <Lock className="h-3 w-3 shrink-0" />
                      <span>{copy.step4SideBLocked}</span>
                    </div>
                  )}
                </div>

                <button
                  type="button"
                  onClick={() => setSideBRevealed((prev) => !prev)}
                  className="w-full min-h-[44px] rounded-lg bg-[#1B1814] text-[#F9F5EC] text-[11px] font-semibold flex items-center justify-center gap-1.5 hover:bg-[#2C261F] transition-colors motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C2381F]"
                >
                  <RotateCw className="h-3.5 w-3.5 shrink-0" />
                  <span>{sideBRevealed ? copy.step4Seal : copy.step4Flip}</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Android Home Gesture Bar */}
        <div
          aria-hidden="true"
          className="w-16 h-1 rounded-full bg-[#3B342B] mx-auto mt-2.5"
        />
      </div>
    </div>
  )
}

export function ApkOnboardingModal({
  open,
  onClose,
  downloadUrl,
  language,
}: ApkOnboardingModalProps) {
  const [mounted, setMounted] = useState(false)
  const [activeStep, setActiveStep] = useState(0)
  const [hasStartedDownload, setHasStartedDownload] = useState(false)

  const dialogRef = useRef<HTMLDivElement>(null)
  const closeBtnRef = useRef<HTMLButtonElement>(null)
  const previousFocusRef = useRef<HTMLElement | null>(null)
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([])

  const titleId = useId()
  const descId = useId()
  const tabBaseId = useId()
  const panelId = useId()

  const t = COPY[language]
  const currentStep = t.steps[activeStep]
  const accentStyle = ACCENT_STYLES[currentStep.accent]
  const totalSteps = t.steps.length

  useEffect(() => {
    setMounted(true)
  }, [])

  // Reset modal flow cleanly on close so reopening starts fresh on first paint
  useEffect(() => {
    if (!open) {
      setActiveStep(0)
      setHasStartedDownload(false)
    }
  }, [open])

  // Body + Lenis scroll lock & focus restoration
  useEffect(() => {
    if (!open) return

    previousFocusRef.current =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null

    const htmlEl = document.documentElement
    const bodyEl = document.body
    const wasLenisStopped = htmlEl.classList.contains("lenis-stopped")
    const prevBodyOverflow = bodyEl.style.overflow

    htmlEl.classList.add("lenis-stopped")
    bodyEl.style.overflow = "hidden"

    const focusTimer = window.setTimeout(() => {
      closeBtnRef.current?.focus()
    }, 10)

    return () => {
      window.clearTimeout(focusTimer)
      if (!wasLenisStopped) {
        htmlEl.classList.remove("lenis-stopped")
      }
      bodyEl.style.overflow = prevBodyOverflow
      previousFocusRef.current?.focus()
    }
  }, [open])

  // Escape key & Tab focus trap
  useEffect(() => {
    if (!open) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault()
        onClose()
        return
      }

      if (event.key === "Tab" && dialogRef.current) {
        const focusables = Array.from(
          dialogRef.current.querySelectorAll<HTMLElement>(
            'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
          )
        ).filter((el) => el.offsetParent !== null)

        if (focusables.length === 0) return

        const first = focusables[0]
        const last = focusables[focusables.length - 1]
        const active = document.activeElement

        if (event.shiftKey) {
          if (active === first || !dialogRef.current.contains(active)) {
            event.preventDefault()
            last.focus()
          }
        } else if (active === last || !dialogRef.current.contains(active)) {
          event.preventDefault()
          first.focus()
        }
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [open, onClose])

  const handleTabKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
      if (event.key === "ArrowRight") {
        event.preventDefault()
        const next = (index + 1) % totalSteps
        setActiveStep(next)
        tabRefs.current[next]?.focus()
      } else if (event.key === "ArrowLeft") {
        event.preventDefault()
        const prev = (index - 1 + totalSteps) % totalSteps
        setActiveStep(prev)
        tabRefs.current[prev]?.focus()
      } else if (event.key === "Home") {
        event.preventDefault()
        setActiveStep(0)
        tabRefs.current[0]?.focus()
      } else if (event.key === "End") {
        event.preventDefault()
        setActiveStep(totalSteps - 1)
        tabRefs.current[totalSteps - 1]?.focus()
      }
    },
    [totalSteps]
  )

  const handleDownloadClick = useCallback(() => {
    setHasStartedDownload(true)
  }, [])

  if (!mounted || !open) return null

  return createPortal(
    <div
      className="fixed inset-0 z-[90] flex items-center justify-center p-3 sm:p-5 bg-black/80 backdrop-blur-sm overflow-x-hidden"
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          onClose()
        }
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descId}
        className="relative w-full max-w-[820px] max-h-[90dvh] flex flex-col rounded-2xl bg-[#15120E] text-[#F9F5EC] border border-[#3B342B] shadow-[0_24px_80px_rgba(0,0,0,0.75)] overflow-hidden"
      >
        {/* Signature Analog Cassette J-Card 3-Stripe Ribbon */}
        <div className="flex flex-col gap-[2px] shrink-0" aria-hidden="true">
          <div className="h-[6px] bg-[#C2381F]" />
          <div className="h-[4px] bg-[#E3A13A]" />
          <div className="h-[3px] bg-[#2340A0]" />
        </div>

        {/* Sticky Modal Header */}
        <div className="shrink-0 flex items-start justify-between gap-3 px-4 sm:px-6 pt-4 pb-3.5 border-b border-[#3B342B] bg-[#1B1814]">
          <div className="min-w-0 space-y-1">
            <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#E3A13A]">
              <Sparkles className="h-3.5 w-3.5 shrink-0 text-[#EE6446]" />
              <span className="truncate">{t.headerKicker}</span>
            </div>
            <h2
              id={titleId}
              className="text-lg sm:text-2xl font-semibold tracking-tight text-[#F9F5EC] leading-tight"
            >
              {t.title}
            </h2>
            <p id={descId} className="text-xs sm:text-sm text-[#C2B8A6] leading-snug">
              {t.subtitle}
            </p>
          </div>

          <button
            ref={closeBtnRef}
            type="button"
            onClick={onClose}
            aria-label={t.closeLabel}
            className="min-h-[44px] min-w-[44px] shrink-0 rounded-xl border border-[#3B342B] bg-[#15120E] text-[#F1EADB] flex items-center justify-center hover:bg-[#24201B] hover:border-[#EE6446]/60 transition-colors motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EE6446]"
          >
            <X className="h-5 w-5 shrink-0" />
          </button>
        </div>

        {/* Scrollable Content Region */}
        <div
          data-lenis-prevent
          className="flex-1 min-h-0 overflow-y-auto overflow-x-hidden overscroll-contain touch-pan-y px-4 sm:px-6 py-4 sm:py-5 space-y-5"
        >
          {/* 4-Step Interactive Tab Bar */}
          <div
            role="tablist"
            aria-label={t.stepsLabel}
            className="grid grid-cols-4 gap-1.5 sm:gap-2"
          >
            {t.steps.map((stepItem, index) => {
              const isSelected = index === activeStep
              const isCompleted = index < activeStep
              return (
                <button
                  key={stepItem.badge}
                  ref={(el) => {
                    tabRefs.current[index] = el
                  }}
                  id={`${tabBaseId}-tab-${index}`}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  aria-controls={panelId}
                  tabIndex={isSelected ? 0 : -1}
                  onClick={() => setActiveStep(index)}
                  onKeyDown={(e) => handleTabKeyDown(e, index)}
                  className={`min-h-[44px] min-w-0 rounded-xl border px-2 sm:px-3 py-2 flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 text-center transition-colors duration-200 motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EE6446] ${
                    isSelected
                      ? "bg-[#F1EADB] border-[#D3C8B2] text-[#15120E] font-semibold"
                      : "bg-[#1B1814] border-[#3B342B] text-[#C2B8A6] hover:bg-[#24201B] hover:text-[#F9F5EC]"
                  }`}
                >
                  <span
                    className={`h-5 w-5 rounded-full text-[11px] font-bold flex items-center justify-center shrink-0 ${
                      isSelected
                        ? "bg-[#C2381F] text-[#F9F5EC]"
                        : isCompleted
                          ? "bg-[#2F6B4F] text-[#F9F5EC]"
                          : "bg-[#2A241E] text-[#C2B8A6]"
                    }`}
                  >
                    {isCompleted ? (
                      <Check className="h-3 w-3 shrink-0" />
                    ) : (
                      index + 1
                    )}
                  </span>
                  <span className="text-[11px] sm:text-xs leading-tight truncate max-w-full sm:hidden">
                    {stepItem.shortLabel}
                  </span>
                  <span className="hidden sm:inline text-xs leading-tight truncate">
                    {stepItem.tabLabel}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Active Step Panel: Instructions + Interactive Android Preview */}
          <div
            id={panelId}
            role="tabpanel"
            aria-labelledby={`${tabBaseId}-tab-${activeStep}`}
            className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6 items-center"
          >
            {/* Left Column: Approachable Instructions */}
            <div className="md:col-span-7 min-w-0 space-y-4">
              <div className="flex items-center justify-between gap-2">
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-semibold ${accentStyle.pillBg} ${accentStyle.pillText}`}
                >
                  <span
                    aria-hidden="true"
                    className={`h-2 w-2 rounded-full ${accentStyle.dotBg}`}
                  />
                  <span>{currentStep.badge}</span>
                </span>
                <span className="text-xs font-medium text-[#A89E8E]">
                  {t.stepCounter(activeStep + 1, totalSteps)}
                </span>
              </div>

              <div className="space-y-2.5">
                <h3 className="text-lg sm:text-xl font-semibold text-[#F9F5EC] leading-snug">
                  {currentStep.title}
                </h3>
                <p className="text-sm sm:text-[15px] text-[#D7CEBE] leading-relaxed">
                  {currentStep.description}
                </p>
              </div>

              {/* Reassuring Callout Card */}
              <div
                className={`rounded-xl border p-3.5 sm:p-4 space-y-1.5 ${accentStyle.tipBorder} ${accentStyle.tipBg}`}
              >
                <div className={`text-xs sm:text-sm font-semibold ${accentStyle.tipTitle}`}>
                  {currentStep.tipTitle}
                </div>
                <p className="text-xs sm:text-sm text-[#E5DDD0] leading-relaxed">
                  {currentStep.tipBody}
                </p>
              </div>

              {/* Prev / Next Controls */}
              <div className="flex items-center justify-between gap-3 pt-1">
                <button
                  type="button"
                  onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                  disabled={activeStep === 0}
                  className="min-h-[44px] px-3.5 py-2 rounded-xl border border-[#3B342B] bg-[#1B1814] text-sm font-medium text-[#F1EADB] inline-flex items-center gap-1.5 hover:bg-[#24201B] disabled:opacity-40 disabled:pointer-events-none transition-colors motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EE6446]"
                >
                  <ChevronLeft className="h-4 w-4 shrink-0" />
                  <span>{t.prevStep}</span>
                </button>

                {activeStep < totalSteps - 1 ? (
                  <button
                    type="button"
                    onClick={() =>
                      setActiveStep((prev) => Math.min(totalSteps - 1, prev + 1))
                    }
                    className="min-h-[44px] px-4 py-2 rounded-xl border border-[#D3C8B2] bg-[#F1EADB] text-sm font-semibold text-[#15120E] inline-flex items-center gap-1.5 hover:bg-[#F9F5EC] transition-colors motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EE6446]"
                  >
                    <span>{t.nextStep}</span>
                    <ChevronRight className="h-4 w-4 shrink-0" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={onClose}
                    className="min-h-[44px] px-4 py-2 rounded-xl border border-[#2F6B4F] bg-[#2F6B4F] text-sm font-semibold text-[#F9F5EC] inline-flex items-center gap-1.5 hover:bg-[#387d5d] transition-colors motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8AD9AE]"
                  >
                    <Check className="h-4 w-4 shrink-0" />
                    <span>{t.doneCta}</span>
                  </button>
                )}
              </div>
            </div>

            {/* Right Column: Interactive Android Phone Preview */}
            <div className="md:col-span-5 min-w-0 flex justify-center">
              <AndroidPhonePreview
                step={activeStep}
                copy={t.phone}
                interactiveHint={t.interactiveHint}
                hasStartedDownload={hasStartedDownload}
                onDownloadSimulated={() => setHasStartedDownload(true)}
              />
            </div>
          </div>
        </div>

        {/* Sticky Modal Footer: Feedback + Primary Download CTA + Android Note & GitHub Link */}
        <div className="shrink-0 border-t border-[#3B342B] bg-[#1B1814] px-4 sm:px-6 py-3.5 sm:py-4 space-y-2.5">
          {hasStartedDownload && (
            <div
              role="status"
              aria-live="polite"
              className="rounded-xl border border-[#2F6B4F]/70 bg-[#2F6B4F]/20 px-3.5 py-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5"
            >
              <div className="flex items-start gap-2 min-w-0">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-[#8AD9AE] mt-0.5" />
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm font-semibold text-[#F9F5EC]">
                    {t.downloadStartedTitle}
                  </p>
                  <p className="text-xs text-[#D7CEBE] leading-snug">
                    {t.downloadStartedBody}
                  </p>
                </div>
              </div>
              {activeStep === 0 && (
                <button
                  type="button"
                  onClick={() => setActiveStep(1)}
                  className="min-h-[44px] shrink-0 px-3.5 py-2 rounded-lg bg-[#2F6B4F] text-[#F9F5EC] text-xs font-semibold inline-flex items-center justify-center gap-1.5 hover:bg-[#387d5d] transition-colors motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8AD9AE]"
                >
                  <span>{t.goToStep2}</span>
                  <ArrowRight className="h-4 w-4 shrink-0" />
                </button>
              )}
            </div>
          )}

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-3">
            <a
              href={downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleDownloadClick}
              className="min-h-[48px] w-full sm:w-auto sm:shrink-0 sm:whitespace-nowrap px-5 py-3 rounded-full bg-[#EE6446] text-[#15120E] font-semibold text-sm sm:text-[15px] inline-flex items-center justify-center gap-2.5 hover:bg-[#f3775c] transition-colors motion-reduce:transition-none shadow-[0_6px_20px_rgba(238,100,70,0.28)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F1EADB]"
            >
              {hasStartedDownload ? (
                <Check className="h-5 w-5 shrink-0" />
              ) : (
                <AndroidIcon className="h-5 w-5 shrink-0" />
              )}
              <span>
                {hasStartedDownload ? t.downloadAgainCta : t.downloadCta}
              </span>
              <ExternalLink className="h-4 w-4 shrink-0 opacity-80" />
            </a>

            <div className="min-w-0 flex flex-wrap items-center justify-between sm:justify-end gap-x-4 gap-y-1 text-xs text-[#A89E8E]">
              <span>{t.androidOnlyNote}</span>
              <a
                href={GITHUB_REPO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] inline-flex items-center gap-1.5 text-[#EFE7D6] hover:text-[#EE6446] underline underline-offset-4 decoration-[#3B342B] hover:decoration-[#EE6446] transition-colors motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EE6446] rounded"
              >
                <Github className="h-4 w-4 shrink-0" />
                <span>{t.githubLabel}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  )
}
