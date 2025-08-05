import { ProjectContent } from "@/data/project";
import Link from "next/link";

export default function ProjectCard({
  project
}: {
  project: ProjectContent
}) {
  return (
    <Link className="project-card" href={`projects/${project.id}`}>
      <h3 className="text-xl font-mono mb-2">{project.title}</h3>
      <p className="text-muted-foreground mb-4">{project.subtitle}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>
      <div className="font-mono text-sm space-x-4">
        {project.links.github && (
          <Link href={project.links.github} className="text-accent hover:underline">
            [github]
          </Link>
        )}
        {project.links.demo && (
          <Link href={project.links.demo} className="text-accent hover:underline">
            [demo]
          </Link>
        )}
      </div>
    </Link>
  );
}

