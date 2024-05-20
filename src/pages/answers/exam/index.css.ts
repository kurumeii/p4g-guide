import { themeVars } from "@/configs/custom-theme/theme"
import { style } from "@vanilla-extract/css"

export const classes = {
  tableContainer: style({
    paddingTop: themeVars.spacing.sm,
    flex: 1,
    overflow: "auto",
  }),
}
