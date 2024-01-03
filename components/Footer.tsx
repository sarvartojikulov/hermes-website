"use client";
import {
  EnvelopeIcon,
  PhoneArrowDownLeftIcon,
} from "@heroicons/react/24/outline";
import { IconInstagram } from "./Icons/IconInstagram";
import { IconFacebook } from "./Icons/IconFacebook";
import { SVGLogo } from "./Icons/SVGLogo";
import Link from "next-intl/link";
import { useTranslations } from "next-intl";
import { NAVIGATION } from "@/data/data";

const Footer: React.FC = () => {
  const t = useTranslations("Navigation");

  return (
    <footer className="bg-slate-900 py-16">
      <div className="text-md container mx-auto grid grid-cols-2 items-center gap-y-12 font-semibold tracking-wide text-zinc-50 md:grid-cols-3 lg:flex lg:justify-between lg:px-12">
        <div className="col-span-2 flex flex-col items-center justify-center gap-12 md:col-span-1 md:gap-4 lg:flex-row">
          <Link href={"/"} aria-label="link to home page">
            <SVGLogo className="mr-12 h-32 md:mr-8 md:h-20 lg:mr-4 lg:h-24" />
          </Link>
          <h5 className="text-4xl font-bold text-slate-50 md:text-3xl lg:text-4xl">
            HERMES
          </h5>
        </div>
        <ul className="col-span-full flex flex-col gap-3 px-10 md:col-span-1 md:px-0">
          {NAVIGATION.map((item) => (
            <li key={item.path}>
              <Link href={item.path}>
                <span className="font-semibold uppercase underline">
                  {t(item.label)}
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <ul className="col-span-full grid grid-cols-2 gap-4 px-10 md:col-span-1 md:grid-cols-2 md:px-6 lg:px-0 lg:w-40 lg:grid-cols-2">
          <li className="flex cursor-pointer items-center justify-center rounded-xl bg-slate-800 py-4">
            <Link
              target="_blank"
              href="https://www.facebook.com/CharityfundHermes"
              aria-label="Facebook"
            >
              <IconFacebook className="h-10 w-10 md:h-8 md:w-8" />
            </Link>
          </li>
          <li className="flex cursor-pointer items-center justify-center rounded-xl bg-slate-800 py-4">
            <Link
              target="_blank"
              href="https://instagram.com/charityfund_hermes"
              aria-label="Instagram"
            >
              <IconInstagram className="h-10 w-10 md:h-8 md:w-8" />
            </Link>
          </li>
          <li className="flex cursor-pointer items-center justify-center rounded-xl bg-slate-800 py-4">
            <Link href="mailto:charity_hermes@ukr.net" aria-label="Email">
              <EnvelopeIcon className="h-10 w-10 md:h-7 md:w-7" />
            </Link>
          </li>
          <li className="flex cursor-pointer items-center justify-center rounded-xl bg-slate-800 py-4">
            <Link href="tel:+38 098 2181814" aria-label="Phone">
              <PhoneArrowDownLeftIcon className="h-8 w-8 md:h-6 md:w-6" />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
