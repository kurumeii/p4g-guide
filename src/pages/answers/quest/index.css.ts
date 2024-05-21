import { themeVars } from '@/configs/custom-theme/theme'
import { darken, lighten } from '@mantine/core'
import { style } from '@vanilla-extract/css'
import clsx from 'clsx'

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
  markedRow: style({
    selectors: {
      [themeVars.lightSelector]: {
        color: clsx(themeVars.colors.green[6], '!important'),
        backgroundColor: clsx(themeVars.colors.green[0], '!important'),
      },
      [themeVars.darkSelector]: {
        color: clsx(themeVars.colors.green[7], '!important'),
        backgroundColor: clsx(darken(themeVars.colors.green[0], 0.7), '!important'),
      },
    },
  }),
}
