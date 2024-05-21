import { themeVars } from '@/configs/custom-theme/theme'
import { style } from '@vanilla-extract/css'

export const classes = {
  tableContainer: style({
    flex: 1,
    overflow: 'auto',
    display: 'flex',
    flexDirection: 'column',
    rowGap: themeVars.spacing.xs,
  }),
  toolbar: style({
    padding: `${themeVars.spacing.md} ${themeVars.spacing.xs}`,
    paddingBottom: 0,
  }),
  table: style({
    flexGrow: 1
  })
}
