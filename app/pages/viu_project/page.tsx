"use client";
import React, { useState } from "react";
import Image from "next/image";
import Head from "next/head";
import {
  FaJava,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGithub,
} from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

export default function VbProject() {
  const [currentImg, setCurrentImg] = useState(0);
  const imgList = [
    "/bv-1.png",
    "/bv-2.png",
    "/bv-3.png",
    "/bv-4.png",
    "/bv-5.png",
    "/bv-6.png",
    "/bv-7.png",
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

          <section className="op-back rounded-md p-3">
            <h2 className="font-mono text-2xl mb-4">Introduction</h2>
            <p className="mb-6">Description about the project goes here.</p>
            <p className="mb-6">
              Associated with Vancouver Island University. I have developed a
              web application for the popular social deduction game, Classic
              Mafia for my capstone project. This real-time multiplayer game
              provides an engaging gameplay experience, offering players the
              opportunity to interact in real-time to reveal the hidden Mafia
              members among them.
            </p>
            <p className="mb-6">
              My tech stack for this project comprises Firebase, ExpressJS,
              ReactJS, and NodeJS, a potent combination for creating a
              real-time, highly interactive game. I&apos;m utilizing JavaScript
              (ReactJS) as the primary programming language to ensure optimal
              performance and wide compatibility.
            </p>
          </section>

          <section>
            <h2 className="font-mono text-2xl mb-4">Project Pictures</h2>
            <div className="relative h-96 md:h-128">
              <button
                className="absolute z-10 left-0 mt-48 md:mt-64 p-2 rounded-full bg-gray-600 text-white"
                onClick={prevSlide}
              >
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
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
                    alt="Game image"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              ))}
              <button
                className="absolute z-10 right-0 mt-48 md:mt-64 p-2 rounded-full bg-gray-600 text-white"
                onClick={nextSlide}
              >
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
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
          </section>

          <section>
            <h2 className="font-mono text-2xl mb-4">Tech Stack</h2>
            <div className="flex space-x-4">
              <FaJava className="text-3xl" />
              <FaReact className="text-3xl" />
              <FaNodeJs className="text-3xl" />
              <FaDatabase className="text-3xl" />
            </div>
          </section>

          <section>
            <h2 className="font-mono text-2xl mb-4">GitHub Repository</h2>
            <a
              href="https://github.com/Milad-fotoohnejad/ClassicMafia"
              className="text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-3xl" />
              <span className="ml-2">View on GitHub</span>
            </a>
          </section>
        </div>
      </div>
    </>
  );
}
