import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spark Love | Quizzes, Shared Journal & Date Night, for Two",
  description:
    "Deepen your bond with playful quizzes, a shared journal, and activities designed for two. Private by default, built for trust.",
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
      "Playful quizzes, a private shared journal, and activities for two—built for trust and connection.",
    type: "website",
    url: "https://yacine-hamadouche.me/spark-love",
    siteName: "Yacine Hamadouche - Portfolio",
    images: [
      {
        url: "/placeholder.jpg",
        width: 1200,
        height: 630,
        alt: "Spark Love preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Spark Love | Your Next Conversation",
    description:
      "Playful quizzes, a private shared journal, and activities for two—built for trust and connection.",
    images: ["/placeholder.jpg"],
  },
};

export default function SparkLoveLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
