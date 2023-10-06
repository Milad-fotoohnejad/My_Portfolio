"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGithub,
  FaJs,
  FaGitlab,
  FaCss3,
} from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

export default function CmProject() {
  const [currentImg, setCurrentImg] = useState(0);
  const imgList = [
    "/cm1.png",
    "/cm2.png",
    "/cm3.png",
    "/cm4.png",
    "/cm5.png",
    "/cm6.png",
    "/cm7.png",
    "/cm8.png",
    "/cm9.png",
    "/cm10.png",
    "/cm11.png",
  ];

  const nextSlide = () => {
    setCurrentImg(currentImg === imgList.length - 1 ? 0 : currentImg + 1);
  };

  const prevSlide = () => {
    setCurrentImg(currentImg === 0 ? imgList.length - 1 : currentImg - 1);
  };
  return (
    <>
      <div className="op-back rounded-md p-5">
        <div className="text-white">
          <h1 className="font-mono text-4xl mb-6">Classic Mafia Game</h1>

          <section className="mb-5">
            <div className="relative h-[400px] md:h-[500px]">
              {imgList.map((img, index) => (
                <div
                  key={index}
                  className={
                    index === currentImg
                      ? "opacity-100 duration-700 transition-opacity"
                      : "opacity-0 duration-700 transition-opacity"
                  }
                >
                  <Image
                    src={img}
                    alt="Project image"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              ))}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2 mt-4">
                {imgList.map((_, index) => (
                  <div
                    key={index}
                    className={`w-3 h-3 mb-3 rounded-full ${
                      index === currentImg ? "bg-green-400" : "bg-gray-400"
                    }`}
                  ></div>
                ))}
              </div>
            </div>
            <div className="flex justify-center space-x-2 m-3">
              <button
                className="web p-2 rounded-full bg-green-400 text-gray-800"
                onClick={prevSlide}
              >
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
              <button
                className="web p-2 rounded-full bg-green-400 text-gray-800"
                onClick={nextSlide}
              >
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </div>
          </section>

          <section className="op-back rounded-md p-3">
            <h2 className="font-mono text-2xl mb-4">Introduction</h2>
            <p className="mb-6 text-lg">
              In the Mafia game website, Lord, who is the narrator of the
              instructions of the game, is going to be played online. The
              purpose of the website is to let people to skip the role of the
              Lord in the game, and everybody can play. The website will act as
              the Lord role, give the instruction, distribute the roles randomly
              to people, and take their decisions on the game flow.
            </p>
            <p className="mb-6 text-lg">
              Associated with Vancouver Island University. I have developed a
              web application for the popular social deduction game, Classic
              Mafia for my capstone project. This real-time multiplayer game
              provides an engaging gameplay experience, offering players the
              opportunity to interact in real-time to reveal the hidden Mafia
              members among them.
            </p>
            <h2 className="font-mono text-2xl mb-4">Tech Stack</h2>
            <p className="mb-6 text-lg">
              Technologies used for this project includes React.js for this
              website and typically using JavaScript for both the front-end and
              back-end development. On the front-end, React.js would be used to
              build the user interface and handle the user interactions. For the
              front-end UI design I used HTML5, CSS3 and Tailwind. On the
              back-end, Node.js, which is a JavaScript runtime built on Chrome&apos;s
              V8 JavaScript engine, could be used as the back-end framework. For
              the database, Firebase, which is a NoSQL database could be used to
              store the game information and user information. To handle the
              communication between the front-end and back-end, a library like
              Axios could be used to make HTTP requests to the back-end API.
              Additionally, libraries like express could be used to handle the
              state management and routing respectively. This stack is commonly
              referred to as FERN stack (FireBase, Express.js, React.js,
              Node.js).
            </p>
            <section>
              <div className="flex justify-center text-green-400 space-x-4">
                <FaJs className="text-5xl" />
                <FaReact className="text-5xl" />
                <FaNodeJs className="text-5xl" />
                <a
                  href="https://github.com/Milad-fotoohnejad/ClassicMafia"
                  className="text-white animate-blink"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="text-5xl" />
                </a>
                <FaDatabase className="text-5xl" />
                <FaCss3 className="text-5xl" />
                <FaGitlab className="text-5xl" />
              </div>
            </section>
          </section>
        </div>
      </div>
    </>
  );
}
