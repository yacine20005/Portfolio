import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Nuage | Full-Stack Video Game Platform",
    description:
        "A comprehensive video game management platform with social features, built with Python Flask and PostgreSQL.",
    keywords: [
        "Flask",
        "Python",
        "PostgreSQL",
        "Full-Stack",
        "Video Games",
        "Social Platform",
    ],
    openGraph: {
        title: "Nuage | Full-Stack Video Game Platform",
        description:
            "A comprehensive video game management platform with social features, built with Python Flask and PostgreSQL.",
        type: "website",
    },
};

export default function NuageLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
