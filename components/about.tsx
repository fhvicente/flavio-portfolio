"use client";

import { useTranslation } from "@/hooks/useTranslation";
import { Button } from "@/components/ui/button";

export function About() {
    const { t, language } = useTranslation();

    // Define resume path based on language
    const resumePath =
        language === "en"
            ? "/resume/eng/resume-flavio-vicente.pdf"
            : "/resume/pt/curriculo-flavio-vicente.pdf";
    const resumeText =
        language === "en" ? "Download Resume" : "Download do Currículo";

    return (
        <section id="about" className="py-30 scroll-mt-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-20 items-center justify-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-6">
                            {t("aboutTitle")}
                        </h2>
                        <p className="text-muted-foreground mb-4">
                            {t("aboutDesc1")}
                        </p>
                        <p className="text-muted-foreground mb-6">
                            {t("aboutDesc2")}
                        </p>
                        <Button variant="outline" asChild>
                            {/* <a
                                href={resumePath}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {resumeText}
                            </a> */}
                        </Button>
                    </div>
                    <div className="max-w-[400px] mx-auto">
                        <img
                            src="/images/profile.jpg"
                            alt="Developer portrait"
                            className="rounded-lg w-full"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
