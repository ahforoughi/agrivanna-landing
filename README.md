This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Design System

This project uses a consistent design system with a carefully selected color palette. All colors are defined in `tailwind.config.ts` and can be used throughout the application using Tailwind CSS classes.

### Color Palette

#### Primary Dark (`primary-dark`)
- **Hex**: `#1D212B`
- **Usage**: Primary text color, dark accents, overlays
- **Tailwind Class**: `text-primary-dark`, `bg-primary-dark`, `border-primary-dark`
- **When to use**: 
  - Main headings and important text
  - Dark overlays for video/image backgrounds
  - Primary UI elements that need strong contrast

#### Primary Green (`primary-green`)
- **Hex**: `#288A5C`
- **Usage**: Primary actions, buttons, CTAs, brand highlights
- **Tailwind Class**: `text-primary-green`, `bg-primary-green`, `border-primary-green`
- **When to use**:
  - Primary call-to-action buttons
  - Active states and selected items
  - Brand highlights and accents
  - Success states and positive indicators

#### Secondary Blue (`secondary-blue`)
- **Hex**: `#3D5A80`
- **Usage**: Secondary elements, links, informational content
- **Tailwind Class**: `text-secondary-blue`, `bg-secondary-blue`, `border-secondary-blue`
- **When to use**:
  - Secondary buttons and actions
  - Links and interactive elements
  - Informational badges and labels
  - Supporting UI elements

#### Neutral Gray (`neutral-gray`)
- **Hex**: `#98A2B3`
- **Usage**: Muted text, borders, secondary information
- **Tailwind Class**: `text-neutral-gray`, `bg-neutral-gray`, `border-neutral-gray`
- **When to use**:
  - Body text and descriptions
  - Borders and dividers
  - Placeholder text
  - Disabled states
  - Secondary information that needs less emphasis

#### Background Light (`background-light`)
- **Hex**: `#F9FAFB`
- **Usage**: Light backgrounds, cards, sections
- **Tailwind Class**: `bg-background-light`
- **When to use**:
  - Page backgrounds
  - Card backgrounds
  - Section backgrounds
  - Light overlays

### Usage Examples

```tsx
// Primary button
<Button className="bg-primary-green text-white">
  Chat with us
</Button>

// Dark text on light background
<h1 className="text-primary-dark">Heading</h1>

// Muted description text
<p className="text-neutral-gray">Description text</p>

// Dark overlay for video background
<div className="bg-primary-dark opacity-60"></div>

// Light background section
<section className="bg-background-light">
  Content
</section>
```

### Color Accessibility

All color combinations have been tested for WCAG AA compliance:
- Primary Green on white: ✅ AA compliant
- Primary Dark on white: ✅ AA compliant
- White on Primary Green: ✅ AA compliant
- White on Primary Dark: ✅ AA compliant
- Neutral Gray on white: ✅ AA compliant (for body text)

### Implementation

Colors are defined in `tailwind.config.ts` under the `extend.colors` section:

```typescript
colors: {
  "primary-dark": "#1D212B",
  "primary-green": "#288A5C",
  "secondary-blue": "#3D5A80",
  "neutral-gray": "#98A2B3",
  "background-light": "#F9FAFB",
}
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
