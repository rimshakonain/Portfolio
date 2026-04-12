"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const ExperiencePage = () => {
    const experiences = [
        {
            title: "Graphic Designer & Technical Developer",
            company: "E-Cell SRMIST",
            logo: "/srmist.jpg", // Updated to your file name
            duration: "Feb 2026 - Present",
            location: "Chennai, Tamil Nadu · On-site",
            description: "Member of the Innovation/Startup Cell. Contributing across creative and technical domains to support startups and hackathon teams. Collaborating with cross-functional teams to move ideas toward execution while learning, building, and debugging."
        },
        {
            title: "Web Development & Digital Marketing Intern",
            company: "Sparwix",
            logo: "/sparwix.jpg", // Updated to your file name
            duration: "Feb 2026 - Present",
            location: "Chennai, Tamil Nadu · On-site",
            description: "AICTE Internship focused on digital marketing strategies and outreach. Gained hands-on exposure in online marketing, engagement, and applying technical development to digital growth."
        }
    ];

    return (
        <div className="flex flex-col items-center min-h-fit bg-white text-black px-6 py-20">
            <h1 className="text-6xl font-bold mb-8">Experience</h1>
            {/* <div className="w-20 h-1 bg-zinc-300 mb-16"></div> */}

            <div className="max-w-4xl w-full space-y-10">
                {experiences.map((exp, index) => (
                    <div key={index} className="group relative flex gap-6 p-6 border border-zinc-200 rounded-xl hover:border-zinc-300 transition-colors duration-300" >
                        {/* Logo Container */}
                        <div className="flex-shrink-0 w-16 h-16 bg-zinc-100 rounded-lg overflow-hidden flex items-center justify-center">
                            <Image 
                                src={exp.logo} 
                                alt={exp.company} 
                                width={64} 
                                height={64} 
                                className="object-cover" 
                            />
                        </div>

                        {/* Content */}
                        <div className="flex flex-col flex-1">
                            <div className="flex justify-between items-start flex-wrap gap-2">
                                <div>
                                    <h3 className="text-2xl font-bold text-black">{exp.title}</h3>
                                    <p className="text-lg text-zinc-600 font-medium">{exp.company}</p>
                                </div>
                                <div className="text-right sm:text-right text-zinc-500 text-sm">
                                    <p className="font-semibold">{exp.duration}</p>
                                    <p>{exp.location}</p>
                                </div>
                            </div>
                            <p className="mt-4 text-zinc-600 leading-relaxed text-sm sm:text-base">
                                {exp.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <Link 
                href="/" 
                className="mt-16 px-6 py-2 border-black text-black rounded-md border-2" 
            >
                Back to Home
            </Link>
        </div>
    );
};

export default ExperiencePage;
