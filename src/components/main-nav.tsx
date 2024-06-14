"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import {
  HomeIcon,
  BadgeInfoIcon,
  BriefcaseBusinessIcon,
  SquareMenuIcon,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const links = [
  { href: "/", icon: HomeIcon },
  { href: "/about", icon: BadgeInfoIcon },
  { href: "/projects", icon: BriefcaseBusinessIcon },
  { href: "/resume", icon: SquareMenuIcon },
];

const MainNav = () => {
  const pathname = usePathname();
  return (
    <div className="fixed w-full md:sticky bottom-0 md:top-0 h-16 md:w-24 shrink-0 md:h-screen overflow-y-auto no-scrollbar border-r dark:border-slate-800 z-50 backdrop-filter backdrop-blur-lg">
      <div className="h-full w-full flex flex-row md:flex-col justify-between after:flex-1 after:mt-auto overflow-hidden">
        <div className="hidden md:block md:flex-1">
          <div className="flex justify-center my-4">
            <Link href="/">
              <Avatar>
                <AvatarImage src="/me.jpg" />
                <AvatarFallback>N</AvatarFallback>
              </Avatar>
            </Link>
          </div>
        </div>
        <div className="flex-1 grow flex items-center w-full">
          <nav className="w-full">
            <ul className="md:space-y-4 flex flex-row items-center w-screen justify-evenly md:flex-col md:justify-start md:items-center md:w-24">
              {links.map(({ href, icon: Icon }) => (
                <li key={href} className="md:py-2">
                  <Link
                    className={`w-full h-6 flex items-center justify-center relative after:absolute after:w-0.5 after:right-0 after:top-0 after:bottom-0 text-slate-400 hover:text-slate-500 dark:text-slate-500 dark:hover:text-slate-400
                      ${
                        pathname === href
                          ? "text-blue-500 dark:text-blue-500"
                          : ""
                      }
                      `}
                    href={href}
                  >
                    <Icon size={24} />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div />
      </div>
    </div>
  );
};

export default MainNav;
