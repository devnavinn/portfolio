import { notFound } from "next/navigation";
import PostForm from "@/components/post-form";
import { db } from "@/lib/db";
import { deletePost, savePost } from "@/app/admin/actions";

export const dynamic = "force-dynamic";

const EditPost = async ({ params }: { params: { id: string } }) => {
  const post = await db.post.findUnique({ where: { id: params.id } });
  if (!post) notFound();
  return (
    <div className="max-w-[700px]">
      <h1 className="text-2xl font-semibold mb-6">Edit post</h1>
      <PostForm
        post={post}
        action={savePost.bind(null, post.id)}
        onDelete={deletePost.bind(null, post.id)}
      />
    </div>
  );
};

export default EditPost;
