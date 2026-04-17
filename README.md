# Frontend Project Templates

A modern, production-ready React + TypeScript template for building scalable frontend applications with industry-standard tooling and best practices.

## Overview

This repository provides a curated template to jumpstart new React projects with a carefully selected tech stack. Instead of configuring Vite from scratch, clone this template and start developing immediately with pre-configured tools, linting rules, and folder structure.

**Target Use Cases:**

- Professional frontend projects
- Portfolio showcase projects
- Team-based development
- Learning modern React patterns and conventions

---

## Tech Stack

### Core

- **Language:** TypeScript (strict mode)
- **Framework:** React 18+ (with Hooks)
- **Build Tool:** Vite
- **Runtime:** Node.js 18+

### State Management & Data Fetching

- **State Management:** Redux Toolkit (RTK)
  - Centralized state management
  - Built-in Redux DevTools support
  - Simplified Redux boilerplate with `createSlice`
- **Query Management:** RTK Query
  - Server state management with automatic caching
  - Request deduplication and error handling
  - Optimistic updates and polling support
  - Built into Redux store

### UI & Styling

- **UI Component Library:** Material-UI (MUI)
  - Enterprise-grade components
  - Theming system with CSS variables
  - Accessibility-first design
- **Styling Solution:** Emotion with styled-components
  - CSS-in-JS for component scoping
  - Dynamic styling with props
  - Better performance than traditional CSS

### Forms & Validation

- **Form State Management:** React Hook Form
  - Minimal re-renders
  - Small bundle size
  - Easy integration with validation libraries
- **Schema Validation:** Zod
  - TypeScript-first validation
  - Automatic type inference from schemas
  - Excellent error messages and customization

### API & Data

- **HTTP Mocking:** Mock Service Worker (MSW)
  - Request interception at network layer
  - Works with real HTTP requests
  - Shareable mock definitions

### Internationalization

- **i18n Framework:** i18next
  - Multi-language support
  - Namespace-based organization
  - Dynamic language switching

### Security & Authentication

- **JWT Decoding:** jwt-decode
  - Parse JWT tokens client-side
  - Extract claims without verification
- **Cookie Management:** js-cookie
  - Simple cookie read/write/delete operations
  - No dependencies

### Environment Management

- **Environment Variables:** dotenv
  - Load variables from `.env` files
  - Type-safe environment validation

### Testing

- **Unit & Component Testing:** Vitest
  - Fast, modern test runner
  - Drop-in Mocha/Jest compatible
- **Component Testing Library:** React Testing Library
  - Query DOM the way users interact with it
  - Focus on behavior, not implementation

### Code Quality

- **Linting:** ESLint
  - Configured with TypeScript support
  - AirBnB rules (customizable)
  - React and React Hooks plugins
- **Code Formatting:** Prettier
  - Automatic code formatting
  - Zero-config setup included
- **Git Hooks:** Husky
  - Pre-commit: Run linting
  - Pre-push: Run tests
  - Prevents broken code from entering repository

---

## Project Structure

```
fe-project-templates/
├── public/                          # Static assets
│   ├── icons/
│   └── images/
│
├── src/
│   ├── components/                  # Reusable UI components (Atomic Design)
│   │   ├── atoms/                   # Basic building blocks (Button, Input, Label, etc.)
│   │   │   ├── Button.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Label.tsx
│   │   │   └── index.ts
│   │   ├── molecules/               # Simple combinations (InputGroup, FormField, etc.)
│   │   │   ├── FormField.tsx
│   │   │   ├── InputGroup.tsx
│   │   │   └── index.ts
│   │   ├── organisms/               # Complex sections (Header, Footer, Forms, etc.)
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── NavigationBar.tsx
│   │   │   └── index.ts
│   │   └── templates/               # Page-level layouts (PageTemplate, etc.)
│   │       ├── PageTemplate.tsx
│   │       └── index.ts
│   │
│   ├── features/                    # Feature-specific modules (domain-driven)
│   │   ├── auth/                    # Authentication feature
│   │   │   ├── api/
│   │   │   │   ├── authApi.ts      # RTK Query endpoints
│   │   │   │   └── types.ts        # API request/response types
│   │   │   ├── hooks/
│   │   │   │   ├── useLogin.ts
│   │   │   │   ├── useLogout.ts
│   │   │   │   └── index.ts
│   │   │   ├── slices/
│   │   │   │   ├── authSlice.ts    # Redux state
│   │   │   │   └── index.ts
│   │   │   ├── components/
│   │   │   │   ├── LoginForm.tsx
│   │   │   │   ├── RegisterForm.tsx
│   │   │   │   └── index.ts
│   │   │   └── index.ts
│   │   │
│   │   ├── dashboard/               # Dashboard feature
│   │   │   ├── api/
│   │   │   │   ├── dashboardApi.ts
│   │   │   │   └── types.ts
│   │   │   ├── hooks/
│   │   │   │   ├── useDashboardData.ts
│   │   │   │   └── index.ts
│   │   │   ├── slices/
│   │   │   │   ├── dashboardSlice.ts
│   │   │   │   └── index.ts
│   │   │   ├── components/
│   │   │   │   ├── StatsCard.tsx
│   │   │   │   ├── ChartSection.tsx
│   │   │   │   └── index.ts
│   │   │   └── index.ts
│   │   │
│   │   └── [other-features]/        # Additional features follow same pattern
│   │       ├── api/
│   │       ├── hooks/
│   │       ├── slices/
│   │       ├── components/
│   │       └── index.ts
│   │
│   ├── pages/                       # Page components (route-based)
│   │   ├── HomePage.tsx
│   │   ├── DashboardPage.tsx
│   │   ├── NotFoundPage.tsx
│   │   └── index.ts
│   │
│   ├── services/                    # Service layer
│   │   ├── api.ts                   # RTK Query base API setup
│   │   ├── auth.service.ts          # Auth utilities (token, cookie helpers)
│   │   └── storage.service.ts       # Local/session storage utilities
│   │
│   ├── hooks/                       # Custom React hooks
│   │   ├── useAuth.ts               # Global auth state
│   │   ├── useLocalStorage.ts       # Local storage management
│   │   ├── useAsync.ts              # Generic async handler
│   │   └── index.ts
│   │
│   ├── utils/                       # Utility functions
│   │   ├── formatters.ts            # Date, number, string formatters
│   │   ├── validators.ts            # Validation helpers (reusable Zod schemas)
│   │   ├── constants.ts             # App-wide constants
│   │   └── index.ts
│   │
│   ├── types/                       # Global TypeScript types
│   │   ├── api.ts                   # API-related types
│   │   ├── models.ts                # Domain models
│   │   └── index.ts
│   │
│   ├── i18n/                        # Internationalization
│   │   ├── i18n.ts                  # i18next configuration
│   │   ├── locales/
│   │   │   ├── en/
│   │   │   │   ├── common.json      # Common translations
│   │   │   │   ├── auth.json        # Auth feature translations
│   │   │   │   └── dashboard.json   # Dashboard feature translations
│   │   │   └── [language]/          # Other languages (es, fr, vi, etc.)
│   │   │       ├── common.json
│   │   │       ├── auth.json
│   │   │       └── dashboard.json
│   │   └── index.ts
│   │
│   ├── store/                       # Redux store configuration
│   │   ├── store.ts                 # Store setup with middleware
│   │   ├── rootReducer.ts           # Combine all slices
│   │   └── index.ts
│   │
│   ├── theme/                       # Theme configuration (MUI + Emotion)
│   │   ├── theme.ts                 # MUI theme definition
│   │   ├── colors.ts                # Color palette
│   │   └── index.ts
│   │
│   ├── mocks/                       # Mock Service Worker setup
│   │   ├── handlers.ts              # MSW request handlers
│   │   ├── server.ts                # MSW server setup (Node.js for tests)
│   │   ├── browser.ts               # MSW browser setup (for development)
│   │   └── index.ts
│   │
│   ├── App.tsx                      # Main App component
│   ├── main.tsx                     # React DOM entry point
│   └── index.css                    # Global styles
│
├── tests/                           # Test utilities and setup
│   ├── setup.ts                     # Test environment setup
│   ├── mocks.ts                     # Test-specific mocks
│   └── utils.ts                     # Testing utilities (render with providers)
│
├── .env.example                     # Environment variables template
├── .env.local                       # Local environment (gitignored)
├── .env.test                        # Test environment variables
│
├── .eslintrc.cjs                    # ESLint configuration
├── .prettierrc.json                 # Prettier configuration
├── tsconfig.json                    # TypeScript configuration
├── vite.config.ts                   # Vite configuration
├── vitest.config.ts                 # Vitest configuration
│
├── .husky/                          # Git hooks
│   ├── pre-commit                   # Lint before commit
│   └── pre-push                     # Test before push
│
├── package.json                     # Dependencies and scripts
├── README.md                        # This file
└── LICENSE                          # MIT License
```

---

## Key Folder Descriptions

### `src/components/` - Atomic Design System

Follows the Atomic Design methodology:

- **atoms**: Smallest, reusable components (Button, Input, Badge)
- **molecules**: Simple combinations of atoms (FormField, InputGroup)
- **organisms**: Complex sections combining multiple molecules (Header, LoginForm)
- **templates**: Page-level layouts with placeholder content

### `src/features/` - Feature Modules

Each feature is self-contained with its own:

- **api/** - RTK Query endpoints and types
- **hooks/** - Feature-specific custom hooks
- **slices/** - Redux state and reducers
- **components/** - Feature-specific React components
- **index.ts** - Public exports (barrel pattern)

This separation makes features easy to understand, test, and maintain independently.

### `src/services/` - Application Services

Shared utilities and cross-cutting concerns:

- RTK Query base configuration
- Authentication service (token/cookie management)
- Storage service (localStorage/sessionStorage wrappers)

### `src/store/` - Redux Configuration

Centralized Redux setup with all slices combined. Single source of truth for application state.

### `src/theme/` - Design System

MUI theme configuration and Emotion styling setup. Centralized design tokens.

### `src/mocks/` - Mock Service Worker

MSW request handlers for development and testing. Works with real HTTP requests without a backend.

### `src/i18n/` - Internationalization

Translation files organized by language and feature. i18next configuration for multi-language support.

---

## Setup Instructions

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/fe-project-templates.git
   cd fe-project-templates
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Setup Husky (Git hooks)**

   ```bash
   npx husky install
   ```

4. **Configure environment variables**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```

### Available Scripts

```bash
# Development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run tests (watch mode)
npm run test

# Run tests with coverage report
npm run test:coverage

# Lint code
npm run lint

# Format code with Prettier
npm run format

# Format and fix linting errors
npm run format:fix
```

---

## Configuration Files Explained

### `.env.example` → `.env.local`

Template for environment variables. Copy to `.env.local` (gitignored) and configure:

```env
VITE_API_BASE_URL=http://localhost:3000/api
VITE_APP_NAME=My App
VITE_ENVIRONMENT=development
VITE_ENABLE_MOCKS=true
```

Variables prefixed with `VITE_` are injected at build time in Vite.

### `tsconfig.json`

TypeScript configuration with:

- `strict: true` - Strict type checking
- `jsx: react-jsx` - React 17+ JSX transform
- Path aliases (`@/*` → `src/*`) for cleaner imports

### `vite.config.ts`

Vite build configuration with React plugin, path aliases, and environment handling.

### `.eslintrc.cjs`

ESLint rules:

- AirBnB base rules (customizable)
- TypeScript support
- React and React Hooks plugins
- Prettier integration to avoid conflicts

### `.prettierrc.json`

Prettier formatting rules:

- 2-space indentation
- Single quotes
- No semicolons
- 100 character line width

### `.husky/pre-commit`

Runs ESLint on staged files before commit.

### `.husky/pre-push`

Runs test suite before pushing to prevent broken code.

---

## Development Workflow

### 1. Creating a New Feature

```
src/features/myFeature/
├── api/
│   ├── myFeatureApi.ts      # RTK Query definition
│   └── types.ts             # API types
├── hooks/
│   ├── useMyFeature.ts
│   └── index.ts
├── slices/
│   ├── myFeatureSlice.ts    # Redux state
│   └── index.ts
├── components/
│   ├── FeatureComponent.tsx
│   └── index.ts
└── index.ts                 # Barrel export
```

### 2. Using RTK Query

```typescript
// In features/myFeature/api/myFeatureApi.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const myFeatureApi = createApi({
  reducerPath: 'myFeatureApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    getItems: builder.query({
      query: () => '/items',
    }),
  }),
});

export const { useGetItemsQuery } = myFeatureApi;
```

### 3. Using Redux State

```typescript
// In features/myFeature/slices/myFeatureSlice.ts
import { createSlice } from '@reduxjs/toolkit';

const myFeatureSlice = createSlice({
  name: 'myFeature',
  initialState: {
    /* ... */
  },
  reducers: {
    /* ... */
  },
});

export default myFeatureSlice.reducer;
```

### 4. Component with Form Validation

```typescript
// Using React Hook Form + Zod
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Form fields */}
    </form>
  );
}
```

### 5. Internationalization

```typescript
// In components
import { useTranslation } from 'i18next';

function MyComponent() {
  const { t } = useTranslation('common');
  return <h1>{t('welcome')}</h1>;
}
```

Translation files: `src/i18n/locales/[language]/common.json`

### 6. Mocking API Requests

```typescript
// In src/mocks/handlers.ts
import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('/api/items', () => {
    return HttpResponse.json([{ id: 1, name: 'Item 1' }]);
  }),
];
```

---

## Testing

### Unit/Component Tests

```bash
npm run test              # Run tests in watch mode
npm run test:coverage     # Generate coverage report
```

Tests should be colocated with components:

```
src/features/auth/components/
├── LoginForm.tsx
└── LoginForm.test.tsx
```

### Test Setup

The test environment includes:

- Vitest with jsdom environment
- React Testing Library
- MSW for API mocking
- Custom render utility with Redux/i18n providers

---

## Code Quality Standards

- **No console errors** - Tests or linting will catch these
- **100% TypeScript** - No `any` types without explicit `// @ts-expect-error`
- **ESLint passing** - Run `npm run lint` before committing
- **Tests passing** - Git hook prevents pushing failing tests
- **Formatted with Prettier** - Auto-formatted on commit (Husky)

---

## Common Patterns

### Accessing Global Auth State

```typescript
import { useAuth } from '@/hooks';

function MyComponent() {
  const { user, isLoading, logout } = useAuth();
  // ...
}
```

### Calling API with RTK Query

```typescript
import { useGetItemsQuery } from '@/features/items/api';

function ItemsList() {
  const { data, isLoading, error } = useGetItemsQuery();
  // ...
}
```

### Accessing Environment Variables

```typescript
const apiUrl = import.meta.env.VITE_API_BASE_URL;
```

### Using Theme

```typescript
import { useTheme } from '@mui/material/styles';

function MyComponent() {
  const theme = useTheme();
  return <div style={{ color: theme.palette.primary.main }} />;
}
```

---

## Best Practices

1. **Keep components small** - Single responsibility principle
2. **Use custom hooks** - Extract logic into reusable hooks
3. **Type everything** - Leverage TypeScript's full power
4. **Use Zod for validation** - Runtime and type safety
5. **RTK Query first** - Use for all server state
6. **RTK slices only** - Use Redux only for client-side state
7. **Mock APIs early** - Use MSW to develop without backend
8. **Test behavior** - Use React Testing Library, not implementation
9. **Commit frequently** - Husky will keep you honest
10. **Keep i18n organized** - Group translations by feature

---

## Resources

- [React Documentation](https://react.dev)
- [Redux Toolkit](https://redux-toolkit.js.org)
- [RTK Query](https://redux-toolkit.js.org/rtk-query/overview)
- [Material-UI (MUI)](https://mui.com)
- [React Hook Form](https://react-hook-form.com)
- [Zod Validation](https://zod.dev)
- [Vitest](https://vitest.dev)
- [i18next](https://www.i18next.com)
- [Mock Service Worker](https://mswjs.io)
- [Atomic Design](https://atomicdesign.bradfrost.com)

---

## License

MIT License - feel free to use this template for personal and commercial projects.

---

## Contributing

If you improve this template, consider sharing your enhancements back to the community.

---

## Questions?

For setup issues or questions about the template, refer to the official documentation of each library listed in the Tech Stack section.
