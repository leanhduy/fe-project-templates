import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import { useState, useMemo } from 'react'
import type { ReactNode } from 'react'

import { createAppTheme } from './theme'
import type { ThemeMode } from './theme'
import { ThemeModeContext } from './ThemeModeContext'
import type { ThemeModeContextValue } from './ThemeModeContext'

export interface AppThemeProviderProps {
  children: ReactNode
  defaultMode?: ThemeMode
}

/**
 * Wraps the app with MUI ThemeProvider + CssBaseline.
 *
 * Drop-in dark mode: pass `defaultMode="dark"` or call `toggleMode()` from
 * a child component (e.g. a settings button) via `useThemeMode()`.
 */
export function AppThemeProvider({ children, defaultMode = 'light' }: AppThemeProviderProps) {
  const [mode, setMode] = useState<ThemeMode>(defaultMode)

  const theme = useMemo(() => createAppTheme(mode), [mode])

  const contextValue = useMemo<ThemeModeContextValue>(
    () => ({
      mode,
      toggleMode: () => {
        setMode((prev) => (prev === 'light' ? 'dark' : 'light'))
      },
      setMode,
    }),
    [mode],
  )

  return (
    <ThemeModeContext value={contextValue}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeModeContext>
  )
}
