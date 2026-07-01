import { LucideIcon } from "lucide-react"
export type SkillType = string[];

export type ServicesType = {
  name: string;
  img: string;
};

export type WorkExperienceType = {
  company: string;
  position: string;
  date: string;
};

export type WorkflowHighlightItem = {
  item: string
  icon: LucideIcon
}
