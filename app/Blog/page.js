import Link from "next/link"

export default function BlogComingSoon() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-white text-black px-4 sm:px-6 font-[arial]">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold italic tracking-tighter text-center">
        Writing in progress...
      </h1>

      <p className="mt-4 text-zinc-500 max-w-md text-center text-sm sm:text-base">
        I&apos;m currently documenting my latest MERN projects and technical
        workflows. Stay tuned!
      </p>

      <Link
        href="/"
        className="mt-10 px-6 sm:px-8 py-2 border-2 text-white bg-black rounded-md"
      >
        Go Back
      </Link>
    </div>
  )
}
