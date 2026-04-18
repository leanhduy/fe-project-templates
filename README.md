# React + TypeScript + Vite — Project Template

A production-ready frontend project template using React, TypeScript, and Vite with strict linting, formatting, and Git hooks pre-configured.

## Tech Stack

- **Framework**: React 19 + TypeScript 6
- **Build Tool**: Vite 8
- **Linting**: ESLint 9 (flat config) with strict TypeScript, React, JSX a11y, and import rules
- **Formatting**: Prettier 3
- **Git Hooks**: Husky 9 (pre-commit, pre-push)
- **Staged Linting**: lint-staged

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
