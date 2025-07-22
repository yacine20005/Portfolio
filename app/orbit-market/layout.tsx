import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Orbit Market | Multi-Game Vendor Tracker by Yacine",
  description:
    "Orbit Market is a cross-platform mobile application for Destiny 2 and Warframe players. Track vendor inventories, world states, and game information in real-time.",
  keywords: [
    "Orbit Market",
    "Destiny 2",
    "Warframe",
    "Mobile App",
    "React Native",
    "FastAPI",
    "Game Tracker",
    "Vendor Tracker",
  ],
  icons: {
    icon: "/orbit-market-icon.png",
    shortcut: "/orbit-market-icon.png",
    apple: "/orbit-market-adaptive-icon.png",
  },
  openGraph: {
    title: "Orbit Market | Multi-Game Vendor Tracker",
    description:
      "Cross-platform mobile app for tracking Destiny 2 and Warframe vendor inventories and world states.",
    type: "website",
    url: "https://yacine-hamadouche.me/orbit-market",
    siteName: "Yacine Hamadouche - Portfolio",
    images: [
      {
        url: "/orbit-market-adaptive-icon.png",
        width: 512,
        height: 512,
        alt: "Orbit Market App Icon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Orbit Market | Multi-Game Vendor Tracker",
    description:
      "Cross-platform mobile app for tracking Destiny 2 and Warframe vendor inventories and world states.",
    images: ["/orbit-market-adaptive-icon.png"],
  },
};

export default function OrbitMarketLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
