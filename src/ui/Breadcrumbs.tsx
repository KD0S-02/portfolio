import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <div className="text-muted mb-8 text-sm flex items-center">
      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          {item.href ? (
            <Link href={item.href} className="bread-crumb-link">
              {item.label}
            </Link>
          ) : (
            <span className="bread-crumb-curr">{item.label}</span>
          )}
          {index < items.length - 1 && (
            <span className="mx-2">/</span>
          )}
        </div>
      ))}
    </div>
  );
}