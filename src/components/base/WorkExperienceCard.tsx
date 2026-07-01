import { workExperience } from "@/app/data";

export default function WorkExperienceCard() {
  return (
    <ul className="mt-4 space-y-4">
      {workExperience.map((work) => (
        <li key={work.date} className="flex items-start justify-between">
          <h5 className="text-typography-light">{work.date}</h5>
          <div className="role__in__company ml-auto block text-right">
            <p className="text-typography-dark">{work.position}</p>
            <p className="text-sm text-typography-light">{work.company}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
