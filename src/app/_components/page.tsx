import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function TopNav() {
  return (
    <nav className="mx-auto flex w-full items-center justify-between border-b p-4 text-xl font-semibold">
      <div className="">Gallery</div>
      <div className="">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}
