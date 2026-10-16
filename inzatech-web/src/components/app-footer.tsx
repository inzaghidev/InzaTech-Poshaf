import Link from "next/link";

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
  [
    "Social",
    [
      "GitHub",
      "LinkedIn",
      "YouTube",
      "Threads",
      "Instagram",
      "TikTok",
      "X / Twitter",
    ],
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
        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row sm:flex-wrap sm:justify-between">
          <p>© 2026 InzaTech. All rights reserved.</p>
          <p>Powered by Next.js • React • Tailwind CSS</p>
          <p>Made with ❤️ in Indonesia</p>
        </div>
      </div>
    </footer>
  );
}

