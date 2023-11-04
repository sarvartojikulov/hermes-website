import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import type { Metadata } from "next";
import { Wix_Madefor_Display } from "next/font/google";
import "./globals.css";

import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ua" }];
}

const inter = Wix_Madefor_Display({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "Hemes",
  description: "Hermes charity fund",
};

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: any;
}) {
  let home;
  let donate;
  let contact;
  let privacyPolicy;
  let commons;
  let news;
  try {
    home = (await import(`../../i18n/pages/home/${locale}.json`)).default;
    privacyPolicy = (
      await import(`../../i18n/pages/privacy-policy/${locale}.json`)
    ).default;
    commons = (await import(`../../i18n/pages/common/${locale}.json`)).default;

    news = (await import(`../../i18n/pages/news/${locale}.json`)).default;

    donate = (await import(`../../i18n/pages/donate/${locale}.json`)).default;
    contact = (await import(`../../i18n/pages/contact/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang="en">
      <body className={inter.className}>
        <NextIntlClientProvider
          locale={locale}
          messages={{
            ...home,
            ...privacyPolicy,
            ...commons,
            ...news,
            ...donate,
            ...contact
          }}
        >
          <Navigation />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
