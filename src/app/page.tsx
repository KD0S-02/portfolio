import { featuredIds, projectsData } from "@/data/project";
import BlogPostItem from "@/ui/BlogPostItem";
import ProjectCard from "@/ui/ProjectCard";

export default function Home() {
  return (
    <div className="space-y-12">
      
      <section>
        <h1 className="text-4xl font-mono font-medium text-accent mb-8">
          Hello, World!
        </h1>
        <div className="space-y-4 text-lg leading-relaxed">
          <p>
            I&apos;m a grad student passionate about understanding how systems work under the hood
            . I work primarily with{" "}
            <code className="bg-code-bg px-2 py-1 rounded text-base">Go</code>,{" "}
            <code className="bg-code-bg px-2 py-1 rounded text-base">Python</code>, and{" "}
            <code className="bg-code-bg px-2 py-1 rounded text-base">C++</code>.
          </p>
          <p>
            Currently diving deep into distributed systems, networking and OS internals. When I&apos;m 
            not coding, you&apos;ll find me at the gym debugging my bench.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-mono mb-6 pb-2 border-b border-code-border">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {
            featuredIds.map(id => <ProjectCard key={id} project={projectsData[id]}></ProjectCard>)
          }
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-mono mb-6 pb-2 border-b border-code-border">
           Latest Posts
        </h2>
        <div className="space-y-6">
        </div>
      </section>
    </div>
  );
}
