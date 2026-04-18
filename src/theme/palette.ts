/**
 * Theme palette — colors for light and dark modes.
 *
 * To add dark mode: populate the `dark` object with your colour tokens,
 * then pass `mode` to `createAppTheme` (e.g. from a React context / Redux slice).
 *
 * Example dark palette entry:
 *   dark: {
 *     primary: { main: '#90caf9' },
 *     background: { default: '#121212', paper: '#1e1e1e' },
 *     ...
 *   }
 */

import type { PaletteOptions } from '@mui/material/styles'

export const lightPalette: PaletteOptions = {
  mode: 'light',
  primary: {
    main: '#1976d2',
    light: '#42a5f5',
    dark: '#1565c0',
    contrastText: '#ffffff',
  },
  secondary: {
    main: '#9c27b0',
    light: '#ba68c8',
    dark: '#7b1fa2',
    contrastText: '#ffffff',
  },
  error: {
    main: '#d32f2f',
  },
  warning: {
    main: '#ed6c02',
  },
  info: {
    main: '#0288d1',
  },
  success: {
    main: '#2e7d32',
  },
  background: {
    default: '#f5f5f5',
    paper: '#ffffff',
  },
  text: {
    primary: '#212121',
    secondary: '#757575',
  },
}

/**
 * Dark palette — add your dark-mode colour tokens here.
 * The object is intentionally sparse; MUI will fill the rest with sensible defaults.
 */
export const darkPalette: PaletteOptions = {
  mode: 'dark',
  primary: {
    main: '#90caf9',
  },
  secondary: {
    main: '#ce93d8',
  },
  background: {
    default: '#121212',
    paper: '#1e1e1e',
  },
  text: {
    primary: '#ffffff',
    secondary: '#aaaaaa',
  },
}
