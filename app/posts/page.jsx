import Image from "next/image";
import Link from "next/link";
import prisma from "../../lib/db";
import { createData } from "../../actions/actions";
export default async function Page() {
  const user = await prisma.user.findUnique({
    where: {
      email: "masoudamini123@gmail.com",
    },
    include: {
      posts: true,
    },
  });
  return (
    <div>
      <h1 className="text-4xl text-center uppercase p-2">
        this is a website to practice prisma
      </h1>
      <div className="Content flex gap-8 px-8 py-20 ">
        {user.posts.map((post) => (
          <div key={post.id}>
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
