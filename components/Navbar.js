import { Poppins } from 'next/font/google';
import Link from 'next/link'
import React from 'react'

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-poppins",
});

const Navbar = () => {
    return (
        <header className='flex flex-col px-6 py-5 h-28 bg-black text-white'>
            <div className='flex w-full'>
                <div className={`logo font-bold text-2xl ${poppins.className}`}>&lt;/&gt;RimshaComix</div>
                <div className='flex justify-between w-full gap-4 pt-1'>
                    <div>
                        <ul className='flex gap-10 pl-6 cursor-pointer'>
                            <li>Home</li>
                            <li>About</li>
                            <li>Skills</li>
                            <li>Projects</li>
                            <li>Achievements</li>
                            <li>Hire Me</li>
                        </ul>
                    </div>
                    <div className='flex items-start gap-4'>
                        <input className='px-4 pr-10 text-xs py-2 rounded-md bg-zinc-100 dark:bg-zinc-800 w-60 mx-0 outline-none focus:ring-0 focus:border-none' type="text" placeholder='Search...' />
                        <Link className='border border-[0.5px] border-zinc-700 px-4 py-1 rounded-sm ' href="">Login</Link>
                        <Link className='border border-[0.5px] border-zinc-700 px-4 py-1 rounded-sm ' href="">Signup</Link>
                        <button className='border border-[0.5px] border-zinc-700 py-[6] p-2 rounded-sm cursor-pointer'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-moon h-5 w-5 transition-transform scale-100 rotate-90 dark:rotate-0 dark:scale-100"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg></button>
                    </div>
                </div>
            </div>

            <div>
                <ul className='flex gap-10 py-3 cursor-pointer'>
                    <li>Experience</li>
                    <li>Blog</li>
                </ul>
            </div>
        </header >
    )
}

export default Navbar
