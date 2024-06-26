/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/z1KSmD6dWbz
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { SignInButton } from "@clerk/nextjs";
import { Button } from "./ui/button";
import Link from "next/link";

export function Hero() {
  return (
    <section className="w-full pt-12 md:pt-24 lg:pt-32">
      <div className="container space-y-10 xl:space-y-16">
        <div className="grid gap-4 px-10 md:grid-cols-2 md:gap-16">
          <div>
            <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
              Just another Google Photos
            </h1>
          </div>
          <div className="flex flex-col items-start space-y-4">
            <p
              className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl"
              style={{ wordSpacing: "4px" }}
            >
              Simple Gallery Application built with{"  "}
              <span className="text-gray-100">
                <a href="https://nextjs.org/" target="_blank">
                  Next.js
                </a>
              </span>{" "}
              ,{" "}
              <span className="text-gray-100">
                <a href="https://www.typescriptlang.org/" target="_blank">
                  TypeScript
                </a>
              </span>{" "}
              ,{" "}
              <span className="text-gray-100">
                <a href="https://ui.shadcn.com/" target="_blank">
                  Shadcn UI
                </a>
              </span>{" "}
              ,{" "}
              <span className="text-gray-100">
                <a href="https://tailwindcss.com/" target="_blank">
                  Tailwind CSS
                </a>
              </span>{" "}
              ,{" "}
              <span className="text-gray-100">
                <a href="https://clerk.dev/" target="_blank">
                  Clerk
                </a>
              </span>
              {"  "},{"  "}
              <span className="text-gray-100">
                <a href="https://drizzle.dev/" target="_blank">
                  Drizzle
                </a>
              </span>
              {"  "},{"  "}
              <span className="text-gray-100">
                <a
                  href="https://vercel.com/docs/edge-network/vercel-for-postgres"
                  target="_blank"
                >
                  Vercel-Postgres
                </a>
              </span>
              {"  "},{"  "}
              <span className="text-gray-100">
                <a href="https://www.uploadthing.com/" target="_blank">
                  UploadThing
                </a>
              </span>
              {"  "},{"  "}
              <span className="text-gray-100">
                <a href="https://sentry.io/" target="_blank">
                  Sentry
                </a>
              </span>
              {"  "},{"  "}
              <span className="text-gray-100">
                <a href="https://posthog.com/" target="_blank">
                  PostHog
                </a>
              </span>
              {"  "},{"  "}
              <span className="text-gray-100">
                <a href="https://upstash.com/" target="_blank">
                  Upstash
                </a>
              </span>{" "}
              and more.
            </p>
            <div className="flex flex-row space-x-4">
              <Button className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300">
                <SignInButton>Get Started</SignInButton>
              </Button>
              <Link
                href={"https://github.com/amaan8429/gallery"}
                target="_blank"
              >
                <Button className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300">
                  How it was built?
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
