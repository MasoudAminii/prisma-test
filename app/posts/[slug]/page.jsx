import prisma from "../../../lib/db";

export default async function Page({ params }) {
  const { slug } = await params;
  const post = await prisma.post.findUnique({
    where: { slug: slug },
    cacheStrategy: { ttl: 60 },
  });

  return (
    <div>
      <h1 className="text-4xl text-center uppercase p-2">
        This is a website to practice prisma
      </h1>
      <div className="Content">
        <h2>{post?.id}</h2>
        <h2>{post?.title}</h2>
        <h2>{post?.content}</h2>
      </div>
    </div>
  );
}
