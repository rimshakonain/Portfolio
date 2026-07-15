"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const ExperiencePage = () => {
    const experiences = [
        {
            title: "Graphic Designer & Technical Developer",
            company: "E-Cell SRMIST",
            logo: "/srmist.jpg",
            duration: "Feb 2026 - Present",
            location: "Chennai, Tamil Nadu · On-site",
            website: "",
            description:
                "Member of the Innovation/Startup Cell. Contributing across creative and technical domains to support startups and hackathon teams. Collaborating with cross-functional teams to move ideas toward execution while learning, building, and debugging."
        },
        {
            title: "Web Development & Digital Marketing Intern",
            company: "Sparwix",
            logo: "/sparwix.jpg",
            duration: "Feb 2026 - Present",
            location: "Chennai, Tamil Nadu · On-site",
            website: "",
            description:
                "AICTE Internship focused on digital marketing strategies and outreach. Gained hands-on exposure in online marketing, engagement, and applying technical development to digital growth."
        },
        {
            title: "Freelance Web Designer",
            company: "Shop Crystal Touch",
            logo: "/shopcrystaltouch.jpeg",
            duration: "June 2026",
            location: "Chennai, Tamil Nadu · Remote",
            website: "https://shopcrystaltouch.framer.website/",
            description:
                "Designed and delivered a responsive e-commerce website for a handmade accessories business. Collaborated directly with the client to understand business requirements, organized products into intuitive categories, and integrated WhatsApp-based ordering to provide a seamless customer purchasing experience."
        },
        {
            title: "Freelance Web Designer",
            company: "ARK Kitchen",
            logo: "/arkkitchen.png",
            duration: "July 2026",
            location: "Vaniyambadi, Tamil Nadu · Remote",
            website: "https://arkkitchen.framer.website/",
            description:
                "Designed and delivered a responsive website for a home food delivery business. Built a scalable digital menu featuring 70+ food items, designed a streamlined next-day pre-order workflow, and integrated WhatsApp ordering to simplify the customer ordering experience."
        }
    ];

    return (
        <div className="flex flex-col items-center min-h-fit bg-white text-black px-4 sm:px-6 py-12 md:py-20">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 text-center">
                Experience
            </h1>

            <div className="max-w-4xl w-full space-y-10">
                {experiences.map((exp, index) => (
                    <div
                        key={index}
                        className="group relative flex flex-col sm:flex-row gap-6 p-4 sm:p-6 border border-zinc-200 rounded-xl hover:border-zinc-300 transition-colors duration-300"
                    >
                        {/* Logo */}
                        <div className="flex-shrink-0 w-16 h-16 bg-zinc-100 rounded-lg overflow-hidden flex items-center justify-center mx-auto sm:mx-0">
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
                            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3">
                                <div>
                                    <h3 className="text-xl md:text-2xl font-bold text-black">
                                        {exp.title}
                                    </h3>
                                    <p className="text-base md:text-lg text-zinc-600 font-medium">
                                        {exp.company}
                                    </p>
                                </div>

                                <div className="text-left md:text-right text-zinc-500 text-sm">
                                    <p className="font-semibold">{exp.duration}</p>
                                    <p>{exp.location}</p>
                                </div>
                            </div>

                            <p className="mt-4 text-zinc-600 leading-relaxed text-sm sm:text-base">
                                {exp.description}
                            </p>

                            {exp.website && (
                                <a
                                    href={exp.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`View ${exp.company} project`}
                                    className="mt-4 inline-flex items-center gap-1 text-sm text-black hover:text-zinc-900 transition-colors">
                                    View Project ↗
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            <Link
                href="/"
                className="mt-16 px-7 py-2 border-black text-white bg-black rounded-md"
            >
                Back to Home
            </Link>
        </div>
    );
};

export default ExperiencePage;
