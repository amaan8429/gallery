import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });

  return (
    <main className="w-full">
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
      Hello World
    </main>
  );
}
