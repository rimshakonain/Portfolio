import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

const Footer = () => {
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

  const handleResume = () => {
    const resumeUrl = "/resume.pdf";

    // Action 1: Open the preview in a new tab
    window.open(resumeUrl, "_blank");

    // Action 2: Force the download in the background
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.setAttribute("download", "Rimsha_Resume.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <footer className="bg-gray-50 w-[80vw] mx-auto text-gray-800 h-68 pt-8 z-50 relative">
      <div className="container mx-auto flex flex-wrap justify-around gap-0">
        <div className='flex flex-col'>
          <h3 className='mb-4 font-semibold text-gray-900'>Main</h3>
          <div className='flex flex-col space-y-2'>
            <Link className='text-gray-600 hover:text-gray-900' href="/#Home" onClick={(e) => handleScroll(e, 'Home')}>Home</Link>
            <Link className='text-gray-600 hover:text-gray-900' href="/#About" onClick={(e) => handleScroll(e, 'About')}>About Me</Link>
            <Link className='text-gray-600 hover:text-gray-900' href="/#HireMe">Contact</Link>
            <Link href="/resume.pdf" download="Rimsha_Resume.pdf" target="_blank" rel="noopener noreferrer" className='text-gray-600 hover:text-gray-900' onClick={(e) => { e.preventDefault(); handleResume(); }}>Resume</Link>
          </div>
        </div>
        <div className='flex flex-col'>
          <h3 className='mb-4 font-semibold text-gray-900'>Technical</h3>
          <div className='flex flex-col space-y-2'>
            <Link className='text-gray-600 hover:text-gray-900' href='/#Projects' onClick={(e) => handleScroll(e, 'Projects')}>Projects</Link>
            <Link className='text-gray-600 hover:text-gray-900' href="https://leetcode.com/u/RimshaDev/" target="_blank">LeetCode</Link>
            <Link className='text-gray-600 hover:text-gray-900' href="https://www.hackerrank.com/profile/rimshakonainc" target="_blank">HackerRank</Link>
            <Link className='text-gray-600 hover:text-gray-900' href="/#Skills" onClick={(e) => handleScroll(e, 'Skills')}>Tech Stack</Link>
          </div>
        </div>
        <div className='flex flex-col'>
          <h3 className='mb-4 font-semibold text-gray-900'>Legal</h3>
          <div className='flex flex-col space-y-2'>
            <Link className='text-gray-600 hover:text-gray-900' href="/terms">Terms</Link>
            <Link className='text-gray-600 hover:text-gray-900' href="/privacy">Privacy</Link>
            <Link className='text-gray-600 hover:text-gray-900' href="/disclaimer">Disclaimer</Link>
          </div>
        </div>
        <div className='flex flex-col'>
          <h3 className='mb-4 font-semibold text-gray-900'>Social</h3>
          <div className='flex flex-col space-y-2'>
            <Link className='flex items-center space-x-2 text-gray-600 hover:text-gray-900' href="https://github.com/rimshakonain" target='_blank'><Image width={23} height={23} src="/github.svg" alt="GitHub" /><span>GitHub</span></Link>
            <Link className='flex items-center space-x-2 text-gray-600 hover:text-gray-900' href="https://www.linkedin.com/in/rimsha-konain-c" target='_blank'><Image width={20} height={20} src="/linkedin.svg" alt="LinkedIn" /><span>LinkedIn</span></Link>
            <Link className='flex items-center space-x-2 text-gray-600 hover:text-gray-900' href="https://www.instagram.com/rimshacomix/?hl=en" target='_blank'><Image width={20} height={20} src="/instagram.svg" alt="Instagram" /><span>Instagram</span></Link>
            <Link className='flex items-center space-x-2 text-gray-600 hover:text-gray-900' href="mailto:rimshakonainc@gmail.com" target='_blank'><Image width={20} height={20} src="/Gmail.svg" alt="Email" /><span>Email</span></Link>
          </div>
        </div>
      </div>

      <div className='flex items-center justify-center pl-0 pt-7'>
        <div className='text-center text-sm text-gray-600'>Made with ❤️ and ☕ in India</div>
      </div>
    </footer>
  )
}

export default Footer
