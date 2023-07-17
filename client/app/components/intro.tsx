'use client'

import React from "react";
import Image from "next/image";
import lottie from "lottie-web";


export const Introduction = () => {
  // render my lottie json file here
  const container = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    lottie.loadAnimation({
      container: container.current as HTMLDivElement,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../public/animation.json"),
    });
  }
  );

  return (
    <div className="intro op-back p-4 mb-5 text-white text-justify rounded-md font-sans">
      <div>
        <h1 className="text-6xl font-bold m-5 text-green-400">Hi, I'm Milad</h1>
        <p className="text-xl p1">
          <span className="text-2xl text-green-300"> Who am I?</span>
          <br />
          Welcome to my portfolio! I'm a Web and Mobile Application Developer
          with a deep-rooted love for crafting exceptional digital experiences.
          My mission is to create innovative and user-centric solutions that
          make a positive impact on people's lives.
        </p>
      </div>
      <div className="rounded">
        <Image
          src="/profile2-rmbg.png"
          width={256}
          height={256}
          alt="Nothing"
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
          usability. Over the school years, I have honed my skills in front-end
          and back-end development, leveraging my proficiency in Java, HTML,
          CSS, JavaScript, and frameworks such as React. I am also experienced
          in working with server-side technologies like Node.js, Express.js and
          databases such as MySQL and Firebase. My understanding of responsive
          design principles ensures that the applications I build provide an
          optimal user experience across different devices and platforms. What
          sets me apart is my ability to transform complex concepts into
          elegant, efficient, and user-friendly applications.
        </p>
      </div>
    </div>
  );
};

export default Introduction;
