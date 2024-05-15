// theme.css.ts
import '@fontsource-variable/inter'
import { createTheme } from '@mantine/core'
import { themeToVars } from '@mantine/vanilla-extract'

// Do not forget to pass theme to MantineProvider
export const theme = createTheme({
  fontFamily: 'Inter Variable, sans-serif',
  defaultRadius: 'sm',
  colors: {
    yellow: [
      '#fefce8',
      '#fef9c3',
      '#fef08a',
      '#fde047',
      '#facc15',
      '#eab308',
      '#ca8a04',
      '#a16207',
      '#854d0e',
      '#713f12',
    ],
  },
  primaryColor: 'yellow',
  primaryShade: 5,
  breakpoints: {
    xl: '1280px',
    lg: '1024px',
    md: '768px',
    sm: '640px',
    xs: '480px',
  },
})

// CSS variables object, can be access in *.css.ts files
export const themeVars = themeToVars(theme)
