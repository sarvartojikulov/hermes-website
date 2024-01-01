"use client";
import { Headline } from "@/components/Headline";
import { IconFacebook } from "@/components/Icons/IconFacebook";
import { IconInstagram } from "@/components/Icons/IconInstagram";
import { CONTACTS } from "@/data/data";
import clsx from "clsx";
import { useTranslations } from "next-intl";
import Link from "next-intl/link";
import React from "react";



export default function Contact() {
  const t = useTranslations("contact-page");

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

        <div className="col-span-full px-2 lg:px-12">
          <p className="mx-auto text-2xl ">{t("content0")}</p>
        </div>
        <div className="col-span-6 flex items-center justify-start rounded bg-slate-200 px-6 py-12 md:pl-12 lg:pl-10 xl:pl-40">
          <div className="flex flex-col gap-4">
            <p className="font-bold">{t("contacts.phone.label")}</p>
            <Link href={`tel:${CONTACTS.phone}`} aria-label="Call us">
              <span className="text-3xl underline lg:text-4xl">
                {CONTACTS.phone}
              </span>
            </Link>
          </div>
        </div>

        <div className="col-span-6 flex items-center rounded bg-slate-200 px-6 py-10 lg:px-20">
          <p className="text-xl">
            {t.rich("contacts.phone.content", {
              phone: () => (
                <Link
                  className="underline"
                  href={`tel:${CONTACTS.phone}`}
                  aria-label="call us"
                >
                  {CONTACTS.phone}
                </Link>
              ),
            })}
          </p>
        </div>

        <div className="col-span-6 flex items-center justify-start rounded bg-slate-200 px-6 py-12 md:pl-12 lg:pl-10 xl:pl-40">
          <div className="flex flex-col gap-4">
            <p className="font-bold">{t("contacts.email.label")}</p>
            <Link
              href={`mailto:${CONTACTS.email}`}
              aria-label="write email"
              className="text-2xl underline md:text-4xl"
            >
              {CONTACTS.email}
            </Link>
          </div>
        </div>

        <div className="col-span-6 flex items-center rounded bg-slate-200 px-6 py-10 lg:px-20">
          <p className="text-xl">
            {t.rich("contacts.email.content", {
              email: () => (
                <Link
                  href={`mailto:${CONTACTS.email}`}
                  className="underline"
                  aria-label="write email"
                >
                  {CONTACTS.email}
                </Link>
              ),
            })}
          </p>
        </div>

        <div className="col-span-6 flex items-center justify-start rounded bg-slate-200 px-6 py-12 md:pl-12 lg:pl-10 xl:pl-40">
          <div className="flex flex-col gap-4">
            <p className="font-bold">{t("contacts.socials.label")}</p>
            <ul className="flex gap-x-6 text-slate-900">
              <li className="flex items-center rounded-xl bg-slate-900 px-4 py-4">
                <Link
                  target="_blank"
                  href={CONTACTS.socials.facebook}
                  aria-label="follow us on Facebook"
                >
                  <IconFacebook className=" h-8 w-8" />
                </Link>
              </li>

              <li className="flex items-center rounded-xl bg-slate-900 p-4">
                <Link
                  target="_blank"
                  href={CONTACTS.socials.instagram}
                  aria-label="follow us on Instagram"
                >
                  <IconInstagram className="h-8 w-8" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-span-6 flex items-center rounded bg-slate-200 px-6 py-10 lg:px-20">
          <p className="text-xl">
            {t.rich("contacts.socials.content", {
              instagram: () => (
                <Link
                  href={`${CONTACTS.socials.instagram}`}
                  className="underline"
                >
                  Instagram
                </Link>
              ),
              facebook: () => (
                <Link
                  href={`${CONTACTS.socials.facebook}`}
                  className="underline"
                >
                  Facebook
                </Link>
              ),
            })}
          </p>
        </div>

        <div className="col-span-full px-2 lg:px-12">
          <p className="mx-auto mt-12 text-2xl ">
            {t("content1")}
          </p>

          <p className="mx-auto mt-12 text-2xl ">
            {t("content2")}
          </p>
        </div>
      </section>
    </main>
  );
}
