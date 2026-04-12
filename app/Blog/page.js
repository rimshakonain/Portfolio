import Link from "next/link"

export default function BlogComingSoon() {
  return (
    // Changed to white bg and black text to match your Home page
    <div className="h-screen flex flex-col items-center justify-center bg-white text-black px-6 font-[arial]">
      <h1 className="text-5xl font-bold italic tracking-tighter">Writing in progress...</h1>
      
      <p className="mt-4 text-zinc-500 max-w-md text-center">
        I'm currently documenting my latest MERN projects and technical workflows. Stay tuned!
      </p>
      
      <Link 
        href="/" 
        // Sleek light-theme button: light border turning dark on hover
        className="mt-10 px-8 py-2 border-2 border-black text-black rounded-md"
      >
        Go Back
      </Link>
    </div>
  )
}
