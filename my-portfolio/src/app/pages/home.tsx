import Image from "next/legacy/image";
import React from "react";
import { Introduction } from "../components/intro";
import { Education } from "../components/education";
import { Skills } from "../components/skills";
import { Experiences } from "../components/experiences";

export default function HomePage() {
  return (
      <div>
        <main>
          {/* <Image
            src="/back.jpg"
            className="Image"
            layout="fill"
            alt="this is my image"
          />
          ; */}
          <Introduction />
          <Education />
          <Skills />
          <Experiences />
        </main>
      </div>
  );
}
