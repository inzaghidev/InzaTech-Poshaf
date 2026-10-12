import { Newspaper } from "lucide-react";
import { DirectoryPage } from "@/components/directory-page";
import { articles } from "@/lib/catalog";
export default function BlogPage() {
  return (
    <DirectoryPage
      eyebrow="Blog Media"
      title="Technical ideas with useful context."
      description="This surface is prepared for Inzaghi's Blog Aggregator while it uses a small, clearly labelled local editorial preview."
      items={articles}
      basePath="/blog"
      icon={Newspaper}
      note="No live aggregator connection is configured yet. The articles below are local previews, not retrieved content."
    />
  );
}
