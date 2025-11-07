# Design System Documentation

## Overview
This document outlines the design system and styling patterns used throughout the website. All components must follow these patterns to maintain visual consistency.

---

## Non-Coder Terminology (Plain English Guide)

**This section is for non-technical people (vibe coders) to communicate design needs in plain English.**

### Inner Lines
When you say **"inner lines"**, this refers to the decorative visual elements inside each section:

1. **The 8 decorative dots** - Small square dots that appear at the corners where borders meet
2. **The vertical border lines** - The left and right border lines that run inside each section

**Example Usage:**
- ✅ "Add inner lines to that section" = Add the 8 dots + vertical borders
- ✅ "The logo cloud needs inner lines" = Add the decorative dots and vertical borders to logo cloud
- ✅ "Make sure all sections have inner lines" = Every section should have dots + borders

**Visual Description:**
- **Dots:** 8 small square decorators positioned at the top corners (4 dots) and bottom corners (4 dots)
- **Vertical Lines:** Two vertical lines running down the left and right sides of the content inside a section

**Technical Translation:**
When you say "inner lines", developers should implement:
- 8 `SquareDecorator` components positioned at corners
- `border-x py-16` class on the content wrapper for vertical lines WITH vertical padding
- Standard OUTER padding: `px-4 sm:px-6 md:px-12` (on the parent container, NOT on border-x)

**CRITICAL: The "inner lines" structure has TWO containers:**
```tsx
<div className="relative px-4 sm:px-6 md:px-12">  {/* OUTER: padding + decorators */}
  <SquareDecorator ... /> {/* 8 decorators here */}
  <div className="relative border-x py-16">  {/* INNER: borders + vertical padding */}
    {/* Content */}
  </div>
</div>
```

### Horizontal Lines Must Touch Edges Fully

**When you say "the horizontal lines should touch left and right fully":**

This means any `border-b` (bottom border) on grid items or sections MUST extend completely to the left and right edges without gaps.

**How to achieve this:**
1. **DO NOT add horizontal padding (`px-*`) to the element that has `border-x`**
   - ❌ WRONG: `<div className="border-x px-8">` creates gaps
   - ✅ CORRECT: `<div className="border-x">` no horizontal padding
   
2. **The outer container has the horizontal padding**, which creates spacing for decorators
   - The `px-4 sm:px-6 md:px-12` on the OUTER container positions the decorators
   - The `border-x` element inside has NO `px-*` classes
   
3. **Grid items inside will have their `border-b` extend fully to touch the vertical `border-x` lines**

**Visual Example:**
```
Outer container with px-4:
┌────────────────────────────────┐
│ [decorator]          [decorator]│
│  │                            │  │ ← px-4 creates space here
│  ├────────────────────────────┤  │ ← border-x has NO px-*, so border-b touches fully
│  │ Grid Item    │  Grid Item  │  │
│  ├──────────────┼─────────────┤  │ ← border-b extends edge-to-edge
│  │              │             │  │
│  └──────────────┴─────────────┘  │
│                                   │
└───────────────────────────────────┘
```

---

## Layout Structure

### Main Container Pattern
All page content must be wrapped in a consistent container structure:

```tsx
<main className="overflow-x-hidden">
  <div className="mx-auto max-w-6xl border-x">
    {/* All sections go here */}
  </div>
</main>
```

**Key Rules:**
- Main wrapper: `mx-auto max-w-6xl border-x`
- Maximum width: `max-w-6xl` (1152px)
- Vertical borders: `border-x` creates continuous left/right borders
- Each section: wrapped in `<div className="border-b">` for horizontal dividers

---

## Border System

### Vertical Border Lines
- **Implementation:** `border-x` class on the main container
- **Purpose:** Creates continuous vertical lines from header to footer
- **Max Width:** `max-w-6xl` ensures consistent width across all sections

### Horizontal Dividers
- **Implementation:** `border-b` on section wrapper divs
- **Pattern:**
  ```tsx
  <div className="border-b">
    <ComponentContent />
  </div>
  ```

### Border Color
- Default: Uses Tailwind's border color system
- Subtle borders: `border-foreground/10` for lighter dividers
- Standard: Default border color from theme

---

## 🔥 CRITICAL: The "T-Shape" Rule (Border Touching)

**This is THE most important design system rule. ALL lines must touch to create "T" shapes at intersections.**

### The Golden Rule
When you say "all lines should touch" in the design system context, it means:
- Internal grid lines MUST extend fully to touch the outer `border-x` lines
- Horizontal dividers MUST extend edge-to-edge
- Every border intersection creates a perfect "T" shape (or "+" shape)
- NO GAPS between borders

### Visual Example
```
┌──────┬──────┐  ✅ CORRECT: Vertical line touches top border (T-shape)
│      │      │
├──────┼──────┤  ✅ CORRECT: All lines create perfect intersections
│      │      │
└──────┴──────┘  ✅ CORRECT: Lines form T-shapes at edges

┌──────┬──────┐
│      │      │  ❌ WRONG: Gap between borders
│ ┌──┬─┴──┬─┐ │
│ │  │    │ │ │  ❌ WRONG: Internal lines don't reach edges
│ └──┴────┴─┘ │
└─────────────┘
```

### How to Achieve Perfect T-Shapes

#### ❌ WRONG - Gaps Created by Padding
```tsx
<div className="border-x py-16">  {/* Padding here creates gaps */}
  <div className="border-y">
    <div className="border-r">Content</div>
  </div>
</div>
```

#### ✅ CORRECT - No Gaps, Perfect Touching
```tsx
<div className="border-x">  {/* NO padding on border element */}
  <div className="@container">  {/* Padding goes here if needed */}
    <div className="grid">
      <div className="border-r border-b p-8">Content</div>  {/* Padding inside grid items */}
    </div>
  </div>
</div>
```

### Key Implementation Rules

1. **NO vertical padding on `border-x` elements**
   - ❌ `<div className="border-x py-16">` 
   - ✅ `<div className="border-x">`
   
2. **NO horizontal padding on `border-y` elements**
   - ❌ `<div className="border-y px-8">`
   - ✅ `<div className="border-y">`

3. **Padding goes INSIDE grid items, not on border containers**
   - ✅ `<div className="border-r p-8">Content</div>`
   
4. **The `border-b` wrapper handles all vertical spacing**
   - The section wrapper's `border-b` acts as the divider
   - No need for extra padding at top/bottom of content
   - Next section starts immediately after

### Section Spacing Pattern

```tsx
<div className="mx-auto max-w-6xl border-x">
  {/* Section 1 */}
  <div className="border-b">  {/* border-b is the divider */}
    <LogoCloud />  {/* No padding needed between sections */}
  </div>
  
  {/* Section 2 starts immediately */}
  <div className="border-b">  {/* Another border-b divider */}
    <FeaturesSection />  {/* Content touches previous border-b */}
  </div>
  
  {/* Section 3 starts immediately */}
  <div className="border-b">
    <NextSection />  {/* Always touching, no gaps */}
  </div>
</div>
```

---

## Square Decorators

### Purpose
Square decorators are small visual elements placed at the corners where borders intersect, adding design detail.

### Implementation
```tsx
const SquareDecorator = ({ className }: { className?: string }) => {
  return (
    <div
      aria-hidden
      className={cn(
        'bg-card ring-foreground/10 pointer-events-none absolute z-10 size-1.5',
        'border border-transparent shadow-sm ring-1',
        className
      )}
    />
  )
}
```

### Positioning Pattern
For sections with `border-x` content wrapper:

```tsx
<div className="relative px-4 sm:px-6 md:px-12">
  {/* Corner decorators - 8 total */}
  <SquareDecorator className="-left-[3.5px] -top-[3.5px]" />
  <SquareDecorator className="-top-[3.5px] left-3 translate-x-[1.5px] sm:left-5 md:left-11" />
  <SquareDecorator className="-right-[3.5px] -top-[3.5px]" />
  <SquareDecorator className="-top-[3.5px] right-3 -translate-x-[1.5px] sm:right-5 md:right-11" />
  
  <SquareDecorator className="-bottom-[3.5px] -left-[3.5px]" />
  <SquareDecorator className="-bottom-[3.5px] left-3 translate-x-[1.5px] sm:left-5 md:left-11" />
  <SquareDecorator className="-bottom-[3.5px] -right-[3.5px]" />
  <SquareDecorator className="-bottom-[3.5px] right-3 -translate-x-[1.5px] sm:right-5 md:right-11" />
  
  {/* Content with border-x */}
  <div className="relative border-x">
    {/* Section content */}
  </div>
</div>
```

**Key Points:**
- Always 8 decorators per section (4 top, 4 bottom)
- Position: `-3.5px` offset at exact corners
- Secondary decorators: `left-3/right-3` with responsive spacing
- Must be on parent wrapper, NOT on the border-x element

---

## Section Structure Pattern

### Standard Section Template
```tsx
export default function SectionComponent() {
  return (
    <div className="relative px-4 sm:px-6 md:px-12">
      {/* Square decorators (8 total) */}
      <SquareDecorator className="-left-[3.5px] -top-[3.5px]" />
      {/* ... 7 more decorators ... */}
      
      {/* Content wrapper with vertical borders */}
      <div className="relative border-x py-16 md:py-20">
        {/* Your content here */}
      </div>
    </div>
  )
}
```

### Integration in Main Layout
```tsx
<div className="mx-auto max-w-6xl border-x">
  {/* Hero Section */}
  <section id="home">
    <div className="relative border-b px-3 pb-10 pt-24 md:pb-20 md:pt-36">
      {/* Hero content */}
    </div>
  </section>
  
  {/* Other Sections */}
  <div className="border-b">
    <LogoCloud />
  </div>
  
  <div className="border-b">
    <FeaturesSection />
  </div>
</div>
```

---

## Spacing System

### Padding
- **Horizontal:** `px-3` (hero) or `px-4 sm:px-6 md:px-12` (standard sections)
- **Vertical:** `py-16 md:py-20` (standard sections)
- **Hero specific:** `pt-24 md:pt-36` (top), `pb-10 md:pb-20` (bottom)

### Responsive Breakpoints
- `sm:` 640px
- `md:` 768px
- `lg:` 1024px
- `xl:` 1280px

### Spacing Scale (Tailwind)
- `px-3` = 0.75rem (12px)
- `px-4` = 1rem (16px)
- `px-6` = 1.5rem (24px)
- `px-12` = 3rem (48px)
- `py-16` = 4rem (64px)
- `py-20` = 5rem (80px)

---

## Typography

### Headings
- **H1 (Hero):** `text-4xl sm:text-5xl lg:text-6xl font-medium`
- **H2 (Section):** `text-3xl lg:text-4xl font-semibold`
- **H3 (Cards):** `text-balance font-semibold` or `text-sm font-medium`

### Body Text
- **Primary:** `text-lg` (hero description)
- **Secondary:** `text-base` (standard body)
- **Muted:** `text-muted-foreground` class

### Text Utilities
- `text-balance` - Better text wrapping for headings
- `text-foreground` - Primary text color
- `text-muted-foreground` - Secondary/descriptive text

---

## Color System (Tailark Theme)

### CSS Variables
```css
--color-background: Background color
--color-foreground: Primary text color
--color-card: Card backgrounds
--color-muted: Muted backgrounds
--color-muted-foreground: Secondary text
--color-primary: Primary brand color
--color-border: Border color
```

### Usage
- Background: `bg-background`
- Text: `text-foreground` or `text-muted-foreground`
- Borders: Default or `border-foreground/10`
- Cards: `bg-card`

---

## Component Patterns

### Buttons
```tsx
<Button asChild>
  <Link href="#">Text</Link>
</Button>

<Button asChild variant="outline">
  <Link href="#">Text</Link>
</Button>
```

**Variants:**
- `default` - Primary solid button
- `outline` - Bordered button
- `ghost` - Transparent button
- `link` - Link-styled button

**Sizes:**
- `sm` - Small
- `default` - Standard
- `lg` - Large
- `icon` - Square icon button

### Cards/Sections with Grid
```tsx
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
  {/* Grid items */}
</div>
```

### Icons
- Library: `lucide-react`
- Size: `size-4` (16px) for inline, `size-6` (24px) for features
- Color: `text-foreground` or specific colors

---

## Image Handling

### Next.js Image Component
```tsx
<Image
  className="size-full"
  src="https://..."
  alt="Description"
  width={1280}
  height={720}
  sizes="(max-width: 640px) 768px, (max-width: 768px) 1024px, (max-width: 1024px) 1280px, 1280px"
/>
```

### Allowed Domains
Configure in `next.config.ts`:
```typescript
images: {
  remotePatterns: [
    { protocol: 'https', hostname: 'res.cloudinary.com' },
    { protocol: 'https', hostname: 'html.tailus.io' },
  ],
}
```

---

## Animation System

### Framer Motion (Logo Cloud)
```tsx
import { motion, AnimatePresence } from 'motion/react'

<AnimatePresence mode="popLayout">
  <motion.div
    initial={{ opacity: 0, scale: 0.75, y: -24 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.75, y: 24 }}
    transition={{ duration: 0.5 }}
  >
    {content}
  </motion.div>
</AnimatePresence>
```

### CSS Animations (Tailark Theme)
Available animations defined in `globals.css`:
- `animate-accordion-down/up`
- `animate-fade-in/out`
- `animate-scale-in/out`
- `animate-enter-from-right/left`
- `animate-reveal`

---

## Grid Layouts with Internal Borders

### Perfect Grid Border Pattern

When creating grid layouts with internal dividing lines, follow this pattern:

```tsx
<div className="border-x">  {/* Outer container with vertical borders */}
  <div className="@container">  {/* Optional container query wrapper */}
    <div className="grid grid-cols-2">  {/* NO gap-* classes */}
      {/* Add borders directly to grid items */}
      <div className="border-r border-b p-8">Item 1</div>
      <div className="border-b p-8">Item 2</div>
      <div className="border-r p-8">Item 3</div>
      <div className="p-8">Item 4</div>
    </div>
  </div>
</div>
```

### Grid Border Strategy

1. **Remove `gap-*` classes** - Use borders instead of gaps for dividers
2. **Strategic border placement:**
   - Right column items: NO `border-r`
   - Bottom row items: NO `border-b`
   - All other items: Add appropriate borders
3. **Padding on each grid item** - `p-8` inside each cell for consistent spacing

### Responsive Grid Borders

For grids that change columns at breakpoints, use conditional borders:

```tsx
<div className="grid grid-cols-2 @4xl:grid-cols-4">
  {/* This item is on right edge at mobile, but not at desktop */}
  <div className="border-b @4xl:border-r p-8">
    Content
  </div>
</div>
```

### Last Row - No Bottom Borders

The last row of a grid should NEVER have bottom borders since:
- The section's wrapper `border-b` serves as the bottom divider
- Extra borders create double lines
- Next section content should touch this border

```tsx
{/* Last row */}
<div className="border-r p-8">Item (no border-b)</div>
<div className="p-8">Last Item (no borders)</div>
```

---

## Common Mistakes to Avoid

### ❌ Don't Do This
```tsx
// Double borders
<div className="border-b">
  <div className="border-b">
    <Content />
  </div>
</div>

// Wrong decorator placement
<div className="border-x">
  <SquareDecorator /> {/* Should be on parent */}
</div>

// Wrong max-width
<div className="max-w-5xl"> {/* Should be max-w-6xl */}

// Gap spacing with borders (creates floating lines)
<div className="grid gap-8">
  <div className="border-r">Item</div>
</div>

// Padding on border containers (creates gaps)
<div className="border-x py-16">  {/* ❌ NO! */}
  <Content />
</div>

// Bottom padding when section wrapper has border-b
<div className="border-b">
  <div className="pb-16">  {/* ❌ Unnecessary gap */}
    <Content />
  </div>
</div>
```

### ✅ Do This
```tsx
// Single border at section wrapper
<div className="border-b">
  <Content />
</div>

// Decorators on parent wrapper
<div className="relative px-4">
  <SquareDecorator />
  <div className="border-x">
    {/* Content */}
  </div>
</div>

// Consistent max-width
<div className="mx-auto max-w-6xl border-x">

// No gap, borders instead
<div className="grid">
  <div className="border-r p-8">Item</div>
</div>

// No padding on border containers
<div className="border-x">  {/* ✅ Clean */}
  <div className="@container">  {/* Wrapper for other stuff */}
    <div className="p-8">Content</div>  {/* Padding inside */}
  </div>
</div>

// No extra padding, let border-b be the divider
<div className="border-b">
  <Content />  {/* Touches the border-b naturally */}
</div>
```

---

## File Structure

```
src/
├── app/
│   ├── globals.css          # Tailark theme + custom CSS
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── components/
│   ├── ui/                  # Shadcn UI components
│   │   ├── button.tsx
│   │   ├── navigation-menu.tsx
│   │   └── accordion.tsx
│   ├── header.tsx           # Site header
│   ├── hero-section.tsx     # Hero + all sections
│   ├── logo-cloud.tsx       # Logo cloud section
│   ├── features-11.tsx      # Features section
│   ├── logo.tsx             # Logo component
│   └── logos/               # Logo components
│       ├── index.ts
│       ├── Gemini.tsx
│       └── ...
├── hooks/
│   └── use-media.ts         # Media query hook
└── lib/
    └── utils.ts             # cn() utility
```

---

## Tailark Pro Integration

### Registry Configuration
File: `components.json`
```json
{
  "registries": {
    "@tailark-pro": {
      "url": "https://pro.tailark.com/registry/{name}",
      "headers": {
        "Authorization": "Bearer ${TAILARK_API_KEY}"
      }
    }
  }
}
```

### Installing Components
```bash
npx shadcn@latest add @tailark-pro/component-name
```

### API Key
- Stored in `.env`: `TAILARK_API_KEY=your_key`
- Never commit to version control
- Managed from Tailark Pro dashboard

---

## Best Practices

### Component Design
1. **Consistency:** Always use the same container width (`max-w-6xl`)
2. **Borders:** Single border layers, no double borders
3. **Decorators:** 8 per section with `border-x` content
4. **Spacing:** Use standard padding: `px-4 sm:px-6 md:px-12`
5. **Responsive:** Mobile-first approach with responsive breakpoints

### Code Quality
1. **TypeScript:** Use proper types for all components
2. **Accessibility:** Include `aria-hidden` for decorative elements
3. **Performance:** Optimize images with Next.js Image component
4. **Utilities:** Use `cn()` for conditional classNames

### Styling
1. **Tailwind First:** Use Tailwind classes, not custom CSS
2. **Theme Variables:** Use CSS variables from Tailark theme
3. **Dark Mode:** Support via theme variables (automatic)
4. **Responsive:** Test all breakpoints

---

## Quick Reference

### 🎯 The T-Shape Checklist
Before finishing any section, verify:
- [ ] All internal grid lines extend fully to outer borders
- [ ] No padding on `border-x` or `border-y` elements
- [ ] Padding only inside grid items (`p-8` on children)
- [ ] Last row has NO `border-b`
- [ ] Section content touches wrapper's `border-b` with no gap
- [ ] All border intersections form perfect T or + shapes

### Section Wrapper Pattern
```tsx
<div className="border-b">  {/* Acts as divider */}
  <ComponentName />  {/* Content touches border naturally */}
</div>
```

### Content Section Pattern with Inner Lines
```tsx
<div className="relative px-4 sm:px-6 md:px-12">
  {/* 8 Square Decorators */}
  <div className="relative border-x">  {/* NO padding here */}
    <div className="@container">  {/* Wrapper if needed */}
      {/* Content with internal padding */}
    </div>
  </div>
</div>
```

### Grid Section with Internal Lines
```tsx
<div className="relative px-4 sm:px-6 md:px-12">
  {/* 8 Square Decorators */}
  <div className="relative border-x">
    <div className="@container">
      <div className="grid grid-cols-2">  {/* No gap-* */}
        <div className="border-r border-b p-8">Item 1</div>
        <div className="border-b p-8">Item 2</div>
        <div className="border-r p-8">Item 3 (no border-b)</div>
        <div className="p-8">Item 4 (last, no borders)</div>
      </div>
    </div>
  </div>
</div>
```

### Main Container
```tsx
<main className="overflow-x-hidden">
  <div className="mx-auto max-w-6xl border-x">
    {/* All sections wrapped in border-b */}
    <div className="border-b"><Section1 /></div>
    <div className="border-b"><Section2 /></div>
    <div className="border-b"><Section3 /></div>
  </div>
</main>
```

---

## Version History
- **v1.2** - Enhanced clarity on "inner lines" pattern and horizontal border behavior
  - Added explicit TWO-container structure explanation for inner lines
  - Documented why horizontal padding should NOT be on `border-x` elements
  - Added "Horizontal Lines Must Touch Edges Fully" section with visual examples
  - Created comprehensive Troubleshooting section for common issues
  - Clarified that `py-16` vertical padding IS required on `border-x` containers
  - Better documentation of decorator positioning relative to padding containers
- **v1.1** - Added critical "T-Shape" rule and border touching guidelines
  - Comprehensive grid layout with internal borders documentation
  - Padding structure clarification (no padding on border elements)
  - Section spacing patterns (border-b as divider)
  - Enhanced common mistakes section with real examples
  - Added T-Shape checklist for quality assurance
- **v1.0** - Initial design system documentation
  - Tailark Pro integration complete
  - Hero section, Logo Cloud, Features section implemented
  - Border system and decorator pattern established

---

## Troubleshooting Common Issues

### Issue: "Horizontal lines don't touch the edges fully"

**Symptoms:**
- `border-b` lines on grid items have gaps on left/right
- Horizontal borders don't reach the vertical `border-x` lines
- There's visible spacing between horizontal and vertical borders

**Root Cause:**
The `border-x` container has horizontal padding (`px-*` classes) when it shouldn't.

**Solution:**
```tsx
❌ WRONG:
<div className="relative">
  <div className="border-x px-4">  {/* px-4 creates gaps! */}
    <div className="border-b">Content</div>
  </div>
</div>

✅ CORRECT:
<div className="relative px-4 sm:px-6 md:px-12">  {/* Padding on OUTER container */}
  <SquareDecorator ... /> {/* 8 decorators */}
  <div className="border-x py-16">  {/* NO px-* here! */}
    <div className="border-b">Content</div>
  </div>
</div>
```

### Issue: "The decorators are outside/misaligned"

**Symptoms:**
- The 8 dots appear outside the visible area
- Decorators are not positioned at the border intersections

**Root Cause:**
The decorators are placed on the wrong container (should be on outer container with padding, not on `border-x` element).

**Solution:**
Move decorators to the parent container that has `px-4 sm:px-6 md:px-12`:
```tsx
❌ WRONG:
<div className="relative">
  <div className="border-x">
    <SquareDecorator ... />  {/* Wrong container! */}
  </div>
</div>

✅ CORRECT:
<div className="relative px-4 sm:px-6 md:px-12">
  <SquareDecorator ... />  {/* Correct position */}
  <div className="border-x py-16">
    {/* Content */}
  </div>
</div>
```

### Issue: "Missing vertical padding in the section"

**Symptoms:**
- Content is too cramped vertically
- Section looks different from others (logo-cloud, etc.)

**Root Cause:**
The `border-x` container is missing `py-16` vertical padding.

**Solution:**
```tsx
❌ WRONG:
<div className="border-x">  {/* No vertical spacing */}
  <div className="grid">...</div>
</div>

✅ CORRECT:
<div className="border-x py-16">  {/* py-16 adds vertical spacing */}
  <div className="grid">...</div>
</div>
```

---

## Contact & Support
For questions about this design system:
- Review this documentation first
- Check Tailark Pro documentation: https://pro.tailark.com/
- Ensure all new components follow these patterns

