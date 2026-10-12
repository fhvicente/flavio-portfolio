"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useTranslation } from "@/hooks/useTranslation";

const projects = [
    {
        n: 6,
        url: "https://growzy-ivory.vercel.app",
        images: ["p6.png"],
        tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PostgreSQL", "Drizzle", "Better Auth", "Stripe", "GSAP"],
    },
    {
        n: 5,
        url: "https://subtrack-three-chi.vercel.app",
        images: ["p5.png"],
        tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PostgreSQL", "Better Auth", "Stripe", "SendGrid", "Vitest"],
    },
    {
        n: 7,
        url: "https://dopamineshop-kappa.vercel.app",
        images: ["p7.png"],
        tags: ["Next.js", "TypeScript", "tRPC", "Drizzle", "PostgreSQL", "Tailwind CSS", "Framer Motion", "next-intl"],
    },
    {
        n: 8,
        url: "https://qr-generator-gules-ten.vercel.app",
        images: ["p8.png"],
        tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "next-intl"],
    },
    {
        n: 9,
        url: "https://github.com/fhvicente/yt-cuts",
        images: ["p9.png"],
        tags: ["Python", "FastAPI", "FFmpeg", "yt-dlp", "Deepgram", "Claude API", "OpenAI"],
    },
    {
        n: 1,
        url: "https://rainbowmap.ilga-europe.org/",
        images: ["p1.png"],
        tags: ["PHP", "JavaScript", "MySQL", "Highcharts", "Wordpress", "Python"],
    },
] as const;

export function Projects() {
    const { t } = useTranslation();

    return (
        <section id="projects" className="py-20 scroll-mt-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold mb-10 text-center">{t("projectsTitle")}</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map(({ n, url, images, tags }) => {
                        const title = t(`project${n}Title`);
                        const img = (src: string, i: number) => (
                            <img
                                src={`/images/projects/${src}`}
                                alt={`${title} screenshot ${i + 1}`}
                                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                            />
                        );
                        return (
                            <Card key={n} data-anim="project" className="group overflow-hidden transition-shadow duration-300 hover:shadow-lg">
                                {images.length === 1 ? (
                                    <div className="aspect-video bg-muted">{img(images[0], 0)}</div>
                                ) : (
                                    <Carousel className="bg-muted">
                                        <CarouselContent className="ml-0">
                                            {images.map((src, i) => (
                                                <CarouselItem key={src} className="pl-0 aspect-video">
                                                    {img(src, i)}
                                                </CarouselItem>
                                            ))}
                                        </CarouselContent>
                                        <CarouselPrevious className="left-2" />
                                        <CarouselNext className="right-2" />
                                    </Carousel>
                                )}
                                <CardContent className="p-6">
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-xl font-bold">{title}</h3>
                                        <a
                                            href={url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-bold hover:text-foreground transition-colors"
                                        >
                                            {t("seeProject")}
                                            <ExternalLink size={20} />
                                        </a>
                                    </div>
                                    <p className="text-muted-foreground mb-4">{t(`project${n}Description`)}</p>
                                    <div className="flex flex-wrap gap-2 mt-4">
                                        {tags.map((tag) => (
                                            <Badge key={tag} variant="outline">
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
