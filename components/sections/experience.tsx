"use client";

import {
  BriefcaseBusiness,
  GraduationCap,
  MapPin,
  CalendarRange,
  Sparkles,
  Building2,
} from "lucide-react";
import { useTranslations } from "next-intl";

import { Section } from "@/components/ui/section";
import { cn } from "@/lib/utils";

type StatItem = {
  label: string;
  value: string;
};

type ExperienceItem = {
  period: string;
  role: string;
  company: string;
  location: string;
  type: "development" | "teaching";
  employmentType?: string;
  description: string;
  highlights: string[];
};

export function ExperienceSection() {
  const t = useTranslations("Experience");

  const stats = t.raw("stats") as StatItem[];
  const items = t.raw("items") as ExperienceItem[];

  return (
    <Section
      id="experience"
      className="relative overflow-hidden scroll-mt-24"
      containerClassName="relative"
    >
      <div className="pointer-events-none absolute inset-0 -z-20">
        <div className="absolute left-[4%] top-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute right-[6%] top-20 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-primary/6 blur-3xl" />
      </div>

      <div className="pointer-events-none absolute inset-0 -z-10 opacity-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,hsl(var(--primary)/0.08),transparent_22%),radial-gradient(circle_at_bottom_right,hsl(var(--accent)/0.08),transparent_24%)]" />
      </div>

      <div className="space-y-8">
        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary/80">
              {t("eyebrow")}
            </p>

            <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground md:text-4xl">
              {t("title")}
            </h2>
          </div>

          <div className="lg:justify-self-end">
            <p className="max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">
              {t("description")}
            </p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={cn(
                "group relative overflow-hidden rounded-[1.4rem] border p-4 backdrop-blur-xl transition-all duration-300",
                "border-border/70 shadow-[var(--shadow-soft)] hover:-translate-y-1 hover:shadow-[var(--shadow-medium)]",
                index === 1
                  ? "bg-gradient-to-br from-primary/12 via-card/82 to-card/70"
                  : index === 2
                    ? "bg-gradient-to-br from-accent/10 via-card/82 to-card/70"
                    : "bg-card/78"
              )}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(var(--primary)/0.10),transparent_30%)]" />

              <div className="relative">
                <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  {stat.label}
                </p>
                <p className="mt-2 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                  {stat.value}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="relative overflow-hidden rounded-[1.9rem] border border-border/70 bg-card/72 p-4 shadow-[var(--shadow-medium)] backdrop-blur-xl md:p-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(var(--primary)/0.08),transparent_20%),radial-gradient(circle_at_bottom_left,hsl(var(--accent)/0.08),transparent_24%)]" />

          <div className="relative">
            <div className="absolute bottom-0 left-[20px] top-0 hidden w-px bg-gradient-to-b from-primary/30 via-border/70 to-transparent md:block" />

            <div className="space-y-4">
              {items.map((item) => {
                const isTeaching = item.type === "teaching";

                return (
                  <article
                    key={`${item.role}-${item.company}-${item.period}`}
                    className="relative md:pl-14"
                  >
                    <div className="absolute left-0 top-5 z-10 hidden h-10 w-10 items-center justify-center rounded-2xl border border-border/70 bg-background/90 shadow-[var(--shadow-soft)] backdrop-blur-xl md:flex">
                      {isTeaching ? (
                        <GraduationCap className="h-4 w-4 text-primary" />
                      ) : (
                        <BriefcaseBusiness className="h-4 w-4 text-primary" />
                      )}
                    </div>

                    <div
                      className={cn(
                        "relative overflow-hidden rounded-[1.5rem] border p-4 transition-all duration-300 md:p-5",
                        "border-border/70 shadow-[var(--shadow-soft)] backdrop-blur-xl",
                        "hover:-translate-y-1 hover:shadow-[var(--shadow-medium)]",
                        isTeaching
                          ? "bg-gradient-to-br from-accent/10 via-card/84 to-card/74"
                          : "bg-gradient-to-br from-primary/10 via-card/84 to-card/74"
                      )}
                    >
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(var(--primary)/0.10),transparent_26%)]" />

                      <div className="relative space-y-4">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                            {item.period}
                          </span>

                          {item.employmentType ? (
                            <span className="inline-flex rounded-full border border-border/70 bg-background/65 px-3 py-1 text-xs font-medium text-foreground/80">
                              {item.employmentType}
                            </span>
                          ) : null}

                          <span
                            className={cn(
                              "inline-flex rounded-full border px-3 py-1 text-xs font-medium",
                              isTeaching
                                ? "border-accent/20 bg-accent/10 text-accent"
                                : "border-border/70 bg-background/65 text-muted-foreground"
                            )}
                          >
                            {isTeaching ? "Teaching" : "Development"}
                          </span>
                        </div>

                        <div className="space-y-2">
                          <h3 className="text-xl font-bold tracking-tight text-foreground md:text-[1.7rem]">
                            {item.role}
                          </h3>

                          <div className="flex flex-wrap items-center gap-3 text-sm">
                            <span className="inline-flex items-center gap-2 font-medium text-foreground/85">
                              <Building2 className="h-4 w-4 text-primary" />
                              {item.company}
                            </span>
                          </div>
                        </div>

                        <p className="max-w-4xl text-sm leading-7 text-muted-foreground md:text-base">
                          {item.description}
                        </p>

                        <div className="flex flex-wrap gap-3">
                          <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/50 px-3 py-2 text-sm text-foreground/85 backdrop-blur-lg">
                            <MapPin className="h-4 w-4 text-primary" />
                            <span className="font-medium">{item.location}</span>
                          </div>

                          <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/50 px-3 py-2 text-sm text-foreground/85 backdrop-blur-lg">
                            <CalendarRange className="h-4 w-4 text-primary" />
                            <span className="font-medium">{item.period}</span>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                            <Sparkles className="h-4 w-4 text-primary" />
                            Key highlights
                          </div>

                          <div className="grid gap-2 md:grid-cols-2">
                            {item.highlights.map((highlight) => (
                              <div
                                key={highlight}
                                className="flex items-start gap-3 rounded-[1rem] border border-border/55 bg-background/45 px-3.5 py-3 text-sm leading-6 text-foreground/90"
                              >
                                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                                <span>{highlight}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
// "use client";

// import {
//   BriefcaseBusiness,
//   GraduationCap,
//   MapPin,
//   CalendarRange,
//   Sparkles,
//   Building2,
// } from "lucide-react";
// import { useTranslations } from "next-intl";

// import { Section } from "@/components/ui/section";
// import { cn } from "@/lib/utils";

// type StatItem = {
//   label: string;
//   value: string;
// };

// type ExperienceItem = {
//   period: string;
//   role: string;
//   company: string;
//   location: string;
//   type: "development" | "teaching";
//   employmentType?: string;
//   description: string;
//   highlights: string[];
// };

// export function ExperienceSection() {
//   const t = useTranslations("Experience");

//   const stats = t.raw("stats") as StatItem[];
//   const items = t.raw("items") as ExperienceItem[];

//   return (
//     <Section
//       id="experience"
//       className="relative overflow-hidden scroll-mt-24"
//       containerClassName="relative"
//     >
//       <div className="pointer-events-none absolute inset-0 -z-20">
//         <div className="absolute left-[4%] top-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
//         <div className="absolute right-[6%] top-20 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
//         <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-primary/6 blur-3xl" />
//       </div>

//       <div className="pointer-events-none absolute inset-0 -z-10 opacity-50">
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,hsl(var(--primary)/0.08),transparent_22%),radial-gradient(circle_at_bottom_right,hsl(var(--accent)/0.08),transparent_24%)]" />
//       </div>

//       <div className="space-y-8">
//         <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
//           <div className="max-w-2xl">
//             <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary/80">
//               {t("eyebrow")}
//             </p>

//             <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
//               {t("title")}
//             </h2>
//           </div>

//           <div className="lg:justify-self-end">
//             <p className="max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">
//               {t("description")}
//             </p>
//           </div>
//         </div>

//         <div className="grid gap-4 md:grid-cols-3">
//           {stats.map((stat, index) => (
//             <div
//               key={stat.label}
//               className={cn(
//                 "group relative overflow-hidden rounded-[1.5rem] border p-4 backdrop-blur-xl transition-all duration-300",
//                 "border-border/70 shadow-[var(--shadow-soft)] hover:-translate-y-1 hover:shadow-[var(--shadow-medium)]",
//                 index === 1
//                   ? "bg-gradient-to-br from-primary/12 via-card/80 to-card/68"
//                   : index === 2
//                     ? "bg-gradient-to-br from-accent/10 via-card/80 to-card/68"
//                     : "bg-card/75"
//               )}
//             >
//               <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(var(--primary)/0.10),transparent_28%)]" />

//               <div className="relative">
//                 <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
//                   {stat.label}
//                 </p>

//                 <p className="mt-2 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
//                   {stat.value}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="relative overflow-hidden rounded-[2rem] border border-border/70 bg-card/72 p-4 shadow-[var(--shadow-medium)] backdrop-blur-xl md:p-6">
//           <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(var(--primary)/0.08),transparent_20%),radial-gradient(circle_at_bottom_left,hsl(var(--accent)/0.08),transparent_24%)]" />

//           <div className="relative">
//             <div className="absolute bottom-0 left-[21px] top-0 hidden w-px bg-gradient-to-b from-primary/30 via-border to-transparent md:block" />

//             <div className="space-y-5">
//               {items.map((item) => {
//                 const isTeaching = item.type === "teaching";

//                 return (
//                   <article
//                     key={`${item.role}-${item.company}-${item.period}`}
//                     className="relative md:pl-14"
//                   >
//                     <div className="absolute left-0 top-5 z-10 hidden h-10 w-10 items-center justify-center rounded-2xl border border-border/70 bg-background/90 shadow-[var(--shadow-soft)] backdrop-blur-xl md:flex">
//                       {isTeaching ? (
//                         <GraduationCap className="h-4 w-4 text-primary" />
//                       ) : (
//                         <BriefcaseBusiness className="h-4 w-4 text-primary" />
//                       )}
//                     </div>

//                     <div
//                       className={cn(
//                         "relative overflow-hidden rounded-[1.6rem] border p-4 transition-all duration-300 md:p-5",
//                         "border-border/70 shadow-[var(--shadow-soft)] backdrop-blur-xl",
//                         "hover:-translate-y-1 hover:shadow-[var(--shadow-medium)]",
//                         isTeaching
//                           ? "bg-gradient-to-br from-accent/10 via-card/82 to-card/70"
//                           : "bg-gradient-to-br from-primary/10 via-card/82 to-card/70"
//                       )}
//                     >
//                       <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(var(--primary)/0.10),transparent_26%)]" />

//                       <div className="relative grid gap-4 xl:grid-cols-[1.15fr_0.85fr] xl:items-start">
//                         <div className="space-y-4">
//                           <div className="flex flex-wrap items-center gap-2">
//                             <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
//                               {item.period}
//                             </span>

//                             {item.employmentType ? (
//                               <span className="inline-flex rounded-full border border-border/70 bg-background/65 px-3 py-1 text-xs font-medium text-foreground/80">
//                                 {item.employmentType}
//                               </span>
//                             ) : null}

//                             <span
//                               className={cn(
//                                 "inline-flex rounded-full border px-3 py-1 text-xs font-medium",
//                                 isTeaching
//                                   ? "border-accent/20 bg-accent/10 text-accent"
//                                   : "border-border/70 bg-background/65 text-muted-foreground"
//                               )}
//                             >
//                               {isTeaching ? "Teaching" : "Development"}
//                             </span>
//                           </div>

//                           <div>
//                             <h3 className="text-xl font-bold tracking-tight text-foreground md:text-[1.7rem]">
//                               {item.role}
//                             </h3>

//                             <div className="mt-2 flex flex-wrap items-center gap-3 text-sm">
//                               <span className="inline-flex items-center gap-2 font-medium text-foreground/85">
//                                 <Building2 className="h-4 w-4 text-primary" />
//                                 {item.company}
//                               </span>
//                             </div>
//                           </div>

//                           <div className="rounded-[1.2rem] border border-border/60 bg-background/45 p-4 backdrop-blur-lg">
//                             <p className="text-sm leading-7 text-muted-foreground md:text-base">
//                               {item.description}
//                             </p>
//                           </div>
//                         </div>

//                         <div className="space-y-3 xl:space-y-3">
//                           <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
//                             <div className="rounded-[1.15rem] border border-border/60 bg-background/55 p-3 backdrop-blur-lg">
//                               <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
//                                 <MapPin className="h-3.5 w-3.5 text-primary" />
//                                 Location
//                               </div>
//                               <p className="mt-1.5 text-sm font-semibold text-foreground">
//                                 {item.location}
//                               </p>
//                             </div>

//                             <div className="rounded-[1.15rem] border border-border/60 bg-background/55 p-3 backdrop-blur-lg">
//                               <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
//                                 <CalendarRange className="h-3.5 w-3.5 text-primary" />
//                                 Timeline
//                               </div>
//                               <p className="mt-1.5 text-sm font-semibold text-foreground">
//                                 {item.period}
//                               </p>
//                             </div>
//                           </div>

//                           <div className="rounded-[1.2rem] border border-border/60 bg-background/40 p-3.5 backdrop-blur-lg">
//                             <div className="mb-2.5 flex items-center gap-2 text-sm font-medium text-foreground">
//                               <Sparkles className="h-4 w-4 text-primary" />
//                               Key highlights
//                             </div>

//                             <ul className="grid gap-2">
//                               {item.highlights.map((highlight) => (
//                                 <li
//                                   key={highlight}
//                                   className="flex items-start gap-3 rounded-[0.95rem] border border-border/50 bg-background/45 px-3 py-2.5 text-sm leading-6 text-foreground/90"
//                                 >
//                                   <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
//                                   <span>{highlight}</span>
//                                 </li>
//                               ))}
//                             </ul>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </article>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </div>
//     </Section>
//   );
// }