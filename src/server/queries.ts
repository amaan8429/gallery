import "server-only";
import { auth } from "@clerk/nextjs/server";
import { db } from "./db";
import { UploadThingError } from "uploadthing/server";
import { images } from "./db/schema";
import { and, eq } from "drizzle-orm";
import { redirect } from "next/navigation";

export async function getMyImages() {
  const user = auth();

  if (!user.userId) throw new UploadThingError("Unauthorized");

  const myImages = await db.query.images.findMany({
    where: (model, { eq }) => {
      return eq(model.userId, user.userId);
    },
    orderBy: (model, { desc }) => desc(model.id),
  });

  return myImages;
}

export async function getMyImage(id: number) {
  const user = auth();

  if (!user.userId) throw new UploadThingError("Unauthorized");

  const image = await db.query.images.findFirst({
    where: (model, { eq }) => {
      return eq(model.id, id);
    },
  });

  if (!image) {
    throw new UploadThingError("Not found");
  }

  if (image.userId !== user.userId) {
    throw new UploadThingError("Unauthorized");
  }

  return image;
}

export async function deleteMyImage(id: number) {
  const user = auth();

  if (!user.userId) throw new UploadThingError("Unauthorized");

  await db
    .delete(images)
    .where(and(eq(images.id, id), eq(images.userId, user.userId)));

  redirect("/");
}
