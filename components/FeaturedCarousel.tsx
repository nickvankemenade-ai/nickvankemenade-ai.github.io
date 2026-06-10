"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "@/lib/projects";
import Artifact from "./Artifact";

export default function FeaturedCarousel() {
  const [index, setIndex] = useState(0);

  const get = (i: number) =>
    projects[(index + i + projects.length) % projects.length];

  return (
    <div className="relative flex justify-center items-center h-[420px]">
      {/* Left */}
      <div
        onClick={() => setIndex(index - 1)}
        className="absolute left-8 w-64 opacity-40 blur-sm cursor-pointer"
      >
        <Card project={get(-1)} />
      </div>

      {/* Center */}
      <motion.div
        className="z-10 w-80"
        layout
        transition={{ type: "spring", stiffness: 120 }}
      >
        <Card project={get(0)} active />
      </motion.div>

      {/* Right */}
      <div
        onClick={() => setIndex(index + 1)}
        className="absolute right-8 w-64 opacity-40 blur-sm cursor-pointer"
      >
        <Card project={get(1)} />
      </div>
    </div>
  );
}

function Card({ project, active }: any) {
  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4">
      <div className="h-40 overflow-hidden rounded-md mb-4">
        <Artifact {...project.homepageArtifact} />
      </div>

      <h3 className="text-lg font-medium">{project.title}</h3>

      {active && (
        <>
          <p className="text-sm text-neutral-400 mt-2">
            {project.summary}
          </p>

          <div className="text-xs text-neutral-500 mt-3">
            {project.tags.join(" · ")}
          </div>
        </>
      )}
    </div>
  );
}