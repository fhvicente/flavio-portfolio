"use client";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageToggle } from "@/components/language-toggle";
import { useTranslation } from "@/hooks/useTranslation";

export function Header() {
    const { t } = useTranslation();

    return (
        <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="font-bold">
                        <a href="/">
                            <span className="text-primary">Flávio's </span>
                            Portfolio
                        </a>
                    </div>
                    <nav className="hidden md:flex gap-6">
                        {(["about", "skills", "projects", "contact"] as const).map((k) => (
                            <a
                                key={k}
                                href={`#${k}`}
                                className="text-sm font-medium hover:text-primary transition-colors"
                            >
                                {t(k)}
                            </a>
                        ))}
                    </nav>
                    <div className="flex items-center gap-4">
                        <ThemeToggle />
                        <LanguageToggle />
                        <Button asChild size="sm">
                            <a href="#contact">{t("getInTouch")}</a>
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
}
