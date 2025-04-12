"use client"

import { Badge } from "@/components/ui/badge"
import { useTranslation } from "@/hooks/useTranslation"

export function Skills() {
  const { t } = useTranslation()
  
  return (
    <section id="skills" className="py-20 scroll-mt-16 bg-muted/50 rounded-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-10 text-center">{t("skillsTitle")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-card p-6 rounded-lg shadow-sm border">
            <h3 className="text-xl font-bold mb-4">{t("frontendTitle")}</h3>
            <div className="flex flex-wrap gap-2">
              <Badge>HTML</Badge>
              <Badge>CSS</Badge>
              <Badge>JavaScript</Badge>
              <Badge>TypeScript</Badge>
              <Badge>React</Badge>
              <Badge>Next.js</Badge>
              <Badge>Tailwind</Badge>
              <Badge>Bootstrap</Badge>
            </div>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-sm border">
            <h3 className="text-xl font-bold mb-4">{t("backendTitle")}</h3>
            <div className="flex flex-wrap gap-2">
              <Badge>Node.js</Badge>
              <Badge>Express</Badge>
              <Badge>PHP</Badge>
              <Badge>Laravel</Badge>
              <Badge>Wordpress</Badge>
              <Badge>Python</Badge>
              <Badge>FastAPI</Badge>
              <Badge>RESTful APIs</Badge>
            </div>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-sm border">
            <h3 className="text-xl font-bold mb-4">{t("databaseTitle")}</h3>
            <div className="flex flex-wrap gap-2">
              <Badge>MySQL</Badge>
              <Badge>PostgreSQL</Badge>
              <Badge>MongoDB</Badge>
              <Badge>Firebase</Badge>
              <Badge>SQLite</Badge>
              <Badge>ORM</Badge>
              <Badge>SQL</Badge>
              <Badge>NoSQL</Badge>
            </div>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-sm border">
            <h3 className="text-xl font-bold mb-4">{t("toolsTitle")}</h3>
            <div className="flex flex-wrap gap-2">
              <Badge>Git</Badge>
              <Badge>GitHub</Badge>
              <Badge>Docker</Badge>
              <Badge>CI/CD</Badge>
              <Badge>VS Code</Badge>
              <Badge>Jira</Badge>
              <Badge>Figma</Badge>
              <Badge>Netlify</Badge>
              <Badge>Vercel</Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 