
export type ExamTypes = 'popQuiz' | 'midterms' | 'finals' | 'advanced'
export type ExamReturnType = {
  date: string
  question: string
  answer: string
}
export type QuestReturnType = {
  'quest-no'?: string
  'quest-name': string
  'date-available':
    | string
    | {
        text: string
        onClick: () => void
      }
  reward: string
  location: string
  solution: string | string[]
  status?: boolean
}
