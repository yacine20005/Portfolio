"use client"

import { useState } from "react"
import { Header } from "@/components/sections/header"
import { Footer } from "@/components/sections/footer"
import { 
  Heart, 
  ShieldCheck, 
  Sparkles, 
  Check, 
  Smartphone, 
  Database, 
  Lock, 
  RefreshCw, 
  Film, 
  MessageSquare, 
  Compass, 
  CheckCircle2, 
  ChevronRight, 
  X,
  Code,
  ArrowRight,
  Sparkle,
  Calendar,
  Image as ImageIcon
} from "lucide-react"
import { FaGithub } from "react-icons/fa"
import { ShaderAnimation } from "@/components/ui/shader-lines"
import { ProjectPreloader } from "@/components/ui/project-preloader"

const SIMULATED_MOVIES = [
  {
    id: "m1",
    title: "La La Land",
    year: "2016",
    genre: "Romance / Musical",
    desc: "A jazz pianist and an aspiring actress fall in love while pursuing their dreams in Los Angeles.",
    gradient: "from-amber-500/20 to-pink-500/20",
    icon: "🎵",
    accent: "rgb(251, 191, 36)",
    isMatch: true
  },
  {
    id: "m2",
    title: "Interstellar",
    year: "2014",
    genre: "Sci-Fi / Space",
    desc: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    gradient: "from-blue-600/20 to-purple-600/20",
    icon: "🚀",
    accent: "rgb(59, 130, 246)",
    isMatch: true
  },
  {
    id: "m3",
    title: "The Notebook",
    year: "2004",
    genre: "Romance / Drama",
    desc: "A poor yet passionate young man falls in love with a rich young woman, giving her a sense of freedom.",
    gradient: "from-rose-500/20 to-red-500/20",
    icon: "📖",
    accent: "rgb(244, 63, 94)",
    isMatch: false
  },
  {
    id: "m4",
    title: "Spirited Away",
    year: "2001",
    genre: "Fantasy / Anime",
    desc: "A young girl wanders into a world ruled by gods, spirits, and magic, and must save her parents.",
    gradient: "from-teal-500/20 to-emerald-500/20",
    icon: "🐉",
    accent: "rgb(20, 184, 166)",
    isMatch: true
  }
]

const SIMULATED_QUIZ = [
  {
    id: "q1",
    question: "What is your ideal weekend activity?",
    options: [
      { text: "🚗 Road trip to a cozy village", isCorrect: false },
      { text: "☕ Board game cafe & reading side‑by‑side", isCorrect: true },
      { text: "🍿 Binging a new show under blankets", isCorrect: false },
      { text: "🧗 Rock climbing or outdoor hiking", isCorrect: false }
    ],
    partnerAnswerIndex: 1,
    sparkMatch: "Yacine also loves board games! You both selected this option. Time to plan a cozy date at your local cafe.",
    sparkDiff: "You chose this activity, but Yacine chose 'Board game cafe & reading side‑by‑side'. Plan a day that starts with your choice and ends with a cozy reading session!"
  },
  {
    id: "q2",
    question: "Which love language speaks to you the most?",
    options: [
      { text: "💬 Words of Affirmation", isCorrect: false },
      { text: "⏳ Quality Time", isCorrect: true },
      { text: "🛠️ Acts of Service", isCorrect: false },
      { text: "🎁 Receiving Gifts", isCorrect: false }
    ],
    partnerAnswerIndex: 1,
    sparkMatch: "Quality Time is your shared love language. Focus on setting aside dedicated, distraction-free moments this week.",
    sparkDiff: "You selected this language, while Yacine chose 'Quality Time'. Plan a conversation starter to discuss what makes each of you feel most appreciated."
  },
  {
    id: "q3",
    question: "If we won the lottery tomorrow, what is the first thing we do?",
    options: [
      { text: "🏠 Buy a quiet house in the countryside", isCorrect: false },
      { text: "✈️ Travel the world for a full year", isCorrect: true },
      { text: "💰 Invest/save everything for the future", isCorrect: false },
      { text: "🎮 Build a massive custom gaming room", isCorrect: false }
    ],
    partnerAnswerIndex: 1,
    sparkMatch: "You both want to travel! Start mapping out a bucket list of destinations you both want to visit together.",
    sparkDiff: "You chose this option, while Yacine chose 'Travel the world'. Talk about your travel dreams—where would you go first?"
  }
]

export default function SparkLovePage() {
  const [loading, setLoading] = useState(true)
  const [contentVisible, setContentVisible] = useState(false)
  const [activeTab, setActiveTab] = useState<"swipe" | "quiz">("swipe")

  // Movie match states
  const [movieIndex, setMovieIndex] = useState(0)
  const [movieStatus, setMovieStatus] = useState<"idle" | "evaluating" | "matched" | "skipped">("idle")

  // Quiz states
  const [quizIndex, setQuizIndex] = useState(0)
  const [quizSelected, setQuizSelected] = useState<number | null>(null)
  const [quizStatus, setQuizStatus] = useState<"idle" | "revealed">("idle")

  const currentMovie = SIMULATED_MOVIES[movieIndex % SIMULATED_MOVIES.length]
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
      // Simulate real-time matching query delay
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
                More Than an App. Your Next Conversation.
              </h2>
              <p className="text-base md:text-lg text-felt-gray max-w-xl mx-auto mt-6 leading-[1.6]">
                Spark Love is a cozy, interactive relationship companion app for couples. Bridge schedules, express gratitude, align your movie choices, and plan dates in a secure and private shared space.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
                <a href="https://github.com/yacine20005/Spark-Love" target="_blank" rel="noopener noreferrer" className="ghost-pill">
                  <FaGithub className="h-4 w-4" /> View Source
                </a>
                <a href="#simulator" className="ghost-pill">Launch Live Simulator</a>
              </div>
            </div>
          </section>

          {/* Key Platform Value Props Dashboard */}
          <section className="py-8 bg-white/[0.01] border-b border-white/5">
            <div className="container mx-auto max-w-[1078px] px-5 md:px-10">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
                {[
                  { label: "CONNECTION MODEL", value: "Playful & Low‑Pressure", icon: Heart },
                  { label: "REAL‑TIME INTERACTIVE", value: "Instant Match Sync", icon: Sparkles },
                  { label: "PRIVACY ASSURANCE", value: "Strictly Couple-Isolated", icon: Lock },
                  { label: "OFFLINE COMPATIBILITY", value: "Works Anywhere, Syncs Later", icon: RefreshCw },
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
                  Interactive Mockup Simulator
                </h2>
                <p className="text-base md:text-lg text-felt-gray mt-4 leading-[1.6]">
                  Test-drive a simulated mockup of the mobile experience directly in your browser. Switch tabs inside the mock iPhone shell below to see how Spark Love features connect you and your partner.
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
                        <span className="text-[9px] bg-pink-500/20 text-pink-300 px-2 py-0.5 rounded-full font-mono font-medium uppercase tracking-[0.05em]">Partner Linked</span>
                      </div>
                      
                      {/* Tab Switcher inside App */}
                      <div className="grid grid-cols-2 bg-[#1C1C21] p-0.5 rounded-lg text-[10px] font-medium font-inter mt-1.5 text-center">
                        <button 
                          onClick={() => { setActiveTab("swipe"); setMovieStatus("idle"); }}
                          className={`py-1.5 rounded-md transition-all ${activeTab === "swipe" ? "bg-pink-500 text-white shadow-sm" : "text-white/40 hover:text-white"}`}
                        >
                          Movie Matcher
                        </button>
                        <button 
                          onClick={() => { setActiveTab("quiz"); setQuizStatus("idle"); setQuizSelected(null); }}
                          className={`py-1.5 rounded-md transition-all ${activeTab === "quiz" ? "bg-pink-500 text-white shadow-sm" : "text-white/40 hover:text-white"}`}
                        >
                          Quiz Comparer
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
                              <h3 className="font-inter font-normal text-lg text-pink-300">It's a Match! 🎉</h3>
                              <p className="text-[10px] text-felt-gray mt-2 max-w-[200px] leading-relaxed">
                                You and Yacine both swiped right on <strong>{currentMovie.title}</strong>!
                              </p>
                              <button 
                                onClick={nextMovieMatch}
                                className="mt-4 px-3 py-1.5 bg-pink-500 hover:bg-pink-600 text-white text-[10px] rounded-md font-medium tracking-tight shadow-md transition-colors"
                              >
                                Continue Swiping
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
                            <div className="text-[8px] text-white/40 font-mono tracking-widest uppercase mb-1">Question {quizIndex % SIMULATED_QUIZ.length + 1} of 3</div>
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
                                        {isSelected && <span className="text-pink-300">You</span>}
                                        {isPartnerAnswer && <span className="text-white/60">Yacine</span>}
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
                                <span className="text-[7px] font-mono tracking-widest text-pink-300 uppercase block font-semibold mb-0.5">Conversation Spark</span>
                                <p className="text-[8px] text-felt-gray leading-normal">
                                  {quizSelected === currentQuiz.partnerAnswerIndex ? currentQuiz.sparkMatch : currentQuiz.sparkDiff}
                                </p>
                                <button 
                                  onClick={nextQuizQuestion}
                                  className="mt-2 text-[8px] text-pink-300 hover:text-pink-200 inline-flex items-center gap-1 font-medium transition-colors"
                                >
                                  Next Question <ChevronRight className="h-2 w-2" />
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
                        Movie Matching Engine
                      </h3>
                      <p className="text-base text-felt-gray leading-[1.6]">
                        The Movie Matcher solves the tedious "what should we watch tonight?" debate. By swiping separately, couples build a shared catalog without the pressure of negotiation.
                      </p>


                      <ul className="space-y-3 mt-4">
                        {[
                          "Double-blind inputs — Likes are kept fully secret until a match occurs, preventing copy-cat votes.",
                          "Local memory storage — Keeps matched movie logs stored locally for quick offline planning."
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
                        Double‑Blind Quizzes
                      </h3>
                      <p className="text-base text-felt-gray leading-[1.6]">
                        Quizzes are structured to trigger healthy conversations. Rather than declaring answers as correct or incorrect, Spark focuses on discovering alignments and discussing differences.
                      </p>

                      <ul className="space-y-3 mt-4">
                        {[
                          "Double-blind mechanism — Safely gates inputs on server before mutual completion status is reached.",
                          "Dialog seeds — Converts raw answer disparities into engaging conversation starters."
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
                  Spark Features in Action
                </h2>
              </div>

              <div className="space-y-24">
                
                {/* Feature 1 */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                  <div className="lg:col-span-7 space-y-4">
                    <h3 className="font-inter font-light text-[1.8rem] md:text-[2.2rem] text-paper leading-[1.1]">
                      Uncover new layers of your connection
                    </h3>
                    <p className="text-base text-felt-gray leading-[1.6]">
                      Move past basic small talk. Discover each other's hidden preferences, future goals, and daily rhythms through playful, low-pressure question packs. The cards format makes it feel like a casual game rather than a relationship chore.
                    </p>

                  </div>
                  <div className="lg:col-span-5 bg-white/[0.01] border border-white/5 rounded-2xl p-6 lg:p-8">
                    <span className="text-[10px] font-mono text-white/40 block tracking-widest uppercase mb-4">Quiz Packs Selections</span>
                    <div className="space-y-3 font-mono text-xs">
                      {[
                        { title: "🧩 Core Values", desc: "Life goals, family visions, and financial alignments." },
                        { title: "❤️ Love Languages", desc: "How you give and receive appreciation." },
                        { title: "🎬 Pop-Culture Vibe", desc: "Fun rankings of music, books, and vacation styles." },
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
                      Your couple's timeline of memories
                    </h3>
                    <p className="text-base text-felt-gray leading-[1.6]">
                      A digital scrap-book built exclusively for the two of you. Write sweet daily notes, share logs of gratitude, and upload photos to a secure, private timeline. It acts as an intimate, distraction-free bubble away from mainstream social media.
                    </p>

                  </div>
                  <div className="lg:col-span-5 lg:order-1 bg-white/[0.01] border border-white/5 rounded-2xl p-6 lg:p-8">
                    <span className="text-[10px] font-mono text-white/40 block tracking-widest uppercase mb-4">Memory Timeline</span>
                    <div className="space-y-3 font-mono text-xs">
                      {[
                        { date: "Yesterday, 8:15 PM", title: "Sunday Date Night 🍕", desc: "Finally tried the pizza place down the street. The truffle pizza was incredible!" },
                        { date: "3 Days Ago, 9:30 AM", title: "Morning gratitude ☕", desc: "Thanks for making coffee this morning when I overslept!" },
                      ].map((item, idx) => (
                        <div key={idx} className="bg-[#141417] p-3 rounded-lg border border-white/5">
                          <div className="flex justify-between items-center text-[9px] text-white/40">
                            <span>{item.date}</span>
                            <span className="flex items-center gap-1"><ImageIcon className="h-3 w-3 text-pink-400" /> Photo attached</span>
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
                      End the "what should we do?" cycle
                    </h3>
                    <p className="text-base text-felt-gray leading-[1.6]">
                      Plan date nights with a dedicated swipe interface. Swipe right on curated activities and creative ideas, filter by budget‑friendliness or energy levels, and get matched options that you'll both genuinely enjoy.
                    </p>

                  </div>
                  <div className="lg:col-span-5 bg-white/[0.01] border border-white/5 rounded-2xl p-6 lg:p-8">
                    <span className="text-[10px] font-mono text-white/40 block tracking-widest uppercase mb-4">Date Match Categories</span>
                    <div className="grid grid-cols-2 gap-3 text-center text-xs font-mono text-white/60">
                      <div className="p-3 bg-[#141417] border border-white/5 rounded-xl flex flex-col items-center gap-1">
                        <span>🏡 Cozy Night In</span>
                        <span className="text-[8px] text-white/30">Low energy / Low budget</span>
                      </div>
                      <div className="p-3 bg-[#141417] border border-white/5 rounded-xl flex flex-col items-center gap-1">
                        <span>🌳 Outdoor Adventure</span>
                        <span className="text-[8px] text-white/30">High energy / Medium budget</span>
                      </div>
                      <div className="p-3 bg-[#141417] border border-white/5 rounded-xl flex flex-col items-center gap-1">
                        <span>🎨 Creative & Crafty</span>
                        <span className="text-[8px] text-white/30">Medium energy / Fun hands‑on</span>
                      </div>
                      <div className="p-3 bg-[#141417] border border-white/5 rounded-xl flex flex-col items-center gap-1">
                        <span>🍕 Foodie Discovery</span>
                        <span className="text-[8px] text-white/30">Medium energy / Tasty eats</span>
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
                    Under the hood: reliable & secure
                  </h2>
                  <p className="text-base text-felt-gray leading-[1.6]">
                    A great user experience relies on reliable engineering. Spark Love balances a fluid front‑end with an offline-first sync layer and strict, couple-isolated security.
                  </p>
                  
                  <div className="space-y-4">
                    {[
                      { title: "Realtime Synchronization", desc: "No manual refreshing required. Your shared workspace channels update instantly when your partner edits a journal post or matches a movie." },
                      { title: "Offline-First Support", desc: "No network? No problem. The app writes actions to a secure local SQLite database first, then automatically synchronizes when connection is restored." },
                      { title: "Isolated Data Security", desc: "Strict database rules ensure only you and your partner have keys to access your couple ID data, providing complete confidentiality." }
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
                      <span>SYNC CYCLE MODEL</span>
                      <span className="text-pink-400">Offline-First Flow</span>
                    </div>

                    <div className="space-y-4">
                      {/* Node 1 */}
                      <div className="border border-white/15 bg-white/[0.02] p-3 rounded-lg flex items-center justify-between">
                        <div>
                          <div className="text-pink-300 font-semibold">Your Device (Client)</div>
                          <div className="text-[10px] opacity-60">Instant responsive UI updates</div>
                        </div>
                        <span className="text-[10px] bg-pink-500/20 text-pink-300 px-2 py-0.5 rounded font-bold">STATE</span>
                      </div>

                      {/* Bridge */}
                      <div className="flex justify-around items-center px-8 text-white/30 text-base">
                        <span>│ saves locally offline</span>
                        <span>▲ syncs online via WS</span>
                      </div>

                      {/* Node 2 */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="border border-white/15 bg-white/[0.01] p-3 rounded-lg text-center">
                          <div className="text-paper">SQLite Cache</div>
                          <div className="text-[9px] opacity-40 mt-1">Saves state immediately</div>
                        </div>
                        <div className="border border-white/15 bg-white/[0.01] p-3 rounded-lg text-center">
                          <div className="text-paper">Cloud Database</div>
                          <div className="text-[9px] opacity-40 mt-1">Real-time sync broker</div>
                        </div>
                      </div>

                      {/* Bridge */}
                      <div className="flex justify-center text-white/30">
                        <span>▼ Automatically pushes to</span>
                      </div>

                      {/* Node 3 */}
                      <div className="border border-white/15 bg-white/[0.02] p-3 rounded-lg flex items-center justify-between">
                        <div>
                          <div className="text-pink-300 font-semibold">Partner's Device</div>
                          <div className="text-[10px] opacity-60">Updates timeline or triggers match cards</div>
                        </div>
                        <span className="text-[10px] bg-white/10 text-white px-2 py-0.5 rounded font-bold font-mono">SYNC</span>
                      </div>
                    </div>

                  </div>

                </div>

              </div>
            </div>
          </section>

          {/* Privacy Assurances */}
          <section className="py-[46px] md:py-[92px] border-b border-white/5 text-center">
            <div className="container mx-auto max-w-[1078px] px-5 md:px-10">
              <div className="w-16 h-16 rounded-full bg-white/[0.02] border border-white/10 flex items-center justify-center mx-auto mb-6 shadow-[0_0_20px_rgba(255,255,255,0.03)]">
                <ShieldCheck className="h-8 w-8 text-pink-400" />
              </div>
              <h2 className="font-inter font-light text-[2.5rem] md:text-[3.5rem] leading-[0.9] tracking-tight text-paper">
                Privacy Isn't an Option. It's a Promise.
              </h2>
              <p className="text-base md:text-lg text-felt-gray max-w-3xl mx-auto mt-6 leading-[1.6]">
                Spark Love is designed for complete relationship security. Every conversation, answer, and shared journal entry is strictly couple‑isolated. We do not sell or track your data. It remains private, secure, and accessible only to you and your partner.
              </p>
            </div>
          </section>

          {/* Monitization Pack roadmap */}
          <section className="py-[46px] md:py-[92px] border-b border-white/5 bg-white/[0.005]">
            <div className="container mx-auto max-w-[1078px] px-5 md:px-10">
              <div className="text-center max-w-2xl mx-auto mb-14">
                <h2 className="font-inter font-light text-[2.5rem] md:text-[3.5rem] leading-[0.9] tracking-tight text-paper">
                  Freemium Model Details
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[800px] mx-auto">
                {[
                  {
                    title: "Free Edition",
                    desc: "Full access to core connection features with balanced daily limitations.",
                    bullets: [
                      "Basic Daily Quizzes (Rechargeable lives system)",
                      "Full Shared Journal & real-time sync",
                      "Standard Swipe Matching (Movie & date pools)",
                      "Supported by subtle, unobtrusive advertisements"
                    ]
                  },
                  {
                    title: "Premium Edition",
                    desc: "An ad-free experience with advanced communication tools.",
                    bullets: [
                      "Unlimited Daily Quizzes (Unlimited lives)",
                      "Premium Curated Date Activity packs",
                      "Exclusive Relationship Statistics & charts",
                      "Ad-free interface with custom couple themes"
                    ],
                    accent: true
                  }
                ].map((tier, idx) => (
                  <div 
                    key={idx} 
                    className={`rounded-2xl p-6 lg:p-8 flex flex-col justify-between border ${
                      tier.accent 
                        ? "bg-[#1C1C21] border-pink-500/30 shadow-[0_0_20px_rgba(244,114,182,0.05)]" 
                        : "bg-white/[0.01] border-white/5"
                    }`}
                  >
                    <div>
                      <div className="flex justify-between items-center mb-4">
                        <h4 className="text-lg font-inter text-paper font-semibold">{tier.title}</h4>
                        {tier.accent && <span className="text-[8px] bg-pink-500/20 text-pink-300 px-2 py-0.5 rounded-full font-mono uppercase font-semibold">RECOMMENDED</span>}
                      </div>
                      <p className="text-sm text-felt-gray mb-6 leading-relaxed">{tier.desc}</p>
                      <ul className="space-y-3">
                        {tier.bullets.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2 text-xs text-felt-gray">
                            <Check className="h-4 w-4 text-pink-400 shrink-0 mt-0.5" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA & GitHub Contributions */}
          <section className="py-[46px] md:py-[92px]">
            <div className="container mx-auto max-w-[1078px] px-5 md:px-10 text-center">
              <Sparkles className="h-8 w-8 mx-auto text-pink-400 mb-6" />
              <h2 className="font-inter font-light text-[2.5rem] md:text-[3.5rem] leading-[0.9] tracking-tight text-paper">
                Ready to Spark Connection?
              </h2>
              <p className="text-base md:text-lg text-felt-gray max-w-2xl mx-auto mt-6 leading-[1.6]">
                Spark Love is an open-source relationship companion. Explore the complete TypeScript codebase, submit feature requests, or star the project on GitHub to support its active development.
              </p>
              <div className="mt-8 flex justify-center gap-4">
                <a href="https://github.com/yacine20005/Spark-Love" target="_blank" rel="noopener noreferrer" className="ghost-pill">
                  <FaGithub className="h-4 w-4" /> Star on GitHub
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
