"use client";

import { socials } from "@/lib/socials";
import { useTranslation } from "@/hooks/useTranslation";

export function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="border-t py-6 md:py-8">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
                    <div className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} Flávio Vicente. {t("footerRights")}
                    </div>
                    <div className="flex gap-4">
                        {socials.map(({ href, label, Icon }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={label}
                                className="text-muted-foreground hover:text-foreground transition-colors"
                            >
                                <Icon size={20} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
