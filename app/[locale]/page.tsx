"use client";

import { CTA } from "@/components/CTA";
import { Headline } from "@/components/Headline";
import Blog from "@/components/Blog";
import clsx from "clsx";
import { FAQItem } from "@/components/FAQItem";
import { useTranslations } from "use-intl";
import Link from "next-intl/link";

export default function Home() {
  const t = useTranslations("home-page");

  return (
    <main className="container mx-auto flex flex-col gap-20 pb-40 md:gap-20 lg:gap-36">
      <section
        className={clsx(
          "mt-20 grid w-full grid-cols-6 gap-x-5 gap-y-12",
          "lg:grid-cols-12 lg:py-12",
        )}
      >
        <div
          className={clsx("col-span-6 flex flex-col gap-8 lg:gap-16 lg:px-12")}
        >
          <Headline
            size="large"
            label={t("Landing.Help.header")}
            color="primary"
          />
          <p className="text-lg font-medium">{t("Landing.Help.body")}</p>
          <div className="flex justify-start lg:justify-start">
            <Link href="/donate">
              <CTA color="primary" label={t("Landing.Help.button")} />
            </Link>
          </div>
        </div>
        <div
          className={clsx("col-span-6 flex flex-col gap-8 lg:gap-16 lg:px-12")}
        >
          <Headline
            size="large"
            label={t("Landing.Ask.header")}
            color="secondary"
          />
          <p className="text-lg font-medium">{t("Landing.Ask.body")}</p>
          <div className="flex justify-start lg:mt-auto lg:justify-start">
            <CTA color="secondary" label={t("Landing.Ask.button")} />
          </div>
        </div>
      </section>

      <section
        className={clsx("grid grid-cols-6 gap-y-8 lg:grid-cols-12 lg:gap-y-16")}
      >
        <div className="col-span-6">
          <Headline
            size="medium"
            label={t("AboutUs.label")}
            color="primary"
            tag="h2"
          />
        </div>
        <div className="col-span-full row-start-2 flex flex-col gap-4 lg:px-40">
          {[0, 1].map((key) => (
            <p className="text-xl font-semibold" key={key}>
              {t(`AboutUs.contents.${key}`)}
            </p>
          ))}
        </div>
        <div className="col-span-2 col-start-1 row-start-3 flex justify-start lg:col-start-6 lg:justify-center">
          <Link href="/contact">
            <CTA color="primary" label={t("AboutUs.button")} />
          </Link>
        </div>
      </section>
      <section
        className={clsx(
          "grid grid-cols-6 gap-y-8 pb-20 md:pb-0 lg:grid-cols-12 lg:gap-y-16",
        )}
      >
        <Blog />
      </section>

      <section
        className={clsx("grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-y-16")}
      >
        <div className="col-span-full">
          <Headline
            size="medium"
            label={t("FAQ.label")}
            color="primary"
            tag="h2"
          />
        </div>

        {[0, 1, 2, 3, 4, 5].map((key) => (
          <FAQItem
            key={key}
            question={t(`FAQ.contents.${key}.question`)}
            answer={t(`FAQ.contents.${key}.answer`)}
          />
        ))}
      </section>
    </main>
  );
}
