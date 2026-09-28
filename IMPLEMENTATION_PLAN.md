# IMPLEMENTATION_PLAN.md — InzaTech Implementation Plan

## 1. Objective

Build InzaTech as a cohesive production-oriented web SaaS platform with Next.js App Router, React, TypeScript, Tailwind CSS, shadcn/ui, and Lucide Icons.

The first priority is architecture, design system, theme system, reusable components, responsive shell, core product surfaces, accessibility, testing, performance, and only then external integrations.

Initial UI must work with local/mock/static data.

------------------------------------------------------------------------

## 2. Product Structure

Primary navigation:
```text
Home | Apps | Learn | Blog | About
```

Apps:
- Tools
- AI Apps
- Widgets

Learn:
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

Do not spread external API details through UI components.

## Phase 0 — Repository Inspection and Baseline

Tasks:
- inspect routes;
- inspect components;
- inspect package configuration;
- inspect Tailwind/global styles;
- inspect assets;
- inspect Stitch reference;
- identify reusable work;
- identify duplicated UI;
- identify architecture conflicts.

Deliverable: documented understanding and confirmed implementation sequence.

Gate: no broad rewrite before understanding the repository.

## Phase 1 — Design System, Themes, Tokens, Primitives

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
Establish display, H1-H4, body, small, caption, and label hierarchy.

### 1.6 Spacing/radius/elevation
Establish consistent scales for spacing, radius, borders, and restrained elevation.

### 1.7 shadcn/ui primitives
Standardize Button, Card, Input, Textarea, Select, Dialog, Sheet, Tabs, Badge, Tooltip, Dropdown Menu, Table, Calendar, Skeleton, Alert, Pagination, Separator, Breadcrumb.

### Gate
The same primitives must render correctly in Light and Dark.

## Phase 2 — Application Shell

Implement:
```text
AppShell
├── Header
├── Main
└── Footer
```

Header:
- Home
- Apps
- Learn
- Blog
- About
- theme switcher;
- mobile menu.

Footer groups:
Products, Tools, AI Apps, Portals, Company, Legal, Social.

Validate desktop, tablet, mobile, both themes, keyboard and focus.

## Phase 3 — Home

Use Stitch as the primary visual reference. Preserve product identity, information hierarchy, and important sections while improving component reuse, spacing, typography, responsive behavior, accessibility, and theme support.

Possible sections:
- hero/product introduction;
- Apps discovery;
- Tools;
- AI Apps;
- Widgets;
- Portals;
- Blog;
- CTA.

Do not make the hero unnecessarily tall.

## Phase 4 — Apps Directory

Build a unified Apps discovery surface for Tools, AI Apps, and Widgets.

Implement:
- page header;
- search;
- categories;
- filters where justified;
- responsive grid;
- empty state.

Reuse AppCard, ToolCard, AIAppCard, WidgetCard, CategoryFilter, SearchBar.

## Phase 5 — Tools Foundation

Taxonomy:
- Calculators: Basic, Mathematics, Statistics, Geometry, Finance, Health
- Converters: Common, Engineering, Electricity, Fluid, Heat
- Formatters: Text, Code, Beautifiers, Minifiers
- Other: File Converter, Generators, Utilities, Tester Tools

Components:
ToolCard, ToolCategoryCard, ToolHeader, ToolWorkspace, ToolInput, ToolOutput, ToolResult, ToolActions, ToolHistory, ToolEmptyState, ToolErrorState.

Implement a representative initial set such as Basic Calculator, Unit Converter, Text Formatter, JSON Formatter, and Password Generator using local computation.

## Phase 6 — AI Apps

Implement:
- AI directory;
- AIAppCard;
- AIWorkspace;
- PromptInput;
- ModelSelector abstraction;
- GenerationControls;
- OutputPanel;
- Copy/Download;
- History;
- Loading/Error/Empty states.

Initial apps:
- AI Chatbot;
- AI Writer;
- AI Code Generator;
- AI Image Generator;
- AI Prompt Library.

Use mock/local responses initially. Provider-specific logic belongs behind services.

## Phase 7 — Widgets

Implement WidgetCard, WidgetHeader, WidgetBody, WidgetFooter, WidgetGrid, WidgetLoading, WidgetError.

Initial widgets:
- Date & Time;
- Calendar;
- Weather;
- Stocks;
- Maps;
- Music;
- Sports.

Use mock data initially.

## Phase 8 — Portals

Implement PortalCard, PortalHeader, PortalSearch, PortalFilters, CategoryFilter, TagFilter, FeaturedContent, ContentGrid, ContentList, Pagination, EmptyState.

Initial portals:
- Technology Tutorials;
- IT Project Lists;
- Language Portal;
- Learning Portal;
- Career Portal;
- Muslims Portal.

Use mock content first. Do not couple initial UI directly to Notion.

## Phase 9 — Blog

Implement BlogHeader, BlogCard, BlogGrid, BlogArticle, BlogMeta, RelatedPosts, BlogPagination.

Initial source: mock/local data.
Future source: Blogger API.

Prioritize reading typography, line length, hierarchy, media, and article navigation.

## Phase 10 — Company

Implement:
- About;
- Services;
- Contact.

Use clear headers, structured content, accessible forms, and responsive layouts. Avoid overdesign.

## Phase 11 — Legal

Implement:
- Privacy Policy;
- Terms of Service;
- Disclaimer;
- Cookie Policy.

Use a consistent legal-document layout.

## Phase 12 — SEO and Metadata

Implement:
- route metadata;
- titles/descriptions;
- Open Graph;
- canonical URLs where applicable;
- sitemap;
- robots;
- structured data where justified.

## Phase 13 — Accessibility Audit

Audit:
- keyboard;
- focus;
- headings;
- labels;
- form errors;
- contrast;
- dialogs/menus;
- tables;
- responsive behavior;
- reduced motion.

Test both themes.

## Phase 14 — Testing

Test UI components, variants, states, representative tool correctness, navigation, mobile menu, footer links, theme switching, theme persistence, and semantic token behavior.

## Phase 15 — Performance

Review bundle size, unnecessary client components, images, lazy loading, code splitting, expensive calculations, repeated fetching, and layout shifts.

Prefer Server Components where possible.

## Phase 16 — External API Integration

Only after the UI architecture is stable, integrate potential services:
- Notion API;
- Blogger API;
- AI provider APIs;
- weather;
- stocks;
- Spotify;
- sports;
- maps;
- other providers as required.

Use service/provider boundaries. Keep secrets server-side.

## Phase 17 — Production Deployment

Prepare environment variables, production build, deployment configuration, error handling, metadata, sitemap, robots, monitoring strategy, and documentation. Never commit secrets.

------------------------------------------------------------------------

## 4. Migration Strategy

If existing implementation exists, migrate incrementally:

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
Landing
↓
Apps
↓
Tools
↓
AI
↓
Widgets
↓
Portals
↓
Blog
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

## 9. Agent Workflow

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

## 10. Final Product Objective

InzaTech should be one coherent SaaS platform rather than a collection of generated pages.

```text
                    InzaTech
                       │
        ┌──────────────┼──────────────┐
        │              │              │
       Apps           Learn           Blog
        │              │
   ┌────┼────┐    ┌────┼──────────────┐
 Tools AI  Widgets  Tutorials Portals Projects
```

All surfaces share the same design tokens, typography, interaction language, component architecture, accessibility standards, responsive principles, and Light/Dark theme system.
