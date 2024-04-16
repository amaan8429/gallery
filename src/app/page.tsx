import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import { getMyImages } from "~/server/queries";

export const dynamic = "force-dynamic";

export async function Images() {
  const images = await getMyImages();
  return (
    <div className="flex w-full flex-wrap justify-center gap-4">
      {images.map((image) => (
        <div className="" key={image.id}>
          <div className="h-64 w-64 overflow-hidden border-2 border-white">
            <Image
              src={image.url}
              alt={image.name}
              style={{ objectFit: "contain" }}
              width={256}
              height={256}
            />
          </div>
          <div className="w-64">{image.name}</div>
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
