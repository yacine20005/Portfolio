import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spark Love | Double-Blind Quizzes & Date Matcher",
  description:
    "Spark Love is a private app for two on iPhone, Web (PWA), and Android built with Expo SDK 58 and Supabase. Answer daily sparks and 100 quiz questions on your own, then flip the tape to compare.",
  keywords: [
    "Spark Love",
    "couples app",
    "double-blind quizzes",
    "shared journal",
    "movie matcher",
    "PWA",
    "iOS",
    "Android",
    "Expo",
    "React Native",
    "Supabase RLS",
  ],
  openGraph: {
    title: "Spark Love | Side A, Side B — Flip the Tape",
    description:
      "Answer on your own, then flip the tape and hear theirs. Daily sparks, 100 double-blind quiz questions, movie & date swipes, and a private shared journal — on iPhone, Web (PWA) & Android.",
    type: "website",
    url: "https://yacine-hamadouche.me/spark-love",
    siteName: "Yacine Hamadouche - Portfolio",
  },
  twitter: {
    card: "summary",
    title: "Spark Love | Side A, Side B — Flip the Tape",
    description:
      "Answer on your own, then flip the tape and hear theirs. Available on iPhone & Web (PWA) and Android APK.",
  },
};

export default function SparkLoveLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
