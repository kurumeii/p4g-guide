import { rem } from "@mantine/core"
import { style } from "@vanilla-extract/css"

export const styles = {
  root: style({
    paddingTop: rem(80),
    paddingBottom: rem(80),
    height: "100vh",
    width: "100vw",
  }),
  inner: style({
    position: "relative",
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
  }),
  image: style({
    position: "absolute",
    inset: 0,
    opacity: 0.5,
    height: "100%",
  }),
}
