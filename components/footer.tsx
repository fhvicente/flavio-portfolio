"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

export function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="border-t py-6 md:py-8">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
                    <div className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} Flávio Vicente. All rights
                        reserved.
                    </div>
                    <div className="flex gap-4">
                        <a
                            href="https://github.com/fhvicente/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                            <Github size={20} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/fhsvicente/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                            <Linkedin size={20} />
                        </a>
                        <a
                            href="mailto:flaviohenriquevicente@hotmail.com"
                            className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                            <Mail size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
