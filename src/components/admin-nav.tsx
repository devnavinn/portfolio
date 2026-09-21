"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FileTextIcon, LayoutDashboardIcon, PlusIcon } from "lucide-react";

const links = [
  { href: "/admin", label: "Overview", icon: LayoutDashboardIcon },
  { href: "/admin/posts", label: "Posts", icon: FileTextIcon },
  { href: "/admin/new", label: "New post", icon: PlusIcon },
];

const AdminNav = ({ horizontal }: { horizontal?: boolean }) => {
  const pathname = usePathname();
  return (
    <nav className={horizontal ? "flex gap-1" : "space-y-1"}>
      {links.map(({ href, label, icon: Icon }) => {
        const active = href === "/admin" ? pathname === href : pathname.startsWith(href);
        return (
          <Link
            key={href}
            href={href}
            className={`flex items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors ${
              active
                ? "bg-blue-500/10 text-blue-600 dark:text-blue-400 font-medium"
                : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
            }`}
          >
            <Icon size={16} />
            <span className={horizontal ? "sr-only" : ""}>{label}</span>
          </Link>
        );
      })}
    </nav>
  );
};

export default AdminNav;
