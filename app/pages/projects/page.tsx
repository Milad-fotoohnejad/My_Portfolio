"use client";
import React, { useContext } from "react";
import Image from "next/image";
import { RouteContext } from "../../RouteContext";

type ProjectCard = {
  title: string;
  blurb: string;
  image: string;
  href: string;
  live?: string;
  tags: string[];
};

const cards: ProjectCard[] = [
  //  DevNest Studio Project
  {
    title: "DevNest Studio",
    blurb:
      "A platform designed to showcase our creative and technical capabilities while laying the groundwork for scalable digital services.",
    image: "/DNS.png",
    href: "https://www.thedevnest.ca/",
    live: "https://www.thedevnest.ca/",
    tags: ["ReactJS", "Tailwind CSS", "ThreeJS", "MongoDB", "GitHub Actions"],
  },
  {
    title: "Portfolio Website",
    blurb:
      "This portfolio site built with Next.js, Tailwind CSS, and TypeScript. Features dynamic routing and responsive design.",
    image: "/bg_01.png", // add an image to /public
    href: "/pages/",
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
  },
  {
    title: "Classic Mafia Game",
    blurb:
      "Real-time multiplayer social deduction built with React, Node.js, Socket.io, and Firebase.",
    image: "/cm1.png", // add an image to /public
    href: "/pages/cm_project",
    tags: ["React", "NodeJS", "Socket.io", "Firebase"],
  },
  {
    title: "Wedding Website",
    blurb:
      "Story-driven wedding site with timeline and database-backed RSVP for real-time guest tracking.",
    image: "/ww1.png", // add an image to /public
    href: "/pages/wed_project",
    live: "https://hamsarfor.life/",
    tags: ["WordPress", "PHP", "MySQL", "Elementor"],
  },
  {
    title: "VIU Culinary App",
    blurb:
      "Cross-platform recipe booklet: Flutter + Firebase with spreadsheet-to-JSON parser.",
    image: "/bv-1.png", // add an image to /public
    href: "/pages/viu_project",
    tags: ["Flutter", "Firebase", "Auth"],
  },
  {
    title: "WhichCam Web",
    blurb:
      "A website to help users choose the right camera for their needs, featuring a user-friendly interface and detailed camera specifications.",
    image: "/wc-1.png", // add an image to /public
    href: "/pages/wc_project",
    live: "https://milad-fotoohnejad.github.io/WhichCam_Web/index.html",
    tags: ["HTML5", "CSS3", "JS"],
  },
];

export default function ProjectsPage() {
  const { setCurrentRoute } = useContext(RouteContext);

  const openDetails = (href: string) => {
    setCurrentRoute(href); // SPA navigation via context
  };

  return (
    <section className="op-back rounded-md p-5">
      <header className="mb-6">
        <h1 className="font-mono text-4xl text-white">Projects</h1>
        <p className="mt-2 text-gray-300">
          A selection of shipped work and in‑progress builds. Click any card to
          view details.
        </p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((p, idx) => (
          <article
            key={idx}
            className="
              group rounded-xl bg-white/5 ring-1 ring-white/10 overflow-hidden
              hover:ring-emerald-400/40 hover:shadow-xl hover:shadow-emerald-900/20
              transition
            "
          >
            <div className="relative h-44">
              <Image
                src={p.image}
                alt={`${p.title} cover`}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                priority={idx < 2}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent" />
            </div>

            <div className="p-4">
              <h3 className="text-xl font-semibold text-white">{p.title}</h3>
              <p className="mt-2 text-sm text-gray-300">{p.blurb}</p>

              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-md bg-white/10 px-2.5 py-1 text-xs text-gray-200 ring-1 ring-white/10"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-4 flex items-center gap-3">
                {/* Show "View details" only for internal detail pages */}
                {p.href.startsWith("/pages/") && (
                  <button
                    onClick={() => openDetails(p.href)}
                    className="rounded-lg bg-emerald-400 px-3 py-2 text-sm font-semibold text-slate-900 hover:bg-emerald-300 transition"
                  >
                    View details
                  </button>
                )}

                {p.live && (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg bg-green-200 px-3 py-2 text-sm text-slate-900 ring-1 ring-white/15 hover:bg-green-300 transition"
                  >
                    Live site
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
