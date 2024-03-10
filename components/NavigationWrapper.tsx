"use client";
import { useCallback, useEffect, useState } from "react";
import clsx from "clsx";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import React from "react";
import { SVGLogo } from "./Icons/SVGLogo";
import Link from "next/link";

const NavigationWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const headerRef = React.useRef<HTMLElement>(null);

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
              {children}
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

export default NavigationWrapper;
