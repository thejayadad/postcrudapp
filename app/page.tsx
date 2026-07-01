import prisma from "@/lib/prisma";
import createPost from "@/lib/actions/create-post";
import updatePost from "@/lib/actions/update-post";
import deletePost from "@/lib/actions/delete-post";

export default async function Home() {
  const posts = await prisma.post.findMany()
  return (
    <div className="p-4 flex flex-col space-y-3">
      <div>
        <h1>New Post</h1>
        <form action={createPost}>
          <input
            name="name"
            id="name"
            placeholder="Name..."
          />
          <button type="submit">Add Post</button>
        </form>
      </div>
      <div>
        <h1>All Post</h1>
        {posts.map((p) => (
          <div key={p.id}>
            <form action={updatePost}>
              <input
              id="id"
              name="id"
              defaultValue={p.id}
              hidden
              />
              <input
              name="name"
              id="name"
              defaultValue={p.name}
              />
              <button type="submit">update post</button>
            </form>
            <form action={deletePost}>
              <input
              name="id"
              id="id"
              defaultValue={p.id}
              hidden
              />
              <button>delete post</button>
            </form>

          </div>
        ))}
      </div>
    </div>
  );
}
