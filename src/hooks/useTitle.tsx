import { TITLE } from "@/configs/constants"
import { useDocumentTitle } from "@mantine/hooks"

export default function useTitle(title: string) {
  useDocumentTitle(`${title} - ${TITLE}`)
}
