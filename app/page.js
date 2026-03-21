import Image from "next/image";
import Navbar from "@/components/Navbar";

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

  return (
    <>
      <Navbar />
      <div className="hero w-[60vw] mx-auto text-center mt-40 min-h-screen">
        <button className="text-sm border border-2 p-2 rounded-full bg-[#18181b] px-5 text-white">Design. Code. Create</button>
        <h1 className="text-7xl pt-16">Welcome to RimshaComix</h1>
        <h2 className="text-3xl pt-4">Full-Stack MERN & Next.js Developer</h2>
        <p className="text-xl pt-12 text-gray-700">Want to see what I&apos;ve been working on? I&apos;ve got you covered!
          Browse my projects and skills to discover what I do best.
          This portfolio is my effort to showcase the coding and web development skills that took years to master.</p>
        <div className="flex gap-5 justify-center items-center pt-14">
          <button className="border border-2 px-7 py-2 rounded-md cursor-pointer">View Projects</button>
          <button className="border border-2 px-7 py-2 rounded-md text-white bg-black cursor-pointer">Download Resume</button>
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


      <div className="bg-black w-full h-[1px] my-20 opacity-50"></div>


      <section className="about min-h-screen">
        <div className="w-[60vw] mx-auto">
          <div className="title text-center font-bold text-4xl">About Me</div>
          <div className="text-center">
            <h2 className="font-bold text-3xl pt-8">Turning Ideas into Real-World Applications</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed pt-6">
              I&apos;m Rimsha Konain C, a B.Tech CSE student building real-world web applications using the MERN stack and Next.js, focused on creating scalable, practical, and efficient solutions for real-world development challenges.
            </p>
          </div>
        </div>

        <div className="about flex gap-8 pt-12">
          <div className="bg-white w-[491px] h-[400px] rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
            <img className="object-cover" src="/srm.png" alt="SRM Easwari" />
            <div className="w-[475px] pt-4 pl-6">
              <h2 className="text-xl mb-2 font-semibold">My Academic Journey</h2>
              <p className="text-zinc-600">B.E CSE at SRM Easwari, building a strong foundation in coding and tech skills.</p>
            </div>
          </div>

          <div className="bg-white w-[491px] h-[400px] rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
            <img className="object-cover h-[279px] w-full" src="/me.webp" alt="SRM Easwari" />
            <div className="w-[475px] pt-4 pl-6">
              <h2 className="text-xl mb-2 font-semibold">About Me</h2>
              <p className="text-zinc-600">Full-Stack MERN & Next.js developer passionate about building real-world projects.</p>
            </div>
          </div>

          <div className="bg-white w-[491px] h-[400px] rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
            <img className="object-cover  h-[279px] w-full" src="/pc.webp" alt="SRM Easwari" />
            <div className="w-[475px] pt-4 pl-6">
              <h2 className="text-xl mb-2 font-semibold">Projects & Practice</h2>
              <p className="text-zinc-600">Developing scalable applications and refining coding skills through hands-on projects.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="skills w-3/4 mx-auto">
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

      <section className="projects min-h-screen">
        <div className="w-[80vw] mx-auto">
          <h2 className="text-xl mb-2 font-semibold">Projects</h2>
        </div>
      </section>
    </>
  );
}
