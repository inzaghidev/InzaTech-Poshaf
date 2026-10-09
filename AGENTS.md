# InzaTech Web — Agent Instructions

## Role

Act as the Lead Frontend Engineer, UI Engineer, Design Systems Engineer, and Software Architect for the InzaTech Web project.

------------------------------------------------------------------------

## 1. Project Overview

InzaTech (InzaTech Poshaf) is a public web SaaS ecosystem inspired by Inzaghi's Sites. It combines Widgets, Portals, Explore (Tools), AI Apps, Blog Media, Services, and secondary Company pages.

Primary stack:
- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- shadcn/ui
- Lucide Icons

The initial frontend must be practical, scalable, responsive, accessible, and API-agnostic. Use mock/local/static data until integrations are intentionally introduced.

------------------------------------------------------------------------

## 2. Source of Truth

Before changing architecture or UI, read:
1. `AGENTS.md`
2. `DESIGN_SYSTEM.md`
3. `IMPLEMENTATION_PLAN.md`
4. `stitch-reference/` when visual/product context is required

When documents conflict, use this priority:
1. Explicit user instruction
2. `AGENTS.md`
3. `DESIGN_SYSTEM.md`
4. `IMPLEMENTATION_PLAN.md`
5. Stitch prototype
6. Existing implementation

Stitch is the primary visual/product reference, not production architecture. Preserve its useful visual direction and information architecture, but replace duplicated prototype patterns with reusable production components. Do not blindly copy the Stitch implementation. Do not redesign from scratch unless explicitly requested.

------------------------------------------------------------------------

## 3. Product

**InzaTech — The All-in-One AI Utility Platform**

Primary product areas:
- Home
- Widgets
- Portals
- Explore
- AI Apps
- Blog Media
- Services

------------------------------------------------------------------------

## 4. Navigation

Primary navigation:
- Home
- Widgets
- Portals
- Explore
- AI Apps
- Blog & Media
- About

Widgets:
- Weather Widget
- Stock Widget
- News Widget
- Translation Widget
- Unit Converter
- Calculator
- QR Code Generator
- Countdown Timer
- Analog Clock
- Calendar

Portals:
- Technology Tutorials
- Learning Portal
- IT Project Lists
- Language Portal
- Career Portal
- Muslims Portal

Explore:
- Converters
  - Common Converters
  - Engineering Converters
  - Electricity Converters
  - Fluid Converters
  - Heat Converters
- Calculators
  - Calculations Calculator
  - Mathematics Calculator
  - Statistics Calculator
  - Geometry Calculator
  - Health Calculator
  - Finance Calculator
- Formatters
  - Text Formatters
  - Code Formatters
  - Beautifiers
  - Minifier
- Generators
  - File Converter
  - Generators
  - Utilities
  - Testers

Apps:
- Tools
- AI Apps
- Widgets

Explore:
- Converters
  - Common Converters
  - Engineering Converters
  - Electricity Converters
  - Fluid Converters
  - Heat Converters
- Calculators
  - Calculations Calculator
  - Mathematics Calculator
  - Statistics Calculator
  - Geometry Calculator
  - Health Calculator
  - Finance Calculator
- Formatters
  - Text Formatters
  - Code Formatters
  - Beautifiers
  - Minifier
- Generators
  - File Converter
  - Generators
  - Utilities
  - Testers


Portals:
- Technology Tutorials
- Learning Portal
- IT Project Lists
- Language Portal
- Career Portal
- Muslims Portal

About:
- About
- Services
- Contact

Do not reintroduce `Apps` or `Learn` as primary navigation items.
`About` is not a primary navigation item; it may exist as a secondary/company page.

Use an accessible responsive mobile menu. Do not automatically add a sidebar to every page.

------------------------------------------------------------------------

## 5. Product Boundaries

- Widgets: independent top-level product area; not Tools, AI Apps, or Explore.
- Portals: independent top-level product area; not Tools, AI Apps, Widgets, or Explore.
- Explore: discovery area for Tools.
- AI Apps: independent top-level product area; not a subsection of Explore.
- Blog Media: independent content/media area; source is Inzaghi's Blog Aggregator.
- Services: independent top-level service area.

------------------------------------------------------------------------

## 6. Core Principles

- Build one coherent product, not unrelated AI-generated pages.
- Preserve the established futuristic SaaS identity without interpreting it as dark-only or neon-heavy.
- Reuse existing components before creating new ones.
- Prefer shadcn/ui primitives and compose them into InzaTech components.
- Use Lucide consistently; never use emoji as UI icons.
- Use TypeScript consistently and keep strict typing.
- Use Server Components by default; use Client Components only for genuine interactivity/browser state.
- Keep external integrations behind service/provider boundaries.
- Never expose secrets in client-side code.
- Design for mobile, tablet, laptop, desktop, and large desktop.
- Accessibility is a product requirement, not a later polish step.

------------------------------------------------------------------------

## 7. Theme Strategy — Mandatory

InzaTech supports **Light Mode and Dark Mode**.

### Light Mode
- Light Mode is the default and primary visual experience.
- Prioritize clarity, readability, professional SaaS presentation, and strong hierarchy.
- Avoid plain-white-everywhere layouts, excessive shadows, excessive gradients, and low-contrast text.

### Dark Mode
- Dark Mode is a fully supported alternative.
- Use deep navy/charcoal surfaces, restrained brand accents, and subtle borders.
- Avoid pure-black-everywhere layouts, neon overload, and glow-heavy UI.

### Shared architecture
Light and Dark must use the same:
- components;
- layout;
- typography;
- spacing;
- accessibility model;
- interaction states;
- business logic.

Do not create separate theme-specific pages or duplicate component trees.

### Theme tokens
Prefer semantic CSS variables:
`--background`, `--foreground`, `--card`, `--card-foreground`, `--popover`, `--popover-foreground`, `--primary`, `--primary-foreground`, `--secondary`, `--secondary-foreground`, `--muted`, `--muted-foreground`, `--accent`, `--accent-foreground`, `--destructive`, `--destructive-foreground`, `--border`, `--input`, `--ring`.

Initially support only Light and Dark. System theme detection is optional and not required. The user must be able to switch themes, the choice should persist, and obvious theme flashing should be minimized. Use accessible Sun/Moon Lucide icons.

------------------------------------------------------------------------

## 8. Anti-Vibe-Coding Rules

Avoid generic AI-generated visual patterns:
- Random gradients;
- Excessive purple/blue neon;
- Glowing borders everywhere;
- Excessive glassmorphism;
- Excessive rounded cards;
- Huge meaningless hero sections;
- Random icons;
- Inconsistent card/button styles;
- Inconsistent spacing/font sizes;
- Excessive shadows/animation;
- Dashboard cards where a simple content layout is more appropriate.

Visual effects must have a product or hierarchy purpose.

------------------------------------------------------------------------

## 9. Component Architecture

Use three layers:

### Layer 1 — Primitive UI
Use shadcn/ui for Button, Card, Input, Textarea, Select, Dialog, Sheet, Tabs, Badge, Tooltip, Dropdown Menu, Table, Calendar, Skeleton, Alert, Pagination, Separator, Breadcrumb, and similar primitives.

### Layer 2 — InzaTech Design Components
Examples:
- AppHeader
- AppFooter
- PageHeader
- SectionHeader
- SearchBar
- FilterBar
- EmptyState
- LoadingState
- ErrorState
- ToolCard
- PortalCard
- AIAppCard
- WidgetCard
- BlogCard
- ServiceCard
- CopyButton
- DownloadButton

### Layer 3 — Feature Components
Examples:
- CalculatorWorkspace
- ConverterWorkspace
- AIChatWorkspace
- CodeGeneratorWorkspace
- WeatherWidget
- StockWidget
- PortalContentGrid
- BlogArticle

Create a new abstraction only when the behavior is genuinely new.

------------------------------------------------------------------------

## 10. Architecture

Prefer:

```text
UI → Feature Components → Services → Provider / External API
```

Examples:

```text
WeatherWidget → weatherService → WeatherProvider
BlogArticle → blogService → InzaghiBlogAggregatorProvider
PortalContentGrid → portalService → NotionProvider
```

Initial implementations may use mock/local/static providers. UI must not depend directly on provider-specific APIs.
Keep provider-specific implementation details out of UI components.
Keep secrets server-side.
Avoid unnecessary vendor lock-in.

------------------------------------------------------------------------

## 11. Explore / Tools

Explore contains Tools only.

### Converters
- Common Converters
- Engineering Converters
- Electricity Converters
- Fluid Converters
- Heat Converters

### Calculators
- Calculations Calculator
- Mathematics Calculator
- Statistics Calculator
- Geometry Calculator
- Health Calculator
- Finance Calculator

### Formatters
- Text Formatters
- Code Formatters
- Beautifiers
- Minifier

### Other Tools
- File Converter
- Generators
- Utilities
- Tester Tools

Components:
ToolCard, ToolCategoryCard, ToolHeader, ToolWorkspace, ToolInput, ToolOutput, ToolResult, ToolActions, ToolHistory, ToolEmptyState, ToolErrorState.

Do not add Prompt Library.
Do not move AI Apps, Widgets, or Portals into Explore.

------------------------------------------------------------------------

## 12. AI Apps

Approved AI Apps:
- AI Chatbot
- AI Code Generator
- AI Image Generator
- AI Writer

Components:
AIAppCard, AIWorkspace, PromptInput, ModelSelector, GenerationControls, OutputPanel, CopyButton, DownloadButton, HistoryPanel, EmptyState, LoadingState, ErrorState.

Do not add additional AI Apps unless explicitly requested.
Do not add Prompt Library.

------------------------------------------------------------------------

## 13. Portals

Approved Portals:
- Technology Tutorials
- IT Project Lists
- Language Portal
- Learning Portal
- Career Portal
- Muslims Portal

Components:
PortalCard, PortalHeader, PortalSearch, PortalFilters, CategoryFilter, TagFilter, FeaturedContent, ContentGrid, ContentList, Pagination, EmptyState.

------------------------------------------------------------------------

## 14. Widgets

Widgets are an independent product category.

Possible future categories:
- Weather
- Stocks
- Sports
- Time
- Maps
- Media
- Utility widgets

Example widgets:
- Weather Widget
- Stock Widget
- News Widget
- Translation Widget
- Unit Converter
- Calculator
- QR Code Generator
- Countdown Timer
- Analog Clock
- Calendar

Components:
WidgetCard, WidgetHeader, WidgetBody, WidgetFooter, WidgetGrid, WidgetLoading, WidgetError.

Use mock/local data initially. Do not introduce external APIs without a concrete requirement.

------------------------------------------------------------------------

## 15. Blog Media

Primary navigation label: `Blog Media`
Suggested route: `/blog`, `/media`
Content source: **Inzaghi's Blog Aggregator**

Use mock/local data first; Inzaghi's Blog Aggregator later.

Components:
BlogCard, BlogGrid, BlogHeader, BlogArticle, BlogMeta, RelatedPosts, BlogPagination.

Do NOT implement:
- Blogger API
- Blogger credentials
- BloggerProvider
- Blogger-specific configuration
- Blogger-specific client code

Do not invent another blog provider. Use a service/adapter boundary when appropriate.

------------------------------------------------------------------------

## 16. Services

Services is a top-level product area.
Do not invent commercial service offerings unless defined in project documentation or explicitly requested.

------------------------------------------------------------------------

## 17. Footer

Groups:
- Products: Explore, AI Apps, Widgets, Portals, Blog Media, Services, InzaTech Mobile, Inzaghi's Sites
- Tools: Calculators, Converters, Formatters, Generators, Utilities, All Tools
- AI Apps: AI Chatbot, AI Writer, AI Code Generator, AI Image Generator
- Portals: Technology Tutorials, Learning Portal, IT Project Lists, Language Portal, Career Portal, Muslims Portal, All Portals
- Company: About, Contact, Sitemap
- Legal: Privacy Policy, Terms of Service, Disclaimer, Cookie Policy
- Social: GitHub, LinkedIn, YouTube, Threads, Instagram, TikTok, X/Twitter

Brand:
`InzaTech — The All-in-One AI Utility Platform`

Footer copy:
`© 2026 InzaTech. All rights reserved.`
`Powered by Next.js • React • Tailwind CSS`
`Made with ❤️ in Indonesia`

------------------------------------------------------------------------

## 18. Responsive Design

Support mobile/tablet/laptop/desktop/large desktop intentionally. Mobile must have usable navigation, touch-friendly controls, readable typography, usable tool workspaces, responsive tables, and no accidental horizontal overflow.

------------------------------------------------------------------------

## 19. Accessibility

Use semantic HTML, keyboard navigation, visible focus, accessible labels, appropriate ARIA, sufficient contrast, logical headings, accessible dialogs/menus, reduced-motion support, and meaningful form validation. Do not communicate state using color alone.

------------------------------------------------------------------------

## 20. Animation

Animation must be subtle and purposeful. Respect `prefers-reduced-motion`. Avoid constant motion, glow animation, distracting parallax, and long delays.

------------------------------------------------------------------------

## 21. SEO

Use meaningful H1-H3 hierarchy, metadata, Open Graph, canonical URLs where applicable, sitemap, robots, and structured data where justified.

------------------------------------------------------------------------

## 22. Engineering Rules

Before creating a component:
1. Search for an existing component.
2. Check shadcn/ui primitives.
3. Check shared InzaTech components.
4. Extend existing abstractions when appropriate.
5. Create a new component only when necessary.

Do not:
- rewrite working code unnecessarily
- duplicate components
- introduce unnecessary dependencies
- introduce unnecessary state management
- create unnecessary APIs
- create an unnecessary dashboard
- expose secrets
- create generic AI-generated pages without product context

------------------------------------------------------------------------

## 23. Code Quality

Prefer explicit types, focused components, predictable data flow, feature-local logic where appropriate, and shared utilities only when genuinely shared. Avoid unnecessary `any`, giant components, duplicate business logic, duplicate constants, hard-coded secrets, and unnecessary client state.

------------------------------------------------------------------------

## 24. Agent Workflow

Before changing code:
1. Read the docs.
2. Inspect current code.
3. Search for reusable components.
4. Inspect the relevant Stitch reference.
5. Identify architecture/theme/responsive implications.
6. Implement the smallest coherent change.
7. Test Light and Dark.
8. Test responsive behavior.
9. Run relevant checks.
10. Update docs if architecture/design rules changed.

------------------------------------------------------------------------

## 25. Validation

Before considering work complete:
- `npm run lint`
- `npm run build`
- verify visual consistency and functionality
- verify Light Mode
- verify Dark Mode
- verify responsive layouts
- verify keyboard navigation
- verify focus states
- verify semantic HTML
- verify accessibility
- verify TypeScript passes
- verify no console errors
