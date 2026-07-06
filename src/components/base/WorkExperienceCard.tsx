import { educations, workExperience } from "@/app/data";

export default function WorkExperienceCard() {
  return (
    <>
      <ul className="mt-4 space-y-4">
        {workExperience.map((work) => (
          <li key={work.date} className="flex items-start justify-between">
            <h5 className="text-typography-light">{work.date}</h5>
            <div className="role__in__company ml-auto block text-right">
              <p className="text-typography-dark">{work.position}</p>
              <p className="text-typography-light text-sm">{work.company}</p>
            </div>
          </li>
        ))}
      </ul>
      <span className="border-border/20 my-8 block h-px w-full border" />
      <p className="text-sm text-typography-light">Education</p>
      <ul className="mt-4">
        {educations.map(({ title, from, years }) => (
          <li key={title} className="flex items-start justify-between">
            <h5 className="text-typography-light">{years}</h5>
            <div className="role__in__company ml-auto block text-right">
              <p className="text-typography-dark">{title}</p>
              <p className="text-typography-light text-sm">{from}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
