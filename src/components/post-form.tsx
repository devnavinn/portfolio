"use client";

import { useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import Markdown from "@/components/markdown";

type Props = {
  action: (prev: string | undefined, formData: FormData) => Promise<string | undefined>;
  onDelete?: () => Promise<void>;
  post?: { title: string; slug: string; content: string; published: boolean };
};

const input =
  "w-full rounded-md border border-slate-300 dark:border-slate-700 bg-transparent px-3 py-2";

const Save = () => {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      className="rounded-md bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 px-4 py-2 text-sm disabled:opacity-50"
    >
      {pending ? "Saving…" : "Save"}
    </button>
  );
};

const PostForm = ({ action, onDelete, post }: Props) => {
  const [error, formAction] = useFormState(action, undefined);
  const [content, setContent] = useState(post?.content ?? "");
  const [preview, setPreview] = useState(false);

  return (
    <form action={formAction} className="space-y-4">
      <input name="title" defaultValue={post?.title} placeholder="Title" required className={input} />
      <input name="slug" defaultValue={post?.slug} placeholder="slug (auto from title if empty)" className={input} />
      <div className="flex gap-3 text-sm">
        <button type="button" onClick={() => setPreview(false)} className={!preview ? "font-semibold" : "text-slate-500"}>
          Write
        </button>
        <button type="button" onClick={() => setPreview(true)} className={preview ? "font-semibold" : "text-slate-500"}>
          Preview
        </button>
      </div>
      <textarea
        name="content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write in markdown…"
        rows={20}
        className={`${input} font-mono text-sm ${preview ? "hidden" : ""}`}
      />
      {preview && (
        <div className="min-h-[20rem] rounded-md border border-slate-300 dark:border-slate-700 p-4">
          <Markdown>{content}</Markdown>
        </div>
      )}
      <label className="flex items-center gap-2 text-sm">
        <input type="checkbox" name="published" defaultChecked={post?.published} />
        Published
      </label>
      {error && <p className="text-sm text-red-500">{error}</p>}
      <div className="flex items-center justify-between">
        <Save />
        {onDelete && (
          <button
            type="submit"
            formAction={onDelete}
            formNoValidate
            onClick={(e) => {
              if (!confirm("Delete this post?")) e.preventDefault();
            }}
            className="text-sm text-red-500 hover:underline"
          >
            Delete
          </button>
        )}
      </div>
    </form>
  );
};

export default PostForm;
