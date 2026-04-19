# React + TypeScript + Vite — Project Template

A production-ready frontend project template using React, TypeScript, and Vite with strict linting, formatting, and Git hooks pre-configured.

## Tech Stack

- **Framework**: React + TypeScript
- **Build Tool**: Vite
- **Linting**: ESLint 9 (flat config) with strict TypeScript, React, JSX a11y, and import rules
- **Formatting**: Prettier
- **Git Hooks**: Husky (pre-commit, pre-push)
- **Staged Linting**: lint-staged
- **Path Aliases + Barrel Exports**: `vite-tsconfig-paths`. Configured for clean imports
- **Runtime**: Node.js 18+
- **State Management**: Redux Toolkit (RTK)
- **Data Fetching**: RTK Query
- **UI & Styling**:
  - MUI (Material-UI) + Emotion
  - CSS-in-JS for component scoping
- **Forms & Validation**
  - React Hook Form
  - Zod
- **API & Data**
  - MSW for HTTP Mocking
- **Internationalization**: react-i18next
- **Security & Authentication**
  - jwt-decode for JWT decoding
  - js-cookie for cookie management
- **Environment Management**: dotenv
- **Testing**
  - Vitest: unit & component testing
  - React Testing Library: Component Testing

## Project Structure

```
src/
├── components/
│   ├── atoms/
│   ├── molecules/
│   ├── organisms/
│   └── templates/
├── features/
│   ├── auth/
│   └── dashboard/
├── hooks/
├── i18n/
├── mocks/
├── pages/
├── services/
├── store/
├── theme/
├── types/
└── utils/
```

## Getting Started

```bash
pnpm install
pnpm dev
```

## Scripts

| Script              | Description                         |
| ------------------- | ----------------------------------- |
| `pnpm dev`          | Start development server            |
| `pnpm build`        | Type-check and build for production |
| `pnpm preview`      | Preview production build            |
| `pnpm lint`         | Run ESLint                          |
| `pnpm lint:fix`     | Run ESLint with auto-fix            |
| `pnpm format`       | Format all files with Prettier      |
| `pnpm format:check` | Check formatting without writing    |

## ESLint Configuration (`eslint.config.js`)

Uses ESLint 9 **flat config** format. Key plugins included:

- `typescript-eslint` — strict + stylistic type-checked rules
- `eslint-plugin-react` + `eslint-plugin-react-hooks` — React best practices
- `eslint-plugin-jsx-a11y` — Accessibility rules
- `eslint-plugin-import` — Import ordering and resolution
- `eslint-plugin-react-refresh` — Vite HMR safety
- `eslint-config-prettier` — Disables ESLint rules that conflict with Prettier

> **Note on style guides**: Airbnb (`eslint-config-airbnb`) and Vercel (`@vercel/style-guide`) do not yet support ESLint 9 / TypeScript 6. The configuration above provides equivalent coverage using first-party ESLint 9 plugins.

## Prettier Configuration (`.prettierrc`)

- No semicolons (`"semi": false`)
- Single quotes (`"singleQuote": true`)
- Trailing commas (`"trailingComma": "all"`)
- 100 character print width
- LF line endings

## Husky Git Hooks

Only two hooks are configured:

| Hook         | Command            | Purpose                                      |
| ------------ | ------------------ | -------------------------------------------- |
| `pre-commit` | `pnpm lint-staged` | Lint & format staged files before committing |
| `pre-push`   | `pnpm build`       | Type-check and build before pushing          |

### lint-staged

On commit, staged files are processed:

- `*.{ts,tsx}` → ESLint fix + Prettier format
- `*.{json,md,css,html}` → Prettier format

---

<details>
<summary><strong>🎨 Theme System (MUI)</strong></summary>

## Overview

The theme system is built on [MUI (Material UI)](https://mui.com/) with Emotion and lives entirely in `src/theme/`.

```
src/theme/
├── index.ts              # Public exports
├── theme.ts              # createAppTheme() factory — entry point
├── palette.ts            # Light & dark colour tokens
├── typography.ts         # Font family, sizes, weights
├── overrides.ts          # Per-component style overrides
├── ThemeProvider.tsx     # AppThemeProvider component
└── ThemeModeContext.ts   # useThemeMode() hook + context
```

## How It Works

`createAppTheme(mode)` builds the MUI theme from the three token files and applies the component overrides. `AppThemeProvider` wraps the app, manages the active mode in state, and exposes `useThemeMode()` so any component can read or change the mode.

## Using the Theme in Components

```tsx
// Spacing, palette & breakpoints via sx prop
;<Box sx={{ mt: 2, color: 'primary.main', display: { xs: 'block', md: 'flex' } }} />

// Accessing the theme object directly
import { useTheme } from '@mui/material/styles'

const theme = useTheme()
console.log(theme.palette.primary.main)

// Reading / toggling colour mode
import { useThemeMode } from '@/theme'

const { mode, toggleMode } = useThemeMode()
```

## Enabling Dark Mode

Dark mode is fully wired up — just toggle it:

```typescript jsx
// Default to dark on app start
<AppThemeProvider defaultMode="dark">…</AppThemeProvider>

// Toggle at runtime (e.g. a settings button)
const {toggleMode} = useThemeMode()
< IconButton
onClick = {toggleMode} > < DarkModeIcon / > < /IconButton>
```

Dark colour tokens are in `src/theme/palette.ts` → `darkPalette`. Extend that object to override any colour.

## Customising the Theme

| What to change                | Where                                                   |
| ----------------------------- | ------------------------------------------------------- |
| Brand colours                 | `src/theme/palette.ts` → `lightPalette` / `darkPalette` |
| Font family / sizes           | `src/theme/typography.ts`                               |
| Component defaults & styles   | `src/theme/overrides.ts`                                |
| Breakpoints / spacing / shape | `src/theme/theme.ts` → `createAppTheme` object          |

### Example — Custom Primary Colour

```ts
// src/theme/palette.ts
export const lightPalette: PaletteOptions = {
  primary: { main: '#6200ea' }, // ← change this
}
```

### Example — Component Override

```ts
// src/theme/overrides.ts  →  MuiButton.styleOverrides.root
root: {
    borderRadius: 4,
        textTransform
:
    'uppercase',
}
```

### Example — Adding a New Breakpoint

```ts
// src/theme/theme.ts  →  createAppTheme()
breakpoints: {
    values: {
        xs: 0, sm
    :
        480, md
    :
        768, lg
    :
        1024, xl
    :
        1280
    }
,
}
,
```

## Atom Components

Three placeholder atoms wrap their MUI counterparts. Use them app-wide so global style tweaks only need a single change.

| Atom       | File                          | MUI base       |
| ---------- | ----------------------------- | -------------- |
| `<Button>` | `components/atoms/Button.tsx` | `MuiButton`    |
| `<Input>`  | `components/atoms/Input.tsx`  | `MuiTextField` |
| `<Card>`   | `components/atoms/Card.tsx`   | `MuiCard`      |

## PageTemplate

`<PageTemplate>` is the base layout for every page:

```tsx
import { PageTemplate } from '@/components/templates'

;<PageTemplate header={<AppBar />} footer={<Footer />} maxWidth="xl">
  {/* page content */}
</PageTemplate>
```

Props: `header`, `footer`, `maxWidth` (default `'lg'`), `disableGutter`.

</details>
