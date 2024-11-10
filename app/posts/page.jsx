import Link from "next/link";
import { createData } from "../../actions/actions";
import prisma from "../../lib/db";
export default async function Page() {
  const posts = await prisma.post.findMany({
    cacheStrategy: { ttl: 60 },
  });
  return (
    <div>
      <h1 className="text-4xl text-center uppercase p-2">
        this is a website to practice prisma
      </h1>
      <div className="Content flex gap-8 px-8 py-20 flex-wrap ">
        {posts.map((post) => (
          <div key={post.id} className="w-1/5 flex-auto bg-black text-white p-4">
            <h2>{post.id}</h2>
            <h2>{post.title}</h2>
            <h2>{post.content}</h2>
            <Link href={`/posts/${post.slug}`}>Link</Link>
          </div>
        ))}
      </div>
      <div className="form px-8 py-10">
        <form action={createData}>
          <input name="title" type="text" placeholder="title" />
          <input name="content" type="text" placeholder="content" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
