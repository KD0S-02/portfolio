import type { MDXComponents } from 'mdx/types'
import Image, { ImageProps } from 'next/image'

export const mdxComponents = {
  h1: ({ children }) => (
    <h1 className="text-3xl font-mono font-bold mb-8 mt-12 pb-4 border-b-2 text-accent border-accent">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-2xl font-mono font-semibold mt-12 mb-6">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-xl font-mono font-semibold mt-10 mb-5 text-muted-foreground">
      {children}
    </h3>
  ),
  h4: ({ children }) => (
    <h4 className="text-lg font-mono font-medium mt-8 mb-4 text-muted-foreground">
      {children}
    </h4>
  ),
  
  p: ({ children }) => (
    <p className="text-foreground leading-relaxed mb-6 text-[15px]">
      {children}
    </p>
  ),
  
  code: ({ children }) => (
    <code className="bg-[var(--code-bg)] text-foreground px-2 py-1 rounded font-mono text-sm border 
    border-[var(--code-border)]">
      {children}
    </code>
  ),
  
  pre: ({ children }) => (
    <pre className="bg-[var(--code-bg)] border border-[var(--code-border)] text-foreground 
    rounded-md p-4 overflow-x-auto font-mono text-sm my-6">
      {children}
    </pre>
  ),
  
  a: ({ href, children }) => (
    <a 
      href={href} 
      className="text-foreground underline decoration-dotted hover:decoration-solid transition-all
       duration-200 font-mono"
    >
      [{children}]
    </a>
  ),
  
  ul: ({ children }) => (
    <ul className="text-foreground mb-8 space-y-3">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="text-foreground mb-8 space-y-3 list-decimal list-inside">
      {children}
    </ol>
  ),
  li: ({ children }) => (
    <li className="text-foreground flex items-start leading-relaxed">
      <span className="mr-3 font-mono mt-1">•</span>
      <span>{children}</span>
    </li>
  ),
  
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-accent bg-[var(--code-bg)] pl-6 py-4 my-8 rounded-r">
      <div className="text-foreground italic leading-relaxed">
        {children}
      </div>
    </blockquote>
  ),
  
  em: ({ children }) => (
    <em className="italic text-accent">
      {children}
    </em>
  ),
  
  img: ({ ...props }) => (
    <Image
      sizes="100vw"
      style={{ width: '100%', height: 'auto' }}
      {...(props as ImageProps)}
    />
  ),
  
  table: ({ children }) => (
    <div className="overflow-x-auto my-10">
      <table className="w-full border-collapse font-mono text-sm">
        {children}
      </table>
    </div>
  ),
  th: ({ children }) => (
    <th className="border-b-2 border-accent px-6 py-4 text-left text-foreground font-semibold bg-[var(--code-bg)]">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="border-b border-[var(--code-border)] px-6 py-4 text-foreground">
      {children}
    </td>
  ),
  
  hr: () => (
    <hr className="my-12 border-0 h-px bg-gradient-to-r from-transparent to-transparent" 
    style={{ backgroundImage: 'linear-gradient(to right, transparent, var(--accent), transparent)' }} />
  ),

  input: ({ type, checked, ...props }) => {
    if (type === 'checkbox') {
      return (
        <input 
          type="checkbox" 
          checked={checked}
          className="mr-3"
          style={{ accentColor: 'var(--accent)' }}
          readOnly
          {...props}
        />
      )
    }
    return <input type={type} {...props} />
  },
} satisfies MDXComponents

export function useMDXComponents(): MDXComponents {
  return mdxComponents
}