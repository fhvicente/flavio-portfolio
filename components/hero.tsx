"use client";

import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

export function Hero() {
    const { t } = useTranslation();

    return (
        <section className="py-20 md:py-32 flex flex-col items-center text-center">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                    Flávio Vicente
                </h1>
                <p className="text-xl md:text-2xl font-bold max-w-[700px] mx-auto">
                    Full Stack Developer
                </p>
                <p className="text-xl md:text-2xl text-muted-foreground max-w-[700px] mx-auto mb-8">
                    {t("heroDescription")}
                </p>
                <div className="flex gap-4 justify-center">
                    <Button asChild size="lg">
                        <a href="#projects">{t("projects")}</a>
                    </Button>
                    <Button variant="outline" size="lg" asChild>
                        <a href="#contact">{t("getInTouch")}</a>
                    </Button>
                </div>
                <div className="mt-16 flex animate-bounce justify-center">
                    <a
                        href="#about"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                        <ChevronDown size={24} />
                    </a>
                </div>
            </div>
        </section>
    );
}
