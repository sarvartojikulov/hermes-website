import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import type { Metadata } from "next";
import { Wix_Madefor_Display } from "next/font/google";
import "./globals.css";

import { ReactNode } from "react";

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
  if (locale === "en") {
    (metadata["title"] = "Charity Fund «HERMES»"),
      (metadata["description"] =
        "Join Charity Fund HERMES in providing crucial support to Ukraine's Armed Forces and civilians affected by the war. Learn how you can donate, request assistance, and make a difference today.");
  } else {
    (metadata["title"] = "Благодійний фонд «ГЕРМЕС»"),
      (metadata["description"] =
        "Приєднайтеся до Благодійного фонду ГЕРМЕС у наданні важливої ​​підтримки Збройним Силам України та цивільному населенню, постраждалому від війни. Дізнайтеся, як ви можете пожертвувати, попросити допомоги та змінити ситуацію сьогодні.");
  }

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
