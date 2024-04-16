import { getMyImage } from "~/server/queries";

export default async function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const idAsNumber = Number(photoId);
  const image = await getMyImage(idAsNumber);
  return (
    <div>
      <img src={image.url} className="w-96" />
    </div>
  );
}
