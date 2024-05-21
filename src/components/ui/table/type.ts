import type { DataTableColumn, DataTableRowExpansionProps, DataTableSortStatus } from "mantine-datatable"

export type Pagination = {
  currentPage: number
  totalPages: number
  limit: number
  onPageChange: (page: number | string) => void
  onLimitChange: (limit: number | string) => void
}

export type ExpandRows<T> = DataTableRowExpansionProps<T>

export type CustomDatatableProps<T> = {
  titleName: string
  tableKey?: string
  scrollHeight?: string | number
  emptyText?: string
  dataSource?: T[]
  columns: DataTableColumn<T>[]
  shouldPinLastColumn?: boolean
  sortStatus?: DataTableSortStatus<T>
  onSortChange?: (status: DataTableSortStatus<T>) => void
  toolBar?: React.ReactNode
  conditionRowStyle?:
    | string
    | ((record: T, index: number) => string | undefined)
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
        isSelectableRecord?: (record: T) => boolean
      }
    | {
        isSelectable?: false
        selectedRecords?: never
        onSelectedRecords?: never
        isSelectableRecord?: never
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
