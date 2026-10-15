export type Project = {
  id: string;
  name: string;
  description: string;
  technologies: readonly string[];
  image?: { src: string; alt: string };
  outcome?: string;
  href?: string;
};

// Draft homepage content. Add verified images, outcomes, and a destination later.
export const projects: readonly Project[] = [
  {
    id: "stormstage",
    name: "StormStage",
    description:
      "Uses weather and traffic incident data to forecast emergency demand and inform fleet deployment. Combines forecasting, optimization, and simulation to explore deployment decisions.",
    technologies: ["Python", "Forecasting", "Optimization", "Simulation"],
  },
];
