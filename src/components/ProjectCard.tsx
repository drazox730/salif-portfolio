import Image from "next/image";
import type { Project } from "@/data/projects";
import TechBadge from "@/components/TechBadge";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const content = (
    <>
      <div className="relative aspect-[8/5] overflow-hidden border-b border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900">
        {project.image ? (
          <Image
            src={project.image.src}
            alt={project.image.alt}
            fill
            sizes="(min-width: 1024px) 464px, (min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-3 px-6 text-center">
            <span className="text-xl font-semibold tracking-tight text-zinc-500 dark:text-zinc-400">
              {project.name}
            </span>
            <span className="font-mono text-xs text-zinc-500 dark:text-zinc-400">
              Project preview coming soon
            </span>
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-5 p-6">
        <h2 className="text-xl font-semibold tracking-tight">
          {project.name}
          {project.href && (
            <>
              <span aria-hidden="true" className="ml-2 text-zinc-500">↗</span>
              <span className="sr-only"> (opens in a new tab)</span>
            </>
          )}
        </h2>
        <p className="text-sm leading-7 text-zinc-600 dark:text-zinc-400">
          {project.description}
        </p>
        {project.outcome && (
          <p className="text-sm font-medium">{project.outcome}</p>
        )}
        <ul
          aria-label="Technologies and methods"
          className="mt-auto flex flex-wrap gap-2 pt-2"
        >
          {project.technologies.map((technology) => (
            <li key={technology}><TechBadge label={technology} /></li>
          ))}
        </ul>
      </div>
    </>
  );

  const cardClassName =
    "flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-background dark:border-zinc-800";

  return (
    <article className="h-full">
      {project.href ? (
        <a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${cardClassName} transition-colors hover:border-zinc-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground dark:hover:border-zinc-600`}
        >
          {content}
        </a>
      ) : (
        <div className={cardClassName}>{content}</div>
      )}
    </article>
  );
}
