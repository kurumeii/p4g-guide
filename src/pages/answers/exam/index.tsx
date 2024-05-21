import Icons from "@/components/icons"
import Datatable from "@/components/ui/table"
import type { MONTHS, TABLE_PAGE_SIZES } from "@/configs/constants"
import { themeVars } from "@/configs/custom-theme/theme"
import { EXAMS } from "@/database/exam/exam"
import useSearchParamState from "@/hooks/useSearchParamState"
import useTitle from "@/hooks/useTitle"
import type { ExamReturnType, ExamTypes } from "@/types"
import { Container, Flex, Select, Text, TextInput } from "@mantine/core"
import { useDebouncedValue } from "@mantine/hooks"
import dayjs from "dayjs"
import type { DataTableColumn } from "mantine-datatable"
import { useEffect, useMemo, useState } from "react"
import * as R from "remeda"

const type: Record<ExamTypes, string> = {
  popQuiz: "Pop Quiz",
  midterms: "Midterms",
  finals: "Finals",
  advanced: "Advanced",
}

type AnswerType = keyof typeof type
type Month = (typeof MONTHS)[number]

type Filter = {
  q?: string
  month?: Month
  type?: AnswerType
  page: number
  limit: (typeof TABLE_PAGE_SIZES)[number]
  sortedBy?: string
  order?: "asc" | "desc"
}

export default function ExamPage() {
  const [filterParams, setFilterParams] = useSearchParamState<Filter>({
    q: undefined,
    month: undefined,
    type: undefined,
    page: 1,
    limit: 10,
    sortedBy: "date",
    order: "asc",
  })
  const [searchValue] = useDebouncedValue(filterParams.q, 500)
  const [selectedRecords, setSelectedRecords] = useState<ExamReturnType[]>([])

  const dataSource = useMemo(() => {
    if (!filterParams?.type) {
      return []
    }

    const exams = filterParams.month
      ? EXAMS[filterParams.type]?.filter(
          ({ date }) =>
            dayjs(date).month() === dayjs(filterParams.month, "MMMM").month()
        )
      : EXAMS[filterParams.type]

    const result =
      exams?.map((item, idx) => ({
        id: `items-${filterParams.type}-${item.date}-${idx}`,
        ...item,
      })) ?? []
    return result
  }, [filterParams])

  const [records, setRecords] = useState(dataSource)

  const chosenMonth = useMemo<Month[] | undefined>(() => {
    switch (filterParams?.type) {
      case "popQuiz": {
        return [
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
          "January",
          "February",
        ]
      }
      case "midterms": {
        return ["May", "October"]
      }
      case "finals": {
        return ["July", "November"]
      }
      case "advanced": {
        return ["February"]
      }
      default: {
        return undefined
      }
    }
  }, [filterParams?.type])

  const columns = useMemo<DataTableColumn<ExamReturnType>[]>(() => {
    return [
      {
        title: "Date",
        accessor: "date",
        width: 100,
        sortable: true,
      },
      {
        title: "Question",
        accessor: "question",
        width: "50%",
        filtering: !R.isEmpty(searchValue),
        filter: (
          <TextInput
            label="Search for a question"
            placeholder="Type something..."
            defaultValue={searchValue}
            rightSection={
              <Icons.Search color={themeVars.colors.gray[4]} stroke={1.4} />
            }
            onChange={(event) =>
              setFilterParams({
                q: event.currentTarget.value,
              })
            }
          />
        ),
      },
      {
        title: "Answer",
        accessor: "answer",
        width: "50%",
      },
    ]
  }, [setFilterParams, searchValue])

  //#region Effects
  useTitle("Exams")

  useEffect(() => {
    const data = R.pipe(
      dataSource.splice(
        (filterParams.page - 1) * filterParams.limit,
        filterParams.limit
      ),
      R.filter((item) =>
        searchValue
          ? item.question.toLowerCase().includes(searchValue.toLowerCase())
          : true
      ),
      R.sortBy((item) => filterParams.sortedBy || item.date)
    )
    setRecords(filterParams.order === "desc" ? data.reverse() : data)
  }, [
    dataSource,
    filterParams.order,
    filterParams.sortedBy,
    filterParams.page,
    searchValue,
    filterParams.limit,
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
      <Text fw={"bold"} pt={"md"}>
        Below is a complete list of all the correct test answers you'll need for
        every test day in Persona 4 Golden.
      </Text>
      <Flex
        gap={"md"}
        direction={{
          base: "column",
          md: "row",
        }}
        align={{
          md: "flex-end",
        }}
      >
        <Select
          clearable
          checkIconPosition="right"
          allowDeselect={false}
          label="Select a type"
          placeholder="Pick a type"
          defaultValue={filterParams.type}
          data={R.entries(type).map(([key, value]) => ({
            value: key,
            label: value,
          }))}
          onChange={(value) => {
            setFilterParams({
              type: value as AnswerType,
              month: undefined,
            })
          }}
        />
        {chosenMonth && (
          <Select
            clearable
            searchable
            checkIconPosition="right"
            label="Select a month"
            placeholder="Pick a month"
            disabled={!chosenMonth}
            allowDeselect={false}
            defaultValue={filterParams?.month}
            data={
              chosenMonth
                ? chosenMonth.map((month) => ({
                    label: month,
                    value: month,
                  }))
                : undefined
            }
            onChange={(value) =>
              setFilterParams({
                month: value as Month,
              })
            }
          />
        )}
      </Flex>

      <Datatable
        titleName="List of exams answer"
        dataSource={records}
        columns={columns}
        emptyText="No answer found"
        sortStatus={{
          columnAccessor: filterParams.sortedBy ?? "date",
          direction: filterParams.order ?? "asc",
        }}
        onSortChange={(status) =>
          setFilterParams({
            sortedBy: status.columnAccessor,
            order: status.direction,
          })
        }
        hasPagination
        pagination={{
          currentPage: +filterParams.page,
          limit: +filterParams.limit,
          totalPages: dataSource ? dataSource.length : 0,
          onPageChange: (page) => setFilterParams({ page: +page }),
          onLimitChange: (limit) =>
            setFilterParams({
              limit: limit as Filter["limit"],
              page: 1,
            }),
        }}
        isSelectable
        selectedRecords={selectedRecords}
        onSelectedRecords={setSelectedRecords}
      />
    </Container>
  )
}
