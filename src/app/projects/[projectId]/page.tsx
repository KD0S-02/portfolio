import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projectsData, projectIds } from '@/data/project';
import Breadcrumb from '@/ui/Breadcrumbs';

interface ProjectDetailPageProps {
  params: Promise<{
    projectId: string;
  }>;
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { projectId } = await params;
  const project = projectsData[projectId];
  const breadcrumbs = [
        { label: '~/home', href: '/' },
        { label: 'projects', href: '/projects'},
        { label: projectId }
  ];

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background text-foreground font-mono">
      <main className="max-w-4xl mx-auto p-8">
        {/* Breadcrumb */}
        <Breadcrumb items={breadcrumbs}></Breadcrumb>

        {/* Project Title */}
        <h1 className="text-3xl font-mono mb-2 text-white">
          {project.title}
        </h1>
        <p className="text-muted-foreground mb-6">{project.subtitle}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>

        {/* Links */}
        <div className="font-mono text-sm space-x-6 pb-4 border-b border-code-border mb-8">
          {project.links.github && (
            <a href={project.links.github} className="text-accent hover:text-accent-hover underline transition-colors" target="_blank" rel="noopener noreferrer">
              [github]
            </a>
          )}
          {project.links.demo && (
            <a href={project.links.demo} className="text-accent hover:text-accent-hover underline transition-colors" target="_blank" rel="noopener noreferrer">
              [demo]
            </a>
          )}
          {project.links.docs && (
            <a href={project.links.docs} className="text-accent hover:text-accent-hover underline transition-colors" target="_blank" rel="noopener noreferrer">
              [docs]
            </a>
          )}
        </div>

        {/* Project Overview */}
        <section className="mb-12">
          <h2 className="text-xl font-mono mb-4 text-accent">Overview</h2>
          <div className="text-foreground leading-relaxed space-y-4">
            {project.overview.description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          {project.overview.keyFeatures.length > 0 && (
            <div className="mt-6">
              <h3 className="text-accent font-mono mb-3">Key Features:</h3>
              <ul className="text-foreground text-sm space-y-1">
                {project.overview.keyFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>

        {/* Architecture */}
        {project.architecture && (
          <section className="mb-12">
            <h2 className="text-xl font-mono mb-4 text-accent">Architecture</h2>
            <div className="bg-code-bg border border-code-border rounded p-6 mb-4">
              <img 
                src={project.architecture.img} 
                alt={`${project.title} architecture diagram`}
                className="w-full max-w-2xl mx-auto rounded"
              />
            </div>
            <div className="text-foreground space-y-3">
              {project.architecture.components.map((component, index) => (
                <p key={index}>
                  <span className="text-accent font-mono">{component.name}:</span> {component.description}
                </p>
              ))}
            </div>
          </section>
        )}

        {/* Technical Implementation */}
        <section className="mb-12">
          <h2 className="text-xl font-mono mb-4 text-accent">Technical Implementation</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {project.technicalImplementation.sections.map((section, index) => (
              <div key={index} className="bg-code-bg border border-code-border rounded p-4">
                <h3 className="text-accent font-mono mb-3">{section.title}</h3>
                <ul className="text-foreground text-sm space-y-2">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Challenges & Solutions */}
        <section className="mb-12">
          <h2 className="text-xl font-mono mb-4 text-accent">Challenges & Solutions</h2>
          <div className="space-y-6">
            {project.challenges.map((challenge, index) => (
              <div key={index} className="border-l-2 border-accent pl-4">
                <h3 className="text-white font-mono mb-2">{challenge.title}</h3>
                <p className="text-foreground text-sm">{challenge.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Future Enhancements */}
        <section className="mb-12">
          <h2 className="text-xl font-mono mb-4 text-accent">Future Enhancements</h2>
          <div className="text-foreground space-y-2 text-sm">
            {project.futureEnhancements.map((enhancement, index) => (
              <p key={index} className="flex items-start">
                <span className="text-accent mr-2">•</span>
                <span>{enhancement}</span>
              </p>
            ))}
          </div>
        </section>

        {/* Navigation */}
        <div className="pt-8 border-t border-code-border flex justify-between items-center">
          <Link href="/projects" className="text-accent hover:text-accent-hover font-mono text-sm transition-colors">
            ← back to projects
          </Link>
          <Link href="/contact" className="text-accent hover:text-accent-hover font-mono text-sm transition-colors">
            get in touch →
          </Link>
        </div>
      </main>
    </div>
  );
}

export async function generateStaticParams() {
  return projectIds.map((projectId) => ({
    projectId,
  }));
}