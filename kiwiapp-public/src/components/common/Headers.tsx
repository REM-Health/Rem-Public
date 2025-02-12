import { cn } from "@/utils/common.utils";
import type { ReactNode } from "react";

interface HeadersPropsInterface {
  children: ReactNode;
  className: string;
}

export const H1 = ({ children, className }: HeadersPropsInterface) => {
  // Leading has to have !important marker to override the default line-height value from text size classes
  return (
    <h1 className={cn("font-header text-4xl font-light !leading-9 md:text-5xl md:!leading-5", className)}>
      {children}
    </h1>
  );
};

export const H2 = ({ children, className }: HeadersPropsInterface) => {
  return (
    <h2 className={cn("font-header text-3xl font-light !leading-9 md:text-4xl md:!leading-5", className)}>
      {children}
    </h2>
  );
};

export const H3 = ({ children, className }: HeadersPropsInterface) => {
  return (
    <h3 className={cn("font-header text-2xl font-light !leading-9 md:text-3xl md:!leading-5", className)}>
      {children}
    </h3>
  );
};
