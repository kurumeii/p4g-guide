import Icons from "@/components/icons"
import { TABLE_PAGE_SIZES } from "@/configs/constants"
import { ActionIcon, Box, Group, Modal, Title, Tooltip } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import { DataTable as MantineDataTable } from "mantine-datatable"
import { classes } from "./index.css"
import type { CustomDatatableProps } from "./type"

export default function Datatable<T>(props: CustomDatatableProps<T>) {
  const [opened, {toggle }] = useDisclosure(false)

  const Table = (
    <Box className={classes.tableContainer}>
      <Group justify="space-between" align="center" className={classes.toolbar}>
        <Group>
          <Title order={3}>{props.titleName}</Title>
        </Group>
        <Group justify="flex-end">
          {props.toolBar}
          <ActionIcon
            onClick={toggle}
            title={opened ? "Close fullscreen" : "Open fullscreen"}
            variant="default"
          >
            {opened ? (
              <Icons.ExitFullscreen stroke={1.4} />
            ) : (
              <Icons.Fullscreen stroke={1.4} />
            )}
          </ActionIcon>
        </Group>
      </Group>
      <MantineDataTable
        striped
        withTableBorder
        highlightOnHover
        withColumnBorders
        withRowBorders
        rowClassName={props.conditionRowStyle}
        minHeight={props.scrollHeight}
        className={classes.table}
        noRecordsText={props.emptyText}
        records={props.dataSource}
        columns={props.columns}
        pinLastColumn={props.shouldPinLastColumn}
        sortIcons={{
          sorted: (
            <Tooltip
              label={
                props.sortStatus?.direction === "asc"
                  ? "Ascending"
                  : "Descending"
              }
            >
              <Icons.Sorted size={13} />
            </Tooltip>
          ),
          unsorted: <Icons.Unsorted size={13} />,
        }}
        textSelectionDisabled
        sortStatus={props.sortStatus}
        onSortStatusChange={props.onSortChange}
        storeColumnsKey={props.tableKey}
        {...(props.isSelectable
          ? {
              selectedRecords: props.selectedRecords,
              onSelectedRecordsChange: props.onSelectedRecords,
              isRecordSelectable: props.isSelectableRecord,
            }
          : null)}
        {...(props.hasPagination
          ? {
              page: props.pagination.currentPage,
              totalRecords: props.pagination.totalPages,
              recordsPerPage: props.pagination?.limit,
              recordsPerPageOptions: TABLE_PAGE_SIZES,
              recordsPerPageLabel: "",
              onPageChange: (page) =>
                props.pagination?.onPageChange(Number(page)),
              onRecordsPerPageChange: (limit) =>
                props.pagination?.onLimitChange(Number(limit)),
              paginationText: ({ from, to, totalRecords }) =>
                `From ${from} to ${to} of ${totalRecords} total records`,
              paginationWithEdges: true,
            }
          : null)}
        {...(props.canExpand
          ? {
              rowExpansion: props.rowExpansion,
            }
          : null)}
      />
    </Box>
  )

  return (
    <>
      {Table}
      <Modal
        styles={{
          body: {
            height: "100%",
            display: "flex",
            padding: 0,
          },
        }}
        opened={opened}
        onClose={toggle}
        fullScreen
        withCloseButton={false}
      >
        {Table}
      </Modal>
    </>
  )
}
