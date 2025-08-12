import fs from 'fs/promises'
import path from 'path'
import matter from 'gray-matter'

export interface BlogFrontmatter {
  title: string
  date: string
  excerpt?: string
  author?: string
  tags?: string[]
  readTime?: string
  series?: string
  part?: number
}

export interface BlogPost {
  slug: string
  frontmatter: BlogFrontmatter
  content: string
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const markdownDir = path.join(process.cwd(), 'src', 'markdown')
    
    const files = await fs.readdir(markdownDir)
    
    const mdxFiles = files.filter(file => file.endsWith('.mdx'))
    
    const posts = await Promise.all(
      mdxFiles.map(async (file) => {
        const slug = file.replace('.mdx', '')
        const filePath = path.join(markdownDir, file)
        const fileContent = await fs.readFile(filePath, 'utf8')
        
        const { data: frontmatter, content } = matter(fileContent)
        
        return {
          slug,
          frontmatter: frontmatter as BlogFrontmatter,
          content
        }
      })
    )
    
    return posts.sort((a, b) => {
      return new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime()
    })
    
  } catch (error) {
    console.error('Error reading blog posts:', error)
    return []
  }
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const filePath = path.join(process.cwd(), 'src', 'markdown', `${slug}.mdx`)
    const fileContent = await fs.readFile(filePath, 'utf8')
    
    const { data: frontmatter, content } = matter(fileContent)
    
    return {
      slug,
      frontmatter: frontmatter as BlogFrontmatter,
      content
    }
  } catch (error) {
    console.error(`Error reading blog post ${slug}:`, error)
    return null
  }
}

export async function getLatestBlogPosts(limit: number = 4): Promise<BlogPost[]> {
  const allPosts = await getBlogPosts()
  return allPosts.slice(0, limit)
}
