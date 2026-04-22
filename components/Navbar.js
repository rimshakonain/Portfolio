"use client";
import { Poppins } from 'next/font/google';
import Link from 'next/link'
import React from 'react'
import { useParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-poppins",
});

const Navbar = () => {
    const params = useParams();
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        if (window.location.hash) {
            window.history.replaceState(null, '', '/');
        }
    }, [pathname]);

    const handleScroll = (e, id) => {
        if (pathname !== '/') {
            return;
        }
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
            window.history.pushState(null, '', `/`);
        }
    };

    return (
        <header id='Home' className='flex flex-col px-6 py-5 h-28 bg-white text-black border-b-[0.5] border-slate-300'>
            <div className='flex w-full'>
                <Link href="/" className={`logo font-bold text-xl cursor-pointer ${poppins.className}`}>&lt;/&gt;RimshaComix</Link>
                <div className='flex justify-between w-full gap-4 pt-1'>
                    <div>
                        <ul className='flex gap-10 pl-6 cursor-pointer'>
                            <li><Link href='/#Home' onClick={(e) => handleScroll(e, 'Home')}>Home</Link></li>
                            <li><Link href='/#About' onClick={(e) => handleScroll(e, 'About')}>About</Link></li>
                            <li><Link href='/#Skills' onClick={(e) => handleScroll(e, 'Skills')}>Skills</Link></li>
                            <li><Link href='/#Projects' onClick={(e) => handleScroll(e, 'Projects')}>Projects</Link></li>
                            <li><Link href='/#Achievements' onClick={(e) => handleScroll(e, 'Achievements')}>Achievements</Link></li>
                            <li><Link href='/#HireMe' onClick={(e) => handleScroll(e, 'HireMe')}>Hire Me</Link></li>
                        </ul>
                    </div>
                    <div className='flex items-start gap-4'>
                        <input className='px-4 pr-10 text-xs py-2 rounded-md bg-zinc-100  w-60 mx-0 outline-none focus:ring-0 focus:border-none' type="text" placeholder='Search...' />
                        <Link className='gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-gray-200 border-input bg-background text-foreground shadow-sm hover:bg-accent hover:text-accent-foreground px-4 py-2 rounded-md ' href="">Login</Link>
                        <Link className='gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-gray-200 border-input bg-background text-foreground shadow-sm hover:bg-accent hover:text-accent-foreground px-4 py-2 rounded-md ' href="">Signup</Link>
                        <button className='border border-[0.5px] border-gray-300 py-[6] p-2 rounded-sm cursor-pointer'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-moon h-5 w-5 transition-transform scale-100 rotate-90 dark:rotate-0 dark:scale-100"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg></button>
                    </div>
                </div>
            </div>

            <div>
                <ul className='flex gap-10 py-3 cursor-pointer'>
                    <li><Link href="/Experience">Experience</Link></li>
                    <li><Link href="/Blog">Blog</Link></li>
                </ul>
            </div>
        </header >
    )
}

export default Navbar
