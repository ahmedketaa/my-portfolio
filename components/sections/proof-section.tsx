"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import {
  motion,
  AnimatePresence,
  type Transition,
  useReducedMotion,
} from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Expand,
  Play,
  Sparkles,
  Users,
  GraduationCap,
  Presentation,
  X,
} from "lucide-react";
import { useTranslations } from "next-intl";

import { Section } from "@/components/ui/section";
import { cn } from "@/lib/utils";

type MediaItem = {
  id: string;
  type: "image" | "video";
  src: string;
  poster?: string;
  titleKey: string;
  descriptionKey: string;
  featured?: boolean;
  span?: "wide" | "tall" | "normal";
};

const mediaItems: MediaItem[] = [
  {
    id: "offline-session",
    type: "video",
    src: "/media/offline-session.mp4",
    
    titleKey: "items.offlineSession.title",
    descriptionKey: "items.offlineSession.description",
    featured: true,
    span: "wide",
  },
  {
    id: "teaching-stage",
    type: "image",
    src: "/media/teaching-stage.jpeg",
    titleKey: "items.teachingStage.title",
    descriptionKey: "items.teachingStage.description",
    span: "tall",
  },
  {
    id: "project-discussion",
    type: "image",
    src: "/media/project-discussion.jpeg",
    titleKey: "items.projectDiscussion.title",
    descriptionKey: "items.projectDiscussion.description",
    span: "normal",
  },
  {
    id: "workshop-room",
    type: "image",
    src: "/media/workshop-room.jpeg",
    titleKey: "items.workshopRoom.title",
    descriptionKey: "items.workshopRoom.description",
    span: "wide",
  },
  {
    id: "students-group",
    type: "image",
    src: "/media/students-group.jpeg",
    titleKey: "items.studentsGroup.title",
    descriptionKey: "items.studentsGroup.description",
    span: "normal",
  },
  {
    id: "online-session",
    type: "video",
    src: "/media/online-session.mp4",
    
    titleKey: "items.onlineSession.title",
    descriptionKey: "items.onlineSession.description",
    span: "normal",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

const springTransition: Transition = {
  type: "spring",
  stiffness: 220,
  damping: 22,
};

export function ProofSection() {
  const t = useTranslations("Proof");
  const reduceMotion = useReducedMotion();

  const [activeId, setActiveId] = useState<string | null>(
    mediaItems.find((item) => item.featured)?.id ?? mediaItems[0]?.id ?? null
  );
  const [studioOpen, setStudioOpen] = useState(false);

  const activeIndex = useMemo(
    () => mediaItems.findIndex((item) => item.id === activeId),
    [activeId]
  );

  const activeItem =
    mediaItems.find((item) => item.id === activeId) ?? mediaItems[0];

  const handlePrev = () => {
    const prevIndex =
      activeIndex <= 0 ? mediaItems.length - 1 : activeIndex - 1;
    setActiveId(mediaItems[prevIndex].id);
  };

  const handleNext = () => {
    const nextIndex =
      activeIndex >= mediaItems.length - 1 ? 0 : activeIndex + 1;
    setActiveId(mediaItems[nextIndex].id);
  };

  useEffect(() => {
    if (!studioOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setStudioOpen(false);
      if (event.key === "ArrowRight") handleNext();
      if (event.key === "ArrowLeft") handlePrev();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [studioOpen, activeIndex]);

  return (
    <Section
      id="proof"
      className="relative overflow-hidden scroll-mt-24"
      containerClassName="relative"
    >
      <div className="pointer-events-none absolute inset-0 -z-20">
        <div className="absolute left-[6%] top-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute right-[8%] top-24 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-56 w-56 rounded-full bg-primary/6 blur-3xl" />
      </div>

      <div className="pointer-events-none absolute inset-0 -z-10 opacity-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,hsl(var(--primary)/0.08),transparent_22%),radial-gradient(circle_at_bottom_right,hsl(var(--accent)/0.08),transparent_24%)]" />
      </div>

      <div className="space-y-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          custom={0}
          variants={fadeUp}
          className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-end"
        >
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-card/70 px-4 py-2 text-xs font-semibold tracking-[0.16em] text-muted-foreground backdrop-blur-xl">
              <Sparkles className="h-4 w-4 text-primary" />
              {t("eyebrow")}
            </div>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              {t("title")}
            </h2>
          </div>

          <p className="max-w-2xl text-sm leading-7 text-muted-foreground md:text-base lg:justify-self-end">
            {t("description")}
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          custom={1}
          variants={fadeUp}
          className="grid gap-4 sm:grid-cols-3"
        >
          <StatCard
            icon={<Users className="h-4 w-4 text-primary" />}
            label={t("stats.students")}
            value="100+"
          />
          <StatCard
            icon={<GraduationCap className="h-4 w-4 text-primary" />}
            label={t("stats.sessions")}
            value="20+"
          />
          <StatCard
            icon={<Presentation className="h-4 w-4 text-primary" />}
            label={t("stats.workshops")}
            value="10+"
          />
        </motion.div>

        <div className="grid gap-5 lg:grid-cols-[1.06fr_0.94fr] lg:items-start">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={2}
            variants={fadeUp}
            className="relative lg:sticky lg:top-24"
          >
            <div className="relative overflow-hidden rounded-[2rem] border border-border/40 bg-card/72 p-4 shadow-[var(--shadow-medium)] backdrop-blur-xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(var(--primary)/0.12),transparent_24%),radial-gradient(circle_at_bottom_left,hsl(var(--accent)/0.10),transparent_28%)]" />

              <div className="relative space-y-4">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                      {t("featuredLabel")}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold tracking-tight text-foreground md:text-2xl">
                      {t(activeItem.titleKey)}
                    </h3>
                  </div>

                  <button
                    type="button"
                    onClick={() => setStudioOpen(true)}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/50 bg-background/60 text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
                    aria-label={t("openStudio")}
                  >
                    <Expand className="h-4 w-4" />
                  </button>
                </div>

                <motion.button
                  layoutId={`proof-media-${activeItem.id}`}
                  type="button"
                  onClick={() => setStudioOpen(true)}
                  whileHover={reduceMotion ? undefined : { y: -4, scale: 1.01 }}
                  transition={springTransition}
                  className={cn(
                    "group relative block w-full overflow-hidden rounded-[1.6rem] border bg-black text-left",
                    "before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:opacity-100",
                    "before:bg-[linear-gradient(135deg,rgba(168,85,247,0.95),rgba(236,72,153,0.92),rgba(251,191,36,0.9),rgba(239,68,68,0.88))]",
                    "before:p-[2px]",
                    "after:pointer-events-none after:absolute after:inset-[2px] after:rounded-[calc(1.6rem-2px)] after:bg-black",
                    "shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_0_24px_rgba(168,85,247,0.22),0_0_44px_rgba(251,191,36,0.12)]"
                  )}
                >
                  <div className="relative z-10">
                    <FeaturedMedia item={activeItem} />

                    <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent p-5">
                      <div className="max-w-2xl">
                        <p className="text-sm font-semibold text-white">
                          {t(activeItem.titleKey)}
                        </p>
                        <p className="mt-2 text-sm leading-6 text-white/78">
                          {t(activeItem.descriptionKey)}
                        </p>
                      </div>
                    </div>

                    <div className="pointer-events-none absolute right-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/35 px-3 py-1.5 text-xs font-medium text-white/90 backdrop-blur-md">
                      {activeItem.type === "video" ? (
                        <>
                          <Play className="h-3.5 w-3.5 fill-current" />
                          {t("video")}
                        </>
                      ) : (
                        <>
                          <Expand className="h-3.5 w-3.5" />
                          {t("image")}
                        </>
                      )}
                    </div>
                  </div>
                </motion.button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="grid auto-rows-[185px] gap-4 sm:grid-cols-2"
          >
            {mediaItems.map((item, index) => {
              const isActive = item.id === activeId;

              return (
                <motion.button
                  key={item.id}
                  layoutId={`proof-media-${item.id}`}
                  type="button"
                  custom={index + 3}
                  variants={fadeUp}
                  onClick={() => {
                    setActiveId(item.id);
                    setStudioOpen(true);
                  }}
                  whileHover={reduceMotion ? undefined : { y: -8, scale: 1.018 }}
                  transition={springTransition}
                  className={cn(
                    "group relative overflow-hidden rounded-[1.5rem] border text-left shadow-[var(--shadow-soft)] backdrop-blur-xl",
                    "border-border/35 bg-card/72 hover:border-primary/30",
                    "before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:opacity-0 before:transition-opacity before:duration-300",
                    "after:pointer-events-none after:absolute after:inset-[1.5px] after:rounded-[calc(1.5rem-2px)] after:opacity-0 after:transition-opacity after:duration-300",
                    item.span === "wide" && "sm:col-span-2",
                    item.span === "tall" && "sm:row-span-2 sm:min-h-[388px]",
                    isActive && [
                      "border-transparent",
                      "before:opacity-100",
                      "before:bg-[linear-gradient(135deg,rgba(168,85,247,0.95),rgba(236,72,153,0.92),rgba(251,191,36,0.9),rgba(239,68,68,0.88))]",
                      "before:p-[2px]",
                      "after:opacity-100",
                      "after:bg-card/90",
                      "shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_0_24px_rgba(168,85,247,0.22),0_0_44px_rgba(251,191,36,0.12)]",
                    ]
                  )}
                >
                  <div className="relative z-10 h-full">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(var(--primary)/0.08),transparent_28%)]" />

                    <ThumbnailMedia item={item} />

                    <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-4">
                      <div className="flex items-end justify-between gap-3">
                        <div>
                          <p className="text-sm font-semibold text-white">
                            {t(item.titleKey)}
                          </p>
                          <p className="mt-1 line-clamp-2 text-xs leading-5 text-white/75">
                            {t(item.descriptionKey)}
                          </p>
                        </div>

                        <div className="shrink-0 rounded-full border border-white/15 bg-black/30 p-2 text-white/85 backdrop-blur-md">
                          {item.type === "video" ? (
                            <Play className="h-3.5 w-3.5 fill-current" />
                          ) : (
                            <Expand className="h-3.5 w-3.5" />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {studioOpen ? (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.button
              type="button"
              aria-label={t("closeStudio")}
              className="absolute inset-0 bg-black/70 backdrop-blur-md"
              onClick={() => setStudioOpen(false)}
            />

            <motion.div
              layoutId={`proof-media-${activeItem.id}`}
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 14 }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 w-full max-w-6xl"
            >
              <div className="rounded-[2rem] bg-[linear-gradient(135deg,rgba(168,85,247,0.95),rgba(236,72,153,0.92),rgba(251,191,36,0.9),rgba(239,68,68,0.88))] p-[1.5px] shadow-[0_30px_120px_rgba(0,0,0,0.45)]">
                <div className="overflow-hidden rounded-[calc(2rem-1.5px)] border border-white/10 bg-[#09090c]/92 backdrop-blur-xl">
                  <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3 md:px-5">
                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold text-white">
                        {t(activeItem.titleKey)}
                      </p>
                      <p className="mt-1 truncate text-xs text-white/60">
                        {t(activeItem.descriptionKey)}
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={handlePrev}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/85 transition-all duration-300 hover:bg-white/10"
                        aria-label={t("previous")}
                      >
                        <ArrowLeft className="h-4 w-4" />
                      </button>

                      <button
                        type="button"
                        onClick={handleNext}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/85 transition-all duration-300 hover:bg-white/10"
                        aria-label={t("next")}
                      >
                        <ArrowRight className="h-4 w-4" />
                      </button>

                      <button
                        type="button"
                        onClick={() => setStudioOpen(false)}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/85 transition-all duration-300 hover:bg-white/10"
                        aria-label={t("closeStudio")}
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  </div>

                  <div className="grid gap-0 lg:grid-cols-[1.18fr_0.82fr]">
                    <div className="relative bg-black">
                      <div className="aspect-[16/10] w-full">
                        {activeItem.type === "video" ? (
                          <video
                            src={activeItem.src}
                            poster={activeItem.poster}
                            controls
                            autoPlay
                            playsInline
                            className="h-full w-full object-contain"
                          />
                        ) : (
                          <Image
                            src={activeItem.src}
                            alt={t(activeItem.titleKey)}
                            fill
                            sizes="(max-width: 1024px) 100vw, 70vw"
                            className="object-contain"
                          />
                        )}
                      </div>
                    </div>

                    <div className="border-t border-white/10 bg-white/[0.03] p-4 lg:border-l lg:border-t-0 lg:p-5">
                      <p className="text-[11px] uppercase tracking-[0.22em] text-white/45">
                        {t("studioLabel")}
                      </p>

                      <h3 className="mt-3 text-xl font-semibold tracking-tight text-white">
                        {t(activeItem.titleKey)}
                      </h3>

                      <p className="mt-4 text-sm leading-7 text-white/72">
                        {t(activeItem.descriptionKey)}
                      </p>

                      <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                        {mediaItems.map((item) => {
                          const isCurrent = item.id === activeItem.id;

                          return (
                            <button
                              key={item.id}
                              type="button"
                              onClick={() => setActiveId(item.id)}
                              className={cn(
                                "flex items-center gap-3 rounded-[1rem] border px-3 py-3 text-left transition-all duration-300",
                                isCurrent
                                  ? "border-white/20 bg-white/10 text-white"
                                  : "border-white/8 bg-white/[0.03] text-white/75 hover:bg-white/[0.06]"
                              )}
                            >
                              <div className="relative h-14 w-20 shrink-0 overflow-hidden rounded-lg bg-black">
                                {item.type === "video" ? (
                                  item.poster ? (
                                    <Image
                                      src={item.poster}
                                      alt={t(item.titleKey)}
                                      fill
                                      sizes="80px"
                                      className="object-cover opacity-80"
                                    />
                                  ) : (
                                    <div className="flex h-full w-full items-center justify-center">
                                      <Play className="h-4 w-4 text-white/70" />
                                    </div>
                                  )
                                ) : (
                                  <Image
                                    src={item.src}
                                    alt={t(item.titleKey)}
                                    fill
                                    sizes="80px"
                                    className="object-cover"
                                  />
                                )}
                              </div>

                              <div className="min-w-0">
                                <p className="truncate text-sm font-medium">
                                  {t(item.titleKey)}
                                </p>
                                <p className="mt-1 truncate text-xs text-white/55">
                                  {item.type === "video" ? t("video") : t("image")}
                                </p>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </Section>
  );
}

function StatCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-[1.35rem] border border-border/40 bg-card/72 p-4 shadow-[var(--shadow-soft)] backdrop-blur-xl">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        {icon}
        {label}
      </div>
      <p className="mt-2 text-2xl font-semibold tracking-tight text-foreground">
        {value}
      </p>
    </div>
  );
}

function FeaturedMedia({ item }: { item: MediaItem }) {
  if (item.type === "video") {
    return (
      <video
        src={item.src}
        poster={item.poster}
        muted
        autoPlay
        loop
        playsInline
        className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
      />
    );
  }

  return (
    <div className="relative aspect-[16/10] w-full">
      <Image
        src={item.src}
        alt=""
        fill
        sizes="(max-width: 1024px) 100vw, 65vw"
        className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
      />
    </div>
  );
}

function ThumbnailMedia({ item }: { item: MediaItem }) {
  if (item.type === "video") {
    return (
      <video
        src={item.src}
        poster={item.poster}
        muted
        autoPlay
        loop
        playsInline
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
      />
    );
  }

  return (
    <div className="relative h-full w-full">
      <Image
        src={item.src}
        alt=""
        fill
        sizes="(max-width: 1024px) 50vw, 28vw"
        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
      />
    </div>
  );
}