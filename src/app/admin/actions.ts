"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { db } from "@/lib/db";
import {
  SESSION_COOKIE,
  SESSION_MAX_AGE_S,
  createSessionToken,
  verifySessionToken,
} from "@/lib/auth";

const requireAdmin = async () => {
  if (!(await verifySessionToken(cookies().get(SESSION_COOKIE)?.value)))
    redirect("/admin/login");
};

export async function login(_: string | undefined, formData: FormData) {
  const password = String(formData.get("password") ?? "");
  if (!process.env.ADMIN_PASSWORD || password !== process.env.ADMIN_PASSWORD)
    return "Incorrect password";
  cookies().set(SESSION_COOKIE, await createSessionToken(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: SESSION_MAX_AGE_S,
  });
  redirect("/admin");
}

export async function logout() {
  cookies().delete(SESSION_COOKIE);
  redirect("/admin/login");
}

const slugify = (s: string) =>
  s
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

export async function savePost(
  id: string | null,
  _: string | undefined,
  formData: FormData
) {
  await requireAdmin();
  const title = String(formData.get("title") ?? "").trim();
  const content = String(formData.get("content") ?? "");
  const published = formData.get("published") === "on";
  const slug = slugify(String(formData.get("slug") ?? "") || title);
  if (!title || !slug) return "Title is required";

  const existing = id ? await db.post.findUnique({ where: { id } }) : null;
  const publishedAt = published ? existing?.publishedAt ?? new Date() : null;
  const data = { title, slug, content, published, publishedAt };

  try {
    if (id) await db.post.update({ where: { id }, data });
    else await db.post.create({ data });
  } catch {
    return "Could not save — is that slug already used?";
  }
  revalidatePath("/blog");
  revalidatePath(`/blog/${slug}`);
  redirect("/admin");
}

export async function deletePost(id: string) {
  await requireAdmin();
  await db.post.delete({ where: { id } });
  revalidatePath("/blog");
  redirect("/admin");
}
