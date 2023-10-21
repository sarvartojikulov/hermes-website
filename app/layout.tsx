import Navigation from "@/components/Navigation";
import "./globals.css";
import type { Metadata } from "next";
import { Wix_Madefor_Display } from "next/font/google";
import Footer from "@/components/Footer";

const inter = Wix_Madefor_Display({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "Hemes",
  description: "Hermes charity fund",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}