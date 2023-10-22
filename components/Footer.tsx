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
    {
        label: "about",
        path: "/about",
    },
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
    }
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
                    <h5 className="text-4xl md:text-3xl lg:text-5xl font-bold text-slate-50">HERMES</h5>
                </div>
                <ul className="col-span-full md:col-span-1 flex flex-col gap-3">
                    {navigations.map((item) => (
                        <li>
                            <Link href={item.path}>
                                <span className="font-semibold uppercase underline">
                                    {t(item.label)}
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
                <ul className="flex flex-col gap-3">
                    <li className="flex gap-4">
                        <IconFacebook width={24} height={24} />
                        <span>Facebook</span>
                    </li>
                    <li className="flex gap-4">
                        <IconInstagram width={24} height={24} />
                        <span>Instagram</span>
                    </li>
                    <li className="flex gap-4">
                        <EnvelopeIcon height={24} width={24} />
                        <a href="mailto:email@mail.com">hermes@mail.com</a>
                    </li>
                    <li className="flex gap-4">
                        <PhoneArrowDownLeftIcon width={22} height={22} />
                        <a href="# ">+998932132424</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
