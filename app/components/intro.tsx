'use client';

import React from "react";
import Image from "next/image";
import lottie from "lottie-web";


export const Introduction = () => {
  const container = React.useRef<HTMLDivElement>(null);
  let animation: any;

  React.useEffect(() => {
    animation = lottie.loadAnimation({
      container: container.current as HTMLDivElement,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../public/animation.json"),
    });

    // Cleanup function
    return () => {
      animation.destroy();
    };
  }, []);


  return (
    <div className="intro op-back p-4 mb-5 text-white text-justify rounded-md font-sans">
      <div>
        <h1 className="text-6xl font-bold m-5 text-green-400">Hi, I'm Milad</h1>
        <p className="text-xl p1">
          <span className="text-2xl text-green-300">Who am I?</span>
          <br />
          Welcome to my portfolio! I'm a Web and Mobile Application Developer
          with a deep-rooted love for crafting exceptional digital experiences.
          My mission is to create innovative and user-centric solutions that
          make a positive impact on people's lives.
        </p>
      </div>
      <div className="">
        <Image
          src="/profile2-rmbg2.png"
          width={256}
          height={256}
          alt="Nothing"
          className="rounded-full"
        />
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
          applications that seamlessly integrate functionality, aesthetics, and
          usability. 
        </p>
      </div>
    </div>
  );
};

export default Introduction;
