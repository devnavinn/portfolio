import Link from "next/link";
import { db } from "@/lib/db";
import { formatPostDate } from "@/lib/utils";

export const dynamic = "force-dynamic";

const Posts = async () => {
  const posts = await db.post.findMany({ orderBy: { updatedAt: "desc" } });
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">Posts</h1>
        <Link
          href="/admin/new"
          className="rounded-md bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 px-3 py-1.5 text-sm"
        >
          New post
        </Link>
      </div>
      <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="text-left text-slate-500 border-b border-slate-200 dark:border-slate-800">
            <tr>
              <th className="px-4 py-3 font-medium">Title</th>
              <th className="px-4 py-3 font-medium">Status</th>
              <th className="px-4 py-3 font-medium hidden sm:table-cell">Updated</th>
              <th className="px-4 py-3" />
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
            {posts.length === 0 && (
              <tr>
                <td colSpan={4} className="px-4 py-8 text-center text-slate-500">
                  No posts yet.
                </td>
              </tr>
            )}
            {posts.map((p) => (
              <tr key={p.id}>
                <td className="px-4 py-3">
                  <Link href={`/admin/${p.id}`} className="font-medium hover:underline underline-offset-4">
                    {p.title}
                  </Link>
                  <div className="text-xs text-slate-500">/{p.slug}</div>
                </td>
                <td className="px-4 py-3">
                  <span
                    className={`text-xs rounded-full px-2 py-0.5 ${
                      p.published
                        ? "bg-green-500/10 text-green-600 dark:text-green-400"
                        : "bg-slate-500/10 text-slate-500"
                    }`}
                  >
                    {p.published ? "Published" : "Draft"}
                  </span>
                </td>
                <td className="px-4 py-3 hidden sm:table-cell text-slate-500">
                  {formatPostDate(p.updatedAt)}
                </td>
                <td className="px-4 py-3 text-right">
                  <Link href={`/admin/${p.id}`} className="text-blue-500 hover:underline">
                    Edit
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Posts;
