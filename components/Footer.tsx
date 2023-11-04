"use client";
import {
  EnvelopeIcon,
  PhoneArrowDownLeftIcon,
} from "@heroicons/react/24/outline";
import { IconInstagram } from "./Icons/IconInstagram";
import { IconFacebook } from "./Icons/IconFacebook";
import { SVGLogo } from "./Icons/SVGLogo";
import Link from "next/link";
import { useTranslations } from "next-intl";

const navigations = [
  {
    label: "home",
    path: "/",
  },
  // {
  //     label: "about",
  //     path: "/about",
  // },
  {
    label: "contact",
    path: "/contact",
  },
  {
    label: "donate",
    path: "/donate",
  },
  {
    label: "privacy",
    path: "/privacy-policy",
  },
];

const Footer: React.FC = () => {
  const t = useTranslations("Navigation");

  return (
    <footer className="bg-slate-900 pt-12 pb-16">
      <div className="container tracking-wide mx-auto text-md text-zinc-50 grid grid-cols-2 md:grid-cols-3 gap-y-12 lg:flex lg:justify-between items-center font-semibold lg:px-12">
        <div className="col-span-2 md:col-span-1 flex flex-col lg:flex-row justify-center gap-12 md:gap-4 items-center">
          <Link href={"/"}>
            <SVGLogo className="h-32 md:h-20 lg:h-32 mr-12 md:mr-8 lg:mr-4" />
          </Link>
          <h5 className="text-4xl md:text-3xl lg:text-5xl font-bold text-slate-50">
            HERMES
          </h5>
        </div>
        <ul className="col-span-full md:col-span-1 flex flex-col gap-3 px-10 md:px-0">
          {navigations.map((item) => (
            <li key={item.path}>
              <Link href={item.path}>
                <span className="font-semibold uppercase underline">
                  {t(item.label)}
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <ul className="col-span-full md:col-span-1 grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-4 px-10 md:px-0 lg:w-40">
          <li className="flex py-4 rounded-xl justify-center items-center bg-slate-800 cursor-pointer">
            <Link
              target="_blank"
              href="https://www.facebook.com/CharityfundHermes"
            >
              <IconFacebook className="w-10 h-10 md:w-8 md:h-8" />
            </Link>
          </li>
          <li className="flex py-4 rounded-xl justify-center items-center bg-slate-800 cursor-pointer">
            <Link
              target="_blank"
              href="https://instagram.com/charityfund_hermes"
            >
              <IconInstagram className="w-10 h-10 md:w-8 md:h-8" />
            </Link>
          </li>
          <li className="flex py-4 rounded-xl justify-center items-center bg-slate-800 cursor-pointer">
            <Link href="mailto:charity_hermes@ukr.net">
              <EnvelopeIcon className="w-10 h-10 md:h-7 md:w-7" />
            </Link>
          </li>
          <li className="flex py-4 rounded-xl justify-center items-center bg-slate-800 cursor-pointer">
            <Link href="tel:+38 098 2181814">
              <PhoneArrowDownLeftIcon className="w-8 h-8 md:h-6 md:w-6" />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
