import Link from 'next/link';
import Breadcrumb from '@/ui/Breadcrumbs';

export default function ContactPage() {
  const breadcrumbs = [
    { label: '~/home', href: '/' },
    { label: 'contact' }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-mono">
      <main className="max-w-4xl mx-auto p-8">
        <Breadcrumb items={breadcrumbs} />

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-mono mb-4 text-white">Contact</h1>
          <p className="text-muted-foreground leading-relaxed">
            Let's connect! I'm always interested in discussing new opportunities, collaborating on
            technical challenges, or just chatting about distributed systems and software development.
          </p>
        </div>

        {/* Contact Methods */}
        <section className="mb-12">
          <h2 className="text-2xl font-mono mb-6 pb-2 border-b border-code-border text-accent">
            Get in Touch
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Primary Contact */}
            <div className="space-y-6">
              <div className="project-card">
                <h3 className="text-lg font-mono mb-3 text-white flex items-center">
                  <span className="text-accent mr-2">@</span>
                  Email
                </h3>
                <p className="text-muted-foreground mb-3 text-sm">
                  Best way to reach me for internship opportunities or technical discussions.
                </p>
                <a 
                  href="mailto:nair.kri@northeastern.edu" 
                  className="text-accent hover:text-accent-hover font-mono text-sm underline transition-colors"
                >
                  nair.kri@northeastern.edu
                </a>
              </div>

              <div className="project-card">
                <h3 className="text-lg font-mono mb-3 text-white flex items-center">
                  <span className="text-accent mr-2">#</span>
                  LinkedIn
                </h3>
                <p className="text-muted-foreground mb-3 text-sm">
                  Connect with me for professional networking and career opportunities.
                </p>
                <a 
                  href="https://linkedin.com/in/krishnadas-nair" 
                  className="text-accent hover:text-accent-hover font-mono text-sm underline transition-colors"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  linkedin.com/in/krishnadas-nair
                </a>
              </div>
            </div>

            {/* Secondary Contact */}
            <div className="space-y-6">
              <div className="project-card">
                <h3 className="text-lg font-mono mb-3 text-white flex items-center">
                  <span className="text-accent mr-2">$</span>
                  GitHub
                </h3>
                <p className="text-muted-foreground mb-3 text-sm">
                  Check out my code, contribute to projects, or follow my development journey.
                </p>
                <a 
                  href="https://github.com/KD0S-02" 
                  className="text-accent hover:text-accent-hover font-mono text-sm underline transition-colors"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  github.com/KD0S-02
                </a>
              </div>

              <div className="project-card">
                <h3 className="text-lg font-mono mb-3 text-white flex items-center">
                  <span className="text-accent mr-2">{'>'}</span>
                  Resume
                </h3>
                <p className="text-muted-foreground mb-3 text-sm">
                  Download my resume for a comprehensive overview of my experience and skills.
                </p>
                <a 
                  href="/resume.pdf" 
                  className="text-accent hover:text-accent-hover font-mono text-sm underline transition-colors"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  download resume.pdf
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Current Status */}
        <section className="mb-12">
          <h2 className="text-2xl font-mono mb-6 pb-2 border-b border-code-border text-accent">
            Current Status
          </h2>
          
          <div className="bg-code-bg border border-code-border rounded p-6">
            <div className="flex items-start space-x-4">
              <span className="text-accent font-mono text-lg">•</span>
              <div>
                <h3 className="text-white font-mono mb-2">Available for Spring/Summer 2026 Internships</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Currently seeking SWE/SDE intern roles for Spring/Summer 2026. Particularly interested in 
                  distributed systems, backend development, and full-stack positions at innovative tech companies.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 mt-6">
              <span className="text-accent font-mono text-lg">•</span>
              <div>
                <h3 className="text-white font-mono mb-2">CS Graduate Student</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  First-year graduate student specializing in distributed systems, networking, 
                  and concurrent programming. Always eager to learn new technologies and tackle challenging problems.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="mb-12">
          <h2 className="text-2xl font-mono mb-6 pb-2 border-b border-code-border text-accent">
            Quick Links
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link href="/projects" className="text-center p-4 bg-code-bg border border-code-border rounded hover:border-accent transition-colors">
              <div className="text-accent font-mono mb-2">[projects]</div>
              <div className="text-muted-foreground text-xs">View my work</div>
            </Link>
            
            <a href="https://github.com/KD0S-02" className="text-center p-4 bg-code-bg border border-code-border rounded hover:border-accent transition-colors" target="_blank" rel="noopener noreferrer">
              <div className="text-accent font-mono mb-2">[github]</div>
              <div className="text-muted-foreground text-xs">Source code</div>
            </a>
            
            <a href="/resume.pdf" className="text-center p-4 bg-code-bg border border-code-border rounded hover:border-accent transition-colors" target="_blank" rel="noopener noreferrer">
              <div className="text-accent font-mono mb-2">[resume]</div>
              <div className="text-muted-foreground text-xs">Download PDF</div>
            </a>
            
            <a href="mailto:your.email@example.com" className="text-center p-4 bg-code-bg border border-code-border rounded hover:border-accent transition-colors">
              <div className="text-accent font-mono mb-2">[email]</div>
              <div className="text-muted-foreground text-xs">Send message</div>
            </a>
          </div>
        </section>

        {/* Back Navigation */}
        <div className="pt-8 border-t border-code-border">
          <Link href="/" className="text-accent hover:text-accent-hover font-mono text-sm transition-colors">
            ← back to home
          </Link>
        </div>
      </main>
    </div>
  );
}