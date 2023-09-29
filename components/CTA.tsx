import clsx from "clsx";
import React from "react";

type CTAProps = {
    color: "primary" | "secondary";
    label: string;
};

export const CTA: React.FC<CTAProps> = ({ color, label }) => {
    return <button className={clsx("py-3 px-6 rounded text-lg lg:text-xl font-bold", {
        "bg-primary text-white" : color === "primary",
        "bg-secondary text-black" : color === "secondary"
    })}>{label}</button>;
};
