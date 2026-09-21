import Link from "next/link";
import { db } from "@/lib/db";
import { formatPostDate, readingTime } from "@/lib/utils";

export const dynamic = "force-dynamic";

const Blog = async () => {
  const posts = await db.post.findMany({
    where: { published: true },
    orderBy: { publishedAt: "desc" },
  });
  const years = Array.from(
    new Set(posts.map((p) => p.publishedAt!.getFullYear()))
  );

  return (
    <div className="pt-8 pb-16 max-w-[700px]">
      <header className="mb-12">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Writing
        </h1>
        <p className="mt-2 text-slate-500 dark:text-slate-400">
          Notes on software, tools, and things I&apos;m learning.
        </p>
      </header>

      {posts.length === 0 && (
        <p className="text-slate-500 dark:text-slate-400">
          No posts yet — check back soon.
        </p>
      )}

      <div className="space-y-10">
        {years.map((year) => (
          <section key={year}>
            <h2 className="mb-2 text-sm font-medium text-slate-400 dark:text-slate-500">
              {year}
            </h2>
            <ul className="divide-y divide-slate-200 dark:divide-slate-800 border-y border-slate-200 dark:border-slate-800">
              {posts
                .filter((p) => p.publishedAt!.getFullYear() === year)
                .map((p) => (
                  <li key={p.id}>
                    <Link
                      href={`/blog/${p.slug}`}
                      className="group flex items-baseline justify-between gap-6 py-4"
                    >
                      <span className="font-medium text-slate-900 dark:text-slate-100 transition-colors group-hover:text-blue-500">
                        {p.title}
                      </span>
                      <span className="shrink-0 text-sm text-slate-400 dark:text-slate-500">
                        <span className="hidden sm:inline">
                          {readingTime(p.content)} ·{" "}
                        </span>
                        {formatPostDate(p.publishedAt!)}
                      </span>
                    </Link>
                  </li>
                ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Blog;
