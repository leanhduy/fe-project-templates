import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import type { ReactNode } from 'react'
import { useMemo, useState } from 'react'

import type { ThemeMode } from './theme'
import { createAppTheme } from './theme'
import type { ThemeModeContextValue } from './ThemeModeContext'
import { ThemeModeContext } from './ThemeModeContext'

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
export function AppThemeProvider({ children, defaultMode = 'dark' }: AppThemeProviderProps) {
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
