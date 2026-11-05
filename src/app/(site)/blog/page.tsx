import type { Metadata } from "next";
import Link from "next/link";
import { db } from "@/lib/db";
import { ArrowUpRightIcon } from "lucide-react";
import { formatPostDate, readingTime } from "@/lib/utils";
import PageHero from "@/components/page-hero";
import { BlurFade } from "@/components/magicui/blur-fade";
import { FinalCta } from "@/components/freelance-sections";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Practical guides for founders on website, AI chatbot, and app costs in India, plus engineering notes from Navin Kumar, a full-stack and AI developer.",
  alternates: { canonical: "/blog" },
};

const Blog = async () => {
  const posts = await db.post.findMany({
    where: { published: true },
    orderBy: { publishedAt: "desc" },
  });
  const years = Array.from(
    new Set(posts.map((p) => p.publishedAt!.getFullYear()))
  );

  return (
    <div>
      <PageHero
        eyebrow="Blog"
        title={
          <>
            Notes on building <span className="text-gradient">for the web</span>
          </>
        }
        subtitle="Cost breakdowns and buying guides for founders, plus notes on software and AI from shipping real products."
      />

      <div className="mx-auto max-w-3xl pb-16">
        {posts.length === 0 && (
          <p className="rounded-2xl border border-dashed border-slate-300 p-10 text-center text-slate-500 dark:border-white/15 dark:text-slate-400">
            No posts yet — check back soon.
          </p>
        )}

        <div className="space-y-12">
          {years.map((year) => (
            <section key={year}>
              <h2 className="mb-4 flex items-center gap-3 text-sm font-semibold text-slate-500 dark:text-slate-400">
                {year}
                <span className="h-px grow bg-slate-200 dark:bg-white/10" />
              </h2>
              <ul className="space-y-3">
                {posts
                  .filter((p) => p.publishedAt!.getFullYear() === year)
                  .map((p, i) => (
                    <li key={p.id}>
                      <BlurFade delay={Math.min(i, 6) * 0.04}>
                        <Link
                          href={`/blog/${p.slug}`}
                          className="group flex items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-500/40 hover:shadow-lg hover:shadow-sky-500/5 dark:border-white/10 dark:bg-white/[0.02] dark:hover:border-sky-500/40"
                        >
                          <div className="min-w-0">
                            <p className="font-semibold transition-colors group-hover:text-sky-500">
                              {p.title}
                            </p>
                            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                              {formatPostDate(p.publishedAt!)} ·{" "}
                              {readingTime(p.content)}
                            </p>
                          </div>
                          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-all duration-300 group-hover:rotate-45 group-hover:border-sky-500 group-hover:bg-sky-500 group-hover:text-white dark:border-white/10">
                            <ArrowUpRightIcon size={16} />
                          </span>
                        </Link>
                      </BlurFade>
                    </li>
                  ))}
              </ul>
            </section>
          ))}
        </div>
      </div>

      <section className="pb-8">
        <FinalCta />
      </section>
    </div>
  );
};

export default Blog;
