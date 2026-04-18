import type { Components, Theme } from '@mui/material/styles'

/**
 * Global MUI component overrides.
 *
 * Add per-component style overrides here. Each key maps to a MUI component name.
 * See: https://mui.com/material-ui/customization/theme-components/
 *
 * Example — adding an override for a new component:
 *
 *   MuiChip: {
 *     styleOverrides: {
 *       root: { borderRadius: 4 },
 *     },
 *   },
 */
export const components: Components<Omit<Theme, 'components'>> = {
  // ─── CssBaseline (global reset) ────────────────────────────────────────────
  MuiCssBaseline: {
    styleOverrides: `
      *, *::before, *::after { box-sizing: border-box; }
      html { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
      body { margin: 0; }
      img, video { max-width: 100%; display: block; }
      a { color: inherit; text-decoration: none; }
    `,
  },

  // ─── Button ────────────────────────────────────────────────────────────────
  MuiButton: {
    defaultProps: {
      disableElevation: true,
    },
    styleOverrides: {
      root: {
        borderRadius: 8,
        // Add global Button style overrides here
      },
    },
    variants: [
      {
        props: { variant: 'contained', color: 'primary' },
        style: {
          // Override contained primary button styles here
        },
      },
      {
        props: { variant: 'outlined', color: 'primary' },
        style: {
          // Override outlined primary button styles here
        },
      },
    ],
  },

  // ─── Input / TextField ─────────────────────────────────────────────────────
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        borderRadius: 8,
        // Add global Input style overrides here
      },
    },
  },

  // ─── Card ──────────────────────────────────────────────────────────────────
  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: 12,
        // Add global Card style overrides here
      },
    },
  },

  // ─── Typography ────────────────────────────────────────────────────────────
  MuiTypography: {
    styleOverrides: {
      root: {
        // Add global Typography style overrides here
      },
    },
  },
}
