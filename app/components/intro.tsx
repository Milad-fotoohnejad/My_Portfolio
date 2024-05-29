"use client";
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
import React from "react";
import Image from "next/image";
import lottie from "lottie-web";

export const Introduction = () => {
  const container = React.useRef<HTMLDivElement>(null);
  const devContainer = React.useRef<HTMLDivElement>(null);
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

  React.useEffect(() => {
    developer = lottie.loadAnimation({
      container: devContainer.current as HTMLDivElement,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../public/developer.json"),
    });

    return () => {
      developer.destroy();
    };
  }, []);

  return (
    <>
      <div className="intro op-back p-4 text-white text-justify rounded-md font-sans">
        <div className="mt-5 mx-5">
          <h1 className="text-6xl font-bold m-5 text-green-400 font-mono">
            Hi, I&apos;m Milad
          </h1>
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
        <div>
          <div className="lottie" ref={devContainer}></div>
        </div>
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
