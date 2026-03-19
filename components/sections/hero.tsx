"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Sparkles,
  CircleDot,
  Code2,
  GraduationCap,
  Rocket,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { Section } from "@/components/ui/section";

type HeroProps = {
  socialLinks: {
    github?: string;
    linkedin?: string;
    email?: string;
  };
};

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

const fadeUpTransition = (delay = 0) => ({
  duration: 0.55,
  delay,
  ease: [0.22, 1, 0.36, 1] as const,
});

export function Hero({ socialLinks }: HeroProps) {
  const t = useTranslations("Hero");

  const proofItems = [
    {
      icon: Code2,
      label: "MERN + Next.js",
    },
    {
      icon: GraduationCap,
      label: "Instructor Mindset",
    },
    {
      icon: Rocket,
      label: "Production-Ready Delivery",
    },
  ];

  return (
    <Section
      id="home"
      className="relative overflow-hidden pt-10 pb-6 md:pt-16 md:pb-8"
      containerClassName="relative"
    >
      <div className="pointer-events-none absolute inset-0 -z-20">
        <div className="hero-grid absolute inset-0 opacity-40 [mask-image:radial-gradient(circle_at_center,black,transparent_82%)]" />
      </div>

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[6%] top-8 h-64 w-64 rounded-full bg-primary/12 blur-3xl animate-[pulse-glow_8s_ease-in-out_infinite]" />
        <div className="absolute right-[8%] top-20 h-72 w-72 rounded-full bg-accent/12 blur-3xl animate-[pulse-glow_10s_ease-in-out_infinite]" />
        <div className="absolute bottom-0 left-1/3 h-56 w-56 rounded-full bg-primary/8 blur-3xl" />
      </div>

      <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div className="max-w-3xl">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={fadeUpTransition(0)}
            className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/80 px-4 py-2.5 text-sm font-semibold tracking-[0.08em] text-foreground shadow-[var(--shadow-soft)] backdrop-blur-xl"
          >
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-muted-foreground">{t("greetingPrefix")}</span>
            <span className="text-foreground">{t("greetingName")}</span>
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={fadeUpTransition(0.08)}
            className="mt-6 max-w-3xl text-3xl font-bold leading-[1.12] tracking-tight text-foreground sm:text-4xl lg:text-6xl"
          >
            <span className="block">{t("title")}</span>
            <span className="mt-3 block text-foreground/80">{t("subtitle")}</span>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={fadeUpTransition(0.16)}
            className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg"
          >
            {t("description")}
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={fadeUpTransition(0.24)}
            className="mt-6 flex flex-wrap gap-3"
          >
            {proofItems.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/70 px-3.5 py-2 text-xs font-medium text-foreground/85 shadow-[var(--shadow-soft)] backdrop-blur-xl md:text-sm"
                >
                  <Icon className="h-4 w-4 text-primary" />
                  <span>{item.label}</span>
                </div>
              );
            })}
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={fadeUpTransition(0.32)}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <Link
              href="#projects"
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-medium)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-strong)]"
            >
              {t("ctaProjects")}
              <ArrowUpRight className="ms-2 h-4 w-4" />
            </Link>

            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-border bg-card/75 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-secondary"
            >
              {t("ctaContact")}
            </Link>

            <div className="ms-0 flex items-center gap-3 md:ms-2">
              {socialLinks.github ? (
                <Link
                  href={socialLinks.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/70 bg-card/72 text-foreground shadow-[var(--shadow-soft)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:text-primary"
                >
                  <Github className="h-5 w-5" />
                </Link>
              ) : null}

              {socialLinks.linkedin ? (
                <Link
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/70 bg-card/72 text-foreground shadow-[var(--shadow-soft)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:text-primary"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
              ) : null}

              {socialLinks.email ? (
                <Link
                  href={`mailto:${socialLinks.email}`}
                  aria-label="Email"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/70 bg-card/72 text-foreground shadow-[var(--shadow-soft)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:text-primary"
                >
                  <Mail className="h-5 w-5" />
                </Link>
              ) : null}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 18, y: 14 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.18,
            ease: [0.22, 1, 0.36, 1] as const,
          }}
          className="relative"
        >
          <div className="surface-card relative overflow-hidden rounded-[2rem] p-4 md:p-5">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(var(--primary)/0.14),transparent_28%),radial-gradient(circle_at_bottom_left,hsl(var(--accent)/0.12),transparent_30%)]" />

            <div className="relative flex items-center gap-2 border-b border-border/60 pb-4">
              <span className="h-3 w-3 rounded-full bg-primary/40" />
              <span className="h-3 w-3 rounded-full bg-accent/40" />
              <span className="h-3 w-3 rounded-full bg-foreground/15" />
              <span className="ms-3 text-xs font-medium tracking-[0.18em] text-muted-foreground">
                PORTFOLIO / PROFILE
              </span>
            </div>

            <div className="relative mt-4 grid gap-4">
              <div className="rounded-[1.5rem] border border-border/70 bg-background/60 p-4 backdrop-blur-xl">
                <div className="font-mono text-xs leading-6 text-muted-foreground md:text-sm">
                  <p>{`const developer = {`}</p>
                  <p className="ps-4">{`name: "${t("code.name")}",`}</p>
                  <p className="ps-4">{`role: "${t("code.role")}",`}</p>
                  <p className="ps-4">{`stack: ["MongoDB", "Express", "React", "Node.js", "Next.js"],`}</p>
                  <p className="ps-4">{`focus: ["${t("code.focus1")}", "${t("code.focus2")}", "${t("code.focus3")}"],`}</p>
                  <p>{`};`}</p>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="surface-soft rounded-[1.5rem] p-4">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                    {t("cards.coreFocusLabel")}
                  </p>
                  <p className="mt-3 text-sm font-semibold leading-7 text-foreground md:text-base">
                    {t("cards.coreFocusValue")}
                  </p>
                </div>

                <div className="surface-soft rounded-[1.5rem] p-4">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                    {t("cards.whatMattersLabel")}
                  </p>
                  <p className="mt-3 text-sm font-semibold leading-7 text-foreground md:text-base">
                    {t("cards.whatMattersValue")}
                  </p>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-border/60 bg-card/70 p-4 backdrop-blur-xl">
                  <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                    <CircleDot className="h-4 w-4 text-primary" />
                    Focus
                  </div>
                  <p className="mt-2 text-sm font-semibold text-foreground">
                    Product UI
                  </p>
                </div>

                <div className="rounded-2xl border border-border/60 bg-card/70 p-4 backdrop-blur-xl">
                  <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                    <CircleDot className="h-4 w-4 text-primary" />
                    Mode
                  </div>
                  <p className="mt-2 text-sm font-semibold text-foreground">
                    Bilingual + RTL
                  </p>
                </div>

                <div className="rounded-2xl border border-border/60 bg-card/70 p-4 backdrop-blur-xl">
                  <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                    <CircleDot className="h-4 w-4 text-primary" />
                    Style
                  </div>
                  <p className="mt-2 text-sm font-semibold text-foreground">
                    Fast + Accessible
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

<div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-b from-transparent via-background/45 to-background" />     </Section>
  );
}