"use client";

import { cn } from "@/lib/utils";
import clsx from "clsx";
import { MouseEventHandler } from "react";

// Ref: https://konradstaniszewski.com/blog/tailwind-hamburger

type ToCrossMenuButtonProps = {
  theme: "light" | "dark";
  className: string;
  isOpen: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

function ToCrossMenuButton({
  theme,
  className,
  isOpen,
  onClick,
}: ToCrossMenuButtonProps) {
  const genericHamburgerLine = clsx(
    `h-[2px] w-7 my-[3px] rounded-full transition-all ease duration-300`,
    {
      "bg-white": theme === "light",
      "bg-black": theme === "dark",
    },
  );

  return (
    <button
      className={cn(
        "h-14 w-14 flex flex-col justify-center items-center fixed drop-shadow-2xl",
        className,
      )}
      onClick={onClick}
    >
      <div
        className={`${genericHamburgerLine} ${
          isOpen ? `rotate-45 translate-y-[8.25px]` : "opacity-70"
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          isOpen ? "opacity-0" : "opacity-50"
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          isOpen ? `-rotate-45 -translate-y-[8.25px]` : "opacity-70"
        }`}
      />
    </button>
  );
}

export default ToCrossMenuButton;
