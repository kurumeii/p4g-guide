import Icons from "@/components/icons"
import { TABLE_PAGE_SIZES } from "@/configs/constants"
import { Tooltip } from "@mantine/core"
import {
  type DataTableColumn,
  type DataTableSortStatus,
  DataTable as MantineDataTable,
} from "mantine-datatable"

type Pagination = {
  currentPage: number
  totalPages: number
  limit: number
  onPageChange: (page: number | string) => void
  onLimitChange: (limit: number | string) => void
}

export type CustomDatatableProps<T> = {
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
  )

export default function Datatable<T>(props: CustomDatatableProps<T>) {
  return (
    <MantineDataTable
      striped
      withTableBorder
      highlightOnHover
      withColumnBorders
      withRowBorders
      minHeight={props.scrollHeight ?? 300}
      noRecordsText={props.emptyText}
      records={props.dataSource}
      columns={props.columns}
      sortIcons={{
        sorted: (
          <Tooltip
            label={
              props.sortStatus?.direction === "asc" ? "Ascending" : "Descending"
            }
          >
            <Icons.Sorted size={13} />
          </Tooltip>
        ),
        unsorted: <Icons.Unsorted size={13} />,
      }}
      sortStatus={props.sortStatus}
      onSortStatusChange={props.onSortChange}
      {...(props.isSelectable && {
        selectedRecords: props.selectedRecords,
        onSelectedRecordsChange: props.onSelectedRecords,
        selectionCheckboxProps: {
          variant: "outline",
        },
      })}
      {...(props.hasPagination && {
        page: props.pagination.currentPage,
        totalRecords: props.pagination.totalPages,
        recordsPerPage: props.pagination?.limit,
        recordsPerPageOptions: TABLE_PAGE_SIZES,
        recordsPerPageLabel: "",
        onPageChange: (page) => props.pagination?.onPageChange(Number(page)),
        onRecordsPerPageChange: (limit) =>
          props.pagination?.onLimitChange(Number(limit)),
        paginationText: ({ from, to, totalRecords }) =>
          `Showing ${from} to ${to} of ${totalRecords} records`,
      })}
    />
  )
}
