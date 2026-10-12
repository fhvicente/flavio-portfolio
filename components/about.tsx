"use client";

import { useTranslation } from "@/hooks/useTranslation";

export function About() {
    const { t } = useTranslation();

    return (
        <section id="about" className="py-30 scroll-mt-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-20 items-center justify-center">
                    <div data-anim="about-text">
                        <h2 className="text-3xl font-bold mb-6">{t("aboutTitle")}</h2>
                        <p className="text-muted-foreground mb-4">{t("aboutDesc1")}</p>
                        <p className="text-muted-foreground mb-6">{t("aboutDesc2")}</p>
                    </div>
                    <div data-anim="about-img" className="max-w-[400px] mx-auto overflow-hidden rounded-lg">
                        <img src="/images/profile.jpg" alt="Developer portrait" className="w-full scale-115" />
                    </div>
                </div>
            </div>
        </section>
    );
}
