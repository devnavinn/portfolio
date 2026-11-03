import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ShimmerButtonProps extends React.HTMLAttributes<HTMLSpanElement> {
  shimmerColor?: string;
  background?: string;
}

// Visual wrapper only — place it inside a <Link>/<a> so it stays a real link.
export const ShimmerButton = forwardRef<HTMLSpanElement, ShimmerButtonProps>(
  (
    {
      shimmerColor = "#ffffff",
      background = "linear-gradient(135deg,#16a34a,#22c55e)",
      className,
      children,
      ...props
    },
    ref
  ) => (
    <span
      ref={ref}
      style={
        {
          "--spread": "90deg",
          "--shimmer-color": shimmerColor,
          "--radius": "9999px",
          "--speed": "3s",
          "--cut": "0.08em",
          "--bg": background,
        } as React.CSSProperties
      }
      className={cn(
        "group relative z-0 inline-flex cursor-pointer items-center justify-center gap-2 overflow-hidden whitespace-nowrap px-6 py-3 font-medium text-white [background:var(--bg)] [border-radius:var(--radius)]",
        "shadow-[0_8px_30px_-6px_rgba(34,197,94,0.55)] transition-transform duration-300 ease-in-out active:translate-y-px hover:scale-[1.02]",
        className
      )}
      {...props}
    >
      <span className="-z-30 blur-[2px] absolute inset-0 overflow-visible [container-type:size]">
        <span className="absolute inset-0 h-[100cqh] animate-shimmer-slide [aspect-ratio:1] [border-radius:0] [mask:none]">
          <span className="animate-spin-around absolute -inset-full w-auto rotate-0 [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))] [translate:0_0]" />
        </span>
      </span>
      {children}
      <span className="insert-0 absolute size-full rounded-full px-4 py-1.5 shadow-[inset_0_-8px_10px_#ffffff1f] transition-all duration-300 group-hover:shadow-[inset_0_-6px_10px_#ffffff3f]" />
      <span className="absolute -z-20 [background:var(--bg)] [border-radius:var(--radius)] [inset:var(--cut)]" />
    </span>
  )
);
ShimmerButton.displayName = "ShimmerButton";
