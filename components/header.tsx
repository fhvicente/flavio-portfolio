"use client"

import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageToggle } from "@/components/language-toggle"
import { useTranslation } from "@/hooks/useTranslation"

export function Header() {
  const { t } = useTranslation()
  
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="font-bold">
            <span className="text-primary">Flávio's </span>Portfolio
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">
              {t("about")}
            </a>
            <a href="#skills" className="text-sm font-medium hover:text-primary transition-colors">
              {t("skills")}
            </a>
            <a href="#projects" className="text-sm font-medium hover:text-primary transition-colors">
              {t("projects")}
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
              {t("contact")}
            </a>
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
  )
} 