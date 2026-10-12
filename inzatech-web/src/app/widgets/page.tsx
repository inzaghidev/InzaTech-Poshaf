import { PanelsTopLeft } from "lucide-react";
import { DirectoryPage } from "@/components/directory-page";
import { widgets } from "@/lib/catalog";
export default function WidgetsPage() {
  return (
    <DirectoryPage
      eyebrow="Widgets"
      title="Useful information, kept within reach."
      description="Browse independent widgets for everyday reference, utility, and time-based tasks."
      items={widgets}
      basePath="/widgets"
      icon={PanelsTopLeft}
      note="Widget data is local or mock data until an approved provider is connected."
    />
  );
}
