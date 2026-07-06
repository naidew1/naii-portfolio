import { ServicesType, WorkExperienceType, WorkflowHighlightItem } from "./types";
import staticImage from "@/constants/staticImage";
import { Globe, Search, Layout, Cpu, CheckCircle } from "lucide-react"

export const services: ServicesType[] = [
  {
    name: "Pentesting",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Web Design",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "Web Development",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "Web Application",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "Business Development",
    img: "https://avatar.vercel.sh/jill",
  },
];

export const skills = [
  {
    category: "Languages",
    items: ["javascript", "typescript", "bash"],
  },
  {
    category: "Frameworks & Tools",
    items: ["react native","Reactjs", "nextjs",  "tailwindcss"],
  },
  {
    category: "Design & DevOps",
    items: ["figma", "github", "vercel"],
  },
  {
    category: "Cybersecurity",
    items: ["wazuh", "nmap", "burp suite", "autopsy", "wireshark"],
  },
]

export const WorkflowHighlightItems: WorkflowHighlightItem[] = [
  { item: "Goals & Objective", icon: Globe },
  { item: "Research", icon: Search },
  { item: "Wireframe", icon: Layout },
  { item: "Prototyping", icon: Cpu },
  { item: "Finalize Design", icon: CheckCircle },
]

export const workExperience: WorkExperienceType[] = [
  {
    company: "Oil Cycle Economic Survival Project",
    position: "Head Of EO",
    date: "2025",
  },
  {
    company: "PUMA INFORMATICS",
    position: "Technopreneur",
    date: "2024 - 2025",
  },
];

export const educations = [
  {
    title: "Undergraduate Student",
    from: 'President University',
    years: '2024 - present'
  }
]

export const projects = [
  {
    img: staticImage.avatar2,
    title: "Forensic CTF - Blue Team",
    desc: "A personal blog website documenting my coding journey, sharing lessons learned, challenges faced, and offering practical tips for beginners in programming",
    backgroundColor: "bg-[#607797]",
    link: "https://drive.google.com/file/d/1mvOPby0T2tPqt8tNafJAqKpQheutO-Mh/view?usp=sharing"
  },
  {
    img: staticImage.avatar1,
    title: "Cybersecurity Audit & Risk Assessment",
    desc: "is a digital space created for who want to share, collaborate, and grow without the pressure of social noise",
    backgroundColor: "bg-[#838AAD]",
    link: "https://drive.google.com/file/d/1E-8quEdjGzcWYUB3pRP_CDZQz0G43o51/view?usp=sharing"
  },
  {
    img: staticImage.avatar3,
    title: "AI Innovation Proposal",
    desc: "is a digital space created for who want to share, collaborate, and grow without the pressure of social noise",
    backgroundColor: "bg-[#838AAD]",
    link: "https://drive.google.com/file/d/1aGXTgd1IQfoggSeYpfNFSeo8BAT2ieGH/view?usp=sharing"
  },
];
