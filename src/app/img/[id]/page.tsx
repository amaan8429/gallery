import FullPageImageView from "~/app/common/full-image-page";

export default async function PhotoPage({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const idAsNumber = Number(photoId);
  if (isNaN(idAsNumber)) throw new Error("Invalid id");
  return <FullPageImageView id={idAsNumber} />;
}
