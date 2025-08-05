export default function BlogPostItem({
  date,
  title,
  excerpt,
  tags,
  slug,
}: {
  date: string;
  title: string;
  excerpt: string;
  tags: string[];
  slug: string;
}) {
  return (
    <article className="pb-6 border-b border-code-border last:border-0">
      <div className="font-mono text-sm text-muted mb-2">{date}</div>
      <h3 className="text-xl mb-2">
        <a
          href={`/blog/${slug}`}
          className="text-foreground hover:text-accent transition-colors"
        >
          {title}
        </a>
      </h3>
      <p className="text-muted-foreground mb-3">{excerpt}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}