"use client";
import React from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import Typewriter from "./typewriter";

export const OnGoing = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const ongoingProjects = [
    {
      title: "DevNest Studio",
      company: "DevNest Studio",
      companyLink: "https://www.thedevnest.ca",
      duration: "September 2024 – Present",
      location: "Vancouver, BC",
      status: "In Progress",
      logo: "/DevNest-logo.png", // Place logo file in public folder
      duties: [
        "Building an interactive portfolio and service showcase for a software development studio",
        "Integrating SEO, contact forms, and scalable routing for future service expansion",
        "Designed with modern UI/UX standards using React, TailwindCSS, and Next.js",
      ],
    },
    {
      title: "3DNest Custom 3D Printing",
      company: "DevNest Studio",
      companyLink: "https://www.thedevnest.ca",
      duration: "January 2025 – Present",
      location: "Vancouver, BC",
      status: "In Progress",
      logo: "/3dN.png", // Place logo file in public folder
      duties: [
        "Developing a vibrant e-commerce platform for custom 3D-printed items",
        "Created a retro-pop brand identity and product display layout using TailwindCSS",
        "Implementing shopping cart functionality and product management backend",
      ],
    },
  ];

  return (
    <div className="mobile-v mt-1 flex flex-col items-center op-back p-5 rounded-md">
      <div ref={ref} className="w-full">
        <Typewriter
          text="In-Progress Projects..."
          trigger={inView}
          className="text-5xl font-bold m-5 text-yellow-400 w-full text-center font-mono"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        {ongoingProjects.map((project, index) => (
          <div
            key={index}
            className="w-full md:w-full op-back p-5 rounded-lg shadow-lg m-5 mx-auto"
          >
            <div className="flex items-center space-x-5">
              <Image
                src={project.logo}
                width={72}
                height={72}
                alt={`${project.title} Logo`}
                className="rounded-full bg-white"
              />
              <div className="block pl-2 font-semibold text-xl self-start text-gray-200">
                <h2 className="leading-relaxed text-yellow-300">
                  {project.title}
                </h2>
                <p className="text-sm text-gray-100 leading-none mt-1">
                  <a
                    href={project.companyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-300 leading-none mt-1 underline hover:text-yellow-300"
                  >
                    {project.company}
                  </a>
                </p>
                <p className="text-sm text-gray-100 leading-none mt-1">
                  {project.duration}
                </p>
                <p className="text-sm text-gray-100 leading-none mt-1">
                  {project.location}
                </p>
                <p className="text-sm text-yellow-400 leading-none mt-1">
                  {project.status}
                </p>
              </div>
            </div>
            <div className="mt-5">
              {project.duties.map((duty, dutyIndex) => (
                <p key={dutyIndex} className="text-gray-200">
                  • {duty}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
