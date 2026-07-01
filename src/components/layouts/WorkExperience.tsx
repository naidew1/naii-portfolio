import WorkExperienceCard from "../base/WorkExperienceCard";

export default function WorkExperience() {
  return (
    <section
      id="highlight-project"
      className="mt-6 w-full rounded-md bg-card-dark p-4"
    >
      <h5 className="text-xl font-semibold text-typography-dark">
        Involvement
      </h5>

      <WorkExperienceCard />
    </section>
  );
}
