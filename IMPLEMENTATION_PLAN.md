# InzaTech Web — Implementation Plan

## 1. Objective

Build InzaTech as a cohesive production-oriented web SaaS platform with Next.js App Router, React, TypeScript, Tailwind CSS, shadcn/ui, and Lucide Icons.

The first priority is architecture, design system, theme system, reusable components, responsive shell, core product surfaces, accessibility, testing, performance, and only then external integrations.

Initial UI must work with local/mock/static data.

------------------------------------------------------------------------

## 2. Product Baseline

Primary navigation:
1. Home
2. Widgets
3. Portals
4. Explore
5. AI Apps
6. Blog Media
7. Services

Product boundaries:
- Explore contains Tools.
- AI Apps is top-level.
- Widgets is top-level.
- Portals is top-level.
- Blog Media uses Inzaghi's Blog Aggregator.
- Services is top-level.
- Apps, Learn, and About are not primary navigation items.

------------------------------------------------------------------------

## 3. Architecture

```text
App Router
  ↓
App Shell
  ↓
Feature Components
  ↓
Services
  ↓
Providers / APIs
```

Prefer:
```text
UI
↓
Feature
↓
Service
↓
Provider / Data Source
```

Do not spread external API details through UI components.

Initial data strategy:
- mock data
- local data
- static data
- local computation

Do not block frontend architecture on external APIs.

## Phase 0 — Repository 

Inspect:
- repository
- `package.json`
- `src/`
- `app/`
- `components/`
- `styles/`
- Tailwind/global styles
- shadcn configuration
- assets
- services
- existing APIs
- Stitch reference
- documentation
- existing routes
- existing themes
- existing reusable components
- duplicated UI

Output:
- architecture audit
- reusable components
- existing product areas
- conflicts
- missing foundation
- recommended implementation order

Deliverable: documented understanding and confirmed implementation sequence.

Do not modify code unnecessarily during the audit.

Gate: no broad rewrite before understanding the repository.

## Phase 1 — Project Foundation, Design System, Themes, Tokens, Primitives

Establish or verify:
- Next.js App Router
- TypeScript
- Tailwind CSS
- shadcn/ui
- Lucide
- semantic design tokens
- typography
- global CSS
- Light Mode
- Dark Mode
- theme switching
- import aliases
- base accessibility

### 1.1 Semantic tokens
Establish:
`background`, `foreground`, `card`, `card-foreground`, `popover`, `popover-foreground`, `primary`, `primary-foreground`, `secondary`, `secondary-foreground`, `muted`, `muted-foreground`, `accent`, `accent-foreground`, `destructive`, `destructive-foreground`, `border`, `input`, `ring`.

### 1.2 Light Theme
Light Mode is default/primary. Define page background, foreground, cards, popovers, actions, muted surfaces/text, borders, inputs, focus, and destructive states. Validate contrast and hierarchy.

### 1.3 Dark Theme
Define matching semantic values for Dark Mode. Use the same components; do not create alternate component implementations.

### 1.4 Theme system
Implement:
- Light;
- Dark;
- Light as default;
- accessible theme switcher;
- persistent preference;
- minimized theme flash.

System theme is not required initially.

### 1.5 Typography
Establish display, H1-H4, body, small, caption, and label hierarchy. Primary font: Inter (see `DESIGN_SYSTEM.md`).

### 1.6 Spacing/radius/elevation
Establish consistent scales for spacing, radius, borders, and restrained elevation.

### 1.7 shadcn/ui primitives
Standardize Button, Card, Input, Textarea, Select, Dialog, Sheet, Tabs, Badge, Tooltip, Dropdown Menu, Table, Calendar, Skeleton, Alert, Pagination, Separator, Breadcrumb.

Validate:
- lint
- type checking
- build
- responsive base
- accessibility base

### Gate
The same primitives must render correctly in Light and Dark.

## Phase 2 — Application Shell

Build/refine:
- root layout
- Navbar
- Mobile Navigation
- Footer
- page container
- theme switcher
- global navigation configuration

Implement:
```text
AppShell
├── Header
├── Main
└── Footer
```

Primary Navbar:
```text
Home
Widgets
Portals
Explore
AI Apps
Blog Media
Services
```

Do not add Apps, Learn, or About to the primary navigation.

The navigation should be data-driven and reusable.

Footer groups:
Products, Tools, AI Apps, Portals, Company, Legal, Social.

Validate desktop, tablet, mobile, both themes, keyboard and focus.

## Phase 3 — Home

Build the main landing experience.

Use Stitch as the primary visual reference. Preserve product identity, information hierarchy, and important sections while improving component reuse, spacing, typography, responsive behavior, accessibility, and theme support.

Potential sections:
- Hero
- Platform Overview
- Featured Widgets
- Featured Portals
- Featured Tools
- Featured AI Apps
- Blog Media Highlights
- Services Highlights
- CTA

Do not create an oversized meaningless hero.
Do not make the hero unnecessarily tall.

## Phase 4 — Widgets

Build:
- Widget directory
- Widget categories
- WidgetCard
- WidgetGrid
- WidgetHeader
- WidgetBody
- WidgetFooter
- WidgetLoading
- WidgetError
- Widget detail pages
- loading states
- empty states
- error states

Initial widgets (mock data):
- Date & Time
- Calendar
- Weather
- Stocks
- Maps
- Music
- Sports

Use local/mock/static data initially.

Potential future integrations:
- Weather
- Stocks
- Sports
- Time
- Maps
- Media

Do not integrate external APIs without a concrete product requirement.

## Phase 5 — Portals

Build:
- Portal directory
- PortalCard
- PortalHeader
- PortalSearch
- PortalFilters
- CategoryFilter
- TagFilter
- FeaturedContent
- ContentGrid
- ContentList
- Pagination
- EmptyState
- Portal detail pages

Approved Portals:
1. Technology Tutorials
2. IT Project Lists
3. Language Portal
4. Learning Portal
5. Career Portal
6. Muslims Portal

Use mock content first. Do not couple initial UI directly to Notion.
Keep Portal architecture reusable.

## Phase 6 — Explore / Tools

Explore contains Tools only.

### 6.1 Converters
- Common Converters
- Engineering Converters
- Electricity Converters
- Fluid Converters
- Heat Converters

### 6.2 Calculators
- Calculations Calculator
- Mathematics Calculator
- Statistics Calculator
- Geometry Calculator
- Health Calculator
- Finance Calculator

### 6.3 Formatters
- Text Formatters
- Code Formatters
- Beautifiers
- Minifier

### 6.4 Other Tools
- File Converter
- Generators
- Utilities
- Tester Tools

Build reusable:
- ToolCard
- ToolCategoryCard
- ToolHeader
- ToolWorkspace
- ToolInput
- ToolOutput
- ToolResult
- ToolActions
- ToolHistory
- ToolEmptyState
- ToolErrorState

Implement a representative initial set such as Calculations Calculator, Unit Converter, Text Formatter, JSON Formatter, and Password Generator using local computation.

Do not add Prompt Library.
Do not move AI Apps, Widgets, or Portals into Explore.

## Phase 7 — AI Apps

AI Apps are a top-level product area.

Approved:
- AI Chatbot
- AI Code Generator
- AI Image Generator
- AI Writer

Build:
- AIAppCard
- AI directory
- AI detail pages
- AIWorkspace
- PromptInput
- ModelSelector abstraction
- GenerationControls
- OutputPanel
- CopyButton
- DownloadButton
- HistoryPanel where appropriate
- EmptyState
- LoadingState
- ErrorState

Use mock/local functionality and responses initially. Provider-specific logic belongs behind services.

Do not add Prompt Library or additional AI Apps without explicit approval.

## Phase 8 — Blog Media

Build:
- Blog Media landing page
- BlogGrid
- BlogCard
- BlogHeader
- BlogArticle
- BlogMeta
- RelatedPosts
- BlogPagination
- Article detail

Primary navigation label: `Blog Media`
Recommended route: `/blog`
Content source: **Inzaghi's Blog Aggregator**

Initial source: mock/local data.
Future source: Inzaghi's Blog Aggregator.

Prioritize reading typography, line length, hierarchy, media, and article navigation.

Recommended architecture:
```text
Blog UI
↓
Blog Service / Adapter
↓
Inzaghi's Blog Aggregator
```

Do not implement:
- Blogger API
- Blogger credentials
- BloggerProvider
- Blogger-specific configuration
- Blogger-specific client code
- another invented blog provider

Keep source/provider details out of presentation components.

## Phase 9 — Services

Build:
- Services landing page
- ServiceCard
- ServiceGrid
- ServiceHeader
- ServiceDetail
- ServiceCTA

Only implement approved InzaTech services.
Do not invent commercial offerings.
Use static/local configuration initially.

## Phase 10 — Secondary Company Pages

These are not primary navigation items.

Possible pages:
- About
- Contact
- Company information
- Sitemap

About may be linked through the footer or other secondary navigation.

Use clear headers, structured content, accessible forms, and responsive layouts. Avoid overdesign.

Do not promote About to the primary Navbar unless explicitly requested.

## Phase 11 — Legal

Build:
- Privacy Policy
- Terms of Service
- Disclaimer
- Cookie Policy

Use a consistent legal-document layout.

## Phase 12 — SEO and Metadata

Implement:
- route metadata
- title templates
- descriptions
- Open Graph
- Twitter/X metadata
- canonical URLs where applicable
- sitemap
- robots.txt
- structured data where justified

Pay attention to:
- `/widgets`
- `/portals`
- `/explore`
- `/ai-apps`
- `/blog`
- `/services`

## Phase 13 — Accessibility Audit

Audit:
- keyboard navigation
- focus states
- headings
- contrast
- semantic HTML
- labels
- forms and form errors
- dialogs
- dropdowns
- menus
- tables
- navigation
- mobile navigation
- responsive behavior
- reduced motion

Test:
- Light Mode
- Dark Mode
- Mobile
- Tablet
- Desktop

Do not communicate important state through color alone.

## Phase 14 — Testing

Test:
- components
- variants
- routes
- navigation
- mobile menu
- footer links
- tools (representative tool correctness)
- widgets
- AI interfaces
- portals
- Blog Media
- services
- theme switching
- theme persistence
- semantic token behavior
- responsive behavior
- empty states
- loading states
- error states

Run:
- lint
- type checking
- build
- relevant automated tests

## Phase 15 — Performance

Audit:
- Server Components
- Client Components
- image optimization
- lazy loading
- code splitting
- font loading
- bundle size
- unnecessary JavaScript
- expensive calculations
- repeated fetching
- layout shifts
- caching
- rendering strategy
- API calls

Prefer Server Components where possible.
Avoid unnecessary client-side rendering.

## Phase 16 — External Integrations

Only after the UI architecture is stable, and only when a real integration solves an approved product requirement.

Potential integrations:
- Notion API
- Inzaghi's Blog Aggregator
- AI providers
- Weather
- Stocks
- Sports
- Maps
- Spotify
- other approved services

Use:
```text
UI
↓
Feature
↓
Service
↓
Provider
```

Never expose secrets to the client. Keep secrets server-side.

Design provider boundaries so implementations can be replaced later.

## Phase 17 — Deployment

Deploy InzaTech to the selected hosting platform.

Current deployment target:
**Netlify**

Keep the application as hosting-agnostic as reasonably possible.

Prepare:
- environment variables
- production build
- deployment configuration
- error handling
- metadata, sitemap, robots
- monitoring strategy
- documentation

Never commit secrets.

Validate:
- production build
- environment variables
- redirects
- headers
- caching
- SEO
- production navigation
- error handling
- performance
- mobile behavior
- theme switching

------------------------------------------------------------------------

## 4. Migration Strategy

If an existing implementation exists, migrate incrementally:

```text
Global Styles
↓
Design Tokens
↓
Typography
↓
Theme System
↓
Navbar
↓
Footer
↓
Buttons
↓
Cards
↓
Forms
↓
Page Headers
↓
Home
↓
Widgets
↓
Portals
↓
Explore / Tools
↓
AI Apps
↓
Blog Media
↓
Services
↓
Company
↓
Legal
↓
SEO
↓
Accessibility
↓
Testing
↓
Performance
↓
APIs
```

Do not rewrite the entire project simply to make it conform.

------------------------------------------------------------------------

## 5. Anti-Vibe-Coding Rules

Reject changes that introduce random gradients, excessive neon, glow everywhere, excessive glassmorphism, arbitrary rounded cards, random icons, excessive animation, meaningless dashboard layouts, inconsistent variants, or page-specific design systems.

When visual impressiveness conflicts with usability, prioritize usability.

------------------------------------------------------------------------

## 6. Quality Gates

### Visual
Hierarchy, typography, spacing, alignment, card/button consistency, Light Mode, Dark Mode, responsive behavior.

### Component
Reuse, variants, states, semantic tokens, shadcn composition.

### UX
Discoverability, task completion, mobile usability, loading, empty, error recovery.

### Accessibility
Keyboard, focus, contrast, labels, semantics, reduced motion.

### Code
TypeScript, lint, build, no duplicate logic, no secrets, correct server/client boundaries.

------------------------------------------------------------------------

## 7. Definition of Done

A feature is complete when:
1. it follows the design system;
2. it works in Light Mode;
3. it works in Dark Mode;
4. it is responsive;
5. appropriate loading/empty/error states exist;
6. it is keyboard accessible;
7. shared components are reused where appropriate;
8. unnecessary duplicate abstractions are not introduced;
9. APIs remain behind service/provider boundaries;
10. TypeScript/lint/build checks pass where applicable;
11. documentation is updated if architecture changes.

------------------------------------------------------------------------

## 8. Recommended Initial Milestone

Complete Phase 0 + Phase 1 + Phase 2 + Phase 3 before expanding into every feature category.

The first stable milestone is:
- repository understood;
- design system established;
- Light/Dark system working;
- shared shell working;
- homepage implemented.

------------------------------------------------------------------------

## 9. Route Direction

Recommended conceptual route structure:

```text
/
├── widgets/
│   └── [slug]/
├── portals/
│   └── [slug]/
├── explore/
│   └── tools/
│       └── [slug]/
├── ai-apps/
│   └── [slug]/
├── blog/
│   └── [slug]/
└── services/
    └── [slug]/
```

The visible navigation label may be `Blog Media` while the URL remains `/blog`.

Do not create unnecessary route nesting.

------------------------------------------------------------------------

## 10. Anti-Overbuilding Rules

Do not implement prematurely:
- Authentication
- Dashboard
- Database
- Admin panel
- CMS
- Complex global state
- Unnecessary API integrations
- Unnecessary dependencies

A dashboard should only be introduced when requirements such as accounts, history, favorites, personalization, or saved data actually exist.

------------------------------------------------------------------------

## 11. Completion Criteria

A phase is complete only when it is:
- visually coherent
- functional
- responsive
- accessible
- type-safe
- lint-clean
- buildable
- reusable
- consistent with the Design System
- consistent with the current Information Architecture

Every new page must feel like it belongs to the same InzaTech ecosystem.

------------------------------------------------------------------------

## 12. Agent Workflow

For every feature:
1. Read AGENTS.md, DESIGN_SYSTEM.md, and the relevant plan section.
2. Inspect relevant Stitch references.
3. Search existing components and services.
4. Plan reusable primitives and feature components.
5. Implement the smallest coherent change.
6. Validate Light/Dark, mobile/desktop, keyboard, loading, empty, and error states.
7. Remove duplicate abstractions.
8. Run relevant checks.
9. Update documentation if the system changes.

------------------------------------------------------------------------

## 13. Final Product Objective

InzaTech should be one coherent SaaS platform rather than a collection of generated pages.

```text
                              InzaTech
                                 │
   ┌──────────┬──────────┬───────┴───┬──────────┬────────────┬──────────┐
 Home      Widgets    Portals     Explore    AI Apps     Blog Media  Services
                                     │
                                   Tools
```

All surfaces share the same design tokens, typography, interaction language, component architecture, accessibility standards, responsive principles, and Light/Dark theme system.
