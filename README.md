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
