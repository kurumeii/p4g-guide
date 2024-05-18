import "@fontsource-variable/inter"
import "@fontsource/fira-mono"
import { createTheme } from "@mantine/core"
import { themeToVars } from "@mantine/vanilla-extract"

// Do not forget to pass theme to MantineProvider
export const theme = createTheme({
  fontFamily: "Inter Variable, sans-serif",
  fontFamilyMonospace: "Fira Code, monospace",
  defaultRadius: "md",
  shadows: {
    xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    sm: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
    md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
    lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
    xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
  },
  colors: {
    yellow: [
      "#fefce8",
      "#fef9c3",
      "#fef08a",
      "#fde047",
      "#facc15",
      "#eab308",
      "#ca8a04",
      "#a16207",
      "#854d0e",
      "#713f12",
    ],
  },
  primaryColor: "yellow",
  primaryShade: 5,
  breakpoints: {
    xl: "1280px",
    lg: "1024px",
    md: "768px",
    sm: "640px",
    xs: "480px",
  },
})

// CSS variables object, can be access in *.css.ts files
export const themeVars = themeToVars(theme)
