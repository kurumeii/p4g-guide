import { themeVars } from "@/configs/custom-theme/theme";
import { style } from "@vanilla-extract/css";

export const styles = {
  text: style({
    margin: themeVars.spacing.sm,
    color: themeVars.colors.primaryColors[9]
  }),
}