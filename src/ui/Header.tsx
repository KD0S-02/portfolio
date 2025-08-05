import Link from "next/link";

export default function Header() {

  const navItems = [
    { href: "/", label: "~/home" },
    { href: "/projects", label: "~/projects" },
    { href: "/blog", label: "~/blog" },
    { href: "/contact", label: "~/contact" },
  ];

  return (
    <header className="border-b border-code-border py-8 mb-12">
      <div className="container max-w-4xl mx-auto px-6">
        {/* Terminal Header */}
        <div className="font-mono text-sm mb-6">
          <span className="terminal-prompt">kd0s@portfolio</span>
          <span className="text-blue-400">:</span>
          <span className="text-accent">~</span>
          <span className="text-foreground">$ whoami</span>
          <br />
          <span className="ml-5">Krishnadas Nair  - CS Grad Student</span>
          <span className="inline-block w-[10px] h-[5px] bg-[var(--accent)] 
            animate-blink ml-1 translate-y-0.5" />
        </div>

        {/* Navigation */}
        <nav className="font-mono text-sm">
          <ul className="flex space-x-8 gap-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="nav-link"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}