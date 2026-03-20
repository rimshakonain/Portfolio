import Image from "next/image";
import Navbar from "@/components/Navbar";
import {
  SiCplusplus, SiJava, SiPython, SiJavascript, SiMysql,
  SiHtml5, SiCss3, SiReact, SiNextdotjs, SiNodedotjs,
  SiExpress, SiMongodb, SiTailwindcss, SiBootstrap,
  SiJsonwebtokens, SiInsomnia, SiPug,
  SiGit, SiGithub, SiVercel, SiPostman, SiFigma,
  SiMongoose
} from "react-icons/si";


export default function Home() {

  const mySkills = [
    /* Languages */
    { skills: "C / C++", icon: <SiCplusplus /> },
    { skills: "Java", icon: <SiJava /> },
    { skills: "Python", icon: <SiPython /> },
    { skills: "JavaScript", icon: <SiJavascript /> },
    { skills: "SQL", icon: <SiMysql /> },

    /* Technologies & Tools */
    { skills: "HTML", icon: <SiHtml5 /> },
    { skills: "CSS", icon: <SiCss3 /> },
    { skills: "React.js", icon: <SiReact /> },
    { skills: "Next.js", icon: <SiNextdotjs /> },
    { skills: "Node.js", icon: <SiNodedotjs /> },
    { skills: "Express.js", icon: <SiExpress /> },
    { skills: "MongoDB", icon: <SiMongodb /> },
    { skills: "Mongoose", icon: <SiMongoose /> },
    { skills: "Tailwind CSS", icon: <SiTailwindcss /> },
    { skills: "Bootstrap", icon: <SiBootstrap /> },
    { skills: "NextAuth.js", icon: <SiJsonwebtokens /> },
    { skills: "REST APIs", icon: <SiInsomnia /> },
    { skills: "EJS", icon: <SiPug /> },
    { skills: "Git / GitHub", icon: <SiGit /> },
    { skills: "Vercel", icon: <SiVercel /> },
    { skills: "Postman", icon: <SiPostman /> },
    { skills: "Figma", icon: <SiFigma /> }
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


            <div>
              <div className="card bg-red-500 w-36 h-12 grid grid-cols-6">
                sdfsdf
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
