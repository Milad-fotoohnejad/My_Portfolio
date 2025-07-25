"use client";
import { useInView } from "react-intersection-observer";
import Typewriter from "./typewriter";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGithub,
  FaJs,
  FaGitlab,
  FaCss3,
  FaHtml5,
  FaJava,
  FaBootstrap,
  FaPython,
  FaPhp,
  FaGit,
  FaWordpress,
  FaDocker,
} from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import lottie from "lottie-web";

export const Introduction = () => {
  const container = React.useRef<HTMLDivElement>(null);
  const devContainer = React.useRef<HTMLDivElement>(null);
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  let animation: any;
  let developer: any;

  React.useEffect(() => {
    animation = lottie.loadAnimation({
      container: container.current as HTMLDivElement,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../public/animation.json"),
    });

    return () => {
      animation.destroy();
    };
  }, []);

  useEffect(() => {
    const developer = lottie.loadAnimation({
      container: devContainer.current as HTMLDivElement,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../public/developer.json"),
    });

    developer.addEventListener("DOMLoaded", () => {
      // Render the animation to the first frame and capture it as an image
      developer.goToAndStop(0, true);

      const svgElement = devContainer.current?.querySelector("svg");
      if (svgElement) {
        const svgData = new XMLSerializer().serializeToString(svgElement);
        const svgBlob = new Blob([svgData], {
          type: "image/svg+xml;charset=utf-8",
        });
        const url = URL.createObjectURL(svgBlob);

        const img = new window.Image();
        img.onload = () => {
          const canvas = document.createElement("canvas");
          canvas.width = img.width;
          canvas.height = img.height;
          const ctx = canvas.getContext("2d");
          if (ctx) {
            ctx.drawImage(img, 0, 0);
            const imageData = canvas.toDataURL("image/png");
            setImageSrc(imageData);
            URL.revokeObjectURL(url);
          }
        };
        img.src = url;
      }
    });

    return () => {
      developer.destroy();
    };
  }, []);

  return (
    <>
      <div className="intro op-back p-4 text-white text-justify rounded-md font-sans">
        <div className="mt-5 mx-5">
          <div ref={ref} className="w-full">
            <Typewriter
              text="Hi, I&apos;m Milad!"
              trigger={inView}
              className="text-6xl font-bold m-5 text-green-400 w-full text-center font-mono"
            />
          </div>
          <p className="text-xl p1">
            <span className="text-2xl text-green-300">Who am I?</span>
            <br />
            Welcome to my portfolio! I am a Web and Mobile Application Developer
            with a deep-rooted love for crafting exceptional digital
            experiences. My mission is to create innovative and user-centric
            solutions that make a positive impact on peoples lives.
          </p>
        </div>
        {/* <div className="circle-frame mt-5">
          <Image
            src="/profile.png"
            width={320}
            height={320}
            alt="Nothing"
            className="adjusted-image"
          />
        </div> */}
        <div className="lottie-image-container">
          {imageSrc ? (
            <img src={imageSrc} alt="Lottie Animation Frame" />
          ) : (
            <div ref={devContainer} style={{ display: "none" }} />
          )}
        </div>
        {/* <div>
          <div className="lottie" ref={devContainer}></div>
        </div> */}
        <div>
          <div className="lottie" ref={container}></div>
        </div>
        <div>
          <p className="text-xl p2">
            <span className="text-2xl text-green-300">What do I do?</span>
            <br />
            With a solid foundation in software development and a specialization
            in web and mobile applications, I bring a unique blend of technical
            expertise and creative problem-solving skills to every project I
            undertake. My goal is to develop robust, scalable, and intuitive
            applications that seamlessly integrate functionality, aesthetics,
            and usability.
          </p>
        </div>
      </div>
      <section>
        <div className="logos flex op-back mt-1 mb-1 justify-center rounded-md text-white">
          <FaJs className="text-5xl logo" />
          <FaReact className="text-5xl logo" />
          <FaNodeJs className="text-5xl logo" />
          <FaHtml5 className="text-5xl logo" />
          <FaCss3 className="text-5xl logo" />
          <FaBootstrap className="text-5xl logo" />
          <FaJava className="text-5xl logo" />
          <FaPython className="text-5xl logo" />
          <FaPhp className="text-5xl logo" />
          <FaDatabase className="text-5xl logo" />
          <FaGit className="text-5xl logo" />
          <FaGithub className="text-5xl logo" />
          <FaGitlab className="text-5xl logo" />
          <FaDocker className="text-5xl logo" />
          <FaWordpress className="text-5xl logo" />
        </div>
      </section>
    </>
  );
};

export default Introduction;
