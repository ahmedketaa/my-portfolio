import Image from "next/image";
import {
  GraduationCap,
  BriefcaseBusiness,
  LaptopMinimal,
  Rocket,
  Users,
  LineChart,
  Cpu,
  Layers
} from "lucide-react";
import { useTranslations } from "next-intl";
import { Section } from "@/components/ui/section";

const icons = [
  GraduationCap,
  BriefcaseBusiness,
  LaptopMinimal,
  Rocket,
  Users,
  LineChart,
  Cpu,
  Layers
];

export function About() {
  const t = useTranslations("About");

  const highlights = [
    {
      icon: icons[0],
      label: t("highlights.education.label"),
      value: t("highlights.education.value"),
    },
    {
      icon: icons[1],
      label: t("highlights.mentoring.label"),
      value: t("highlights.mentoring.value"),
    },
    {
      icon: icons[2],
      label: t("highlights.stack.label"),
      value: t("highlights.stack.value"),
    },
    {
      icon: icons[3],
      label: t("highlights.impact.label"),
      value: t("highlights.impact.value"),
    },
    {
      icon: icons[4],
      label: t("highlights.teaching.label"),
      value: t("highlights.teaching.value"),
    },
    {
      icon: icons[5],
      label: t("highlights.seo.label"),
      value: t("highlights.seo.value"),
    },
    {
      icon: icons[6],
      label: t("highlights.performance.label"),
      value: t("highlights.performance.value"),
    },
    {
      icon: icons[7],
      label: t("highlights.architecture.label"),
      value: t("highlights.architecture.value"),
    },
  ];

  return (
    <Section
      id="about"
      className="relative overflow-hidden"
      containerClassName="relative"
    >
      <div className="absolute inset-0 -z-10 opacity-70">
        <div className="absolute left-8 top-10 h-56 w-56 rounded-full bg-primary/8 blur-3xl" />
        <div className="absolute right-8 bottom-0 h-56 w-56 rounded-full bg-accent/8 blur-3xl" />
      </div>

      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">

        {/* LEFT SIDE */}
        <div className="rounded-3xl border border-border/70 bg-card/85 p-6 shadow-[var(--shadow-medium)] backdrop-blur">

         <div className="relative mb-6 overflow-hidden rounded-[2rem] border border-border/60 bg-gradient-to-b from-primary/12 via-accent/6 to-transparent p-5 shadow-[var(--shadow-medium)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_hsl(var(--primary)/0.18),_transparent_45%),radial-gradient(circle_at_bottom,_hsl(var(--accent)/0.14),_transparent_35%)]" />

        <div className="absolute -left-10 top-10 h-28 w-28 rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute -right-8 bottom-8 h-24 w-24 rounded-full bg-accent/15 blur-3xl" />

  <div className="relative rounded-[1.5rem] border border-white/10 bg-card/40 p-4 backdrop-blur-sm">
    <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
    <Image
      src="/media/ahmed.png"
      alt="Ahmed Mostafa"
      width={420}
      height={420}
      priority
      className="mx-auto animate-[float-soft_6s_ease-in-out_infinite] object-contain drop-shadow-[0_18px_40px_rgba(0,0,0,0.22)] transition-transform duration-500 hover:scale-[1.015]"
    />
  </div>
</div>

          <p className="text-sm font-medium text-primary">
            {t("eyebrow")}
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {t("title")}
          </h2>

          <p className="mt-5 text-base leading-8 text-muted-foreground">
            {t("description")}
          </p>

          <p className="mt-4 text-base leading-8 text-muted-foreground">
            {t("description2")}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {["React","Next.js","Node.js","MongoDB","TypeScript","SEO"].map((item)=>(
              <span
                key={item}
                className="rounded-full border border-border/70 bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="grid gap-4 sm:grid-cols-2">
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="rounded-3xl border border-border/70 bg-card p-5 shadow-[var(--shadow-soft)] transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>

                <p className="mt-4 text-sm text-muted-foreground">
                  {item.label}
                </p>

                <p className="mt-2 text-base font-semibold leading-7 text-foreground">
                  {item.value}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </Section>
  );
}