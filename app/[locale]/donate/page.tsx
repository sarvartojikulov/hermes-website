"use client";

import { Headline } from "@/components/Headline";
import clsx from "clsx";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

export default function Donate() {
  const t = useTranslations("donate-page");

  return (
    <main className="container mx-auto flex flex-col gap-20 md:gap-20 lg:gap-36 pb-40">
      <section
        className={clsx(
          "mt-20 w-full grid grid-cols-6 gap-x-5 gap-y-12 lg:px-20",
          "lg:grid-cols-12 lg:py-12",
        )}
      >
        <div className="col-span-full">
          <Headline size="medium" label={t("label")} color="primary" />
        </div>
        <div className="col-span-full px-12">
          <p className="text-2xl mx-auto">{t("content0")}</p>
        </div>
        <div className="col-span-full flex justify-center items-center">
          <Headline size="medium" label={t("ways")} color="secondary" />
        </div>
        <div className="col-span-6 p-10 bg-amber-200 flex justify-center items-center">
          <Link
            target="_blank"
            href="https://next.privat24.ua/payments/form/%7B%22token%22:%2263b0b90f-2973-4193-91a2-1ebab0442361%22%7D?fbclid=PAAaZXApyen8IFceFMm29izN2LY7ms1-6_KZEb7OJoDUAbSfJ_doh3ahHniMg_aem_th_AfoF5ETAaV3lcennoTpEtf0hOGhmGjaCTAJHGhHiAHUs4c3G8d6gIdsxeoJCbHTsDSw"
          >
            <h3 className="text-4xl font-bold tracking-wider">PrivatBank</h3>
          </Link>
        </div>

        <div className="col-span-6 p-12 bg-amber-200 flex justify-center items-center">
          <Link
            target="_blank"
            href="https://send.monobank.ua/jar/7eprvyQxZH?fbclid=PAAabMTE6nG4HeomSIAVnT_i_ivZAH7sjakedjUDcXIeeb9ORdqbSUEVnOoFc_aem_AQkVD01bua3WA6ksuRYcJXxWryXhTEfEmLVLW7ejfZEHazJOOQOOvOhVzgq5PdU3KKE"
          >
            <h3 className="text-4xl font-bold tracking-wider">MonoBank</h3>
          </Link>
        </div>
        <div className="col-span-full px-12 space-y-10">
          <p className="text-2xl mx-auto">{t("content1")}</p>
          <p className="text-2xl mx-auto">{t("content2")}</p>
          <p className="text-2xl mx-auto">{t("content3")}</p>
        </div>
      </section>
    </main>
  );
}
