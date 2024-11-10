"use server";
import { revalidatePath } from "next/cache";
import prisma from "../lib/db";

export async function createData(formData) {
  if (!formData) {
    throw new Error("formData is undefined");
  }

  await prisma.post.create({
    data: {
      title: formData.get("title"),
      content: formData.get("content"),
      author: {
        connect: {
          email: "masoudamini123@gmail.com",
        },
      },
    },
  });
  revalidatePath("/posts");
}
