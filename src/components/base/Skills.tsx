import { skills } from "@/app/data"
import { Button } from "../ui/button"

export default function Skills() {
  return (
    <div className="mt-4 flex flex-col gap-4">
      {skills.map((group) => (
        <div key={group.category}>
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-typography-light">
            {group.category}
          </p>
          <div className="flex flex-wrap gap-2">
            {group.items.map((skill) => (
              <Button
                variant="outline"
                key={skill}
                className={`inline-flex rounded-lg px-2.5 py-0.5 text-sm font-medium text-white bg-transparent!`}
              >
                {skill}
              </Button>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
