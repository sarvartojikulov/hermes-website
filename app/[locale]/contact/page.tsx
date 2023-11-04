"use client"
import { Headline } from "@/components/Headline";
import { IconFacebook } from "@/components/Icons/IconFacebook";
import { IconInstagram } from "@/components/Icons/IconInstagram";
import clsx from "clsx";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

const CONTACTS = {
  email: "charity_hermes@ukr.net",
  phone: "+38 098 2181814",
  socials: {
    "facebook": "https://www.facebook.com/CharityfundHermes",
    "instagram": "https://instagram.com/charityfund_hermes"
  }
} as const

export default function Contact() {
  const t = useTranslations("contact-page");

  return (
    <main className="container mx-auto flex flex-col gap-20 md:gap-20 lg:gap-36 pb-40">
      <section
        className={clsx(
          "mt-20 w-full grid grid-cols-6 gap-x-5 gap-y-12",
          "lg:grid-cols-12 lg:py-12"
        )}
      >
        <div className="col-span-full">
          <Headline size="medium" label={t("label")} color="primary" />
        </div>

        <div className="col-span-full px-12">
          <p className="text-2xl font-semibold mx-auto">
            {t("content0")}
          </p>
        </div>
        <div className="py-12 bg-slate-200 rounded col-span-6 flex justify-start items-center pl-12 lg:pl-10 xl:pl-40">
          <div className="flex flex-col gap-4">
            <p className="font-bold">{t("contacts.phone.label")}</p>
            <Link href={`tel:${CONTACTS.phone}`}>
              <span className="text-3xl lg:text-4xl underline">
                {CONTACTS.phone}
              </span>
            </Link>
          </div>
        </div>

        <div className="bg-slate-200 rounded col-span-6 flex items-center px-6 lg:px-20 py-10">
          <p className="text-xl">
            {t.rich("contacts.phone.content", {
              phone: () => <Link className="underline" href={`tel:${CONTACTS.phone}`}>
                {CONTACTS.phone}
              </Link>
            })}
          </p>
        </div>

        <div className="py-12 bg-slate-200 rounded col-span-6 flex justify-start items-center pl-12  lg:pl-10 xl:pl-40">
          <div className="flex flex-col gap-4">
            <p className="font-bold">{t("contacts.email.label")}</p>
            <Link
              href={`mailto:${CONTACTS.email}`}
              className="text-2xl md:text-4xl underline"
            >
              {CONTACTS.email}
            </Link>
          </div>
        </div>

        <div className="bg-slate-200 rounded col-span-6 flex items-center px-6 py-10 lg:px-20">
          <p className="text-xl">
            {t.rich("contacts.email.content", {
              email: () => <Link
                href={`mailto:${CONTACTS.email}`}
                className="underline"
              >
                {CONTACTS.email}
              </Link>
            })}
          </p>
        </div>

        <div className="py-12 bg-slate-200 rounded col-span-6 flex justify-start items-center pl-12 lg:pl-10 xl:pl-40">
          <div className="flex flex-col gap-4">
            <p className="font-bold">{t("contacts.socials.label")}</p>
            <ul className="flex text-slate-900 gap-x-6">
              <li className="bg-slate-900 px-4 py-4 rounded-xl flex items-center">
                <Link
                  target="_blank"
                  href={
                    CONTACTS.socials.facebook
                  }
                >
                  <IconFacebook className=" w-8 h-8" />
                </Link>
              </li>

              <li className="bg-slate-900 p-4 rounded-xl flex items-center">
                <Link
                  target="_blank"
                  href={
                    CONTACTS.socials.instagram
                  }
                >
                  <IconInstagram className="w-8 h-8" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-slate-200 rounded col-span-6 flex items-center px-6 py-10 lg:px-20">
          <p className="text-xl">
            {t.rich("contacts.socials.content", {
              instagram: () => <Link
                href={`${CONTACTS.socials.instagram}`}
                className="underline"
              >
                Instagram
              </Link>,
              facebook: () => <Link
                href={`${CONTACTS.socials.facebook}`}
                className="underline"
              >
                Facebook
              </Link>,
            })}
          </p>
        </div>

        <div className="col-span-full px-12">
          <p className="mt-12 text-2xl font-semibold mx-auto">
            {t("content1")}
          </p>

          <p className="mt-12 text-2xl font-semibold mx-auto">
            {t("content2")}
          </p>
        </div>
      </section>
    </main>
  );
}
