import { db } from "~/server/db";

const MockUrls = [
  "https://utfs.io/f/f7598920-52be-41dc-8377-0edbcf57194c-6quotd.17.16.jpeg",
  "https://utfs.io/f/ac65cf23-3001-44ca-8659-95cec891ffd8-tzdfsa.jpeg",
  "https://utfs.io/f/9cd35f9d-d471-4d0e-a02e-37127cfdf01f-6quotd.17.15.jpeg",
  "https://utfs.io/f/badd0bc9-523c-447a-a893-72b0669bc02c-tzdfrf.jpeg",
];

const MockImages = MockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  console.log(posts);
  return (
    <main className="w-full">
      <div className="flex w-full flex-wrap gap-4">
        {[...MockImages, ...MockImages, ...MockImages].map((image, index) => (
          <div
            key={image.id + "-" + index}
            className="w-64 border-2 border-white"
          >
            <img src={image.url} />
          </div>
        ))}
      </div>
      Hello World
    </main>
  );
}
