"use client";

import { useEffect, useState} from "react";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import React from "react";
import { SVGLogo } from "./Icons/SVGLogo";
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
];

const Navigation = () => {
    const t = useTranslations("Navigation");

  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const [scrolled, setScrolled] = React.useState(false);
  const headerRef = React.useRef<HTMLElement>(null);

  const handleScroll = () => {
    if (!headerRef.current) {
      return;
    }

    const isScrolled = window.scrollY > 80;
    setScrolled(isScrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <>
      <div
        className={clsx("w-screen ", { hidden: !scrolled })}
        style={{ height: `${headerRef.current?.clientHeight}px` }}
      ></div>
      <header
        ref={headerRef}
        className={clsx(
          "bg-slate-900 w-screen overflow-x-hidden z-10 md:border-b border-b-slate-700",
          {
            "fixed top-0": scrolled,
          },
        )}
      >
        <nav
          className={clsx(
            "flex flex-row-reverse justify-between items-center w-full px-4 py-6 mx-auto border-b border-slate-700",
            "lg:flex-row lg:pt-6 lg:pb-5 lg:container lg:border-none",
          )}
        >
          <div
            className={clsx(
              "inset-0 transition-[z-index] transition duration-100",
              "lg:static lg:h-full lg:w-auto lg:z-10",
              {
                "z-10 backdrop-blur-sm fixed": open,
                "-z-10 delay-300 fixed": !open,
              },
            )}
          >
            <ul
              className={clsx(
                "bg-slate-900 absolute w-2/3 right-0 h-screen flex flex-col gap-6 pt-32 px-8 transition duration-[.5s] shadow-xl",
                "lg:static lg:h-full lg:w-auto lg:-translate-x-0 lg:flex-row lg:border-none lg:p-0 lg:shadow-none",
                {
                  "-translate-x-0 top-0": open,
                  "translate-x-full z-10": !open,
                },
              )}
            >
              {navigations.map((item) => (
                <NavItem
                  key={item.label}
                  label={t(item.label)}
                  path={item.path}
                  active={pathname.split("/").includes(item.path.replace("/", ""))}
                />
              ))}
              <div className="lg:hidden mt-auto mb-40 space-y-3 lg:m-0 lg:gap-6 lg:space-y-0">
                <NavItem label={t("privacy")} path="/privacy-policy" active={false} />
              </div>
            </ul>
          </div>
          <div
            onClick={() => setOpen((state) => !state)}
            className={clsx("lg:hidden h-8 w-8 text-slate-50", {
              "z-10": open,
            })}
          >
            {open ? <XMarkIcon /> : <Bars3Icon />}
          </div>
          <div className="lg:bg-slate-900 py-2 rounded-full">
            <Link href="/">
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
        "font-bold  underline underline-offset-8 decoration-primary decoration-4":
          active,
        "font-semibold": !active,
      })}
    >
      <Link href={path}>{label}</Link>
    </li>
  );
};

export default Navigation;
