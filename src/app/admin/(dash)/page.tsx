import Link from "next/link";
import { db } from "@/lib/db";
import { formatPostDate } from "@/lib/utils";

export const dynamic = "force-dynamic";

const Stat = ({ label, value }: { label: string; value: number }) => (
  <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5">
    <p className="text-sm text-slate-500">{label}</p>
    <p className="text-3xl font-semibold mt-1">{value}</p>
  </div>
);

const Overview = async () => {
  const [total, published, recent] = await Promise.all([
    db.post.count(),
    db.post.count({ where: { published: true } }),
    db.post.findMany({ orderBy: { updatedAt: "desc" }, take: 5 }),
  ]);

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-semibold">Overview</h1>
      <div className="grid gap-4 sm:grid-cols-3">
        <Stat label="Total posts" value={total} />
        <Stat label="Published" value={published} />
        <Stat label="Drafts" value={total - published} />
      </div>
      <section className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-200 dark:border-slate-800">
          <h2 className="font-medium">Recently updated</h2>
          <Link href="/admin/posts" className="text-sm text-blue-500 hover:underline">
            View all
          </Link>
        </div>
        <ul className="divide-y divide-slate-200 dark:divide-slate-800">
          {recent.length === 0 && (
            <li className="px-5 py-8 text-center text-slate-500 text-sm">No posts yet.</li>
          )}
          {recent.map((p) => (
            <li key={p.id} className="px-5 py-3 flex items-center justify-between gap-4 text-sm">
              <Link href={`/admin/${p.id}`} className="hover:underline underline-offset-4">
                {p.title}
              </Link>
              <span className="text-slate-500 shrink-0">
                {p.published ? "Published" : "Draft"} · {formatPostDate(p.updatedAt)}
              </span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Overview;
