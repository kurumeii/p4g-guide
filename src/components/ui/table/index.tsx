import Icons from "@/components/icons"
import { TABLE_PAGE_SIZES } from "@/configs/constants"
import {
  type DataTableColumn,
  type DataTableSortStatus,
  DataTable as MantineDataTable,
} from "mantine-datatable"

export type CustomDatatableProps<T> = {
  scrollHeight?: string | number
  emptyText?: string
  dataSource?: T[]
  columns: DataTableColumn<T>[]
  sortStatus?: DataTableSortStatus<T>
  onSortChange?: (status : DataTableSortStatus<T>) => void
  pagination?: {
    currentPage: number
    totalPages: number
    limit: number
    onPageChange: (page: number | string) => void
    onLimitChange: (limit: number | string) => void
  }
}

export default function Datatable<T>(props: CustomDatatableProps<T>) {
  return (
    <MantineDataTable
      striped
      withColumnBorders
      withRowBorders
      minHeight={props.scrollHeight ?? 300}
      noRecordsText={props.emptyText}
      records={props.dataSource}
      columns={props.columns}
      sortIcons={{
        sorted: <Icons.Sorted size={13} />,
        unsorted: <Icons.Unsorted size={13} />,
      }}
      sortStatus={props.sortStatus}
      onSortStatusChange={props.onSortChange}
      {...(props.pagination && {
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
