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

Initialize Next.js (App Router, TypeScript, ESLint, no src/ folder, no Tailwind, @import alias, use pnpm package manager): 

```bash
pnpm create next-app nextjs-drupal-starter --ts --eslint --app --no-src-dir --no-tailwind --import-alias "@/*" --use-pnpm

cd nextjs-drupal-starter
```

Install core dependencies:

```bash
 pnpm add sass radix-ui zod react-hook-form @hookform/resolvers graphql graphql-request next-drupal clsx test-exclude
```

Some builds need to be allowed manually by running:

```bash
pnpm approve-builds
#Note: Space + Enter to select
```

Install dev dependencies (Vitest, RTL, Storybook, Husky, Prettier, etc.):

```bash
pnpm add -D vitest @vitejs/plugin-react @testing-library/react @testing-library/jest-dom @testing-library/user-event jsdom prettier eslint-config-prettier husky lint-staged @storybook/nextjs @storybook/react @storybook/addon-essentials @storybook/addon-interactions @chromatic-com/storybook playwright
```

#### 2. Feature-Based Directory Structure

Each feature folder (e.g. `features/navigation`, `features/offers`, etc.) contains its components, GraphQL queries, custom hooks, Vitest specs, Zod schemas, Storybook stories.

```
nextjs-drupal-starter/
├── app/                      # Next.js App Router (pages & layouts)
│   ├── layout.tsx
│   ├── page.tsx
│   └── api/
├── features/                 # Modular feature-based structure
│   ├── navigation/           # Header, Nav Menu, Footer
│   │   ├── components/
│   │   │   ├── Header.tsx
│   │   │   ├── Header.module.scss
│   │   │   ├── Header.test.tsx
│   │   │   └── Header.stories.tsx
│   │   └── navigation.graphql.ts
│   ├── offers/               # Vehicle Offer Cards (referencing Isuzu UI)
│   │   ├── components/
│   │   │   ├── OfferCard.tsx
│   │   │   ├── OfferCard.module.scss
│   │   │   ├── OfferCard.test.tsx
│   │   │   └── OfferCard.stories.tsx
│   │   └── offers.types.ts
│   └── enquiry-form/         # Form validation feature (Zod + React Hook Form)
├── lib/                      # Shared utility functions & Drupal GraphQL client
│   ├── drupal.ts             # next-drupal / GraphQL client configuration
│   └── utils.ts
├── styles/                   # Core Global Sass files
│   ├── _variables.scss       # Design tokens (Isuzu Brand Colors, typography)
│   ├── _breakpoints.scss     # Media query mixins
│   ├── _mixins.scss          # Utility mixins
│   └── _index.scss           # Main entry importing variables, breakpoints, & mixins
├── public/
├── .eslintrc.config.mjs
├── .prettierrc
├── vitest.config.ts
├── vitest.setup.ts
├── .storybook/
├── package.json
└── README.md
```

Setup Husky & Lint-Staged:

```bash
npx husky init

echo "pnpm lint-staged" > .husky/pre-commit
```

and add config to `package.json`:

```json
  "lint-staged": {
    "*.{ts,tsx}": [
      "eslint --fix",
      "prettier --write",
      "vitest related --run"
    ],
    "*.scss": [
      "prettier --write"
    ]
  },
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
