"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
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
                    <span className="text-primary text-sm mr-2">06</span>
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
                        <Card
                            key={index}
                            className="group border border-border hover:border-primary/50 transition-all duration-300 hover:scale-[1.02]"
                            data-animate
                        >
                            <CardHeader className="text-center">
                                <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                                    {Icon && <Icon className="h-7 w-7 text-primary" />}
                                </div>
                            </CardHeader>
                            
                            <CardContent className="text-center">
                                <h3 className="text-lg font-semibold mb-2">{contact.name}</h3>
                                <p className="text-muted-foreground mb-6">
                                    {contact.value}
                                </p>
                                <Button
                                    asChild
                                    variant="default"
                                    className="w-full bg-gradient-to-r from-primary/90 to-primary hover:from-primary hover:to-primary/90 transition-all duration-300 shadow-md hover:shadow-lg"
                                >
                                    <a
                                        href={contact.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {Icon && <Icon className="mr-2 h-4 w-4" />} 
                                        {contact.buttonText}
                                    </a>
                                </Button>
                            </CardContent>
                        </Card>
                    );
                })}
            </div>
        </section>
    );
}
