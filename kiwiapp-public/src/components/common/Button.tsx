import { memo, type ReactNode } from "react";
import { cn } from "@/utils/common.utils";

export type ButtonType = "outline" | "fill" | "fill-invert";

interface ButtonPropsInterface {
  children: ReactNode;
  className?: string;
  type?: ButtonType;
  onClick?: () => void;
}

const Button = ({ children, className = "", type = "fill", onClick }: ButtonPropsInterface) => {
  const baseStyles =
    "flex items-center justify-center text-xl leading-tight font-medium rounded-xl px-10 py-5 cursor-pointer transition-colors";

  const typeStyles = {
    outline: "bg-transparent border-neutral-100 border hover:opacity-80 transition-opacity",
    "fill-invert": "bg-rem-green-400 border-rem-green-400 border hover:bg-transparent",
    fill: "bg-rem-green-400 hover:opacity-80 transition-opacity",
  };

  return (
    <button className={cn(baseStyles, typeStyles[type], className)} onClick={onClick}>
      {children}
    </button>
  );
};

export default memo(Button);
