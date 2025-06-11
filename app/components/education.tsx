import React from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import Typewriter from "./typewriter";

export const Education = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const skills = [
    "HTML",
    "JavaScript",
    "ReactJS",
    "NextJS",
    "CSS",
    "TailwinCSS",
    "Bootstrap",
    "ExpressJS",
    "NodeJS",
    "WebSockets",
    "PHP",
    "SQL",
    "NoSQL",
    "Firebase",
    "DevOps",
    "WordPress",
    "Git",
    "GitHub",
    "GitLab",
    "Docker",
    "CI/CD",
    "unit testing",
    "end-to-end testing",
  ];

  return (
    <div className="mobile-v flex flex-col md:flex-row items-center justify-between op-back p-5 rounded-md font-sans">
      <div className="w-full md:w-1/2 m-2">
        <div ref={ref} className="w-full">
          <Typewriter
            text="What I studied..."
            trigger={inView}
            className="text-6xl font-bold m-5 text-green-400 w-full text-center font-mono"
          />
        </div>
        <div className="w-full op-back p-5 rounded-lg shadow-lg my-5">
          <div className="flex items-center space-x-5">
            <Image
              src="/viu_logo.png"
              width={52}
              height={52}
              alt="Nothing"
              className="rounded-full"
            />
            <div className="block pl-2 font-semibold text-xl self-start text-gray-200">
              <h2 className="leading-relaxed text-green-400">
                ITAS - Web And Mobile Application Development
              </h2>
              <p className="text-sm text-gray-100 leading-none mt-1">
                Vancouver Island University (VIU), BC
              </p>
            </div>
          </div>
          <div className="mt-5">
            <p className="text-gray-200">
              Here I studied a two year full-time Diploma program at VIU.
            </p>
          </div>
        </div>

        <div className="w-full op-back p-5 rounded-lg shadow-lg my-5 text-white">
          <div className="flex items-center space-x-5">
            <Image
              src="/IAU_logo.png"
              width={52}
              height={52}
              alt="Nothing"
              className="rounded-full"
            />
            <div className="block pl-2 font-semibold text-xl self-start text-gray-200">
              <h2 className="leading-relaxed text-green-400">
                Industrial Engineering - Industrial Safety
              </h2>
              <p className="text-sm text-gray-100 leading-none mt-1">
                Islamic Azad University, Shiraz
              </p>
            </div>
          </div>
          <div className="mt-5">
            <p className="text-gray-200">
              Here I studied a four year part-time Diploma program at IAU.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 m-2">
      <div ref={ref} className="w-full">
          <Typewriter
            text="What my skills are..."
            trigger={inView}
            className="text-6xl font-bold m-5 text-green-400 w-full text-center font-mono"
          />
        </div>
        <div className="flex flex-wrap justify-around">
          {skills.map((skill, index) => (
            <button
              key={index}
              className="inline-block mt-5 m-2 op-back px-5 py-2 rounded-lg shadow-lg text-white transition-colors duration-200 ease-in-out hover:bg-green-400"
            >
              {skill}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
