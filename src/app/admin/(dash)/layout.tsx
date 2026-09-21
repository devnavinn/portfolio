import Link from "next/link";
import { ExternalLinkIcon, LogOutIcon } from "lucide-react";
import AdminNav from "@/components/admin-nav";
import { ModeToggle } from "@/components/mode-toogle";
import { logout } from "../actions";

export default function DashLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex bg-slate-50 dark:bg-slate-950">
      <aside className="hidden md:flex w-60 shrink-0 flex-col border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 sticky top-0 h-screen">
        <div className="h-16 px-6 flex items-center font-semibold border-b border-slate-200 dark:border-slate-800">
          Admin
        </div>
        <div className="flex-1 p-3">
          <AdminNav />
        </div>
        <div className="p-3 border-t border-slate-200 dark:border-slate-800 space-y-1 text-sm">
          <Link
            href="/blog"
            target="_blank"
            className="flex items-center gap-2 rounded-md px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <ExternalLinkIcon size={16} /> View site
          </Link>
          <form action={logout}>
            <button className="w-full flex items-center gap-2 rounded-md px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800">
              <LogOutIcon size={16} /> Log out
            </button>
          </form>
        </div>
      </aside>
      <div className="flex-1 min-w-0 flex flex-col">
        <header className="h-16 shrink-0 px-6 flex items-center justify-between border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
          <div className="md:hidden">
            <AdminNav horizontal />
          </div>
          <span className="hidden md:block text-sm text-slate-500">Dashboard</span>
          <ModeToggle />
        </header>
        <main className="flex-1 p-6 max-w-5xl w-full mx-auto">{children}</main>
      </div>
    </div>
  );
}
