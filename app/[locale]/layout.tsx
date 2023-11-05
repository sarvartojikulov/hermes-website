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

export const metadata: Metadata = {
  title: "Hermes",
  description: "Hermes charity fund",
};

export default async function RootLayout({
  children,
  params: { locale },
}: Props) {
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
    const home = (await import(`../../i18n/pages/home/${locale}.json`)).default;
    const privacyPolicy = (
      await import(`../../i18n/pages/privacy-policy/${locale}.json`)
    ).default;
    const commons = (await import(`../../i18n/pages/common/${locale}.json`))
      .default;

    const news = (await import(`../../i18n/pages/news/${locale}.json`)).default;

    const donate = (await import(`../../i18n/pages/donate/${locale}.json`))
      .default;
    const contact = (await import(`../../i18n/pages/contact/${locale}.json`))
      .default;

    return {
      ...home,
      ...privacyPolicy,
      ...commons,
      ...news,
      ...donate,
      ...contact,
    };
  } catch (error) {
    notFound();
  }
}
