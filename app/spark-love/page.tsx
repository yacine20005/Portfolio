"use client"

import { Header } from "@/components/sections/header"
import { Footer } from "@/components/sections/footer"
import { Heart, ShieldCheck, Sparkles, Check } from "lucide-react"
import Link from "next/link"
import { FaGithub } from "react-icons/fa"
import { ShaderAnimation } from "@/components/ui/shader-lines"

export default function SparkLovePage() {
  return (
    <div className="min-h-screen bg-obsidian text-paper overflow-hidden theme-spark-love">
      <Header />
      {/* Ambient Background Glow */}
      <div className="fixed top-0 right-0 w-[50vw] h-[50vw] bg-[radial-gradient(ellipse_at_top_right,rgba(var(--color-accent-rgb),0.08),transparent_70%)] pointer-events-none z-0" />
      <main>
        {/* Hero */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 opacity-40">
            <ShaderAnimation color={[1.0, 0.4, 0.7]} />
          </div>
          <div className="absolute inset-0 bg-obsidian/65" />
          <div className="relative z-10 text-center px-5">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Heart className="h-8 w-8 text-paper/60" aria-hidden="true" />
              <h1 className="font-inter font-normal text-[3rem] sm:text-[5rem] md:text-[6.5rem] leading-[0.85] tracking-tight text-paper">
                Spark Love
              </h1>
            </div>
            <h2 className="text-lg md:text-2xl text-felt-gray font-inter font-normal max-w-2xl mx-auto">
              More Than an App. Your Next Conversation.
            </h2>
            <p className="text-base md:text-lg text-felt-gray max-w-xl mx-auto mt-6 leading-[1.6]">
              Your relationship companion: quizzes, a shared journal, and movie & date matches for meaningful, low‑pressure connection with privacy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <a href="https://github.com/yacine20005/Spark-Love" target="_blank" rel="noopener noreferrer" className="ghost-pill">
                <FaGithub className="h-4 w-4" /> View on GitHub
              </a>
              <a href="#features" className="ghost-pill">Explore Features</a>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="features" className="py-[46px] md:py-[92px]">
          <div className="container mx-auto max-w-[1078px] px-5 md:px-10">
            <h2 className="font-inter font-light text-[2.5rem] md:text-[3.5rem] leading-[0.9] tracking-tight text-paper">
              Where Connection Meets Simplicity
            </h2>
            <p className="text-lg text-felt-gray max-w-3xl mt-6 leading-[1.6]">
              Spark Love isn't just another relationship app. It's a thoughtful companion designed for couples who believe that strong relationships are built through consistent, meaningful moments—not grand gestures alone.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
              {[
                { title: "For Busy Couples", desc: "Designed for partners who want to stay connected despite hectic schedules. Quick, meaningful interactions that fit into your daily rhythm." },
                { title: "For Deeper Understanding", desc: "Perfect for couples who want to move beyond surface-level conversations and discover new layers of each other." },
                { title: "For Long-Distance Love", desc: "Bridge the physical gap with shared experiences. Asynchronous interactions mean you can connect meaningfully regardless of time zones." },
              ].map((item, i) => (
                <div key={i} className="border-l-[1px] border-white/10 pl-5 md:pl-8">
                  <h3 className="text-lg font-inter font-normal text-paper tracking-tight">{item.title}</h3>
                  <p className="text-base text-felt-gray mt-2 leading-[1.6]">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Differentiators */}
            <div className="mt-14 border-t border-white/5 pt-10">
              <h3 className="font-inter font-light text-[2rem] md:text-[2.5rem] leading-[0.95] tracking-tight text-paper mb-8">
                What Makes It Different
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "Privacy First — Your intimate conversations stay between you two.",
                  "No-Pressure Zone — Answer when you want, compare when you're ready.",
                  "Relationship-Focused — Every feature designed to strengthen your bond.",
                  "Thoughtfully Curated — Questions crafted to spark meaningful conversations.",
                  "Grows With You — Content evolves based on your relationship stage.",
                  "Real Connection — Less screen time, more face-to-face conversation.",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="h-4 w-4 mt-0.5 text-felt-gray shrink-0" />
                    <p className="text-base text-felt-gray leading-[1.6]">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        {[
          { id: "quizzes", title: "Go Beyond Small Talk", desc: "Quizzes help you get curious about each other—playful, low-pressure, and designed for real connection.", features: ["Private answers — Share your thoughts without judgment.", "Curated themes — Explore topics that matter to you.", "Clear comparisons — See alignment without pressure."] },
          { id: "journal", title: "Your Private Universe", desc: "A calm, intimate space built just for the two of you. Capture daily moments, gratitude, thoughts, and photos.", features: ["Daily notes and photos — Capture moments and memories effortlessly.", "Real‑time sync — Stay updated across devices seamlessly.", "Clean writing experience — Focus on your thoughts with a distraction-free interface."] },
          { id: "movies", title: "Finally Agree on a Movie", desc: "Swipe recommendations separately—when you both choose yes, it's a match. Your shared watchlist updates automatically.", features: ["Swipe right for 'let's watch' — Effortlessly agree on what to watch.", "Auto‑match when both approve — Instantly add matched movies.", "A shared watchlist — Keep track of movies you're both excited to watch."] },
          { id: "dates", title: "Turn \"What Should We Do?\" into \"Let's Do This!\"", desc: "From cozy nights to spontaneous adventures—find ideas you'll both love, then match and save for later.", features: ["Curated categories — Cozy, outdoor, creative, and budget‑friendly.", "Swipe individually — Match together to find the perfect plan.", "Ready‑to‑go list — A curated list of activities for your next date night."] },
        ].map((section, i) => (
          <section key={i} id={section.id} className="py-[46px] md:py-[92px] border-t border-white/5">
            <div className="container mx-auto max-w-[1078px] px-5 md:px-10">
              <h2 className="font-inter font-light text-[2.5rem] md:text-[3.5rem] leading-[0.9] tracking-tight text-paper">{section.title}</h2>
              <p className="text-lg text-felt-gray max-w-2xl mt-6 leading-[1.6]">{section.desc}</p>
              <div className="mt-8 space-y-5">
                {section.features.map((f, j) => (
                  <div key={j} className="flex items-start gap-3 border-l-[1px] border-white/10 pl-5">
                    <Check className="h-4 w-4 mt-0.5 text-felt-gray shrink-0" />
                    <p className="text-base text-felt-gray leading-[1.6]">{f}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* Privacy */}
        <section className="py-[46px] md:py-[92px] border-t border-white/5">
          <div className="container mx-auto max-w-[1078px] px-5 md:px-10 text-center">
            <ShieldCheck className="h-12 w-12 mx-auto text-paper/50 mb-6" />
            <h2 className="font-inter font-light text-[2.5rem] md:text-[3.5rem] leading-[0.9] tracking-tight text-paper">
              Privacy Isn't an Option. It's a Promise.
            </h2>
            <p className="text-lg text-felt-gray max-w-3xl mx-auto mt-6 leading-[1.6]">
              Your conversations, answers, and journal entries are private to you and your partner. Spark Love is designed for confidentiality and peace of mind.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-[46px] md:py-[92px] border-t border-white/5">
          <div className="container mx-auto max-w-[1078px] px-5 md:px-10 text-center">
            <Sparkles className="h-8 w-8 mx-auto text-paper/40 mb-6" />
            <h2 className="font-inter font-light text-[2.5rem] md:text-[3.5rem] leading-[0.9] tracking-tight text-paper">Ready to Spark Something New?</h2>
            <p className="text-lg text-felt-gray max-w-2xl mx-auto mt-6 leading-[1.6]">Help shape Spark Love by sharing ideas and feature requests on GitHub.</p>
            <div className="mt-8">
              <a href="https://github.com/yacine20005/Spark-Love" target="_blank" rel="noopener noreferrer" className="ghost-pill">
                <FaGithub className="h-4 w-4" /> Star on GitHub
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
