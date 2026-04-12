"use client"
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useState } from "react";
import Form from "@/components/Form";

import {
  SiCplusplus, SiPython, SiJavascript, SiMysql,
  SiHtml5, SiCss, SiReact, SiNextdotjs, SiNodedotjs,
  SiExpress, SiMongodb, SiTailwindcss, SiBootstrap,
  SiJsonwebtokens, SiInsomnia, SiPug, SiDiagramsdotnet,
  SiGit, SiGithub, SiVercel, SiPostman, SiFigma, SiLeetcode,
} from "react-icons/si";

import { DiJava } from "react-icons/di";
import { DiGithubBadge } from "react-icons/di";
import { DiLinux } from "react-icons/di";
import { DiNpm } from "react-icons/di";
import { DiVisualstudio } from "react-icons/di";
import { FaHackerrank } from "react-icons/fa";

export default function Home() {

  const mySkills = [
    /* Languages */
    { skills: "DSA", icon: <SiDiagramsdotnet /> },
    { skills: "Leetcode", icon: <SiLeetcode /> },
    { skills: "Java", icon: <DiJava /> },
    { skills: "C / C++", icon: <SiCplusplus /> },
    { skills: "Python", icon: <SiPython /> },
    { skills: "JavaScript", icon: <SiJavascript /> },
    { skills: "Next.js", icon: <SiNextdotjs /> },
    { skills: "React.js", icon: <SiReact /> },
    { skills: "Node.js", icon: <SiNodedotjs /> },
    { skills: "MongoDB", icon: <SiMongodb /> },
    { skills: "SQL", icon: <SiMysql /> },
    { skills: "Express.js", icon: <SiExpress /> },
    { skills: "Tailwind CSS", icon: <SiTailwindcss /> },
    { skills: "HTML", icon: <SiHtml5 /> },
    { skills: "CSS", icon: <SiCss /> },
    { skills: "Bootstrap", icon: <SiBootstrap /> },
    { skills: "Linux", icon: <DiLinux /> },
    { skills: "Git / GitHub", icon: < DiGithubBadge /> },
    { skills: "Git / GitHub", icon: <SiGit /> },

    /* Technologies & Tools */
    { skills: "Vercel", icon: <SiVercel /> },
    { skills: "Postman", icon: <SiPostman /> },
    { skills: "Visualstudio", icon: <DiVisualstudio /> },
    { skills: "Figma", icon: <SiFigma /> },
    { skills: "Npm", icon: <DiNpm /> }

  ];

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

  const handleClick = () => {
    setShowForm(true);
  }

  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <Navbar />
      <div className="hero w-[60vw] mx-auto text-center mt-40 min-h-screen">
        <button className="text-sm border-2 p-2 rounded-full bg-[#18181b] px-5 text-white">Design. Code. Create</button>
        <h1 className="text-7xl pt-16">Welcome to RimshaComix</h1>
        <h2 className="text-3xl pt-4">Full-Stack MERN & Next.js Developer</h2>
        <p className="text-xl pt-12 text-gray-700">Want to see what I&apos;ve been working on? I&apos;ve got you covered!
          Browse my projects and skills to discover what I do best.
          This portfolio is my effort to showcase the coding and web development skills that took years to master.</p>
        <div className="flex gap-5 justify-center items-center pt-14">
          <Link href='#Projects' onClick={(e) => handleScroll(e, 'Projects')}><button className="border-2 px-7 py-2 rounded-md cursor-pointer">View Projects</button></Link>
          <a href="/resume.pdf" download="Rimsha_Resume.pdf" target="_blank" rel="noopener noreferrer" className="border-2 px-7 py-2 rounded-md text-white bg-black cursor-pointer" onClick={(e) => { e.preventDefault(); handleResume(); }}>Download Resume</a>
        </div>

        <div className="flex gap-7 justify-center items-center mt-24 bg-[#151820] text-white p-6 font-bold w-fit mx-auto rounded-2xl">
          <div className="flex flex-col">
            <span className="text-3xl font-bold">700+</span>
            <span className="text-sm">Streak</span>
          </div>
          <div className="flex flex-col">
            <span className="text-3xl font-bold">7+</span>
            <span className="text-sm">Apps</span>
          </div>
          <div className="flex flex-col">
            <span className="text-3xl font-bold">500+</span>
            <span className="text-sm">Commits</span>
          </div>
        </div>
      </div>


      <div className="bg-black w-full h-px my-20 opacity-50"></div>


      <section id="About" className="about min-h-screen">
        <div className="max-w-6xl mx-auto">
          <div className="title text-center font-bold text-4xl">About Me</div>
          <div className="text-center">
            <h2 className="font-bold text-3xl pt-8">Turning Ideas into Real-World Applications</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed pt-6">
              I&apos;m Rimsha Konain C, a B.Tech CSE student building real-world web applications using the MERN stack and Next.js, focused on creating scalable, practical, and efficient solutions for real-world development challenges.
            </p>
          </div>
        </div>

        <div className="about flex gap-8 pt-12">
          <div className="bg-white flex-1 h-100 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
            <Image width={1000} height={1000} className="object-cover h-69.75 w-full" src="/srm.png" alt="SRM Easwari" />
            <div className="w-[475px] pt-4 pl-6">
              <h2 className="text-xl mb-2 font-semibold">My Academic Journey</h2>
              <p className="text-zinc-600">B.E CSE at SRM Easwari, building a strong foundation in coding and tech skills.</p>
            </div>
          </div>

          <div className="bg-white flex-1 h-100 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
            <Image width={1000} height={1000} className="object-cover h-69.75 w-full" src="/me.webp" alt="Developer" />
            <div className="w-[475px] pt-4 pl-6">
              <h2 className="text-xl mb-2 font-semibold">About Me</h2>
              <p className="text-zinc-600">Full-Stack MERN & Next.js developer passionate about building real-world projects.</p>
            </div>
          </div>

          <div className="bg-white flex-1 h-100 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
            <Image width={1000} height={1000} className="object-cover  h-69.75 w-full" src="/pc.webp" alt="Projects" />
            <div className="w-[475px] pt-4 pl-6">
              <h2 className="text-xl mb-2 font-semibold">Projects & Practice</h2>
              <p className="text-zinc-600">Developing scalable applications and refining coding skills through hands-on projects.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="Skills" className="skills w-3/4 mx-auto">
        <div className="w-[75vw] mx-auto">
          <div className="title text-center font-bold text-4xl pt-20">Technical Expertise</div>
          <div className="flex justify-between items-center mt-20">
            <div className="flex flex-col justify-center items-center">
              <p className="text-lg font-medium text-zinc-600">I have built</p>
              <p className="pt-4 text-5xl font-semibold pt-12">7+</p>
              <p className="text-2xl font-semibold text-zinc-600">full-stack projects</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <p className="text-lg font-medium text-zinc-600">Spent over</p>
              <p className="pt-4 text-5xl font-semibold pt-12">500+</p>
              <p className="text-2xl font-semibold text-zinc-600">hours practicing code</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <p className="text-lg font-medium text-zinc-600">successfully launched</p>
              <p className="pt-4 text-5xl font-semibold pt-12">3+</p>
              <p className="text-2xl font-semibold text-zinc-600">apps to production</p>
            </div>
          </div>


          <div>
            <h2 className="text-3xl font-bold text-gray-900 text-center mt-28">Languages, Frameworks & Tools I Use</h2>

            <div className="grid grid-cols-6 gap-5 mt-10">
              {mySkills.map((mySkill, index) => {
                return (
                  <div key={index} className="card w-full h-18 grid grid-cols-1 place-items-center shadow-sm p-4 rounded-lg cursor-pointer hover:shadow-md">
                    <div className="flex justify-center items-center text-center ">
                      <span className="text-3xl font-bold uppercase tracking-wider">
                        {mySkill.icon}
                      </span>
                    </div>
                  </div>
                )
              })}
            </div>
            <p className="text-gray-500 text-center mt-6">+ many more skills</p>
          </div>
        </div>
      </section>

      <section id="Projects" className="projects min-h-screen pb-16">
        <div className="w-[83vw] mx-auto">
          <h2 className="text-lg text-zinc-600 text-start mb-2 font-semibold mt-32">Projects</h2>
          <h2 className="font-semibold text-4xl mt-4">Take a Look at Some of My Recent Work</h2>
          <div className="grid grid-cols-3 mt-20 gap-x-10 gap-y-8 mx-auto w-full">
            <div className="bg-foreground/20 backdrop-blur-sm bg-zinc-200 rounded-lg h-75 flex flex-col items-center text-center cursor-pointer hover:shadow-md shadow-sm">
              <Image width={400} height={400} className="object-cover rounded-t-lg" src="/GetMeAChai.png" alt="" />
              <span className="text-md font-medium text-center pt-2">Creator Crowdfunding Platform</span>
              <p className="px-4 text-zinc-600 text-center pt-2">A Patreon-style app with Razorpay integration and real-time contribution tracking.</p>
            </div>
            <div className="bg-foreground/20 backdrop-blur-sm bg-zinc-200 rounded-lg h-75 flex flex-col items-center text-center cursor-pointer hover:shadow-md shadow-sm">
              <Image width={400} height={400} className="object-cover rounded-t-lg" src="/BitTree.png" alt="" />
              <span className="text-md font-medium text-center pt-2">Everything you are. In one, simple link in bio.</span>
              <p className="px-4 text-zinc-600 text-center pt-2">Consolidate your social presence and products into a single, customisable landing page.</p>
            </div>
            <div className="bg-foreground/20 backdrop-blur-sm bg-zinc-200 rounded-lg h-75 flex flex-col items-center text-center cursor-pointer hover:shadow-md shadow-sm">
              <Image width={400} height={400} className="object-cover rounded-t-lg" src="/BitLinks.png" alt="" />
              <span className="text-md font-medium text-center pt-2">The best URL shortener in the Market</span>
              <p className="px-4 text-zinc-600 text-center pt-2">Fast, straightforward link shortening with zero tracking and no login required.
              </p>
            </div>
            <div className="bg-foreground/20 backdrop-blur-sm bg-zinc-200 rounded-lg h-75 flex flex-col items-center text-center cursor-pointer hover:shadow-md shadow-sm">
              <Image width={400} height={400} className="object-cover rounded-t-lg" src="/PassOP.png" alt="" />
              <span className="text-md font-medium text-center pt-2">Your own Password Manager.</span>
              <p className="px-4 text-zinc-600 text-center pt-2">A secure, no-login tool to store, edit, and manage your credentials privately.</p>
            </div>
            <div className="bg-foreground/20 backdrop-blur-sm bg-zinc-200 rounded-lg h-75 flex flex-col items-center text-center cursor-pointer hover:shadow-md shadow-sm">
              <Image width={400} height={400} className="object-cover rounded-t-lg" src="/iTask.png" alt="" />
              <span className="text-md font-medium text-center pt-2">Task Management App</span>
              <p className="px-4 text-zinc-600 text-center pt-2">A clean, focused space to organise daily goals and track progress without clutter.</p>
            </div>
            <div className="bg-foreground/20 backdrop-blur-sm bg-zinc-200 rounded-lg h-75 flex flex-col items-center text-center cursor-pointer hover:shadow-md shadow-sm">
              <Image width={400} height={400} className="object-cover rounded-t-lg" src="/Spotify.png" alt="" />
              <span className="text-md font-medium text-center pt-2">Media Analytics Player</span>
              <p className="px-4 text-zinc-600 text-center pt-2">Real-time audio engine featuring local file management and interactive playback controls.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="Achievements" className="achievements min-h-96">
        <div className="w-[83vw] mx-auto pb-11">
          <h2 className="text-4xl font-semibold title-font text-gray-900 mb-12 pt-12 text-center">Achievements</h2>
          <div className="flex w-full gap-7">
            <div className="flex-1 box1 borde h-72 p-7 bg-gray-100 rounded">
              <div className="text-4xl">🥇</div>
              <h2 className="pt-3 font-semibold text-xl text-gray-900">Triple Academic Distinction</h2>
              <p className="leading-relaxed pt-4 text-zinc-600">Secured 1st Rank for three consecutive years (10th, 11th, & 12th Grade), maintaining top-tier academic discipline and focus while consistently outperforming peers in highly competitive environments to build a solid foundation.</p>
            </div>
            <div className="flex-1 box1 borde h-72 p-7 bg-gray-100 rounded">
              <div className="text-4xl">🚀</div>
              <h2 className="pt-3 font-semibold text-xl text-gray-900">Development & Logic Consistency</h2>
              <p className="leading-relaxed pt-4 text-zinc-600">Maintained a 700+ day coding streak with over 500 GitHub commits, successfully launching 7+ full-stack MERN and Next.js applications while mastering complex data structures and algorithmic problem-solving for scalable web development.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="HireMe" className="hireme min-h-64">
        <div className="parent relative">
          <img className="w-full h-[370px] object-cover opacity-30" src="https://www.codewithharry.com/_next/image?url=%2Fcoding%2F1.jpg&w=3840&q=75" alt="Engineering Background" />
          <div className="absolute inset-0 z-10">
            <h2 className="font-extrabold text-6xl text-center relative mt-20 mb-5">Launch Your Next Project</h2>
            <p className="text-center text-xl text-zinc-700 max-w-3xl mx-auto">Build fast, scalable web applications with India&apos;s most dedicated full-stack developer.</p>
            <div className="flex justify-center mt-11">
              <a href=""></a>
              <button className="bg-black text-white cursor-pointer px-8 py-2 text-center text-lg font-semibold rounded-md border border-transparent transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50" onClick={handleClick}>Hire Me Now</button>
            </div>
          </div>
        </div>
      </section>

      <Form isOpen={showForm} onClose={() => setShowForm(false)} />

      <Footer />
    </>
  );
}
