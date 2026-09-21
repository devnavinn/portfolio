import PostForm from "@/components/post-form";
import { savePost } from "@/app/admin/actions";

const NewPost = () => (
  <div className="max-w-[700px]">
    <h1 className="text-2xl font-semibold mb-6">New post</h1>
    <PostForm action={savePost.bind(null, null)} />
  </div>
);

export default NewPost;
