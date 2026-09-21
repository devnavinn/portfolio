import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatPostDate = (d: Date) =>
  d.toLocaleDateString("en-US", { month: "short", year: "numeric" });

export const readingTime = (text: string) =>
  `${Math.max(1, Math.round(text.split(/\s+/).length / 200))} min read`;
