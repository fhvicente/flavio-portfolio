"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useTranslation } from "@/hooks/useTranslation";

const projects = [
    {
        n: 1,
        url: "https://rainbowmap.ilga-europe.org/",
        images: ["p1.png"],
        tags: ["PHP", "JavaScript", "MySQL", "Highcharts", "Wordpress", "Python"],
    },
    {
        n: 5,
        url: "https://subtrack.fly.dev",
        images: ["p5.png", "p5-1.png", "p5-2.png"],
        tags: ["Node.js", "Express", "SQLite", "Next.js", "React", "TailwindCSS", "JWT", "SendGrid", "Stripe"],
    },
    {
        n: 2,
        url: "https://countryview.fly.dev/",
        images: ["p2-1.png", "p2-2.png", "p2-3.png"],
        tags: ["Laravel", "Tailwind CSS", "Typescript", "Inertia.js"],
    },
    {
        n: 3,
        url: "https://hortafacil.fly.dev/",
        images: ["p3-1.png", "p3-2.png", "p3-3.png"],
        tags: ["Laravel", "Inertia.js", "Tailwind CSS", "JavaScript", "SQLite", "Stripe"],
    },
    {
        n: 4,
        url: "https://contentorhouse.vercel.app/",
        images: ["p4.png"],
        tags: ["PHP", "Next.js", "Typescript", "Wordpress", "Inertia.js", "Tailwind CSS", "JavaScript"],
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
                                className="w-full h-full object-cover"
                            />
                        );
                        return (
                            <Card key={n} className="overflow-hidden">
                                {images.length === 1 ? (
                                    <div className="aspect-video bg-muted">{img(images[0], 0)}</div>
                                ) : (
                                    <Carousel className="h-[400px] bg-muted">
                                        <CarouselContent>
                                            {images.map((src, i) => (
                                                <CarouselItem key={src} className="h-[400px]">
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
