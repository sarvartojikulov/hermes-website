"use client";

import { Link } from "@/src/navigation";
import clsx from "clsx";
import { useSelectedLayoutSegment } from "next/navigation";

const NavigationLink: React.FC<{
    label: string;
    path: string;
}> = ({ label, path }) => {
    const segment = useSelectedLayoutSegment();

    const isActive = () => {
        if (path === "/" && !segment) {
            return true;
        }
        return segment === path.replace("/", "");
    };

    return (
        <li
            className={clsx("text-lg uppercase text-slate-50", {
                "decoration-primary font-bold  underline decoration-4 underline-offset-8":
                    isActive(),
                "font-semibold": !isActive(),
            })}
        >
            <Link href={path}>{label}</Link>
        </li>
    );
};

export default NavigationLink;
