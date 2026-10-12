"use client";

import { Badge } from "@/components/ui/badge";
import { useTranslation } from "@/hooks/useTranslation";

const skills = {
    frontendTitle: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind", "Bootstrap"],
    backendTitle: ["Node.js", "Express", "PHP", "Laravel", "Wordpress", "Python", "FastAPI", "RESTful APIs"],
    databaseTitle: ["MySQL", "PostgreSQL", "MongoDB", "Firebase", "SQLite", "ORM", "SQL", "NoSQL"],
    toolsTitle: ["Git", "GitHub", "Docker", "CI/CD", "VS Code", "Jira", "Figma", "Netlify", "Vercel"],
} as const;

export function Skills() {
    const { t } = useTranslation();

    return (
        <section id="skills" className="py-20 scroll-mt-30 bg-muted/50 rounded-lg">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold mb-10 text-center">{t("skillsTitle")}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {Object.entries(skills).map(([title, items]) => (
                        <div key={title} className="bg-card p-6 rounded-lg shadow-sm border">
                            <h3 className="text-xl font-bold mb-4">{t(title as keyof typeof skills)}</h3>
                            <div className="flex flex-wrap gap-2">
                                {items.map((item) => (
                                    <Badge key={item}>{item}</Badge>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
