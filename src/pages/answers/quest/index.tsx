import Icons from "@/components/icons"
import Datatable from "@/components/ui/table"
import type { TABLE_PAGE_SIZES } from "@/configs/constants"
import { themeVars } from "@/configs/custom-theme/theme"
import { QUESTS } from "@/database/exam/quests"
import useSearchParamState from "@/hooks/useSearchParamState"
import useTitle from "@/hooks/useTitle"
import type { QuestReturnType } from "@/types"
import { Container, Group, Stack, Text, TextInput } from "@mantine/core"
import { useDebouncedValue } from "@mantine/hooks"
import type { DataTableColumn } from "mantine-datatable"
import { useEffect, useMemo, useState } from "react"
import * as R from "remeda"
import { classes } from "./index.css"

type Filter = {
  q?: string
  page: number
  limit: (typeof TABLE_PAGE_SIZES)[number]
  sortedBy?: string
  order?: "asc" | "desc"
}

export default function QuestPage() {
  const [filterParams, setFilterParams] = useSearchParamState<Filter>({
    limit: 10,
    page: 1,
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
  const [selectedRecords, setSelectedRecords] = useState<
    Partial<QuestReturnType>[]
  >([])
  const columns = useMemo<DataTableColumn<Partial<QuestReturnType>>[]>(
    () => [
      {
        title: "Quest",
        accessor: "quest-no",
        sortable: true,
        resizable: true,
      },
      {
        title: "Quest name",
        accessor: "quest-name",
        resizable: true,
        filtering: !R.isEmpty(searchValue),
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
      },
      {
        title: "Reward",
        accessor: "reward",
      },
      {
        title: "Location",
        accessor: "location",
      },
    ],
    [searchValue, setFilterParams]
  )

  //#region Effects
  useTitle("Quests")
  useEffect(() => {
    const data = R.pipe(
      quests.splice(
        (filterParams.page - 1) * filterParams.limit,
        filterParams.limit
      ),
      R.filter((item) =>
        searchValue
          ? item["quest-name"].toLowerCase().includes(searchValue.toLowerCase())
          : true
      ),
      R.sortBy((item) => filterParams?.sortedBy || item["quest-no"])
    )
    setRecords(filterParams?.order === "desc" ? data.reverse() : data)
  }, [
    searchValue,
    filterParams.page,
    filterParams.limit,
    filterParams.sortedBy,
    filterParams.order,
    quests,
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
      <Text fw={"bold"} pt="md">
        Most quests don't have time limits, but a few do have strict cut-off
        points. We make clear which below. Some quests also lead into others
        directly, meaning there's a strict order of progression - again, that's
        listed below.
      </Text>
      <Datatable
        name="quests"
        dataSource={records}
        columns={columns}
        emptyText="No quests found"
        sortStatus={{
          columnAccessor: filterParams.sortedBy ?? "quest-no",
          direction: filterParams.order ?? "asc",
        }}
        onSortChange={(status) => {
          setFilterParams({
            sortedBy: status.columnAccessor,
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
