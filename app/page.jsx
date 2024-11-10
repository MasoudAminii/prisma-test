import Link from "next/link";

export default async function Home() {
  return (
    <div>
      <h1 className="text-4xl text-center uppercase p-2">
        this is a website to practice prisma
      </h1>
      <Link
        className="text-5xl text-red-900 font-bold mx-auto text-center"
        href={"/posts"}
      >
        Go To Posts
      </Link>
    </div>
  );
}
