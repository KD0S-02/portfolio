import type { MDXComponents } from 'mdx/types'
import Image, { ImageProps } from 'next/image'

export const mdxComponents = {
  h1: ({ children }) => (
    <h1 className="text-3xl font-mono font-bold mb-8 mt-12 text-accent border-b-2 border-accent pb-4">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-2xl font-mono font-semibold mt-12 mb-6 text-accent">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-xl font-mono font-semibold mt-10 mb-5 text-accent">
      {children}
    </h3>
  ),
  h4: ({ children }) => (
    <h4 className="text-lg font-mono font-medium mt-8 mb-4 text-accent">
      {children}
    </h4>
  ),
  
  p: ({ children }) => (
    <p className="text-muted-foreground leading-relaxed mb-6 text-[15px]">
      {children}
    </p>
  ),
  
  code: ({ children }) => (
    <code className="bg-gray-900 text-accent px-2 py-1 rounded font-mono text-sm border border-gray-800">
      {children}
    </code>
  ),
  
  pre: ({ children }) => (
    <pre className="bg-gray-900 border border-gray-700 rounded-md p-4 overflow-x-auto font-mono text-sm my-6 text-gray-300">
      {children}
    </pre>
  ),
  
  a: ({ href, children }) => (
    <a 
      href={href} 
      className="text-accent underline decoration-dotted hover:text-white hover:decoration-solid transition-all duration-200 font-mono"
    >
      [{children}]
    </a>
  ),
  
  ul: ({ children }) => (
    <ul className="text-muted-foreground mb-8 space-y-3">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="text-muted-foreground mb-8 space-y-3 list-decimal list-inside">
      {children}
    </ol>
  ),
  li: ({ children }) => (
    <li className="text-muted-foreground flex items-start leading-relaxed">
      <span className="text-accent mr-3 font-mono mt-1">•</span>
      <span>{children}</span>
    </li>
  ),
  
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-accent bg-gray-950 pl-6 py-4 my-8 rounded-r">
      <div className="text-muted-foreground italic leading-relaxed">
        {children}
      </div>
    </blockquote>
  ),
  
  strong: ({ children }) => (
    <strong className="text-white font-bold">
      {children}
    </strong>
  ),
  
  em: ({ children }) => (
    <em className="text-accent italic">
      {children}
    </em>
  ),
  
  img: ({...props }) => (
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
    <th className="border-b-2 border-accent px-6 py-4 text-left text-accent font-semibold bg-gray-950">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="border-b border-gray-800 px-6 py-4 text-muted-foreground">
      {children}
    </td>
  ),
  
  hr: () => (
    <hr className="my-12 border-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
  ),

  input: ({ type, checked, ...props }) => {
    if (type === 'checkbox') {
      return (
        <input 
          type="checkbox" 
          checked={checked}
          className="mr-3 accent-accent"
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