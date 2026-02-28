import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Cobble Coach | AI-Powered League of Legends Discord Bot by Yacine",
    description:
        "Cobble Coach is an advanced Discord bot leveraging the Riot Games API and Google Gemini to deliver automated, data-driven League of Legends coaching directly in your server.",
    keywords: [
        "Cobble Coach",
        "League of Legends",
        "Discord Bot",
        "AI Coach",
        "Riot Games API",
        "Google Gemini",
        "Python",
        "LoL Coaching",
        "Match Analysis",
    ],
    openGraph: {
        title: "Cobble Coach | AI-Powered LoL Discord Bot",
        description:
            "Advanced Discord bot analysing recent matches with the Riot Games API and Gemini Pro to deliver personalised coaching reports.",
        type: "website",
        url: "https://yacine-hamadouche.me/cobble-coach",
        siteName: "Yacine Hamadouche - Portfolio",
        images: [
            {
                url: "/placeholder.jpg",
                width: 1200,
                height: 630,
                alt: "Cobble Coach preview",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Cobble Coach | AI-Powered LoL Discord Bot",
        description:
            "Advanced Discord bot analysing recent matches with the Riot Games API and Gemini Pro to deliver personalised coaching reports.",
        images: ["/placeholder.jpg"],
    },
};

export default function CobbleCoachLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
