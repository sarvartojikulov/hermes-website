import clsx from "clsx";
import React from "react";

type HeadlineProps = {
  size: "large" | "medium";
  label: string;
  color: "primary" | "secondary";
};

export const Headline: React.FC<HeadlineProps> = ({ label, size, color }) => {
  return (
    <div
      className={clsx("lg:w-max px-2 pb-1 border-b-10", {
        "border-primary": color === "primary",
        "border-secondary": color === "secondary",
      })}
    >
      <h1
        className={clsx("text-primary-dark", {
          "text-4xl lg:text-5xl font-extrabold": size === "large",
          "text-3xl lg:text-4xl font-bold": size === "medium",
        })}
      >
        {label}
      </h1>
    </div>
  );
};
