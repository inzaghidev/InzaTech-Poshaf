# DESIGN_SYSTEM.md — InzaTech Design System

## 1. Purpose

This document is the visual and interaction source of truth for InzaTech. Every surface — Home, Apps, Tools, AI Apps, Widgets, Portals, Blog, About, Services, Contact, and Legal — should feel like the same product.

The Google Stitch prototype is the primary visual reference for the initial product direction. This document translates that direction into a reusable production design system.

------------------------------------------------------------------------

## 2. Design Philosophy

InzaTech should feel professional, modern, technical, futuristic, practical, clean, premium, developer-friendly, and utility-oriented.

Futuristic does **not** mean dark-only, neon-only, or glow-heavy.

Avoid AI-generated clichés: random gradients, excessive neon, glowing borders everywhere, heavy glassmorphism, giant empty heroes, excessive rounded cards, excessive shadows, arbitrary icons, inconsistent typography, and excessive animation.

------------------------------------------------------------------------

## 3. Theme Strategy

InzaTech supports two themes:
1. Light Mode — default and primary
2. Dark Mode — alternative

Both themes use the same components, layout, typography, spacing, interaction states, accessibility model, and business logic.

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

Avoid arbitrary page-specific font sizes and oversized headings that consume most of the viewport.

------------------------------------------------------------------------

## 7. Spacing

Use a tokenized scale such as:
`xs`, `sm`, `md`, `lg`, `xl`, `2xl`, `3xl`, `4xl`.

Smaller spacing is for controls and compact groups; larger spacing is for sections and major content groups. Avoid arbitrary values when an existing token works.

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

------------------------------------------------------------------------

## 11. Buttons

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

## 12. Forms

Inputs, selects, textareas, and other controls share height, typography, radius, border, focus, disabled, and validation conventions.

Form anatomy:
`Label → Control → Description/Help → Error`

Errors must not rely only on red color.

------------------------------------------------------------------------

## 13. Cards

Cards group related information. They are useful for tools, AI apps, widgets, portals, blog posts, and feature groups. They are not the default container for every piece of content.

Typical anatomy:
`Card → Header → Content → Footer`

------------------------------------------------------------------------

## 14. Page Headers

Reusable structure:
`Eyebrow/Category → Title → Description → Optional Actions`

Page headers should be strong but compact. Avoid oversized heroes on utility/discovery pages.

------------------------------------------------------------------------

## 15. Navigation

Primary navigation:
- Home
- Apps
- Learn
- Blog
- About

Mobile uses an accessible menu. Selected navigation needs a clear state without glow dependence.

------------------------------------------------------------------------

## 16. Theme Switcher

Support Light/Dark only initially. Use accessible Lucide Sun/Moon icons. Persist the choice and minimize visible theme flashing. Do not use emoji.

------------------------------------------------------------------------

## 17. App Shell

```text
AppShell
├── Header
├── Main
└── Footer
```

The shell establishes page background, container, navigation, theme, typography, and global responsive behavior.

------------------------------------------------------------------------

## 18. Footer

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

## 19. Tool UI

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

## 20. AI UI

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

## 21. Widget UI

```text
WidgetCard
├── Header
├── Body
└── Footer
```

Support loading, error, empty, and populated states.

------------------------------------------------------------------------

## 22. Portal UI

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

## 23. Blog UI

Use BlogHeader, BlogCard, BlogGrid, BlogArticle, BlogMeta, RelatedPosts, BlogPagination. Reading views prioritize typography, line length, hierarchy, media, and article navigation.

------------------------------------------------------------------------

## 24. Responsive Design

Support mobile, tablet, laptop, desktop, and large desktop intentionally.

Mobile: compact header, accessible menu, single-column content where appropriate, stacked tool controls, readable cards, touch-friendly controls.

Tablet: balanced columns and adaptable grids.

Desktop: multi-column discovery layouts and efficient information density.

------------------------------------------------------------------------

## 25. Accessibility

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

------------------------------------------------------------------------

## 26. Interaction States

Where applicable define:
`Default`, `Hover`, `Focus`, `Active`, `Selected`, `Disabled`, `Loading`, `Error`, `Success`.

------------------------------------------------------------------------

## 27. Loading, Empty, Error

Loading states should prevent unnecessary layout shifts. Empty states should explain what is empty and what to do next. Error states should be understandable, support recovery/retry where possible, and never expose secrets or raw provider internals.

------------------------------------------------------------------------

## 28. Animation

Animation is short, subtle, and purposeful. Use it for hover, focus, menus, dialogs, and state changes. Respect `prefers-reduced-motion`. Avoid constant motion, parallax, and glow animation.

------------------------------------------------------------------------

## 29. Iconography

Use Lucide Icons with consistent stroke style and predictable sizing. Typical sizes:
- 14–16px compact controls;
- 18–20px normal UI;
- 20–24px prominent controls.

Do not use emoji as UI icons.

------------------------------------------------------------------------

## 30. Component Naming

Prefer responsibility-based names: `ToolCard`, `ToolWorkspace`, `PageHeader`, `PortalSearch`, `BlogArticle`.

Avoid vague names such as `Box`, `Thing`, `Section2`, `CardNew`, or `CoolPanel`.

------------------------------------------------------------------------

## 31. Design Tokens as Source of Truth

Check existing semantic tokens before introducing values. If a new token is genuinely necessary, document its semantic purpose and make it theme-aware.

------------------------------------------------------------------------

## 32. Do / Don't

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
