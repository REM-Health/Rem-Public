"use client";

import NextLink from "next/link";
import React, { useEffect } from "react";
import clsx from "clsx";
import { useSidebarContext } from "./SidebarContext";

interface Props {
  title: string;
  icon: React.ReactNode;
  isActive?: boolean;
  href?: string;
}

export const SidebarItem = ({ icon, title, isActive, href = "" }: Props) => {
  const { collapsed, setCollapsed, setCurrentSection } = useSidebarContext();

  useEffect(() => {
    if (isActive) {
      setCurrentSection(title);
    }
  }, [isActive, setCurrentSection, title]);

  return (
    <NextLink
      href={href}
      className="max-w-full text-xl tracking-wide active:bg-none"
    >
      <div
        className={clsx(
          isActive
            ? "bg-evergreen-600 [&_svg_path]:stroke-green-400"
            : "group hover:bg-mintly hover:text-evergreen-800",
          `flex h-full min-h-[44px] w-full cursor-pointer items-center gap-2 rounded-xl px-3.5 transition-all duration-0
          active:scale-[0.98]`
        )}
      >
        {icon}
        <span
          className={clsx(
            isActive ? "text-beige" : "text-gray group-hover:text-evergreen-800"
          )}
        >
          {title}
        </span>
      </div>
    </NextLink>
  );
};
