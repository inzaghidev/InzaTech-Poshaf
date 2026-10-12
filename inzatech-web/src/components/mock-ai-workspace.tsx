"use client";
import { useState } from "react";
import { Send } from "lucide-react";

export function MockAiWorkspace({ title }: { title: string }) {
  const [prompt, setPrompt] = useState("");
  const [output, setOutput] = useState("");
  return (
    <div className="mt-10 border border-border rounded-xl bg-card p-6">
      <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-primary">
        Mock workspace
      </p>
      <h2 className="mt-2 text-xl font-semibold">Try the {title} interface</h2>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">
        This demonstration stores nothing and does not call an AI provider.
      </p>
      <label className="mt-6 block text-sm font-medium" htmlFor="prompt">
        Your prompt
      </label>
      <textarea
        id="prompt"
        value={prompt}
        onChange={(event) => setPrompt(event.target.value)}
        className="mt-2 min-h-28 w-full resize-y rounded-md border border-input bg-background p-3 text-sm"
        placeholder="Describe what you want to work on…"
      />
      <button
        type="button"
        onClick={() =>
          setOutput(
            prompt.trim()
              ? `Mock response ready for: “${prompt.trim()}”`
              : "Add a prompt to preview a mock response.",
          )
        }
        className="mt-3 inline-flex h-10 items-center gap-2 rounded-md bg-primary px-4 text-sm font-semibold text-primary-foreground"
      >
        <Send size={16} aria-hidden="true" /> Generate mock response
      </button>
      {output && (
        <div
          className="mt-5 border-l-2 border-primary bg-muted p-4 text-sm leading-6 text-muted-foreground"
          role="status"
        >
          {output}
        </div>
      )}
    </div>
  );
}
