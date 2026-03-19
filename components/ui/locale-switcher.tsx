"use client";

import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";

export function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const nextLocale = locale === "ar" ? "en" : "ar";

  const handleSwitch = () => {
    const hash = window.location.hash;
    const segments = pathname.split("/");

    segments[1] = nextLocale;

    const nextPath = segments.join("/") || `/${nextLocale}`;
    router.push(`${nextPath}${hash}`);
  };

  return (
    <button
      type="button"
      onClick={handleSwitch}
      aria-label="Switch language"
className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/75 text-foreground backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40"    >
      {locale === "ar" ? "EN" : "AR"}
    </button>
  );
}