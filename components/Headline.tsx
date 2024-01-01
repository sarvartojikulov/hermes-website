import clsx from "clsx";
import React from "react";

type HeadlineProps = {
  size: "large" | "medium";
  label: string;
  color: "primary" | "secondary";
  tag?: "h1" | "h2" | "h3";
};

export const Headline: React.FC<HeadlineProps> = ({
  label,
  size,
  color,
  tag,
}) => {
  const Level = tag !== undefined ? tag : "h1";

  return (
    <div
      className={clsx("border-b-10 px-2 pb-1 lg:w-max w-max", {
        "border-primary": color === "primary",
        "border-secondary": color === "secondary",
      })}
    >
      <Level
        className={clsx("text-primary-dark", {
          "text-4xl font-extrabold lg:text-5xl": size === "large",
          "text-3xl font-bold lg:text-4xl": size === "medium",
        })}
      >
        {label}
      </Level>
    </div>
  );
};
