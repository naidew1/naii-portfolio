import { projects } from "@/app/data";
import ProjectCard from "../base/ProjectCard";

export default function Projects() {
  return (
    <section
      id="projects"
      className="mt-6 w-full rounded-md bg-card-dark p-4 sm:mt-0"
    >
      <div className="header flex items-center justify-between">
        <h5 className="text-xl font-semibold text-typography-dark">Projects & Write Up</h5>
        <p className="mt-2 text-sm leading-loose text-typography-light">
          {projects.length} Items
        </p>
      </div>

      <ProjectCard />
    </section>
  );
}
