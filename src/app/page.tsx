import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-5xl px-6 py-20 font-sans sm:px-8 sm:py-28">
      <section id="projects" aria-labelledby="projects-heading">
        <h1
          id="projects-heading"
          className="mb-10 font-mono text-sm font-normal text-zinc-500 dark:text-zinc-400"
        >
          # projects
        </h1>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
}
