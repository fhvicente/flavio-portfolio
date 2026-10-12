"use client";

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/language-context";

export function LanguageToggle() {
    const { language, setLanguage } = useLanguage();

    return (
        <Button
            variant="outline"
            size="icon"
            className="cursor-pointer"
            onClick={() => setLanguage(language === "en" ? "pt" : "en")}
        >
            {language === "en" ? "PT" : "EN"}
            <span className="sr-only">Toggle language</span>
        </Button>
    );
}
