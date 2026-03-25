import React from 'react'

const Footer = () => {
  return (
    <footer className="h-[276px] pl-32 pt-8">
      <div className="container grid grid-cols-4 gap-x-0">
        <div className='flex flex-col'>
          <h3 className='mb-4 font-semibold text-gray-900'>Main</h3>
          <div className='flex flex-col space-y-2'>
            <a className='text-gray-600 hover:text-gray-900' href="">Home</a>
            <a className='text-gray-600 hover:text-gray-900' href="">About Me</a>
            <a className='text-gray-600 hover:text-gray-900' href="">Contact</a>
            <a className='text-gray-600 hover:text-gray-900' href="">Resume</a>
          </div>
        </div>
        <div className='flex flex-col'>
          <h3 className='mb-4 font-semibold text-gray-900'>Technical</h3>
          <div className='flex flex-col space-y-2'>
            <a className='text-gray-600 hover:text-gray-900' href="">Projects</a>
            <a className='text-gray-600 hover:text-gray-900' href="">LeetCode</a>
            <a className='text-gray-600 hover:text-gray-900' href="">HackerRank</a>
            <a className='text-gray-600 hover:text-gray-900' href="">Tech Stack</a>
          </div>
        </div>
        <div className='flex flex-col'>
          <h3 className='mb-4 font-semibold text-gray-900'>Legal</h3>
          <div className='flex flex-col space-y-2'>
            <a className='text-gray-600 hover:text-gray-900' href="">Terms</a>
            <a className='text-gray-600 hover:text-gray-900' href="">Privacy</a>
            <a className='text-gray-600 hover:text-gray-900' href="">Disclaimer</a>
          </div>
        </div>
        <div className='flex flex-col'>
          <h3 className='mb-4 font-semibold text-gray-900'>Social</h3>
          <div className='flex flex-col space-y-2'>
            <a className='flex items-center space-x-2 text-gray-600 hover:text-gray-900' href=""><img width={23} src="/github.svg" alt="GitHub" /><span>GitHub</span></a>
            <a className='flex items-center space-x-2 text-gray-600 hover:text-gray-900' href=""><img width={20} src="/linkedin.svg" alt="LinkedIn" /><span>LinkedIn</span></a>
            <a className='flex items-center space-x-2 text-gray-600 hover:text-gray-900' href=""><img width={20} src="/instagram.svg" alt="Instagram" /><span>Instagram</span></a>
            <a className='flex items-center space-x-2 text-gray-600 hover:text-gray-900' href=""><img width={20} src="Gmail.svg" alt="Email" /><span>Email</span></a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
