"use client";

import { Badge } from "@/components/ui/badge";
import { useTranslation } from "@/hooks/useTranslation";

const skills = {
    aiTitle: [
        "LLMs",
        "AI Agents",
        "RAGs",
        "Prompt Engineering",
        "Vector Databases",
        "LangChain",
        "LangGraph",
        "LangSmith",
        "OpenRouter",
        "Ollama",
        "VLLMs",
        "Azure OpenAI",
        "OpenCV",
    ],
    backendTitle: [
        "Node.js",
        "Nest.js",
        "Express",
        "PHP",
        "Laravel",
        "Wordpress",
        "Python",
        "FastAPI",
        "Flask",
        "Django",
        "Java",
        "Spring Boot",
        "RESTful APIs",
        "GraphQL",
        "Microservices",
        "Zod",
        "Drizzle ORM",
        "RabbitMQ",
        "Kafka",
    ],
    frontendTitle: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Angular", "Tailwind", "Bootstrap"],
    databaseTitle: ["MySQL", "PostgreSQL", "MongoDB", "Firebase", "SQLite", "Redis", "Drizzle ORM", "SQL", "NoSQL"],
    toolsTitle: [
        "Git",
        "GitHub",
        "Docker",
        "Kubernetes",
        "CI/CD",
        "Linux",
        "Microsoft Azure",
        "LaTeX",
        "Kivy",
        "VS Code",
        "Jira",
        "Figma",
        "Netlify",
        "Vercel",
        "Agile",
        "Scrum",
    ],
} as const;

export function Skills() {
    const { t } = useTranslation();

    return (
        <section id="skills" className="py-20 scroll-mt-30 bg-muted/50 rounded-lg">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold mb-10 text-center">{t("skillsTitle")}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {Object.entries(skills).map(([title, items]) => (
                        <div key={title} data-anim="skill" className="bg-card p-6 rounded-lg shadow-sm border">
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
