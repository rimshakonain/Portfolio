// "use client";
// import { useEffect, useState } from "react";

// const TypeWriter = ({ text, speed = 80 }) => {
//     const [displayed, setDisplayed] = useState("");

//     useEffect(() => {
//         let i = 0;
//         setDisplayed("");

//         const interval = setInterval(() => {
//             setDisplayed(text.slice(0, i + 1));
//             i++;
//             if (i === text.length) {
//                 setTimeout(() => {
//                     setDisplayed("");
//                     i=0;
//                 }, 1000);
//             }
//         }, speed);

//         return () => clearInterval(interval);
//     }, [text, speed]);

//     return <span>
//         {displayed}
//         <span className="animate-pulse">|</span>
//         </span>;
// };

// export default TypeWriter;

"use client";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

const Typewriter = () => {
    const el = useRef(null);
    const typedInstance = useRef(null); // Ref to store the instance

    useEffect(() => {
        // Prevent double initialization in Next.js Strict Mode
        if (typedInstance.current) {
            return;
        }

        typedInstance.current = new Typed(el.current, {
            strings: [
                "Full-Stack MERN &amp; Next.js Developer",
                "Software Engineer",
                "DSA Practitioner",
                "Backend Engineer",
            ],

            typeSpeed: 20,
            backSpeed: 15,
            backDelay: 1500,
            loop: true,
            contentType: 'html', // Safely handles the '&' character
            showCursor: true,
            cursorChar: "|",
            // autoInsertCss: false,
        });

        // Proper cleanup on unmount
        return () => {
            if (typedInstance.current) {
                typedInstance.current.destroy();
                typedInstance.current = null;
            }
        };
    }, []);

    return (
        <h2 className="text-3xl pt-4 font-medium min-h-[45px]">
            {/* The span MUST be empty; do not put text inside it */}
            I am a <span ref={el}></span>
        </h2>
    );
};

export default Typewriter;
