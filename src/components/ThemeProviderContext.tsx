import { createContext, useState, useEffect } from 'react'
import type { ReactNode } from 'react'

export type Theme = 'dark' | 'light' | 'system'

export type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const initialState: ThemeProviderState = {
  theme: 'system',
  setTheme: () => {},
}

export const ThemeProviderContext =
  createContext<ThemeProviderState>(initialState)

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>('system')

  useEffect(() => {
    if (theme === 'system') {
      const prefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)',
      ).matches
      document.documentElement.setAttribute(
        'data-theme',
        prefersDark ? 'dark' : 'light',
      )
    } else {
      document.documentElement.setAttribute('data-theme', theme)
    }
  }, [theme])

  return (
    <ThemeProviderContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeProviderContext.Provider>
  )
}
