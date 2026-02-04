"use client";

import { useLayoutEffect, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Hook for hero intro animation
export function useGsapIntro() {
    const scope = useRef<HTMLDivElement | null>(null);

    useLayoutEffect(() => {
        if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            return; // Respect reduced motion preference
        }
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
            tl.from("[data-hero=subtitle]", { y: 40, opacity: 0, duration: 0.6 })
                .from("[data-hero=description]", { y: 30, opacity: 0, duration: 0.6 }, "-=0.45")
                .from("[data-hero=cta] > *", { y: 40, opacity: 0, stagger: 0.12, duration: 0.55 }, "-=0.3")
                .from("[data-hero=scroll-indicator]", { y: 20, opacity: 0, duration: 0.6 }, "+=0.2");
        }, scope);
        return () => ctx.revert();
    }, []);

    return scope;
}

// Generic fade/slide on view
export function useGsapStaggerOnView(options?: { y?: number; duration?: number; once?: boolean }) {
    const { y = 40, duration = 0.7, once = true } = options || {};
    const scope = useRef<HTMLElement | null>(null);

    useLayoutEffect(() => {
        if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            return; // Skip animations
        }
        const ctx = gsap.context(() => {
            const elements = gsap.utils.toArray<HTMLElement>("[data-animate]");
            elements.forEach((el) => {
                gsap.set(el, { autoAlpha: 0, y });
                ScrollTrigger.create({
                    trigger: el,
                    start: "top 80%",
                    once,
                    onEnter: () => {
                        gsap.to(el, { autoAlpha: 1, y: 0, duration, ease: "power3.out" });
                    },
                });
            });
        }, scope);
        return () => ctx.revert();
    }, [y, duration, once]);

    return scope;
}

// Horizontal reveal for lists (project cards etc.)
export function useHorizontalReveal(selector = "[data-reveal]") {
    const scope = useRef<HTMLElement | null>(null);

    useLayoutEffect(() => {
        if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            return; // Skip animations
        }
        const ctx = gsap.context(() => {
            const items = gsap.utils.toArray<HTMLElement>(selector);
            if (!items.length) return;
            gsap.set(items, { autoAlpha: 0, x: -40 });
            ScrollTrigger.batch(items, {
                start: "top 85%",
                onEnter: (batch) => {
                    gsap.to(batch, {
                        autoAlpha: 1,
                        x: 0,
                        duration: 0.8,
                        ease: "power3.out",
                        stagger: { each: 0.12, from: "start" },
                    });
                },
            });
        }, scope);
        return () => ctx.revert();
    }, [selector]);

    return scope;
}

// Header progressive scroll animation
export function useHeaderScrollAnimation(headerRef: React.RefObject<HTMLElement | null>) {
    useLayoutEffect(() => {
        const header = headerRef.current;
        if (!header) return;
        if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            return; // Skip heavy motion
        }
        // Simpler solid color tween to avoid GSAP gradient parsing issues
        // Pick a blue-ish tone (fallback) instead of relying on CSS variable slash syntax which GSAP may not parse.
        // You can adjust these RGB values to match your design system more closely.
        const isDark = document.documentElement.classList.contains('dark');
        const bgFrom = 'rgba(30,58,138,0)';
        const overlay = header.querySelector('[data-header-overlay]') as HTMLElement | null;

        const ctx = gsap.context(() => {
            gsap.set(header, { backgroundColor: bgFrom });
            if (overlay) {
                gsap.set(overlay, { opacity: 0 });
                gsap.to(overlay, {
                    opacity: isDark ? 0.85 : 0.9,
                    scrollTrigger: {
                        trigger: document.documentElement,
                        start: 'top top',
                        end: '+=160',
                        scrub: true,
                    }
                });
            }
            gsap.to(header, {
                paddingTop: '0.85rem',
                paddingBottom: '0.85rem',
                borderBottom: isDark ? '1px solid rgba(255,255,255,0.06)' : '1px solid rgba(0,0,0,0.08)',
                boxShadow: isDark ? '0 4px 18px -4px rgba(0,0,0,0.45)' : '0 4px 18px -4px rgba(0,0,0,0.15)',
                scrollTrigger: {
                    trigger: document.documentElement,
                    start: 'top top',
                    end: '+=160',
                    scrub: true,
                },
            });
            // Logo scale subtle
            const logo = header.querySelector('[data-header=logo]');
            if (logo) {
                gsap.to(logo, {
                    scale: 0.9,
                    letterSpacing: '-0.02em',
                    scrollTrigger: {
                        trigger: document.documentElement,
                        start: 'top top',
                        end: '+=260',
                        scrub: true,
                    },
                });
            }
        });
        return () => ctx.revert();
    }, [headerRef]);
}

// Lightweight GSAP animation for Spark Love hero title (single element)
export function useSparkLoveTitleAnimation() {
    const ref = useRef<HTMLHeadingElement | null>(null);
    useLayoutEffect(() => {
        const el = ref.current;
        if (!el) return;
        if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            return; // Accessibility: no motion
        }
        const ctx = gsap.context(() => {
            gsap.set(el, { opacity: 0, y: 60, scale: 1.08 });
            const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });
            tl.to(el, { opacity: 1, y: 0, scale: 1, duration: 1.1 });
            // (Continuous motion removed per request – one-shot only)
        }, ref);
        return () => ctx.revert();
    }, []);
    return ref;
}

// Spark Love content (below hero) animations: section fade, card/list stagger, privacy heading emphasis.
export function useSparkLoveContentAnimations() {
    const scope = useRef<HTMLDivElement | null>(null);
    useLayoutEffect(() => {
        const root = scope.current;
        if (!root) return;
        if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            return; // Respect reduced motion
        }
        const ctx = gsap.context(() => {
            // Sections fade up
            const sections = gsap.utils.toArray<HTMLElement>('[data-spark-section]');
            sections.forEach(sec => {
                // Skip hero if present (has h1 id spark-love-hero-heading inside)
                if (sec.querySelector('#spark-love-hero-heading')) return;
                gsap.set(sec, { autoAlpha: 0, y: 50 });
                ScrollTrigger.create({
                    trigger: sec,
                    start: 'top 80%',
                    once: true,
                    onEnter: () => gsap.to(sec, { autoAlpha: 1, y: 0, duration: 0.9, ease: 'power3.out' })
                });
            });

            // Cards
            const cards = gsap.utils.toArray<HTMLElement>('[data-spark-card]');
            if (cards.length) {
                gsap.set(cards, { autoAlpha: 0, y: 40, scale: 0.96 });
                ScrollTrigger.batch(cards, {
                    start: 'top 85%',
                    once: true,
                    onEnter: (batch) => gsap.to(batch, { autoAlpha: 1, y: 0, scale: 1, duration: 0.75, ease: 'power3.out', stagger: { each: 0.12 } })
                });
            }

            // List items
            const listItems = gsap.utils.toArray<HTMLElement>('[data-spark-list] li');
            if (listItems.length) {
                gsap.set(listItems, { autoAlpha: 0, y: 26 });
                ScrollTrigger.batch(listItems, {
                    start: 'top 85%',
                    once: true,
                    onEnter: (batch) => gsap.to(batch, { autoAlpha: 1, y: 0, duration: 0.55, ease: 'power2.out', stagger: { each: 0.07 } })
                });
            }

            // Privacy heading emphasis
            const privacyHeading = document.querySelector<HTMLElement>('#privacy-heading');
            if (privacyHeading) {
                ScrollTrigger.create({
                    trigger: privacyHeading,
                    start: 'top 75%',
                    once: true,
                    onEnter: () => {
                        gsap.from(privacyHeading, { y: 50, autoAlpha: 0, duration: 1, ease: 'expo.out' });
                    }
                });
            }
        }, scope);
        return () => ctx.revert();
    }, []);
    return scope;
}

// Nuage title animation (hero title reveal)
export function useNuageTitleAnimation() {
    const ref = useRef<HTMLHeadingElement | null>(null);
    useLayoutEffect(() => {
        const el = ref.current;
        if (!el) return;
        if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            return; // Accessibility: no motion
        }
        const ctx = gsap.context(() => {
            gsap.set(el, { opacity: 0, y: 60, scale: 1.08 });
            const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });
            tl.to(el, { opacity: 1, y: 0, scale: 1, duration: 1.1 });
        }, ref);
        return () => ctx.revert();
    }, []);
    return ref;
}

// Nuage content animations (sections, cards, feature cards)
export function useNuageContentAnimations() {
    const scope = useRef<HTMLDivElement | null>(null);
    useLayoutEffect(() => {
        const root = scope.current;
        if (!root) return;
        if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            return; // Respect reduced motion
        }
        const ctx = gsap.context(() => {
            // Feature headers (section titles)
            const headers = gsap.utils.toArray<HTMLElement>('.feature-header');
            headers.forEach(header => {
                gsap.set(header, { autoAlpha: 0, y: 40 });
                ScrollTrigger.create({
                    trigger: header,
                    start: 'top 80%',
                    once: true,
                    onEnter: () => gsap.to(header, { autoAlpha: 1, y: 0, duration: 0.8, ease: 'power3.out' })
                });
            });

            // Feature cards stagger
            const cards = gsap.utils.toArray<HTMLElement>('.feature-card');
            if (cards.length) {
                gsap.set(cards, { autoAlpha: 0, y: 30 });
                ScrollTrigger.batch(cards, {
                    start: 'top 85%',
                    once: true,
                    onEnter: (batch) => {
                        gsap.to(batch, {
                            autoAlpha: 1,
                            y: 0,
                            duration: 0.7,
                            ease: 'power3.out',
                            stagger: { each: 0.1 }
                        });
                    }
                });
            }
        }, scope);
        return () => ctx.revert();
    }, []);
    return scope;
}
