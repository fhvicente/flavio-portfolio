"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { useTranslation } from "@/hooks/useTranslation"

export function Projects() {
  const { t } = useTranslation()
  
  return (
    <section id="projects" className="py-20 scroll-mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-10 text-center">{t("projectsTitle")}</h2>
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Project 1 */}
          <Card className="overflow-hidden">
            <div className="aspect-video bg-muted">
              <img
                src="/images/projects/p1.png"
                alt="Rainbow Map Europe"
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold">Rainbow Map Europe</h3>
                <div className="flex gap-2">
                  <a
                    href="https://rainbowmap.ilga-europe.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-bold hover:text-foreground transition-colors"
                  >
                    {t("seeProject")}
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                {t("project1Description")}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <Badge variant="outline">PHP</Badge>
                <Badge variant="outline">JavaScript</Badge>
                <Badge variant="outline">MySQL</Badge>
                <Badge variant="outline">Highcharts</Badge>
                <Badge variant="outline">Wordpress</Badge>
                <Badge variant="outline">Python</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Project 2 */}
          <Card className="overflow-hidden">
            <div className="h-[400px] bg-muted">
              <Carousel className="w-full h-full">
                <CarouselContent>
                  <CarouselItem>
                    <div className="h-[400px] flex items-center justify-center">
                      <img
                        src="/images/projects/p2-1.png"
                        alt="E-commerce platform screenshot 1"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="h-[400px] flex items-center justify-center">
                      <img
                        src="/images/projects/p2-2.png"
                        alt="E-commerce platform screenshot 2"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="h-[400px] flex items-center justify-center">
                      <img
                        src="/images/projects/p2-3.png"
                        alt="E-commerce platform screenshot 3"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2" />
              </Carousel>
            </div>
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold">{t("project2Title")}</h3>
                <div className="flex gap-2">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="https://project-demo.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-bold hover:text-foreground transition-colors"
                  >
                    {t("seeProject")}
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                {t("project2Description")}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <Badge variant="outline">Laravel</Badge>
                <Badge variant="outline">Tailwind CSS</Badge>
                <Badge variant="outline">Typescript</Badge>
                <Badge variant="outline">Inertia.js</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Project 3 */}
          <Card className="overflow-hidden">
            <div className="h-[400px] bg-muted">
              <Carousel className="w-full h-full">
                <CarouselContent>
                  <CarouselItem>
                    <div className="h-[400px] flex items-center justify-center">
                      <img
                        src="/images/projects/p3-1.png"
                        alt="E-commerce platform screenshot 1"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="h-[400px] flex items-center justify-center">
                      <img
                        src="/images/projects/p3-2.png"
                        alt="E-commerce platform screenshot 2"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="h-[400px] flex items-center justify-center">
                      <img
                        src="/images/projects/p3-3.png"
                        alt="E-commerce platform screenshot 3"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2" />
              </Carousel>
            </div>
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold">{t("project3Title")}</h3>
                <div className="flex gap-2">
                  <a
                    href="https://hortafacil.fly.dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-bold hover:text-foreground transition-colors"
                  >
                    {t("seeProject")}
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                {t("project3Description")}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <Badge variant="outline">Laravel</Badge>
                <Badge variant="outline">Inertia.js</Badge>
                <Badge variant="outline">Tailwind CSS</Badge>
                <Badge variant="outline">JavaScript</Badge>
                <Badge variant="outline">SQLite</Badge>
                <Badge variant="outline">Stripe</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Project 4 */}
          <Card className="overflow-hidden">
            <div className="aspect-video bg-muted">
              <img
                src="/images/projects/p4.png"
                alt="Contentor House"
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold">{t("project4Title")}</h3>
                <div className="flex gap-2">
                  <a
                    href="https://contentor-house.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-bold hover:text-foreground transition-colors"
                  >
                    {t("seeProject")}
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                {t("project4Description")}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <Badge variant="outline">PHP</Badge>
                <Badge variant="outline">Next.js</Badge>
                <Badge variant="outline">Typescript</Badge>
                <Badge variant="outline">Wordpress</Badge>
                <Badge variant="outline">Inertia.js</Badge>
                <Badge variant="outline">Tailwind CSS</Badge>
                <Badge variant="outline">JavaScript</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
} 