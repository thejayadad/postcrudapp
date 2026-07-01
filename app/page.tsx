import prisma from "@/lib/prisma";

export default async function Home() {
  const posts = await prisma.post.findMany()
  return (
    <div className="p-4">
      <div>
        <h1>All Post</h1>
        {posts.map((p) => (
          <div key={p.id}>
            <p>{p.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
