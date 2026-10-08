# InzaTech Web — Design System

## 1. Purpose

This document is the visual and interaction source of truth for InzaTech Web. Every surface — Home, Widgets, Portals, Explore, AI Apps, Blog Media, Services, About, Contact, and Legal — should feel like the same product.

The Google Stitch prototype is the primary visual reference for the initial product direction. This document translates that direction into a reusable production design system.

------------------------------------------------------------------------

## 2. Product Identity

**InzaTech — The All-in-One AI Utility Platform**

Visual direction:
- Modern
- Futuristic
- Professional
- Technical
- Practical
- Clean
- Premium
- Developer-friendly
- Utility-oriented

Futuristic does NOT mean:
- dark-only
- neon-heavy
- excessive gradients
- excessive glow
- excessive glassmorphism

The product must feel like one unified platform.

------------------------------------------------------------------------

## 3. Theme

InzaTech supports:
- Light Mode
- Dark Mode

Light Mode is the default and primary visual experience.
Dark Mode is the alternative.

Both themes share:
- components
- layouts
- typography
- spacing
- interaction patterns
- semantic tokens
- accessibility model
- business logic

Do not create duplicate theme pages.
Use semantic CSS variables/design tokens.
Use a theme switcher with Lucide Sun/Moon icons.
Initially support only Light and Dark.

### Light Mode

Priorities:
- readability;
- clarity;
- professional SaaS appearance;
- clean layered surfaces;
- strong information hierarchy.

Use soft neutral page backgrounds, readable foregrounds, white/near-white content surfaces, restrained borders, subtle shadows, controlled brand color, and accessible focus indicators.

Avoid pure-white-everywhere layouts, low-contrast gray text, excessive borders, and heavy shadows.

### Dark Mode

Use layered deep navy/charcoal surfaces, readable light foregrounds, restrained blue/cyan accents where appropriate, subtle borders, and limited elevation.

Avoid pure-black-everywhere layouts, neon overload, glowing borders on every card, excessive cyan/purple effects, and low-contrast muted text.

------------------------------------------------------------------------

## 4. Theme Architecture

Use semantic tokens rather than hard-coded theme colors.

```text
Component → Semantic Token → Light/Dark Theme Value
```

Recommended tokens:
```css
--background
--foreground
--card
--card-foreground
--popover
--popover-foreground
--primary
--primary-foreground
--secondary
--secondary-foreground
--muted
--muted-foreground
--accent
--accent-foreground
--destructive
--destructive-foreground
--border
--input
--ring
```

Add tokens only for reusable semantic needs. Never create a theme-specific component just to change colors.
Do not hardcode theme-specific colors inside feature components.

------------------------------------------------------------------------

## 5. Brand Color

Brand color should establish identity without dominating every component. Stronger brand color belongs on primary CTAs, selected navigation, important links, active states, and key product actions. Most content surfaces should remain neutral.

------------------------------------------------------------------------

## 6. Typography

Use a modern readable sans-serif family. Establish a consistent hierarchy:
- Display
- H1
- H2
- H3
- H4
- Body Large
- Body
- Body Small
- Caption
- Label

Prioritize readability, hierarchy, technical clarity, consistent scale, and appropriate line length.
Avoid arbitrary page-specific font sizes, excessive font-size variation, and oversized headings that consume most of the viewport.

Primary font: **Inter** — the signature typeface of Inzaghi's Sites, Inzaghi's Blog,
and Inzaghi's Media. InzaTech Web must use Inter for UI and body text, and the
same font family must be used across Light and Dark themes.

------------------------------------------------------------------------

## 7. Spacing

Use a tokenized scale such as:
`xs`, `sm`, `md`, `lg`, `xl`, `2xl`, `3xl`, `4xl`.

Smaller spacing is for controls and compact groups; larger spacing is for sections and major content groups. Avoid arbitrary values when an existing token works. Avoid arbitrary one-off spacing values unless there is a clear layout reason. Maintain predictable vertical rhythm.

------------------------------------------------------------------------

## 8. Layout

Use a consistent centered content container with responsive gutters. Specialized workspaces such as calculators, code editors, data-heavy tools, and reading views may use different max-widths when justified.

------------------------------------------------------------------------

## 9. Radius

Use restrained levels:
`sm`, `md`, `lg`, `xl`, `full`.

Use smaller radii for controls, medium for cards, larger for prominent containers, and full for pills/badges. Do not maximize rounding on every element.

------------------------------------------------------------------------

## 10. Borders and Elevation

Borders support cards, form controls, separators, tables, and navigation groups. Do not border every nested element.

Use restrained elevation: none, subtle, medium, prominent. In Dark Mode, borders often communicate hierarchy better than strong shadows.

Prefer restrained surfaces and borders. Avoid glowing borders everywhere, heavy shadows, excessive glassmorphism, and excessive nested cards. Not every section needs a card.

------------------------------------------------------------------------

## 11. Primary Navigation

1. Home
2. Widgets
3. Portals
4. Explore
5. AI Apps
6. Blog Media
7. Services

Navigation must be clear, compact, accessible, scalable, and responsive.

Do not use `Apps`, `Learn`, or `About` as primary navigation items.

Mobile uses an accessible menu. Selected navigation needs a clear state without glow dependence.

------------------------------------------------------------------------

## 12. Information Architecture

```text
Home
├── Featured Widgets
├── Featured Portals
├── Featured Tools
├── Featured AI Apps
├── Blog Media Highlights
└── Services Highlights

Widgets
├── Widget Directory
└── Widget Detail

Portals
├── Technology Tutorials
├── IT Project Lists
├── Language Portal
├── Learning Portal
├── Career Portal
└── Muslims Portal

Explore
└── Tools

AI Apps
├── AI Chatbot
├── AI Code Generator
├── AI Image Generator
└── AI Writer

Blog Media
└── Inzaghi's Blog Aggregator

Services
└── InzaTech Services
```

------------------------------------------------------------------------

## 13. Explore

Explore is the discovery area for Tools. It does not contain AI Apps, Widgets, or Portals.

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

Do not add Prompt Library unless explicitly requested.

------------------------------------------------------------------------

## 14. AI Apps

AI Apps are a top-level product area.

Approved:
- AI Chatbot
- AI Code Generator
- AI Image Generator
- AI Writer

Do not add additional AI Apps without explicit approval.
Do not add Prompt Library.

------------------------------------------------------------------------

## 15. Widgets

Widgets are a top-level product area, not Tools and not AI Apps.

Potential categories:
- Weather
- Stocks
- Sports
- Time
- Maps
- Media
- Utility widgets

Use mock/local data initially.

------------------------------------------------------------------------

## 16. Portals

Portals are a top-level product area.

Approved:
- Technology Tutorials
- IT Project Lists
- Language Portal
- Learning Portal
- Career Portal
- Muslims Portal

Portals are not Tools, AI Apps, Widgets, or Explore categories.

------------------------------------------------------------------------

## 17. Blog Media

Primary navigation label: `Blog Media`
Suggested route: `/blog`
Content source: **Inzaghi's Blog Aggregator**

Preferred boundary:
```text
Blog UI
↓
Blog Service / Adapter
↓
Inzaghi's Blog Aggregator
```

Do not introduce Blogger API or Blogger-specific architecture.

------------------------------------------------------------------------

## 18. Services

Services is a top-level product area.
Do not invent commercial offerings unless defined in project documentation or explicitly requested.

------------------------------------------------------------------------

## 19. Component Hierarchy

### Layer 1 — Primitive UI
- Button
- Input
- Textarea
- Select
- Dialog
- Sheet
- Dropdown Menu
- Tabs
- Card
- Badge
- Tooltip
- Table
- Calendar
- Skeleton
- Alert
- Pagination
- Separator
- Breadcrumb

Prefer shadcn/ui primitives where appropriate.

### Layer 2 — InzaTech Design Components
- AppShell
- Navbar
- MobileNav
- Footer
- PageHeader
- SectionHeader
- ThemeToggle
- SearchBar
- FilterBar
- EmptyState
- LoadingState
- ErrorState

### Layer 3 — Feature Components

Widgets:
- WidgetCard
- WidgetGrid
- WidgetHeader
- WidgetBody
- WidgetFooter
- WidgetLoading
- WidgetError

Portals:
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

Tools:
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

AI Apps:
- AIAppCard
- AIWorkspace
- PromptInput
- ModelSelector
- GenerationControls
- OutputPanel
- CopyButton
- DownloadButton
- HistoryPanel
- EmptyState
- LoadingState
- ErrorState

Blog Media:
- BlogCard
- BlogGrid
- BlogHeader
- BlogArticle
- BlogMeta
- RelatedPosts
- BlogPagination

Services:
- ServiceCard
- ServiceGrid
- ServiceHeader
- ServiceDetail
- ServiceCTA

Create components as needed; do not create the entire inventory upfront.

------------------------------------------------------------------------

## 20. Component Naming

Prefer responsibility-based names: `ToolCard`, `ToolWorkspace`, `PageHeader`, `PortalSearch`, `BlogArticle`.

Avoid vague names such as `Box`, `Thing`, `Section2`, `CardNew`, or `CoolPanel`.

------------------------------------------------------------------------

## 21. Buttons

Variants:
- Primary
- Secondary
- Outline
- Ghost
- Destructive
- Link

Sizes:
- Small
- Default
- Large
- Icon

All buttons require consistent height, icon placement, focus, disabled state, and loading state where relevant.

------------------------------------------------------------------------

## 22. Forms

Inputs, selects, textareas, and other controls share height, typography, radius, border, focus, disabled, and validation conventions.

Form anatomy:
`Label → Control → Description/Help → Error`

Errors must not rely only on red color.

------------------------------------------------------------------------

## 23. Cards

Cards group related information. They are useful for tools, AI apps, widgets, portals, blog posts, services, and feature groups. They are not the default container for every piece of content.

Typical anatomy:
`Card → Header → Content → Footer`

------------------------------------------------------------------------

## 24. Page Headers

Reusable structure:
`Eyebrow/Category → Title → Description → Optional Actions`

Page headers should be strong but compact. Avoid oversized heroes on utility/discovery pages.

------------------------------------------------------------------------

## 25. Theme Switcher

Support Light/Dark only initially. Use accessible Lucide Sun/Moon icons. Persist the choice and minimize visible theme flashing. Do not use emoji.

------------------------------------------------------------------------

## 26. App Shell

```text
AppShell
├── Header
├── Main
└── Footer
```

The shell establishes page background, container, navigation, theme, typography, and global responsive behavior.

------------------------------------------------------------------------

## 27. Footer

Groups:
- Products
- Tools
- AI Apps
- Portals
- Company
- Legal
- Social

Keep the footer structured and readable on mobile. Brand: `InzaTech — The All-in-One AI Utility Platform`.

------------------------------------------------------------------------

## 28. Tool UI

Task-oriented structure:
```text
ToolHeader
ToolWorkspace
├── Input
├── Actions
├── Output
└── Result
```

Optional: history, help, examples, related tools. Primary action must be obvious.

------------------------------------------------------------------------

## 29. AI UI

Typical structure:
```text
AIHeader
AIWorkspace
├── PromptInput
├── GenerationControls
├── OutputPanel
└── Actions
```

AI pages should feel like product tools, not generic chat clones.

------------------------------------------------------------------------

## 30. Widget UI

```text
WidgetCard
├── Header
├── Body
└── Footer
```

Support loading, error, empty, and populated states.

------------------------------------------------------------------------

## 31. Portal UI

```text
PortalHeader
Search
Filters
FeaturedContent
ContentGrid/List
Pagination
```

Portals are content-discovery surfaces, not automatic dashboards.

------------------------------------------------------------------------

## 32. Blog Media UI

Use BlogHeader, BlogCard, BlogGrid, BlogArticle, BlogMeta, RelatedPosts, BlogPagination. Reading views prioritize typography, line length, hierarchy, media, and article navigation.

------------------------------------------------------------------------

## 33. Services UI

Use ServiceHeader, ServiceCard, ServiceGrid, ServiceDetail, ServiceCTA. Use static/local configuration initially and only show approved InzaTech services.

------------------------------------------------------------------------

## 34. Responsive Design

Support mobile, tablet, laptop, desktop, and large desktop intentionally.

Design mobile intentionally. Do not merely shrink desktop layouts.

Mobile: compact header, accessible menu, single-column content where appropriate, stacked tool controls, readable cards, touch-friendly controls.

Tablet: balanced columns and adaptable grids.

Desktop: multi-column discovery layouts and efficient information density.

Pay particular attention to navigation, tools, AI workspaces, widgets, portals, blog reading, services, tables, forms, and touch targets.

------------------------------------------------------------------------

## 35. Accessibility

Required:
- semantic HTML;
- keyboard navigation;
- visible focus;
- sufficient contrast;
- accessible labels;
- correct headings;
- logical reading order;
- accessible dialogs/menus;
- reduced motion;
- understandable form errors.

Never use color as the only state indicator.
Test both Light Mode and Dark Mode.

------------------------------------------------------------------------

## 36. Interaction States

Where applicable define:
`Default`, `Hover`, `Focus`, `Active`, `Selected`, `Disabled`, `Loading`, `Error`, `Success`.

------------------------------------------------------------------------

## 37. Loading, Empty, Error

Loading states should prevent unnecessary layout shifts. Empty states should explain what is empty and what to do next. Error states should be understandable, support recovery/retry where possible, and never expose secrets or raw provider internals.

------------------------------------------------------------------------

## 38. Motion

Animation is short, subtle, and purposeful. Use it for hover, focus, menus, dialogs, and state changes. Respect `prefers-reduced-motion`. Avoid constant motion, parallax, and glow animation. Do not animate every element.

------------------------------------------------------------------------

## 39. Iconography

Use Lucide Icons with consistent stroke style and predictable sizing. Typical sizes:
- 14–16px compact controls;
- 18–20px normal UI;
- 20–24px prominent controls.

Do not use emoji as UI icons. Interactive icons must have accessible labels.

------------------------------------------------------------------------

## 40. Design Tokens as Source of Truth

Check existing semantic tokens before introducing values. If a new token is genuinely necessary, document its semantic purpose and make it theme-aware.

------------------------------------------------------------------------

## 41. Visual Anti-Patterns

Avoid:
- random gradients
- excessive neon
- glowing borders
- excessive glassmorphism
- excessive rounded cards
- excessive shadows
- excessive animation
- random icons
- inconsistent button styles
- inconsistent card styles
- generic dashboard layouts
- meaningless KPI cards
- huge hero sections without useful content

The final product should feel designed, not template-generated.

------------------------------------------------------------------------

## 42. Do / Don't

### Do
- Light Mode first.
- Support Dark Mode.
- Reuse components.
- Use semantic tokens.
- Use shadcn/ui.
- Use Lucide.
- Design responsively.
- Keep tools task-oriented.
- Keep APIs behind services.
- Test both themes.
- Test keyboard navigation.

### Don't
- Build separate light/dark component trees.
- Use emoji as UI icons.
- Use random gradients.
- Add glow to everything.
- Make every page a dashboard.
- Create duplicate card systems.
- Hard-code API providers into UI.
- Hide important actions in decoration.
- Use arbitrary spacing everywhere.
- Treat Stitch prototype code as production architecture.
