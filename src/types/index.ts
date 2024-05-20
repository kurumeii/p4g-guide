import type {
  DataTableColumn,
  DataTableRowExpansionProps,
  DataTableSortStatus,
} from 'mantine-datatable'

export type ExamTypes = 'popQuiz' | 'midterms' | 'finals' | 'advanced'
export type ExamReturnType = {
  date: string
  question: string
  answer: string
}
export type QuestReturnType = {
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
}

export type Pagination = {
  currentPage: number
  totalPages: number
  limit: number
  onPageChange: (page: number | string) => void
  onLimitChange: (limit: number | string) => void
}

export type ExpandRows<T> = DataTableRowExpansionProps<T>

export type CustomDatatableProps<T> = {
  name: string
  scrollHeight?: string | number
  emptyText?: string
  dataSource?: T[]
  columns: DataTableColumn<T>[]
  sortStatus?: DataTableSortStatus<T>
  onSortChange?: (status: DataTableSortStatus<T>) => void
} & (
  | {
      hasPagination: true
      pagination: Pagination
    }
  | {
      hasPagination?: false
      pagination?: never
    }
) &
  (
    | {
        isSelectable: true
        selectedRecords: T[]
        onSelectedRecords: (records: T[]) => void
      }
    | {
        isSelectable?: false
        selectedRecords?: never
        onSelectedRecords?: never
      }
  ) &
  (
    | {
        canExpand: true
        rowExpansion: ExpandRows<T>
      }
    | {
        canExpand?: false
        rowExpansion?: never
      }
  )
