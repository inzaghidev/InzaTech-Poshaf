import { notFound } from "next/navigation";
import { AppShell } from "@/components/app-shell";
import { MockAiWorkspace } from "@/components/mock-ai-workspace";
import { aiApps } from "@/lib/catalog";
export default async function AiAppDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = aiApps.find((entry) => entry.slug === slug);
  if (!item) notFound();
  return (
    <AppShell>
      <article className="mx-auto max-w-3xl px-5 py-14 sm:px-6 lg:px-8 lg:py-20">
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-primary">
          AI App · Mock only
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
          {item.title}
        </h1>
        <p className="mt-5 text-lg leading-8 text-muted-foreground">
          {item.description}
        </p>
        <MockAiWorkspace title={item.title} />
      </article>
    </AppShell>
  );
}
