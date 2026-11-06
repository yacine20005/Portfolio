import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Xur | Real-Time RAG AI Chatbot & Web Widget by Yacine",
  description:
    "Xur is an ultra-lightweight, customizable RAG AI chatbot integrable with a single line of code, powered by FastAPI, Google Gemini, SSE streaming, and Vanilla JS.",
  keywords: [
    "Xur",
    "AI Chatbot",
    "RAG",
    "FastAPI",
    "Google Gemini",
    "Server-Sent Events",
    "Web Widget",
    "esbuild",
  ],
  openGraph: {
    title: "Xur | Real-Time RAG AI Chatbot & Web Widget",
    description:
      "Integrate a real-time RAG AI chatbot on any website with a single line of code. Powered by FastAPI, Gemini 2.5 Flash, and SSE streaming.",
    type: "website",
    url: "https://yacine-hamadouche.me/xur",
    siteName: "Yacine Hamadouche - Portfolio",
  },
  twitter: {
    card: "summary",
    title: "Xur | Real-Time RAG AI Chatbot & Web Widget",
    description:
      "Integrate a real-time RAG AI chatbot on any website with a single line of code.",
  },
};

export default function XurLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
