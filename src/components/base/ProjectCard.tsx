"use client"

import { projects } from "@/app/data";
import Image from "next/image";

export default function ProjectCard() {
  return (
    <div className="mt-4">
    {projects.map((project) => (
      <div
        key={project.title}
        className="flex items-center gap-4 bg-[#282828] p-4"
      >
        <figure
          className={`aspect-square w-27.5 overflow-hidden rounded-md ${project.backgroundColor}`}
        >
          <Image
            src={project.img}
            style={{
              display: "block",
              maxWidth: "100%",
              width: "80%",
              height: "100%",
            }}
            className="object-contain mx-auto object-center"
            alt="project img"
          />
        </figure>
        <div className="project-titles w-full">
          <a href={project.link} className="text-lg font-semibold text-typography-dark underline cursor-pointer hover:text-typography-dark/60" title="go-to-preview">
            {project.title}
          </a>
          <p className="cut__text mt-1 text-sm leading-loose text-typography-light">
            {project.desc}
          </p>
        </div>
      </div>
    ))}
  </div>
  )
}
