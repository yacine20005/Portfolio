import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spark Love | Quizzes, Shared Journal & Date Night, for Two",
  description:
    "Spark Love is a couples app with shared quizzes, a private journal, and date-planning tools.",
  keywords: [
    "Spark Love",
    "couples app",
    "relationship quizzes",
    "shared journal",
    "movie compatibility",
    "date ideas",
  ],
  openGraph: {
    title: "Spark Love | Your Next Conversation",
    description:
      "A couples app with playful quizzes, a private shared journal, and activities for two.",
    type: "website",
    url: "https://yacine-hamadouche.me/spark-love",
    siteName: "Yacine Hamadouche - Portfolio",
  },
  twitter: {
    card: "summary",
    title: "Spark Love | Your Next Conversation",
    description:
      "A couples app with playful quizzes, a private shared journal, and activities for two.",
  },
};

export default function SparkLoveLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
