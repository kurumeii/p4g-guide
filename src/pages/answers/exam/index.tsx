import { TITLE } from "@/configs/constants"
import { useDocumentTitle } from "@mantine/hooks"

export default function ExamPage() {
  useDocumentTitle(`Exam - ${TITLE}`)
  return (
    <div>ExamPage</div>
  )
}
