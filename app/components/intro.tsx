"use client";
import React from "react";
import Image from "next/image";
// Optional: keep your Typewriter for the first line
import Typewriter from "./typewriter";
// Optional: subtle motion (install: npm i framer-motion)
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaJs,
  FaCss3,
  FaHtml5,
  FaDocker,
  FaWordpress,
  FaGithub,
} from "react-icons/fa";

const HeroBadge: React.FC<{ label: string; value: string }> = ({
  label,
  value,
}) => (
  <div className="px-4 py-2 rounded-xl bg-white/5 ring-1 ring-white/10">
    <p className="text-xs text-gray-300">{label}</p>
    <p className="text-lg font-semibold text-white">{value}</p>
  </div>
);

const TechIcon: React.FC<{ children: React.ReactNode; title: string }> = ({
  children,
  title,
}) => (
  <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 ring-1 ring-white/10 text-gray-100">
    {children}
    <span className="text-sm">{title}</span>
  </div>
);

const Introduction: React.FC = () => {
  return (
    <section
      className="
        relative overflow-hidden rounded-lg
        bg-gradient-to-br op-back mb-1
      "
    >
      <div className="pointer-events-none absolute -top-32 -left-32 h-80 w-80 rounded-full bg-green-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-emerald-400/10 blur-3xl" />

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 py-12 md:grid-cols-2 md:gap-12 md:py-16">
        {/* Left: headline + copy + CTAs */}
        <div className="order-2 md:order-1">
          {/* Optional typewriter line */}
          <div className="w-full">
            <Typewriter
              text="Hi, I'm Milad."
              trigger={true}
              className="text-4xl md:text-6xl font-bold tracking-tight text-emerald-400 font-mono text-left"
            />
          </div>

          <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-white">
            Web & Mobile Developer focused on shipping performant, scalable
            products.
          </h2>

          <p className="mt-4 text-gray-300 leading-relaxed">
            I design and build responsive applications end‑to‑end—frontend,
            backend, and data— with an emphasis on clean architecture,
            accessibility, and maintainability. I partner with teams to turn
            ambiguous ideas into shipped, user‑centric experiences.
          </p>

          {/* KPI / credibility bar */}
          <div className="mt-6 grid grid-cols-3 gap-3">
            <HeroBadge label="Projects Delivered" value="5+" />
            <HeroBadge label="Stack Coverage" value="Full‑Stack" />
            <HeroBadge label="Based In" value="Vancouver, BC" />
          </div>

          {/* CTAs */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <div>
              <button
                onClick={() => {
                  document.getElementById("projects")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                className="inline-flex items-center justify-center rounded-xl bg-emerald-400 px-5 py-3 font-semibold text-slate-900 hover:bg-emerald-300 transition"
              >
                View Selected Work
              </button>
            </div>

            <a
              href="mailto:milad.fotoohnejad@gmail.com"
              className="inline-flex items-center justify-center rounded-xl bg-white/10 px-5 py-3 font-semibold text-white ring-1 ring-white/15 hover:bg-white/15 transition"
            >
              Let’s Collaborate
            </a>
          </div>

          {/* Tech row (compact, professional) */}
          <div className="mt-8 flex flex-wrap gap-2">
            <TechIcon title="React">
              <FaReact />
            </TechIcon>
            <TechIcon title="Node.js">
              <FaNodeJs />
            </TechIcon>
            <TechIcon title="TypeScript/JS">
              <FaJs />
            </TechIcon>
            <TechIcon title="DB / SQL/NoSQL">
              <FaDatabase />
            </TechIcon>
            <TechIcon title="HTML5">
              <FaHtml5 />
            </TechIcon>
            <TechIcon title="CSS3/Tailwind">
              <FaCss3 />
            </TechIcon>
            <TechIcon title="Docker">
              <FaDocker />
            </TechIcon>
            <TechIcon title="WordPress">
              <FaWordpress />
            </TechIcon>
            <TechIcon title="GitHub">
              <FaGithub />
            </TechIcon>
          </div>
        </div>

        {/* Right: portrait / device mock / brand visual */}
        <div className="order-1 md:order-2">
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="
      relative mx-auto w-64 md:w-80 h-[540px]
      rounded-3xl bg-white/5 ring-1 ring-white/10
      overflow-hidden shadow-2xl shadow-emerald-900/30
    "
          >
            <Image
              src="/me.png"
              alt="Milad Fotoohnejad"
              fill
              className="object-cover object-top rounded-lg"
              priority
            />

            {/* Decorative ring */}
            <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/10" />
          </motion.div>

          {/* Optional caption */}
          <p className="mt-4 text-center text-sm text-gray-200">
            Building reliable experiences with modern web stacks, delivered on
            time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
