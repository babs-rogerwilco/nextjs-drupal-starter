# nextjs-drupal-starter

A feature-based [Next.js](https://nextjs.org) starter - App Router, Drupal with GraphQL, TypeScript, Sass, Storybook,
Vitest + React Testing Library, ESLint, Prettier, Husky, Radix UI (primitives only, no theme
package), Zod, pnpm. Layout inspiration: isuzu.co.za, restructured as
`(vehicles)` / `(shopping-tools)` route groups.

## Prerequisites

- Node.js >= 20.9 (required by Next.js 16)
- pnpm >= 9 - Run: `corepack enable && corepack prepare pnpm@latest --activate`

## Getting started

```bash
pnpm install
pnpm dev        # http://localhost:3000 (To see app)
pnpm storybook  # http://localhost:6006 (To see component stories in isolation)
pnpm test       # vitest watch mode (To run tests)
```

---

## How project was created

### STEP 1: Core Setup, Architecture & Configuration

#### 1. Project Initialization

```bash
# 1. Initialize Next.js (App Router, TypeScript, ESLint, no src/ folder, no Tailwind, @import alias, use pnpm package manager)
pnpm create next-app nextjs-drupal-starter --ts --eslint --app --no-src-dir --no-tailwind --import-alias "@/*" --use-pnpm

cd nextjs-drupal-starter
```

---

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
