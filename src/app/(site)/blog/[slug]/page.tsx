import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Markdown from "@/components/markdown";
import { db } from "@/lib/db";
import { formatPostDate, readingTime } from "@/lib/utils";
import { SITE_URL } from "@/lib/seo";
import { ArrowLeftIcon } from "lucide-react";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { FinalCta } from "@/components/freelance-sections";

export const dynamic = "force-dynamic";

const getPost = async (slug: string) => {
  const post = await db.post.findUnique({ where: { slug } });
  return post?.published ? post : null;
};

const excerptOf = (content: string) =>
  content
    .replace(/[#*`>_~[\]()!-]/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 155);

export const generateMetadata = async ({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> => {
  const post = await getPost(params.slug);
  if (!post) return { title: "Post not found" };

  const description = `${excerptOf(post.content)}...`;
  const url = `${SITE_URL}/blog/${post.slug}`;

  return {
    title: post.title,
    description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description,
      url,
      publishedTime: post.publishedAt?.toISOString(),
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description,
    },
  };
};

const BackLink = () => (
  <Link
    href="/blog"
    className="group inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-1.5 text-sm text-slate-600 transition-colors hover:border-sky-500 hover:text-sky-500 dark:border-white/10 dark:text-slate-300"
  >
    <ArrowLeftIcon
      size={14}
      className="transition-transform group-hover:-translate-x-0.5"
    />
    All posts
  </Link>
);

const Post = async ({ params }: { params: { slug: string } }) => {
  const post = await getPost(params.slug);
  if (!post) notFound();

  return (
    <div>
      <article className="mx-auto max-w-3xl pb-16">
        <header className="relative -mx-4 px-4 pb-10 pt-14 text-center sm:-mx-6 sm:px-6 sm:pt-20">
          <DotPattern className="[mask-image:radial-gradient(420px_circle_at_top,white,transparent)]" />
          <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[300px] w-[560px] max-w-full -translate-x-1/2 rounded-full bg-gradient-to-r from-sky-400/20 to-fuchsia-400/20 blur-3xl dark:from-sky-500/15 dark:to-fuchsia-500/15" />
          <div className="relative">
            <BackLink />
            <h1 className="mx-auto mt-8 max-w-[720px] text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl">
              {post.title}
            </h1>
            <p className="mt-5 text-sm text-slate-500 dark:text-slate-400">
              {formatPostDate(post.publishedAt!)} · {readingTime(post.content)}
            </p>
          </div>
        </header>
        <div className="border-t border-slate-200 pt-10 dark:border-white/10">
          <Markdown>{post.content}</Markdown>
        </div>
        <div className="mt-14 flex justify-center">
          <BackLink />
        </div>
      </article>

      <section className="pb-8">
        <FinalCta />
      </section>
    </div>
  );
};

export default Post;
