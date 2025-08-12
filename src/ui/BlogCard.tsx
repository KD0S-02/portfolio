import Link from "next/link";
import { BlogPost } from "@/lib/blog";

export default function BlogCard({
  post
}: {
  post: BlogPost
}) {
    return (
        <Link key={post.slug} href={`/blogs/${post.slug}`}>
            <div className="project-card cursor-pointer">
                <h3 className="text-xl font-mono mb-2 text-foreground">{post.frontmatter.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm">{post.frontmatter.excerpt}</p>
                
                <div className="flex items-center gap-4 mb-4 text-xs text-muted-foreground">
                <time dateTime={post.frontmatter.date}>
                    {new Date(post.frontmatter.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                    })}
                </time>
                {post.frontmatter.readTime && (
                    <span>{post.frontmatter.readTime}</span>
                )}
                </div>
                
                {post.frontmatter.tags && (
                <div className="flex flex-wrap gap-2 mb-4">
                    {post.frontmatter.tags.slice(0, 4).map((tag: string) => (
                    <span key={tag} className="tag">{tag}</span>
                    ))}
                    {post.frontmatter.tags.length > 4 && (
                    <span className="text-muted text-xs">+{post.frontmatter.tags.length - 4} more</span>
                    )}
                </div>
                )}
                
                {post.frontmatter.series && post.frontmatter.part && (
                <div className="mb-3">
                    <span className="text-accent text-xs font-mono">
                    [{post.frontmatter.series} - Part {post.frontmatter.part}]
                    </span>
                </div>
                )}
                
                <div className="mt-3 text-accent font-mono text-sm">
                read more →
                </div>
            </div>
        </Link>
    )
}