import Link from "next/link";
import { ArrowRight, Wrench } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { toolGroups } from "@/lib/catalog";
const slug = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
export default function ExplorePage() {
  return (
    <AppShell>
      <section className="border-b border-border bg-muted">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8 lg:py-18">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-primary">
            Explore
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            Tools for clear, practical work.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
            Explore is InzaTech’s discovery area for tools only—converters,
            calculators, formatters, and utilities.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl space-y-10 px-5 py-12 sm:px-6 lg:px-8 lg:py-16">
        {toolGroups.map((group) => (
          <section key={group.title} id={slug(group.title)}>
            <div className="mb-5">
              <h2 className="text-2xl font-semibold">{group.title}</h2>
              <p className="mt-1 text-muted-foreground">{group.description}</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {group.items.map((item) => (
                <Link
                  key={item}
                  href={`/explore/${slug(item)}`}
                  className="group flex items-center justify-between border border-border bg-card rounded-xl p-5 transition-colors hover:border-primary/50 hover:bg-secondary"
                >
                  <span className="flex items-center gap-3 font-medium">
                    <Wrench
                      size={18}
                      className="text-primary"
                      aria-hidden="true"
                    />
                    {item}
                  </span>
                  <ArrowRight
                    size={16}
                    className="text-primary transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              ))}
            </div>
          </section>
        ))}
      </section>
    </AppShell>
  );
}
