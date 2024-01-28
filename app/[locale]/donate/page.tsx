"use client";
import { Headline } from "@/components/Headline";
import clsx from "clsx";
import { useLocale, useTranslations } from "next-intl";
import Link from "next-intl/link";
import React from "react";

export default function Donate() {
  const t = useTranslations("donate-page");

  return (
    <main className="container mx-auto flex flex-col gap-20 pb-40 md:gap-20 lg:gap-36">
      <section
        className={clsx(
          "mt-20 grid w-full grid-cols-6 gap-x-5 gap-y-12",
          "lg:grid-cols-12 lg:py-12 lg:px-20",
        )}
      >
        <div className="col-span-full">
          <Headline size="medium" label={t("label")} color="primary" />
        </div>
        <div className="col-span-full px-2 md:px-12">
          <p className="mx-auto text-2xl">{t("content0")}</p>
        </div>
        <div className="col-span-full flex items-center justify-center">
          <Headline size="medium" label={t("ways")} color="secondary" />
        </div>

        <div className="col-span-full grid grid-cols-2 gap-4">
            <Link
              target="_blank"
              href="https://www.paypal.com/donate/?hosted_button_id=XTGNPPHY5JSGG"
              className="col-span-full flex items-center justify-center bg-amber-200 p-10"
            >
              <h3 className="text-4xl font-bold tracking-wider">PayPal</h3>
            </Link>
            <Link
              target="_blank"
              href="https://next.privat24.ua/payments/form/%7B%22token%22:%2263b0b90f-2973-4193-91a2-1ebab0442361%22%7D?fbclid=PAAaZXApyen8IFceFMm29izN2LY7ms1-6_KZEb7OJoDUAbSfJ_doh3ahHniMg_aem_th_AfoF5ETAaV3lcennoTpEtf0hOGhmGjaCTAJHGhHiAHUs4c3G8d6gIdsxeoJCbHTsDSw"
              className="col-span-full md:col-span-1 flex items-center justify-center bg-amber-200 p-10"
            >
              <h3 className="text-4xl font-bold tracking-wider">PrivatBank</h3>
            </Link>
            <Link
              target="_blank"
              href="https://send.monobank.ua/jar/7eprvyQxZH?fbclid=PAAabMTE6nG4HeomSIAVnT_i_ivZAH7sjakedjUDcXIeeb9ORdqbSUEVnOoFc_aem_AQkVD01bua3WA6ksuRYcJXxWryXhTEfEmLVLW7ejfZEHazJOOQOOvOhVzgq5PdU3KKE"
              className="col-span-full md:col-span-1 flex items-center justify-center bg-amber-200 p-12"
            >
              <h3 className="text-4xl font-bold tracking-wider">MonoBank</h3>
            </Link>
        </div>


        <div className="col-span-full space-y-10 px-2 md:px-12">
          <p className="mx-auto text-2xl">{t("content1")}</p>
          <p className="mx-auto text-2xl">{t("content2")}</p>
          <p className="mx-auto text-2xl">{t("content3")}</p>
          <p className="mx-auto text-2xl">{t("content4")}</p>
        </div>
      </section>
    </main>
  );
}
