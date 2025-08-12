import { getBlogPosts } from '@/lib/blog';
import Breadcrumb from '@/ui/Breadcrumbs';
import BlogCard from '@/ui/BlogCard';

export default async function BlogsPage() {
  const posts = await getBlogPosts();
  
  const breadcrumbs = [
    { label: '~/home', href: '/' },
    { label: 'blogs' },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-mono">
      <main className="max-w-6xl mx-auto p-8">
        <Breadcrumb items={breadcrumbs} />
        
        <div className="mb-12">
          <h1 className="text-4xl font-mono mb-4 text-white">Blogs</h1>
          <p className="text-muted-foreground leading-relaxed">
            Some of my learnings and ideas, from implementing and working with projects on systems, 
            and low-level programming stuff.
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-mono mb-6 pb-2 border-b border-code-border text-accent">
            All Posts
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {posts.map((post) => (
               <BlogCard post={post} key={post.slug} />
            ))}
          </div>
          
          {posts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground font-mono">No blog posts yet. Check back soon!</p>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}