"use client";

import Link from "next/link";
import { MdMail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { footerData } from "@/lib/data";

const iconMap: { [key: string]: React.ElementType } = {
    Email: MdMail,
    GitHub: FaGithub,
    LinkedIn: FaLinkedin,
};

export function Footer() {
    return (
        <footer className="border-t border-border py-8">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <Link
                            href="/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xl font-mono text-primary hover:text-primary/80 transition-colors"
                        >
                            {footerData.name}
                        </Link>
                        <p className="text-sm text-muted-foreground mt-1">
                            {footerData.title}
                        </p>
                    </div>
                    <div className="flex items-center space-x-4">
                        {footerData.socials.map((social, index) => {
                            const Icon = iconMap[social.name];
                            return (
                                <Link
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                >
                                    {Icon && <Icon className="h-5 w-5" />}
                                    <span className="sr-only">{social.name}</span>
                                </Link>
                            );
                        })}
                    </div>
                </div>
                <div className="mt-8 text-center text-sm text-muted-foreground">
                    <p>{footerData.copyright.replace("{new Date().getFullYear()}", new Date().getFullYear().toString())}</p>
                </div>
            </div>
        </footer>
    );
}
