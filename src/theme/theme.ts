import { createTheme } from '@mui/material/styles'

import { components } from './overrides'
import { darkPalette, lightPalette } from './palette'
import { typography } from './typography'

export type ThemeMode = 'light' | 'dark'

/**
 * Factory that creates the MUI theme for the given mode.
 *
 * Usage:
 *   const theme = createAppTheme('light')   // or 'dark'
 *
 * To add dark-mode tokens, edit `src/theme/palette.ts` → `darkPalette`.
 * To add breakpoints or spacing overrides, extend the object below.
 */
export const createAppTheme = (mode: ThemeMode = 'light') =>
  createTheme({
    palette: mode === 'dark' ? darkPalette : lightPalette,
    typography,
    components,
    shape: {
      borderRadius: 8,
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
    spacing: 8, // 1 unit = 8px  →  theme.spacing(2) = 16px
  })

/** Pre-built light theme (convenience export) */
export const lightTheme = createAppTheme('light')

/** Pre-built dark theme (convenience export) */
export const darkTheme = createAppTheme('dark')
