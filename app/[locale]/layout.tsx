import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import type { Metadata } from "next";
import { Wix_Madefor_Display } from "next/font/google";
import "./globals.css";

import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { ReactNode } from "react";

export function generateStaticParams() {
    return [{ locale: "en" }, { locale: "ua" }];
}

type Props = {
    children: ReactNode;
    params: { locale: string };
};

const inter = Wix_Madefor_Display({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {};

export default async function RootLayout({
    children,
    params: { locale },
}: Props) {

    if(locale === "en") {
        metadata["title"] = "Charity Fund «HERMES»",
        metadata["description"] = "Join Charity Fund HERMES in providing crucial support to Ukraine's Armed Forces and civilians affected by the war. Learn how you can donate, request assistance, and make a difference today."
    } else {
        metadata["title"] = "Благодійний фонд «ГЕРМЕС»",
        metadata["description"] = "Приєднайтеся до Благодійного фонду ГЕРМЕС у наданні важливої ​​підтримки Збройним Силам України та цивільному населенню, постраждалому від війни. Дізнайтеся, як ви можете пожертвувати, попросити допомоги та змінити ситуацію сьогодні."
    }

    const messages = await getIntlMessages(locale);
    
    return (
        <html lang="en">
            <body className={inter.className}>
                <NextIntlClientProvider locale={locale} messages={messages}>
                    <Navigation />
                    {children}
                    <Footer />
                </NextIntlClientProvider>
            </body>
        </html>
    );
}

async function getIntlMessages(locale: string) {
    try {
        const home = (await import(`../../i18n/pages/home/${locale}.json`))
            .default;
        const privacyPolicy = (
            await import(`../../i18n/pages/privacy-policy/${locale}.json`)
        ).default;
        const commons = (await import(`../../i18n/pages/common/${locale}.json`))
            .default;

        const news = (await import(`../../i18n/pages/news/${locale}.json`))
            .default;

        const donate = (await import(`../../i18n/pages/donate/${locale}.json`))
            .default;
        const contact = (
            await import(`../../i18n/pages/contact/${locale}.json`)
        ).default;

        const help = (await import(`../../i18n/pages/help/${locale}.json`))
            .default;

        return {
            ...home,
            ...privacyPolicy,
            ...commons,
            ...news,
            ...donate,
            ...contact,
            ...help,
        };
    } catch (error) {
        notFound();
    }
}

async function loadLocales() {
    const locales = [
        "home",
        "privacyPolicy",
        "commons",
        "news",
        "donate",
        "contact",
        "help",
    ];
    const result: Record<string, any> = {};

    for (const locale of locales) {
        result[locale] = (
            await import(`../../i18n/pages/contact/${locale}.json`)
        ).default;
    }

    return result;
}
