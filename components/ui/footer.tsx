import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      <div className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          {/* Top area: Blocks */}
          <div className="grid md:grid-cols-12 gap-8 lg:gap-20 mb-8 md:mb-12">

               {/* 1st block */}
        <div className="md:col-span-4 lg:col-span-5">
          <div className="mb-2">
            {/* Logo */}
            <Link href="/" className="inline-block" aria-label="BugClaim">
              <svg className="w-8 h-8 fill-current text-purple-600" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                {/* Your logo's SVG path goes here */}
              </svg>
            </Link>
          </div>
          <div className="text-gray-400">BugClaim - We connect Cyber Security Experts and Company together.</div>
        </div>

        {/* 2nd, 3rd and 4th blocks */}
        <div className="md:col-span-8 lg:col-span-7 grid sm:grid-cols-3 gap-8">

          {/* 2nd block */}
          <div className="text-sm">
            <h6 className="text-gray-200 font-medium mb-1">Services</h6>
            <ul>
              <li className="mb-1">
                <Link href="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Bug Posting</Link>
              </li>
              <li className="mb-1">
                <Link href="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Bug Solving</Link>
              </li>
              <li className="mb-1">
                <Link href="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Bounty Claims</Link>
              </li>
            </ul>
          </div>

          {/* 3rd block */}
          <div className="text-sm">
            <h6 className="text-gray-200 font-medium mb-1">Resources</h6>
            <ul>
              <li className="mb-1">
                <Link href="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">BugClaim Blog</Link>
              </li>
              <li className="mb-1">
                <Link href="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Tutorials</Link>
              </li>
              <li className="mb-1">
                <Link href="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">FAQs</Link>
              </li>
            </ul>
          </div>

          {/* 4th block */}
          <div className="text-sm">
            <h6 className="text-gray-200 font-medium mb-1">Company</h6>
            <ul>
              <li className="mb-1">
                <Link href="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">About BugClaim</Link>
              </li>
              <li className="mb-1">
                <Link href="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Contact</Link>
              </li>
              <li className="mb-1">
                <Link href="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Careers</Link>
              </li>
            </ul>
          </div>

        </div>

      </div>

      {/* Bottom area */}
      <div className="md:flex md:items-center md:justify-between">

        {/* Social links */}
        {/* Replace '#' with your actual social media links */}
        {/* You may also need to replace the SVG paths with the icons for your social media platforms */}
        {/* ... */}

        {/* Copyrights note */}
        <div className="text-gray-400 text-sm mr-4">&copy; BugClaim. All rights reserved.</div>

      </div>

    </div>
  </div>
</footer>

  )
}
