import Icons from "@/components/icons"
import { TABLE_PAGE_SIZES } from "@/configs/constants"
import type { CustomDatatableProps } from "@/types"
import { Tooltip } from "@mantine/core"
import {
  DataTable as MantineDataTable,
  useDataTableColumns,
} from "mantine-datatable"

export default function Datatable<T>(props: CustomDatatableProps<T>) {
  const tableKey = `p4g-table-columns${props.name}`
  const dataTableColumns = useDataTableColumns<T>({  
    key: tableKey,
    columns: props.columns
  })
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
      columns={dataTableColumns.effectiveColumns}
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
      storeColumnsKey={tableKey}
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
      {...(props.canExpand && {
        rowExpansion: props.rowExpansion,
      })}
    />
  )
}
