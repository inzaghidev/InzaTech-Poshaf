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

export const footerColumns: Array<[string, string[]]> = [
  [
    "Products",
    ["Explore", "AI Apps", "Widgets", "Portals", "Blog Media", "Services"],
  ],
  [
    "Tools",
    [
      "Calculators",
      "Converters",
      "Formatters",
      "Generators",
      "Utilities",
      "All Tools",
    ],
  ],
  [
    "AI Apps",
    ["AI Chatbot", "AI Writer", "AI Code Generator", "AI Image Generator"],
  ],
  [
    "Portals",
    [
      "Technology Tutorials",
      "Learning Portal",
      "IT Project Lists",
      "Language Portal",
      "Career Portal",
      "Muslims Portal",
    ],
  ],
  ["Company", ["About", "Contact", "Sitemap"]],
  [
    "Legal",
    ["Privacy Policy", "Terms of Service", "Disclaimer", "Cookie Policy"],
  ],
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
          {footerColumns.map(([title, links]) => (
            <div key={title}>
              <h2 className="font-mono text-xs font-semibold uppercase tracking-wider text-foreground">
                {title}
              </h2>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link}
                    </a>
                  </li>
                ))}
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

