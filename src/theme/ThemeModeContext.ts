import { createContext, useContext } from 'react'

import type { ThemeMode } from './theme'

export interface ThemeModeContextValue {
  mode: ThemeMode
  toggleMode: () => void
  setMode: (mode: ThemeMode) => void
}

export const ThemeModeContext = createContext<ThemeModeContextValue>({
  mode: 'light',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggleMode: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setMode: () => {},
})

/** Access the current colour mode and toggle/set helpers from any component. */
export const useThemeMode = () => useContext(ThemeModeContext)
