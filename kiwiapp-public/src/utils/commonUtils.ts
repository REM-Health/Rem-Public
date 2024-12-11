import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const NBSP = "\u00A0";

export const DEFAULT_ERROR_MESSAGE = "Oops! We are running into an error. Please retry later.";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
