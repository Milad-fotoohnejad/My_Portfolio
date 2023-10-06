"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  FaGithub,
  FaJs,
  FaCss3,
  FaBootstrap,
  FaHtml5,
  FaCamera,
} from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

export default function VbProject() {
  const [currentImg, setCurrentImg] = useState(0);
  const imgList = [
    "/wc-1.png",
    "/wc-2.png",
    "/wc-3.png",
    "/wc-4.png",
    "/wc-5.png",
    "/wc-6.png",
    "/wc-7.png",
    "/wc-8.png",
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
                className="p-2 rounded-full bg-green-400 text-gray-800"
                onClick={prevSlide}
              >
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
              <button
                className="p-2 rounded-full bg-green-400 text-gray-800"
                onClick={nextSlide}
              >
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </div>
          </section>

          <section className="op-back rounded-md p-3">
            <button>
            <a href="https://milad-fotoohnejad.github.io/WhichCam_Web/index.html" className="text-green-400"> WhichCam</a>
            </button>
            <h2 className="font-mono text-2xl mb-4">Introduction</h2>
            <p className="mb-6 text-lg">
              Introducing WhichCam, the definitive platform for camera
              enthusiasts and novices alike looking to make an informed camera
              purchase decision. With the digital world teeming with countless
              camera options, WhichCam endeavors to simplify the selection
              process by offering comprehensive comparisons of three distinct
              camera types. Beyond mere specifications, the platform enhances
              the user&apos;s visual journey by displaying vivid images of various
              camera models. Furthermore, those ready to make a purchase can
              utilize the embedded links, guiding them either to online
              retailers or physical store locations through integrated maps. The
              end-to-end user experience is seamlessly anchored on the project&apos;s
              website:
            </p>
            <h2 className="font-mono text-2xl mb-4">Tech Stack</h2>
            <p className="mb-6 text-lg">
              The core of WhichCam&apos;s responsive design is sculpted using
              Bootstrap, a potent framework that fosters rapid, mobile-first
              front-end web development. The website&apos;s navigation bar, though
              inspired by a Bootstrap template, underwent extensive
              customization to integrate features like dropdown product lists
              and brand-aligned logos. A captivating carousel adorns the
              homepage, enriched with buttons, image tags, content captions, and
              meticulous CSS stylings that resonate with the overarching dark
              theme. Each camera brand is represented with specific color
              schemes, harmoniously integrating white, yellow, and red hues
              throughout the design. Additionally, the website leverages
              JavaScript for various functionalities, including displaying maps
              with custom markers, dynamically altering the background color,
              and ensuring form validation. The extensive customization,
              combined with future aspirations to include more content and
              innovative Bootstrap classes, signifies the passion and dedication
              poured into this project.
            </p>
            <section>
              <div className="flex justify-center text-green-400 space-x-4">
                <FaBootstrap className="text-5xl" />
                <FaJs className="text-5xl" />
                <a
                  href="https://github.com/Milad-fotoohnejad/VIU_BakeryProject"
                  className="text-white animate-blink"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="text-5xl" />
                </a>
                <FaHtml5 className="text-5xl" />
                <FaCss3 className="text-5xl" />
              </div>
            </section>
          </section>
        </div>
      </div>
    </>
  );
}
