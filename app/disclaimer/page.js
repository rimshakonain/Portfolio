"use client"
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

const Disclaimer = () => {
  return (
    <>
      <Navbar />
      <div className='min-h-screen bg-slate-50 shadow-[0_0_50px_0_rgba(0,0,0,0.12)] border border-slate-200 my-10 mx-4 rounded-xl'>
        <div className="flex flex-col space-y-1.5 p-6">
          <div className="tracking-tight text-2xl font-bold text-foreground">Disclaimer</div>
          <p className="text-sm text-muted-foreground text-[#71717a]">Last Updated: April 3, 2026</p>
        </div>
        <div className='p-6 pt-0 space-y-6'>
          <section>
            <h2 className="text-lg font-semibold text-foreground">1. Introduction</h2>
            <p className="text-card-foreground">Welcome to RimshaComix, operated by Rimsha Konain C. This Disclaimer outlines the terms and conditions regarding the information, projects, and content provided on this website. By using this site, you agree to this disclaimer in full.</p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-foreground">2. Informational Purposes Only</h2>
            <p className="text-card-foreground">All content provided on RimshaComix, including tutorials, code snippets, and project demonstrations, is for educational and informational purposes only. While I strive for accuracy, I make no representations or warranties of any kind, express or implied, about the completeness, accuracy, or reliability of the information provided. </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-foreground">3. &quot;As-Is&quot; Basis</h2>
            <p className="text-card-foreground">The projects, source code, and applications showcased here (such as the Password Manager and Crowdfunding Platform) are provided on an &quot;as-is&quot; and &quot;as-available&quot; basis. I do not warrant that the website will be uninterrupted, error-free, or free of viruses or other harmful components. Use of any information or tools on this site is strictly at your own risk. </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-foreground">4. Professional Relationship</h2>
            <p className="text-card-foreground">Your use of this website does not create a professional-client relationship between you and Rimsha Konain C. Any technical advice or coding tips should be verified with official documentation before implementation in production environments.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-foreground">5. External Links Disclaimer</h2>
            <p className="text-card-foreground">My website may contain links to external sites (such as GitHub, LinkedIn, or third-party resources) that are not provided or maintained by me. I do not guarantee the accuracy, relevance, or completeness of any information on these external websites.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-foreground">6. Limitation of Liability</h2>
            <p className="text-card-foreground">In no event shall Rimsha Konain C or RimshaComix be liable for any special, direct, indirect, consequential, or incidental damages or any damages whatsoever, whether in an action of contract, negligence, or other tort, arising out of or in connection with the use of this website or the contents of this portfolio.</p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-foreground">7. Fair Use Disclaimer</h2>
            <p className="text-card-foreground">Occasionally, I may reference or showcase materials created by other authors to add context to my projects. I strive to use these materials under fair use principles, providing clear attribution for educational purposes. All copyrighted materials are owned by their respective holders.</p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-foreground">8. Changes to This Disclaimer</h2>
            <p className="text-card-foreground">I reserve the right to make additions, deletions, or modifications to the contents on this website at any time without prior notice. Please check this page periodically for updates.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-foreground">9. Contact Me</h2>
            <div className="text-card-foreground">
              If you have any questions about this Disclaimer, feel free to contact me:<br />
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

export default Disclaimer