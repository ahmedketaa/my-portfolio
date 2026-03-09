"use client";

import { useLocale, useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("Hero");
  const locale = useLocale();

  return (
    <main className="p-6">
      <p className="text-sm text-neutral-500">{t("greeting")}</p>

      <h1 className="mt-2 text-3xl font-bold">
        {t("title")}
      </h1>

      <p className="mt-3 max-w-2xl text-base text-neutral-600">
        {t("description")}
      </p>

      <p className="mt-4 text-sm text-neutral-500">
        Current locale: {locale}
      </p>
    </main>
  );
}