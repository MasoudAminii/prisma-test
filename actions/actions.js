"use server";
import { revalidatePath } from "next/cache";
import prisma from "../lib/db";

export async function createData(formData) {
  try{
    if (!formData) {
      throw new Error("formData is undefined");
    }
    const title = formData.get("title");
    const content = formData.get("content");
    const slug = title.replace(/\s+/g, "-").toLowerCase(); 
    // Check if a post with the same slug already exists
    const existingPost = await prisma.post.findUnique({
      where: { slug },
    });
    if (existingPost) {
      throw new Error("A post with this title (slug) already exists.");
    }
    // Create a new post if slug is unique
    await prisma.post.create({
      data: {
        title,
        content,
        slug,
      },
    });
    // Revalidate cache for the posts page
    revalidatePath("/posts");
  }
  catch(error){
    console.error(error);
    throw error;
  }
}
