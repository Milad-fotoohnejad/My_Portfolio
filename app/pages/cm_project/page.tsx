'use client';
import React, { useState } from "react";
import Image from "next/image";
import { FaJava, FaReact, FaNodeJs, FaDatabase, FaGithub } from "react-icons/fa";

export default function CmProject() {
  const [currentImg, setCurrentImg] = useState(0);
  const imgList = ['/profile.jpg','/profile2-rmbg.png','/profile2-rmbg2.png']; 

  const nextSlide = () => {
    setCurrentImg(currentImg === imgList.length - 1 ? 0 : currentImg + 1);
  };

  const prevSlide = () => {
    setCurrentImg(currentImg === 0 ? imgList.length - 1 : currentImg - 1);
  };

  return (
    <div className="op-back">
      <div className="text-white">
        <h1 className="font-mono text-4xl mb-6">Classic Mafia Game</h1>

        <section>
          <h2 className="font-mono text-2xl mb-4">Introduction</h2>
          <p className="mb-6">Description about the project goes here.</p>
          <p className="mb-6">Associated with Vancouver Island University. I have developed a web application for the popular social deduction game, "Classic Mafia" for my capstone project. This real-time multiplayer game provides an engaging gameplay experience, offering players the opportunity to interact in real-time to reveal the hidden Mafia members among them.</p>
          <p className="mb-6">My tech stack for this project comprises Firebase, ExpressJS, ReactJS, and NodeJS, a potent combination for creating a real-time, highly interactive game. I'm utilizing JavaScript (ReactJS) as the primary programming language to ensure optimal performance and wide compatibility.</p>
        </section>

        <section>
          <h2 className="font-mono text-2xl mb-4">Gallery</h2>
          <div className="relative h-60 md:h-96">
            <button className="absolute z-10 left-0 mt-28 md:mt-44 p-2 rounded-full bg-gray-600 text-white" onClick={prevSlide}>
              {'<'}
            </button>
            {imgList.map((img, index) => (
              <div className={index === currentImg ? 'opacity-100 duration-700 transition-opacity' : 'opacity-0 duration-700 transition-opacity'}>
                <Image src={img} alt="Game image" layout="fill" objectFit="contain" />
              </div>
            ))}
            <button className="absolute z-10 right-0 mt-28 md:mt-44 p-2 rounded-full bg-gray-600 text-white" onClick={nextSlide}>
              {'>'}
            </button>
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
          <a href="https://github.com/Milad-fotoohnejad/ClassicMafia" className="text-blue-500" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-3xl" />
            <span className="ml-2">View on GitHub</span>
          </a>
        </section>
      </div>
    </div>
  );
}
