import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import fs from 'fs/promises'
import path from 'path'
import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Breadcrumb from '@/ui/Breadcrumbs'
import { mdxComponents } from '@/mdx-components'
import 'highlight.js/styles/atom-one-dark.css';
import rehypeHighlight from 'rehype-highlight'

interface BlogFrontmatter {
  title: string
  date: string
  excerpt?: string
  author?: string
  tags?: string[]
  readTime?: string
  series?: string
  part?: number
}

const options = {
    mdxOptions: {
        remarkPlugins: [],
        rehypePlugins: [rehypeHighlight],
    }
}

export default async function Page({
  params,
}: {
  params: Promise<{ blogID: string }>
}) {
  const { blogID } = await params

  if (!blogID) {
    notFound()
  }

  try {
    const filePath = path.join(process.cwd(), 'src', 'markdown', `${blogID}.mdx`)
    const fileContent = await fs.readFile(filePath, 'utf8')

    const { data: frontmatter, content } = matter(fileContent)

    const breadcrumbs = [
      { label: '~/home', href: '/' },
      { label: 'blogs', href: '/blogs' },
      { label: blogID } 
    ]

    return (
      <div className="min-h-screen bg-background text-foreground font-mono">
        <main className="max-w-6xl mx-auto p-8">
          <Breadcrumb items={breadcrumbs} />
            <MDXRemote source={content} components={mdxComponents} options={options}/>
        </main>
      </div>
    )
  } catch (error) {
    console.error('Error loading blog:', error)
    notFound()
  }
}

// Generate metadata from frontmatter for SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ blogID: string }>
}): Promise<Metadata> {
  const { blogID } = await params

  try {
    // Read and parse frontmatter for metadata
    const filePath = path.join(process.cwd(), 'src', 'markdown', `${blogID}.mdx`)
    const fileContent = await fs.readFile(filePath, 'utf8')
    const { data: frontmatter } = matter(fileContent)

    return {
      title: frontmatter.title || 'Blog Post',
      description: frontmatter.excerpt || 'A blog post',
      authors: frontmatter.author ? [{ name: frontmatter.author }] : undefined,
      keywords: frontmatter.tags?.join(', '),
      openGraph: {
        title: frontmatter.title,
        description: frontmatter.excerpt,
        type: 'article',
        publishedTime: frontmatter.date,
        authors: frontmatter.author,
        tags: frontmatter.tags,
      },
    }
  } catch {
    return {
      title: 'Blog Post Not Found',
    }
  }
}

// Generate static params for all your blog posts
export async function generateStaticParams() {
  try {
    const fs = await import('fs/promises')
    const path = await import('path')
    
    // Fixed path to markdown directory
    const markdownDir = path.join(process.cwd(), 'src', 'markdown')
    
    // Read all files in the markdown directory
    const files = await fs.readdir(markdownDir)
    
    // Filter for .mdx files and extract slugs
    const blogSlugs = files
      .filter((file) => file.endsWith('.mdx'))
      .map((file) => file.replace('.mdx', ''))

    return blogSlugs.map((slug) => ({
      blogID: slug,
    }))
    
  } catch (error) {
    console.error('Error reading markdown directory:', error)
    return []
  }
}

export const dynamicParams = false