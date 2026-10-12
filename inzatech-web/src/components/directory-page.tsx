import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";
import type { CatalogItem } from "@/lib/catalog";
import { AppShell } from "@/components/app-shell";

export function DirectoryPage({
  eyebrow,
  title,
  description,
  items,
  basePath,
  icon: Icon,
  note,
}: {
  eyebrow: string;
  title: string;
  description: string;
  items: CatalogItem[];
  basePath: string;
  icon: LucideIcon;
  note?: string;
}) {
  return (
    <AppShell>
      <section className="border-b border-border bg-muted">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8 lg:py-18">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-primary">
            {eyebrow}
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
            {description}
          </p>
          {note && (
            <p className="mt-5 border-l-2 border-primary pl-3 text-sm leading-6 text-muted-foreground">
              {note}
            </p>
          )}
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <Link
              key={item.slug}
              href={`${basePath}/${item.slug}`}
              className="group border border-border rounded-xl bg-card p-6 transition-colors hover:border-primary/50 hover:bg-secondary"
            >
              <Icon size={22} className="text-primary" aria-hidden="true" />
              {item.category && (
                <p className="mt-6 font-mono text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                  {item.category}
                </p>
              )}
              <h2 className="mt-2 text-lg font-semibold">{item.title}</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {item.description}
              </p>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                Open{" "}
                <ArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </AppShell>
  );
}

export function DetailPage({
  item,
  kind,
}: {
  item: CatalogItem;
  kind: string;
}) {
  return (
    <AppShell>
      <article className="mx-auto max-w-3xl px-5 py-14 sm:px-6 lg:px-8 lg:py-20">
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-primary">
          {kind}
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
          {item.title}
        </h1>
        <p className="mt-5 text-lg leading-8 text-muted-foreground">
          {item.description}
        </p>
        <div className="mt-10 border border-border rounded-xl bg-card p-6">
          <h2 className="text-lg font-semibold">Local preview</h2>
          <p className="mt-2 leading-7 text-muted-foreground">
            This route is ready for its feature workspace. It currently uses
            local data and does not connect to an external provider.
          </p>
        </div>
      </article>
    </AppShell>
  );
}
