import React from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import Typewriter from "./typewriter";

export const Experiences = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const experiences = [
    // {
    //   title: "Co-Founder - Lead Designer/Developer",
    //   company: "The DevNest Studio",
    //   duration: "October 2024 – Present",
    //   location: "Vancouver, BC",
    //   status: "Completed",
    //   duties: [
    //     "Designed and developed a full-scale digital solutions platform offering custom web development, as a part of a team",
    //     "Engineered and deployed responsive web applications with modern frameworks, ensuring cross-platform compatibility",
    //     "Managed end-to-end software development life-cycles, including testing, quality assurance, deployment, and ongoing maintenance",
    //   ],
    // },
    {
      title: "Wedding Ceremony/Website",
      company: "Freelance Project",
      duration: "February 2025 – April 2025",
      location: "Vancouver, BC",
      status: "Completed",
      duties: [
        "Created a website for clients that presents a timeline of their patrnership story",
        "Implemented a RSVP page connected to a database for real-time guest's list updates",
        "Designed a user-friendly interface with a focus on aesthetics and functionality with Elementor (WordPress)",
      ],
    },
    {
      title: "Internet Assessor",
      company: "Telus Digital",
      duration: "November 2023 – Present",
      location: "Vancouver, BC",
      status: "Completed",
      duties: [
        "Created a website for clients that presents a timeline of their patrnership story",
        "Implemented a RSVP page connected to a database for real-time guest's list updates",
        "Designed a user-friendly interface with a focus on aesthetics and functionality with Elementor (WordPress)",
      ],
    },
    {
      title: "Culinary Web/Mobile Application",
      company: "VIU Culinary Department",
      duration: "April 2023 – June 2023",
      location: "Nanaimo, BC",
      status: "Completed",
      duties: [
        "Designed a dynamic recipe booklet built with Flutter, Firebase Database and Authentication",
        "Developed a parser in Flutter, converting Excel recipe spreadsheets into JSON array format",
        "Created a cross-platform web and mobile application(Android and iOS)",
      ],
    },
    {
      title: "Welding Inspection Intern",
      company: "Fateh Sanat Co.",
      duration: "2016 – 2017",
      location: "Shiraz, Iran",
      status: "Completed",
      duties: [
        "Inspected weld joints on piping and structural components according to AP 1104 and AWS D1.1 code requirements",
        "Conducted visual and dimensional inspections; maintained inspection logs and non-conformance reports",
        "Collaborated with fabrication and QA teams to support safe, quality-driven work practices",
      ],
    },
    {
      title: "Quality Control Supervisor",
      company: "Neshiman Co.",
      duration: "2015 – 2016",
      location: "Shiraz, Iran",
      status: "Completed",
      duties: [
        "Demonstrated proficiency in monitoring processes, executing quality control measures, and making informed decisions in a furniture production setting",
        "Training and supervising quality control personnel to ensure proper execution of quality control processes",
        "Collaborating with cross-functional teams including production and suppliers to improve product quality and resolve quality issues",
      ],
    },
    {
      title: "Volunteer: KidSpeak Project",
      company: "Aiesec international",
      duration: "2016",
      location: "Katowice, Poland",
      status: "Completed",
      duties: [
        "Contributed to a global youth-led organization dedicated to providing young people in six schools (120 students in total) with leadership development opportunities through international exchange and volunteer programs",
        "Demonstrated teamwork, critical thinking, and adaptability skills by successfully collaborating with a diverse group of individuals and successfully adapting to various challenging situations",
      ],
    },
  ];

  return (
    <div className="mobile-v mt-1 flex flex-col items-center content-bottom op-back p-5 rounded-md">
      <div ref={ref} className="w-full">
        <Typewriter
          text="What I experienced..."
          trigger={inView}
          className="text-5xl font-bold m-5 text-green-400 w-full text-center font-mono"
        />
      </div>
      <div className="grid md:grid-cols-2 gap-10">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="w-full md:w-full op-back p-5 rounded-lg shadow-lg m-5 mx-auto"
          >
            <div className="flex items-center space-x-5">
              <Image
                src="/role-model.png"
                width={72}
                height={72}
                alt="Nothing"
                className="rounded-full"
              />
              <div className="block pl-2 font-semibold text-xl self-start text-gray-200">
                <h2 className="leading-relaxed text-green-400">{exp.title}</h2>
                <p className="text-sm text-gray-100 leading-none mt-1">
                  {exp.company}
                </p>
                <p className="text-sm text-gray-100 leading-none mt-1">
                  {exp.duration}
                </p>
                <p className="text-sm text-gray-100 leading-none mt-1">
                  {exp.location}
                </p>
                <p className="text-sm text-green-400 leading-none mt-1">
                  {exp.status}
                </p>
              </div>
            </div>
            <div className="mt-5">
              {exp.duties.map((duty, dutyIndex) => (
                <p key={dutyIndex} className="text-gray-200">
                  • {duty}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
      {/* <div className="text-center text-md text-gray-300">
        <p>
          LottieFiles is by Design Barn Inc. Copyright © 2023 Design Barn Inc.
          All rights reserved.
        </p>
        <p>
          Beautiful logo used here is made by:{" "}
          <a
            href="https://www.flaticon.com/free-icons/role-model"
            title="role model icons"
            target="_blank"
            rel="noopener noreferrer"
          >
            Role model icons created by Flat Icons - Flaticon
          <br />
            copyright © Fonticons, Inc. All rights reserved
          </a>
        </p>
      </div> */}
    </div>
  );
};

export default Experiences;
