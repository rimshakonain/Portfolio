import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <footer className="h-69 pl-32 pt-8">
      <div className="container grid grid-cols-4 gap-x-0">
        <div className='flex flex-col'>
          <h3 className='mb-4 font-semibold text-gray-900'>Main</h3>
          <div className='flex flex-col space-y-2'>
            <Link className='text-gray-600 hover:text-gray-900' href="#Home" onClick={(e) => handleScroll(e, 'Home')}>Home</Link>
            <Link className='text-gray-600 hover:text-gray-900' href="#About" onClick={(e) => handleScroll(e, 'About')}>About Me</Link>
            <Link className='text-gray-600 hover:text-gray-900' href="">Contact</Link>
            <Link className='text-gray-600 hover:text-gray-900' href="">Resume</Link>
          </div>
        </div>
        <div className='flex flex-col'>
          <h3 className='mb-4 font-semibold text-gray-900'>Technical</h3>
          <div className='flex flex-col space-y-2'>
            <Link className='text-gray-600 hover:text-gray-900' href='#Projects' onClick={(e) => handleScroll(e, 'Projects')}>Projects</Link>
            <Link className='text-gray-600 hover:text-gray-900' href="">LeetCode</Link>
            <Link className='text-gray-600 hover:text-gray-900' href="">HackerRank</Link>
            <Link className='text-gray-600 hover:text-gray-900' href="">Tech Stack</Link>
          </div>
        </div>
        <div className='flex flex-col'>
          <h3 className='mb-4 font-semibold text-gray-900'>Legal</h3>
          <div className='flex flex-col space-y-2'>
            <Link className='text-gray-600 hover:text-gray-900' href="http://localhost:3000/terms">Terms</Link>
            <Link className='text-gray-600 hover:text-gray-900' href="http://localhost:3000/privacy">Privacy</Link>
            <Link className='text-gray-600 hover:text-gray-900' href="http://localhost:3000/disclaimer">Disclaimer</Link>
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

      <div className='flex items-center justify-center'>
      <div className='text-center'>Build with ❤️☕</div>
      </div>
    </footer>
  )
}

export default Footer
