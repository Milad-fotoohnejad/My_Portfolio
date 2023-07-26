import React from "react";
import Image from "next/image";

export const Experiences = () => {
  const experiences = [
    {
      title: "Culinary Web/Mobile Application",
      company: "VIU Culinary Department",
      duration: "April 2023 – June 2023",
      location: "Nanaimo, BC",
      status: "Currently in progress",
      duties: [
        "Designed a dynamic recipe booklet built with Flutter, Firebase Database and Authentication",
        "Developed a parser in Flutter, converting Excel recipe spreadsheets into JSON array format",
        "Created a cross-platform web and mobile application(Android and iOS)",
      ],
    },
    {
      title: "Hair Brain Web/Mobile Application",
      company: "Freelance",
      duration: "2023",
      status: "Currently in progress",
      duties: [
        "Developing a web and mobile application for a hair salon that will show user accounts, appointments, and other features such as storing images and videos of customers",
        "Technologies used: React, React Native, Node.js, Express, MongoDB, Firebase, and AWS",
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
        "Contributed to a global youth-led organization dedicated to providing young people in six schools (120 students in total) with leadership development opportunities through international exchange and volunteer programs.",
        "Demonstrated teamwork, critical thinking, and adaptability skills by successfully collaborating with a diverse group of individuals and successfully adapting to various challenging situations",
      ],
    },
  ];

  return (
    <div className="flex flex-col items-center op-back p-5 rounded-md">
      <h1 className="text-6xl font-bold m-5 text-green-400 w-full text-center font-mono">I experienced...</h1>
      <div className="grid md:grid-cols-2 gap-10">
        {experiences.map((exp, index) => (
          <div key={index} className="w-full md:w-full op-back p-5 rounded-lg shadow-lg m-5 mx-auto">
            <div className="flex items-center space-x-5">
              <Image src="/role-model.png"
                width={72}
                height={72}
                alt="Nothing"
                className="rounded-full"/>
              <div className="block pl-2 font-semibold text-xl self-start text-gray-200">
                <h2 className="leading-relaxed text-green-400">{exp.title}</h2>
                <p className="text-sm text-gray-100 leading-none mt-1">{exp.company}</p>
                <p className="text-sm text-gray-100 leading-none mt-1">{exp.duration}</p>
                <p className="text-sm text-gray-100 leading-none mt-1">{exp.location}</p>
                <p className="text-sm text-green-400 leading-none mt-1">{exp.status}</p>
              </div>
            </div>
            <div className="mt-5">
              {exp.duties.map((duty, dutyIndex) => (
                <p key={dutyIndex} className="text-gray-200">• {duty}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
      <p className="text-gray-300 text-center">Beautiful logo used here is made by: <a href="https://www.flaticon.com/free-icons/role-model" title="role model icons">Role model icons created by Flat Icons - Flaticon</a></p>
    </div>
  );

};

export default Experiences;
