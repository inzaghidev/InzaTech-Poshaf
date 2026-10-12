import { AppHeader } from "@/components/app-header";
import { AppFooter } from "@/components/app-footer";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <AppHeader />
      <main className="flex-1">{children}</main>
      <AppFooter />
    </div>
  );
}

export { AppHeader } from "@/components/app-header";
export { AppFooter } from "@/components/app-footer";

