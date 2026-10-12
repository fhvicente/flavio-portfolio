"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { email, socials } from "@/lib/socials";
import { useTranslation } from "@/hooks/useTranslation";

export function Contact() {
    const { t } = useTranslation();

    return (
        <section id="contact" className="py-20 scroll-mt-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold mb-10 text-center">{t("contactTitle")}</h2>
                <Card data-anim="contact" className="max-w-2xl mx-auto">
                    <CardContent className="p-6">
                        <div className="flex flex-col items-center text-center gap-4">
                            <p className="text-muted-foreground mb-6">{t("contactDescription")}</p>
                            <div className="flex gap-4">
                                {socials.map(({ href, label, Icon }) => (
                                    <Button key={label} variant="outline" size="icon" asChild>
                                        <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                                            <Icon size={20} />
                                        </a>
                                    </Button>
                                ))}
                            </div>
                            <Button className="mt-4" asChild>
                                <a href={email}>{t("sendEmail")}</a>
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}
