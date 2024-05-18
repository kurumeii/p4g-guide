import {
  ActionIcon,
  Affix,
  type AffixBaseProps,
  Button,
  Tooltip,
  Transition,
  type TransitionProps,
} from "@mantine/core"
import { type ReactNode, useMemo } from "react"
import * as R from "remeda"
type Props = {
  mounted: boolean
  position:
    | "top"
    | "bottom"
    | "left"
    | "right"
    | "top-left"
    | "top-right"
    | "bottom-left"
    | "bottom-right"
    | AffixBaseProps["position"]
  onClick: () => void
  icon?: ReactNode
  label: string
  transitionStyle?: TransitionProps["transition"]
}

export default function FloatingButton(props: Props) {
  const position = useMemo<AffixBaseProps["position"]>(() => {
    if (!R.isString(props.position)) return props.position
    return props.position === "bottom"
      ? {
          bottom: 20,
        }
      : props.position === "top"
        ? {
            top: 20,
          }
        : props.position === "left"
          ? {
              left: 20,
            }
          : props.position === "right"
            ? {
                right: 20,
              }
            : props.position === "top-left"
              ? {
                  top: 20,
                  left: 20,
                }
              : props.position === "top-right"
                ? {
                    top: 20,
                    right: 20,
                  }
                : props.position === "bottom-left"
                  ? {
                      bottom: 20,
                      left: 20,
                    }
                  : {
                      bottom: 20,
                      right: 20,
                    }
  }, [props.position])

  return (
    <Affix position={position}>
      <Transition
        transition={props.transitionStyle ?? "slide-up"}
        mounted={props.mounted}
      >
        {(transitionStyles) =>
          props.icon ? (
            <Tooltip label={props.label}>
              <ActionIcon style={transitionStyles} onClick={props.onClick}>
                {props.icon}
              </ActionIcon>
            </Tooltip>
          ) : (
            <Tooltip label={props.label}>
              <Button style={transitionStyles} onClick={props.onClick}>
                {props.label}
              </Button>
            </Tooltip>
          )
        }
      </Transition>
    </Affix>
  )
}
