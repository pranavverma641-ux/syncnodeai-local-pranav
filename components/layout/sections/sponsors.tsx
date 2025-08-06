"use client";

import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css";
import {
  CloudCog,
  Cloud,
  CloudIcon,
  Boxes,
  CircuitBoard,
  Workflow,
  FileCode,
  Coffee,
  Database,
  BarChart,
  CircleDot,
  Server,
  BrainCircuit,
  Bot
} from "lucide-react";

interface TechStackProps {
  icon: React.ReactNode;
  name: string;
  color: string;
}

const technologies: TechStackProps[] = [
  {
    icon: <CloudCog size={32} />,
    name: "AWS",
    color: "#FF9900"
  },
  {
    icon: <Cloud size={32} />,
    name: "Azure",
    color: "#0078D4"
  },
  {
    icon: <CloudIcon size={32} />,
    name: "GCP",
    color: "#4285F4"
  },
  {
    icon: <Boxes size={32} />,
    name: "Docker",
    color: "#2496ED"
  },
  {
    icon: <CircuitBoard size={32} />,
    name: "Kubernetes",
    color: "#326CE5"
  },
  {
    icon: <Workflow size={32} />,
    name: "Jenkins",
    color: "#D33833"
  },
  {
    icon: <FileCode size={32} />,
    name: "Python",
    color: "#3776AB"
  },
  {
    icon: <Coffee size={32} />,
    name: "Java",
    color: "#007396"
  },
  {
    icon: <Database size={32} />,
    name: "SQL",
    color: "#4479A1"
  },
  {
    icon: <BarChart size={32} />,
    name: "Tableau",
    color: "#E97627"
  },
  {
    icon: <CircleDot size={32} />,
    name: "React",
    color: "#61DAFB"
  },
  {
    icon: <Server size={32} />,
    name: "Node.js",
    color: "#339933"
  },
  {
    icon: <BrainCircuit size={32} />,
    name: "TensorFlow",
    color: "#FF6F00"
  },
  {
    icon: <Bot size={32} />,
    name: "AI/ML",
    color: "#9C27B0"
  }
];

export const TechnologiesSection = () => {
  return (
    <section id="technologies" className="max-w-[85%] mx-auto pb-24 sm:pb-16">
      <div className="mx-auto">
        <Marquee
          className="gap-[3rem]"
          fade
          innerClassName="gap-[3rem]"
          pauseOnHover
        >
          {technologies.map(({ icon, name, color }) => (
            <div
              key={name}
              className="flex items-center text-xl md:text-4xl font-medium bg-muted/30 px-6 py-3 rounded-full"
            >
              <span style={{ color: color }} className="mr-3">
                {icon}
              </span>
              {name}
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};