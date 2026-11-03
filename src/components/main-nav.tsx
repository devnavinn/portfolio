"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  HomeIcon,
  SparklesIcon,
  BriefcaseBusinessIcon,
  PenLineIcon,
  MessageCircleIcon,
} from "lucide-react";
import { isActivePath } from "./header";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home", icon: HomeIcon },
  { href: "/services", label: "Services", icon: SparklesIcon },
  { href: "/projects", label: "Work", icon: BriefcaseBusinessIcon },
  { href: "/blog", label: "Blog", icon: PenLineIcon },
  { href: "/contact", label: "Contact", icon: MessageCircleIcon },
];

// Mobile-only bottom tab bar. Desktop navigation lives in the header.
const MainNav = () => {
  const pathname = usePathname();
  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200/80 bg-white/80 pb-[env(safe-area-inset-bottom)] backdrop-blur-xl dark:border-white/10 dark:bg-[#07090f]/80 md:hidden print:hidden">
      <ul className="flex h-16 items-center justify-around px-2">
        {links.map(({ href, label, icon: Icon }) => {
          const active = isActivePath(pathname, href);
          return (
            <li key={href} className="flex-1">
              <Link
                href={href}
                className={cn(
                  "relative mx-auto flex w-16 flex-col items-center gap-1 rounded-xl py-1.5 text-[11px] font-medium transition-colors",
                  active
                    ? "text-sky-500"
                    : "text-slate-500 dark:text-slate-400"
                )}
              >
                {active && (
                  <motion.span
                    layoutId="tab-active-pill"
                    className="absolute inset-0 rounded-xl bg-sky-500/10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <Icon className="relative h-5 w-5" />
                <span className="relative">{label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default MainNav;
