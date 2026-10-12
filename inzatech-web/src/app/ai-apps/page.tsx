import { Bot } from "lucide-react";
import { DirectoryPage } from "@/components/directory-page";
import { aiApps } from "@/lib/catalog";
export default function AiAppsPage() {
  return (
    <DirectoryPage
      eyebrow="AI Apps"
      title="Focused AI workspaces, when you need them."
      description="Choose a clear task, then use a purpose-built interface for conversation, code, imagery, or writing."
      items={aiApps}
      basePath="/ai-apps"
      icon={Bot}
      note="These interfaces are mock-only until an approved AI provider is configured."
    />
  );
}
