"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  FaWordpress,
  FaPhp,
  FaDatabase,
  FaCss3,
  FaJs,
  FaGithub,
} from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function WcProject() {
  const [currentImg, setCurrentImg] = useState(0);

  // Add/rename screenshots as needed (ensure files exist in /public)
  const imgList = [
    "/ww1.png",
    "/ww2.png",
    "/ww3.png",
    "/ww4.png",
    "/ww5.png",
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
          <h1 className="font-mono text-4xl mb-6">Wedding Ceremony Website</h1>

          {/* Carousel */}
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
                    alt="Wedding project image"
                    fill
                    style={{ objectFit: "contain" }}
                    // If using next <13, swap the 2 lines above with:
                    // layout="fill"
                    // objectFit="contain"
                  />
                </div>
              ))}

              {/* Dots */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex space-x-2 mt-4">
                {imgList.map((_, index) => (
                  <div
                    key={index}
                    className={`w-3 h-3 mb-3 rounded-full ${
                      index === currentImg ? "bg-green-400" : "bg-gray-400"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Arrows */}
            <div className="flex justify-center space-x-2 m-3">
              <button
                className="web p-2 rounded-full bg-green-400 text-gray-800"
                onClick={prevSlide}
                aria-label="Previous"
              >
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
              <button
                className="web p-2 rounded-full bg-green-400 text-gray-800"
                onClick={nextSlide}
                aria-label="Next"
              >
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </div>
          </section>

          {/* Content */}
          <section className="op-back rounded-md p-3">
            <div className="flex items-start justify-between flex-wrap gap-3">
              <h2 className="font-mono text-2xl mb-4">Introduction</h2>
              <a
                href="https://hamsarfor.life/"
                target="_blank"
                rel="noopener noreferrer"
                className="web px-4 py-2 rounded-md bg-green-400 text-gray-900 font-semibold hover:opacity-90 animate-blink"
              >
                View Live Website
              </a>
            </div>

            <p className="mb-6 text-lg">
              I designed and developed a bespoke wedding website that tells the
              couple’s story through an elegant, scrollable timeline and clean,
              modern visuals. Guests can explore key moments, access event
              details, and RSVP seamlessly—optimizing both aesthetics and user
              experience across mobile and desktop.
            </p>

            <p className="mb-6 text-lg">
              The standout feature is a{" "}
              <span className="text-green-300">database‑backed RSVP</span> that
              records responses in real time for streamlined headcount
              management. The front end is crafted with{" "}
              <span className="text-green-300">Elementor</span> and custom CSS
              for a polished design system, while custom PHP hooks/forms handle
              submission logic and validation. Content is fully editable by the
              couple through WordPress, enabling quick updates without developer
              intervention.
            </p>

            <h2 className="font-mono text-2xl mb-4">Tech Stack</h2>
            <p className="mb-6 text-lg">
              <span className="text-green-300">WordPress</span> +{" "}
              <span className="text-green-300">Elementor</span> for rapid,
              flexible page building and componentized sections;{" "}
              <span className="text-green-300">PHP</span> for custom form
              handlers and RSVP logic; <span className="text-green-300">MySQL</span> for
              guest data; and <span className="text-green-300">CSS3</span> /
              lightweight JS for animations, theming, and performance tuning.
              Deployed on a standard LAMP stack with caching enabled to maintain
              fast first contentful paint.
            </p>

            {/* Icons row */}
            <section>
              <div className="flex justify-center text-green-400 space-x-4">
                <FaWordpress className="text-5xl" />
                <FaPhp className="text-5xl" />
                <FaDatabase className="text-5xl" />
                <FaCss3 className="text-5xl" />
                <FaJs className="text-5xl" />
                {/* If you have a public repo later, keep this pattern */}
                {/* <a
                  href="https://github.com/your-repo"
                  className="text-white animate-blink"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="text-5xl" />
                </a> */}
              </div>
            </section>
          </section>
        </div>
      </div>
    </>
  );
}
