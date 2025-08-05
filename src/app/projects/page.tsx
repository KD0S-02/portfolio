import Link from 'next/link';
import { projectIds, projectsData } from '@/data/project';
import Breadcrumb from '@/ui/Breadcrumbs';

export default function ProjectsPage() {
  
    const breadcrumbs = [
    { label: '~/home', href: '/' },
    { label: 'projects' },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-mono">
      <main className="max-w-6xl mx-auto p-8">
        <Breadcrumb items={breadcrumbs}></Breadcrumb>
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-mono mb-4 text-white">Projects</h1>
          <p className="text-muted-foreground leading-relaxed">
            A collection of systems and applications I've built, focusing on distributed systems, 
            real-time communication, and concurrent programming.
          </p>
        </div>

        {/* Projects Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-mono mb-6 pb-2 border-b border-code-border text-accent">
            All Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projectIds.map((id) => (
              <Link key={projectsData[id].id} href={`/projects/${projectsData[id].id}`}>
                <div className="project-card cursor-pointer">
                  <h3 className="text-xl font-mono mb-2 text-white">{projectsData[id].title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm">{projectsData[id].subtitle}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {projectsData[id].tags.slice(0, 4).map((tag: string) => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                    {projectsData[id].tags.length > 4 && (
                      <span className="text-muted text-xs">+{projectsData[id].tags.length - 4} more</span>
                    )}
                  </div>
                  <div className="font-mono text-sm space-x-4">
                    {projectsData[id].links.github && <span className="text-accent">[github]</span>}
                    {projectsData[id].links.demo && <span className="text-accent">[demo]</span>}
                    {projectsData[id].links.docs && <span className="text-accent">[docs]</span>}
                  </div>
                  <div className="mt-3 text-accent font-mono text-sm">
                    view details →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}