"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";

import { Section } from "@/components/ui/section";

type ContactSectionProps = {
  socialLinks: {
    github?: string;
    linkedin?: string;
    email?: string;
  };
  location?: string;
};

export function ContactSection({
  socialLinks,
  location = "Abu Dhabi, UAE",
}: ContactSectionProps) {
  const t = useTranslations("Contact");

  return (
    <Section
      id="contact"
      className="relative overflow-hidden scroll-mt-24"
      containerClassName="relative"
    >
      <div className="pointer-events-none absolute inset-0 -z-20">
        <div className="absolute left-[8%] top-8 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute right-[10%] bottom-0 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="pointer-events-none absolute inset-0 -z-10 opacity-60">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,hsl(var(--primary)/0.08),transparent_22%),radial-gradient(circle_at_bottom_right,hsl(var(--accent)/0.08),transparent_24%)]" />
      </div>

      <div className="relative overflow-hidden rounded-[2rem] border border-border/70 bg-card/75 p-6 shadow-[var(--shadow-medium)] backdrop-blur-xl md:p-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(var(--primary)/0.12),transparent_24%),radial-gradient(circle_at_bottom_left,hsl(var(--accent)/0.10),transparent_26%)]" />

        <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/60 px-4 py-2 text-xs font-semibold tracking-[0.16em] text-muted-foreground backdrop-blur-xl">
              <Sparkles className="h-4 w-4 text-primary" />
              {t("eyebrow")}
            </div>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              {t("title")}
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground md:text-base">
              {t("description")}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/55 px-4 py-2 text-sm text-foreground/85 backdrop-blur-lg">
                <MapPin className="h-4 w-4 text-primary" />
                <span>{location}</span>
              </div>

              <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/55 px-4 py-2 text-sm text-foreground/85 backdrop-blur-lg">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                <span>{t("availability")}</span>
              </div>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-4">
              {socialLinks.email ? (
                <Link
                  href={`mailto:${socialLinks.email}`}
                  className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-medium)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-strong)]"
                >
                  {t("ctaEmail")}
                  <ArrowUpRight className="ms-2 h-4 w-4" />
                </Link>
              ) : null}

              <Link
                href="#projects"
                className="inline-flex items-center justify-center rounded-full border border-border bg-card/75 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-secondary"
              >
                {t("ctaProjects")}
              </Link>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-[1.5rem] border border-border/70 bg-background/55 p-5 backdrop-blur-xl">
              <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                {t("cardTitle")}
              </p>

              <div className="mt-4 space-y-3">
                {socialLinks.email ? (
                  <Link
                    href={`mailto:${socialLinks.email}`}
                    className="flex items-center justify-between rounded-[1rem] border border-border/60 bg-card/70 px-4 py-3 text-sm transition-all duration-300 hover:border-primary/30 hover:bg-card"
                  >
                    <span className="flex items-center gap-3 text-foreground">
                      <Mail className="h-4 w-4 text-primary" />
                      {socialLinks.email}
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
                  </Link>
                ) : null}

                {socialLinks.linkedin ? (
                  <Link
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between rounded-[1rem] border border-border/60 bg-card/70 px-4 py-3 text-sm transition-all duration-300 hover:border-primary/30 hover:bg-card"
                  >
                    <span className="flex items-center gap-3 text-foreground">
                      <Linkedin className="h-4 w-4 text-primary" />
                      LinkedIn
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
                  </Link>
                ) : null}

                {socialLinks.github ? (
                  <Link
                    href={socialLinks.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between rounded-[1rem] border border-border/60 bg-card/70 px-4 py-3 text-sm transition-all duration-300 hover:border-primary/30 hover:bg-card"
                  >
                    <span className="flex items-center gap-3 text-foreground">
                      <Github className="h-4 w-4 text-primary" />
                      GitHub
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
                  </Link>
                ) : null}
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-border/70 bg-background/45 p-5 backdrop-blur-xl">
              <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                {t("noteLabel")}
              </p>
              <p className="mt-3 text-sm leading-7 text-foreground/85">
                {t("note")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}