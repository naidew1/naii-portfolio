import { skills } from "@/app/data";
import Skills from "../base/Skills";

export default function TechStack() {
  return (
    <section
      id="tools-tech-stack"
      className="mt-6 w-full rounded-md bg-card-dark p-4"
    >
      <div className="header flex items-center justify-between">
        <h5 className="text-xl font-semibold text-typography-dark">
          Tools & Tech Stack
        </h5>
        <p className="text-sm leading-loose text-typography-light">
          {skills.reduce((acc, group) => acc + group.items.length, 0)} Items
        </p>
      </div>

      <Skills />
    </section>
  );
}
