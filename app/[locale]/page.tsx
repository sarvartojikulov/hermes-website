"use client";

import { CTA } from "@/components/CTA";
import { Headline } from "@/components/Headline";
import Blog from "@/components/Blog";
import clsx from "clsx";
import { FAQItem } from "@/components/FAQItem";
import { useTranslations } from "use-intl";

export default function Home() {
    const t = useTranslations("home-page");

    return (
        <main className="container mx-auto flex flex-col gap-20 md:gap-20 lg:gap-36 pb-40">
            <section
                className={clsx(
                    "mt-20 w-full grid grid-cols-6 gap-x-5 gap-y-12",
                    "lg:grid-cols-12 lg:py-12"
                )}
            >
                <div
                    className={clsx(
                        "col-span-6 lg:px-12 flex flex-col gap-8 lg:gap-16"
                    )}
                >
                    <Headline
                        size="large"
                        label={t("Landing.Help.header")}
                        color="primary"
                    />
                    <p className="text-lg font-medium">
                        {t("Landing.Help.body")}
                    </p>
                    <div className="flex justify-start lg:justify-start">
                        <CTA color="primary" label={t("Landing.Help.button")} />
                    </div>
                </div>
                <div
                    className={clsx(
                        "col-span-6 lg:px-12 flex flex-col gap-8 lg:gap-16"
                    )}
                >
                    <Headline
                        size="large"
                        label={t("Landing.Ask.header")}
                        color="secondary"
                    />
                    <p className="text-lg font-medium">
                        {t("Landing.Ask.body")}
                    </p>
                    <div className="flex justify-start lg:justify-start lg:mt-auto">
                        <CTA
                            color="secondary"
                            label={t("Landing.Ask.button")}
                        />
                    </div>
                </div>
            </section>

            <section
                className={clsx(
                    "grid grid-cols-6 gap-y-8 lg:gap-y-16 lg:grid-cols-12"
                )}
            >
                <div className="col-span-6">
                    <Headline
                        size="medium"
                        label={t("AboutUs.label")}
                        color="primary"
                    />
                </div>
                <div className="col-span-5 row-start-2 flex flex-col gap-4">
                    {[0, 1].map((key) => (
                        <p className="text-lg font-medium" key={key}>
                            {t(`AboutUs.contents.${key}`)}
                        </p>
                    ))}
                </div>
                <div className="row-start-3 col-start-1 lg:col-start-6 col-span-2 flex justify-start lg:justify-center">
                    <CTA color="primary" label={t("AboutUs.button")} />
                </div>
            </section>

            <TempBlog />

            <section
                className={clsx(
                    "grid grid-cols-1 gap-8 lg:gap-y-16 lg:grid-cols-2"
                )}
            >
                <div className="col-span-full">
                    <Headline
                        size="medium"
                        label={t("FAQ.label")}
                        color="primary"
                    />
                </div>

                {[0, 1, 2, 3].map((key) => (
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

const TempBlog = () => {
    return (
        <section
            className={clsx(
                "grid grid-cols-6 gap-y-8 lg:gap-y-16 lg:grid-cols-12"
            )}
        >
            <div className="col-span-6">
                <Headline
                    size="medium"
                    label="Latest News And Updates"
                    color="primary"
                />
            </div>
            <div className="col-span-full">
                <Blog />
            </div>

            <div className="row-start-3 col-start-1 lg:col-start-6 col-span-2 flex justify-start lg:justify-center">
                <CTA color="secondary" label="More" />
            </div>
        </section>
    );
};
