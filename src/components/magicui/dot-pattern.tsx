import { useId } from "react";
import { cn } from "@/lib/utils";

export function DotPattern({
  width = 18,
  height = 18,
  cr = 1,
  className,
}: {
  width?: number;
  height?: number;
  cr?: number;
  className?: string;
}) {
  const id = useId();
  return (
    <svg
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full fill-slate-400/40 dark:fill-slate-500/30",
        className
      )}
    >
      <defs>
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          patternContentUnits="userSpaceOnUse"
        >
          <circle cx={1} cy={1} r={cr} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${id})`} />
    </svg>
  );
}
