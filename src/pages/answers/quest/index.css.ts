import { themeVars } from '@/configs/custom-theme/theme'
import { lighten } from '@mantine/core'
import { style } from '@vanilla-extract/css'

export const classes = {
  expandedContainer: style({
    fontSize: themeVars.fontSizes.sm,
    padding: themeVars.spacing.xs,
    paddingLeft: themeVars.spacing.md,
    selectors: {
      [themeVars.lightSelector]: {
        backgroundColor: lighten(themeVars.colors.gray[2], 0.1),
      },
      [themeVars.darkSelector]: {
        backgroundColor: lighten(themeVars.colors.dark[4], 0.1),
      },
    },
  }),
}
