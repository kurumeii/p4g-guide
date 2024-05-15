import { themeVars } from '@/configs/custom-theme/theme'
import { style } from '@vanilla-extract/css'

export const styles = {
  logoContainer: style({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '@media': {
      [`screen and (max-width: ${themeVars.breakpoints.sm})`]: {
        justifyContent: 'space-between',
      },
    },
  }),
  logo: style({
    height: 80,
    width: 80,
  }),
}
