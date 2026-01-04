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

// Parallax effect for hero title/sub-elements
export function useHeroParallax(containerRef: React.RefObject<HTMLElement | null>) {
    useEffect(() => {
        if (!containerRef.current) return;
        if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            return; // Accessibility: no motion
        }
        const el = containerRef.current;
        const title = el.querySelector<HTMLElement>('[data-hero=title]');
        const subtitle = el.querySelector<HTMLElement>('[data-hero=subtitle]');
        if (!title) return;

        // Use gsap.quickTo for smoother updates
        const qxTitle = gsap.quickTo(title, 'x', { duration: 0.6, ease: 'expo.out' });
        const qyTitle = gsap.quickTo(title, 'y', { duration: 0.6, ease: 'expo.out' });
        const qxSubtitle = subtitle ? gsap.quickTo(subtitle, 'x', { duration: 0.8, ease: 'expo.out' }) : null;
        const qySubtitle = subtitle ? gsap.quickTo(subtitle, 'y', { duration: 0.8, ease: 'expo.out' }) : null;
        const qRotate = gsap.quickTo(title, 'rotationZ', { duration: 0.8, ease: 'expo.out' });

        const handleMove = (e: MouseEvent) => {
            const rect = el.getBoundingClientRect();
            const cx = rect.left + rect.width / 2;
            const cy = rect.top + rect.height / 2;
            const dx = (e.clientX - cx) / rect.width; // -0.5..0.5
            const dy = (e.clientY - cy) / rect.height;
            const strength = rect.width < 800 ? 20 : 35;
            qxTitle(dx * strength);
            qyTitle(dy * strength);
            qRotate(dx * -5);
            if (qxSubtitle && qySubtitle) {
                qxSubtitle(dx * strength * 0.4);
                qySubtitle(dy * strength * 0.4);
            }
        };
        el.addEventListener('mousemove', handleMove);
        return () => {
            el.removeEventListener('mousemove', handleMove);
        };
    }, [containerRef]);
}

// Ambient hero title effects: gradient shimmer, gentle float, scroll scale
export function useHeroTitleEffects(containerRef: React.RefObject<HTMLElement | null>) {
    useLayoutEffect(() => {
        const root = containerRef.current;
        if (!root) return;
        if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            return; // Respect reduced motion
        }
        const title = root.querySelector<HTMLElement>('[data-hero=title]');
        if (!title) return;
        const ctx = gsap.context(() => {
            // Gradient shimmer via background-position animation
            gsap.to(title, {
                backgroundPosition: '200% 50%',
                duration: 14,
                repeat: -1,
                ease: 'linear'
            });
            // Gentle floating
            gsap.to(title, { y: -18, duration: 5, yoyo: true, repeat: -1, ease: 'sine.inOut' });
            // Scroll-based subtle scale + letter spacing tighten
            ScrollTrigger.create({
                trigger: document.documentElement,
                start: 'top top',
                end: '+=450',
                scrub: true,
                onUpdate: (self) => {
                    const p = self.progress; // 0..1
                    gsap.to(title, { scale: 1 - p * 0.12, letterSpacing: `${-p * 2}px`, overwrite: 'auto' });
                }
            });
        }, containerRef);
        return () => ctx.revert();
    }, [containerRef]);
}

// Minimal, professional "wow" title reveal: per-letter rise + subtle underline grow (one-shot)
export function useHeroTitleElegantReveal(containerRef: React.RefObject<HTMLElement | null>) {
    useLayoutEffect(() => {
        const root = containerRef.current;
        if (!root) return;
        if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            return; // Skip animations if user prefers reduced motion
        }
        const letters = root.querySelectorAll<HTMLElement>('[data-hero-letter]');
        if (!letters.length) return;
        const underline = root.querySelector<HTMLElement>('[data-hero=underline]');
        const ctx = gsap.context(() => {
            gsap.set(letters, { y: 60, opacity: 0 });
            const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });
            tl.to(letters, {
                y: 0,
                opacity: 1,
                duration: 0.9,
                stagger: { each: 0.04, from: 'center' }
            });
            if (underline) {
                tl.fromTo(underline, { scaleX: 0, opacity: 0 }, { scaleX: 1, opacity: 1, transformOrigin: 'center', duration: 0.6, ease: 'power3.out' }, '-=0.4');
            }
        }, containerRef);
        return () => ctx.revert();
    }, [containerRef]);
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

// Spark Love page tailored animations (hero reveal, section fades, card/list staggers, ambient floating hearts)
export function useSparkLoveAnimations() {
    const scope = useRef<HTMLDivElement | null>(null);

    useLayoutEffect(() => {
        const root = scope.current;
        if (!root) return;
        if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            return; // Respect reduced motion preference
        }

        const ctx = gsap.context(() => {
            // HERO TITLE LETTERS (if present) else fallback to whole heading
            const heroLetters = gsap.utils.toArray<HTMLElement>('[data-spark-hero-letter]');
            if (heroLetters.length) {
                gsap.set(heroLetters, { y: 70, rotateX: -60, opacity: 0 });
                gsap.to(heroLetters, {
                    y: 0,
                    rotateX: 0,
                    opacity: 1,
                    duration: 1.05,
                    ease: 'expo.out',
                    stagger: { each: 0.035, from: 'center' }
                });
            } else {
                const wholeHeading = document.querySelector('#spark-love-hero-heading');
                if (wholeHeading) {
                    gsap.from(wholeHeading, { y: 60, opacity: 0, duration: 1.1, ease: 'expo.out' });
                }
            }

            // HERO SUBTITLE + CTA BUTTONS
            const heroSubtitle = root.querySelector('[data-spark=hero-subtitle]');
            const heroCtas = gsap.utils.toArray<HTMLElement>('[data-spark=hero-cta] > *');
            if (heroSubtitle) {
                gsap.from(heroSubtitle, { y: 40, opacity: 0, duration: 0.9, ease: 'power3.out', delay: 0.25 });
            }
            if (heroCtas.length) {
                gsap.from(heroCtas, { y: 42, opacity: 0, duration: 0.7, ease: 'power3.out', stagger: 0.12, delay: 0.45 });
            }

            // Ambient particles removed per request

            // SECTION REVEALS
            const sections = gsap.utils.toArray<HTMLElement>('[data-spark-section]');
            sections.forEach((sec) => {
                gsap.set(sec, { autoAlpha: 0, y: 50 });
                ScrollTrigger.create({
                    trigger: sec,
                    start: 'top 80%',
                    once: true,
                    onEnter: () => {
                        gsap.to(sec, { autoAlpha: 1, y: 0, duration: 0.9, ease: 'power3.out' });
                    }
                });
            });

            // FEATURE CARDS STAGGER
            const cards = gsap.utils.toArray<HTMLElement>('[data-spark-card]');
            if (cards.length) {
                gsap.set(cards, { autoAlpha: 0, y: 40, scale: 0.96 });
                ScrollTrigger.batch(cards, {
                    start: 'top 85%',
                    once: true,
                    onEnter: (batch) => {
                        gsap.to(batch, {
                            autoAlpha: 1,
                            y: 0,
                            scale: 1,
                            duration: 0.85,
                            ease: 'power3.out',
                            stagger: { each: 0.12 }
                        });
                    }
                });
            }

            // LIST ITEMS (check bullets) subtle cascade
            const listItems = gsap.utils.toArray<HTMLElement>('[data-spark-list] li');
            if (listItems.length) {
                gsap.set(listItems, { autoAlpha: 0, y: 28 });
                ScrollTrigger.batch(listItems, {
                    start: 'top 85%',
                    onEnter: (batch) => {
                        gsap.to(batch, { autoAlpha: 1, y: 0, duration: 0.6, ease: 'power2.out', stagger: { each: 0.08 } });
                    },
                    once: true
                });
            }

            // PRIVACY SECTION SPECIAL EMPHASIS (pulse gradient on heading once in view)
            const privacyHeading = root.querySelector<HTMLElement>('#privacy-heading');
            if (privacyHeading) {
                ScrollTrigger.create({
                    trigger: privacyHeading,
                    start: 'top 75%',
                    once: true,
                    onEnter: () => {
                        gsap.fromTo(privacyHeading, { backgroundPosition: '0% 50%' }, { backgroundPosition: '200% 50%', duration: 3.5, ease: 'linear' });
                        gsap.from(privacyHeading, { y: 50, autoAlpha: 0, duration: 1, ease: 'expo.out' });
                    }
                });
            }
        }, scope);
        return () => ctx.revert();
    }, []);

    return scope;
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
<<<<<<< Updated upstream
=======

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
>>>>>>> Stashed changes
