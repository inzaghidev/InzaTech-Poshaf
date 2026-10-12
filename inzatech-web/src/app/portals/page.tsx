import { LibraryBig } from "lucide-react";
import { DirectoryPage } from "@/components/directory-page";
import { portals } from "@/lib/catalog";
export default function PortalsPage() {
  return (
    <DirectoryPage
      eyebrow="Portals"
      title="Purposeful places to keep learning."
      description="Explore focused knowledge destinations without mixing them into tools or AI workspaces."
      items={portals}
      basePath="/portals"
      icon={LibraryBig}
      note="Portal content uses local descriptions while dedicated content sources are planned."
    />
  );
}
