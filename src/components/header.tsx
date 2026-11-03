"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { ModeToggle } from "./mode-toogle";
import { getWhatsAppLink } from "@/constant";
import WhatsAppIcon from "./whatsapp-icon";
import { cn } from "@/lib/utils";

export const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export const isActivePath = (pathname: string, href: string) =>
  pathname === href || (href !== "/" && pathname.startsWith(href + "/"));

const Header = () => {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 12));

  return (
    <header className="sticky top-0 z-50 px-4 pt-3 print:hidden">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={cn(
          "mx-auto flex h-14 max-w-5xl items-center justify-between gap-4 rounded-full border px-3 pl-4 transition-all duration-300",
          scrolled
            ? "border-slate-200/80 bg-white/70 shadow-lg shadow-slate-900/5 backdrop-blur-xl dark:border-white/10 dark:bg-[#0b0f19]/70"
            : "border-transparent bg-transparent"
        )}
      >
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <Image
            src="/me.jpg"
            alt="Navin Kumar"
            width={32}
            height={32}
            className="h-8 w-8 rounded-full object-cover ring-2 ring-sky-500/30"
          />
          <span className="font-semibold tracking-tight">
            Navin<span className="text-sky-500">.</span>
          </span>
        </Link>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-1">
            {navLinks.map(({ href, label }) => {
              const active = isActivePath(pathname, href);
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={cn(
                      "relative rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors",
                      active
                        ? "text-slate-900 dark:text-white"
                        : "text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                    )}
                  >
                    {active && (
                      <motion.span
                        layoutId="header-active-pill"
                        className="absolute inset-0 rounded-full bg-slate-900/5 dark:bg-white/10"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative">{label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ModeToggle />
          <Link
            target="_blank"
            href={getWhatsAppLink("Hi Navin, I'd like to hire you for a project.")}
            className="inline-flex items-center gap-1.5 rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
          >
            <WhatsAppIcon size={15} />
            Hire me
          </Link>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
