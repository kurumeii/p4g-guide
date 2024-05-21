import Icons from "@/components/icons"
import Datatable from "@/components/ui/table"
import { TABLE_KEYS, type TABLE_PAGE_SIZES } from "@/configs/constants"
import { themeVars } from "@/configs/custom-theme/theme"
import { QUESTS } from "@/database/exam/quests"
import useSearchParamState from "@/hooks/useSearchParamState"
import useTitle from "@/hooks/useTitle"
import type { QuestReturnType } from "@/types"
import { Button, Container, Group, Stack, Text, TextInput } from "@mantine/core"
import { useDebouncedValue, useLocalStorage } from "@mantine/hooks"
import { type DataTableColumn, useDataTableColumns } from "mantine-datatable"
import { useEffect, useMemo, useState } from "react"
import * as R from "remeda"
import { classes } from "./index.css"

type Filter = {
  q?: string
  page: number
  limit: (typeof TABLE_PAGE_SIZES)[number]
  sortedBy?: keyof QuestReturnType
  order?: "asc" | "desc"
}

export default function QuestPage() {
  const [filterParams, setFilterParams] = useSearchParamState<Filter>({
    limit: 10,
    page: 1,
    order: "asc",
    sortedBy: "quest-no",
  })

  const [searchValue] = useDebouncedValue(filterParams.q, 500)
  const quests = QUESTS.map((q, i) => {
    return {
      ...q,
      "quest-no": `No.${i + 1}`,
      id: `quest-${i + 1}`,
    }
  })

  const [records, setRecords] = useState(quests)
  const [selectedRecords, setSelectedRecords] = useState<QuestReturnType[]>([])
  const [savedRecords, setSavedRecords] = useLocalStorage<QuestReturnType[]>({
    key: "marked-quests",
    defaultValue: [],
  })
  const columns = useMemo<DataTableColumn<QuestReturnType>[]>(
    () => [
      {
        title: "Quest",
        accessor: "quest-no",
        sortable: true,
        resizable: true,
        draggable: true,
      },
      {
        title: "Quest name",
        accessor: "quest-name",
        resizable: true,
        width: 250,
        ellipsis: true,
        filtering: !R.isEmpty(searchValue),
        draggable: true,
        filter: (
          <TextInput
            label="Search for a quest"
            placeholder="Type something..."
            defaultValue={searchValue}
            rightSection={
              <Icons.Search color={themeVars.colors.gray[4]} stroke={1.4} />
            }
            onChange={(event) =>
              setFilterParams({ q: event.currentTarget.value })
            }
          />
        ),
      },
      {
        title: "Availability",
        accessor: "date-available",
        draggable: true,
      },
      {
        title: "Reward",
        accessor: "reward",
        draggable: true,
      },
      {
        title: "Location",
        accessor: "location",
        draggable: true,
      },
      {
        title: "Status",
        accessor: "status",
        textAlign: "center",
        sortable: true,
        render: (record) =>
          R.find(savedRecords, R.isDeepEqual(record)) ? (
            <Icons.Check size={"1rem"} stroke={1.4} />
          ) : null,
      },
    ],
    [searchValue, setFilterParams, savedRecords]
  )

  const dataTableColumns = useDataTableColumns({
    key: TABLE_KEYS.QUESTS,
    columns,
  })

  const ToolBar = useMemo(
    () => (
      <>
        {selectedRecords.length > 0 && (
          <Group>
            <Button
              onClick={() => {
                setSavedRecords(R.unique([...savedRecords, ...selectedRecords]))
                setSelectedRecords([])
              }}
              variant="default"
              rightSection={<Icons.Marked size={"1rem"} stroke={1.4} />}
            >
              Mark as done
            </Button>
          </Group>
        )}
      </>
    ),
    [selectedRecords, savedRecords, setSavedRecords]
  )

  //#region Effects
  useTitle("Quests")
  useEffect(() => {
    const data = R.pipe(
      quests,
      (item) =>
        item.slice(
          (filterParams.page - 1) * filterParams.limit,
          filterParams.page * filterParams.limit
        ),
      R.filter((item) =>
        searchValue
          ? item["quest-name"].toLowerCase().includes(searchValue.toLowerCase())
          : true
      ),
      R.sortBy((item) => {
        if (filterParams.sortedBy === "status") {
          return !!R.find(savedRecords, R.isDeepEqual(item))
        }
        if (filterParams.sortedBy === "quest-no") {
          return Number.parseInt(
            item[filterParams.sortedBy ?? "quest-no"].split(".")[1]
          )
        }
        return item[filterParams.sortedBy ?? "quest-no"]
      })
    )
    setRecords(filterParams?.order === "desc" ? data.reverse() : data)
  }, [
    searchValue,
    filterParams.page,
    filterParams.limit,
    filterParams.sortedBy,
    filterParams.order,
    quests,
    savedRecords,
  ])

  //#endregion

  return (
    <Container
      fluid
      pt={"md"}
      display={"flex"}
      style={{
        flexDirection: "column",
        flexGrow: 1,
      }}
    >
      <Text fw={"bold"} pb="md">
        Most quests don't have time limits, but a few do have strict cut-off
        points. We make clear which below. Some quests also lead into others
        directly, meaning there's a strict order of progression - again, that's
        listed below.
      </Text>
      <Datatable
        titleName="List of quests"
        toolBar={ToolBar}
        tableKey={TABLE_KEYS.QUESTS}
        dataSource={records}
        columns={dataTableColumns.effectiveColumns}
        emptyText="No quests found"
        conditionRowStyle={(record) =>
          R.find(savedRecords, R.isDeepEqual(record)) ? classes.markedRow : ""
        }
        sortStatus={{
          columnAccessor: filterParams.sortedBy ?? "quest-no",
          direction: filterParams.order ?? "asc",
        }}
        onSortChange={(status) => {
          setFilterParams({
            sortedBy: status.columnAccessor as Filter["sortedBy"],
            order: status.direction,
          })
        }}
        hasPagination
        pagination={{
          currentPage: +filterParams.page,
          limit: +filterParams.limit,
          totalPages: quests.length ?? 0,
          onLimitChange(limit) {
            setFilterParams({ limit: limit as Filter["limit"], page: 1 })
          },
          onPageChange(page) {
            setFilterParams({ page: +page })
          },
        }}
        canExpand
        rowExpansion={{
          allowMultiple: true,
          content: ({ record }) => (
            <Group className={classes.expandedContainer}>
              {R.isArray(record.solution) ? (
                <span>
                  Steps to complete:
                  <Stack gap={"xs"} component={"ul"}>
                    {record.solution.map((solution) => (
                      <li key={`solution-${solution}`}>{solution}</li>
                    ))}
                  </Stack>
                </span>
              ) : (
                <span>{record.solution}</span>
              )}
            </Group>
          ),
        }}
        isSelectable
        selectedRecords={selectedRecords}
        onSelectedRecords={setSelectedRecords}
      />
    </Container>
  )
}
