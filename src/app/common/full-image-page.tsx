import { clerkClient } from "@clerk/nextjs/server";
import { deleteMyImage, getMyImage } from "~/server/queries";
import { Button } from "../../components/ui/button";
import Image from "next/image";
import BackButton from "./back-button";
import { toast } from "sonner";

export default async function FullPageImageView(props: { id: number }) {
  const image = await getMyImage(props.id);
  const uploaderInfo = await clerkClient.users.getUser(image.userId);
  return (
    <div className="flex h-full w-full min-w-0 flex-col sm:flex-row">
      <div className="flex flex-shrink items-center justify-center">
        {/* <img src={image.url} className="flex-shrink object-contain" />; */}
        <Image src={image.url} width={500} height={500} alt="photo" />
      </div>
      <div className="flex flex-shrink-0 flex-col border-l">
        <div className="border-b p-2 text-center text-lg">{image.name}</div>
        <div className="flex flex-col p-2">
          <span>Uploaded By:</span>
          <span>{uploaderInfo.fullName}</span>
        </div>
        <div className="flex flex-col p-2">
          <span>Create On:</span>
          <span>{new Date(image.createdAt).toLocaleString()}</span>
        </div>
        <div className="p-2">
          <form
            action={async () => {
              "use server";

              await deleteMyImage(image.id);
            }}
          >
            <Button type="submit" variant={"destructive"}>
              Delete
            </Button>
          </form>
        </div>
        <BackButton />
      </div>
    </div>
  );
}
