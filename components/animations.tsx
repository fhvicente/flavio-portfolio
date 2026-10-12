"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

// ponytail: one place for all page motion, driven by data-anim attributes in the sections
export function Animations() {
    useGSAP(() => {
        const mm = gsap.matchMedia();

        mm.add("(prefers-reduced-motion: no-preference)", () => {
            gsap.defaults({ ease: "power3.out", duration: 0.9 });

            // Intro: header drops in, name reveals letter by letter, rest follows
            const name = SplitText.create("[data-anim=hero-name]", { type: "chars", mask: "chars" });
            gsap.timeline()
                .from("header", { yPercent: -100, duration: 0.7 })
                .set("[data-anim=hero] > *", { visibility: "inherit" }, 0)
                .from(name.chars, { yPercent: 110, stagger: 0.03, duration: 0.8 }, 0.2)
                .from("[data-anim=hero] > :not(h1)", { y: 24, autoAlpha: 0, stagger: 0.12 }, "-=0.5");

            const reveal = (targets: string, vars: gsap.TweenVars, start = "top 85%") =>
                gsap.utils.toArray<HTMLElement>(targets).forEach((el) =>
                    gsap.from(el, { ...vars, scrollTrigger: { trigger: el, start, once: true } }),
                );

            reveal("main section:not(#about) h2", { y: 30, autoAlpha: 0 });
            reveal("[data-anim=about-text] > *", { x: -40, autoAlpha: 0 });
            reveal("[data-anim=about-img]", { clipPath: "inset(0 0 100% 0)", duration: 1.2, ease: "power4.inOut" });
            reveal("[data-anim=contact]", { y: 40, scale: 0.96, autoAlpha: 0 });

            // Grids: cards entering together stagger as a group
            const batch = (targets: string, inner?: string) => {
                gsap.set(targets, { y: 50, autoAlpha: 0 });
                if (inner) gsap.set(`${targets} ${inner}`, { scale: 0.6, autoAlpha: 0 });
                ScrollTrigger.batch(targets, {
                    start: "top 88%",
                    once: true,
                    onEnter: (els) => {
                        gsap.to(els, { y: 0, autoAlpha: 1, stagger: 0.12 });
                        if (inner)
                            gsap.to(els.flatMap((el) => [...el.querySelectorAll(inner)]), {
                                scale: 1, autoAlpha: 1, stagger: 0.02, duration: 0.4, ease: "back.out(2)", delay: 0.3,
                            });
                    },
                });
            };

            batch("[data-anim=skill]", "[data-slot=badge]");
            batch("[data-anim=project]");

            // Portrait drifts slightly slower than the page
            gsap.fromTo("[data-anim=about-img] img", { yPercent: -6 }, {
                yPercent: 6,
                ease: "none",
                scrollTrigger: { trigger: "#about", scrub: true },
            });
        });
    });

    return null;
}
