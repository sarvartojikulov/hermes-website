"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import React from "react";
import { SVGLogo } from "./Icons/SVGLogo";

const navigations = [
    {
        label: "home",
        path: "/",
    },
    {
        label: "about us",
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

    return (
        <header
            ref={headerRef}
            className={clsx(
                "w-screen overflow-x-hidden z-10 md:border-b border-b-slate-700 bg-slate-50",
                {
                    "fixed top-0": scrolled,
                }
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
                        " inset-0 transition-[z-index] transition duration-100",
                        "lg:static lg:h-full lg:w-auto lg:z-10",
                        {
                            "z-10 backdrop-blur-sm fixed": open,
                            "-z-10 delay-300 absolute": !open,
                        }
                    )}
                >
                    <ul
                        className={clsx(
                            "absolute w-2/3 right-0 h-screen bg-slate-50 flex flex-col gap-6 pt-32 px-8 transition duration-[.5s] border-l border-slate-200 shadow-xl",
                            "lg:static lg:h-full lg:w-auto lg:-translate-x-0 lg:flex-row lg:border-none lg:p-0 lg:shadow-none",
                            {
                                "-translate-x-0 top-0": open,
                                "translate-x-full z-10": !open,
                            }
                        )}
                    >
                        {navigations.map((item) => (
                            <NavItem
                                key={item.label}
                                label={item.label}
                                path={item.path}
                                active={pathname === item.path}
                            />
                        ))}
                        <div className="lg:hidden mt-auto mb-12 space-y-3 lg:m-0 lg:gap-6 lg:space-y-0">
                            <NavItem
                                label="Terms of Use"
                                path="/"
                                active={false}
                            />
                            <NavItem
                                label="Privacy policy"
                                path="/"
                                active={false}
                            />
                        </div>
                    </ul>
                </div>
                <div
                    onClick={() => setOpen((state) => !state)}
                    className={clsx("lg:hidden h-8 w-8", {
                        "z-10": open,
                    })}
                >
                    {open ? <XMarkIcon /> : <Bars3Icon />}
                </div>
                <div>
                  < SVGLogo className="h-12"/>
                  <h5 className=" mt-1 font-semibold text-primary-dark text-lg">HERMES</h5>
                </div>
            </nav>
        </header>
    );
};

const NavItem: React.FC<{
    label: string;
    path: string;
    active?: boolean;
}> = ({ label, path, active }) => {
    return (
        <li
            className={clsx("text-lg uppercase ", {
                "font-bold underline underline-offset-8 decoration-primary decoration-4":
                    active,
                "font-semibold": !active,
            })}
        >
            <Link href={path}>{label}</Link>
        </li>
    );
};

export default Navigation;
