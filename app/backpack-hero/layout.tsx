import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Backpack Hero | Java MVC Roguelike by Yacine",
  description:
    "A desktop Java implementation of the Backpack Hero inventory management roguelike, engineered with clean OOP design, MVC architecture, and the Zen graphics library.",
  keywords: [
    "Backpack Hero",
    "Java",
    "Roguelike",
    "MVC Architecture",
    "OOP Design",
    "Zen Graphics",
    "Game Development",
  ],
  openGraph: {
    title: "Backpack Hero | Strategic Inventory Roguelike in Java",
    description:
      "Desktop Java implementation of Backpack Hero featuring spatial inventory puzzles, turn-based combat, and procedural dungeons.",
    type: "website",
    url: "https://yacine-hamadouche.me/backpack-hero",
    siteName: "Yacine Hamadouche - Portfolio",
  },
  twitter: {
    card: "summary",
    title: "Backpack Hero | Strategic Inventory Roguelike in Java",
    description:
      "Desktop Java implementation of Backpack Hero featuring spatial inventory puzzles, turn-based combat, and procedural dungeons.",
  },
};

export default function BackpackHeroLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
