"use client";

import { Button } from "@/components/ui/button";
import { MdMail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SectionBackground } from "@/components/section-background";
import { contactData } from "@/lib/data";
import { useGsapStaggerOnView } from "@/hooks/use-gsap-animations";

const iconMap: { [key: string]: React.ElementType } = {
    Email: MdMail,
    GitHub: FaGithub,
    LinkedIn: FaLinkedin,
};

export function ContactSection() {
    const scope = useGsapStaggerOnView();
    return (
        <section id="contact" className="container mx-auto py-20 relative" ref={scope}>
            <SectionBackground />
            <div className="space-y-4 mb-12" data-animate>
                <div className="flex items-center" data-animate>
                    <span className="text-primary text-sm mr-2">05</span>
                    <h2 className="text-2xl md:text-3xl font-bold">{contactData.title}</h2>
                </div>
                <p className="text-muted-foreground max-w-2xl" data-animate>
                    {contactData.subtitle}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {contactData.contacts.map((contact, index) => {
                    const Icon = iconMap[contact.name];
                    return (
                        <a
                            key={index}
                            href={contact.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center p-6 border border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-all duration-300 group"
                            data-animate
                        >
                            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                                {Icon && <Icon className="h-7 w-7 text-primary" />}
                            </div>
                            <h3 className="text-lg font-semibold mb-2">{contact.name}</h3>
                            <p className="text-muted-foreground text-center mb-4">
                                {contact.value}
                            </p>
                            <Button
                                variant="default"
                                className="mt-auto bg-gradient-to-r from-primary/90 to-primary hover:from-primary hover:to-primary/90 transition-all duration-300 shadow-md hover:shadow-lg"
                            >
                                {Icon && <Icon className="mr-2 h-4 w-4" />} {contact.buttonText}
                            </Button>
                        </a>
                    );
                })}
            </div>
        </section>
    );
}
