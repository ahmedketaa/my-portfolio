"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { Container } from "@/components/ui/container";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { LocaleSwitcher } from "@/components/ui/locale-switcher";

const navLinks = [
  { key: "home", href: "#home" },
  { key: "about", href: "#about" },
  { key: "proof", href: "#proof", labelAr: "الإثبات", labelEn: "Proof" },
  { key: "projects", href: "#projects" },
  { key: "experience", href: "#experience" },
  { key: "contact", href: "#contact" },
];

export function Navbar() {
  const t = useTranslations("Navbar");
  const locale = useLocale();
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + 140;
      let currentSection = sections[0]?.id || "home";

      for (const section of sections) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          currentSection = section.id;
          break;
        }
      }

      const nearBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 80;

      if (nearBottom) {
        currentSection = sections[sections.length - 1].id;
      }

      setActiveSection(currentSection);
    };

    updateActiveSection();

    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  useEffect(() => {
    const baseUrl = `${window.location.pathname}${window.location.search}`;
    const newUrl =
      activeSection === "home" ? baseUrl : `${baseUrl}#${activeSection}`;

    if (`${window.location.pathname}${window.location.search}${window.location.hash}` !== newUrl) {
      window.history.replaceState(null, "", newUrl);
    }
  }, [activeSection]);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/72 supports-[backdrop-filter]:bg-background/60 backdrop-blur-2xl">
      <Container>
        <div dir="ltr" className="flex h-16 items-center justify-between gap-4">
          <Link
            href={`/${locale}`}
            className="text-base font-semibold tracking-tight text-foreground transition-all duration-300 hover:opacity-80 hover:-translate-y-0.5"
          >
            Ahmed
          </Link>

<nav
  dir={locale === "ar" ? "rtl" : "ltr"}
  className="hidden items-center gap-2 md:flex"
>            {navLinks.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;

              const label =
                link.key === "proof"
                  ? locale === "ar"
                    ? link.labelAr
                    : link.labelEn
                  : t(link.key);

              return (
                <Link
                  key={link.key}
                  href={link.href}
                  className={`group relative inline-flex items-center rounded-full px-4 py-2 text-sm transition-all duration-300 ${
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground hover:-translate-y-0.5"
                  }`}
                >
                  <span className="relative z-10">{label}</span>

                  <span
                    className={`absolute inset-0 rounded-full border transition-all duration-300 ${
                      isActive
                        ? "border-border bg-foreground/5 shadow-[0_0_0_1px_hsl(var(--border))_inset]"
                        : "border-transparent bg-transparent group-hover:border-border/80 group-hover:bg-foreground/5"
                    }`}
                  />

                  <span
                    className={`absolute left-4 right-4 -bottom-[2px] h-px origin-center bg-foreground/50 transition-all duration-300 ${
                      isActive
                        ? "scale-x-100 opacity-100"
                        : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <LocaleSwitcher />
            <ThemeToggle />
          </div>
        </div>
      </Container>
    </header>
  );
}