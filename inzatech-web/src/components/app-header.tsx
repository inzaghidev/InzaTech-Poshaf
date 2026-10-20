"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

interface SubItem {
  label: string;
  href: string;
  isAction?: boolean;
}

interface NavItem {
  label: string;
  href: string;
  children?: SubItem[];
}

export const navigation: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/widgets", label: "Widgets" },
  {
    href: "/portals",
    label: "Portals",
    children: [
      { label: "Technology Tutorials", href: "/portals/technology-tutorials" },
      { label: "Learning Portal", href: "/portals/learning" },
      { label: "IT Project Lists", href: "/portals/it-project-lists" },
      { label: "Language Portal", href: "/portals/language" },
      { label: "Career Portal", href: "/portals/career" },
      { label: "Muslims Portal", href: "/portals/muslims" },
      { label: "Browse all Portals →", href: "/portals", isAction: true },
    ],
  },
  {
    href: "/explore",
    label: "Explore",
    children: [
      { label: "Converters", href: "/explore#converters" },
      { label: "Calculators", href: "/explore#calculators" },
      { label: "Generators", href: "/explore#generators" },
      { label: "Formatters", href: "/explore#formatters" },
      { label: "File Converter", href: "/explore/file-converter" },
      { label: "Utilities", href: "/explore/utilities" },
      { label: "Browse all Apps →", href: "/explore", isAction: true },
    ],
  },
  {
    href: "/ai-apps",
    label: "AI Apps",
    children: [
      { label: "AI Chatbot", href: "/ai-apps/chatbot" },
      { label: "AI Writer", href: "/ai-apps/writer" },
      { label: "AI Code Generator", href: "/ai-apps/code-generator" },
      { label: "AI Image Generator", href: "/ai-apps/image-generator" },
      { label: "AI Prompt Library", href: "/ai-apps/prompt-library" },
      { label: "Browse all AI Apps →", href: "/ai-apps", isAction: true },
    ],
  },
  {
    href: "/blog",
    label: "Blog Media",
    children: [
      { label: "Inzaghi's Blog", href: "/blog/inzaghis-blog" },
      { label: "Inzaghi's Media", href: "/blog/inzaghis-media" },
    ],
  },
  { href: "/services", label: "Services" },
];

export function AppHeader() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [expandedMobileMenus, setExpandedMobileMenus] = useState<Record<string, boolean>>({});
  const navRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close on route change
  useEffect(() => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  }, [pathname]);

  const toggleMobileSubmenu = (label: string) => {
    setExpandedMobileMenus((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const isCurrentActive = (item: NavItem) => {
    if (item.href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(item.href);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="flex items-center gap-2 font-bold tracking-tight text-foreground"
            onClick={() => {
              setActiveDropdown(null);
              setMobileMenuOpen(false);
            }}
          >
            InzaTech
          </Link>

          {/* Desktop & Tablet Navigation */}
          <nav
            ref={navRef}
            aria-label="Primary navigation"
            className="hidden items-center gap-1 lg:flex"
          >
            {navigation.map((item) => {
              const hasDropdown = Boolean(item.children && item.children.length > 0);
              const isDropdownOpen = activeDropdown === item.label;
              const isActive = isCurrentActive(item);

              if (!hasDropdown) {
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`rounded-full px-3.5 py-1.5 text-sm font-medium transition-all ${
                      isActive
                        ? "bg-primary/10 text-primary font-semibold"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              }

              return (
                <div key={item.label} className="relative">
                  <button
                    type="button"
                    onClick={() =>
                      setActiveDropdown((cur) => (cur === item.label ? null : item.label))
                    }
                    className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-sm font-medium transition-all ${
                      isActive || isDropdownOpen
                        ? "bg-primary/10 text-primary font-semibold"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    }`}
                    aria-expanded={isDropdownOpen}
                    aria-haspopup="menu"
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${
                        isDropdownOpen ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </button>

                  {/* Desktop Dropdown Popover matching Image 2 */}
                  {isDropdownOpen && (
                    <div
                      role="menu"
                      className="absolute left-0 mt-2 min-w-[220px] rounded-lg border border-border bg-card/95 p-1.5 shadow-xl backdrop-blur-md z-50 animate-in fade-in zoom-in-95 duration-150"
                    >
                      <div className="flex flex-col gap-0.5">
                        {item.children?.map((sub, idx) => {
                          const isSubActive = pathname === sub.href;

                          if (sub.isAction) {
                            return (
                              <div key={idx} className="mt-1 pt-1 border-t border-border">
                                <Link
                                  href={sub.href}
                                  role="menuitem"
                                  onClick={() => setActiveDropdown(null)}
                                  className="flex items-center justify-between rounded-lg px-3.5 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary/10"
                                >
                                  <span>{sub.label}</span>
                                </Link>
                              </div>
                            );
                          }

                          return (
                            <Link
                              key={sub.label}
                              href={sub.href}
                              role="menuitem"
                              onClick={() => setActiveDropdown(null)}
                              className={`flex items-center justify-between rounded-md px-3.5 py-2 text-sm font-medium transition-colors ${
                                isSubActive
                                  ? "bg-muted text-foreground font-semibold"
                                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
                              }`}
                            >
                              <span>{sub.label}</span>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
        </div>

        {/* Header Right Actions */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="inline-flex size-10 items-center justify-center rounded-lg border border-border text-foreground lg:hidden hover:bg-muted transition-colors"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer / Panel matching Image 1 */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="max-h-[calc(100dvh-4rem)] overflow-y-auto overscroll-contain border-t border-border bg-card px-4 py-4 shadow-lg lg:hidden custom-scrollbar"
        >
          <div className="flex flex-col gap-1.5">
            {navigation.map((item) => {
              const hasDropdown = Boolean(item.children && item.children.length > 0);
              const isExpanded = Boolean(expandedMobileMenus[item.label]);
              const isActive = isCurrentActive(item);

              if (!hasDropdown) {
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block rounded-lg px-4 py-3 text-sm font-semibold transition-colors ${
                      isActive
                        ? "bg-primary/15 text-primary"
                        : "text-foreground hover:bg-muted"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              }

              return (
                <div key={item.label} className="flex flex-col">
                  {/* Parent accordion button */}
                  <button
                    type="button"
                    onClick={() => toggleMobileSubmenu(item.label)}
                    className={`flex w-full items-center justify-between rounded-lg px-4 py-3 text-sm font-semibold transition-colors ${
                      isActive
                        ? "bg-primary/15 text-primary"
                        : "text-foreground hover:bg-muted"
                    }`}
                    aria-expanded={isExpanded}
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      size={18}
                      className={`text-muted-foreground transition-transform duration-200 ${
                        isExpanded ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </button>

                  {/* Accordion content box matching Image 1 */}
                  {isExpanded && (
                    <div className="mt-1 mb-2 rounded-lg border border-border bg-muted/40 p-2 flex flex-col gap-1">
                      {item.children?.map((sub, idx) => {
                        const isSubActive = pathname === sub.href;

                        if (sub.isAction) {
                          return (
                            <div key={idx} className="mt-1 pt-1 border-t border-border">
                              <Link
                                href={sub.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="flex items-center justify-between rounded-lg px-3 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary/10"
                              >
                                <span>{sub.label}</span>
                              </Link>
                            </div>
                          );
                        }

                        return (
                          <Link
                            key={sub.label}
                            href={sub.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className={`block rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                              isSubActive
                                ? "bg-muted text-foreground font-semibold"
                                : "text-muted-foreground hover:bg-muted hover:text-foreground"
                            }`}
                          >
                            {sub.label}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
