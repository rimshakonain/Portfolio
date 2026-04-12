"use client"
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

const Privacy = () => {
  return (
    <>
      <Navbar />
      <div className='min-h-screen bg-slate-50 shadow-[0_0_50px_0_rgba(0,0,0,0.12)] border border-slate-200 my-10 mx-4 rounded-xl'>
        <div className="flex flex-col space-y-1.5 p-6">
          <div className="tracking-tight text-2xl font-bold text-foreground">Privacy Policy</div>
          <p className="text-sm text-muted-foreground text-[#71717a]">Last Updated: April 3, 2026</p>
        </div>
        <div className='p-6 pt-0 space-y-6'>
          <section>
            <h2 className="text-lg font-semibold text-foreground">1. Introduction</h2>
            <p className="text-card-foreground">Welcome to RimshaComix, operated by Rimsha Konain C. I am committed to protecting your privacy and ensuring that your personal information is handled safely and responsibly. This Privacy Policy outlines how I collect, use, and protect your data.</p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-foreground">2. Information I Collect</h2>
            <p className="text-card-foreground">I may collect the following types of information:</p>
            <ul className="list-disc pl-6 space-y-1 text-card-foreground"><li><strong>Personal Information:</strong> Name, email address, and any other information you provide during a &quot;Hire Me&quot; inquiry or contact form submission.</li><li><strong>Usage Data:</strong> Information about how you use my website, including IP address, browser type, pages visited, and time spent on the site.</li><li><strong>Cookies:</strong> Data collected through cookies to enhance your browsing experience (see Section 6).</li></ul>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-foreground">3. How I Use Your Information</h2>
            <p className="text-card-foreground">I use the information I collect for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-1 text-card-foreground"><li>To provide and improve my development services and project demos.</li><li>To respond to your inquiries and manage collaboration requests.</li><li>To send you updates, newsletters, and promotional materials (you can opt-out at any time).</li><li>To monitor website usage and improve user experience.</li><li>To ensure compliance with my Terms and Conditions.</li></ul>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-foreground">4. How I Protect Your Data</h2>
            <p className="text-card-foreground">I implement appropriate technical and organizational measures to protect your personal information from unauthorized access, alteration, or disclosure. These include secure servers, encrypted communication, and regular security assessments of my MERN and Next.js applications.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-foreground">5. Sharing Your Information</h2>
            <p className="text-card-foreground">I do not sell, rent, or trade your personal information. However, I may share your data with trusted third parties for the following purposes:
            </p>
            <ul className='list-disc pl-6 space-y-1 text-card-foreground'>
              <li>Service providers to help me deliver and improve my website and apps.</li>
              <li>Legal authorities if required to comply with applicable laws or regulations.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-foreground">6. Cookies and Tracking</h2>
            <p className="text-card-foreground">I use cookies to improve your experience on my website. These cookies help me track your preferences, analyze website performance, and deliver personalized content. You can manage your cookie preferences in your browser settings.</p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-foreground">7. Your Rights</h2>
            <p className="text-card-foreground">You have the following rights regarding your personal data:</p>
            <ul className='list-disc pl-6 space-y-1 text-card-foreground'>
              <li>Access to your personal data and information on how it is used.</li>
              <li>Request correction of any inaccuracies in your personal data.</li>
              <li>Request deletion of your personal data, subject to legal obligations.</li>
              <li>Opt-out of receiving promotional communications.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-foreground">8. Changes to This Privacy Policy</h2>
            <p className="text-card-foreground">I may update this Privacy Policy from time to time. Any changes will be posted on this page with the updated date. Please review this page periodically to stay informed.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-foreground">9. Contact Me</h2>
            <div className="text-card-foreground">
              If you have any questions or concerns about this Privacy Policy, feel free to contact Me:<br />
              📧 <a href="mailto:rimshakonainc@gmail.com" className="text-primary hover:text-primary/90 hover:underline">rimshakonainc@gmail.com</a><br />
              📍 Address: SRM Easwari Engineering College, Chennai, Tamil Nadu, 600089<br />
            </div>
          </section>
        </div>
      </div>
      <div className='bg-gray-50'>
        <Footer />
      </div>
    </>
  )
}

export default Privacy