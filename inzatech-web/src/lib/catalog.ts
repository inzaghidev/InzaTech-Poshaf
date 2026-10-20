export type CatalogItem = {
  slug: string;
  title: string;
  description: string;
  category?: string;
  meta?: string;
};

export const widgets: CatalogItem[] = [
  {
    slug: "weather",
    title: "Weather Widget",
    description:
      "A location-ready weather surface designed for future provider data.",
    category: "Information",
  },
  {
    slug: "stock",
    title: "Stock Widget",
    description:
      "A compact market watchlist interface using local placeholder data.",
    category: "Information",
  },
  {
    slug: "news",
    title: "News Widget",
    description: "A focused headline view for monitoring topics at a glance.",
    category: "Information",
  },
  {
    slug: "translation",
    title: "Translation Widget",
    description: "A small, task-oriented translation workspace.",
    category: "Utility",
  },
  {
    slug: "unit-converter",
    title: "Unit Converter",
    description: "Quickly convert common quantities without leaving the page.",
    category: "Utility",
  },
  {
    slug: "calculator",
    title: "Calculator",
    description: "A straightforward calculation interface for everyday work.",
    category: "Utility",
  },
  {
    slug: "qr-code-generator",
    title: "QR Code Generator",
    description: "Turn a destination into a shareable QR code.",
    category: "Utility",
  },
  {
    slug: "countdown-timer",
    title: "Countdown Timer",
    description: "Keep an upcoming deadline or event in view.",
    category: "Time",
  },
  {
    slug: "analog-clock",
    title: "Analog Clock",
    description: "A quiet, readable clock surface for any workspace.",
    category: "Time",
  },
  {
    slug: "calendar",
    title: "Calendar",
    description: "A compact calendar view for planning and dates.",
    category: "Time",
  },
];

export const portals: CatalogItem[] = [
  {
    slug: "technology-tutorials",
    title: "Technology Tutorials",
    description:
      "Structured technical learning paths and practical explainers.",
  },
  {
    slug: "it-project-lists",
    title: "IT Project Lists",
    description:
      "Project ideas and references for building technical confidence.",
  },
  {
    slug: "language",
    title: "Language Portal",
    description: "Resources for language learning and useful communication.",
  },
  {
    slug: "learning",
    title: "Learning Portal",
    description: "A dedicated place to organize learning across disciplines.",
  },
  {
    slug: "career",
    title: "Career Portal",
    description:
      "Practical guidance for career development and professional growth.",
  },
  {
    slug: "muslims",
    title: "Muslims Portal",
    description: "A respectful, focused resource hub for Muslim communities.",
  },
];

export const aiApps: CatalogItem[] = [
  {
    slug: "chatbot",
    title: "AI Chatbot",
    description:
      "A conversational workspace for questions, planning, and drafting.",
    meta: "Mock interface",
  },
  {
    slug: "code-generator",
    title: "AI Code Generator",
    description:
      "A focused starting point for code ideas, explanation, and scaffolding.",
    meta: "Mock interface",
  },
  {
    slug: "image-generator",
    title: "AI Image Generator",
    description: "A prompt-led creative workspace for future image generation.",
    meta: "Mock interface",
  },
  {
    slug: "writer",
    title: "AI Writer",
    description:
      "A distraction-light space for drafting, revising, and outlining.",
    meta: "Mock interface",
  },
  {
    slug: "prompt-library",
    title: "AI Prompt Library",
    description:
      "Curated prompts and templates to accelerate your AI workflow.",
    meta: "Mock interface",
  },
];

export const toolGroups = [
  {
    title: "Converters",
    description: "Convert measurements and technical values with confidence.",
    items: [
      "Common Converters",
      "Engineering Converters",
      "Electricity Converters",
      "Fluid Converters",
      "Heat Converters",
    ],
  },
  {
    title: "Calculators",
    description:
      "Solve practical, mathematical, and domain-specific calculations.",
    items: [
      "Calculations Calculator",
      "Mathematics Calculator",
      "Statistics Calculator",
      "Geometry Calculator",
      "Health Calculator",
      "Finance Calculator",
    ],
  },
  {
    title: "Formatters",
    description: "Improve the clarity and consistency of text and code.",
    items: ["Text Formatters", "Code Formatters", "Beautifiers", "Minifier"],
  },
  {
    title: "Other Tools",
    description:
      "Additional practical utilities for files, generation, and testing.",
    items: ["File Converter", "Generators", "Utilities", "Tester Tools"],
  },
];

export const tools: CatalogItem[] = toolGroups.flatMap((group) =>
  group.items.map((title) => ({
    slug: title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, ""),
    title,
    description: `A ${title.toLowerCase()} workspace for focused technical tasks.`,
    category: group.title,
  })),
);

export const articles: CatalogItem[] = [
  {
    slug: "inzaghis-blog",
    title: "Inzaghi's Blog",
    description:
      "Thoughts, updates, and deep dives into modern web technologies and software engineering.",
    category: "Blog",
    meta: "Inzaghi's Blog Aggregator",
  },
  {
    slug: "inzaghis-media",
    title: "Inzaghi's Media",
    description:
      "Curated media publications, video tutorials, audio podcasts, and technical streams.",
    category: "Media",
    meta: "Inzaghi's Media Hub",
  },
  {
    slug: "building-practical-ai-workflows",
    title: "Building practical AI workflows",
    description:
      "A local editorial preview of the kinds of technical stories the Blog Media surface will present.",
    category: "AI & Product",
    meta: "Editorial preview",
  },
  {
    slug: "designing-utility-first-tools",
    title: "Designing utility-first tools",
    description:
      "How task-focused interfaces stay clear without becoming visually generic.",
    category: "Design Systems",
    meta: "Editorial preview",
  },
  {
    slug: "a-better-home-for-technical-learning",
    title: "A better home for technical learning",
    description:
      "Why focused portals can make knowledge easier to discover and return to.",
    category: "Learning",
    meta: "Editorial preview",
  },
];
