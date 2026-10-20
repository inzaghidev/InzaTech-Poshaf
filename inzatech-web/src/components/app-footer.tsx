import Link from "next/link";
import { GitHubBtn } from "@/components/github-btn";
import {
  FaGithub,
  FaLinkedin,
  FaYoutube,
  FaThreads,
  FaInstagram,
  FaTiktok,
  FaXTwitter,
  FaSpotify,
} from "react-icons/fa6";
import type { IconType } from "react-icons";

const socialIcons: Array<{ name: string; href: string; icon: IconType }> = [
  { name: "GitHub", href: "https://github.com/inzaghidev", icon: FaGithub },
  { name: "LinkedIn", href: "https://linkedin.com/in/inzaghi-posuma-al-kahfi-b2613528b", icon: FaLinkedin },
  { name: "YouTube", href: "https://www.youtube.com/@enzavlogpost", icon: FaYoutube },
  { name: "Threads", href: "https://www.threads.com/@enzapost", icon: FaThreads },
  { name: "Instagram", href: "https://www.instagram.com/enzapost", icon: FaInstagram },
  { name: "TikTok", href: "https://www.tiktok.com/@enzapostmedia", icon: FaTiktok },
  { name: "X/Twitter", href: "https://x.com/InzaTechMedia", icon: FaXTwitter },
  { name: "Spotify", href: "https://open.spotify.com/user/31h7fde74y7or2zf4unyyerbopf4", icon: FaSpotify },
];

export interface FooterLink {
  label: string;
  href: string;
  isExternal?: boolean;
  target?: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export const footerColumns: FooterColumn[] = [
  {
    title: "Products",
    links: [
      { label: "Explore", href: "/explore" },
      { label: "AI Apps", href: "/ai-apps" },
      { label: "Widgets", href: "/widgets" },
      { label: "Portals", href: "/portals" },
      { label: "Blog Media", href: "/blog" },
      { label: "Services", href: "/services" },
    ],
  },
  {
    title: "Tools",
    links: [
      { label: "Calculators", href: "/explore#calculators" },
      { label: "Converters", href: "/explore#converters" },
      { label: "Formatters", href: "/explore#formatters" },
      { label: "Generators", href: "/explore#other-tools" },
      { label: "Utilities", href: "/explore/utilities" },
      { label: "All Tools", href: "/explore" },
    ],
  },
  {
    title: "AI Apps",
    links: [
      { label: "AI Chatbot", href: "/ai-apps/chatbot" },
      { label: "AI Writer", href: "/ai-apps/writer" },
      { label: "AI Code Generator", href: "/ai-apps/code-generator" },
      { label: "AI Image Generator", href: "/ai-apps/image-generator" },
      { label: "AI Prompt Library", href: "/ai-apps/prompt-library" },
    ],
  },
  {
    title: "Portals",
    links: [
      { label: "Technology Tutorials", href: "/portals/technology-tutorials" },
      { label: "Learning Portal", href: "/portals/learning" },
      { label: "IT Project Lists", href: "/portals/it-project-lists" },
      { label: "Language Portal", href: "/portals/language" },
      { label: "Career Portal", href: "/portals/career" },
      { label: "Muslims Portal", href: "/portals/muslims" },
      { label: "All Portals", href: "/portals" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Contact", href: "/contact" },
      { label: "Sitemap", href: "/sitemap" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms-of-service" },
      { label: "Disclaimer", href: "/disclaimer" },
      { label: "Cookie Policy", href: "/cookie-policy" },
    ],
  },
  {
    title: "Other Links",
    links: [
      { label: "Old Inzaghi's Sites (Google Sites)", href: "https://sites.google.com/view/inzaghis-sites", target: "_blank" },
      { label: "Inzaghi's Sites (InfinityFree)", href: "https://inzaghi.wuaze.com", target: "_blank" },
      { label: "Inzaghi's Blog Aggregator", href: "https://inzaghis-blog-aggregator.vercel.app", target: "_blank" },
      { label: "Linktree", href: "https://linktr.ee/inzaghigroup", target: "_blank" },
    ],
  },
];

export function AppFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-sm">
          <Link
            href="/"
            className="text-lg font-bold tracking-tight text-foreground"
          >
            InzaTech
          </Link>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            The All-in-One AI Utility Platform
          </p>
        </div>
        <div className="grid grid-cols-2 gap-x-6 gap-y-9 sm:grid-cols-3 lg:grid-cols-6">
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h2 className="font-mono text-xs font-semibold uppercase tracking-wider text-foreground">
                {col.title}
              </h2>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => {
                  const isExternal =
                    link.isExternal ??
                    (Boolean(link.target) || link.href.startsWith("http"));

                  return (
                    <li key={link.label}>
                      {isExternal ? (
                        <a
                          href={link.href}
                          target={link.target ?? "_blank"}
                          rel="noopener noreferrer"
                          className="text-sm text-muted-foreground transition-colors hover:text-primary"
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="text-sm text-muted-foreground transition-colors hover:text-primary"
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
        {/* Social media icons */}
        <div className="mt-2 mb-12 flex flex-col items-center justify-between gap-4 pt-6 sm:flex-row">
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-foreground">
            Social Media (Inzaghi&apos;s Media)
          </span>
          <div className="flex items-center gap-4">
            {socialIcons.map(({ name, href, icon: Icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Copyright & GitHub */}
        <div className="flex flex-col gap-3 pt-6 border-t border-border text-sm text-muted-foreground sm:flex-row sm:flex-wrap sm:justify-between">
          <p>© 2026 InzaTech. All rights reserved.</p>
          <p>Powered by Next.js • React • Tailwind CSS</p>
          <p>Made with ❤️ in Indonesia</p>
          <GitHubBtn
            href="https://github.com/inzaghidev/InzaTech-Poshaf"
            data-color-scheme="no-preference: light; light: light; dark: dark;"
            data-size="large"
            aria-label="Look at @inzaghidev"
          >
            Look at @inzaghidev
          </GitHubBtn>
        </div>
      </div>
    </footer>
  );
}

