import Image from "next/legacy/image";
import React from "react";
import { Introduction } from "../components/intro";
import { Education } from "../components/education";
import { Experiences } from "../components/experiences";
import { OnGoing } from "../components/onGoing";


export default function HomePage() {
  return (
      <div>
        <main>
          <Introduction />
          <Education />
          <OnGoing />
          <Experiences />
        </main>
      </div>
  );
}
