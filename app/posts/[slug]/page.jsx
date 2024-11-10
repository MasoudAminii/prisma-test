import prisma from "../../../lib/db";

export async function generateStaticParams() {
  const posts = await prisma.post.findMany({
    select: {
      slug: true,
    },
  });

  return posts.map((post) => ({ slug: post.slug }));
}

export default async function Page({ params }) {
  const { slug } = params;
  const post = await prisma.post.findUnique({
    where: { slug: slug },
    cacheStrategy: { ttl: 60 * 5, swr: 30 },
  });

  return (
    <div>
      <h1 className="text-4xl text-center uppercase p-2">
        This is a website to practice Prisma
      </h1>
      <div className="Content">
        <h2>{post?.id}</h2>
        <h2>{post?.title}</h2>
        <h2>{post?.content}</h2>
      </div>
    </div>
  );
}
