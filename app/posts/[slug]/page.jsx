import prisma from "../../../lib/db";

export default async function Page({ params }) {
  const { slug } = await params;
  const post = await prisma.user.findUnique({
    where: { slug: slug },
  });


  return (
    <div>
      <h1 className="text-4xl text-center uppercase p-2">
        This is a website to practice prisma
      </h1>
      <div className="Content">
        <h2>{post?.id}</h2>
        <h2>{post?.name}</h2>
        <h2>{post?.email}</h2>
      </div>
    </div>
  );
}
