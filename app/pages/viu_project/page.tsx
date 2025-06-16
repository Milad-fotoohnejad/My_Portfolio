"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  FaDatabase,
  FaGithub,
  FaFileExcel,
  FaAndroid,
  FaApple,
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
      <div className="op-back content-bottom rounded-md p-5">
        <div className="text-white">
          <h1 className="font-mono text-4xl mb-6">
            VIU Culinary Cross-platform Application
          </h1>

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
              The VIU Culinary project, which I undertook as my practicum,
              showcases a cutting-edge culinary web and mobile application
              developed for the VIU Culinary Department based in Nanaimo, BC.
              Born out of the need for an efficient and dynamic recipe
              management system, the project not only streamlines the curation
              and access of recipes but also offers an interactive platform
              tailored to the needs of modern culinary professionals and
              enthusiasts alike.
            </p>
            <h2 className="font-mono text-2xl mb-4">Tech Stack</h2>
            <p className="mb-6 text-lg">
              The backbone of this innovative project lies in its robust tech
              stack. The application is built using Flutter, ensuring a seamless
              cross-platform experience for both web and mobile users on Android
              and iOS. The data architecture is anchored by the Firebase
              Database, which not only stores the dynamic recipe booklet but
              also houses images of the products, laying the groundwork for a
              future gallery that will chronicle the process of making the
              recipes. <br />A noteworthy feature is the Firebase
              Authentication, tailored to identify and differentiate user roles
              between instructors and students, ensuring that each group
              accesses content pertinent to their requirements. Moreover, a
              custom parser was developed in Flutter to effortlessly convert
              traditional Excel recipe spreadsheets into a versatile JSON array
              format, streamlining the recipe input and management process.
            </p>
            <section>
              <div className="flex justify-center text-green-400 space-x-4">
                <FaApple className="text-5xl" />
                <FaFileExcel className="text-5xl" />
                <a
                  href="https://github.com/Milad-fotoohnejad/VIU_BakeryProject"
                  className="text-white animate-blink"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="text-5xl" />
                </a>
                <FaDatabase className="text-5xl" />
                <FaAndroid className="text-5xl" />
              </div>
            </section>
          </section>
        </div>
      </div>
    </>
  );
}
