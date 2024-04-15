import { SignedIn, SignedOut } from "@clerk/nextjs";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export async function Images() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });
  return (
    <div className="flex w-full flex-wrap gap-4">
      {[...images, ...images, ...images].map((image, index) => (
        <div className="" key={image.id + "-" + index}>
          <div className="h-64 w-64 overflow-hidden border-2 border-white">
            <img src={image.url} />
          </div>
          <div>{image.name}</div>
        </div>
      ))}
    </div>
  );
}

export default async function HomePage() {
  return (
    <main className="w-full">
      <SignedOut>
        <div className="text-center text-3xl">
          Please sign in to view images
        </div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
