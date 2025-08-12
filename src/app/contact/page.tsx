'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import Breadcrumb from '@/ui/Breadcrumbs'

export default function ContactPage() {
  const [showResumeModal, setShowResumeModal] = useState(false)
  
  const breadcrumbs = [
    { label: '~/home', href: '/' },
    { label: 'contact' }
  ]

  useEffect(() => {
    if (showResumeModal) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [showResumeModal])

  return (
    <div className="min-h-screen bg-background text-foreground font-mono">
      <main className="max-w-4xl mx-auto p-8">
        <Breadcrumb items={breadcrumbs} />

        <div className="mb-12">
          <h1 className="text-4xl font-mono mb-4 text-accent">Contact</h1>
          <p className="text-muted-foreground leading-relaxed">
            Let&apos;s connect! I&apos;m always interested in discussing new opportunities, collaborating on
            technical challenges, or just chatting about distributed systems and software development.
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-mono mb-6 pb-2 border-b border-code-border text-accent">
            Get in Touch
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="project-card">
                <h3 className="text-lg font-mono mb-3 text-foreground flex items-center">
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
                <h3 className="text-lg font-mono mb-3 text-foreground flex items-center">
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

            <div className="space-y-6">
              <div className="project-card">
                <h3 className="text-lg font-mono mb-3 text-foreground flex items-center">
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
                <h3 className="text-lg font-mono mb-3 text-foreground flex items-center">
                  <span className="text-accent mr-2">{'>'}</span>
                  Resume
                </h3>
                <p className="text-muted-foreground mb-3 text-sm">
                  Resume for a comprehensive overview of my experience and skills.
                </p>
                <button 
                  onClick={() => setShowResumeModal(true)}
                  className="text-accent hover:text-accent-hover font-mono text-sm underline transition-colors"
                >
                  view_resume.pdf
                </button>
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
                <h3 className="text-foreground font-mono mb-2">Available for Spring/Summer 2026 Internships</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Currently seeking SWE/SDE intern roles for Spring/Summer 2026. Particularly interested in 
                  distributed systems, backend development, and full-stack positions at innovative tech companies.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 mt-6">
              <span className="text-accent font-mono text-lg">•</span>
              <div>
                <h3 className="text-foreground font-mono mb-2">CS Graduate Student</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  First-year graduate student specializing in distributed systems, networking, 
                  and concurrent programming. Always eager to learn new technologies and tackle challenging problems.
                </p>
              </div>
            </div>
          </div>
        </section>

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
            
            <a href="mailto:nair.kri@northeastern.edu" className="text-center p-4 bg-code-bg border border-code-border rounded hover:border-accent transition-colors">
              <div className="text-accent font-mono mb-2">[email]</div>
              <div className="text-muted-foreground text-xs">Send message</div>
            </a>
          </div>
        </section>

        <div className="pt-8 border-t border-code-border">
          <Link href="/" className="text-accent hover:text-accent-hover font-mono text-sm transition-colors">
            ← back to home
          </Link>
        </div>
      </main>

      {showResumeModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative w-[80vw] h-[80vh] bg-foreground rounded-lg overflow-hidden shadow-2xl">

            <div className="flex justify-between items-center p-4 bg-background text-foreground">
              <h3 className="text-lg font-mono">resume.pdf</h3>
              <div className="flex gap-3">
                <a 
                  href={process.env.NODE_ENV === 'production' ? '/portfolio/resume_private.pdf' : 
                '/resume_private.pdf'} 
                  download
                  className="px-4 py-2 bg-accent text-foreground rounded font-mono text-sm hover:bg-accent-hover transition-colors"
                >
                  Download
                </a>
                <button 
                  onClick={() => setShowResumeModal(false)}
                  className="px-4 py-2 bg-red-600 text-foreground rounded font-mono text-sm hover:bg-red-700 transition-colors"
                >
                  ✕
                </button>
              </div>
            </div>
            
            <iframe
              src={process.env.NODE_ENV === 'production' ? '/portfolio/resume_private.pdf' : 
                '/resume_private.pdf' }
              className="w-full h-full border-0"
              title="Resume PDF"
            />
          </div>
        </div>
      )}
    </div>
  )
}