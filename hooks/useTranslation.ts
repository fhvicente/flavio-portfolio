"use client"

import { useLanguage } from "@/context/language-context"
import { translations } from "@/locales/translations"

export function useTranslation() {
  const { language } = useLanguage()
  
  const t = (key: keyof typeof translations.en) => {
    return translations[language][key] || key
  }
  
  return { t, language }
} 