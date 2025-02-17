import { cn } from "@/utils/common.utils";
import type { FC, ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export const Container: FC<ContainerProps> = ({ children, className }) => (
  <div className={cn("mx-auto max-w-screen-xl", className)}>{children}</div>
);
