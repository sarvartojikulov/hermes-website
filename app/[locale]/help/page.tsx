"use client";
import { Headline } from "@/components/Headline";
import clsx from "clsx";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";
import { CONTACTS } from "@/data/data";

const HelpPage = () => {
    const t = useTranslations("help-page");
    const t_common = useTranslations("commons");

    return (
        <main className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 py-20 lg:px-20">
            <div className="col-span-full">
                <Headline size="medium" label={t("label")} color="primary" />
                <div className="mt-12 px-2 md:px-12">
                    <p className="mx-auto text-xl">{t("labelIntro")}</p>
                </div>
            </div>
            <section
                className={clsx(
                    "col-span-full flex flex-col gap-10",
                    "overflow-y-scroll"
                )}
            >
                <div className="mx-4 px-10 lg:px-16 py-10 bg-slate-200">
                    <h2 className="text-2xl font-bold text-primary-dark">
                        {t_common("step")} 1: {t("step1.header")}
                    </h2>
                    <div className="flex flex-col lg:flex-row gap-8 mt-4">
                        <div className="w-full flex justify-center items-center">
                            <p className="text-xl">{t("step1.content")}</p>
                        </div>

                        <a
                            href="/help.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full flex justify-center items-center bg-white h-24"
                        >
                            <span className="text-xl font-semibold">
                                {t_common("download")}
                            </span>
                        </a>
                    </div>
                </div>

                <div className="mx-4 px-10 lg:px-16 py-10 bg-slate-200">
                    <h2 className="text-2xl font-bold text-primary-dark">
                        {t_common("step")} 2: {t("step2.header")}
                    </h2>
                    <div className="flex flex-col lg:flex-row gap-6 mt-4">
                        <p className="text-xl">{t("step2.content")}</p>
                    </div>
                </div>

                <div className="mx-4 px-10 lg:px-16 py-10 bg-slate-200">
                    <h2 className="text-2xl font-bold text-primary-dark">
                        {t_common("step")} 3: {t("step3.header")}
                    </h2>
                    <div className="flex flex-col lg:flex-row gap-6 mt-4">
                        <p className="text-xl">
                            {t.rich("step3.content", {
                                email: () => {
                                    return (
                                        <Link
                                            href="contact"
                                            className="underline underline-offset-2"
                                        >
                                            {CONTACTS.email}
                                        </Link>
                                    );
                                },
                            })}
                        </p>
                    </div>
                </div>
            </section>
            <section className="col-span-full flex flex-col gap-12">
                <div className="flex flex-col gap-8">
                    <div className="">
                        <h2 className="text-3xl font-bold text-primary-dark">
                            {t("privacy.label")}
                        </h2>
                    </div>
                    <div className="px-2 md:px-12">
                        <p className="mx-auto text-xl">
                            {t("privacy.content")}
                        </p>
                    </div>
                </div>
                <div className="flex flex-col gap-8">
                    <div className="col-span-full">
                        <h2 className="text-3xl font-bold text-primary-dark">
                            {t("contact.label")}
                        </h2>
                    </div>
                    <div className="col-span-full px-2 md:px-12">
                        <p className="mx-auto text-xl">
                            {t.rich("contact.content0", {
                                link: () => (
                                    <Link
                                        href="contact"
                                        className="underline underline-offset-2"
                                    >
                                        {t_common("contactUs")}
                                    </Link>
                                ),
                            })}.
                        </p>
                    </div>
                    <div className="col-span-full px-2 md:px-12">
                        <p className="mx-auto text-xl">
                            {t("contact.content1")}
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default HelpPage;
