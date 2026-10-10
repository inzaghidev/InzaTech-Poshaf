"use client";

import Link from "next/link";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useState, useSyncExternalStore } from "react";

const navigation = [{ href: "/", label: "Home" }, { href: "/widgets", label: "Widgets" }, { href: "/portals", label: "Portals" }, { href: "/explore", label: "Explore" }, { href: "/ai-apps", label: "AI Apps" }, { href: "/blog", label: "Blog Media" }, { href: "/services", label: "Services" }];

function ThemeToggle() {
  const isDark = useSyncExternalStore(
    (onStoreChange) => {
      const observer = new MutationObserver(onStoreChange);
      observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
      return () => observer.disconnect();
    },
    () => document.documentElement.classList.contains("dark"),
    () => false,
  );
  const toggleTheme = () => { const next = !isDark; document.documentElement.classList.toggle("dark", next); localStorage.setItem("inzatech-theme", next ? "dark" : "light"); };
  return <button type="button" onClick={toggleTheme} className="inline-flex size-10 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:bg-muted hover:text-foreground" aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}>{isDark ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}</button>;
}

function Footer() {
  const columns: Array<[string, string[]]> = [["Products", ["Explore", "AI Apps", "Widgets", "Portals", "Blog Media", "Services"]], ["Tools", ["Calculators", "Converters", "Formatters", "Generators", "Utilities", "All Tools"]], ["AI Apps", ["AI Chatbot", "AI Writer", "AI Code Generator", "AI Image Generator"]], ["Portals", ["Technology Tutorials", "Learning Portal", "IT Project Lists", "Language Portal", "Career Portal", "Muslims Portal"]], ["Company", ["About", "Contact", "Sitemap"]], ["Legal", ["Privacy Policy", "Terms of Service", "Disclaimer", "Cookie Policy"]], ["Social", ["GitHub", "LinkedIn", "YouTube", "Threads", "Instagram", "TikTok", "X / Twitter"]]];
  return <footer className="border-t border-border bg-card"><div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-8"><div className="mb-10 max-w-sm"><Link href="/" className="text-lg font-bold tracking-tight text-foreground">InzaTech</Link><p className="mt-2 text-sm leading-6 text-muted-foreground">The All-in-One AI Utility Platform</p></div><div className="grid grid-cols-2 gap-x-6 gap-y-9 sm:grid-cols-3 lg:grid-cols-6">{columns.map(([title, links]) => <div key={title}><h2 className="font-mono text-xs font-semibold uppercase tracking-wider text-foreground">{title}</h2><ul className="mt-4 space-y-3">{links.map((link) => <li key={link}><a href="#" className="text-sm text-muted-foreground transition-colors hover:text-primary">{link}</a></li>)}</ul></div>)}</div><div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row sm:flex-wrap sm:justify-between"><p>© 2026 InzaTech. All rights reserved.</p><p>Powered by Next.js • React • Tailwind CSS</p><p>Made with ❤️ in Indonesia</p></div></div></footer>;
}

export function AppShell({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  return <div className="flex min-h-screen flex-col"><header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80"><div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8"><Link href="/" className="font-bold tracking-tight text-foreground" onClick={() => setIsOpen(false)}>InzaTech</Link><nav aria-label="Primary navigation" className="hidden items-center gap-1 lg:flex">{navigation.map((item) => <Link key={item.href} href={item.href} className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">{item.label}</Link>)}</nav><div className="flex items-center gap-2"><ThemeToggle /><button type="button" onClick={() => setIsOpen((open) => !open)} className="inline-flex size-10 items-center justify-center rounded-md border border-border text-foreground lg:hidden" aria-expanded={isOpen} aria-controls="mobile-navigation" aria-label="Toggle navigation">{isOpen ? <X size={20} /> : <Menu size={20} />}</button></div></div>{isOpen && <nav id="mobile-navigation" aria-label="Mobile navigation" className="border-t border-border bg-background px-5 py-3 lg:hidden">{navigation.map((item) => <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)} className="block rounded-md px-3 py-3 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground">{item.label}</Link>)}</nav>}</header><main className="flex-1">{children}</main><Footer /></div>;
}
