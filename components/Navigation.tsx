"use client";

import { useCallback, useEffect, useState } from "react";
import clsx from "clsx";
import Link from "next-intl/link";
import { usePathname } from "next/navigation";
import {
  useRouter as useIntlRouter,
  usePathname as useIntlPathname,
} from "next-intl/client";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import React from "react";
import { SVGLogo } from "./Icons/SVGLogo";
import { useLocale, useTranslations } from "next-intl";
import { useSelectedLayoutSegment } from "next/navigation";

const navigations = [
  {
    label: "home",
    path: "/",
  },
  // {
  //   label: "about",
  //   path: "/about",
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
    label: "help",
    path: "/help",
  },
];

const Navigation = () => {
  const t = useTranslations("Navigation");

  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const intlPathname = useIntlPathname();
  const intlRouter = useIntlRouter();
  const locale = useLocale();

  const [scrolled, setScrolled] = React.useState(false);
  const headerRef = React.useRef<HTMLElement>(null);

  const segment = useSelectedLayoutSegment();

  const handleScroll = () => {
    if (!headerRef.current) {
      return;
    }

    const isScrolled = window.scrollY > 80;
    setScrolled(isScrolled);
  };

  const changeLanguage = useCallback(() => {
    if (locale === "ua") {
      intlRouter.replace(intlPathname, { locale: "en" });
      return;
    }

    intlRouter.replace(intlPathname, { locale: "ua" });
  }, [locale, intlPathname]);

  const isActiveNavItem = (path: string) => {
    if (path === "/" && !segment) {
      return true;
    }
    return segment === path.replace("/", "");
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <div
        className={clsx("w-screen ", { hidden: !scrolled })}
        style={{ height: `${headerRef.current?.clientHeight}px` }}
      ></div>
      <header
        ref={headerRef}
        className={clsx(
          "z-10 w-screen overflow-x-hidden border-b-slate-700 bg-slate-900 md:border-b",
          {
            "fixed top-0": scrolled,
          },
        )}
      >
        <nav
          className={clsx(
            "mx-auto flex w-full flex-row-reverse items-center justify-between border-b border-slate-700 px-4 py-6",
            "lg:container lg:flex-row lg:border-none lg:pb-5 lg:pt-6",
          )}
        >
          <div
            className={clsx(
              "fixed transition-[z-index] duration-100",
              "lg:static lg:z-10 lg:h-full lg:w-auto",
              {
                "inset-0 z-10 backdrop-blur-sm": open,
                "-right-full -z-10 h-screen w-screen delay-300": !open,
              },
            )}
          >
            <ul
              className={clsx(
                "absolute right-0 flex h-screen w-2/3 flex-col gap-6 bg-slate-900 px-8 pt-32 shadow-xl transition duration-[.5s]",
                "lg:static lg:h-full lg:w-auto lg:-translate-x-0 lg:flex-row lg:border-none lg:p-0 lg:shadow-none",
                {
                  "top-0 -translate-x-0": open,
                  "z-10 translate-x-full": !open,
                },
              )}
            >
              {navigations.map((item) => (
                <NavItem
                  key={item.label}
                  label={t(item.label)}
                  path={item.path}
                  active={isActiveNavItem(item.path)}
                />
              ))}
              <li
                className="flex cursor-pointer items-center gap-2 tracking-wider"
                onClick={() => changeLanguage()}
              >
                {locale === "ua" ? (
                  <React.Fragment>
                    <span>🇬🇧</span>
                    <span className="text-lg font-semibold uppercase text-slate-50">
                      EN
                    </span>
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    <span>🇺🇦</span>
                    <span className="text-lg font-semibold uppercase text-slate-50">
                      UA
                    </span>
                  </React.Fragment>
                )}
              </li>
              <div className="mb-40 mt-auto space-y-3 lg:m-0 lg:hidden lg:gap-6 lg:space-y-0">
                <NavItem
                  label={t("privacy")}
                  path="/privacy-policy"
                  active={isActiveNavItem("/privacy-policy")}
                />
              </div>
            </ul>
          </div>
          <div
            onClick={() => setOpen((state) => !state)}
            className={clsx("h-8 w-8 text-slate-50 lg:hidden", {
              "z-10": open,
            })}
          >
            {open ? <XMarkIcon /> : <Bars3Icon />}
          </div>
          <div className="rounded-full py-2 lg:bg-slate-900">
            <Link href="/" aria-label="logo, link to home page">
              <SVGLogo className="h-12 lg:h-14" />
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
};

const NavItem: React.FC<{
  label: string;
  path: string;
  active?: boolean;
}> = ({ label, path, active }) => {
  return (
    <li
      className={clsx("text-lg uppercase text-slate-50", {
        "decoration-primary  font-bold underline decoration-4 underline-offset-8":
          active,
        "font-semibold": !active,
      })}
    >
      <Link href={path}>{label}</Link>
    </li>
  );
};

export default Navigation;
