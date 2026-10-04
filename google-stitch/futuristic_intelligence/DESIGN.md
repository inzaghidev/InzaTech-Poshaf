---
name: Futuristic Intelligence
colors:
  surface: '#0b1326'
  surface-dim: '#0b1326'
  surface-bright: '#31394d'
  surface-container-lowest: '#060e20'
  surface-container-low: '#131b2e'
  surface-container: '#171f33'
  surface-container-high: '#222a3d'
  surface-container-highest: '#2d3449'
  on-surface: '#dae2fd'
  on-surface-variant: '#c7c4d8'
  inverse-surface: '#dae2fd'
  inverse-on-surface: '#283044'
  outline: '#918fa1'
  outline-variant: '#464555'
  surface-tint: '#c3c0ff'
  primary: '#c3c0ff'
  on-primary: '#1d00a5'
  primary-container: '#4f46e5'
  on-primary-container: '#dad7ff'
  inverse-primary: '#4d44e3'
  secondary: '#4cd7f6'
  on-secondary: '#003640'
  secondary-container: '#03b5d3'
  on-secondary-container: '#00424e'
  tertiary: '#4edea3'
  on-tertiary: '#003824'
  tertiary-container: '#006e4b'
  on-tertiary-container: '#67f4b7'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e2dfff'
  primary-fixed-dim: '#c3c0ff'
  on-primary-fixed: '#0f0069'
  on-primary-fixed-variant: '#3323cc'
  secondary-fixed: '#acedff'
  secondary-fixed-dim: '#4cd7f6'
  on-secondary-fixed: '#001f26'
  on-secondary-fixed-variant: '#004e5c'
  tertiary-fixed: '#6ffbbe'
  tertiary-fixed-dim: '#4edea3'
  on-tertiary-fixed: '#002113'
  on-tertiary-fixed-variant: '#005236'
  background: '#0b1326'
  on-background: '#dae2fd'
  surface-variant: '#2d3449'
typography:
  headline-lg:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  code-block:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '450'
    lineHeight: 22px
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  gutter: 16px
  margin-mobile: 16px
  margin-desktop: 40px
---

## Brand & Style
The design system is engineered for a developer-centric ecosystem, prioritizing high-density information architecture with a "Futuristic Intelligence" aesthetic. The brand personality is authoritative yet visionary, combining the precision of technical tools with the polished finish of premium SaaS platforms.

The visual style utilizes **Modern Corporate** foundations blended with **Glassmorphism**. It evokes an emotional response of competence and speed. Key characteristics include:
- **Depth through Transparency:** Utilizing layered "glass" surfaces to maintain context.
- **Technical Precision:** High-contrast accents and monospaced highlights to denote intelligence and AI-driven logic.
- **Minimalist Friction:** Reducing visual noise to focus on code and data, while using subtle glows to guide the user's attention to primary actions.

## Colors
The palette is rooted in a "Dark Mode First" philosophy to reduce eye strain during long development sessions. 
- **Primary (Electric Indigo):** Used for main actions, active states, and brand identity.
- **Secondary (Cyan):** Dedicated to AI-generated content, suggestions, and intelligence indicators.
- **Tertiary (Emerald):** Reserved for success states, completed builds, and positive system health.
- **Neutral (Slate/Midnight):** Provides the structural foundation. Surfaces utilize a semi-transparent slate to allow for background blur effects, creating a sense of depth and hierarchy.

In the Light Mode variant, the background shifts to a crisp `#F8FAFC` with borders moving to a soft `#E2E8F0`.

## Typography
This design system employs a dual-font strategy to balance readability and technicality. 
- **Geist** is used for headlines to provide a sharp, modern, and developer-friendly edge.
- **Inter** handles the bulk of the UI body text for its exceptional legibility at small sizes.
- **JetBrains Mono** is strictly reserved for code blocks, terminal outputs, and metadata labels, reinforcing the "AI/Technical" nature of the product.

Hierarchy is established through weight and letter spacing rather than excessive size shifts, maintaining a compact and efficient dashboard feel.

## Layout & Spacing
The layout follows a **Strict 4px Grid** system to ensure mathematical alignment across all components.
- **Dashboard Grid:** A 12-column fluid system is used for the main workspace, with a fixed sidebar (240px or 280px).
- **Gaps & Margins:** Use `md` (16px) for standard gutters between cards and `lg` (24px) for section breathing room.
- **Mobile Adaptation:** On mobile devices, the 12-column grid collapses to 1 column with `margin-mobile` (16px) side padding. Complex data tables should switch to a horizontally scrollable container or card-stacking view.

## Elevation & Depth
Elevation is communicated through **Glassmorphism** and **Tonal Layering** rather than heavy shadows.
- **Level 0 (Background):** The base midnight color.
- **Level 1 (Cards/Surfaces):** Semi-transparent slate with a 1px inner border (white at 10% opacity) and a background blur of 12px.
- **Level 2 (Popovers/Modals):** Darker semi-transparent fill with a subtle 20px blur and a primary-tinted ambient glow (low opacity indigo).
- **Hover States:** Elements should "lift" using a `y-offset: -2px` transform and an increase in border opacity, signaling interactivity without breaking the flat-glass aesthetic.

## Shapes
The shape language is professional and balanced. 
- **Standard Radius:** 8px (`rounded-md`) is the default for buttons and input fields to maintain a crisp, functional look.
- **Container Radius:** 16px (`rounded-lg`) is used for primary cards and dashboard modules to soften the layout and provide a premium feel.
- **Icons:** Use linear icons with a 2px stroke width to match the clean typography lines.

## Components
- **Buttons:** 
    - *Primary:* Electric Indigo background with a subtle outer glow (4px blur, primary color at 30% opacity). 
    - *Secondary:* Ghost style with 1px indigo border and semi-transparent hover fill.
- **AI Indicator Chips:** Use the Cyan accent color with a small pulsing dot animation to signify active AI processing.
- **Input Fields:** Darker background than the card surface. The focus state uses a 2px Cyan ring to denote "Intelligence Mode."
- **Code Blocks:** Utilize JetBrains Mono with a distinct dark background (`#000000`). Include a "Copy" button in the top-right corner that appears on hover.
- **Cards:** Use the Glassmorphism specification. Header sections within cards should be separated by a 1px border.
- **Status Indicators:** Use Tertiary (Emerald) for "Healthy/Deployed" and a warm yellow for "Pending/Learning."