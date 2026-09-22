import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Markdown from "@/components/markdown";
import { db } from "@/lib/db";
import { formatPostDate, readingTime } from "@/lib/utils";
import { SITE_URL } from "@/lib/seo";

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
    className="text-sm text-slate-500 dark:text-slate-400 hover:underline underline-offset-4"
  >
    ← all writing
  </Link>
);

const Post = async ({ params }: { params: { slug: string } }) => {
  const post = await getPost(params.slug);
  if (!post) notFound();

  return (
    <article className="pt-8 pb-16 max-w-[700px]">
      <BackLink />
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight leading-tight mt-8 mb-3">{post.title}</h1>
      <p className="text-sm text-slate-500 dark:text-slate-400 mb-10 pb-8 border-b border-slate-200 dark:border-slate-800">
        {formatPostDate(post.publishedAt!)} · {readingTime(post.content)}
      </p>
      <Markdown>{post.content}</Markdown>
      <div className="mt-14 pt-6 border-t border-slate-200 dark:border-slate-800">
        <BackLink />
      </div>
    </article>
  );
};

export default Post;
