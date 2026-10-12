import { ArrowRight, Blocks, Code2, Lightbulb, Workflow } from "lucide-react";
import { AppShell } from "@/components/app-shell";
const services = [
  {
    title: "Product foundations",
    description:
      "Practical planning and technical foundations for digital product work.",
    icon: Blocks,
  },
  {
    title: "Software engineering",
    description:
      "Clear, maintainable web and application engineering for approved project scopes.",
    icon: Code2,
  },
  {
    title: "AI solution design",
    description:
      "Thoughtful evaluation of where AI can support a defined workflow.",
    icon: Workflow,
  },
  {
    title: "Technical consulting",
    description:
      "Structured guidance for technical decisions, architecture, and implementation direction.",
    icon: Lightbulb,
  },
];
export default function ServicesPage() {
  return (
    <AppShell>
      <section className="border-b border-border bg-muted">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8 lg:py-18">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-primary">
            Services
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            Technical support, grounded in real product work.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
            InzaTech services provide a clear starting point for approved
            technical, product, and AI-related project discussions.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ title, description, icon: Icon }) => (
            <article key={title} className="border border-border rounded-xl bg-card p-6">
              <Icon size={22} className="text-primary" aria-hidden="true" />
              <h2 className="mt-7 text-lg font-semibold">{title}</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {description}
              </p>
            </article>
          ))}
        </div>
        <div className="mt-10 border border-border rounded-xl bg-card p-7 sm:flex sm:items-center sm:justify-between">
          <div>
            <h2 className="text-xl font-semibold">
              Have a defined project to discuss?
            </h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Contact flow and individual service scopes will be added when
              business details are approved.
            </p>
          </div>
          <a
            href="mailto:hello@inzatech.dev"
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline sm:mt-0"
          >
            Start a conversation <ArrowRight size={16} aria-hidden="true" />
          </a>
        </div>
      </section>
    </AppShell>
  );
}
