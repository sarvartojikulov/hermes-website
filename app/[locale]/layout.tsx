import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import type { Metadata } from "next";
import { Wix_Madefor_Display } from "next/font/google";
import "./globals.css";

import { NextIntlClientProvider } from "next-intl";
import { notFound, usePathname } from "next/navigation";

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

    let messages;
    try {
        messages = (await import(`../../i18n/pages/home/${locale}.json`)).default;
    } catch (error) {
        notFound();
    }

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
