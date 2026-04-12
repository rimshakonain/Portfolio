"use client"
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

const Terms = () => {
  return (
    <>
      <Navbar />
      <div className='min-h-screen bg-slate-50 shadow-[0_0_50px_0_rgba(0,0,0,0.12)] border border-slate-200 my-10 mx-4 rounded-xl'>
        <div className="flex flex-col space-y-1.5 p-6">
          <div className="tracking-tight text-2xl font-bold text-foreground">Terms and Conditions</div>
          <p className="text-sm text-muted-foreground text-[#71717a]">Last Updated: April 3, 2026</p>
        </div>
        <div className='p-6 pt-0 space-y-6'>
          <section>
            <h2 className="text-lg font-semibold text-foreground">1. Acceptance of Terms</h2>
            <p className="text-card-foreground">By accessing or using RimshaComix, browsing my projects, or downloading any source code snippets, you agree to these Terms and Conditions. These terms govern your use of the portfolio and services provided by Rimsha Konain C. If you do not agree, please do not use this website.</p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-foreground">2. Services Provided</h2>
            <p className="text-card-foreground">I provide full-stack MERN and Next.js development services. This portfolio showcases my technical expertise, including live project demos and code repositories. Project details, features, and service pricing (for &quot;Hire Me&quot; requests) are subject to change at my discretion.</p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-foreground">3. Intellectual Property</h2>
            <p className="text-card-foreground">All portfolio materials, including UI designs, custom logic, project architectures, and visual assets, are the intellectual property of Rimsha Konain C. You are granted a limited, non-exclusive license to view the content for educational and recruitment purposes only.
              Any reproduction, distribution, or unauthorized cloning of this portfolio&apos;s design or project logic is strictly prohibited.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-foreground">4. Legal Consequences of Unauthorized Distribution or Plagiarism</h2>
            <p className="text-card-foreground">Unauthorized downloading, screen recording, distributing, or reselling of the projects or code featured on this site is a serious offense. Violators may be subject to civil and criminal penalties under Indian laws and international conventions. I actively monitor access and will take strict legal action against any breach.
            </p>
            <h3 className="text-md font-semibold text-foreground mt-4">Applicable Laws Under Which Violators Can Be Prosecuted:</h3>
            <h4 className="text-md font-medium text-foreground mt-3">1. The Copyright Act, 1957 (India)</h4>
            <ul className="list-disc pl-6 space-y-1 text-card-foreground">
              <li>Section 51 & 63 (Punishment up to 3 years imprisonment and fines).</li>
            </ul>
            <h4 className="text-md font-medium text-foreground mt-3">2. Information Technology Act, 2000 (India):</h4>
            <ul className="list-disc pl-6 space-y-1 text-card-foreground">
              <li>Section 66 (Hacking/Unauthorized access) and Section 72 (Breach of confidentiality).</li>
            </ul>
            <h4 className="text-md font-medium text-foreground mt-3">3. Indian Penal Code (IPC):</h4>
            <ul className="list-disc pl-6 space-y-1 text-card-foreground">
              <li>Section 406 (Criminal breach of trust) and Section 420 (Cheating).</li>
            </ul>
            <h3 className="text-md font-semibold text-foreground mt-4">Final Warning</h3>
            <p className='text-card-foreground'>I am bound to take legal action against anyone found guilty of plagiarizing, reselling, or duplicating my original project work. My systems log IP addresses and device fingerprints to detect violations. Legal notices and copyright takedown requests (DMCA) will be filed without warning.</p>
            <p className="text-card-foreground font-semibold">Don&apos;t risk your professional future over a short-term decision to steal code.</p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-foreground">5. Disclaimer</h2>
            <p className="text-card-foreground">Project demos (like the Password Manager or Crowdfunding Platform) are provided &quot;as-is&quot; for educational and portfolio demonstration. While I strive for security and efficiency, I make no guarantees about outcomes or data safety if you use these prototypes for real-world financial transactions.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-foreground">6. User Conduct</h2>
            <p className="text-card-foreground">You agree not to misuse this portfolio, including:</p>
            <ul className="list-disc pl-6 space-y-1 text-card-foreground">
              <li>Attempting to hack or disrupt the site&apos;s services.</li>
              <li>Spamming the &quot;Hire Me&quot; or contact forms with inappropriate content.</li>
              <li>Claiming my 700+ day streak or 500+ commits as your own work.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-foreground">7. Payment & Refund Policy</h2>
            <p className="text-card-foreground">For freelance engagements: All initial deposits for project commencement are final. Refunds are generally not provided once development has started. If you experience a payment issue during a &quot;Hire Me&quot; transaction, contact me immediately for resolution.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-foreground">8. Account & Access Termination</h2>
            <p className="text-card-foreground">I reserve the right to block your access to this portfolio or associated social links (GitHub, LinkedIn) if you violate these terms or engage in behavior harmful to my professional reputation.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-foreground">9. Governing Law and Jurisdiction</h2>
            <p className="text-card-foreground">These Terms and Conditions shall be governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts located in Chennai, Tamil Nadu, India.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-foreground">10. Contact Us</h2>
            <div className="text-card-foreground">
              If you have any questions or concerns regarding these terms, feel free to contact:<br />
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

export default Terms
